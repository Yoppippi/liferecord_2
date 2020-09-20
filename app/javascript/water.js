window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("lists")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background: url('/images/one.png');")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.setAttribute("style", "background: url('/images/one.png');")
  })

  let count = 0;
  pullDownButton.addEventListener('click', function() {
    count += 1
    if (count == 1) {
      pullDownButton.setAttribute("style", "background: url('/images/two.png');")
    } else if (count == 2) {
      pullDownButton.setAttribute("style", "background: url('/images/three.png');") 
    } else if (count == 3) {
      pullDownButton.setAttribute("style", "background: url('/images/four.png');")
    } else if (count == 4) {
      pullDownButton.setAttribute("style", "background: url('/images/five.png');")
    } else if (count == 5) {
      pullDownButton.setAttribute("style", "background: url('/images/six.png');")
    } else if (count == 6) {
      count = 0
    } else {
      pullDownButton.setAttribute("style", "background: url('/images/six.png');")
    }

  })
})