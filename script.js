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
    $('button.nav-item.pesan').click(function() {
        const nomorWhatsApp = '+6281312510136';
        const pesanDefault = 'Halo%2C%20Saya%20ingin%20pesan%20Mie%20Jago!';
        const url = `https://wa.me/${nomorWhatsApp}?text=${pesanDefault}`;
        window.open(url, '_blank');
    });
    $('a.nav-link2.contact').click(function() {
        const nomorWhatsApp = '+6281312510136';
        const pesanDefault = 'Halo%2C%20Saya%20ingin%20Bertanya%20Perihal%20Mie%20Jago!';
        const url = `https://wa.me/${nomorWhatsApp}?text=${pesanDefault}`;
        window.open(url, '_blank');
    });
});