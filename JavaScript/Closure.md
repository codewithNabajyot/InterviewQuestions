# Closure Interview questions

## 1) What is Closure?
#### Answer
Closure is created in the scope of a child function to keep the environment of its parent scope, even after the parent function is executed. Closure keeps only the property which is required by the child function.

```javascript
function outer(){

  let a = 1, b=2;
  return function inner(){
    console.log(a);
  }
}

console.dir(outer());
```
##### Output
![Image of Closure](https://github.com/codewithNabajyot/InterviewQuestions/blob/master/JavaScript/Images/Closure1.jpg)

As you can see there is a closure property created inside the scope of the inner function and it only includes **a** not **b**.  

## 2) Implement add(x)(y)(z). So that it will return the sum of x, y & z.
#### Answer
This is an example of Currying and Closure. 
```javascript
function sum(x){  
  return function(y){
    return function(z){
        return x+y+z;
    }
  }
}
console.log(sum(1)(2)(3)); // 6
```
The first inner function will have a closure x and the second inner function will have two closure property x and y. Hence second inner function will add the local variable z with  x and y (closure) and return the sum.

you can alternatively write the same code as 
```javascript
function sum(x){  
  return function(y){
      let _sumOfXandY = x+y;
    return function(z){
        return _sumOfXandY+z;
    }
  }
}
console.log(sum(1)(2)(3)); // 6
```

### 3) Implement "sum" function which will sum all the arguments. If the argument is an array, we should sum the items inside the array. It can be array of array as well
```javascript
sum(10,20,30)  //Output is 60
sum(100,200,[300,600])  //Output is 1200
sum(1,[2, [3, [4, 5]]])  //Output is 15
```
#### Answer
Here we'll use the concept of Closure and Reccurssion.
```javascript
function sum(...args){
    let result = 0; // This will be used as a closure in the reccursive methods.
    for(let a of args){
        // If it is a type array, it will reccurssive call the sum method.
        if(typeof(a) === 'object'){  
            result += sum(...a);
        }
        else{
            result = result+a;
        }
    }
    return result;
}
```

### 4) What will be the out put of the following.
```javascript
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log( i );
  }, 3000);
}
```
#### Answer
> 4
> 4
> 4
> 4

If you thought the output will be 1,2,3,4, then you hvae to read the reasons below.

The **setTimeout function** creates a closure variable i. Since i is of type *var* it will be hoisted and will be created at global/function level scope. After 3 seconds go by, the callback function is executed and it prints out the value of i, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.

### 5) What will be the out put of the following.
```javascript
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log( i );
  }, 3000);
}
```
#### Answer
> 0
> 1
> 2
> 3

This is confusing right, what diference let made so that the out put has changed.

This time also **setTimeout function** creates a closure variable i but since it is declared as let, the scope will be within the for loop. Now after 3 seconds, the each callback function refers to their closure of i, which is different for all. The first callback will have i=0 but second will have i =1 and hence forth.


I hope you enjoyed reading this. Please comment and let me know if you have any suggestions or want to add other closure related questions to this.


