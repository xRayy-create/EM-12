import fs from 'fs';

const jsonData = fs.readFileSync('./data.json', 'utf-8'); 
const data = JSON.parse(jsonData); 
console.log(data);
const onlyProduct = data.map((product) => product.name)
console.log(onlyProduct)

console.log(
    data.map((product) => {
        productName: product.name,
        price: product.price,
})))    

// filter
console.log(data.filter((product) => {
  return product.inStock == true
}))

console.log(data.filter((product) => {
  return product.price > 100
}))

console.log(data.filter((product) => {
  return  product.category === "Electronics"
}))

console.log(data.filter((product) => {
  return product.rating >= 4.5
}))
//reduce

console.log(data.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price
}, 0))

console.log(data.reduce((accumulator, product) => {
  return accumulator + product.price; 
}, 0) / data.length);

console.log(
  data.reduce((min, product) => {
    return product.price < min.price ? product : min
}))


console.log(
  data.reduce((max, current) => {
    return current.price > max.price ? current : max
}))

console.log(data.flatMap(product => product.reviews))

console.log(
    data.reduce((acc, product) => acc + product.rating, 0) / data.filter(product => (product.inStock == true)).length
)

console.log(data.reduce((sum, product) => sum + product.reviews.length, 0))

console.log(data.map((product) => ({
  productName: product.name,
  productReviews: product.reviews,
})))
