# These are helping tools to help format the output and check for errors.
# #format_output( *ary ) prints out each sentence on a separate line.
# #format_option( str ) prints out the options for the user.
# #format_input() just prints a "> " symbol to look nice.
# #format_stats( stats ) prints the user stats in a box
# #check_error_or_quit( err, input ) prints out error messages or quit
#   an error in this case are unavailable options.
module ToolModule
  def format_output *ary
    puts
    ary.each { |line| puts ". #{line}" }
  end

  def format_option str
    puts "? #{str}"
  end

  def format_input
    print "> "
  end

  def format_stats stats
    stats.map! { |stat| " " + stat }

    n = 60
    ary = ["*" * n, "Player Info".center(n), *stats, "*" * n]
    ary.each do |line|
      puts "*" + line.ljust(60) + "*"
    end
  end

  def check_error_or_quit err, input
    until err.downcase.split(" | ").include? input.downcase
      format_output TEXT[:error]
      format_option err
      format_input

      input = gets.chomp
    end
    input == "quit" ? Process.exit : input
  end
end
