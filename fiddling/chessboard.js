/*Print a size by size 'chess board' with "#" and " " characters
*/
var a = "";
size = 10;

for(var i=1;i<=size;i++){
  for(j=1;j<=size;j++){
    if((i+j)%2){
      a += "#";
    }else{
      a+= " ";
    }
  }
  a += "\n";
}

console.log(a);
