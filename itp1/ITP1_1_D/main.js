process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk){
  var line = chunk.toString().split('\n');
  var seconds = Number(line[0]);
  var hour_sec = 60 * 60;
  var minute_sec = 60;

  var h = Math.floor(seconds / hour_sec);
  var m = Math.floor((seconds % hour_sec) / minute_sec);
  var s = seconds % hour_sec % minute_sec;

  console.log(h + ':' + m + ':' + s);
});
