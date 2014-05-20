var mySwiper = new Swiper('.swiper-container',{
  mode:'horizontal',
  loop: true,
  autoplay : 5000,
  speed: 1000
})

$('.js-prev').on('click', function(e){
  e.preventDefault();
  mySwiper.swipePrev();
})

$('.js-next').on('click', function(e){
  e.preventDefault();
  mySwiper.swipeNext();
})

$('.js-job-detail').on('click', function(e) {
            var $tar = $(e.target);
            var id = $tar.data('id');
            $('.joblist .cat-cont li').removeClass('active');
            $tar.parent('li').addClass('active');
            $('#job-desc > div').removeClass('active');
            $('#job-desc').find('div[data-id="' + id + '"]').addClass('active');
        });
