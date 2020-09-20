//= require jquery3
//= require popper
//= require bootstrap

// timer----------------------------------
window.onload = initialize;
function initialize() {
    document.getElementById( 'stopwatchStartAndStop' ).onclick=stopwatch;
    document.getElementById( 'stopwatchClear' ).onclick=stopwatchClear;
}

var $enable = false, $stopwatchTime, $startTime, $stopwatchTimeAdd = 0;
function stopwatch() {
    $enable = !$enable;
    if( $enable ){
        stopwatchStart();
    }else{
        stopwatchStop();
    }
}
function stopwatchStart() {
    document.getElementById( 'stopwatchStartAndStop' ).innerHTML= 'ストップ';
    if( $startTime === undefined ){
        var $startDate = new Date();
        $startTime = $startDate.getTime();
    }
    var $nowDate = new Date();
    $stopwatchTime = $nowDate.getTime() - $startTime + $stopwatchTimeAdd;
    $stopwatchMillisecond = $stopwatchTime % 1000;
    $stopwatchSecond = Math.floor( $stopwatchTime / 1000 ) % 60;
    $stopwatchMinute = Math.floor( $stopwatchTime / 1000 / 60 ) % 60;
    $stopwatchHour = Math.floor( Math.floor( $stopwatchTime / 1000 / 60 ) / 60 );
    if( $stopwatchMillisecond < 10 ){
        $stopwatchMillisecond = '0' + $stopwatchMillisecond;
    }
    if( $stopwatchMillisecond < 100 ){
        $stopwatchMillisecond = '0' + $stopwatchMillisecond;
    }
    if( $stopwatchSecond < 10 ){
        $stopwatchSecond = '0' + $stopwatchSecond;
    }
    if( $stopwatchMinute < 10 ){
        $stopwatchMinute = '0' + $stopwatchMinute;
    }
    if( $stopwatchHour < 10 ){
        $stopwatchHour = '0' + $stopwatchHour;
    }
    document.getElementById( 'stopwatchHour' ).innerHTML= $stopwatchHour;
    document.getElementById( 'stopwatchMinute' ).innerHTML= $stopwatchMinute;
    document.getElementById( 'stopwatchSecond' ).innerHTML= $stopwatchSecond;
    document.getElementById( 'stopwatchMillisecond' ).innerHTML= $stopwatchMillisecond;
    $stopwatch = setTimeout( "stopwatchStart()", 1 );
}
function stopwatchStop() {
    document.getElementById( 'stopwatchStartAndStop' ).innerHTML= 'スタート';
    clearTimeout( $stopwatch );
    $startTime = undefined;
    $stopwatchTimeAdd = $stopwatchTime;
}
function stopwatchClear() {
    $startTime = undefined;
    $stopwatchTimeAdd = 0;
    document.getElementById( 'stopwatchHour' ).innerHTML= '00';
    document.getElementById( 'stopwatchMinute' ).innerHTML= '00';
    document.getElementById( 'stopwatchSecond' ).innerHTML= '00';
    document.getElementById( 'stopwatchMillisecond' ).innerHTML= '000';
}
// -->
// timer------------------------------//
// timer2------------------------------
window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("stopwatchRecord")
  const hour = document.getElementById("hour")
  const minute = document.getElementById("minute")
  const second = document.getElementById("second")

  pullDownButton.addEventListener('click', function() {
    hour.innerHTML = $stopwatchHour;
    minute.innerHTML = $stopwatchMinute;
    second.innerHTML = $stopwatchSecond;
    

  })
})
//timer2-----------------------------//

