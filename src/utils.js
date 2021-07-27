export function abstract(obj = {}) {
  const { instance, attr, ...params } = obj;
  const arr = Object.values(params);
  try {
    return instance[attr](...arr);
  } catch (error) {
    console.warn("实例：%o，方法名：%s，出错信息：%o", instance, attr, error);
  }
}

export function literacy(obj = {}) {
  const { instance, attr, value } = obj;
  try {
    return value ? (instance[attr] = value) : instance[attr];
  } catch (error) {
    console.warn("实例：%o，方法名：%s，出错信息：%o", instance, attr, error);
  }
}

export function readonly(obj = {}) {
  const { instance, attr } = obj;
  try {
    return instance[attr];
  } catch (error) {
    console.warn("实例：%o，方法名：%s，出错信息：%o", instance, attr, error);
  }
}

/**
 * 媒体流相关
 * 流对象列表
 */
export const streamMap = new Map();
// export const streamIdSet = new Set();
