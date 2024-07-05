const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  // console.log(clock)
  clock.innerHTML = date.toLocaleTimeString('en-us');
},1000)