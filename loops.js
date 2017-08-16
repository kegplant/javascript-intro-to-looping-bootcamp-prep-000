function forLoop(array){
  var newArray=array;
  for(i=0;i<25;i++){
    if (i===1){
      newArray.push(`I am ${i} strange loop.`)
    } else {
      newArray.push(`I am ${i} strange loops.`)
    }
  }
  return newArray
}
function whileLoop(number){
  while (number>0) {
    console.log(--number);
  }
  return 'done'
}
function maybeTrue() {
return Math.random() >= 0.5
}
function doWhileLoop(array){
  newArray=array;
  do {
    newArray.pop();
  } while (newArray.length>0 && maybeTrue())
  return newArray;
}
