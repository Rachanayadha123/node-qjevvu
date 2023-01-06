for counter in 1..100
  if (counter % 3 == 0) && (counter % 5 == 0)
	puts 'Amazon'
  elsif (counter % 3 == 0)
  	puts 'google'
  elsif (counter % 5 == 0)
  	puts 'facebook'
  else
  	puts counter
  end
end
