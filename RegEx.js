function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}

console.log(shortcut('hello')) //> 'hll'
console.log(shortcut('how are you today?')) //> 'hw r y tdy?'
console.log(shortcut('complain')) //> 'cmpln'
console.log(shortcut('never')) //> 'nvr'
console.log(shortcut('HELLO')) //> 'HELLO'
console.log(shortcut('goodbye')) //> 'gdby'
console.log(shortcut('codewars')) //> 'cdwrs'