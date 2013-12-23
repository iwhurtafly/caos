// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.fancybox
//= require jquery.cycle.all
//= require jquery.maximage.min
//= require jquery.ui.datepicker
//= require jquery-ui-timepicker-addon
//= require_tree .

jQuery(function($) {
  if (!navigator.userAgent.match(/MSIE 8.0/)) {
    $('#maximage').maximage();
  }
});

var dtp_option = {
        closeText: '閉じる',
        currentText: '現在日時',
        timeOnlyTitle: '日時を選択',
        timeText: '時間',
        hourText: '時',
        minuteText: '分',
        secondText: '秒',
        millisecText: 'ミリ秒',
        microsecText: 'マイクロ秒',
        timezoneText: 'タイムゾーン',
        prevText: '&#x3c;前',
        nextText: '次&#x3e;',
        monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
        dayNames: ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'],
        dayNamesShort: ['日','月','火','水','木','金','土'],
        dayNamesMin: ['日','月','火','水','木','金','土'],
        weekHeader: '週',
        yearSuffix: '年',
        dateFormat: 'yy/mm/dd'
    };