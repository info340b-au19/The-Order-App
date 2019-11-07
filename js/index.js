'use strict';

$(function () {
	// Adding tab functionality
	var tabs = $(".sb-button");
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

		if ($("#search-mobile").hasClass("active")) {
			$("#search-mobile").removeClass("active");
		}
	}

	$("#mag").click(mobileSearch);
	$("#search-button").click(function () {
		$(this).add("active");
	})

	function mobileSearch() {
		$("#mobile-overlay").addClass("active");
		$("#search-mobile").addClass("active");
	}

	$("#search-back").click(searchBack);

	function searchBack() {
		$("#mobile-overlay").removeClass("active");
		$("#search-mobile").removeClass("active");
	}
	// ------------------------------------------

	// RESTAURANT CONTENT FUNCTIONALITY

	$("#mcd").click(homeScreen);

	function homeScreen() {
		$(".sb-head > h1").removeClass("hidden");
		contentTabs[0].addClass("hide");
		$(".current").removeClass("current");
		contentTabs[1].removeClass("hide");
		$("#sb-home").addClass("current");
	}
	//-----------HEADER FUNCTIONALITY-----------------------------
	$("#cart").click(toOrderPage);
	function toOrderPage() {
		$("#sb-order").click();
	}



	// -----------HOME FUNCTIONALITY------------------------------

	// QUEUE BUTTON

	$("#queue").click(queue);

	function queue() {
		var q = $(this);
		var qnumber = $("#queue-number");
		if (q.hasClass("delivery")) {

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

	$("#small-queue").click(smallQueue);
	function smallQueue() {
		var q = $(this);
		var qnumber = $("#queue-number");
		if (q.hasClass("delivery")) {
			if (q.hasClass("queue-dactive")) {
				q.removeClass("queue-dactive");
				qnumber.html("3");


			} else {
				q.addClass("queue-dactive");
				qnumber.html("4");
			}
		} else {
			if (q.hasClass("queue-active")) {
				q.removeClass("queue-active");
				q.css("background-color", "#ff6666"); // Some reason background doesnt change back to default
				qnumber.html("9");
			} else {
				q.addClass("queue-active");
				qnumber.html("10");
			}
		}
	}

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
		$("#small-queue").removeClass("queue-active");
		$("#small-queue").removeClass("queue-dactive")

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
			$("#small-queue").removeClass("delivery");
			$("#small-queue").addClass("dhover");

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
			$("#small-queue").addClass("delivery");
			$("#small-queue").removeClass("dhover");

		}
	}

	// HOME - MENU

	$("#home-menu").click(homeToMenu);

	function homeToMenu() {
		contentTabs[1].addClass("hide");
		$(".current").removeClass("current");
		contentTabs[2].removeClass("hide");
		$("#sb-menu").addClass("current");
	}

	// -----------MENU FUNCTIONALITY------------------------------


	// MENU - REVIEWS

	// MOBILE CLICK

	fetch("../review.json")
		.then(function (response) {
			var dataPromise = response.json();
			return dataPromise;
		}).then(function (data) {
			reviewClickMobile(data);
			reviewClickDesktop(data);

		})
		.catch(function (error) {
			displayError(error);
		})

	function reviewClickDesktop(data) {
		$("#desktop-0").click(function () {
			reviewPage(data[0]);
		})
		$("#desktop-1").click(function () {
			reviewPage(data[1]);
		})
		$("#desktop-2").click(function () {
			reviewPage(data[2]);
		})
		$("#desktop-3").click(function () {
			reviewPage(data[3]);
		})
		$("#desktop-4").click(function () {
			reviewPage(data[4]);
		})
		$("#desktop-5").click(function () {
			reviewPage(data[5]);
		})
		$("#desktop-6").click(function () {
			reviewPage(data[6]);
		})
		$("#desktop-7").click(function () {
			reviewPage(data[7]);
		})
		$("#desktop-8").click(function () {
			reviewPage(data[8]);
		})
		$("#desktop-9").click(function () {
			reviewPage(data[9]);
		})
		$("#desktop-10").click(function () {
			reviewPage(data[10]);
		})
		$("desktop-11").click(function () {
			reviewPage(data[11]);
		})
	}

	function reviewClickMobile(data) {
		$("#mobile-0").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[0]);
		})
		$("#mobile-1").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[1]);
		})
		$("#mobile-2").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[2]);
		})
		$("#mobile-3").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[3]);
		})
		$("#mobile-4").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[4]);
		})
		$("#mobile-5").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[5]);
		})
		$("#mobile-6").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[6]);
		})
		$("#mobile-7").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[7]);
		})
		$("#mobile-8").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[8]);
		})
		$("#mobile-9").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[9]);
		})
		$("#mobile-10").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[10]);
		})
		$("#mobile-11").click(function () {
			if ($(window).width() > 1300) {
				return;
			}
			reviewPage(data[11]);
		})
	}

	function reviewPage(json) {
		$("#overlay").removeClass("hidden");
		var data = json;

		// CLEAR TO AVOID DUPLICATE
		$("#review-review").html("");

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
		$("#review-price").html("$<span>" + data.info.price + "</span>");

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

	$(".back").click(back);
	// $("#overlay").click(back); CAUSES PROBLEMS

	function back() {
		$("#overlay").addClass("hidden");

		// RESET STARS AND REVIEWS SO IT DOESNT KEEP ADDING
		$("#review-review").html("");
		$("#review-rating .fa.fa-star.checked").each(function () {
			$(this).removeClass("checked");
		});
	}

	function displayError(error) {
		var p = document.createElement("P");
		p.html(error.message);
		p.addClass("alert");
		p.addClass("alert-danger");
		$("#error").appendChild(p);
		content.each(function () {
			$(this).addClass("hide");
		})
		$("#error").removeClass("hide");
	}

	$("#mobile-quantity-sub").click(function () {
		changeQuantityMobile($(this));
	});
	$("#mobile-quantity-add").click(function () {
		changeQuantityMobile($(this));
	});

	$("#mobile-quantity-addBtn").click(function () {
		if ($.isNumeric($("#mobile-quantity").val())) {
			if ($("#mobile-quantity").val() != 0) {
				orderOnReview($(this), $("#mobile-quantity").val());
				$("#mobile-message").removeClass("hidden");
				setTimeout(
					function () {
						$("#overlay").addClass("hidden");
						$("#mobile-message").addClass("hidden");
					}, 2000
				);
			} else {
				$("#overlay").addClass("hidden");
			}
		}
	});

	function changeQuantityMobile(button) {
		var quantity = $("#mobile-quantity").val()
		if (button.hasClass("sub")) {
			if (quantity != 0) {
				$("#mobile-quantity").val(parseInt(quantity) - 1);
			}
		} else {
			$("#mobile-quantity").val(parseInt(quantity) + 1);
		}
	}

	// MENU - ORDER & Display on Myorder Page
	$(".orderBt").click(orderScreen);

	// QUANTITY ORDER

	var current;

	function orderScreen(event) {
		$("#order-container").removeClass("hidden");
		$("#order-overlay").removeClass("hidden");
		$("#quantity").val("1");
		current = event;
	}

	$("#quantity-sub").click(function () {
		changeQuantity($(this));
	});
	$("#quantity-add").click(function () {
		changeQuantity($(this));
	});

	$("#quantity-addBtn").click(function () {
		if ($.isNumeric($("#quantity").val())) {
			if ($("#quantity").val() != 0) {
				order(current, $("#quantity").val());
				$("#message").removeClass("hidden");
				setTimeout(
					function () {
						$("#order-container").addClass("hidden");
						$("#order-overlay").addClass("hidden");
						$("#message").addClass("hidden");
					}, 2000
				);
			} else {
				$("#order-container").addClass("hidden");
				$("#order-overlay").addClass("hidden");
			}
		}
	});

	function changeQuantity(button) {
		var quantity = $("#quantity").val()
		if (button.hasClass("sub")) {
			if (quantity != 0) {
				$("#quantity").val(parseInt(quantity) - 1);
			}
		} else {
			$("#quantity").val(parseInt(quantity) + 1);
		}
	}

	function order(event, quantity) {
		$(".noItemAlert").addClass("hide");
		$(".total-price, table").removeClass("hide");

		var dishName = $(event.target).parent().parent().find('.dishName').text();
		var dishPrice = $(event.target).parent().parent().find('.dishPrice span').text();

		var newOrderDish = $("<tr></tr>");
		newOrderDish.append($('<td></td>').text(dishName));
		newOrderDish.append($('<td></td>').text(quantity));
		var dishPriceSpan = $("<span></span>").text(dishPrice * quantity);
		newOrderDish.append($('<td>$</td>').append(dishPriceSpan));

		$("#myorder tbody").append(newOrderDish);

		// calculate total price
		var totalPrice = parseFloat(0);
		document.querySelectorAll('tbody span').forEach(function (node) {
			totalPrice += parseFloat(node.textContent);
		});
		$(".total-price p").text("Total Price: $" + totalPrice);
	}

	// MENU - ORDER & Display on Myorder Page(for smaller screen)
	$("#mobile-quantity-button").click(orderOnReview);
	function orderOnReview(event, quantity) {
		$(".noItemAlert").addClass("hide");
		$(".total-price, table").removeClass("hide");

		var dishName = $(event).parent().find('#review-name').text();
		var dishPrice = $(event).parent().find('#review-price span').text();

		var newOrderDish = $("<tr></tr>");
		newOrderDish.append($('<td></td>').text(dishName));
		newOrderDish.append($('<td></td>').text(quantity));
		var dishPriceSpan = $("<span></span>").text(dishPrice * quantity);
		newOrderDish.append($('<td>$</td>').append(dishPriceSpan));

		$("#myorder tbody").append(newOrderDish);

		// calculate total price
		var totalPrice = parseFloat(0);
		document.querySelectorAll('tbody span').forEach(function (node) {
			totalPrice += parseFloat(node.textContent);
		});
		$(".total-price p").text("Total Price: $" + totalPrice);
	}

	//-----------SERVICE FUNCTIONALITY-------------------------

	$("#submit-service").click(Submit);

	const options = ["Notify someone for assistance", "Add more to your current order", "Change order / problem with an order", "Other"];

	function Submit() {

		if ($("#service-description p").length > 8) {
			$("#service-message").removeClass("hidden");
			setTimeout(
				function () {
					$("#service-message").addClass("hidden");
				}, 3000
			);
		} else {
			//var time = $(":checkbox:checked").length * 3;

			$(":checkbox").each(function (index) {
				if (this.checked) {
					$("#service-description").append($("<p>" + options[index] + "<p>"));
					$("#service-time").append($("<p>3 minutes<p>"));
					$("#service-timeleft").html(parseInt($("#service-timeleft").html()) + 3 + ":00");
				}
			})

			$(":checkbox").prop('checked', false).parent().removeClass('active');
		}
	}

	/* will implement in future, i tired
		var serviceCountdown = function () {
			var time = $("#service-timeleft").attr("value") * 1000 * 60;
		}
	
	
		setInterval(, 60 * 1000);
	
	*/
	// ------------ORDER FUNCTIONALITY------------------------------

	$("#check-out").click(checkOut);
	function checkOut() {
		$(".noItemAlert").removeClass("hide");
		$(".total-price, table").addClass("hide");
	}

	$("#order-review").click(orderReview);
	function orderReview() {
		$(".total-price, table, .noItemAlert, .orderPageBt").addClass("hide");
		$(".orderpage-review").removeClass("hide");

	}

	$("#cancel").click(reviewCancel);
	function reviewCancel() {
		$(".orderPageBt").removeClass("hide");
		$(".orderpage-review").addClass("hide");
		if ($("#myorder tbody").children().length > 0) {
			$(".total-price, table").removeClass("hide");
		} else {
			$(".noItemAlert").removeClass("hide");
		}
	}

	$("#post").click(reviewPost);
	function reviewPost() {
		$(".orderPageBt").removeClass("hide");
		$(".orderpage-review").addClass("hide");
		if ($("#myorder tbody").children().length > 0) {
			$(".total-price, table").removeClass("hide");
		} else {
			$(".noItemAlert").removeClass("hide");
		}
	}

});