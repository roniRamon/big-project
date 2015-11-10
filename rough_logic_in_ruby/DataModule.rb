# This module (or library) stores constant (or final) variables.
# The data structure used is a hash (or dictionary / associative array).
# List includes: 
#   a) list of items in backpack
#   b) goals the user can pick
#   c) text in an organized fashion
#   d) the people the player can choose to play
module DataModule
  BACKPACK = {}

  GOALS = {
      :heroic => "save prince",
      :milk   => "milk cow",
      :yum    => "eat the most delicious ice cream in the world before it melts"
  }

  TEXT = {
      :error  => "PLEASE ENTER A VALID INPUT!",
      :option => {
          :intro  => "Play | Quit",
          :choose => "Viking | Warrior Princess | Cheese | Pine Cone | Quit",
          :goal   => GOALS.values.join(" | ")
      },
      :intro  => "Welcome to the the game! What would you like to do?",
      :choose => "Select your character!",
      :goal   => "Select a goal!"
  }

  HEROS = {
      :viking => {
          :name         => "Viking",
          :health       => 5,
          :strength     => 12,
          :intelligence => 3,
          :money        => 100,
          :backpack     => ["potion", "potion", "elixer"]
      }, 
      :war_princess => {
          :name         => "Warrior Princess",
          :health       => 4,
          :strength     => 10,
          :intelligence => 6,
          :money        => 100,
          :backpack     => ["potion", "potion", "elixer"]
      }, 
      :cheese => {
          :name         => "Cheese",
          :health       => 8,
          :strength     => 9,
          :intelligence => 3,
          :money        => 100,
          :backpack     => ["potion", "potion", "elixer"]
      }, 
      :pine_cone => {
          :name         => "Pine Cone",
          :health       => 2,
          :strength     => 15,
          :intelligence => 3,
          :money        => 100,
          :backpack     => ["potion", "potion", "elixer"]
      }, 
  }
end
