// ----------------- 5. Button on click -----------------
$("#firstBtn").on("click", function() {
  $("h4#statement").slideToggle(1000);
});

$("form").on("submit", function(){
  var enterChat = $("input#entered_chat").val();
  alert(enterChat);
});

$("button#send_chat").on("click", function(){
  var enterChat = $("input#entered_chat").val();
  $("h4#user-statement").val(enterChat);
});


// ------------- 5. Event Handeling & Effects -------------

// $("#box").show();

$("#target").on("click", function() {
  // $("p#statement").hide();
  // $("#box").show();
  // $("#box").toggle();

  // $("#box").slideDown(1000); // 1 second
  // $("#box").slideUp(2000); // element needs to be showns 1st
  $("#box").slideToggle(1000);

  // $("#box").fadeIn(1000);
  // $("#box").fadeOut(1000);
  // $("#box").fadeTo(1000, 0.5);
  // $("#box").fadeToggle(1000);
});



// ------------- 6. Text, Val & HTML Functions -------------
$("#btn_main").on("click", function() {
  $(".dope").text("This is a new sentence.");
  $("#btn_main").val("Double Click Me");
});

$("#btn_main").on("dblclick", function() {
  $(".dope").text("You'll learn how to replace me");
  $("#btn_main").val("Replace");
});


$("#btn_new").on("click", function() {
  $(".dope").html('<b class="cool"> Hey there this is HTML</b>');
});



// ------------- 7. Form Events & Variables -------------
$("form").on("submit", function(){
  var enterWord = $("input#entered_word").val(); // .val() Read the words in the input
  alert(enterWord);
});

$("button#loc_button").on("dblclick click", function(){
  var enteredZip = $("input#entered_zip").val();
  $("input#entered_city_state").val(enteredZip + " is for NJ");
});

$("input#entered_zip").on("focus", function(){
  $("h2#city_display").text("Please type your zipcode");
});












// $(document).ready(function() {

// }); // END.ready function
