function checkDigitsInName(name) {
   if(typeof name !== 'string'){
    return " Invalid Input";
   }
   for(let n in name){
    if(0<=name[n] || name[n]<=9)
        return true;
   }
   return false;
}

console.log(checkDigitsInName("R0aj")); // true
