'use strict';

$(function () {
  // Adding tab functionality
  var tabs = $(".sbbutton");
  var content = $(".content");
  // tabs restaurant - 0, home - 1, menu - 2, service - 3, my order - 4
  var contentTabs = [$("#restaurants"), $("#home"), $("#menu"), $("#service"), $("#myorder")];


  Array.prototype.forEach.call(tabs, function (element, index) {
    element.addEventListener("click", changeTabs(index));
  });

  function changeTabs(index) {
    return function () {
      $(".current").removeClass("current");
      $(this).addClass("current");

      content.each(function () {
        $(this).addClass("hide");
      })

      contentTabs[index].removeClass("hide");

      if (index != 0) {
        $("h1").removeClass("hidden");
      } else {
        $("h1").addClass("hidden");
      }
    }
  }

  // ------------------------------------------

  $("#mcd").click(homeScreen);

  function homeScreen() {
    alert("hello");
  }


  // HOME CONTENT

  // QUEUE BUTTON

  $("#queue").click(queue);

  function queue() {
    var input = $("#group-number");
    if (input.val() && Math.floor(input.val()) == input.val() && $.isNumeric(input.val())) {
      var q = $(this);
      var qnumber = $("#queue-number");
      if (q.hasClass("queue-active")) {
        q.removeClass("queue-active");
        qnumber.html("9");
        input.prop("disabled", false);
      } else {
        $(this).addClass("queue-active");
        qnumber.html("10");
        input.prop("disabled", true);
      }
    }
  }

  var mintes = 15 * 60 * 1000;

  var countdown = function () {
    $("#queue-wait").each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      }
    })
  }

  setInterval(countdown, 60 * 1000);


  // HOME - DELIVERY BUTTON

  $("#home-delivery").click(delivery);

  function delivery() {
    var deliveryButton = $("#home-delivery");
    if(deliveryButton.hasClass("delivery")) {
      deliveryButton.removeClass("delivery");
      deliveryButton.addClass("dhover");
      deliveryButton.html("DINE IN");

      // DINE-IN MODE
      $("#queue-header").html("Groups in queue");
      $("#queue-number").html("9");
      $("#group-number").removeClass("hide");
      $("#queue-wait").html("15");
      $("#queue").removeClass("delivery");
      $("#queue").addClass("dhover");
      $("#home-menu").removeClass("delivery");
      $("#home-menu").addClass("dhover");

    } else {
      // DELIVERY BUTTON
      deliveryButton.addClass("delivery");
      deliveryButton.removeClass("dhover");
      deliveryButton.html("DELIVERY");

      // DELIVERY MODE
      $("#queue-header").html("Delivery queue");
      $("#queue-number").html("3");
      $("#group-number").addClass("hide");
      $("#queue-wait").html("5");
      $("#queue").addClass("delivery");
      $("#queue").removeClass("dhover");
      $("#home-menu").addClass("delivery");
      $("#home-menu").removeClass("dhover");

    }
  }

  // HOME - MENU

  $("#home-menu").click(homeToMenu);

  function homeToMenu() {
    contentTabs[1].addClass("hide");
    $(".current").removeClass("current");
    contentTabs[2].removeClass("hide");
    $("#sbmenu").addClass("current");
  }

  // ------------------------------------------
});