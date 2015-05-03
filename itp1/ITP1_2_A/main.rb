input = STDIN.readline
a = input.split(nil)[0].to_i
b = input.split(nil)[1].to_i

case a <=> b
when 1
  puts 'a > b'
when -1
  puts 'a < b'
when 0
  puts 'a == b'
end
