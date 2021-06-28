let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (var item of buttons) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    }
    else if(buttonText == "DEL") {
      screenValue = screenValue.slice(0, -1);
      screen.value = screenValue;
    }
    else if (buttonText == '=') {
      try {
        screen.value = eval(screenValue);
        screenValue = "";
      }
      catch(err) {
        screen.value = "Invalid Value";
        screenValue = "";
      }
    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}
