const items = [5,6,7,8,9]

 const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
]

const result = insert(items, 10, 100)
console.log(result);