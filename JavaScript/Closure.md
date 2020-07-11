### 1) What is Closure?
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
![Image of Closure](../images/Closure1.jpg)
