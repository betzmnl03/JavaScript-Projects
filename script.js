let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget=()=>{
  return Math.floor(Math.random()*9);
}

//console.log(generateTarget());
const compareGuesses=(userGuess,computerGuess,target)=>{
  
  let absDiff1=Math.abs(userGuess-target);
  let absDiff2=Math.abs(computerGuess-target);
  return absDiff1<=absDiff2?true:false;
  checkRange(userGuess);
}
const checkRange=(theGuess)=>{
  if(theGuess<<0 || theGuess>>9){
    window.alert("Please use a valid number between 0 and 9");
  }
};

const updateScore=winner=>{
  
  if(winner=== 'human'){
    humanScore=humanScore+1;
  }
  else if(winner==='computer'){
    computerScore=computerScore+1;
  }

}

const advanceRound=()=> currentRoundNumber=currentRoundNumber+1;
