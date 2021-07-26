/* like-rtc version 1.0.0 */
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global.likeRTC = {})));
})(this, function (exports) {
  "use strict";

  function test() {
    return "123";
  }

  exports.test = test;

  Object.defineProperty(exports, "__esModule", { value: true });
});
/* follow me on https://github.com/tankan */
