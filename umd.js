!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], n)
    : n(
        ((e =
          "undefined" != typeof globalThis ? globalThis : e || self).likeRTC =
          {}),
      );
})(this, function (e) {
  "use strict";
  function n() {
    return "devicechange";
  }
  (e.device = function () {
    return n;
  }),
    (e.test = function () {
      return "123";
    }),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
