// 1. In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?
// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// start your work here:
function makeNegative (number) {
    if(number> 0){
        number=-1*number

    }
    else{
        number=1*number
    }
        console.log(number)
    // write the code for your function here
    
  
  }
  
  // call your function here
  makeNegative(1)
  makeNegative(-5)
  makeNegative(0)
  makeNegative(0.12)
  // 2. Given an array of integers, return a new array with each value doubled.
  // For example:
  // [1, 2, 3] --> [2, 4, 6]
  // For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.
  var num = [1,2,3];
  var i=''
  var y=''
  // write your function here
  function double(_y){
       y= y*2
        console.log(y)

  }
  // call your function here
  for(var i=0; i<3; i++) {
    var y =num[i]
    double(y)}

  // 3. You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.
  // Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.
  var x
  var a = [1,2,x,3]
  // write your function here
  function check(z){
      if(a.includes(x)){
          return true

      }
      else{
          return false
      }

  }
  // call your function here
  for(var i=0; i<5; i++) {
    var z =a[i]
    console.log(check(z))
}
    
  // 4. Bonus Exercise 
  // Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...
  
  // Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.
  
  // For example:
  // "The quick brown fox jumps over the lazy dog"
  
  // Should become:
  // "THE qck brwn FOX jmps vr THE lzy DOG"
  
  // For the purposes of this exercise, mid-word punctuation counts towards the character limit of a word.
  // e.g: "it's / I'm" should become: "t's / I'M"
