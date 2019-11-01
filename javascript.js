$(document).ready(function(){
    
//code to get todays date & push to the header
    const today = new Date();
    $("#date").text(today.toDateString());

//keep track of time
    const time = today.getHours();
    
    var inputEl = $(".task").data("index");
    console.log(inputEl);

  //  for (var i = 0; i < inputEl.length; i++) {

   //     console.log(inputEl);

   // }




    console.log(inputEl.inputBox);
    console.log(inputBox);
        function colorInput () {
        //$(inputArray).push(inputEl.data("index"));
        // if (time > inputBox) {
        //     $(".task").css("background-color", "gray");
        // }
        // else if (time === inputBox) {
        //     $(".task").css("background-color", "red");    
        // }
        // else {
        //     $(".task").css("background-color", "green");    
        // }
        //console.log(inputArray);
    }

//code to show anything that's in localStorage that was left previously
    $("#9am .task").val(localStorage.getItem("9am"));
    $("#10am .task").val(localStorage.getItem("10am"));
    $("#11am .task").val(localStorage.getItem("11am"));
    // $("#12am .task").val(localStorage.getItem("12am"));
    // $("#1am .task").val(localStorage.getItem("1am"));
    // $("#2am .task").val(localStorage.getItem("2am"));
    // $("#3am .task").val(localStorage.getItem("3am"));
    // $("#4am .task").val(localStorage.getItem("4am"));
    // $("#5am .task").val(localStorage.getItem("5am"));

//event listener to store code into the local storage
    $(".button").on("click", function() {
        console.log($(this).parent().attr("id"));
        var textValue = $(this).siblings(".task").val();
        var timeStamp = $(this).parent().attr("id");
        localStorage.setItem(timeStamp, textValue);
    })


});
