//reduce
// 1.求数组项之和
let arr = [1, 2, 3, 6, 0];
let sum = arr.reduce((prev, cur) => {
    return prev + cur;
}, 0);
// console.log(sum); //12
//2.求数组的最大项
let max = arr.reduce((prev, cur) => {
    console.log(prev, cur);
    return Math.max(prev, cur);
});
// console.log(max); //6
//3.去重
let otherSum = [2, 5, 7, 4, 4];
let newArr = otherSum.reduce((prev, cur) => {
    prev.indexOf(cur) === -1 && prev.push(cur);
    return prev;
}, [])
console.log(newArr);
//一组数的最大值
let someNum = [2, 5, 7];
let aa = Math.max(...someNum);
// console.log(aa); //7