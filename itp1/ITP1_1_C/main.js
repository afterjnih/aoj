process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
  var line = chunk.toString().split('\n')[0].split(' ');
  var length = Number(line[0]);
  var width = Number(line[1]);
  console.log((length * width) + ' ' + (length * 2 + width * 2));
});
