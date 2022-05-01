//first problem
/* Insert a number. Print ‘yes’ if the number is prime,
 ‘no’ otherwise.*/

let isPrime=true;

function ispr(n){
  if(n===1){
    console.log("number is neither prime nor composite")
  }
  for(let i=2;i<=n-1;i++){
    if(n%i==0){
      isPrime=false;
      break;
    }
  }
  if(isPrime){
    console.log(`${n} is a prime number`);
  }else{
     console.log(`${n} is not a prime number`);
  }
}

ispr(5);
ispr(21);

//the second problem 
 /*
Write a program, to calculate the value of the following sequence:
1 - 1/3 + 1/5 - 1/7 + 1/9 + ….. + * 1/n */
let sum=1;
function sumof(n){
  if(n===1 || n===2){
    console.log(`${sum}`);
  }
   if(n%2===0){
    n--;
    }
  for(let i=3;i<=n;i+=4){
    sum -= 1/i;
  }
  for(let i=5;i<=n;i+=4){
    sum += 1/i;
  }
  console.log(`${sum} is our result`);
}

sumof(9);

console.log(1-1/3+1/5-1/7+1/9);

//the 3-rd problem
/* Given an array consisting from the arrays of numbers 
  (like a two-dimensional array).
Find sum of each row and print them as an array.
    [[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]] -> 
[12, 1, 13, 15] */
let newArr=[];
let sum=0;
function newArray(arr){
    for(let i=0;i<arr.length;i++){ 
      if(Array.isArray(arr[i])){
      for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j];
      }
    } 
      newArr.push(sum);
      sum=0;
  }
}

newArray([[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]);
console.log(newArr);


/* Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.
“dfgjkloyp” -> “fgdkljypo”
*/
let result=" ";

function strinnot(str){
  
 for(let i=0; i < str.length-2; i += 3)
  {
      result += str.substring(i+1,i+3) + str.charAt(i);
  }
  console.log(result);
}

strinnot('dfgjkloyp');