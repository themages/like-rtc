import {
  devicechange,
  supportedConstraints,
  enumerateDevices,
  displayMedia,
  userMedia,
} from "./media/interfaces/devices.js";
/**
 * 媒体设备相关
 * 事件、方法、回调
 */
// addEventListener
export function ondevicechange(listener) {
  devicechange().ondevicechange = listener;
}
// callback
export function getSupportedConstraints(callback) {
  callback(supportedConstraints());
}
// promise
export function getEnumerateDevices({ handler }) {
  enumerateDevices()
    .then((res) => {
      handler(null, res);
    })
    .catch(handler);
}
export function getDisplayMedia({ handler, constraints }) {
  displayMedia(constraints)
    .then((res) => {
      handler(null, res);
    })
    .catch(handler);
}
export function getUserMedia({ handler, constraints }) {
  userMedia(constraints)
    .then((res) => {
      handler(null, res);
    })
    .catch(handler);
}
