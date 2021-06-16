toggleDoor = (event) => {
  console.log(event.target);
  var snd = new Audio("sound/car-door-open-1.wav");
  snd.play();
  var door = event.target.getAttribute("data-door");
  console.log("door_id:", door);
  var element = document.getElementById(door);
  if (element.classList.contains(door + "-toggle")) {
    anyDoorOpened--;
    element.classList.remove(door + "-toggle");
  } else {
    anyDoorOpened++;
    element.classList.add(door + "-toggle");
  }
};

let isLocked = false;
let anyDoorOpened = 0;

toggleLock = (event) => {
  if (anyDoorOpened > 0) {
    alert("Some Doors are still opened!");
    return;
  }
  var snd = new Audio("sound/car-lock-sound-effect.mp3");
  snd.play();
  var element = document.getElementsByClassName("lock-button")[0];
  element.firstChild.classList.toggle("fa-unlock");
  element.firstChild.classList.toggle("fa-lock");
  var buttons = document.getElementsByClassName("btn");
  if (!isLocked) {
    // We are trying to lock
    for (const button of buttons) {
      button.disabled = true;
    }
    element.style.backgroundColor = "indianred";
    isLocked = true;
    return;
  }
  // We are trying to unlock
  for (const button of buttons) {
    button.disabled = false;
  }
  element.style.backgroundColor = "teal";
  isLocked = false;
};
