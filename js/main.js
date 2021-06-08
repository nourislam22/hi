var getTheUserName = prompt("Hello! how are you?");

console.log(getTheUserName);

document.getElementById("username").innerText = getTheUserName;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })