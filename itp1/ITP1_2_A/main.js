Math.sign = Math.sign || function(x){
  x = +x;
  if( x === 0 || isNaN(x)) {
    return x;
  }
  return x > 0 ? 1 : -1;
};

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk){
  var line = chunk.toString().split('\n')[0].split(' ');
  var a = Number(line[0]);
  var b = Number(line[1]);
  
  switch (Math.sign(a - b)) {
  case 1:
    console.log("a > b");
    break;
  case -1:
    console.log("a < b");
    break;
  case 0:
    console.log("a == b");
  }
});
