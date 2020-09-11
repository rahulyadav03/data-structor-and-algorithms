function isArray(x) {
  return Boolean(x && typeof x.length !== "undefined");
}

class MyPromise {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new Error("Executor must be a function");
    }

    // Internal state. `$state` is the state of the promise, and `$chained` is
    // an array of the functions we need to call once this promise is settled.
    this.$state = "PENDING";
    this.$chained = [];

    // Implement `resolve()` and `reject()` for the executor function to use
    const resolve = res => {
      // A promise is considered "settled" when it is no longer
      // pending, that is, when either `resolve()` or `reject()`
      // was called once. Calling `resolve()` or `reject()` twice
      // or calling `reject()` after `resolve()` was already called
      // are no-ops.
      if (this.$state !== "PENDING") {
        return;
      }

      // If `res` is a "thenable", lock in this promise to match the
      // resolved or rejected state of the thenable.
      if (res != null && typeof res.then === "function") {
        return res.then(resolve, reject);
      }

      this.$state = "FULFILLED";
      this.$internalValue = res;
      // If somebody called `.then()` while this promise was pending, need
      // to call their `onFulfilled()` function
      for (const { onFulfilled } of this.$chained) {
        onFulfilled(res);
      }

      return res;
    };
    const reject = err => {
      if (this.$state !== "PENDING") {
        return;
      }
      this.$state = "REJECTED";
      this.$internalValue = err;
      for (const { onRejected } of this.$chained) {
        onRejected(err);
      }
    };

    // Call the executor function with `resolve()` and `reject()` as in the spec.
    try {
      // If the executor function throws a sync exception, we consider that
      // a rejection. Keep in mind that, since `resolve()` or `reject()` can
      // only be called once, a function that synchronously calls `resolve()`
      // and then throws will lead to a fulfilled promise and a swallowed error
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // Ensure that errors in `onFulfilled()` and `onRejected()` reject the
      // returned promise, otherwise they'll crash the process. Also, ensure
      // that the promise
      const _onFulfilled = res => {
        try {
          // If `onFulfilled()` returns a promise, trust `resolve()` to handle
          // it correctly.
          resolve(onFulfilled(res));
        } catch (err) {
          reject(err);
        }
      };
      const _onRejected = err => {
        try {
          reject(onRejected(err));
        } catch (_err) {
          reject(_err);
        }
      };
      if (this.$state === "FULFILLED") {
        _onFulfilled(this.$internalValue);
      } else if (this.$state === "REJECTED") {
        _onRejected(this.$internalValue);
      } else {
        this.$chained.push({
          onFulfilled: _onFulfilled,
          onRejected: _onRejected
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static race(arr) {
    return new MyPromise((resolve, reject) => {
      if (!isArray(arr)) {
        return reject(new Error("Promise.race accepts an array"));
      }
      for (var i = 0, len = arr.length; i < len; i++) {
        //Promise.resolve(arr[i]).then(resolve, reject);
        const _onFulfilled = res => {
          console.log(res);
          try {
            // If `onFulfilled()` returns a promise, trust `resolve()` to handle
            // it correctly.
            resolve(onFulfilled(res));
          } catch (err) {
            reject(err);
          }
        };

        const _onRejected = err => {
          try {
            reject(onRejected(err));
          } catch (_err) {
            reject(_err);
          }
        };

        if (arr[i].$state === "FULFILLED") {
          _onFulfilled(arr[i].$internalValue);
          break;
        } else if (arr[i].$state === "REJECTED") {
          _onRejected(arr[i].$internalValue);
          break;
        } else {
          arr[i].$chained.push({
            onFulfilled: _onFulfilled,
            onRejected: _onRejected
          });
        }
      }
    });
  }
}

// ----------------
// Examples
// ----------------

/*
let p = new MyPromise(resolve => {
  setTimeout(() => resolve("Hello"), 100);
});

p.then(res => console.log("res ", res));
*/

/*
p = new MyPromise((resolve, reject) => {
  setTimeout(() => reject(new Error("woops")), 100);
});

p.then(
  () => {},
  err => console.log("Async error:", err.stack)
);
*/

/*
p = new MyPromise(() => {
  throw new Error("woops");
});

p.then(
  () => {},
  err => console.log("Sync error:", err.stack)
);

*/

// Chaining

p = new MyPromise(resolve => {
  setTimeout(() => resolve("World"), 100);
});

p.then(res => new MyPromise(resolve => resolve(`Hello, ${res}`))).then(res =>
  console.log(res)
);

/*
p = new MyPromise(resolve => {
  setTimeout(() => resolve("World"), 100);
});

p.then(() => {
  throw new Error("woops");
}).then(
  () => {},
  err => console.log("Chained error", err.stack)
);

*/

/*

p = new MyPromise(resolve => {
  setTimeout(() => resolve("World"), 100);
});

p.then(() => {
  throw new Error("woops");
}).catch(error => {
  console.log("Chained error", error);
});

*/

/*

const promise1 = new MyPromise((resolve, reject) => {
  resolve("rahul 1");
});

const promise2 = new MyPromise((resolve, reject) => {
  resolve("ritu 2");
});

MyPromise.race([promise1, promise2]).then(value => {
  console.log(value());
});

*/
