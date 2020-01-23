$('.readMoreBtn').on('click', function () {
    $('.readMore').show();
    $('.readMoreBtn').hide();
    $('.readLessBtn').show();
});

$('.readLessBtn').on('click', function (e) {
    e.preventDefault();
    $('.readMore').hide();
    $('.readLessBtn').hide();
    $('.readMoreBtn').show();
}); 

$('.email').on('click', function() {
    window.open('mailto:dallinpeacock@gmail.com', '_blank');
});