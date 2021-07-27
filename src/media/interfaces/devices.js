// https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices
import { mediaDevices } from "../index";
// 媒体设备（例如相机，麦克风或扬声器）连接到系统或从系统中移除
export function devicechange() {
  return mediaDevices();
}
// 客户端（user agent）所支持的约束属性（如帧率，窗口大小）
export function supportedConstraints() {
  return mediaDevices().getSupportedConstraints();
}
// Promise: 一个可用的媒体输入和输出设备的列表
export function enumerateDevices() {
  return mediaDevices().enumerateDevices();
}
// Promise: 提示用户选择显示器或显示器的一部分（例如窗口）
export function displayMedia(constraints) {
  return mediaDevices().getDisplayMedia(constraints);
}
// Promise: 在用户通过提示允许的情况下，打开系统上的相机或屏幕共享和/或麦克风
export function userMedia(constraints) {
  return mediaDevices().getUserMedia(constraints);
}
// DOMException 调用方法或访问 Web API 属性时发生的异常事件
// name code message
// https://developer.mozilla.org/zh-CN/docs/Web/API/DOMException
