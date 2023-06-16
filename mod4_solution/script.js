(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var greetingElement = document.getElementById("greeting");

  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    var message;

    if (firstLetter === 'j') {
      message = "Good Bye " + names[i];
    } else {
      message = "Hello " + names[i];
    }

    var pElement = document.createElement("p");
    pElement.textContent = message;
    greetingElement.appendChild(pElement);
  }
})();
