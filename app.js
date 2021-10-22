setInterval(() => {
  currentTime()
}, 1000)

function currentTime() {
  let time = new Date() //Read up and fully understand how this behaves/works
  let dayName = time.getDay()
  let month = time.getMonth()
  let year = time.getFullYear()
  let date = time.getDate()
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

  //Current date, weekdays starts on Sunday for some reason, haven't found out why.
  //Temporary solution is to put the dayName - 1 and format the week accordingly
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  let presentDay = week[dayName - 1] + ', ' + months[month] + ' ' + date + ', ' + year

  const clock = document.querySelector('#time')
  const dayIntro = document.querySelector('#dayIntro')

  clock.innerHTML = currentTime
  dayIntro.innerHTML = presentDay
}

currentTime()
