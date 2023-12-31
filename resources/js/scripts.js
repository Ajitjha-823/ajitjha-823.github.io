$(document).ready(function(){ 

	/* Add/ Remove Sticky Navigation */ 

	$('.js--features').waypoint(function(direction){
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '60px;' 
	});

	/* Scroll to section on click event */

	$('.js--scroll-to-plans').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);
	});

	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--features').offset().top}, 1000);
	});

	/* CSS Tricks: Smooth Scrolling to elements with ID */

	$(function() {
  		$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      		if (target.length) {
	        		$('html,body').animate({
	         		 scrollTop: target.offset().top
	        		}, 1000);
	        		return false;
	      		}
   			}
 		});
	});

	/* Add Animations on scroll */

	$('.js--wp-1').waypoint(function(direction) {
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});
	$('.js--wp-2').waypoint(function(direction) {
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});
	$('.js--wp-3').waypoint(function(direction) {
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '60%'
	});
	$('.js--wp-4').waypoint(function(direction) {
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '50%'
	});

	/* Mobile Navigation */
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i')

		nav.slideToggle(200);
		/* switch from hamburger to cross icon */
		if (icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});

           /* pop up */
 
	const openModalBtn = document.getElementById("openModalBtn");
	const closeModalBtn = document.getElementById("closeModalBtn");
	const modalOverlay = document.getElementById("modalOverlay");
  
	openModalBtn.addEventListener("click", () => {
	  modalOverlay.style.display = "flex";
	});
  
	closeModalBtn.addEventListener("click", () => {
	  modalOverlay.style.display = "none";
	});

	 
	const openSignBtn = document.getElementById("openSignBtn");
	const closeSignBtn = document.getElementById("closeSignBtn");
	const signOverlay = document.getElementById("signOverlay");

	openSignBtn.addEventListener("click", () => {
	  signOverlay.style.display = "flex";
	});
  
	closeSignBtn.addEventListener("click", () => {
	  signOverlay.style.display = "none";
	});
  
});

	



