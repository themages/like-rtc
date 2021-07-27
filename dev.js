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

  function mediaDevices() {
    return navigator.mediaDevices;
  }

  // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices

  function devicechange() {
    return mediaDevices();
  } // 客户端（user agent）所支持的约束属性（如帧率，窗口大小）

  function supportedConstraints() {
    return mediaDevices().getSupportedConstraints();
  } // Promise: 一个可用的媒体输入和输出设备的列表

  function enumerateDevices() {
    return mediaDevices().enumerateDevices();
  } // Promise: 提示用户选择显示器或显示器的一部分（例如窗口）

  function displayMedia(constraints) {
    return mediaDevices().getDisplayMedia(constraints);
  } // Promise: 在用户通过提示允许的情况下，打开系统上的相机或屏幕共享和/或麦克风

  function userMedia(constraints) {
    return mediaDevices().getUserMedia(constraints);
  } // DOMException 调用方法或访问 Web API 属性时发生的异常事件
  // name code message
  // https://developer.mozilla.org/zh-CN/docs/Web/API/DOMException

  /**
   * 媒体流相关
   * 流对象列表
   */

  var streamMap$1 = new Map(); // export const streamIdSet = new Set();

  // https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream
  function setStreamMap(stream) {
    var id = stream.id;

    if (!streamMap$1.has(id)) {
      streamMap$1.set(stream.id, stream);
    }
  }
  function getStreamMap(id) {
    return streamMap$1.get(id);
  }
  function hasStreamMap(id) {
    return streamMap$1.has(id);
  }
  function deleteStreamMap(id) {
    streamMap$1["delete"](id);
  }
  function clearStreamMap() {
    streamMap$1.clear();
  }
  function sizeStreamMap() {
    return streamMap$1.size;
  }

  /**
   * 媒体设备相关
   */
  // addEventListener

  function ondevicechange(listener) {
    devicechange().ondevicechange = listener;
  } // callback

  function getSupportedConstraints(callback) {
    callback(supportedConstraints());
  } // promise

  function getEnumerateDevices(_ref) {
    var handler = _ref.handler;
    enumerateDevices()
      .then(function (res) {
        handler(null, res);
      })
      ["catch"](handler);
  }
  function getDisplayMedia(_ref2) {
    var handler = _ref2.handler,
      constraints = _ref2.constraints;
    displayMedia(constraints)
      .then(function (stream) {
        handler(null, stream);
      })
      ["catch"](handler);
  }
  function getUserMedia(_ref3) {
    var handler = _ref3.handler,
      constraints = _ref3.constraints;
    userMedia(constraints)
      .then(function (stream) {
        handler(null, stream);
      })
      ["catch"](handler);
  }
  function streamMap() {
    return {
      setStreamMap: setStreamMap,
      getStreamMap: getStreamMap,
      hasStreamMap: hasStreamMap,
      deleteStreamMap: deleteStreamMap,
      clearStreamMap: clearStreamMap,
      sizeStreamMap: sizeStreamMap,
    };
  }
  /**
   * RTCPeerConnection 连接相关
   */

  exports.getDisplayMedia = getDisplayMedia;
  exports.getEnumerateDevices = getEnumerateDevices;
  exports.getSupportedConstraints = getSupportedConstraints;
  exports.getUserMedia = getUserMedia;
  exports.ondevicechange = ondevicechange;
  exports.streamMap = streamMap;

  Object.defineProperty(exports, "__esModule", { value: true });
});
