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

/* Given an array of a size smaller than 100. It consists of numbers from 0 to 99 in any
order. Create a new array where each element from that array is placed under the index
of its value. Start from the smallest value and end with the biggest one. If there are
missing values, put in its places undefined.
[4, 3, 0, 9,] -> [0, undefined, undefined, 3, 4, undefined,
undefined, undefined, undefined, 9] */
const numbers = [4, 2, 8, 1, 5,12];
let newarr=[];
let n;
function arrs(arr){
  arr.sort((a,b)=>a - b);
  let n=arr.length-1;
  let maxord=arr[n];
  let j=0;
  for(let i=0;i<=maxord;i++){
    if(i!==arr[j]){ 
      newarr.push('undefined')
    }else{
       newarr.push(arr[j]);
      j++;
    } 
  }

  return newarr;
}

console.log(arrs([4, 3, 0, 9,]));


/*Write a function isEmpty(obj){} which returns true if the object is empty and false
otherwise. For example:
const obj = {};
isEmpty(obj) === true;
obj.name = ‘Aram’;
isEmpty(obj) === false; */

function isEmpty(obj){
  if(Object.keys(obj).length===0){
    return true;
  }else{
    return false;
  }
}

const obj = {};
console.log(isEmpty(obj));
obj.name='Aram';
console.log(isEmpty(obj));

/* Write a function sumAllAges(obj){} which calculates the sum of all ages. For example:
const obj = {
Aram: 20,
Samvel : 15
};
sumAllAges(obj) === 35 */

let result=0;
function sumAllAges(obj){
  for(let i in obj){
    if(typeof obj[i] ==='number'){
    result+=obj[i]
    }
  }
  return result;
}

const obj = {
Aram: 20,
Samvel : 15
};

console.log(sumAllAges(obj) === 35);

/* Write a function multiplyNumeric(obj){} which multiplies all numeric properties of obj
by 2 (modifiing the obj in place). For example:
const obj = {
age: 20,
salary : 1500,
name: ‘Aram’
};
after calling multiplyNumeric(obj) obj should look like this:
obj === {
age: 40,
salary : 3000,
name: ‘Aram’
}; */

function multiplyNumeric(obj){
  for(let i in obj){
    if(typeof obj[i] === 'number'){
      obj[i] *= 2;
    } 
  }
  return obj;
}

const obj1 = {
age: 20,
salary : 1500,
name: "Aram",
};

console.log(multiplyNumeric(obj1));

/*Given a phone number. 
  Write a function to clean it up, so it is valid.
The rules are as follows:
If the phone number is less than 10 digits assume that it is a bad number
If the phone number is longer than 10, then it is a bad number
If the phone number is 10 digits assume that it is good
If the phone number consists of 11 symbols and the first one is + and others are
numbers, then trim + and return remaining 10 digits.
If the phone number contains + symbol more than one, consider it as a bad number.
If the phone number contains + symbol not as the first character, consider it as a bad
number. */
function myFun(number){
  if(number.length < 10 || number.length > 11){
    console.log("it's a bad number")
  }else{ 
    console.log("number is good");
  }
  if(number.length === 11 && number.charAt(0) === '+'){
    console.log("This is a good number: " + number.slice(number.length, -1));
      }
    
  return number;
  }


myFun("+4567891234"); */

/* Write a program to check the validity of password input by users.
Validation:

● At least 1 letter between [a-z] and 1 letter between [A-Z].
● At least 1 number between [0-9].
● At least 1 character from [$#@].
● Minimum length 6 characters.
● Maximum length 16 characters. */

function validation(password){
  let test1=/\d/.test(password);
  let test2=/[a-z]/.test(password);
  let test3=/[A-Z]/.test(password);
  let test4=/[$#@]/.test(password);
  if(password.length >= 6 && password.length <=16){
    if(test1 && test2 && test3 && test4){
      console.log("password is valid")
    } else{
      console.log("please enter valid password")
    }
  }
}

validation("AagZha1#");
validation("NareAm");
validation("NareAmi12");
/* Write a recursive function to determine whether all digits of the number are odd or not.*/

function check(num){
  while(num>0){
  if(num % 2 === 0){
    return false;
  }
  num=parseInt(num/10);
  check(num);
  } 
  return true;
}

console.log(check(215));
console.log(check(135));

/*Write a function that accepts number and digit and returns true if number includes that digits or false vice
versa without using type conversions*/

function check(num,dig){
  while(num >0){
  if(num % 10 === dig){
    return true;
  }
  num=parseInt(num/10);
  }
  return false;
}

console.log(check(162,6));
console.log(check(612,7))

/* Write a function that for a given number returns true if it’s first digit is even and false if it is odd 
*/
function ar(num){
  let mu=num.toString();
  let arr=mu.split('');
  let yi=1;
  for(i=1;i<arr.length;i++){
    yi*=10;
  }
  if(parseInt(num/yi) % 2 === 0){
    return false;
  }else{
    return true;
  }
}
console.log(ar(1456))

/*Write a function which receives an object and returns an array of its properties*/

function objke(obj){
  let arr=[];
  for(let i in obj){
    arr.push(i);
  }
  return arr;
}

const obj={
  name: "Nanan",
  age: 14
}

console.log(objke(obj))
/*
Write a function that receives numbers as arguments and returns their sum no matter how many arguments
have been passed.*/
let sum1=0;
function num(...args){
  for(let i = 0;i<args.length;i++){
    sum1+=args[i];
  }
  return sum1;
}

console.log(num(1,4,5,8,9));

/*
Write a function that receives an array (of numbers) and element (number) and returns whether that element
is the sum of two elements from the array or not (return boolean)*/
function utn(arr,elem){
  let num=arr.length;
  for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;i<arr.length;i++){
      if(arr[i]+arr[j]===elem){
        return true;
      }
    }
  }
  return false;
}

console.log(utn([1,5,6,7,8,9],18))

/*sort the matrix */
function nm(matrix,n){
  let temp = new Array(n * n); 
  let k=0;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      temp[k++]=matrix[i][j];
    }
  }
  temp.sort();
  k=0;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      matrix[i][j]=temp[k++];
    }
  }
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      console.log( matrix[i][j] + " ");
    }
  }
}

let mat = [ [ 5, 4, 7 ],
               [ 1, 3, 8 ],
              [ 2, 9, 6 ] ];
let na = 3;
nm (mat, na);

 // first 10 prime numbers of js 

function primnum(n){
  let arr=[];
  let i=2;
 while(arr.length < n){
   if(isPrime(i)){
     arr.push(i);
   }
   i++;
 }
  return {
    arris: arr,
    arrlength: arr.length
  }
}

function isPrime(n){
  if(n<2){
    return false;
  }
  for(let i=2;i<n;i++){
    if(n%i ===0){
      return false;
    }
  }
  return true;
}

console.log(primnum(10));