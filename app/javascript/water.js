window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("lists")
  const waterpercent = document.getElementById("waterpercent")

  let count = 0;

  pullDownButton.addEventListener('click', function() {
    count += 1
    if (count == 0) {
      pullDownButton.setAttribute("style", "background: url('/images/one.png');")
      waterpercent.innerHTML = "0%"
    } else if (count == 1) {
      pullDownButton.setAttribute("style", "background: url('/images/two.png');") 
      waterpercent.innerHTML = "20%"
    } else if (count == 2) {
      pullDownButton.setAttribute("style", "background: url('/images/three.png');") 
      waterpercent.innerHTML = "40%"
    } else if (count == 3) {
      pullDownButton.setAttribute("style", "background: url('/images/four.png');")
      waterpercent.innerHTML = "60%"
    } else if (count == 4) {
      pullDownButton.setAttribute("style", "background: url('/images/five.png');")
      waterpercent.innerHTML = "80%"
    } else if (count == 5) {
      pullDownButton.setAttribute("style", "background: url('/images/six.png');")
      waterpercent.innerHTML = "100%"
    } else {
      pullDownButton.setAttribute("style", "background: url('/images/six.png');")
      waterpercent.innerHTML = "100%"
      count = -1
    }

  })
})

window.addEventListener('load', function(){

  const waterpercent = document.getElementById("waterpercent")


  waterpercent.addEventListener('click', function() {
    console.log("click OK")
  })
})