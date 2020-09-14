
// Set target date and time
let countDown = new Date("October 26, 2020  11:59").getTime();

// Update count every second
let x = setInterval(() => {
  // Today's date
  let now = new Date().getTime();

  //Time remaining between now and future date
  let timeRemaining = countDown - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Output
  document.getElementById("countDown").innerHTML =
    days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";

  // If the count down is over, write some text
  if (timeRemaining < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);
