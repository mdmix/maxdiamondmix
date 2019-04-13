# def choose
#   puts "Do you like programming? Yes or no please."
#   choice = gets.chomp
#   if (choice.downcase == "yes")
#     puts "That\'s great!"
#   elsif (choice.downcase == "no")
#     puts "That\'s too bad!"
#   else
#     puts "That wasn\'t a yes or no."
#   end
# end
#
# choose

def choose
  puts "Do you like programming? Yes, no, or maybe please."
  choice = gets.chomp
  case choice.downcase
  when "yes"
    puts "That\'s great!"
  when "no"
    puts "That\'s too bad!"
  when "maybe"
    puts "Glad you are giving it a chance!"
  else
    puts "I have no idea what that means."
  end
end

choose
