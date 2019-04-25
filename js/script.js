$(document).ready(function() 
{	
	var audioFon = new Audio();
	audioFon.src = "music/music.mp3";
	audioFon.load();
	audioFon.play();
	audioFon.volume = '0.1';
	audioFon.loop = true;

	var next = 0;
		
	var audio1 = new Audio();
	var audio2 = new Audio();
	var audio3 = new Audio();

	var e1, e2, e3, e4, e5; 
	
	var babyTime, motherTime;
	
	comeCow();

	function babyHide()
	{	
		switch (next) {
				case 0:
					$("#cow_baby").animate({
						left: "60%"
					}, 5000 );
					$('#right').css('pointer-events', 'visiblePainted');
				break
				
				case 1:
					$("#horse_baby").animate({
						left: "60%"
					}, 5000 );
					$('#right').css('pointer-events', 'visiblePainted');
				break
				
				case 2:
					$("#sheep_baby").animate({
						left: "60%"
					}, 5000 );
					$('#right').css('pointer-events', 'visiblePainted');
				break
				
				case 3:
					$("#pig_baby").animate({
						left: "60%"
					}, 5000 );
					$('#right').css('pointer-events', 'visiblePainted');
				break
				
				case 4:
					$("#dog_baby").animate({
						left: "60%"
					}, 5000 );
					$('#right').css('pointer-events', 'visiblePainted');
				break	
		}		  
	}

	function nextBeast()
	{
		$('#right').css('pointer-events', 'none');
		$('.flowers').css('pointer-events', 'none');
		//alert(next);
		
		switch (next) {
				case 0:
					goOnCow();
				break
				
				case 1:
					goOnHorse();
				break
				
				case 2:
					goOnSheep();
				break
				
				case 3:
					goOnPig();
				break
				
				case 4:
					goOnDog();
				break	
				
				case 5:
					goOnCat();
				break
		}							
	}
	
	function goOnCow()
	{	
		next = next + 1;
		removeE();	

		$("#cow_baby").stop();
		clearTimeout(babyTime);
		
		$("#cow").animate({
		left: "100%"
		}, 7000 );

		$("#cow_baby").animate({
		left: "100%"
		}, 5000 );
		
		$('.cow').attr('src', 'images/mother_walk/cow_walk.gif');
		$('.cow_baby').attr('src', 'images/baby_out/cow_baby_out.gif');
		setTimeout(comeHorse, 7000);
	
	}
	
	function goOnHorse()
	{	
		next = next + 1;
		removeE();
		
		$("#horse_baby").stop();
		clearTimeout(babyTime);
		
		$("#horse").animate({
		left: "100%"
		}, 7000 );
		$("#horse_baby").animate({
		left: "100%"
		}, 5000 );
		
		$('.horse').attr('src', 'images/mother_walk/horse_walk.gif');
		$('.horse_baby').attr('src', 'images/baby_out/horse_baby_out.gif');
		setTimeout(comeSheep, 7000);
	
	}
	
	function goOnSheep()
	{	
		next = next + 1;
		removeE();
		
		$("#sheep_baby").stop();
		clearTimeout(babyTime);
	
		$("#sheep").animate({
		left: "100%"
		}, 7000 );
		$("#sheep_baby").animate({
		left: "100%"
		}, 5000 );
		
		$('.sheep').attr('src', 'images/mother_walk/sheep_walk.gif');
		$('.sheep_baby').attr('src', 'images/baby_out/sheep_baby_out.gif');
		setTimeout(comePig, 7000);

	}
	
	function goOnPig()
	{	
		next = next + 1;
		removeE();
		
		$("#pig_baby").stop();
		clearTimeout(babyTime);
		
		$("#pig").animate({
		left: "100%"
		}, 7000 );
		$("#pig_baby").animate({
		left: "100%"
		}, 5000 );
		
		$('.pig').attr('src', 'images/mother_walk/pig_walk.gif');
		$('.pig_baby').attr('src', 'images/baby_out/pig_baby_out.gif');
		setTimeout(comeDog, 7000);
	
	}
	
	function goOnDog()
	{		
		next = next + 1;
		removeE();

		$("#dog_baby").stop();
		clearTimeout(babyTime);
		
		$("#dog").animate({
		left: "100%"
		}, 7000 );
		$("#dog_baby").animate({
		left: "100%"
		}, 5000 );
		
		$('.dog').attr('src', 'images/mother_walk/dog_walk.gif');
		$('.dog_baby').attr('src', 'images/baby_out/dog_baby_out.gif');
		setTimeout(comeCat, 7000);
		
	}
	
	function goOnCat()
	{	
		removeE();
		
		$("#cat").animate({
		left: "100%"
		}, 7000 );
		
		$('.cat').attr('src', 'images/mother_walk/cat_walk.gif');
		setTimeout(endGame, 7000);
	}
	
	function endGame()
	{
		$("#cat").detach();
		
		$$e.remove($$('flower1'),'click',e1);
		
		$("#theEnd").animate({
						opacity: "1",
						width: "30%",
						height: "15%"
					}, 1500 );
					
		$("#theReload").animate({
						top: '50%'
					}, 800 );
					
		e1 = function(event){location.reload();}
		
		$$e.add($$('theReload'),'click',e1);
	}
	
	function comeCow()
	{
		audio1.src = "music/cow1.mp3";
		audio2.src = "music/cow3.mp3";
		audio3.src = "music/cow2.mp3";
		
		audio1.load();
		audio2.load();
		audio3.load();
		
		e1 = function(event){audio1.play();setTimeout(beastSpeak, 8000);$('.cow').attr('src', 'images/mother_say/cow.gif');$('.flowers').css('pointer-events', 'none');}
		e2 = function(event){babyHide(); babyTime = setTimeout(beastBabySpeak, 5000);$('.cow_baby').attr('src', 'images/baby_in/cow_baby_in.gif');$('.flowers').css('pointer-events', 'none');}
		e3 = function(event){audio2.play();babyTime = setTimeout(beastBabySpeak, 2000);$('.cow_baby').attr('src', 'images/baby_say/cow_baby.gif');$('.flowers').css('pointer-events', 'none');}
		e4 = function(event){audio3.play();setTimeout(beastSpeak, 11000);$('.cow').attr('src', 'images/mother_say/cow.gif');$('.flowers').css('pointer-events', 'none');}
		e5 = function(event){nextBeast();}
		
		$$e.add($$('flower1'),'click',e1);
		$$e.add($$('flower2'),'click',e2);
		$$e.add($$('flower3'),'click',e3);
		$$e.add($$('flower4'),'click',e4);
		$$e.add($$('right'),'click',e5);	
	}
	
	function comeHorse()
	{
		$("#cow_baby").detach();
		$("#cow").detach();
		
		motherTime = setTimeout(beastSpeak, 4000);
		$('.horse').attr('src', 'images/mother_walk/horse_walk.gif');
		$("#horse").animate({
			left: "25%"
		  }, 4000 );

		audio1.src = "music/horse1.mp3";
		audio2.src = "music/horse3.mp3";
		audio3.src = "music/horse2.mp3";
		
		audio1.load();
		audio2.load();
		audio3.load();
		
		e1 = function(event){audio1.play();setTimeout(beastSpeak, 8000);$('.horse').attr('src', 'images/mother_say/horse.gif');$('.flowers').css('pointer-events', 'none');}
		e2 = function(event){babyHide(); babyTime = setTimeout(beastBabySpeak, 5000);$('.horse_baby').attr('src', 'images/baby_in/horse_baby_in.gif');$('.flowers').css('pointer-events', 'none');}
		e3 = function(event){audio2.play();babyTime = setTimeout(beastBabySpeak, 3000);$('.horse_baby').attr('src', 'images/baby_say/horse_baby.gif');$('.flowers').css('pointer-events', 'none');}
		e4 = function(event){audio3.play();setTimeout(beastSpeak, 8000);$('.horse').attr('src', 'images/mother_say/horse.gif');$('.flowers').css('pointer-events', 'none');}
		e5 = function(event){nextBeast();}
		
		$$e.add($$('flower1'),'click',e1);
		$$e.add($$('flower2'),'click',e2);
		$$e.add($$('flower3'),'click',e3);
		$$e.add($$('flower4'),'click',e4);
		$$e.add($$('right'),'click',e5);

	}
	
	function comeSheep()
	{
		$("#horse_baby").detach();
		$("#horse").detach();
		
		motherTime = setTimeout(beastSpeak, 4000);
		$('.sheep').attr('src', 'images/mother_walk/sheep_walk.gif');
		$("#sheep").animate({
			left: "35%"
		  }, 4000 );

		audio1.src = "music/sheep1.mp3";
		audio2.src = "music/sheep3.mp3";
		audio3.src = "music/sheep2.mp3";
		
		audio1.load();
		audio2.load();
		audio3.load();
		
		e1 = function(event){audio1.play();setTimeout(beastSpeak, 4500);$('.sheep').attr('src', 'images/mother_say/sheep.gif');$('.flowers').css('pointer-events', 'none');}
		e2 = function(event){babyHide(); babyTime = setTimeout(beastBabySpeak, 5000);$('.sheep_baby').attr('src', 'images/baby_in/sheep_baby_in.gif');$('.flowers').css('pointer-events', 'none');}
		e3 = function(event){audio2.play();babyTime = setTimeout(beastBabySpeak, 1500);$('.sheep_baby').attr('src', 'images/baby_say/sheep_baby.gif');$('.flowers').css('pointer-events', 'none');}
		e4 = function(event){audio3.play();setTimeout(beastSpeak, 7500);$('.sheep').attr('src', 'images/mother_say/sheep.gif');$('.flowers').css('pointer-events', 'none');}
		e5 = function(event){nextBeast();}
		
		$$e.add($$('flower1'),'click',e1);
		$$e.add($$('flower2'),'click',e2);
		$$e.add($$('flower3'),'click',e3);
		$$e.add($$('flower4'),'click',e4);
		$$e.add($$('right'),'click',e5);

	}
	
	function comePig()
	{
		$("#sheep_baby").detach();
		$("#sheep").detach();

		motherTime = setTimeout(beastSpeak, 4000);
		$('.pig').attr('src', 'images/mother_walk/pig_walk.gif');
		$("#pig").animate({
			left: "25%"
		  }, 4000 );

		audio1.src = "music/pig1.mp3";
		audio2.src = "music/pig3.mp3";
		audio3.src = "music/pig2.mp3";
		
		audio1.load();
		audio2.load();
		audio3.load();
		
		e1 = function(event){audio1.play();setTimeout(beastSpeak, 6000);$('.pig').attr('src', 'images/mother_say/pig.gif');$('.flowers').css('pointer-events', 'none');}
		e2 = function(event){babyHide(); babyTime = setTimeout(beastBabySpeak, 5000);$('.pig_baby').attr('src', 'images/baby_in/pig_baby_in.gif');$('.flowers').css('pointer-events', 'none');}
		e3 = function(event){audio2.play();babyTime = setTimeout(beastBabySpeak, 1500);$('.pig_baby').attr('src', 'images/baby_say/pig_baby.gif');$('.flowers').css('pointer-events', 'none');}
		e4 = function(event){audio3.play();setTimeout(beastSpeak, 11000);$('.pig').attr('src', 'images/mother_say/pig.gif');$('.flowers').css('pointer-events', 'none');}
		e5 = function(event){nextBeast();}
		
		$$e.add($$('flower1'),'click',e1);
		$$e.add($$('flower2'),'click',e2);
		$$e.add($$('flower3'),'click',e3);
		$$e.add($$('flower4'),'click',e4);
		$$e.add($$('right'),'click',e5);

	}
	
	function comeDog()
	{
		$("#pig_baby").detach();
		$("#pig").detach();		
		
		motherTime = setTimeout(beastSpeak, 4000);
		$('.dog').attr('src', 'images/mother_walk/dog_walk.gif');
		$("#dog").animate({
			left: "35%"
		  }, 4000 );

		audio1.src = "music/dog1.mp3";
		audio2.src = "music/dog3.mp3";
		audio3.src = "music/dog2.mp3";
		
		audio1.load();
		audio2.load();
		audio3.load();
		
		e1 = function(event){audio1.play();setTimeout(beastSpeak, 5000);$('.dog').attr('src', 'images/mother_say/dog.gif');$('.flowers').css('pointer-events', 'none');}
		e2 = function(event){babyHide(); babyTime = setTimeout(beastBabySpeak, 5000);$('.dog_baby').attr('src', 'images/baby_in/dog_baby_in.gif');$('.flowers').css('pointer-events', 'none');}
		e3 = function(event){audio2.play();babyTime = setTimeout(beastBabySpeak, 1500);$('.dog_baby').attr('src', 'images/baby_say/dog_baby.gif');$('.flowers').css('pointer-events', 'none');}
		e4 = function(event){audio3.play();setTimeout(beastSpeak, 6500);$('.dog').attr('src', 'images/mother_say/dog.gif');$('.flowers').css('pointer-events', 'none');}
		e5 = function(event){nextBeast();}
		
		$$e.add($$('flower1'),'click',e1);
		$$e.add($$('flower2'),'click',e2);
		$$e.add($$('flower3'),'click',e3);
		$$e.add($$('flower4'),'click',e4);
		$$e.add($$('right'),'click',e5);

	}
	
	function comeCat()
	{
		$("#dog_baby").detach();
		$("#dog").detach();
		
		motherTime = setTimeout(beastSpeak, 4000);
		$('.cat').attr('src', 'images/mother_walk/cat_walk.gif');
		$("#cat").animate({
			left: "40%"
		  }, 4000 );

		audio1.src = "music/cat.mp3";
		
		audio1.load();
		
		e1 = function(event){audio1.play();$('#right').css('pointer-events', 'visiblePainted');setTimeout(beastSpeak, 28000);$('.cat').attr('src', 'images/mother_say/cat.gif');$('.flowers').css('pointer-events', 'none');}
		e5 = function(event){nextBeast();}
		
		$$e.add($$('flower1'),'click',e1);	
		$$e.add($$('right'),'click',e5);
	}	
	
	//////////////////////
	
	function beastSpeak()
	{
		switch (next) {
				case 0:
					$('.cow').attr('src', 'images/mother/cow.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
					clearTimeout(motherTime);
				break
				
				case 1:
					$('.horse').attr('src', 'images/mother/horse.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
					clearTimeout(motherTime);
				break
				
				case 2:
					$('.sheep').attr('src', 'images/mother/sheep.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
					clearTimeout(motherTime);
				break
				
				case 3:
					$('.pig').attr('src', 'images/mother/pig.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
					clearTimeout(motherTime);
				break
				
				case 4:
					$('.dog').attr('src', 'images/mother/dog.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
					clearTimeout(motherTime);
				break	
				
				case 5:
					$('.cat').attr('src', 'images/mother/cat.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
					clearTimeout(motherTime);
				break
		}
	}
	
	function beastBabySpeak()
	{
		switch (next) {
				case 0:
					$('.cow_baby').attr('src', 'images/baby/cow_baby.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
				break
				
				case 1:
					$('.horse_baby').attr('src', 'images/baby/horse_baby.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
				break
				
				case 2:
					$('.sheep_baby').attr('src', 'images/baby/sheep_baby.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
				break
				
				case 3:
					$('.pig_baby').attr('src', 'images/baby/pig_baby.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
				break
				
				case 4:
					$('.dog_baby').attr('src', 'images/baby/dog_baby.png');
					$('.flowers').css('pointer-events', 'visiblePainted');
				break	
				
				case 5:
					return;
				break
		}
	}
	
	function removeE()
	{
		$$e.remove($$('flower1'),'click',e1);
		$$e.remove($$('flower2'),'click',e2);
		$$e.remove($$('flower3'),'click',e3);
		$$e.remove($$('flower4'),'click',e4);
		$$e.remove($$('right'),'click',e5);
	}

});

$(window).load(function() 
{
	$("#main").animate({
				opacity: "1"
				}, 4000 );
	

	// курсор над иконкой

	$('#main .img_act').css({opacity:0})

	$('#main a').hover(function()
	{
		$(this).find('.img_act').stop().animate({opacity:1})
	}, 
	function()
	{
		$(this).find('.img_act').stop().animate({opacity:0})
	}) 		
})