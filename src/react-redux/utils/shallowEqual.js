function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function shallowEqual(obj1, obj2) {
  if (Object.is(obj1, obj2)) return true

  if (!isObject(obj1) || !isObject(obj2)) return false

  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  // 不能直接通过 Object.entries(obj1).forEach 遍历并返回新对象，因为 forEach 的回调函数返回值会被忽略。
  for (let [key, value] of Object.entries(obj1)) {
    if (!Object.hasOwn(obj2, key) || !Object.is(value, obj2[key])) return false
  }

  return true
}

