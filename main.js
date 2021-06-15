toggleDoor = (event) => {
  //   console.log(event.target.nodeName);
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (event.target !== event.currentTarget) {
  //     return;
  //   }
  //   console.log(event);
  var snd = new Audio("car-door-open-1.wav");
  snd.play();
  var door = event.target.getAttribute("data-door");
  console.log("door_id:", door);
  var element = document.getElementById(door);
  element.classList.toggle(door + "-toggle");
};
