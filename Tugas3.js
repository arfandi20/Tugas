var s = '';
var b = 10;
for(var h = 1; h <= b; h++){
 for(var i = 0; i <= b - h; i++){
  s += ' ';
 }
 for(var j = 1; j < 2 * h; j++){
  s += '*';
 }
 s += '\n';   
}

console.log(s);

