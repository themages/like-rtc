// https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream
import { streamMap } from "../../utils";
export function setStreamMap(stream) {
  const { id } = stream;
  if (!streamMap.has(id)) {
    streamMap.set(stream.id, stream);
  }
}
export function getStreamMap(id) {
  return streamMap.get(id);
}
export function hasStreamMap(id) {
  return streamMap.has(id);
}
export function deleteStreamMap(id) {
  streamMap.delete(id);
}
export function clearStreamMap() {
  streamMap.clear();
}
export function sizeStreamMap() {
  return streamMap.size;
}
