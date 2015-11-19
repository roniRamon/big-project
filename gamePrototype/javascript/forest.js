		  
	var backpack = [];
	var money = $("#money").val();	
	
	//story 1 choice A 
	$( "#forest-choice-1" ).click(function() {
		alert("helo");
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
				$("#money").val(parseInt(money) + 50);	
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
				//add function to story 3	
			});
		});
		
		//story2 opthion 2
		$('#radio-choice-7').click(function() {
			$("#headerGame").html('Fight:<br> Merchant is fighting back. Strength 50. <br>'+
								  'You say: "My name is Inigo Montoya. You killed my father. Prepare to die".<br> '+
								  'your.strenght = random(from 0 to Strength.Max), merchant.strength = random(from 0 to 50)');
			var merchant = Math.floor((Math.random() * 50));
			var mrVSplayer = Math.floor((Math.random() *  strength));
			alert('Your attack: ' + merchant + ' Merchant\'s attack:' + mrVSplayer );
			if(mrVSplayer < merchant) {   //player lose fight
				$("#headerGame").html('You have lost the fight but merchant lets your go. He feels pity for an orphant and gives you a bottle of whisky (+5 health, -10 intelligence) which you can put in your backpack or leave it.');   //#backpack !!!!!!!
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();	
				$("#select4").empty();
				$('#select1').append('<input name="radio-choice-3" id="radio-choice-10" value="choice-1" type="radio"><label for="radio-choice-10">Don\'t take it.</label>').trigger('create'); 
		$('#select2').append('<input name="radio-choice-3" id="radio-choice-11" value="choice-1" type="radio"><label for="radio-choice-11">take it..</label>').trigger('create');
				
			}
			
			//plater win fight
			if(mrVSplayer >= merchant) {   
				$("#headerGame").html('You have won the fight, but you leave the merchant go after taking his goods: money $80, knife (+5 Strength),  sword (+20 Strength), whisky (+5Health, -10 Intelligence)');    					//#backpack  !!!!!!!!!
				$("#money").val(parseInt(money) + 80);  					//add money
				if(!(backpackCheak("knife"))){
						backpack.push("sword");
						document.getElementById("demo").innerHTML = backpack;
					}
					else{
						alert("you alrady have the sword");
					}
				backpack.push("knife");										//add knife to backpack
				$("#strength-points").val(parseInt($("#strength").val())+5); //knife add 5 to strength
				backpack.push("sowrd");											//add sword to backpack
				$("#strength-points").val(parseInt($("#strength").val())+20); //sword add 20 to strength
				backpack.push("whisky");									//add wisky to backpack	
				$("#health-points").val(parseInt($("#health").val())+5);   //whisky add 5 health
				$("#health-points").val(parseInt($("#health").val())+5);   //whisky sub 10 Intelligence
				$("#select1").empty();
				$("#select2").empty();
				$("#select3").empty();	
				$("#select4").empty();
				$('#select1').append('<input name="radio-choice-3" id="radio-choice-10" value="choice-1" type="radio"><label for="radio-choice-10">Don\'t take it.</label>').trigger('create'); 
		$('#select2').append('<input name="radio-choice-3" id="radio-choice-11" value="choice-1" type="radio"><label for="radio-choice-11">take it..</label>').trigger('create');
			}
			
		}); 
			
	//story2 opthion 2
		$('#radio-choice-8').click(function() {
			$("#headerGame").html('Merchant shows you his goods:');
			$("#select1").empty();
			$("#select2").empty();
			$("#select3").empty();	
			$("#select4").empty();
			$('#select1').append('<input name="radio-choice-3" id="radio-choice-10" value="choice-1" type="radio"><label for="radio-choice-10">sword (+20 Strength), price 500$</label>').trigger('create'); 
			$('#select2').append('<input name="radio-choice-3" id="radio-choice-11" value="choice-1" type="radio"><label for="radio-choice-11">whisky (+5Health, -10 Intelligence). price 50$ .</label>').trigger('create');
				if(intelligence > 30) {
					$('#select3').append('<input name="radio-choice-3" id="radio-choice-12" value="choice-1" type="radio"><label for="radio-choice-12">knife (+5 Strength) price 100$ is also visible .</label>').trigger('create');
				}
			$('#select4').append('<input name="radio-choice-3" id="radio-choice-13" value="choice-1" type="radio"><label for="radio-choice-13">No thanks, I don\'t need anything.</label>').trigger('create');
				$("#radio-choice-10").click(function(){
					if(!(backpackCheak("sword"))){
						backpack.push("sword");
						document.getElementById("demo").innerHTML = backpack;
					}
					else{
						alert("you alrady have the sword");
					}
				});
			
					
		});
		
		
		}
							
			
	
	
///valdetion for backpack(if element in array)
	function backpackCheak(ev) {
	if (backpack.indexOf(ev) > -1)
		return true;
	else
		return false;
    document.getElementById("demo").innerHTML = a;
}

