$('.readMoreBtn').on('click', function(e) {
    e.preventDefault();
    $('.readMore').show();
    $('.readMoreBtn').hide();
    $('.readLessBtn').show();
});

$('.readLessBtn').on('click', function(e) {
    e.preventDefault();
    $('.readMore').hide();
    $('.readLessBtn').hide();
    $('.readMoreBtn').show();
}); 