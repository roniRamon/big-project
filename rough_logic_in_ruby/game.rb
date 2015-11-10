$:.unshift "."
require 'DataModule'
require 'CharacterModule'
require 'ToolModule'

# Game class does all the work
# The structure looks like:
#   a) intro
#   b) choose your character
#   c) pick your goal
#   d) rest of the stuff
class Game

# inherit the methods in the modules
  include DataModule
  include CharacterModule
  include ToolModule

# the plan is to turn this into a loop
  def start
    intro
    choose
    goal
    play
  end

  def intro
    format_output TEXT[:intro]
    format_option TEXT[:option][:intro]
    format_input
    input = check_error_or_quit TEXT[:option][:intro], gets.chomp # prompts user input
  end

  def choose
    format_output TEXT[:choose]
    format_option TEXT[:option][:choose]
    format_input
    input = check_error_or_quit TEXT[:option][:choose], gets.chomp

# initializes an instance of the Hero class and stores it in an instance variable. 
    values = HEROS[input.intern].values
    @hero  = Hero.new *values

    display_stats input
  end

  def goal
    format_output TEXT[:goal]
    format_option TEXT[:option][:goal]
    format_input
    input = check_error_or_quit TEXT[:option][:goal], gets.chomp

    @goal = input.downcase

    format_output "Your goal is to #{@goal}."
  end

  def play
    puts "ON HOLD"
    Process.exit
  end

  def display_stats input
    format_output "You picked #{@hero.name}!"
    stats = HEROS[input.intern].map { |key, value| "#{key}: #{value}" }
    format_stats stats
  end
end

# Play game!
game = Game.new
game.start
