$(document).ready(function() {
    $('.imgHover img').hover(
        function() {
            $(this).css('transform', 'scale(1.1)');
            $(this).css('transition', 'transform .3s');
            $(this).css('cursor', 'unset');
        },
        function() {
            $(this).css('transform', '');
            $(this).css('transition', '');
            $(this).css('cursor', '');
        }
    );
});