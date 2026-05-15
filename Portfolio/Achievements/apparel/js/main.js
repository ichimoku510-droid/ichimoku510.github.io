// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// ハンバーガーボタンをクリックしたら
$('.header-button-hamburger').on('click', function () {
    console.log('click');

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
$('.carousel').slick({
    autoplay: true, // 自動再生
    autoplaySpeed: 5000, // 自動再生の速さ、単位はミリ秒
    arrows: false, // 左右の矢印を無効
    dots: true, // 点のナビゲーションを有効
    fade: true, // フェードで切り替え
});