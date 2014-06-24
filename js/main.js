//job detail list


//tab switch
(function(){
  $('.recuit-detail .hd a').click(function(e){
    var $tar
    , ele_height;
    e = e || window.event;
    $tar = $(e.target || e.srcElement);
    $('.recuit-detail .hd .active').removeClass('active');
    $tar.addClass('active');
    $('.recuit-detail .content .show').removeClass('show');
    $(this.hash).addClass('show');
    e.preventDefault();
  });
})();