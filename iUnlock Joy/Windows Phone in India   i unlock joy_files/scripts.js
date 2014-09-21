$(document).ready(function(){
 
	
	var $scrollerWindow = $('#content2');
	var $speed = 1000;
	
	 
	function gotoHome()
	{
		$scrollerWindow.stop().scrollTo( $('#home'), $speed, {axis:'x',offset:{left: -20, top:0 }} );
		
		return false;
	}
	
	function gotoHow()
	{
		$scrollerWindow.stop().scrollTo( $('#how'), $speed, {axis:'x',offset:{left: -20, top:0 }} );	 
		return false;
	}
	
	function gotoYouget()
	{
		$scrollerWindow.stop().scrollTo( $('#youget'), $speed, {axis:'x',offset:{left: -20, top:0 }} );	  
		return false;
	}
	
	function gotoRules()
	{
		$scrollerWindow.stop().scrollTo( $('#rules'), $speed, {axis:'x',offset:{left: -20, top:0 }} );	 
		return false;
	}
	
	function gotoUsers()
	{
		$scrollerWindow.stop().scrollTo( $('#users'), $speed, {axis:'x',offset:{left: -20, top:0 }} );	 
		return false;
	}
	
	function noScroll()
	{
		return false;
	}
	
	$('.goto_home').live("click", gotoHome);
	$('.goto_how').live("click", gotoHow);
	$('.goto_youget').live("click", gotoYouget);
	$('.goto_rules').live("click", gotoRules);
	$('.goto_users').live("click", gotoUsers);
	$('.noScroll').live("click", noScroll);
 
	return false;
	 
		
});