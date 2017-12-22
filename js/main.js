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

  // Style for 'Coding Everyday | Learn Non-Stop'
  $("h4#css-excise").css({
    "color": "white",
    "background-color": "rgba(0, 174, 196, 0.8)",
    "font-family": "arial, helvetica, sans-serif",
    "text-align": "center",
    "padding": "10px",
    "margin-bottom": "20px",
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

  // Mouseover: text bigger; Mouseleave: text smaller
  $("li.important").on("mouseover", function(){
    $(this).attr("id", "big");
    $(this).on("mouseleave", function(){
      $(this).attr("id", "small");
    });
  }); // END mouseover function

  // Click on h3#title: text changed
  $("h3#title").on("click", function(){
    $(this).attr("class", "pretty border");
  });

  // Click on the img: size bigger
  $("img#the_img").on("click", function(){
    $(this).attr("class", "img-bigger");
    // Or another way:
    // $(this).attr({ "width": "60%", "length": "60%" });
  });

  // Double click on the img: size back to before
  $("img#the_img").on("dblclick", function(){
    $(this).removeAttr("class", "img-bigger");
  });

  // Remove the image
  // $("img#the_img").on("dblclick", function(){
  //   $(this).remove();
  // });



  // ----------------------- 10. 11. CSS Selectors  -----------------------
  // $("#steps li").css({
  //   "color": "#582e8c",
  //   "font-size": "1.3em"
  // });

  // > It means only the direct child element (not elements within the child)
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

  // The use of !=
  // To target the class name of <p> that is not instruct_title
  // $("p[class!='instruct_title']").css({ "border": "1px solid green" });

  // The carrot equal to ^= (starts with)
  // To target the class name that is start with 'imp'
  // $("[class^='imp']").css({ "border": "1px solid green" });

  // The use of $= (ends with)
  // To target the class name that is end with 'ant'
  // $("[class$='ant']").css({ "border": "1px solid green" });

  // The use of tolda equals ~= (match Entire word)
  // To target that contain the whole word of 'steps'
  // $("[id~='steps']").css({ "border": "1px solid green" });

  // The use of asterisk equals *= (substring chars appear in)
  // To target that contain the id of 'closing'
  // $("[id*='closing']").css({ "border": "1px solid green" });

  // The use of :has(selector)
  // To target div that has <p>
  // $("div:has(p)").css({ "border": "1px solid green" });
  // To target div that has header
  // $("div:has(:header)").css({ "border": "1px solid green" });

  // To target all headers on the page
  // $(":header").css({ "border": "1px solid green" });

  // The use of :not(selector) - going to be negated
  // To target the li class name is not 'important'
  // $("li:not(.important)").css({ "border": "1px solid green" });

  // To target the div that doesn't have a header inside of them
  // $("div:not(:has(:header))").css({ "border": "1px solid green" });



  // ------------------------ 12. DOM Traversal  ------------------------

  // The use of .find(selector)
  // instead of using $("#math_subjects li")
  // $("#math_subjects").find("li").css({ "border": "1px solid green" });

  // The use of .children(selector)
  // $("#courses").children("li").css({ "border": "1px solid green" });

  // The use of .first() and .last
  // $("#courses").children("li").first().css({ "border": "1px solid green" });
  // $("#courses").children("li").last().css({ "border": "1px solid green" });

  // The use of .parent(selector) and .parents(selector) -> all ancestors which include body and html
  // $("#courses").children("li").children().parent().css({ "border": "1px solid green" });
  // $("#courses").children("li").children().parents().css({ "border": "1px solid green" });

  // Walking the DOM
  // The use of .next(selector) and .prev(selector)
  // $("#courses").children("li").css({ "border": "1px solid green" });
  // $("#courses").children("li").next().css({ "border": "1px solid green" });
  // $("#courses").children("li").prev().css({ "border": "1px solid green" });

  // The use of .closest() -> closest ancestors
  // $("#courses").children("li").children().first().closest("ul").css({ "border": "1px solid green" });
  // $("#courses").children("li").children().first().parent().css({ "border": "1px solid green" });
  // $("#courses").children("li").children().first().parents("ul").css({ "border": "1px solid green" });



  // ------------------------ 13. DOM Manipulation ------------------------

  // The use of .append(selector)
  $("li ul#math_subjects").append("<li class='list-group-item' style='border: 1px solid green;'>New Course</li>");

  // $() - contain a DOM element
  const $newCourse = $("<li class='list-group-item' style='border: 1px solid blue;'>Data Analyst</li>");
  const newCourse2 = "<li class='list-group-item' style='border: 1px solid #00baff;'>Quick Calculate</li>";
  $("li ul#math_subjects").parent().append( $newCourse );
  // $("li ul#math_subjects").parent().append( $newCourse );
  // $("li ul#math_subjects").parent().append( newCourse2 );
  $("li ul#math_subjects").parent().append( newCourse2 );

  $("li ul#math_subjects").parent().append( $newCourse );

  // Move all the h3 on the page after the li element
  // $("li ul#math_subjects").append( $("h3") );

  // The use of .prepend(selector)
  // $("li ul#math_subjects").prepend(newCourse);

  // The use of .after(selector)
  // $("li ul#math_subjects").after(newCourse);

  // The use of .before(selector)
  // $("li ul#math_subjects").before(newCourse);

  // The use of .remove(selector)
  // $newCourse.remove();

  // Can not remove the below variable
  // newCourse2.remove();

  // $("#science_subjects").remove();


  // -------- Handle Event Bubbling During DOM Manipulation --------
  // Add a course to the list by enter the data from input
  let enteredCourse;

  $("#btn_1").on("click", function() {
    enteredCourse = $("input.entered-word").val();
    // console.log(enteredCourse);
    $("#statement").find("h3").text("You have entered: " + enteredCourse);
    $("#statement").css({
      "background-color": "#abffb8",
      "margin": "10px 0",
      "padding": "10px"
    });
  });

  $(".main-course").on("click", function(e) {
    let $liNew = $("<li class='list-group-item'>" + enteredCourse + "</li>");
    $liNew.css({ "background-color": "#fbffab" });
    $(this).append($liNew);
    e.stopPropagation();
  });



  // ----------------- 14. The Event Lifecycle -----------------

  // The use of .stopPropagation() - Prevent the event from bubbling back
  // Event Delegation - eg. button within the <div>

  // $("button.see-details").on("click", function(event) {
  $("#books_div > .book").on("click", "button", function(event) {
    const price = $(this).closest(".book").data("price");
    const author = $(this).closest(".book").data("author");
    const details = $("<p> Price: " + price + "<br/>Author: <b>" + author + "</b> </p>" );
    $(this).after(details);
    $(this).closest(".book").css({ "background-color": "rgba(153, 255, 187, 0.5)" });
    $(this).remove();
    event.stopPropagation();

    // $("p.book-price, p.book-author").removeClass("display_none");
    // $(this).hide();
  });

  // Click the <div>, CSS changed, doesn't effect the button
  $("div.book").on("click", function() {
    $(this).css({
      "background-color": "rgba(202, 180, 254, 0.5)",
      "border": "1.5px solid rgba(154, 114, 251, 0.5)"
    });
  });

  // For the Already Completed Books
  // $("button.see-details2").on("click", function(e) {
  $("#books_completed > .book").on("click", "button", function(e) {
    const purchased = $(this).closest(".book").data("purchased");
    const author = $(this).closest(".book").data("author");
    const rating = $(this).closest(".book").data("myrating");
    const details = $(
      `<p> Purchased: ${purchased}
      <br/>Author: <b> ${author}
      </b> <br/> My Rating: ${rating}
      <i class='fa fa-star' aria-hidden='true' style='color: #e4b200;'></i>
      <i class='fa fa-star' aria-hidden='true' style='color: #e4b200;'></i>
      <i class='fa fa-star' aria-hidden='true' style='color: #e4b200;'></i>
      <i class='fa fa-star' aria-hidden='true' style='color: #e4b200;'></i>
      <i class='fa fa-star' aria-hidden='true' style='color: #e4b200;'></i>
      </p>` );
    $(this).after(details);
    $(this).remove();
    e.stopPropagation();
  });



  // ----------------- 16. Implementing AJAX -----------------

  // var root = "https://jsonplaceholder.typicode.com/posts/1";
  // var root = "https://jsonplaceholder.typicode.com/comments";

  // Example 1.
  $(".btn_ajax").on("click", function() {
    const url = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/some_random_text.txt";
    $("div.main_ajax").load(url);
  });

  // Example 2.
  $(".btn_ajax2").on("click", function() {
    // const url2 = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html";
    const url2 = "https://raw.githubusercontent.com/imtiazahmad007/resources/master/sample_table.html table fieldset:first";
    $("div.main_ajax2").load(url2);
  });

  // Example 3. $.ajax(url [,options])
  // Callback Functions






  // ----------------- CodeTest WEBCHAT: Button on click -----------------

  // Once the user clicks on the "Chat now" link, he gets a message from Mary
  $("#firstBtn").on("click", function() {
    $("h4#statement").delay(1000).slideDown(1000);
  });

  // The user enters the message and presses send button. The conversation ballon is updated with the message.
  // After 3 seconds, Mary replies with the message
  $("button#send_chat").on("click", function(){
    var enterChat = $("input#entered_chat").val();
    // console.log(enterChat);

    $('<h4 style="font-size: 18px">Nicholas: "' + enterChat + '"</h4>').appendTo("h4#user-statement");
    $("#mary-reply").delay(3000).slideDown(1000);
  });



}); // END.ready function
