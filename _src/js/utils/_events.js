'use strict';

const _events = {
  debounce(func, wait, immediate) {
    let timeout;
    return function() {
      let context = this,
        args = arguments;
      let later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  },

  throttle(callback, wait, immediate = false) {
    let timeout = null,
      initialCall = true;

    return function() {
      const callNow = immediate && initialCall;

      const next = () => {
        callback.apply(this, arguments);
        timeout = null;
      }

      if (callNow) {
        initialCall = false;
        next();
      }

      if (!timeout) timeout = setTimeout(next, wait);
    }
  }
};

export default _events;