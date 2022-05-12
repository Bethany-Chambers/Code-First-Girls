document.getElementById("cakebutton").onclick = function () {
  document.getElementById("cakeofmonth").removeAttribute("hidden");
};

function setDate() {
  const month = new Date().toLocaleString("default", { month: "long" });
  document.getElementById("cakedate").innerText =
    "Click to reveal " + month + "'s cake of the month";
}

setDate();
