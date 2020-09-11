function CustomArray() {
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
    return p === s;
  };

  const p = new Proxy(target, {
    set: function(target, property, value) {
      if (property === "length") {
        const newLen = value >>> 0;
        const numberLen = +value;
        if (newLen !== numberLen) {
          throw RangeError();
        }
        const oldLen = target.length;
        if (newLen > oldLen) {
          target[property] = newLen;
          return true;
        } else {
          return false;
        }
      } else if (isArrayIndex(property)) {
        const oldLenDesc = Object.getOwnPropertyDescriptor(target, "length");
        const oldLen = oldLenDesc.value;
        const index = property >>> 0;
        if (index > oldLen && oldLenDesc.writable === false) {
          return false;
        }
        target[property] = value;
        if (index > oldLen || index === oldLen) {
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

let arr = new CustomArray();
arr[5] = 30;
arr["rahul"] = 1;
console.log(arr.length); // should be 6
