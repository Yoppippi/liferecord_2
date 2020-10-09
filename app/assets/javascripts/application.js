//= require jquery3
//= require jquery
//= require popper
//= require bootstrap
//= require moment
//= require fullcalendar


//carender-------------------------//
$(function () {
    // 画面遷移を検知
    $(document).on('turbolinks:load', function () {
        if ($('#calendar').length) {

            function Calendar() {
                return $('#calendar').fullCalendar({
                });
            }
            function clearCalendar() {
                $('#calendar').html('');
            }

            $(document).on('turbolinks:load', function () {
                Calendar();
            });
            $(document).on('turbolinks:before-cache', clearCalendar);

            //events: '/events.json', 以下に追加
            $('#calendar').fullCalendar({
                events: '/events.json',
                //カレンダー上部を年月で表示させる
                titleFormat: 'YYYY年 M月',
                //曜日を日本語表示
                dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
                //ボタンのレイアウト
                header: {
                    left: 'agendaWeek, agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                defaultView: 'agendaWeek',
                //終了時刻がないイベントの表示間隔
                defaultTimedEventDuration: '03:00:00',
                buttonText: {
                    prev: '前',
                    next: '次',
                    prevYear: '前年',
                    nextYear: '翌年',
                    today: '今日',
                    month: '月',
                    week: '週',
                    day: '日'
                },
                // Drag & Drop & Resize
                editable: true,
                //イベントの時間表示を２４時間に
                timeFormat: "HH:mm",
                //イベントの色を変える
                eventColor: '#87cefa',
                //イベントの文字色を変える
                eventTextColor: '#000000',
                eventRender: function(event, element) {
                    element.css("font-size", "0.8em");
                    element.css("padding", "5px");
                }
            });
        }
    });
});
//carender-------------------------------//
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

  const stopwatchRecord = document.getElementById("stopwatchRecord")
  const hour = document.getElementById("hour")
  const minute = document.getElementById("minute")
  const second = document.getElementById("second")

  stopwatchRecord.addEventListener('click', function() {
    hour.innerHTML = $stopwatchHour;
    minute.innerHTML = $stopwatchMinute;
    second.innerHTML = $stopwatchSecond;
    

  })
})
//timer2-----------------------------//

