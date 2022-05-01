/*Write a program that reads two strings for playing the game of Rock-Paper-Scissors. If
the strings entered by the user are not &#39;Paper&#39;, &#39;Rock&#39; or &#39;Scissors&#39;, the program keeps
on prompting the user to enter new values. If valid strings are inserted, repeat the loop,
until one of the sides wins. (You can use alert instead of console.log). */
const obj={
    scissors:0,
    paper:0,
    rock:0
   }
  let score1=0;
  let score2=0;
  
  function checking(str1,str2){
    if(obj.hasOwnProperty(str1) && obj.hasOwnProperty(str2)){
      return true;
    } else {
      console.log("Dear user,please enter valid values");
    }
  }
  
  function game(str1,str2){
    if(checking(str1,str2)){
     if(str1===str2) {
       console.log('the result is tie');
     }else{
    if (str1==='rock'){
       if(str2==='scissors'){
       console.log(`${str1}` + " is a winner,and score is: " + `${++score1}`);
       } else{
         console.log(`${str2}` + " is a winner,and score is: " + `${++score2}` + " loser's score is " + `${score1}`)
       }
    }
       if (str1==='paper'){
       if(str2==='rock'){
        console.log(`${str1}` + " is a winner,and score is: " + `${++score1}`);
       } else{
         console.log(`${str2}` + " is a winner,and score is: " + `${++score2}` + " loser's score is " + `${score1}`)
       }
       }
       if (str1==='scissors'){
       if(str2==='paper'){
        console.log(`${str1}` + " is a winner,and score is: " + `${++score1}`);
       } else{
         console.log(`${str2}` + " is a winner,and score is: " + `${++score2}` + " loser's score is " + `${score1}`)
       }
       }
    }
    }
  }
  
  game("rock","rock");  //output will be: the result is tie
  game("rock","scissors");  //output will be: rock is a winner,and score is: 1
  game("paper","rock");  //output will be: paper is a winner,and score is: 2
  game("apple","rock"); //output will be: Dear user,please enter valid values