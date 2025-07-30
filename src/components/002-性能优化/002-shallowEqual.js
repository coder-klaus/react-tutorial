// 判断参数是否是对象
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

// 浅比较函数
function shallowEqual(objA, objB) {
  // 如果引用相等，直接返回 true
  if (objA === objB) {
    return true
  }

  // 如果有一个不是对象，直接返回 false
  if (!isObject(objA) || !isObject(objB)) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  // 属性数量不同，直接返回 false
  if (keysA.length !== keysB.length) {
    return false
  }

  // 遍历 objA 的每个 key，判断 objB 是否有相同的 key 且值相等
  for (let key of keysA) {
    if (!Reflect.has(objB, key) || objA[key] !== objB[key]) {
      return false
    }
  }

  // 全部通过，说明浅层相等
  return true
}

// 🌟 测试用例
console.log(shallowEqual({a: 1, b: 2}, {a: 1, b: 2})) // true
console.log(shallowEqual({a: 1}, {a: 1, b: 2})) // false
console.log(shallowEqual({a: 1, b: 2}, {a: 1, b: 3})) // false
console.log(shallowEqual(null, {a: 1})) // false
console.log(shallowEqual({a: 1}, null)) // false
console.log(shallowEqual(1, 1)) // true
