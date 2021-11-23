
var noCoin = false;
var noEnemy = false;

$("div[id=menu-item]").mouseover(function (e) {
  $(".coin").removeClass("coin InsideContent active");
  $(e.target).prev().show();
  $(e.target).prev().addClass("active InsideContent coin");
});
$('div[id=menu-item]').click(function (e) {
	var dataNumber = $('.coin').data('number');
    switch(dataNumber) {
      case 1:
        sessionStorage.setItem("noCoin", noCoin);
        sessionStorage.setItem("noEnemy", noEnemy);
        window.location.href = "index.html";
      break;
    case 2:
      gameOptions();
      break;
    case 3:
      window.close();
      break;
    case 4:
      returnMenu();
      break;
    case 5:
      noCoin = true; 
      returnMenu();
      break;
    case 6:
        noEnemy = true;
        returnMenu();
        break;  
    case 7:
        howToPlay();
        break;   
    case 8:
        returnMenu2();
         break;     
  }
});
$(window).on("keydown", function (e) {
  var key = e.which;
  switch (key) {
    case 40:
      console.log("merge");
      findNextTarget("down");
      break;
    case 38:
      findNextTarget("up");
      break;
    case 13:
      var dataNumber = $(".coin").data("number");
      switch (dataNumber) {
        case 1:
            sessionStorage.setItem("noCoin", noCoin);
            sessionStorage.setItem("noEnemy", noEnemy);
            window.location.href = "index.html";
          break;
        case 2:
          gameOptions();
          break;
        case 3:
          window.close();
          break;
        case 4:
          noCoin = false;
          returnMenu();
          break;
        case 5:
          noCoin = true; 
          returnMenu();
          break;
        case 6:
            noEnemy = true;
            returnMenu();
            break;  
        case 7:
            howToPlay();
            break;   
        case 8:
            returnMenu2();
             break;     
      }
  }
});

function findNextTarget(direction) {
  var target;
  var dataNumber = $(".coin").data("number");
  switch (dataNumber) {
    case 1:
      if (direction == "down") {
        target = $('*[data-number="7"]');
      } else if (direction == "up") {
        target = $('*[data-number="3"]');
      }
      break;
    case 2:
      if (direction == "down") {
        target = $('*[data-number="3"]');
      } else if (direction == "up") {
        target = $('*[data-number="1"]');
      }
      break;
    case 3:
        if (direction == 'down') {
            target = $('*[data-number="1"]');
        } else if (direction == 'up') {
            target = $('*[data-number="2"]');
        }
        break;
    case 4:
        if (direction == 'down') {
            target = $('*[data-number="5"]');
        } else if (direction == 'up') {
            target = $('*[data-number="6"]');
        }
        break;
    case 5:
        if (direction == 'down') {
            target = $('*[data-number="6"]');
        } else if (direction == 'up') {
            target = $('*[data-number="4"]');
        }
        break;
    case 6:
        if (direction == 'down') {
            target = $('*[data-number="4"]');
        } else if (direction == 'up') {
            target = $('*[data-number="5"]');
        }
        break;
    case 7:
        if (direction == 'down') {
            target = $('*[data-number="2"]');
        } else if (direction == 'up') {
            target = $('*[data-number="1"]');
        }
        break;
  }
  $(".coin").removeClass("coin InsideContent active");
  target.show();
  target.addClass("active InsideContent coin");
}
function gameOptions() {
  target = $('*[data-number="4"]');
  $(".coin").removeClass("coin InsideContent active");
  target.show();
  target.addClass("active InsideContent coin");
  document.getElementById("row").style.display = "none";
  document.getElementById("row2").style.display = "block";
}
function howToPlay() {
    target = $('*[data-number="8"]');
    $(".coin").removeClass("coin InsideContent active");
    target.show();
    target.addClass("active InsideContent coin");
    document.getElementById("row").style.display = "none";
    document.getElementById("row3").style.display = "block";
  }
function returnMenu() {
  target = $('*[data-number="2"]');
  $(".coin").removeClass("coin InsideContent active");
  target.show();
  target.addClass("active InsideContent coin");
  document.getElementById("row2").style.display = "none";
  document.getElementById("row").style.display = "block";
}
function returnMenu2() {
    target = $('*[data-number="2"]');
    $(".coin").removeClass("coin InsideContent active");
    target.show();
    target.addClass("active InsideContent coin");
    document.getElementById("row3").style.display = "none";
    document.getElementById("row").style.display = "block";
  }
  var audio = new Audio("sound/coin.mp3");
  audio.volume = 0.3;
  if (audio) {
    window.addEventListener("keydown", function (event) {
      var key = event.which || event.keyCode;
        audio.load();
        audio.play();
      
    });
  }