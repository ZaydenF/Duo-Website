$(document).ready(function(){
  $('.radioform').submit(function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get the selected radio button
        var selectedOption = $('input[name="geography"]:checked').val();

        // Check if any radio button was selected
        if (selectedOption === undefined) {
            alert("Please select an option before submitting.");
            return;
        }

        // Show the appropriate alert based on the selected option
        if (selectedOption === 'wrong') {
            $('#dangerAlert').show();
            $('#successAlert').hide();
        } else if (selectedOption === 'correct') {
            $('#successAlert').show();
            $('#dangerAlert').hide();
        
	
  $(".answer").hide();
  $(".showA").click(function() {
	$(this).next(".answer").slideToggle();
  });
