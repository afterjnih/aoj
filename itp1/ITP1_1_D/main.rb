input = STDIN.readline
seconds = input.to_i
hour_sec = 60 * 60
minute_sec = 60

h = seconds / hour_sec
m = (seconds % hour_sec) / minute_sec
s = seconds % hour_sec % minute_sec

puts "#{h}:#{m}:#{s}"
