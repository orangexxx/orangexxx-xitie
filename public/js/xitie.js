function mp3_play(mp3_url) {
  var qt_mp3_url = "../mp3/dahuajiao.mp3";
  if (mp3_url) {
    $('#playbox audio').get(0).pause();
    $('#playbox audio').get(0).setAttribute('src', mp3_url);
    // $('#playbox audio').get(0).setAttribute('loop', false);
    $('#playbox audio').get(0).load();
    $('#playbox audio').get(0).play();
  } else {
    $('#playbox audio').get(0).setAttribute('src', qt_mp3_url);
    if ($('#playbox').hasClass('on')) {
      $('#playbox').attr('class', '');
      $('#playbox audio').get(0).pause();
    } else {
      $('#playbox').attr('class', 'on');
      $('#playbox audio').get(0).play();
    }
  }
}
$().ready(function() {
  var swiperH = new Swiper('.swiper-container-h', {
    direction: 'vertical',
    spaceBetween: 0,
    onInit: function(swiper) {
      $('.welcome').show();
      swiperAnimateCache(swiper);
      swiperAnimate(swiper);
    },
    onSlideChangeEnd: function(swiper) {
      swiperAnimate(swiper);
    }
  });
  var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination-v',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    autoplay: 2000,
  });
  $(document).one('touchstart', function(e) {
    var music = document.getElementById("audio");
    if (music.paused) {
      music.play();
    }
  });
  document.addEventListener("WeixinJSBridgeReady", function onBridgeReady() {
    document.getElementById("audio").play();
  });
  $("#overlay_ul").bind("click", function(evt) {
    if ("UL" == evt.target.nodeName) {
      this.className = 'overlay_ul';
      $(this).find('li').removeClass('on');
    }
  });
});