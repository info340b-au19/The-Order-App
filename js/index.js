'use strict';

$(function() {
  var tabs = $(".sbbutton");
  var content = $(".content");
  var contentTabs = [$("#restaurants"), $("#home"), $("#menu"), $("#service"), $("#myorder")];
  console.log(content);
  
  Array.prototype.forEach.call(tabs, function(element, index) {
    element.addEventListener("click", changeTabs);
  });
  
  function changeTabs() {
    $(".current").removeClass("current");
    $(this).addClass("current");
    for (var i = 0; i < content.length; i++) {
      contentTabs[i].find("div")
    }
    
  }
});