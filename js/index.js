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

      $("#mobile-overlay").removeClass("active");
      $("#sidebar").removeClass("active");
      $("#hamburger").removeClass("active");
    }
  }

  $("#hamburger").click(openSidebar);

  function openSidebar() {
    $(this).addClass("active");
    $("#sidebar").addClass("active");
    $("#mobile-overlay").addClass("active");
  }

  $("#mobile-overlay").click(closeSidebar);

  function closeSidebar() {
    $(this).removeClass("active");
    $("#sidebar").removeClass("active");
    $("#hamburger").removeClass("active");
  }

  // ------------------------------------------

  // RESTAURANT CONTENT FUNCTIONALITY

  $("#mcd").click(homeScreen);

  function homeScreen() {
    contentTabs[0].addClass("hide");
    $(".current").removeClass("current");
    contentTabs[1].removeClass("hide");
    $("#sbhome").addClass("current");
  }


  // -----------HOME FUNCTIONALITY------------------------------

  // QUEUE BUTTON

  $("#queue").click(queue);

  function queue() {
    var q = $(this);
    var qnumber = $("#queue-number");
    if (q.hasClass("delivery")) {
      // RESET DINE-IN BUTTONS

      if (q.hasClass("queue-dactive")) {
        q.removeClass("queue-dactive");
        qnumber.html("3");


      } else {
        q.addClass("queue-dactive");
        qnumber.html("4");
      }
    } else {
      var input = $("#group-number");
      if (input.val() && Math.floor(input.val()) == input.val() && $.isNumeric(input.val())) {
        if (q.hasClass("queue-active")) {
          q.removeClass("queue-active");
          qnumber.html("9");
          input.prop("disabled", false);
        } else {
          q.addClass("queue-active");
          qnumber.html("10");
          input.prop("disabled", true);
        }
      }
    }
  }

  var mintes = 15 * 60 * 1000;

  var countdown = function () {
    $("#queue-wait").each(function () {
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

    // RESET SCREENS AND BUTTON
    $("#queue").removeClass("queue-active");
    $("#queue-number").html("9");
    $("#group-number").prop("disabled", false);
    $("#group-number").val("");
    $("#queue").removeClass("queue-dactive");

    if (deliveryButton.hasClass("delivery")) {
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

  // -----------MENU FUNCTIONALITY------------------------------


  // MENU - REVIEWS

  // MOBILE CLICK
  if (window.matchMedia("(max-width: 1300px)")) {
    var mobile = "#mobile-"
    for (var i = 0; i < 2; i++) {
      console.log(i + "hello");
      $(mobile + i).click(function() {
        console.log(i);
        review(i - 1); // Not sure why i icremented 1 when inside here
      });
    }
  }

  function review(id) {
    $("#overlay").removeClass("hidden");
    fetch("../review.json")
      .then(function (response) {
        var dataPromise = response.json();
        return dataPromise;
      }).then(function (data) {
        reviewPage(data, id);
      })
      .catch(function (error) {
        alert("error");
      })
  }

  $(".back").click(back);

  function back() {
    $("#overlay").addClass("hidden");
  }

  function reviewPage(info, id) {
    var data = info[id];

    // Picture
    $("#review-image").attr("src", "img/" + data.info.src);
    $("#review-image").attr("alt", data.info.alt);

    // 1st Stars
    var infoStarNumber = Math.floor(parseInt(data.info.averageRating));
    $("#review-rating .fa").each(function (index) {
      if (index < infoStarNumber) {
        $(this).addClass("checked");
      }
    })

    // Name
    $("#review-name").html(data.info.foodName);

    // Review description
    $("#review-description").html(data.info.averageRating + " average based on " + data.info.ratingCount + " reviews.")

    // Bars
    $(".bar-5").css("width", data.info.ratings.fivestar + "%");
    $(".bar-4").css("width", data.info.ratings.fourstar + "%");
    $(".bar-3").css("width", data.info.ratings.threestar + "%");
    $(".bar-2").css("width", data.info.ratings.twostar + "%");
    $(".bar-1").css("width", data.info.ratings.onestar + "%");

    // Reviews
    var reviewSection = $("#review-review");
    const reviewTemplate =
      `<div class="review-row">
          <div class="side">
            <div>
              <img src="img/placeholder.png" alt="profile picture" class="profile">
              <p class="name">NAME</p>
            </div>
          </div>
          <div class="middle">
          <div class="mobile-head">
            <img src="img/placeholder.png" alt="profile picture" class="mobile-profile">
            <p class="mobile-name">NAME</p>
            <div class="review-mobile-stars">
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </div>
          </div>
        <p class="review-section">REVIEW TEXT</p>
      </div>
      <div class="side right">
          <div class="review-desktop-stars">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
          </div>
      </div>
    </div>
    <hr class="break">`;

    for (var i = 0; i < data.review.length; i++) {
      var reviewer = data.review[i];
      $(reviewTemplate).appendTo(reviewSection);

      // Pictures
      $(".profile").last().attr("src", "img/" + reviewer.picture);
      $(".mobile-profile").last().attr("src", "img/" + reviewer.picture);

      // Names
      $("p.name").last().html(reviewer.name);
      $(".mobile-name").last().html(reviewer.name);

      // Reviews
      $(".review-section").last().html(reviewer.review);

      // Stars (0 - 5)
      var star = parseInt(reviewer.rating)
      var mobileStar = $(".review-mobile-stars").last();
      var desktopStar = $(".review-desktop-stars").last();

      $(mobileStar).find("span").each(function (index) {
        if (index < star) {
          $(this).addClass("checked");
        }
      })

      $(desktopStar).find("span").each(function (index) {
        if (index < star) {
          $(this).addClass("checked");
        }
      })

    }
  }
  
  // MENU - ORDER
  $(".orderBt").click(order);
  function order(event) {
    $(".noItemAlert").addClass("hide");
    $(".total-price, table").removeClass("hide");
    
    var dishName = $(event.target).parent().parent().find('.dishName').text();
    var dishPrice = $(event.target).parent().parent().find('.dishPrice').text();
    // console.log(dishPrice);
    var newOrderDish = $("<tr></tr>");
    newOrderDish.append($('<td></td>').text(dishName));
    newOrderDish.append($('<td></td>').text(1));
    newOrderDish.append($('<td></td>').text(dishPrice));
    // newOrder.text(dishName); 
    $("#myorder tbody").append(newOrderDish);
    // console.log($("tbody td:last-child").text().length);
    
    // var totalPrice = 0;
    // for each (var item in $("tr:last-child")) {
    // totalPrice += item.text();
    // }
    
    
    // $(".total-price").text("Total Price: "+totalPrice);

  }
  //-----------SERVICE FUNCTIONALITY-------------------------


  // ------------ORDER FUNCTIONALITY------------------------------

  


});