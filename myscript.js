$(document).ready(function(){
  $(".answer").hide();
  $(".showA").click(function() {
	$(this).next(".answer").slideToggle();
  });

});
