"use strict";
$(function(){
     
     $(".menu").click(function(){
          $("nav").slideToggle();
          $(this).toggleClass("active");
     });

     $(".wrap-2 .vert").click(function(e){
          e.preventDefault();

          $(".wrap-2 .vert").removeClass("active");
          $(this).addClass("active");

          $(".wrap-2 .collapse").fadeOut(0);
          $(this).next().fadeIn();

     });

     $(".slider").slick({
          autoplay:true,
          arrows:false
     })




});