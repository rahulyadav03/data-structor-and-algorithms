function FakeArray() {
  const target = {};

  Object.defineProperties(target, {
    length: {
      value: 0,
      writable: true
    },
    [Symbol.iterator]: {
      value: () => {
        let index = 0;

        return {
          next: () => ({
            done: index >= target.length,
            value: target[index++]
          })
        };
      }
    }
  });

  const isArrayIndex = function(p) {
    /* an array index is a property such that
         ToString(ToUint32(p)) === p and ToUint(p) !== 2^32 - 1 */

    const uint = p >>> 0;
    const s = uint + "";
    return p === s && uint !== 0xffffffff;
  };

  const p = new Proxy(target, {
    // get: function(target, property, value) {
    //   console.log(target, property, target.length);
    //   if (property === "length") {

    //   }
    // },
    set: function(target, property, value, receiver) {
      // http://www.ecma-international.org/ecma-262/6.0/index.html#sec-array-exotic-objects-defineownproperty-p-desc

      if (property === "length") {
        //         console.log("length--");
        // http://www.ecma-international.org/ecma-262/6.0/index.html#sec-arraysetlength
        const newLen = value >>> 0;
        const numberLen = +value;
        if (newLen !== numberLen) {
          throw RangeError();
        }
        const oldLen = target.length;
        if (newLen >= oldLen) {
          target.length = newLen;
          return true;
        } else {
          // this case gets more complex, so it's left as an exercise to the reader
          return false; // should be changed when implemented!
        }
      } else if (isArrayIndex(property)) {
        const oldLenDesc = Object.getOwnPropertyDescriptor(target, "length");
        const oldLen = oldLenDesc.value;
        // console.log("oldLen ", oldLen);
        const index = property >>> 0;
        if (index > oldLen && oldLenDesc.writable === false) {
          return false;
        }
        target[property] = value;
        if (index > oldLen || oldLen === index) {
          target.length = index + 1;
        }
        return true;
      } else {
        target[property] = value;
        return true;
      }
    }
  });

  return p;
}

let arrProxy = new FakeArray();

// arrProxy[0] = 10;
// arrProxy["rahul"] = 20;
// arrProxy[5] = 30;
// arrProxy["abc"] = "some text";
arrProxy[5] = 30;
console.log("len: ", arrProxy.length);
// console.log(arrProxy["abc"]);
// console.log("-", arrProxy[5]);
