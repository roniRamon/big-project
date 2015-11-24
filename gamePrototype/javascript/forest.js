$(document).ready(function(){
//hide penguins
	$('#penguin1').hide();
	$('#penguin2').hide();
	$('#penguin3').hide();  
	  
	var money = $("#money").val();
	var backpack = [];
	var health =  parseInt($("#health").val()) + 0;  
	var strength =  parseInt($("#strength").val()) + 0;
	var intelligence = parseInt($("#intelligence").val()) + 0;  
	  
// show array items
function arrayShowItem() 
{
    var index;
    var text = "<ul>";
    for (index = 0; index < backpack.length; index++) {
        text += "<li>" + backpack[index] + "</li>";
    }
    text += "</ul>";
    document.getElementById("backpack").innerHTML = text;
}
	
	//story 1 choice A 
	$( "#forest-choice-1" ).click(function() {
  		$("#headerGame").replaceWith('<h3 id="headerGame">chase and kill the goat: <br>You have killed the goat, but all that running made you hungry. You set up the fire and roast the goat.<br> (+30 Health)</h3>');
		$("#select1").empty();
		$("#select2").empty();
		$("#select3").empty();
		$("#select4").empty();
		$("#health-points").val(parseInt($("#health").val())+30);
		$('#select4').append('<input type="button" value="Next" id="next1" data-inline="true" data-mini="true" data-icon="check" class="next1">').trigger('create');
		$(".next1").click(function(){ 
				story2Forest();	
			});
	});
	
	//story 1 choice B
	$( "#forest-choice-2" ).click(function(){
  		$("#headerGame").replaceWith('<h3 id="headerGame"> Walk away: <br> When exiting the meadow you have found a goat-keeper sleeping in the bushes. You wake him up. ' + 
									 '\"Hey there. You should watch out for your goats, because some animal might attach them. There are plenty of wild ' +
									 'beasts in this forest, you know.\” <br>' +
									 'Goat-keeper thanks you for the warning and gives you some goat milk to drink.<br> +5 Health.</h3>');
		$("#select1").empty();
		$("#select2").empty();
		$("#select3").empty();
		$("#health-points").val(parseInt($("#health").val())+5);
		$('#select4').append('<input type="button" value="Next" id="next1" data-inline="true" data-mini="true" data-icon="check" class="next1">').trigger('create');
		$(".next1").click(function(){ 
				story2Forest();	
			});
	});
				

	//story 1 choice c									   
	$("#forest-choice-3" ).click(function(){
  		$("#headerGame").html('Pick flowers and rest: <br> You are hanging out on the meadow, watching goats when a grumpy goat-keeper comes to you.<br>' + 
									 'GK: \“What are you doing around my goats?\” <br>' + 
									 'You: \“Just hanging out and getting some rest. Is there something wrong?\”<br> '+
									 'GK: \“I already lost few goats this month, killed by some tramps like you. Go away or I’ll punch you.\”<br>' +
									 'What do you do?');
		var health =  parseInt($("#health").val()) + 0;
		var strength =  parseInt($("#strength").val()) + 0;
    	var intelligence = parseInt($("#intelligence").val()) + 0;
		$("#select1").empty();
		$("#select2").empty();
		$("#select3").empty();
		$('#select1').append('<input name="radio-choice-2" id="radio-choice-4" value="choice-1" type="radio"><label for="radio-choice-4">Fight</label>').trigger('create'); 
		$('#select2').append('<input name="radio-choice-2" id="radio-choice-5" value="choice-2" type="radio"><label for="radio-choice-5">Walk away</label>').trigger('create'); 	
		$('#radio-choice-4').click(function(){      //option C:A
			$("#headerGame").html('You attach the goat-keeper (Strength 100) Your.strength (a random between 0 to max.strength) Gk.strength (random between 0 to 100)');
			$("#select1").empty();
			$("#select2").empty();
			var gkScore = Math.floor((Math.random() * 100));
			var gkVSplayer = Math.floor((Math.random() *  strength));
			alert('goat-keeper score: ' + gkScore + '\n You\'r score :' + gkVSplayer );
			$('#select2').append('<p id=gkFightplayer>You:' + gkVSplayer + '</p>');
			if (gkScore < gkVSplayer) {    //gk lose
				$("#select1").empty();
				$("#select2").empty();
				$("#health-points").val(parseInt($("#health").val())+10);
				$("#money").val(parseInt($("#money").val()) + 50);	
				$("#headerGame").html(' You have beaten up the goat keeper and took his money and food  +50 money, +10 Health');
				$('#select1').append('<input type="button" value="Next" id="next1" data-inline="true" data-mini="true" data-icon="check" class="next1">').trigger('create');
				$(".next1").click(function(){ 
				story2Forest();	
			});
			}
			else if(gkScore >= gkVSplayer){   //gk wins
				$("#select1").empty();
				$("#select2").empty();
				$("#health-points").val(parseInt($("#health").val())-20);
				$("#headerGame").html('Goat keeper kicked your ass and left the meadow. (-20 Health) Feeling ashamed to be beaten up by a goat-keeper you are walking away promising yourself never to tell anyone about what has happened here. -20 Health');
				$('#select1').append('<input type="button" value="Next" id="next1" data-inline="true" data-mini="true" data-icon="check" class="next1">').trigger('create');
				$(".next1").click(function(){ 
				story2Forest();	
			});
			}
		});
		$('#radio-choice-5').click(function(){       //option C:B
			$("#headerGame").html('Goat keeper curse you but you don\'t case and simply walk away');
			$("#select1").empty();
			$("#select2").empty();	
			$('#select1').append('<input type="button" value="Next" id="next1" data-inline="true" data-mini="true" data-icon="check" class="next1">').trigger('create');
			$(".next1").click(function(){ 
				story2Forest();	
			});
			
		});
		
	});
	
//story 2	
	function story2Forest() {
		
		var selectedGoal = $("#select-choice-1 option:selected" ).text();  //goal
		var selectedChar = $("#select-choice-0 option:selected" ).text();  //cahr
		var health =  parseInt($("#health").val()) + 0;  
		var strength =  parseInt($("#strength").val()) + 0;
    	var intelligence = parseInt($("#intelligence").val()) + 0;
		
		$("#headerGame").html('You are walking on the road and meeting a merchant with goods. What do you do?');
		$("#select1").empty();
		$("#select2").empty();
		$("#select3").empty();	
		$("#select4").empty();
		$('#select1').append('<input name="radio-choice-3" id="radio-choice-6" value="choice-1" type="radio"><label for="radio-choice-6">Ignore him and move on.</label>').trigger('create'); 
		$('#select2').append('<input name="radio-choice-3" id="radio-choice-7" value="choice-1" type="radio"><label for="radio-choice-7">Attack and try to take his goods.</label>').trigger('create');
		$('#select3').append('<input name="radio-choice-3" id="radio-choice-8" value="choice-1" type="radio"><label for="radio-choice-8">Try to buy something.</label>').trigger('create'); 
		if(intelligence > 40)
		$('#select4').append('<input name="radio-choice-3" id="radio-choice-9" value="choice-1" type="radio"><label for="radio-choice-9">Start conversation</label>').trigger('create'); 
			
		//story2 opthion 1
		$('#radio-choice-6').click(function() {
			$("#headerGame").html('Merchant is trying to sell you something, but you reply him "I am in the rush to '+ selectedGoal +' and cannot talk with you now. Maybe next time.');
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();	
			$("#select4").empty();
			$('#select1').append('<input type="button" value="Next" id="next2" data-inline="true" data-mini="true" data-icon="check" class="next2">').trigger('create');
				$(".next2").click(function(){ 
					story3Forest(); //function to story 3	
				});
		});
		
		//story2 opthion 2
		$('#radio-choice-7').click(function() {
			$("#headerGame").html('Fight:<br> Merchant is fighting back. Strength 50. <br>'+
								  'You say: "My name is Inigo Montoya. You killed my father. Prepare to die".<br> '+
								  'your.strenght = random(from 0 to Strength.Max), merchant.strength = random(from 0 to 50)');
			var merchant = Math.floor((Math.random() * 50));
			var mrVSplayer = Math.floor((Math.random() *  strength));
			alert('Your attack: ' + mrVSplayer  + ' Merchant\'s attack:' + merchant);
			if(mrVSplayer < merchant) {   //player lose fight
				$("#headerGame").html('You have lost the fight but merchant lets your go. He feels pity for an orphant and gives you a bottle of whisky (+5 health, -10 intelligence) which you can put in your backpack or leave it.');   //#backpack !!!!!!!
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();	
				$("#select4").empty();
				$('#select1').append('<input name="radio-choice-3" id="radio-choice-10" value="choice-1" type="radio"><label for="radio-choice-10">Don\'t take it.</label>').trigger('create'); 
				$('#select2').append('<input name="radio-choice-3" id="radio-choice-11" value="choice-1" type="radio"><label for="radio-choice-11">take it..</label>').trigger('create');
					$('#radio-choice-11').click(function() {
						if(backpackCheak("whisky")){								
							alert("you alrady have the whisky");
						}
						else if((!backpackCheak("whisky") )&& backpack.length <= 4)
						{
							backpack.push("whisky");											 //add wisky to backpack	
							$("#health-points").val(parseInt($("#health").val())+5);   			//whisky add 5 health
							$("#smart-points").val(parseInt($("#intelligence").val())-10);   	//whisky sub 10 Intelligence
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
						story3Forest(); //function to story 3	
					});
					$('#radio-choice-10').click(function() {
						story3Forest(); //function to story 3	
					});
			}
			
			//plater win fight
			else if(mrVSplayer >= merchant) {   
				$("#headerGame").html('You have won the fight, but you leave the merchant go after taking his goods: money $80, knife (+5 Strength),  sword (+20 Strength), whisky (+5Health, -10 Intelligence)');    					//#backpack  !!!!!!!!!
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();	
				$("#select4").empty();
				$('#select1').append('<input name="radio-choice-3" id="radio-choice-10" value="choice-1" type="radio"><label for="radio-choice-10">Don\'t take it.</label>').trigger('create'); 
				$('#select2').append('<input name="radio-choice-3" id="radio-choice-11" value="choice-1" type="radio"><label for="radio-choice-11">take it..</label>').trigger('create');
					$('#radio-choice-11').click(function() {
						$("#money").val(parseInt($("#money").val()) + 80);  					//add money
						if(backpackCheak("knife")){								
							alert("you alrady have the knife");
						}
						else if((!backpackCheak("knife") )&& backpack.length <=4)
						{
							backpack.push("knife");											//add knife to backpack
							$("#strength-points").val(parseInt($("#strength").val())+5);	//knife add 5 to strength
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
						if(backpackCheak("sword")){								
							alert("you alrady have the sword");
						}
						else if((!backpackCheak("sword") )&& backpack.length <=4)
						{
							backpack.push("sowrd");											 //add sword to backpack
							$("#strength-points").val(parseInt($("#strength").val())+20);	//sword add 20 to strength
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}										
						if(backpackCheak("whisky")){								
							alert("you alrady have the whisky");
						}
						else if((!backpackCheak("whisky") )&& backpack.length <=4)
						{
							backpack.push("whisky");											 //add wisky to backpack	
							$("#health-points").val(parseInt($("#health").val())+5);   			//whisky add 5 health
							$("#smart-points").val(parseInt($("#intelligence").val())-10);   	//whisky sub 10 Intelligence
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
						story3Forest(); //function to story 3									
					});
					$('#radio-choice-10').click(function() {
						story3Forest(); //function to story 3	
					});
			}
		}); 
			
	//story2 opthion 3 try to buy somthing
		$('#radio-choice-8').click(function() {
			$("#headerGame").html('Merchant shows you his goods:');
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();	
			$("#select4").empty();
			$('#select1').append('<input name="radio-choice-3" id="radio-choice-10" value="choice-1" type="radio"><label for="radio-choice-10">sword (+20 Strength), price 500$</label>').trigger('create'); 
			$('#select2').append('<input name="radio-choice-3" id="radio-choice-11" value="choice-1" type="radio"><label for="radio-choice-11">whisky (+5Health, -10 Intelligence). price 50$ .</label>').trigger('create');
				if(intelligence > 30) {
					$('#select3').append('<input name="radio-choice-3" id="radio-choice-12" value="choice-1" type="radio"><label for="radio-choice-12">knife (+5 Strength) price 100$.</label>').trigger('create');
				}
			$('#select4').append('<input name="radio-choice-3" id="radio-choice-13" value="choice-1" type="radio"><label for="radio-choice-13">No thanks, I don\'t need anything.</label>').trigger('create');
			    //buy sword
				$("#radio-choice-10").click(function(){
					if(backpackCheak("sword")){								
						alert("you alrady have the sword");
					}
					else if((!backpackCheak("sword") )&& backpack.length <=4)
						{
						if(parseInt($("#money").val()) >= 500)
						{
							backpack.push("sowrd");											 //add sword to backpack
							$("#money").val(parseInt($("#money").val()) - 500);
							$("#strength-points").val(parseInt($("#strength").val())+20);	//sword add 20 to strength
							arrayShowItem();
						}
						else {
							alert("you dont have enough money");} 
					}
					else if(backpack.length >4)
					{
						alert("you dont have any more space in your backpack!!");
						arrayShowItem();
					}
					story3Forest(); //function to story 3	
				});
				// buy whisky
				$("#radio-choice-11").click(function(){
						if(backpackCheak("whisky")){								
							alert("you alrady have the whisky");
						}
						else if((!backpackCheak("whisky") )&& backpack.length <=4)
						{
							if(parseInt($("#money").val()) >= 50)
							{	
								backpack.push("whisky");											 //add wisky to backpack
								$("#money").val(parseInt($("#money").val()) - 50);
								$("#health-points").val(parseInt($("#health").val())+5);   			//whisky add 5 health
								$("#smart-points").val(parseInt($("#intelligence").val())-10);   	//whisky sub 10 Intelligence
								arrayShowItem();
							}
							else {
							alert("you dont have enough money");} 
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
					story3Forest(); //function to story 3									
				});
				//buy knife
				$("#radio-choice-12").click(function(){
					if(backpackCheak("knife")){								
							alert("you alrady have the knife");
					}
					else if((!backpackCheak("knife") )&& backpack.length <=4)
					{
						if(parseInt($("#money").val()) >= 100)
						{	
							backpack.push("knife");											 //add knife to backpack
							$("#money").val(parseInt($("#money").val()) - 100);
							$("#strength-points").val(parseInt($("#strength").val())+5);   			//knife add 5 strength   	
							arrayShowItem();
						}
						else {
							alert("you dont have enough money");} 
						}
					else if(backpack.length >4)
					{
						alert("you dont have any more space in your backpack!!");
					}
					story3Forest(); //function to story 3									
				});
				//buy nothing
				$("#radio-choice-13").click(function(){
					story3Forest(); //function to story 3		
				});		
		});
		
		//story 2 option 4 conversation
		$("#radio-choice-9").click(function(){
			$("#headerGame").html('Start conversation: <br> You Chat with the merchant for a while and he tells you that he saw a penguin just few days ago. So you are on the right way. Happy to hear that you bid good bye to the merchant and continue your search for a forest penguin.');
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();	
			$("#select4").empty();
			$('#select1').append('<input type="button" value="Next" id="next2" data-inline="true" data-mini="true" data-icon="check" class="next2">').trigger('create');
				$(".next2").click(function(){ 
				story3Forest(); //function to story 3		
			});
		});
	}
	  
// function 3 story 3 forest Hole 
function story3Forest() {
	
	$("#headerGame").html('You want to enter the forest. The forest is dark. It\'s night. You need some kind of light to show you the way. What do yo do?');
	$("#select1").empty();
	$("#select2").empty();
	$("#select3").empty();	
	$("#select4").empty();
	$('#select1').append('<input name="radio-choice-4" id="radio-choice-13B" value="choice-1" type="radio"><label for="radio-choice-13B">Go in without any light.</label>').trigger('create'); 
	$('#select2').append('<input name="radio-choice-4" id="radio-choice-14" value="choice-1" type="radio"><label for="radio-choice-14">Camp the night and wait for the morning.</label>').trigger('create');
		
	//story 3 option 1 go whithout a light
	$("#radio-choice-13B").click(function(){
			$("#headerGame").html('Go in without any light.<br> You enter the forest without any light. You cannot see anything, its all dark around you. You make a few steps and you fall into a deep hole in the ground. What do you do?');
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();	
			$("#select4").empty();
			$('#select1').append('<input name="radio-choice-4" id="radio-choice-15" value="choice-1" type="radio"><label for="radio-choice-15">Try to climb out with your hands.</label>').trigger('create'); 
			$('#select2').append('<input name="radio-choice-4" id="radio-choice-16" value="choice-1" type="radio"><label for="radio-choice-16">Start crying.</label>').trigger('create');
			$('#select3').append('<input name="radio-choice-4" id="radio-choice-17" value="choice-1" type="radio"><label for="radio-choice-17">You make a rope out of your cloth.</label>').trigger('create');
			$("#radio-choice-15").click(function(){
				$("#headerGame").html('Try to climb out with your hands. You try to climb up… you start climbing and in the middle of the hole you fall back and brake your back. Nobody know you are stuck there so after a few days you die of starvation.');
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();	
				$('#select1').append('<input type="button" value="Next" id="next3" data-inline="true" data-mini="true" data-icon="check" class="next3">').trigger('create');
					$(".next3").click(function(){ 
						alert("You are dead!!! Start over");
						window.location.replace('#home-page');      //player die
						location.reload();
				});
				
			});
			$("#radio-choice-16").click(function(){
				$("#headerGame").html('you start crying!! thinking that you will never leave this hole again. Someone heard your crying, you hear foot steps above you. someOne trow a rope to you, and you are climbing out. but when you get out there is nobody there!!!!');
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();
				$('#select1').append('<input type="button" value="Next" id="next3" data-inline="true" data-mini="true" data-icon="check" class="next3">').trigger('create');
				$(".next3").click(function(){ 
				story4Forest(); //function to story 4
				});
			});
			$("#radio-choice-17").click(function(){
				$("#headerGame").html('You make a rope out of your clothes. You are more intelligent than you gave your self credit (+10 intelligence) You got out of the hole.!');
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();
				$("#smart-points").val(parseInt($("#intelligence").val())+10);  //(+10 intelligence)
				$('#select1').append('<input type="button" value="Next" id="next3" data-inline="true" data-mini="true" data-icon="check" class="next3">').trigger('create');
				$(".next3").click(function(){ 
				story4Forest(); //function to story 4
				});
			});
	});
	//story 3 option 2 Camp the night 
	$("#radio-choice-14").click(function(){
		$("#headerGame").html('You camp through the night outside the forest. At night a robber comes and take 10$ from your money. you wake up to noises he made:');
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();	
			$("#select4").empty();
			$("#money").val(parseInt($("#money").val()) - 10);   // lose 10$
			$('#select1').append('<input name="radio-choice-4" id="radio-choice-15" value="choice-1" type="radio"><label for="radio-choice-15">you decide to fight him.</label>').trigger('create'); 
			$('#select2').append('<input name="radio-choice-4" id="radio-choice-16" value="choice-1" type="radio"><label for="radio-choice-16">you pretend your still asleep.</label>').trigger('create');
			$("#radio-choice-15").click(function(){
				$("#select1").empty();
				$("#select2").empty();
				$("#headerGame").html('You decide to fight him: <br>You want to fight him but he runs away leaving behind him every thing he took from you and he also drops an axe. you pick the ax (if you have place in your backpack ) and the money(+10$)');
				$("#money").val(parseInt($("#money").val()) + 10);
				if(backpack.length >=4)
				{
				  alert("You dont have place for the ex");
				}
				else if(backpack.length < 4 && (!backpackCheak("axe")))
				{
					backpack.push("axe");											 //add axe to backpack   			   	
					arrayShowItem();
				}
				else
				{
					alert("you already have an axe in your backpack.");
				}
				$('#select1').append('<input type="button" value="Next" id="next3" data-inline="true" data-mini="true" data-icon="check" class="next3">').trigger('create');
				$(".next3").click(function(){ 
				story4Forest(); //function to story 4		
				});	
			});
			$("#radio-choice-16").click(function(){
				$("#headerGame").html('You pretend your still asleep. the robber took some money. but your still alive… you can go in to the forest, it is morning.');
				$("#select1").empty();
				$("#select2").empty();
				$('#select1').append('<input type="button" value="Next" id="next3" data-inline="true" data-mini="true" data-icon="check" class="next3">').trigger('create');
				$(".next3").click(function(){ 
				story4Forest(); //function to story 4
				});
			});
	});					
}
	  
// function 4 story 4 forest River  
function story4Forest() {

	$("#headerGame").html('You reached a crossroad in an enchanted forest. You can:');
	$("#select1").empty();
	$("#select2").empty();
	$("#select3").empty();	
	$("#select4").empty();
	$('#select1').append('<input name="radio-choice-5" id="radio-choice-18" value="choice-1" type="radio"><label for="radio-choice-18">Go left to shortcut in the dark part of the forest.</label>').trigger('create'); 
	$('#select2').append('<input name="radio-choice-5" id="radio-choice-19" value="choice-1" type="radio"><label for="radio-choice-19">Go through the long and safe way of the forest.</label>').trigger('create');
	//shortcut
	$("#radio-choice-18").click(function(){
		$("#select1").empty();
		$("#select2").empty();
		$("#headerGame").html('Go left to shortcut in the dark part of the forest. you reached a one eye demon, if you want to pass this way you have to fight. roll the dice to see if you can bit him');
		$('#select1').append('<input type="button" value="Roll Dice" id="rolldice" data-inline="true" data-mini="true" data-icon="check" class="rolldice">').trigger('create');
			$(".rolldice").click(function(){ 
				$("#select1").empty();
				while(d1Player == d2Demon)
				{
					var d1Player = Math.floor(Math.random() * 6) + 1;
    				var d2Demon = Math.floor(Math.random() * 6) + 1;
    				alert("You rolled "+ d1Player +" And the Demon rolled " + d2Demon);
					if(d1Player > d2Demon)   //player win
					{
						$("#headerGame").html('you win! you can keep going through the path.');
						$("#select1").empty();
						$('#select1').append('<input type="button" value="Next" id="next4" data-inline="true" data-mini="true" data-icon="check" class="next4">').trigger('create');
						$(".next4").click(function(){ 
							story5Forest(); //function to story 5
						});
					}
					else if(d1Player < d2Demon)   //demon win
					{
						$("#headerGame").html('the demon wins! you lose (-10 health)to keep going you have to pay him 10$');
						$("#select1").empty();
						$("#health-points").val(parseInt($("#health").val())-10);
						if($("#money").val(parseInt(money) ) > 10)
						{
							$("#money").val(parseInt($("#money").val()) - 10);
							$('#select1').append('<input type="button" value="Next" id="next4" data-inline="true" data-mini="true" data-icon="check" class="next4">').trigger('create');
							$(".next4").click(function(){
								story5Forest();//next story 5
							});
						}
						else
						{
							$("#headerGame").html('You dont have enough money to give the demond! you have to go back to the long way');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Next" id="next4" data-inline="true" data-mini="true" data-icon="check" class="next4">').trigger('create');
							$(".next4").click(function(){ 
								//long way cope
								$("#headerGame").html('Go through the long and safe way of the forest: <br> The player keep walking and he reached a river which he have to cross. ');	
								$("#select1").empty();
								$("#select2").empty();
								$('#select1').append('<input name="radio-choice-5" id="radio-choice-20" value="choice-1" type="radio"><label for="radio-choice-20">You can build a raft if you have an ax/knife.</label>').trigger('create'); 
								$('#select2').append('<input name="radio-choice-5" id="radio-choice-21" value="choice-1" type="radio"><label for="radio-choice-21">Try to swim across.</label>').trigger('create');
								$('#select3').append('<input name="radio-choice-5" id="radio-choice-22" value="choice-1" type="radio"><label for="radio-choice-22"> Pay the river keeper 15$ to get him across safely.</label>').trigger('create');
								$("#radio-choice-20").click(function(){
									if(backpackCheak("knife")|| backpackCheak("ex"))
									{												 
										$("#headerGame").html('You user your ax/knife to build a raft. you reached the other side of the river but your tired. you lose 5 point of strength.(-5 strength) ');	
										$("#select1").empty();
										$("#select2").empty();
										$("#select3").empty();
										$("#strength-points").val(parseInt($("#strength").val())-5); 
										$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
										$(".next5").click(function(){ 
											story5Forest();//next story 5
										});	
									}
									else {
											alert("You dont have an axe or a knife");
										}
								});
								$("#radio-choice-21").click(function(){ 
									$("#headerGame").html('You try to swim across and you didn’t made it... You lose 5 point of strength, And you are back on the same(-5 strength)side of the river with the option to: ');	
									$("#select1").empty();
									$("#select2").empty();
									$("#select3").empty();
									$('#select1').append('<input name="radio-choice-5" id="radio-choice-20" value="choice-1" type="radio"><label for="radio-choice-20">You can build a raft if you have an ax/knife.</label>').trigger('create'); 
									$('#select2').append('<input name="radio-choice-5" id="radio-choice-22" value="choice-1" type="radio"><label for="radio-choice-22"> Pay the river keeper 15$ to get him across safely.</label>').trigger('create');
									$("#radio-choice-20").click(function(){
									if(backpackCheak("knife")|| backpackCheak("axe"))
									{												 
										$("#headerGame").html('You user your axe/knife to build a raft. you reached the other side of the river but your tired. you lose 5 point of strength.(-5 strength) ');	
										$("#select1").empty();
										$("#select2").empty();
										$("#select3").empty();
										$("#strength-points").val(parseInt($("#strength").val())-5); 
										$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
										$(".next5").click(function(){ 
											story5Forest();//next story 5 
										});	
									}
									else {
											alert("You dont have an ex or a knife");
										}
								});
								$("#radio-choice-22").click(function(){
									$("#headerGame").html('You payed 15$ to the river keeper. the river keeper got you across safely but stole from you 25$.');	
									$("#select1").empty();
									$("#select2").empty();
									$("#select3").empty();
									$("#money").val(parseInt($("#money").val()) - 40);
									$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
									$(".next5").click(function(){ 
										story5Forest();//next story 5
									});	
								});
							});
							$("#radio-choice-22").click(function(){
								$("#headerGame").html('You payed 15$ to the river keeper. the river keeper got you across safely but stole from you 25$.');	
								$("#select1").empty();
								$("#select2").empty();
								$("#select3").empty();
								$("#money").val(parseInt($("#money").val()) - 40);
								$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
								$(".next5").click(function(){ 
									story5Forest();//next story 5
								});	
							});
						});	
					}
				}
			}	
		 });
	});
	//long and safe way
	$("#radio-choice-19").click(function(){
		$("#headerGame").html('Go through the long and safe way of the forest: <br> The player keep walking and he reached a river which he have to cross. ');	
		$("#select1").empty();
		$("#select2").empty();
		$('#select1').append('<input name="radio-choice-5" id="radio-choice-20" value="choice-1" type="radio"><label for="radio-choice-20">You can build a raft if you have an ax/knife.</label>').trigger('create'); 
		$('#select2').append('<input name="radio-choice-5" id="radio-choice-21" value="choice-1" type="radio"><label for="radio-choice-21">Try to swim across.</label>').trigger('create');
		$('#select3').append('<input name="radio-choice-5" id="radio-choice-22" value="choice-1" type="radio"><label for="radio-choice-22"> Pay the river keeper 15$ to get him across safely.</label>').trigger('create');
		$("#radio-choice-20").click(function(){
			if(backpackCheak("knife")|| backpackCheak("ex"))
			{												 
				$("#headerGame").html('You user your ax/knife to build a raft. you reached the other side of the river but your tired. you lose 5 point of strength.(-5 strength) ');	
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();
				$("#strength-points").val(parseInt($("#strength").val())-5); 
				$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
					$(".next5").click(function(){ 
						story5Forest();//next story 5
					});	
		}
		else {
			alert("You dont have an ex or a knife");
		}
	})
		$("#radio-choice-21").click(function(){ 
			$("#headerGame").html('You try to swim across and you didn’t made it... You lose 5 point of strength, And you are back on the same(-5 strength)side of the river with the option to: ');	
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();
			$('#select1').append('<input name="radio-choice-5" id="radio-choice-20" value="choice-1" type="radio"><label for="radio-choice-20">You can build a raft if you have an axe/knife.</label>').trigger('create'); 
			$('#select2').append('<input name="radio-choice-5" id="radio-choice-22" value="choice-1" type="radio"><label for="radio-choice-22"> Pay the river keeper 15$ to get him across safely.</label>').trigger('create');
				$("#radio-choice-20").click(function(){
					if(backpackCheak("axe")|| backpackCheak("knife"))
					{												 
						$("#headerGame").html('You user your ax/knife to build a raft. you reached the other side of the river but your tired. you lose 5 point of strength.(-5 strength) ');	
						$("#select1").empty();
						$("#select2").empty();
						$("#select3").empty();
						$("#strength-points").val(parseInt($("#strength").val())-5); 
						$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
						$(".next5").click(function(){ 
							story5Forest();//next story 5 
						});	
					}
					else 
					{
						alert("You dont have an ex or a knife");
					}
				});
				$("#radio-choice-22").click(function(){
					$("#headerGame").html('You payed 15$ to the river keeper. the river keeper got you across safely but stole from you 25$.');	
					$("#select1").empty();
					$("#select2").empty();
					$("#select3").empty();
					$("#money").val(parseInt($("#money").val()) - 40);
					$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
					$(".next5").click(function(){ 
						story5Forest();//next story 5
					});	
			});
		});
		$("#radio-choice-22").click(function(){
			$("#headerGame").html('You payed 15$ to the river keeper. the river keeper got you across safely but stole from you 25$.');	
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();
			$("#money").val(parseInt($("#money").val()) - 40);
			$('#select1').append('<input type="button" value="Next" id="next5" data-inline="true" data-mini="true" data-icon="check" class="next5">').trigger('create');
			$(".next5").click(function(){ 
				story5Forest();//next story 5 
			});	
		});
	});

}
	
// function 5 story 5 forest Dead Body  
function story5Forest() {
	$("#headerGame").html('You are walking through the forest and you have tripped over something. When you look at it you can see human body covered with blood. What do you do?');
	$("#select1").empty();
	$("#select2").empty();
	$("#select3").empty();	
	$("#select4").empty();
	$('#select1').append('<input name="radio-choice-6" id="radio-choice-23" value="choice-1" type="radio"><label for="radio-choice-23">You are running away in case there is an attacker in the area.</label>').trigger('create'); 
	$('#select2').append('<input name="radio-choice-6" id="radio-choice-24" value="choice-1" type="radio"><label for="radio-choice-24">You examine the body and the surroundings.</label>').trigger('create');
	//running away
	$("#radio-choice-23").click(function(){
		$("#headerGame").html('You have run away in panic and lost one of your artefacts from your backpack ' + backpack[backpack.length -1]);
		$("#select1").empty();
		$("#select2").empty();
		backpack.splice(backpack.length-1, 1);
		arrayShowItem()
		$('#select1').append('<input type="button" value="Next" id="next8" data-inline="true" data-mini="true" data-icon="check" class="next8">').trigger('create');
				$(".next8").click(function(){ 
					forestEnd();
				});	
	});
	//examine the body
	$("#radio-choice-24").click(function(){
		$("#headerGame").html('While examining the body you have found some money (+30$) and following artefacts: axe (+30 strength), book “The Mythical Man Month” (+25/ 15* Intelligence), book “Biography of Grace Hopper” ((+20/ 10* Intelligence), apple (+5 Health).What do you do:');
		$("#select1").empty();
		$("#select2").empty();
		$("#money").val(parseInt($("#money").val()) + 30);
		$('#select1').append('<input type="button" value="Next" id="next7" data-inline="true" data-mini="true" data-icon="check" class="next7">').trigger('create');
			$(".next7").click(function(){ 
				$("#headerGame").html('Do you whant to take the Axe?');
				$("#select1").empty();
				$("#select2").empty();
				$('#select1').append('<input type="button" value="Yes" id="yesAxe" data-inline="true" data-mini="true" data-icon="check" class="yesAxe"><input type="button" value="No" id="noAxe" data-inline="true" data-mini="true" data-icon="check" class="noAxe">').trigger('create');
				$(".yesAxe").click(function(){ 
					axe();
					$("#headerGame").html('Do you whant to take the book “The Mythical Man Month”?');
					$("#select1").empty();
					$('#select1').append('<input type="button" value="Yes" id="yesbook1" data-inline="true" data-mini="true" data-icon="check" class="yesbook1"><input type="button" value="No" id="nobook1" data-inline="true" data-mini="true" data-icon="check" class="nobook1">').trigger('create');
					$(".yesbook1").click(function(){
						book1();
						$("#headerGame").html('Do you whant to take the book “Biography of Grace Hopper”?');
						$("#select1").empty();
						$('#select1').append('<input type="button" value="Yes" id="yesbook2" data-inline="true" data-mini="true" data-icon="check" class="yesbook2"><input type="button" value="No" id="nobook2" data-inline="true" data-mini="true" data-icon="check" class="nobook2">').trigger('create');
						$(".yesbook2").click(function(){
							book2();
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple"><input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
						$(".nobook2").click(function(){
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple"><input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
					});
					$(".nobook1").click(function(){
						$("#headerGame").html('Do you whant to take the book “Biography of Grace Hopper”?');
						$("#select1").empty();
						$('#select1').append('<input type="button" value="Yes" id="yesbook2" data-inline="true" data-mini="true" data-icon="check" class="yesbook2"><input type="button" value="No" id="nobook2" data-inline="true" data-mini="true" data-icon="check" class="nobook2">').trigger('create');
						$(".yesbook2").click(function(){
							book2();
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple"><input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
						$(".nobook2").click(function(){
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple">input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
					});
				});
				$(".noAxe").click(function(){
					$("#headerGame").html('Do you whant to take the book “The Mythical Man Month”?');
					$("#select1").empty();
					$('#select1').append('<input type="button" value="Yes" id="yesbook1" data-inline="true" data-mini="true" data-icon="check" class="yesbook1"><input type="button" value="No" id="nobook1" data-inline="true" data-mini="true" data-icon="check" class="nobook1">').trigger('create');
					$(".yesbook1").click(function(){
						book1();
						$("#headerGame").html('Do you whant to take the book “Biography of Grace Hopper”?');
						$("#select1").empty();
						$('#select1').append('<input type="button" value="Yes" id="yesbook2" data-inline="true" data-mini="true" data-icon="check" class="yesbook2"><input type="button" value="No" id="nobook2" data-inline="true" data-mini="true" data-icon="check" class="nobook2">').trigger('create');
						$(".yesbook2").click(function(){
							book2();
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple"><input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
						$(".nobook2").click(function(){
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple"><input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
					});
					$(".nobook1").click(function(){
						$("#headerGame").html('Do you whant to take the book “Biography of Grace Hopper”?');
						$("#select1").empty();
						$('#select1').append('<input type="button" value="Yes" id="yesbook2" data-inline="true" data-mini="true" data-icon="check" class="yesbook2"><input type="button" value="No" id="nobook2" data-inline="true" data-mini="true" data-icon="check" class="nobook2">').trigger('create');
						$(".yesbook2").click(function(){
							book2();
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple"><input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
						$(".nobook2").click(function(){
							$("#headerGame").html('Do you whant to take the Apple?');
							$("#select1").empty();
							$('#select1').append('<input type="button" value="Yes" id="yesApple" data-inline="true" data-mini="true" data-icon="check" class="yesApple"><input type="button" value="No" id="noApple" data-inline="true" data-mini="true" data-icon="check" class="noApple">').trigger('create');
							$(".yesApple").click(function(){
								apple();
								keepGoingStory5();
							});
							$(".noApple").click(function(){
								keepGoingStory5();
							});
						});
					});
					
				});
				
				
				
				
				
			});
		});
	
function axe(){
	if(backpack.length >=4)
	{
		alert("You dont have place for the axe");
	}
	else if(backpack.length < 4 && (!backpackCheak("axe")))
	{
		backpack.push("axe");											 //add ex to backpack   			   	
		arrayShowItem();
		$("#strength-points").val(parseInt($("#strength").val())+30);
	}
	else
	{
		alert("you already have an axe in your backpack.");
	}
}
	
function book1() {
	if(backpack.length >=4)
	{
		alert("You dont have place for the book “The Mythical Man Month” ");
	}
	else if(backpack.length < 4 && (!backpackCheak("book “The Mythical Man Month” ")))
	{
		backpack.push("book “The Mythical Man Month” ");											 //add book “The Mythical Man Month” to backpack   			   	
		arrayShowItem();
		$("#smart-points").val(parseInt($("#intelligence").val())+(parseInt($("#intelligence").val())*15)/25);
		
	}
	else
	{
		alert("you already have the book “The Mythical Man Month” in your backpack.");
	}
}
	
function book2(){
	if(backpack.length >=4)
	{
		alert("You dont have place for the book “Biography of Grace Hopper”");
	}
	else if(backpack.length < 4 && (!backpackCheak("book “Biography of Grace Hopper”")))
	{
		backpack.push("book “Biography of Grace Hopper”");											 //add book Biography of Grace Hopper” to backpack   			   	
		arrayShowItem();
		$("#smart-points").val(parseInt($("#intelligence").val())+(parseInt($("#intelligence").val())*10)/20);
	}
	else
	{
		alert("you already have the book “Biography of Grace Hopper” in your backpack.");
	}
}
	
function apple(){
	if(backpack.length >=4)
	{
		alert("You dont have place for the apple");
	}
	else if(backpack.length < 4 && (!backpackCheak("apple")))
	{
		backpack.push("apple");											 //add apple   			   	
		arrayShowItem();
		$("#health-points").val(parseInt($("#health").val())+5);
	}
	else
	{
		alert("you already have an apple in your backpack.");
	}
}
	
	function keepGoingStory5(){
		$("#headerGame").html('You walk away from the body and get back to the trail While you were taking further you find another body on the ground. What do you do?');
		$("#select1").empty();
		$("#select2").empty();
		$('#select1').append('<input name="radio-choice-5" id="radio-choice-25" value="choice-1" type="radio"><label for="radio-choice-25">You are running away in case there is an attacker in the area.</label>').trigger('create'); 
		$('#select2').append('<input name="radio-choice-5" id="radio-choice-26" value="choice-1" type="radio"><label for="radio-choice-26">You examine the body and the surroundings</label>').trigger('create');
		$("#radio-choice-25").click(function(){
			$("#headerGame").html('You have run away in panic and lost one of your artefacts from your backpack ' + backpack[backpack.length -1]);
			backpack.splice(backpack.length-1, 1);
			arrayShowItem()
			$("#select1").empty();
			$("#select2").empty();
			//go back to city + pinguin
			$('#select1').append('<input type="button" value="Next" id="next8" data-inline="true" data-mini="true" data-icon="check" class="next8">').trigger('create');
			$(".next8").click(function(){ 
				forestEnd();
			});	
		});
		$("#radio-choice-26").click(function(){
			$("#select1").empty();
			$("#select2").empty();
			$("#headerGame").html('When examining the body you have noticed that the man lying on the ground is only wounded and not dead. What do you do?');
			$('#select1').append('<input name="radio-choice-5" id="radio-choice-27" value="choice-1" type="radio"><label for="radio-choice-27">Kill him and take his sword (+40 strenght).</label>').trigger('create'); 
			$('#select2').append('<input name="radio-choice-5" id="radio-choice-28" value="choice-1" type="radio"><label for="radio-choice-28">Ask him what happened. surroundings</label>').trigger('create');
		//kill him
			$("#radio-choice-27").click(function(){
				$("#headerGame").html('You have killed the man. Do you want to take his sword?');
				$("#select1").empty();
				$("#select2").empty();
				$('#select1').append('<input name="radio-choice-5" id="radio-choice-29" value="choice-1" type="radio"><label for="radio-choice-29">Take it.</label>').trigger('create'); 
				$('#select2').append('<input name="radio-choice-5" id="radio-choice-30" value="choice-1" type="radio"><label for="radio-choice-30">Dont take it.</label>').trigger('create');
				$("#radio-choice-29").click(function(){
					$("#select1").empty();
					$("#select2").empty();
					$("#headerGame").empty();
					if(backpackCheak("sword"))
					{								
						alert("you alrady have the sword");
					}
					else if((!backpackCheak("sword") )&& backpack.length <=4)
					{
						backpack.push("sowrd");											 //add sword to backpack
						$("#strength-points").val(parseInt($("#strength").val())+40);	//sword add 20 to strength
						arrayShowItem();
					}
					else if(backpack.length >4)
					{
						alert("you dont have any more space in your backpack!!");
						arrayShowItem();
					}
					//go back to city + pinguin
					$('#select1').append('<input type="button" value="Next" id="next8" data-inline="true" data-mini="true" data-icon="check" class="next8">').trigger('create');
					$(".next8").click(function(){ 
						forestEnd();
					});	
				});
				$("#radio-choice-30").click(function(){
					$("#select1").empty();
					$("#select2").empty();
					//go back to city + pinguin
					$('#select1').append('<input type="button" value="Next" id="next8" data-inline="true" data-mini="true" data-icon="check" class="next8">').trigger('create');
					$(".next8").click(function(){ 
						forestEnd();
					});	
				});
			}); 
			//ask him what happend	
			$("#radio-choice-28").click(function(){
				$("#select1").empty();
				$("#select2").empty();
				$("#headerGame").html(' Man: “I am private Jon Black, from the Hub City garrison. Our partol were attacked by the great shadow. I couldn’t see what it was, but it was vicious and killed almost everyone. Can you help me get to my station so I can report to my Captain.”');
				$('#select1').append('<input name="radio-choice-5" id="radio-choice-29" value="choice-1" type="radio"><label for="radio-choice-29">Help the officer.</label>').trigger('create'); 
				$('#select2').append('<input name="radio-choice-5" id="radio-choice-30" value="choice-1" type="radio"><label for="radio-choice-30">Don’t help him.</label>').trigger('create');
				$("#radio-choice-29").click(function(){
					$("#select1").empty();
					$("#select2").empty();
					$("#headerGame").html('You: “Sure, I will help you.” You are taking Jon to the nearby garrison where he gives a report to his Captain. After this Jon thanks you for saving his life and gives you his lucky amulet (+100 Health) which you hang on your neck');
					$("#health-points").val(parseInt($("#health").val())+100);
					//go back to city + pinguin
					$('#select1').append('<input type="button" value="Next" id="next8" data-inline="true" data-mini="true" data-icon="check" class="next8">').trigger('create');
					$(".next8").click(function(){ 
						forestEnd();
					});	
				});
				$("#radio-choice-30").click(function(){
					$("#select1").empty();
					$("#select2").empty();
					$("#headerGame").html('You: “Sorry, I cannot help you. I’m on my way on a quest. Have a nice day”. You walk away and leave private where he was.');
					$('#select1').append('<input type="button" value="Next" id="next8" data-inline="true" data-mini="true" data-icon="check" class="next8">').trigger('create');
					//go back to city + pinguin
					$(".next8").click(function(){    
						forestEnd();
					});	
				});
			});
		}); 

	}
}

//the ending of the forst story and back to city	  
function forestEnd(){
	$("#headerGame").html('You have reached the end of the forest where you have found Forest Penguin. He follows you back to the city.');
	$("#select1").empty();
	$("#select2").empty();
	$("#select3").empty();
	$("#select4").empty();
	$('#select1').append('<input type="button" value="Next" id="next9" data-inline="true" data-mini="true" data-icon="check" class="next9">').trigger('create');
	$(".next9").click(function(){    	
		$('#penguin1').show();
		window.location.replace('#city-page');
		$( "#GoToTheForest" ).button({
			disabled: true
		});
	});
}
	
///valdetion for backpack(if element in array)
	function backpackCheak(ev) {
	if (backpack.indexOf(ev) > -1)
		return true;
	else
		return false;
}

	  
	  
///////////////////////////////////////////////////////////////Mountain ///////////////////////////////////////////////////////////////////////////////////////////////	 
	  
	
//Event 1: Mountain Lion 	  
  //Fight the big cat	  
  $("#mountain-choice-1").click(function(){
	  $('#mountain-headr').html('You\'re not going to let Garfield deter you from your quest. You put your fists up. The feline lunges.');
	  $("#mountain-select-1").empty();
	  $("#mountain-select-2").empty();
	  $("#mountain-select-3").empty();
	  var pumaScore = Math.floor((Math.random() * 20));
	  var player = Math.floor((Math.random() *  strength));
	  alert('Your attack: ' + player+ '. Mountain lion\'s attack: '+ pumaScore + '.' );
			if (player < pumaScore)  //puma win
			{   
				$("#health-points").val(parseInt($("#health").val())-10);
				$("#mountain-headr").html('The cat rips you to shreds. It begins gnawing on you, but decides you taste gross and walks off. -10 Health');
				$('#mountain-select-1').append('<input type="button" value="Next" id="Mnext1" data-inline="true" data-mini="true" data-icon="check" class="Mnext1">').trigger('create');
				$(".Mnext1").click(function(){ 
				peak();
				});
			}
			else if(player >= pumaScore) //puma lose
			{
				$("#mountain-headr").html('You grab the cat out of the air and hurl it off the mountainside. Manly. +3 Strength');
				$("#strength-points").val(parseInt($("#strength").val())+3);
				$('#mountain-select-1').append('<input type="button" value="Next" id="Mnext1" data-inline="true" data-mini="true" data-icon="check" class="Mnext1">').trigger('create');
				$(".Mnext1").click(function(){ 
				peak();
				});
			} 
  });

  //Run away	  
  $("#mountain-choice-2").click(function(){
	  $("#mountain-headr").html('You\'re allergic to cats. You decide to get out of there.');
	  $("#mountain-select-1").empty();
	  $("#mountain-select-2").empty();
	  $("#mountain-select-3").empty();
	  $("#mountain-select-1").append('<input name="radio-choice-10" id="mountain-choice-2-1" value="choice-1" type="radio"><label for="mountain-choice-2-1">Run ahead.</label>').trigger('create'); 
	  $("#mountain-select-2").append('<input name="radio-choice-10" id="mountain-choice-2-2" value="choice-1" type="radio"><label for="mountain-choice-2-2">Run the way you came from.</label>').trigger('create');
	  $('#mountain-choice-2-1').click(function(){     //Run ahead.
	  	$("#mountain-headr").html('You run towards the cat. Startled, it turns around and books it. Ain\'t gonna deal with someone crazy enough to chase a mountain lion.');
	  	$("#mountain-select-1").empty();
	  	$("#mountain-select-2").empty();
		$('#mountain-select-1').append('<input type="button" value="Next" id="Mnext1" data-inline="true" data-mini="true" data-icon="check" class="Mnext1">').trigger('create');
		$(".Mnext1").click(function(){ 
			peak();
		});  
	  });
	  $('#mountain-choice-2-2').click(function(){     //Run the way you came from.
	  	$("#mountain-headr").html('You back up, but your foot misses the ledge and you tumble down the mountain. Whoops. After a lot of rolling you\'re back where you started. -20 Health');
		$("#health-points").val(parseInt($("#health").val())-20);  
	  	$("#mountain-select-1").empty();
	  	$("#mountain-select-2").empty();
		$('#mountain-select-1').append('<input type="button" value="Next" id="Mnext1" data-inline="true" data-mini="true" data-icon="check" class="Mnext1">').trigger('create');
		$(".Mnext1").click(function(){ 
			peak();
		});  
	  });
	  
  });
  
	  //#################need to change to show option if intelligence > 12 
  //Show you're not a threat.	  
  $("#mountain-choice-3").click(function(){
	  $("#mountain-headr").html('Good thing you read that book on how to deescalate mountain lion encounters. You utter a few "meows", the cat nods in reply. It hands you something before leaving. Item: Mountain lion tooth (+25 Health)');
	  $("#mountain-select-1").empty();
	  $("#mountain-select-2").empty();
	  $("#mountain-select-3").empty();
	  if(backpackCheak("Mountain lion tooth"))
	  {								
		alert("you alrady have the Mountain lion tooth");
	  }
	  else if((!backpackCheak("Mountain lion tooth") )&& backpack.length <=4)
	  {
		backpack.push("Mountain lion tooth");							//add Mountain lion tooth to backpack
		$("#health-points").val(parseInt($("#health").val())+25); 	//Mountain lion tooth add 25 to health
		arrayShowItem();
	  }
	  else if(backpack.length >4)
	 {
		alert("you dont have any more space in your backpack!!");
		arrayShowItem();
	 }
	 $('#mountain-select-1').append('<input type="button" value="Next" id="Mnext1" data-inline="true" data-mini="true" data-icon="check" class="Mnext1">').trigger('create');
		$(".Mnext1").click(function(){ 
			peak();
		});   
  });
	
  //Event 2: Ascending The Peak
  function peak() {
  	$("#mountain-headr").html('You enter the Mountains. The penguin could be anywhere, but something tells you the only logical path to finding it would involve scaling the highest peak. Several monotonous hours after you begin your ascent, you come across a fairy. You could use a little break, and she\'s genuinely interested in how such an intriguing creature has found itself in the mountains.  After some time spent discussing your adventures, you catch the glisten of a jewel-encrusted sword in her backpack, it looks powerful. She notices your gaze and understands what it means; You want the sword. "Please, this sword is a family heirloom. It\'s value to me cannot be measured in coin; It\'s not for sale."');
  
  }
								   
	  
 ///////////////////////////////////////////////////////////////Dessert  ///////////////////////////////////////////////////////////////////////////////////////////////
	
//Continue walking	  
  $('#desert-choice-1').click(function(){
	  $("#desertHeadre").html('You continue walking. Your feet are growing heavy.');
	  $("#desert-select1").empty();
	  $("#desert-select2").empty();
	  $("#desert-select1").append('<input name="radio-choice-20" id="desert1" value="choice-1" type="radio"><label for="desert1">Continue walking...</label>').trigger('create'); 
	  if( parseInt($('#smart-points').val()) > 12 )
	  	$("#desert-select2").append('<input name="radio-choice-20" id="desert2" value="choice-2" type="radio"><label for="desert2">Investigate.</label>').trigger('create');
	  ////Continue walking	
	  $('#desert1').click(function(){
	  	$("#desertHeadre").html('You continue walking. Your feet are growing heavy. You look down and see what\'s wrong: You\'re sinking and you are already in the sand till your knees');
	  	$("#desert-select1").empty();
	  	$("#desert-select2").empty(); 
		$("#desert-select1").append('<input name="radio-choice-20" id="desert3" value="choice-1" type="radio"><label for="desert3">Make like a rock and roll.</label>').trigger('create'); 
	  	$("#desert-select2").append('<input name="radio-choice-20" id="desert4" value="choice-2" type="radio"><label for="desert4">Freak out!</label>').trigger('create'); 
	  		$('#desert3').click(function(){ 
				//Make like a rock and roll
				$("#desertHeadre").html('You do a barrel roll, again and again until you\'re out of the quicksand.');
	  			$("#desert-select1").empty();
	  			$("#desert-select2").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next2-2" data-inline="true" data-mini="true" data-icon="check" class="next2-2">').trigger('create');
				$(".next2-2").click(function(){ 
					desert2story(); //next event desert 2
				});
			});
		  	//Freak out!
		    $('#desert4').click(function(){ 
				$("#desertHeadre").html('You freak out hardcore, and continue to sink. Unfortunately the more you struggle the more you sink it. Now you realize that staying cool and rolling off would be wiser, but it\'s too late. You die. GAME OVER');
	  			$("#desert-select1").empty();
	  			$("#desert-select2").empty(); 
				//you die
				$('#desert-select1').append('<input type="button" value="Next" id="next2-2" data-inline="true" data-mini="true" data-icon="check" class="next2-2">').trigger('create');
				$(".next2-2").click(function(){ 
					alert("You are dead!!! Start over");
					window.location.replace('#home-page');      //player die
					location.reload();
				});
			});
	  });
	  //Investigate
	  $('#desert2').click(function(){
	  	$("#desertHeadre").html('You investigate the area and see that you are ankles deep in the sand. That is something not right. You return back by your steps without any sudden move. You have realized that was the beginning of quicksand. You would be in great trouble if you didn\'t notice that on time. Find a way around this dangerous area and circle around the quicksand.');
	  	$("#desert-select1").empty();
	 	$("#desert-select2").empty();
		$('#desert-select1').append('<input type="button" value="Next" id="next2-2" data-inline="true" data-mini="true" data-icon="check" class="next2-2">').trigger('create');
		$(".next2-2").click(function(){ 
			desert2story(); //next event desert 2
		});
	  });
	  
  });
  	  	  
//	Investigate  
//  if ( parseInt($('#smart-points').val()+0) > 12 )	>>>> need to add show option 2  
  $('#desert-choice-2').click(function(){
	 $("#desertHeadre").html('You get down on one knee for a closer look at the sand. It smells sugary. You lean in closer to smell the sand. Definitely sugar.');
	 $("#desert-select1").empty();
	 $("#desert-select2").empty(); 
	 $("#desert-select1").append('<input name="radio-choice-20" id="desert3" value="choice-1" type="radio"><label for="desert3">Continue walking.</label>').trigger('create');
	 $("#desert-select2").append('<input name="radio-choice-20" id="desert4" value="choice-1" type="radio"><label for="desert4">Lick the sand.</label>').trigger('create');
	 $('#desert3').click(function(){
	 $("#desertHeadre").html('You have decided that you are loosing your mind and have to leave as soon as possible from this horrible place. You continue walking until weird sensation is gone.');
		 $("#desert-select1").empty();
	 	 $("#desert-select2").empty(); 
		 $('#desert-select1').append('<input type="button" value="Next" id="next2-2" data-inline="true" data-mini="true" data-icon="check" class="next2-2">').trigger('create');
		 $(".next2-2").click(function(){ 
			desert2story(); //next event desert 2
		}); 
	 });
	 $('#desert4').click(function(){
	 $("#desertHeadre").html('It\'s super weird but you lick the sand. It tastes like sugar. It\'s definitely sugar. Yum. Your health is increasing (+5 Health)');
		 $("#desert-select1").empty();
	 	 $("#desert-select2").empty(); 
		 $("#health-points").val(parseInt($("#health").val())+5);
		 $('#desert-select1').append('<input type="button" value="Next" id="next2-2" data-inline="true" data-mini="true" data-icon="check" class="next2-2">').trigger('create');
		 $(".next2-2").click(function(){ 
			desert2story(); //next event desert 2
		 }); 
	  });
		
		 
  });

	  
	  
  function desert2story(){
	  	$("#desertHeadre").html('You are walking through the desert when somewhere on the horisont you see a figure approaching you. You recognize that he\'s a merchant with goods. What do you do?');
		$("#desert-select1").empty();
		$("#desert-select2").empty();
		$("#desert-select3").empty();	
		$("#desert-select4").empty();
		$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-26" value="choice-1" type="radio"><label for="radio-choice-26">Ignore him and move on.</label>').trigger('create'); 
		$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-27" value="choice-1" type="radio"><label for="radio-choice-27">Attack and try to take his goods.</label>').trigger('create');
		$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-28" value="choice-1" type="radio"><label for="radio-choice-28">Try to buy something.</label>').trigger('create'); 
		if(intelligence > 30)
			$('#desert-select4').append('<input name="radio-choice-3" id="radio-choice-29" value="choice-1" type="radio"><label for="radio-choice-29">Start conversation</label>').trigger('create'); 
			
		//story2 opthion 1
		$('#radio-choice-26').click(function() {
			$("#desertHeadre").html('Merchant is trying to sell you something, but you reply him "Naaaah. I\'m good." and you walk away.');
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();	
			$("#desert-select4").empty();
			$('#desert-select1').append('<input type="button" value="Next" id="next22" data-inline="true" data-mini="true" data-icon="check" class="next22">').trigger('create');
				$(".next22").click(function(){ 
					desert3story(); //function to story 3	desert
				});
		});
		
		//story2 opthion 2
		$('#radio-choice-27').click(function() {
			$("#desertHeadr").html('Merchant is fighting back. Strength 30. You say: "Hasta la vista baby!". your.strenght = random(from 0 to Strength.Max), merchant.strength = random(from 0 to 30)');
			var merchant2 = Math.floor((Math.random() * 50));
			var mrVSplayer2 = Math.floor((Math.random() *  strength));
			alert('Your attack: ' + mrVSplayer2  + ' Merchant\'s attack:' + merchant2);
			if(mrVSplayer2 < merchant2) {   //player lose fight
				$("#desertHeadr").html('-20 Health. You have lost the fight but merchant lets your go. He feels pity for you and your poor phrases and gives you an apple  (+5 health) which you can put in your backpack or leave it.');   //#backpack !!!!!!!
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();	
				$("#desert-select4").empty();
				$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-30" value="choice-1" type="radio"><label for="radio-choice-30">Don\'t take it.</label>').trigger('create'); 
				$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-31" value="choice-1" type="radio"><label for="radio-choice-31">take it..</label>').trigger('create');
				$("#health-points").val(parseInt($("#health").val())-20); 
					$('#radio-choice-31').click(function() {
						if(backpackCheak("apple")){								
							alert("you alrady have the apple");
						}
						else if((!backpackCheak("apple") )&& backpack.length <= 4)
						{
							backpack.push("apple");											 //add apple to backpack	
							$("#health-points").val(parseInt($("#health").val())+5);   		 //apple add 5 health   	
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
						desert3story(); //function to story 3	desert
					});
					$('#radio-choice-30').click(function() {
						 desert3story();//function to story 3	desert
					});
			}
			
			//player win fight
			else if(mrVSplayer2 >= merchant2) {   
				$("#desertHeadr").html('You have won the fight, but you leave the merchant go after taking his goods: money 80, knife (+25 Strength), sword (+50 Strength), apple (+25 Health, +5 Intelligence) Where do you want to put a knife');    					//#backpack  !!!!!!!!!
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();	
				$("#desert-select4").empty();
				$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-30" value="choice-1" type="radio"><label for="radio-choice-30">Don\'t take it.</label>').trigger('create'); 
				$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-31" value="choice-1" type="radio"><label for="radio-choice-31">take it..</label>').trigger('create');
					$('#radio-choice-31').click(function() {
						$("#money").val(parseInt($("#money").val()) + 80);  					//add money
						if(backpackCheak("knife")){								
							alert("you alrady have the knife");
						}
						else if((!backpackCheak("knife") )&& backpack.length <=4)
						{
							backpack.push("knife");											//add knife to backpack
							$("#strength-points").val(parseInt($("#strength").val())+25);	//knife add 25 to strength
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
						if(backpackCheak("sword")){								
							alert("you alrady have the sword");
						}
						else if((!backpackCheak("sword") )&& backpack.length <=4)
						{
							backpack.push("sowrd");											 //add sword to backpack
							$("#strength-points").val(parseInt($("#strength").val())+50);	//sword add 50 to strength
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}										
						if(backpackCheak("apple")){								
							alert("you alrady have the apple");
						}
						else if((!backpackCheak("apple") )&& backpack.length <=4)
						{
							backpack.push("apple");											 //add apple to backpack	
							$("#health-points").val(parseInt($("#health").val())+25);   			//apple add 25 health
							$("#smart-points").val(parseInt($("#intelligence").val())+5);   	//apple add 5 Intelligence
							arrayShowItem();
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
						 desert3story();//function to story 3	desert								
					});
					$('#radio-choice-30').click(function() {
						desert3story();//function to story 3 desert
					});
			}
		}); 
			
	//story2 opthion 3 try to buy somthing
		$('#radio-choice-28').click(function() {
			$("#desertHeadr").html('Merchant shows you his goods: ');    					//#backpack  !!!!!!!!!
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();	
			$("#desert-select4").empty();
			$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-32" value="choice-1" type="radio"><label for="radio-choice-32">sword (+40 Strength), price 800$</label>').trigger('create'); 
			$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-33" value="choice-1" type="radio"><label for="radio-choice-33">apple (+25Health, +5 Intelligence). price 40$</label>').trigger('create');
			if(intelligence > 30) 
			{
			  $('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-34" value="choice-1" type="radio"><label for="radio-choice-34">knife (+5 Strength) price 100$.</label>').trigger('create');
			}
			$('#desert-select4').append('<input name="radio-choice-3" id="radio-choice-35" value="choice-1" type="radio"><label for="radio-choice-35">No thanks, I don\'t need anything.</label>').trigger('create');
			    //buy sword
				$("#radio-choice-32").click(function(){
					if(backpackCheak("sword"))
					{								
						alert("you alrady have the sword");
					}
					else if((!backpackCheak("sword") )&& backpack.length <=4)
						{
						if(parseInt($("#money").val()) >= 800)
						{
							backpack.push("sowrd");											 //add sword to backpack
							$("#money").val(parseInt($("#money").val()) - 800);
							$("#strength-points").val(parseInt($("#strength").val())+40);	//sword add 20 to strength
							arrayShowItem();
						}
						else 
						{
							alert("you dont have enough money");
						} 
					}
					else if(backpack.length >4)
					{
						alert("you dont have any more space in your backpack!!");
						arrayShowItem();
					}
					desert3story(); //function to story 3	
				});
				// buy apple
				$("#radio-choice-33").click(function(){
						if(backpackCheak("apple"))
						{								
							alert("you alrady have the apple");
						}
						else if((!backpackCheak("apple") )&& backpack.length <=4)
						{
							if(parseInt($("#money").val()) >= 40)
							{	
								backpack.push("apple");											 //add apple to backpack
								$("#money").val(parseInt($("#money").val()) - 40);
								$("#health-points").val(parseInt($("#health").val())+25);   			//apple add 5 health
								$("#smart-points").val(parseInt($("#intelligence").val())+ 5);   	//apple add 5 Intelligence
								arrayShowItem();
							}
							else 
							{
							alert("you dont have enough money");
							} 
						}
						else if(backpack.length >4)
						{
							alert("you dont have any more space in your backpack!!");
						}
					desert3story(); //function to story 3									
				});
				//buy knife
				$("#radio-choice-34").click(function(){
					if(backpackCheak("knife"))
					{								
							alert("you alrady have the knife");
					}
					else if((!backpackCheak("knife") )&& backpack.length <=4)
					{
						if(parseInt($("#money").val()) >= 100)
						{	
							backpack.push("knife");											 //add knife to backpack
							$("#money").val(parseInt($("#money").val()) - 100);
							$("#strength-points").val(parseInt($("#strength").val())+5);   			//knife add 5 strength   	
							arrayShowItem();
						}
						else 
						{
							alert("you dont have enough money");
						} 
					}
					else if(backpack.length >4)
					{
						alert("you dont have any more space in your backpack!!");
					}
					desert3story();//function to story 3 desert									
				});
				//buy nothing
				$("#radio-choice-35").click(function(){
					desert3story();//function to story 3 deser	
				});		
		});
		
		//story 2 option 4 conversation   //need to be change option no there!!!! ########################
		$("#radio-choice-29").click(function(){
			$("#desertHeadre").html('Start conversation: ');    					
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();	
			$("#desert-select4").empty();
			$('#desert-select1').append('<input type="button" value="Next" id="next22" data-inline="true" data-mini="true" data-icon="check" class="next22">').trigger('create');
				$(".next22").click(function(){ 
				 desert3story();//function to story 3	desert	
			});
		});
  }
	  
//story 3 desert	  
function desert3story(){
	$("#desertHeadre").html('It is your 3rd day wandering aimlessly around the desert. You realize you haven\'t had water since the last adventure and you are now very very thirsty. Luckily you do have your iphone 5s on you. You decide to locate yourself on the map. You pull your iphone out. Unfortunately, the wifi does not work! Desperate, you look around your surroundings for water. You see no signs of water in your immediate path. What do you do?');    					
		$("#desert-select1").empty();
		$("#desert-select2").empty();
		$("#desert-select3").empty();	
		$("#desert-select4").empty();
		$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-36" value="choice-1" type="radio"><label for="radio-choice-36">Continue walking.</label>').trigger('create'); 
		$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-37" value="choice-1" type="radio"><label for="radio-choice-37">Dig into the ground.</label>').trigger('create');
		$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-38" value="choice-1" type="radio"><label for="radio-choice-38">Walk in the opposite path</label>').trigger('create');
			//Continue walking.
			$("#radio-choice-36").click(function(){
				$("#desertHeadre").html('You decide to keep walking. Within a few miles, your phone picks up wifi. You ask siri where to find water and siri points you towards Cactus Island about 10 miles away. As you continue to walk, you feeltired as hell. You really want to stop walking. You look up into the sky and notice the clouds are getting heavy and dark. Is this a sign of rain? What do you do?');    		
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();	
				$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-39" value="choice-1" type="radio"><label for="radio-choice-39">Wait for rain.</label>').trigger('create'); 
				$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-40" value="choice-1" type="radio"><label for="radio-choice-40">Continue walking towards Cactus Island.</label>').trigger('create');
				$("#radio-choice-39").click(function(){
					$("#desertHeadre").html('You decide to wait. Your phone has no wifi so you decide to play Angry Birds while you wait for the rain. 4 hours has passed and your phone is receiving wifi again. You look up the weather and notice the weather app says it will only be cloudy. You do some research and realize that it does not rain here. You decide to once again walk towards Cactus Island, 1 mile down the road. Health: -5.');
					$("#health-points").val(parseInt($("#health").val())-5);
					$("#desert-select1").empty();
					$("#desert-select2").empty();
					$("#desert-select3").empty();
					$('#desert-select1').append('<input type="button" value="Next" id="next23" data-inline="true" data-mini="true" data-icon="check" class="next23">').trigger('create');
						$(".next23").click(function(){ 
				 			$("#desertHeadre").html('You decide to continue walking. You finally arrive at Cactus Island. What a heavenly place!! You pick up a cactus, open it, drink the water, and are now replenished! Now you are replenished! Do you want to bring a cactus with you? ');
							$("#desert-select1").empty();
							$("#desert-select2").empty();
							$("#desert-select3").empty();
							$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-40" value="choice-1" type="radio"><label for="radio-choice-40">Yes, I might need water again.</label>').trigger('create'); 
							$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-41" value="choice-1" type="radio"><label for="radio-choice-41">NO, those things are spikey.  </label>').trigger('create');
							$("#radio-choice-40").click(function(){
								if(backpackCheak("cactus"))
								{								
									alert("you alrady have the cactus");
								}
								else if((!backpackCheak("cactus") )&& backpack.length <=4)
								{	
									backpack.push("cactus");											 //add cactus to backpack
									$("#health-points").val(parseInt($("#health").val())+3);   			//cactus add 3 strength  
									alert("You've obtained a cactus! But it poked you. (+5 Health, - 2 Health)");
									arrayShowItem();
								}
								else 
								{
								   alert("Sorry, your backpack is full. You cannot add anything more to your backpack");
								}
								desert4story();//next event desert 4
							}); //40
							$("#radio-choice-41").click(function(){
								$("#desertHeadre").html('You decide not to take a cactus. The narrator is laughing at your stupidity.');
								$("#desert-select1").empty();
								$("#desert-select2").empty();
								$('#desert-select1').append('<input type="button" value="Next" id="next24" data-inline="true" data-mini="true" data-icon="check" class="next24">').trigger('create');
								$(".next24").click(function(){ 
									desert4story();//next story 4 desert
								});
							});//41
						}); //.23
				}); //39
				//walk to cactus island
				$("#radio-choice-40").click(function(){
					$("#desertHeadre").html('You decide to continue walking. You finally arrive at Cactus Island. What a heavenly place!! You pick up a cactus, open it, drink the water, and are now replenished! Now you are replenished! Do you want to bring a cactus with you? ');
							$("#desert-select1").empty();
							$("#desert-select2").empty();
							$("#desert-select3").empty();
							$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-40" value="choice-1" type="radio"><label for="radio-choice-40">Yes, I might need water again.</label>').trigger('create'); 
							$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-41" value="choice-1" type="radio"><label for="radio-choice-41">NO, those things are spikey.  </label>').trigger('create');
							$("#radio-choice-40").click(function(){
								if(backpackCheak("cactus"))
								{								
									alert("you alrady have the cactus");
								}
								else if((!backpackCheak("cactus") )&& backpack.length <=4)
								{	
									backpack.push("cactus");											 //add cactus to backpack
									$("#health-points").val(parseInt($("#health").val())+3);   			//cactus add 3 strength  
									alert("You've obtained a cactus! But it poked you. (+5 Health, - 2 Health)");
									arrayShowItem();
								}
								else 
								{
								   alert("Sorry, your backpack is full. You cannot add anything more to your backpack");
								}
								desert4story();//next event desert 4
							}); //40
							$("#radio-choice-41").click(function(){
								$("#desertHeadre").html('You decide not to take a cactus. The narrator is laughing at your stupidity.');
								$("#desert-select1").empty();
								$("#desert-select2").empty();
								$('#desert-select1').append('<input type="button" value="Next" id="next24" data-inline="true" data-mini="true" data-icon="check" class="next24">').trigger('create');
								$(".next24").click(function(){ 
									desert4story();//next story 4 desert
								});
							}); //41
						}); //40
			});	 //36	
			// Dig into the ground
			$("#radio-choice-37").click(function(){
				$("#desertHeadre").html('You dig into the ground. 4 hours in, you\'ve come to the realization that you\'ve made no progress so far. What do you do?');    					
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-39" value="choice-1" type="radio"><label for="radio-choice-39">Continue digging.</label>').trigger('create'); 
				$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-40" value="choice-1" type="radio"><label for="radio-choice-40">Continue walking.</label>').trigger('create');
				//Continue digging
				$("#radio-choice-39").click(function(){
					$("#desertHeadre").html('You continue to dig. As you continue to dig, you begin to feel nauseous and fever-ish. Within the next minute, you fall into the hole you\'ve dug. You die.');
					$("#desert-select1").empty();
					$("#desert-select2").empty();
					//you die
					$('#desert-select1').append('<input type="button" value="Next" id="next23" data-inline="true" data-mini="true" data-icon="check" class="next23">').trigger('create');
					$(".next23").click(function(){ 
						alert("You are dead!!! Start over");
						window.location.replace('#home-page');      //player die
						location.reload();
					});
				});
				// Continue walking
				$("#radio-choice-40").click(function(){
					$("#desertHeadre").html(' You decide to continue walking. Within 4 hours, your phone begins to receive wifi signal. You pull out your phone and google for the nearest area with water. Siri tells you to goto Cactus Island which is located 5 miles from where you are. You begin walking towards Cactus Island.');
					$("#desert-select1").empty();
					$("#desert-select2").empty();
					$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-40B" value="choice-1" type="radio"><label for="radio-choice-40B"> walking towards Cactus Island.</label>').trigger('create'); 
					$("#radio-choice-40B").click(function(){
						$("#desertHeadre").html('You decide to continue walking. You finally arrive at Cactus Island. What a heavenly place!! You pick up a cactus, open it, drink the water, and are now replenished! Now you are replenished! Do you want to bring a cactus with you? ');
						$("#desert-select1").empty();
						$("#desert-select2").empty();
						$("#desert-select3").empty();
						$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-40" value="choice-1" type="radio"><label for="radio-choice-40">Yes, I might need water again.</label>').trigger('create'); 
						$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-41" value="choice-1" type="radio"><label for="radio-choice-41">NO, those things are spikey.  </label>').trigger('create');
						$("#radio-choice-40").click(function(){
							if(backpackCheak("cactus"))
							{								
								alert("you alrady have the cactus");
							}
							else if((!backpackCheak("cactus") )&& backpack.length <=4)
							{	
								backpack.push("cactus");											 //add cactus to backpack
								$("#health-points").val(parseInt($("#health").val())+3);   			//cactus add 3 strength  
								alert("You've obtained a cactus! But it poked you. (+5 Health, - 2 Health)");
								arrayShowItem();
							}
							else
							{
							   alert("Sorry, your backpack is full. You cannot add anything more to your backpack");
							}
							desert4story();//next event desert 4
						}); //40
							$("#radio-choice-41").click(function(){
								$("#desertHeadre").html('You decide not to take a cactus. The narrator is laughing at your stupidity.');
								$("#desert-select1").empty();
								$("#desert-select2").empty();
								$('#desert-select1').append('<input type="button" value="Next" id="next24" data-inline="true" data-mini="true" data-icon="check" class="next24">').trigger('create');
								$(".next24").click(function(){ 
									desert4story();//next story 4 desert
								});
							}); //41
				}); //40B
			}); //40
		}); //37
			//Walk in the opposite path
			$("#radio-choice-38").click(function(){
				$("#desertHeadre").html('You decide to walk in the path you came from. Within 4 hours, your phone picks up wifi signal. You pull out your phone and google for the nearest area with water. Siri tells you to goto Cactus Island, which is located 25 miles from where you are.What do you do?');    					
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-39" value="choice-1" type="radio"><label for="radio-choice-39">Walk towards Cactus Island</label>').trigger('create'); 
				$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-40" value="choice-1" type="radio"><label for="radio-choice-40">Continue walking towards the path you came from.</label>').trigger('create');
				//Walk towards Cactus Island
				$("#radio-choice-39").click(function(){
					$("#desertHeadre").html('You are getting more tired than ever (-10 Health)');
					$("#health-points").val(parseInt($("#health").val())-10);
					$("#desert-select1").empty();
					$("#desert-select2").empty();
					$('#desert-select1').append('<input type="button" value="Next" id="next24" data-inline="true" data-mini="true" data-icon="check" class="next24">').trigger('create');
					$(".next24").click(function(){ 
						if (health < 0)
						{
							$("#desertHeadre").html('You fall into your own death within the 8th mile to dehydration. GAME OVER');
							$("#desert-select1").empty();
							$("#desert-select2").empty();
							//you die
							$('#desert-select1').append('<input type="button" value="Next" id="next25" data-inline="true" data-mini="true" data-icon="check" class="next25">').trigger('create');
							$(".next25").click(function(){ 
								alert("You are dead!!! Start over");
								window.location.replace('#home-page');      //player die
								location.reload();
							});
						}
						else // you are still alive  
						{
            				$("#desertHeadre").html('You barely made it!! You have reached Cactus Island and drank water from cactuses (+5 Health).');
							$("#desert-select1").empty();
							$("#desert-select2").empty();
							$("#health-points").val(parseInt($("#health").val())+5);
							$('#desert-select1').append('<input type="button" value="Next" id="next23" data-inline="true" data-mini="true" data-icon="check" class="next25">').trigger('create');
							$(".next25").click(function(){ 
								desert4story();//next event desert 4
							});
						}
					});
				});
				//Continue walking towards the path you came from
				$("#radio-choice-40").click(function(){
					$("#desertHeadre").html('You decide to continue walking back from where you came from. Within 2 miles you notice a snake crawling around the desert. What do you do?');
					$("#desert-select1").empty();
					$("#desert-select2").empty();
					$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-41" value="choice-1" type="radio"><label for="radio-choice-41">Ignore the python.</label>').trigger('create'); 
					$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-42" value="choice-1" type="radio"><label for="radio-choice-42">Attempt to kill the python for its meat and blood.</label>').trigger('create');
					//Ignore the python
					$("#radio-choice-41").click(function(){
						$("#desertHeadre").html('You decide to ignore the python and walk. As you begin to walk, the python sneaks up from behind you. Before you can do anything to stop it, it strikes at you. (-20 Health)');
						$("#desert-select1").empty();
						$("#desert-select2").empty();
						$("#health-points").val(parseInt($("#health").val())-20); 
						$('#desert-select1').append('<input type="button" value="Next" id="next24" data-inline="true" data-mini="true" data-icon="check" class="next24">').trigger('create');
						$(".next24").click(function(){ 
							$("#desertHeadre").html('Fortunately, the snake is also weak due to dehydration and it\'s venom was not that strong. You are able to grab him, rip him apart and eat and drink its blood (+10 Health, +10 Strength). You feel rejuvenated and continue your search for penguin.');
							$("#desert-select1").empty();
							$("#desert-select2").empty();
							$("#health-points").val(parseInt($("#health").val())+10); 
							$("#strength-points").val(parseInt($("#strength").val())+10);
							$('#desert-select1').append('<input type="button" value="Next" id="next25" data-inline="true" data-mini="true" data-icon="check" class="next25">').trigger('create');
							$(".next24").click(function(){ 
								desert4story();//next story desert 4
						});
					});
					//Attempt to kill the python for its meat and blood
					$("#radio-choice-42").click(function(){
						$("#desertHeadre").html('You run unto the python and grab it by its mouth. The snake wiggles for a minute and then becomes motionless. You eat the python and feel rejuvenated (+15 Health, +15 Strength). You continue  your search for penguin.');
						$("#desert-select1").empty();
						$("#desert-select2").empty();
						$('#desert-select1').append('<input type="button" value="Next" id="next24" data-inline="true" data-mini="true" data-icon="check" class="next24">').trigger('create');
						$(".next24").click(function(){ 
							desert4story();//next story desert 4
						});
					});
			});	
		});
	});
}
	  
//story 4 desert Canyon Adventures
function desert4story(){
		$("#desertHeadre").html('After the tiring walking in the desert sands you reach an enormous canyon. It\'s very deep and foggy and you can\'t see the bottom or the other side if it. What do you do? ');		
		$("#desert-select1").empty();
		$("#desert-select2").empty();
		$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-50" value="choice-1" type="radio"><label for="radio-choice-50">You are making a loud shout right in the canyon.</label>').trigger('create'); 	
		$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-51" value="choice-1" type="radio"><label for="radio-choice-51">You decide to have a rest and wait for the fog to clear out.</label>').trigger('create'); 
		if (intelligence > 15)
			$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-52" value="choice-1" type="radio"><label for="radio-choice-52">You are cautiously exploring the edge of the canyon.</label>').trigger('create');
		//shout in canyon		
		$("#radio-choice-50").click(function(){
			$("#desertHeadre").html('Oh no! Suddenly the ground is shaking and the giant ugly troll is climbing out from the canyon! He has a stupid face and a cold. He is sneezing so hard that in few minutes everything is covered in his snivel. Yuk! What do you do?');
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();
			$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-53" value="choice-1" type="radio"><label for="radio-choice-53">You fight the troll.</label>').trigger('create'); 
			$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-54" value="choice-1" type="radio"><label for="radio-choice-54">You run like hell back to the desert.</label>').trigger('create'); 
			$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-55" value="choice-1" type="radio"><label for="radio-choice-55">You jump into the canyon right between troll\'s legs.</label>').trigger('create'); 
			//You fight the troll.
			$("#radio-choice-53").click(function(){
				$("#desertHeadre").html('You are fighting the troll. Luckily he is so sick and absent-minded he can\'t catch you. He gets upset, starts to cry and tells you his name is Karl. Very dirty and sticky you search his pockets and get water (+5 Health) and the giant needle. Do you want to accept the giant needle (+10 Strength)?');
				$("#health-points").val(parseInt($("#health").val())+5);
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-55" value="choice-1" type="radio"><label for="radio-choice-55">Yes.</label>').trigger('create'); 
				$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-56" value="choice-1" type="radio"><label for="radio-choice-56">No.</label>').trigger('create');
				$("#radio-choice-55").click(function(){
					if(backpackCheak("needle"))
					{								
						alert("you alrady have the needle");
					}
					else if((!backpackCheak("needle") )&& backpack.length <=4)
					{	
						backpack.push("needle");											 //add needle to backpack
						$("#strength-points").val(parseInt($("#strength").val())+10);   	//needle add 10 strength  
						alert("You've obtained a needle!");
						arrayShowItem();
					}
					else
					{
						alert("Sorry, your backpack is full. You cannot add anything more to your backpack");
					}
					desert5story(); //next event story 5
				});
				$("#radio-choice-56").click(function(){
					alert("You didn't take the needle");
					desert5story(); //next event story 5
				});	
			});
			//You run like hell back to the desert
			$("#radio-choice-54").click(function(){
				$("#desertHeadre").html('The troll catches you! He puts you in his pocket and carries back to his dank home at the bottom of the canyon. You have to cook, clean and bear the thundering sneezing till the rest of your life. GAME OVER');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				//you die
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
					$(".next30").click(function(){ 
						alert("You are dead!!! Start over");
						window.location.replace('#home-page');      //player die
						location.reload();
					});
			});
			//You jump into the canyon
			$("#radio-choice-55").click(function(){
				$("#desertHeadre").html('You are flying through the fog and land in the lake. You have injured your hand (-10 Health). You manage to find a path and return to your search of penguin very weak and wet.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
					$(".next30").click(function(){ 
						desert5story(); //next event story 5
					});
			});
		});
		// rest and wait for fog to clear		
		$("#radio-choice-51").click(function(){
			$("#desertHeadre").html('At twilight you hear flapping of the wings and the pair of coloured birds lands near you. The lizard-looking riders get down from them and demand that you leave. What do you do?');
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();
			$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-53" value="choice-1" type="radio"><label for="radio-choice-53">You bargain with them.</label>').trigger('create'); 
			$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-54" value="choice-1" type="radio"><label for="radio-choice-54">You jump on one of the birds and try to fly away.</label>').trigger('create'); 
			$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-55" value="choice-1" type="radio"><label for="radio-choice-55">You jump into the canyon and disappear in the fog.</label>').trigger('create');
			//You bargain with them
			$("#radio-choice-53").click(function(){
				$("#desertHeadre").html('You give them your shoes and in return they give you money (+200$).');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$("#money").val(parseInt($("#money").val()) + 200);
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
					$(".next30").click(function(){ 
						desert5story(); //next event story 5
					});
			});
			//You jump on one of the birds and try to fly away
			$("#radio-choice-54").click(function(){
				$("#desertHeadre").html('Bummer! The bird is smart! She makes a circle and flies back to the owner. He is not pleased and bites you. You are poisoned and stay in the desert forever. GAME OVER');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				//you die
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
				$(".next30").click(function(){ 
					alert("You are dead!!! Start over");
					window.location.replace('#home-page');      //player die
					location.reload();
				});
			});
			//>You jump into the canyon and disappear
			$("#radio-choice-55").click(function(){
				$("#desertHeadre").html('You reach the giant trampoline at the bottom and jump out of the canyon. You frostbite your ears during the flight (-5 Health), but find a tree with juicy lematos on the other side. You eat a fruit (+10 Health) and get back on the search for penguins.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$("#health-points").val(parseInt($("#health").val())+10);
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
				$(".next30").click(function(){ 
						desert5story(); //next event story 5
					});
			});
		});
		// explore canyon		
		$("#radio-choice-52").click(function(){
			$("#desertHeadre").html('You find a tiny path and descend into the canyon. At the lower lever you enter a lovely village of butter-eating leprechauns. They seem hospitable and serve you a dinner (which is made mainly of butter), but oh no! they are not going to let you leave! What do you do?');
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();
			$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-53" value="choice-1" type="radio"><label for="radio-choice-53">You distract them and jump deeper into the canyon.</label>').trigger('create'); 
			$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-54" value="choice-1" type="radio"><label for="radio-choice-54">You rely on your eloquence and begin to persuade them..</label>').trigger('create'); 
			$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-55" value="choice-1" type="radio"><label for="radio-choice-55">You decide to stay.</label>').trigger('create');
			//You distract them and jump deeper into the canyon.
			$("#radio-choice-53").click(function(){
				$("#desertHeadre").html('You are reaching the bottom of the canyon. You spend a lot of power by going through bushes (-5 Strength) and quench your thirst at a spring (+ 10 Health). Finally you manage to find a that could lead to penguins.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$("#health-points").val(parseInt($("#health").val())+10);
				$("#strength-points").val(parseInt($("#strength").val())-5); 
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
				$(".next30").click(function(){ 
					desert5story(); //next event story 5
				});
			});
			//You rely on your eloquence and begin to persuade them.
			$("#radio-choice-54").click(function(){
				$("#desertHeadre").html('Your detailed descriptions of all the yummy food besides butter that there is the world inspire leprechauns and they decide to leave the village and the canyon! They inflate the hot air balloon and take you further on your quest. As a gift you receive a pack of magical butter that makes one invulnerable. (+50 Health)');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$("#health-points").val(parseInt($("#health").val())+50);
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
				$(".next30").click(function(){ 
					desert5story(); //next event story 5
				});
			});
			//You decide to stay.
			$("#radio-choice-55").click(function(){
				$("#desertHeadre").html(' You learn the Irish step dance and grow a beard so long that sometimes you make a hammock out of it and spend all day swinging in it. The moist weather and buttery diet undermine your health. You stay in the canyon forever and give up the search for penguins and other quests. GAME OVER.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				//you die
				$('#desert-select1').append('<input type="button" value="Next" id="next30" data-inline="true" data-mini="true" data-icon="check" class="next30">').trigger('create');
					$(".next30").click(function(){ 
						alert("You are dead!!! Start over");
						window.location.replace('#home-page');      //player die
						location.reload();
					});
			});
		});		
}
 
//story 5 desert Pyramid 
function desert5story() {
	$("#desertHeadre").html('You enter a pyramid. Curiosity got the best of you and you decided to enter the pyramid. As you walk in, the door shuts tight and you are now trapped. You notice three items floating magically above a stone. Which of these items do you pick up?');		
		$("#desert-select1").empty();
		$("#desert-select2").empty();
		$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-60" value="choice-1" type="radio"><label for="radio-choice-60">compass.</label>').trigger('create'); 	
		$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-61" value="choice-1" type="radio"><label for="radio-choice-61">flame torch.</label>').trigger('create'); 
		$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-62" value="choice-1" type="radio"><label for="radio-choice-62">stack of gold.</label>').trigger('create');
		//compass
		$("#radio-choice-60").click(function(){
			$("#desertHeadre").html('You decide to pick up compass. The other items turns into dust. You walk down the path and a mummy suddenly appears from nowhere. You...');
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();
			$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-63" value="choice-1" type="radio"><label for="radio-choice-63">run for your life.</label>').trigger('create'); 
			$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-64" value="choice-1" type="radio"><label for="radio-choice-64">fight the mummy.</label>').trigger('create'); 
			$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-65" value="choice-1" type="radio"><label for="radio-choice-65">talk to the mummy.</label>').trigger('create');
			//run for your life.
			$("#radio-choice-63").click(function(){
				$("#desertHeadre").html('Along the way, you fall into a pit trap. You are lost. You continue walking around looking for an exit.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next35" data-inline="true" data-mini="true" data-icon="check" class="next35">').trigger('create');
				$(".next35").click(function(){ 
					$("#desertHeadre").html('Thanks to your compass You found the exit!');
					$("#desert-select1").empty();
					$('#desert-select1').append('<input type="button" value="Next" id="next36" data-inline="true" data-mini="true" data-icon="check" class="next36">').trigger('create');
						$(".next36").click(function(){ 
							desertEnd();//next event end of desert
						});
				}); //.35	
			}); //63
			//fight the mummye.
			$("#radio-choice-64").click(function(){
				$("#desertHeadre").html('You decide to fight the mummy.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next37" data-inline="true" data-mini="true" data-icon="check" class="next37">').trigger('create');
				$(".next37").click(function(){ 
					$("#desertHeadre").html('You don\'t have anything to fight mummy off, so mummy attacks you (-10 Health), but since you are easy target for her, gets quickly borred and leave you alone.');
					$("#desert-select1").empty();
					$("#health-points").val(parseInt($("#health").val())-10);
					$('#desert-select1').append('<input type="button" value="Next" id="next38" data-inline="true" data-mini="true" data-icon="check" class="next38">').trigger('create');
					$(".next38").click(function(){
						$("#desertHeadre").html('You manage to crawl back to the exit.');
						$("#desert-select1").empty();
						$('#desert-select1').append('<input type="button" value="Next" id="next39" data-inline="true" data-mini="true" data-icon="check" class="next39">').trigger('create');
						$(".next39").click(function(){
							desertEnd();//next event end of desert
						});
					});  //.38
				}); //.37
				 
			});//64
			//talk to the mummy
			$("#radio-choice-65").click(function(){
				$("#desertHeadre").html('You decide to talk the mummy. The mummy ends up being friendly and offers you beer. You accept it and go with mummy outside the pyramid to the local bar. After a beer or two you continue your search for desert penguin.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next39" data-inline="true" data-mini="true" data-icon="check" class="next39">').trigger('create');
					$(".next39").click(function(){
						desertEnd();//next event end of desert
					});
			});//65
			
		}); //60
		//flame
		$("#radio-choice-61").click(function(){
			$("#desertHeadre").html('You decide to pick up flame torch. The other items turns into dust. You walk down the path and a mummy suddenly appears from nowhere. You...');
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();
			$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-63" value="choice-1" type="radio"><label for="radio-choice-63">run for your life.</label>').trigger('create'); 
			$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-64" value="choice-1" type="radio"><label for="radio-choice-64">fight the mummy.</label>').trigger('create'); 
			$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-65" value="choice-1" type="radio"><label for="radio-choice-65">talk to the mummy.</label>').trigger('create');
			//run for your life.
			$("#radio-choice-63").click(function(){
				$("#desertHeadre").html('Along the way, you fall into a pit trap. You are lost. You continue walking around looking for an exit.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next35" data-inline="true" data-mini="true" data-icon="check" class="next35">').trigger('create');
				$(".next35").click(function(){ 
					$("#desertHeadre").html('You suddenly see a glimpse of light, but there are 50 tombs surrounding it. As you walk closer to the glimpse of light, the tombs open and the mummies all come out of it. Luckly you have a flame torch. You pull it out and all the mummies get scared and goes back into their tomb. You exit safely.');
					$("#desert-select1").empty();
					$('#desert-select1').append('<input type="button" value="Next" id="next36" data-inline="true" data-mini="true" data-icon="check" class="next36">').trigger('create');
					$(".next36").click(function(){ 
						desertEnd();//next event end of desert
					});
			});//.35
		});//63
			//fight the mummye.
			$("#radio-choice-64").click(function(){
				$("#desertHeadre").html('You decide to fight the mummy.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next37" data-inline="true" data-mini="true" data-icon="check" class="next37">').trigger('create');
				$(".next37").click(function(){ 
					$("#desertHeadre").html('You burn the mummy to a 2nd death and leave the pyramid.');
					$("#desert-select1").empty();
					$('#desert-select1').append('<input type="button" value="Next" id="next38" data-inline="true" data-mini="true" data-icon="check" class="next38">').trigger('create');
					$(".next38").click(function(){
							desertEnd();//next event end of desert
					});
				}); //.37
			});//64
			//talk to the mummy
			$("#radio-choice-65").click(function(){
				$("#desertHeadre").html('You decide to talk the mummy. The mummy ends up being friendly and offers you beer. You accept it and go with mummy outside the pyramid to the local bar. After a beer or two you continue your search for desert penguin.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next39" data-inline="true" data-mini="true" data-icon="check" class="next39">').trigger('create');
					$(".next39").click(function(){
						desertEnd();//next event end of desert
					});
			});//65
	}); //61
	    //gold
		$("#radio-choice-62").click(function(){
			$("#desertHeadre").html('You decide to pick up stack of gold. The other items turns into dust. You walk down the path and a mummy suddenly appears from nowhere. You...');
			$("#desert-select1").empty();
			$("#desert-select2").empty();
			$("#desert-select3").empty();
			$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-63" value="choice-1" type="radio"><label for="radio-choice-63">run for your life.</label>').trigger('create'); 
			$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-64" value="choice-1" type="radio"><label for="radio-choice-64">fight the mummy.</label>').trigger('create'); 
			$('#desert-select3').append('<input name="radio-choice-3" id="radio-choice-65" value="choice-1" type="radio"><label for="radio-choice-65">talk to the mummy.</label>').trigger('create');
			//run for your life.
			$("#radio-choice-63").click(function(){
				$("#desertHeadre").html('Along the way, you fall into a pit trap. You are lost. You continue walking around looking for an exit.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next35" data-inline="true" data-mini="true" data-icon="check" class="next35">').trigger('create');
				$(".next35").click(function(){ 
					$("#desertHeadre").html('You continue to walk around looking for an exit. You suddenly see a glimpse of light, but there are 50 tombs surrounding it. As you walk closer to the glimpse of light, the tombs open and the mummies all come out of it. You run in the opposite direction and FALL into another pit trap. 20 days have gone by and you are still lost. You look at the stack of gold you’ve picked up and feel stupid. All of a sudden, an angel mummy appears. It tells you that you have learned your lesson. In return, it wants the stack of gold back. What do you do?');
					$("#desert-select1").empty();
					$('#desert-select1').append('<input name="radio-choice-3" id="radio-choice-66" value="choice-1" type="radio"><label for="radio-choice-66">Don’t give back the gold.</label>').trigger('create'); 
					$('#desert-select2').append('<input name="radio-choice-3" id="radio-choice-67" value="choice-1" type="radio"><label for="radio-choice-67">Hand it the gold.</label>').trigger('create'); 
					//Don’t give back the gold
					$("#radio-choice-66").click(function(){
						$("#desertHeadre").html('the angel mummy tells you “TOO BAD”, gives an evil laugh and disappears. You cannot leave the pyramid and you die there. GAME OVER');
						$("#desert-select1").empty();
						$("#desert-select2").empty();
						//die
						$('#desert-select1').append('<input type="button" value="Next" id="next37" data-inline="true" data-mini="true" data-icon="check" class="next37">').trigger('create');
						$(".next37").click(function(){ 
							alert("You are dead!!! Start over");
							window.location.replace('#home-page');      //player die
							location.reload();
						});
					});//66
					//Hand it the gold
					$("#radio-choice-67").click(function(){
						$("#desertHeadre").html('You gave the gold back. You magically appear outside the pyramid.');
						$("#desert-select1").empty();
						$("#desert-select2").empty();
						$('#desert-select1').append('<input type="button" value="Next" id="next36" data-inline="true" data-mini="true" data-icon="check" class="next36">').trigger('create');
						$(".next36").click(function(){ 
							desertEnd();//next event end of desert
						});
					});//67
					
			});//.35
		});//63
			//fight the mummye.
			$("#radio-choice-64").click(function(){
				$("#desertHeadre").html('You decide to fight the mummy.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next37" data-inline="true" data-mini="true" data-icon="check" class="next37">').trigger('create');
				$(".next37").click(function(){ 
					$("#desertHeadre").html('You don\'t have anything to fight mummy off, so mummy attacks you (-10 Health), but since you are easy target for her, gets quickly borred and leave you alone.');
					$("#desert-select1").empty();
					$("#health-points").val(parseInt($("#health").val())-10);
					$('#desert-select1').append('<input type="button" value="Next" id="next38" data-inline="true" data-mini="true" data-icon="check" class="next38">').trigger('create');
					$(".next38").click(function(){
						$("#desertHeadre").html('You manage to crawl back to the exit.');
						$('#desert-select1').append('<input type="button" value="Next" id="next39" data-inline="true" data-mini="true" data-icon="check" class="next39">').trigger('create');
						$(".next39").click(function(){
							desertEnd();//next event end of desert
						});
					});//.38
				});//.37
			});//64
			//talk to the mummy
			$("#radio-choice-65").click(function(){
				$("#desertHeadre").html('You decide to talk the mummy. The mummy ends up being friendly and offers you beer. You accept it and go with mummy outside the pyramid to the local bar. After a beer or two you continue your search for desert penguin.');
				$("#desert-select1").empty();
				$("#desert-select2").empty();
				$("#desert-select3").empty();
				$('#desert-select1').append('<input type="button" value="Next" id="next39" data-inline="true" data-mini="true" data-icon="check" class="next39">').trigger('create');
				$(".next39").click(function(){
					desertEnd();//next event end of desert
				});
			});//65				
	});//62
}	

//the ending of the forst story and back to city	  
function desertEnd(){
	$("#desertHeadre").html('You have reached the end of the desert where you have found Desert Penguin. He follows you back to the city.');
	$("#desert-select1").empty();
	$("#desert-select2").empty();
	$("#desert-select3").empty();
	$("#desert-select4").empty();
	$("#desert-select1").append('<input type="button" value="Next" id="next9" data-inline="true" data-mini="true" data-icon="check" class="next9">').trigger('create');
	$(".next9").click(function(){    	
		$('#penguin3').show();
		window.location.replace('#city-page');
		$( "#GoToTheDesert" ).button({
			disabled: true
		});
	});
}
	
});