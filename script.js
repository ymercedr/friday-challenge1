var num = 0;
var hasUpgraded = false;

function addCookie() {
  num++;
  document.querySelector(".cookieCount").innerHTML = num + " cookies";
  console.log(num);
  if (num == 15) {
    // alertLabel = "Check for upgrades!";
    alert("Your first upgrade is unlocked!");
  }
}

function extraClicks() {
  if (num >= 15 && hasUpgraded === false) {
    hasUpgraded = true;
    console.log("Bought upgrade");
    console.log(hasUpgraded);
    var intervalId = setInterval(function () {
      addCookie();
    }, 1000);
  }
}
