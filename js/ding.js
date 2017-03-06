// JavaScript Document
$(function(){
	 $(document).ready(function($){		
	               $('.nav-tabs.nav-stacked li a ul li').mouseover(function(){
                     //导航选择bg    
                     if($('.nav-tabs.nav-stacked li a ul li').addClass()=="active"){
                          $(this).parent('.nav-tabs.nav-stacked li a ul li').parent('.nav-tabs.nav-stacked li.active a ul').parent('.nav-tabs.nav-stacked li.active a').parent('.nav-tabs.nav-stacked li').removeClass('active');
                         }else{
                          $(this).parent('.nav-tabs.nav-stacked li a ul li').parent('.nav-tabs.nav-stacked li.active a ul').parent('.nav-tabs.nav-stacked li.active a').parent('.nav-tabs.nav-stacked li').add('active');
                         }
                       
                        });
						
	                })
   
	})
	












