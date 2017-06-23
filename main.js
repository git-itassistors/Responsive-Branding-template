$(window).scroll(function() {


		var y = $('.head-title').offset().top;

		var xx = $('.h-end').offset().top;
		var a = $('.s-end').offset().top;
		var b = $('.blob-desg').offset().top;

        if( $(window).scrollTop() > y ) {
            $('.top-bar-alt').fadeIn(120);
			$('.top-bar-alt').css('display','inline-flex');
        }

		else {
            $('.top-bar-alt').fadeOut(120);
			$('.top-bar-alt').css('display','none');
        }


		if( $(window).scrollTop() > y+160 ){
			
			$('.sec-two-container').fadeIn(2000);
			$('.sec-two-container').css('display','inline-flex');
			$('.sec-two-container').css('margin-top','150px').delay('slow');

			document.getElementById('nmc-2').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-2').style.fontSize = "28px";
			document.getElementById('nmc-3').style.textShadow = "none";
			document.getElementById('nmc-3').style.fontSize = "20px";
			document.getElementById('nmc-4').style.textShadow = "none";
			document.getElementById('nmc-4').style.fontSize = "20px";
			document.getElementById('nmc-1').style.textShadow = "none";
			document.getElementById('nmc-1').style.fontSize = "20px";
			document.getElementById('nmc-21').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-21').style.fontSize = "28px";
			document.getElementById('nmc-31').style.textShadow = "none";
			document.getElementById('nmc-31').style.fontSize = "20px";
			document.getElementById('nmc-41').style.textShadow = "none";
			document.getElementById('nmc-41').style.fontSize = "20px";
			document.getElementById('nmc-11').style.textShadow = "none";
			document.getElementById('nmc-11').style.fontSize = "20px";
		}
	
		if( $(window).scrollTop() > a+300 ){
			$('.about-container').slideDown(500);
			$('.about-container').fadeIn(500);
			$('.about-container').css('display','block');

			document.getElementById('nmc-3').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-3').style.fontSize = "28px";
			document.getElementById('nmc-4').style.textShadow = "none";
			document.getElementById('nmc-4').style.fontSize = "20px";
			document.getElementById('nmc-2').style.textShadow = "none";
			document.getElementById('nmc-2').style.fontSize = "20px";
			document.getElementById('nmc-1').style.textShadow = "none";
			document.getElementById('nmc-1').style.fontSize = "20px";
			document.getElementById('nmc-31').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-31').style.fontSize = "28px";
			document.getElementById('nmc-41').style.textShadow = "none";
			document.getElementById('nmc-41').style.fontSize = "20px";
			document.getElementById('nmc-21').style.textShadow = "none";
			document.getElementById('nmc-21').style.fontSize = "20px";
			document.getElementById('nmc-11').style.textShadow = "none";
			document.getElementById('nmc-11').style.fontSize = "20px";
		}
	
		if( $(window).scrollTop() > b-15 ){
			$('.contact-holder').slideDown(500);
			$('.contact-holder').fadeIn(500);
			$('.contact-holder').css('display','block');

			document.getElementById('nmc-4').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-4').style.fontSize = "28px";
			document.getElementById('nmc-3').style.textShadow = "none";
			document.getElementById('nmc-3').style.fontSize = "20px";
			document.getElementById('nmc-2').style.textShadow = "none";
			document.getElementById('nmc-2').style.fontSize = "20px";
			document.getElementById('nmc-1').style.textShadow = "none";
			document.getElementById('nmc-1').style.fontSize = "20px";
			document.getElementById('nmc-41').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-41').style.fontSize = "28px";
			document.getElementById('nmc-31').style.textShadow = "none";
			document.getElementById('nmc-31').style.fontSize = "20px";
			document.getElementById('nmc-21').style.textShadow = "none";
			document.getElementById('nmc-21').style.fontSize = "20px";
			document.getElementById('nmc-11').style.textShadow = "none";
			document.getElementById('nmc-11').style.fontSize = "20px";
			
		}
	
		if( $(window).scrollTop() < y ){
			document.getElementById('nmc-1').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-1').style.fontSize = "28px";
			document.getElementById('nmc-2').style.textShadow = "none";
			document.getElementById('nmc-2').style.fontSize = "20px";
			document.getElementById('nmc-3').style.textShadow = "none";
			document.getElementById('nmc-3').style.fontSize = "20px";
			document.getElementById('nmc-4').style.textShadow = "none";
			document.getElementById('nmc-4').style.fontSize = "20px";
			document.getElementById('nmc-11').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
			document.getElementById('nmc-11').style.fontSize = "28px";
			document.getElementById('nmc-21').style.textShadow = "none";
			document.getElementById('nmc-21').style.fontSize = "20px";
			document.getElementById('nmc-31').style.textShadow = "none";
			document.getElementById('nmc-31').style.fontSize = "20px";
			document.getElementById('nmc-41').style.textShadow = "none";
			document.getElementById('nmc-41').style.fontSize = "20px";
		}

});





function meLoad()
{
	$('.bounce-intro img').show(4500);
	$('.bounce-intro').delay('slow').css('margin-top','200px');
	
	$('.blob-one').css('animation-name','anim');
	$('.blob-one').css('animation-duration','3s');
}


function  overThis(){
}

function outThis(){
}


