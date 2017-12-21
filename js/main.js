$(document).ready(function() {

  // -------------------------- Intro --------------------------
  // Select the class intro-click, then click function
  $(".intro-click").on("click", function() {
    $(this).toggleClass("intro-click-red");
    // Note: in addClass(), removeClass(), toggleClass() - Don't need a . in front of the class that you want to add
  });

  $(".fadeOut-text").on("click", function() {
    $(this).fadeOut(2000);
  });



  // --------------- 5. Event Handeling & Effects --------------
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



  // --------------- 6. Text, Val & HTML Functions ---------------
  $("#btn_main").on("click", function() {
    $(".dope").text("This is a new sentence.");
    $("#btn_main").val("Double Click Me");
  });

  $("#btn_main").on("dblclick", function() {
    $(".dope").text("You'll learn how to replace me");
    $("#btn_main").val("Replace");
  });


  $("#btn_new").on("click", function() {
    $(".dope").html('<b class="cool">Hi, this is the replaced text in Green.</b>');
    $("#btn_new").val("Text Is Green Now");
  });



  // ----------------- 7. Form Events & Variables -----------------

  // .val() Read the words in the input

  // $("button#enter_any_word").on("click", function(){
  //   var enterWord = $("input#entered_word").val();
  //   console.log(enterWord);
  //   $('<h4>You have entered:' + enterWord + '</h4>').appendTo("div #text_after_submit");
  // });
  // (I DONT KNOW WHY ITS NOT WORKING)

  // (Submit event works for forms)
  $("form").on("submit", function(){
    var enteredWord = $("input#entered_word").val();
    alert(enteredWord);
    // $("#text_after_submit").html(enteredWord);
  });

  // (Click and double click event)
  $("button#loc_button").on("dblclick click", function(){
    var enteredZip = $("input#entered_zip").val();
    $("input#entered_city_state").val(enteredZip + " is your post code");
  });

  // (Focus event)
  $("input#entered_zip").on("focus", function(){
    $("h2#city_display").text("Please type your post code:");
  });



  // --------------------- 8. Inline Styling ---------------------
  $("h4#css-excise").css({
    "color": "white",
    "background-color": "grey",
    "font-family": "arial, helvetica, sans-serif",
    "text-align": "center",
    "padding": "10px",
    "line-height": "2em"
  });

  $("button#css-excise2").on("click", function(){
    $("p#css-excise3").addClass("beautify");
    $(this).on("dblclick", function(){
      $(this).addClass("inline-styling");
    });
  });

  $("button#css-excise-2nd-button").on("click", function(){
    $("p#css-excise-2nd-p").addClass("beautify2");
  });



  // ------------- 9. Selection & Attribute Modification  -------------

  // $("p.instruct_title, div#closing_statement").css("color", "green");
  // Quicker for computer to process the code USING .add
  $("p.instruct_title").add("div#closing_statement").css("color", "blue");

  // mouseover: text bigger; mouseleave: text smaller
  $("li.important").on("mouseover", function(){
    $(this).attr("id", "big");
    $(this).on("mouseleave", function(){
      $(this).attr("id", "small");
    });
  }); // END mouseover function

  // click on h3#title: text changed
  $("h3#title").on("click", function(){
    $(this).attr("class", "pretty border");
  });

  // click on the img: size bigger
  $("img#the_img").on("click", function(){
    $(this).attr("class", "img-bigger");
    // Or another way:
    // $(this).attr({ "width": "60%", "length": "60%" });
  });

  // double click on the img: size back to before
  $("img#the_img").on("dblclick", function(){
    $(this).removeAttr("class", "img-bigger");
  });

  // Remove the image
  // $("img#the_img").on("dblclick", function(){
  //   $(this).remove();
  // });



  // ----------------------- 10. CSS Selectors  -----------------------
  // $("#steps li").css({
  //   "color": "#582e8c",
  //   "font-size": "1.3em"
  // });

  // > means only the direct child element (not elements within the child)
  // $("#steps > li").css({ });

  // Only target the first or last list
  // $("#steps li:first").css({ });
  // $("#steps li:last").css({ });

  // To target the nth element
  $("#steps li:nth-child(3)").css({ "color": "#00badb" });

  // To target element with a class attr or an id
  // $("p[class]").css({ "border": "1px solid red" });
  // $("li[class]").css({ "border": "1px solid red" });
  // $("ul[id='steps']").css({ "border": "1px solid red" });

  // To target siblings of list with id of steps
  // $("ul#steps ~ div").css({ "border": "1px solid green" });

  // To target siblings that is immediately to the ul
  // $("ul#steps + div").css({ "border": "1px solid green" });

  // the use of !=
  // To target the class name of <p> that is not instruct_title
  // $("p[class!='instruct_title']").css({ "border": "1px solid green" });

  // the carrot equal to ^= (starts with)
  // To target the class name that is start with 'imp'
  // $("[class^='imp']").css({ "border": "1px solid green" });

  // the use of $= (ends with)
  // To target the class name that is end with 'ant'
  $("[class^='imp']").css({ "border": "1px solid green" });


  // ------------- 11.  -------------






  // ----------------- CodeTest WEBCHAT: Button on click -----------------

  // Once the user clicks on the "Chat now" link, he gets a message from Mary
  $("#firstBtn").on("click", function() {
    $("h4#statement").delay(1000).slideDown(1000);
  });

  // $("form").on("submit", function(){
  //   var enterChat = $("input#entered_chat").val();
  //   alert(enterChat);
  // });

  // The user enters the message and presses send button. The conversation ballon is updated with the message.
  // After 3 seconds, Mary replies with the message
  $("button#send_chat").on("click", function(){
    var enterChat = $("input#entered_chat").val();
    // console.log(enterChat);
    // $("h4#user-statement").val(enterChat);
    $('<h4>Nicholas: "' + enterChat + '"</h4>').appendTo("h4#user-statement");
    $("#mary-reply").delay(3000).slideDown(1000);
  });



}); // END.ready function
