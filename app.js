setInterval(() => {
  currentTime()
}, 1000)

function currentTime() {
  let time = new Date() //Read up and fully understand how this behaves/works
  let hour = time.getHours()
  let min = time.getMinutes()
  let sec = time.getSeconds()

  //Formatting
  if (hour < 10) {
    hour = '0' + hour.toString()
  }

  if (min < 10) {
    min = '0' + min.toString()
  }

  if (sec < 10) {
    sec = '0' + sec.toString()
  }

  //Current time
  let currentTime = hour + ':' + min + ':' + sec

  //Current date, still working on this one

  const clock = document.querySelector('#time')

  clock.innerHTML = currentTime
}

currentTime()
