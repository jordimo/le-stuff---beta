$(document).ready(function(){$(window).on("scroll",function(){var o=$(window).scrollTop();o>=50?$("#header").addClass("fixed"):$("#header").removeClass("fixed")});var o=$("section"),n=$('nav[role="navigation"]');$(window).on("scroll",function(){var t=$(this).scrollTop();o.each(function(){var o=$(this).offset().top-76,a=o+$(this).outerHeight();t>=o&&a>=t&&(n.find("a").removeClass("active"),n.find('a[href="#'+$(this).attr("id")+'"]').addClass("active"))})}),n.find("a").on("click",function(){var o=$(this),n=o.attr("href");return $("html, body").animate({scrollTop:$(n).offset().top-75},500),!1}),$(".nav-toggle").on("click",function(){return $(this).toggleClass("close-nav"),n.toggleClass("open"),!1}),n.find("a").on("click",function(){$(".nav-toggle").toggleClass("close-nav"),n.toggleClass("open")})});