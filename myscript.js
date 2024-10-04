$(document).ready(function() {
    //Initially disable the Show Answer buttons so you can only click them if you choose the incorrect option
    $(".showA").prop('disabled', true);

    //Handle form submission for each question
    $('.radioform').submit(function(event) {
        event.preventDefault(); // Prevent form refresh

        //Get the selected radio button value for the current form
        var selectedOption = $(this).find('input[type="radio"]:checked').val();

        //If you click on submit without choosing anything on each question, it'll tell you this alert asking to choose an option before you click submit answer
        if (!selectedOption) {
            alert("Please select an option before submitting.");
            return;
        }

        if (selectedOption === 'wrong') {
            // Shows a danger alert if you choose the incorrect option
            $(this).find('.alert-danger').show();
            $(this).find('.alert-success').hide();

            //Enable 'Show Answer' button
            $(this).find(".showA").prop('disabled', false);
        } else if (selectedOption === 'correct') {
            //Show success alert for correct answer and hides the danger alert in case its already there
            $(this).find('.alert-success').show();
            $(this).find('.alert-danger').hide();

            //Disable Show Answer button if the user chooses the correct option cause they already chose the correct option
            $(this).find(".showA").prop('disabled', true);
        }
    });

    //Handle Show Answer button click to toggle the correct answer visibility
    $(".showA").click(function() {
        $(this).next(".answer").slideToggle();
    });
});
