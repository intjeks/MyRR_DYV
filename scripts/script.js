function createElement(evt) {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode("U added new element!");
  newDiv.appendChild(newContent);

  document.body.insertBefore(newDiv, evt.target);
}

const button = document.getElementById("btn");

button.addEventListener("click", createElement);