function nmClick(x){

	document.getElementById('nmc-1').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-1').style.fontSize = "28px";

	document.getElementById('nmc-2').style.textShadow = "none";
	document.getElementById('nmc-2').style.fontSize = "20px";
	document.getElementById('nmc-3').style.textShadow = "none";
	document.getElementById('nmc-3').style.fontSize = "20px";
	document.getElementById('nmc-4').style.textShadow = "none";
	document.getElementById('nmc-4').style.fontSize = "20px";

	///////////////////

	document.getElementById('nmc-11').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-11').style.fontSize = "28px";

	document.getElementById('nmc-21').style.textShadow = "none";
	document.getElementById('nmc-21').style.fontSize = "20px";
	document.getElementById('nmc-31').style.textShadow = "none";
	document.getElementById('nmc-31').style.fontSize = "20px";
	document.getElementById('nmc-41').style.textShadow = "none";
	document.getElementById('nmc-41').style.fontSize = "20px";

	
	$('html, body').animate({
        'scrollTop' : $('.header').position().top
    });

}

function nmClick_1(x){
	document.getElementById('nmc-2').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-2').style.fontSize = "28px";


	document.getElementById('nmc-3').style.textShadow = "none";
	document.getElementById('nmc-3').style.fontSize = "20px";
	document.getElementById('nmc-4').style.textShadow = "none";
	document.getElementById('nmc-4').style.fontSize = "20px";
	document.getElementById('nmc-1').style.textShadow = "none";
	document.getElementById('nmc-1').style.fontSize = "20px";

	//////////////////////

	document.getElementById('nmc-21').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-21').style.fontSize = "28px";


	document.getElementById('nmc-31').style.textShadow = "none";
	document.getElementById('nmc-31').style.fontSize = "20px";
	document.getElementById('nmc-41').style.textShadow = "none";
	document.getElementById('nmc-41').style.fontSize = "20px";
	document.getElementById('nmc-11').style.textShadow = "none";
	document.getElementById('nmc-11').style.fontSize = "20px";

	$('.sec-two-container').slideDown(500);
	$('.sec-two-container').fadeIn(500);
	$('.sec-two-container').css('display','inline-flex');
	
	$('html, body').animate({
        'scrollTop' : $('.sec-whole-block').position().top+150
    });
}

function nmClick_2(x){
	document.getElementById('nmc-3').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-3').style.fontSize = "28px";

	document.getElementById('nmc-4').style.textShadow = "none";
	document.getElementById('nmc-4').style.fontSize = "20px";
	document.getElementById('nmc-2').style.textShadow = "none";
	document.getElementById('nmc-2').style.fontSize = "20px";
	document.getElementById('nmc-1').style.textShadow = "none";
	document.getElementById('nmc-1').style.fontSize = "20px";

	////////////////////////


	document.getElementById('nmc-31').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-31').style.fontSize = "28px";

	document.getElementById('nmc-41').style.textShadow = "none";
	document.getElementById('nmc-41').style.fontSize = "20px";
	document.getElementById('nmc-21').style.textShadow = "none";
	document.getElementById('nmc-21').style.fontSize = "20px";
	document.getElementById('nmc-11').style.textShadow = "none";
	document.getElementById('nmc-11').style.fontSize = "20px";
	
	$('.sec-two-container').slideDown(500);
	$('.sec-two-container').fadeIn(500);
	$('.sec-two-container').css('display','inline-flex');
	$('.about-container').slideDown(500);
	$('.about-container').fadeIn(500);
	$('.about-container').css('display','block');
	
	$('html, body').animate({
		'scrollTop' : $('.about-container').position().top-100
    });
}

function nmClick_3(x){
	document.getElementById('nmc-4').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-4').style.fontSize = "28px";

	document.getElementById('nmc-3').style.textShadow = "none";
	document.getElementById('nmc-3').style.fontSize = "20px";
	document.getElementById('nmc-2').style.textShadow = "none";
	document.getElementById('nmc-2').style.fontSize = "20px";
	document.getElementById('nmc-1').style.textShadow = "none";
	document.getElementById('nmc-1').style.fontSize = "20px";

	//////////////////////////////

	document.getElementById('nmc-41').style.textShadow = "-1px -1px 5px rgba(0,0,0,0.54)";
	document.getElementById('nmc-41').style.fontSize = "28px";

	document.getElementById('nmc-31').style.textShadow = "none";
	document.getElementById('nmc-31').style.fontSize = "20px";
	document.getElementById('nmc-21').style.textShadow = "none";
	document.getElementById('nmc-21').style.fontSize = "20px";
	document.getElementById('nmc-11').style.textShadow = "none";
	document.getElementById('nmc-11').style.fontSize = "20px";
	$('.contact-holder').slideDown(500);
	$('.contact-holder').fadeIn(500);
	$('.contact-holder').css('display','block');
	$('.sec-two-container').slideDown(500);
	$('.sec-two-container').fadeIn(500);
	$('.sec-two-container').css('display','inline-flex');
	$('.about-container').slideDown(500);
	$('.about-container').fadeIn(500);
	$('.about-container').css('display','block');
	
	
	$('html, body').animate({
        'scrollTop' : $('.contact-holder').position().top-20
    });
}

var p_g = 0;

function menuClick()
{
	if( p_g < 1 ){
		$('.side-nav').css('margin-left','0px');
		p_g = 1;
		
		$('.d1').css('transform','rotate(-50deg)');
		$('.d1').css('width','24px');
		$('.d1').css('margin-left','-2px');
		$('.d1').css('margin-bottom','-1px');
		
		$('.d3').css('transform','rotate(50deg)');
		$('.d3').css('width','24px');
		$('.d3').css('margin-left','-2px');
		$('.d3').css('margin-top','-1px');
		
		$('.d2').css('margin-top','7px');
		
		
	}else{
		$('.side-nav').css('margin-left','-250px');
		p_g = 0;
		
		$('.d1').css('transform','rotate(0deg)');
		$('.d1').css('width','50px');
		$('.d1').css('margin-left','0px');
		
		$('.d3').css('transform','rotate(0deg)');
		$('.d3').css('width','50px');
		$('.d3').css('margin-left','0px');
	}
	
}





