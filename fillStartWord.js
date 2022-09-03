const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here

  if(word === null || word === undefined){
    return undefined
  }
  else if(word.includes(startWord)== true){
    return word
  }
  else{
    return startWord+word
  }
  // // 4
  //   if(word === null){
  //     return undefined
  //   }
  //   // 5 
  //   if(word.includes (undefined)){
  //     return undefined
  // // 3
  //    if(word.includses(startWord)){
  //     return word
  //    }
  // // 
}
module.exports = fillStartWord


