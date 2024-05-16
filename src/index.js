const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const startButton = document.getElementById("start-btn")
const toast = document.getElementById("toast")
const closetoast = document.getElementById("close-toast")
const closeMessage = document.getElementById("toast-message")

startButton.addEventListener("click", ()=>{
  // clearInterval(timer);
  startCountdown()
} )


// ITERATION 2: Start Countdown

const timerElement = document.getElementById("time")

function startCountdown() {
  remainingTime = DURATION

  timer = setInterval(() => {
    remainingTime -= 1;
    if (remainingTime >=0) {
      startButton.disabled = true;
      timerElement.innerText = remainingTime;
      if (remainingTime === 9){
        showToast("⏰ Final countdown! ⏰")
      }
      else if (remainingTime === 5){  
        showToast("Start the engines! 💥")
      }
    } else {
      showToast("Lift off! 🚀")
      startButton.disabled = false;
      clearInterval(timer);
    }
  }, 1000);
}


// ITERATION 3: Show Toast
function showToast(message) {
  closeMessage.innerText = message
  toast.classList.add("show")
  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000);
}

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  closetoast.addEventListener("click", ()=>{
    clearInterval(timer);
    closetoast.classList.remove("show")
    timerElement.innerText = DURATION;
    startCountdown();
  })
