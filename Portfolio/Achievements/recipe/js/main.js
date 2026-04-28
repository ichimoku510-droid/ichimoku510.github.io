// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
    // console.log('click');

    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // console.log('resize');

    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});

// カルーセル
$('.cover-slick').slick({
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<img src="images/cover/cover_arrow_left.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="images/cover/cover_arrow_right.svg" class="slide-arrow next-arrow">',
    fade: true
});