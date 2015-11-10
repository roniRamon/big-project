# This module consists of characters classes in the game.
# The Character class is the parent class.
# The Hero and Enemy class are child classes.
# Initialize is the constructor.
# @variable are instance variables.
module CharacterModule

  class Character
    attr_accessor :name, :health, :strength, :intelligence

    def initialize name, health, strength, intelligence
      @name         = name
      @health       = health
      @strength     = strength
      @intelligence = intelligence
    end

    def hit enemy
      enemy.health -= rand strength
    end
  end

  class Hero < Character
    attr_accessor :money, :backpack

    def initialize name, health, strength, intelligence, money, backpack
      super name, health, strength, intelligence
      @money = money
      @backpack = backpack
    end
  end

  class Enemy < Character
  end
end
