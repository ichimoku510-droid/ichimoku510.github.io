// ハンバーガーボタン
$(document).ready(function () {
    $(".hamburger-button").on("click", function () {
        $(".header-nav-list").slideToggle();
    });
});


// カバーテキストフェードイン
$(function () {
    const $el = $('.cover-catch');

    // 初期状態
    $el.css({
        left: '50%',
        top: '38%',
        transform: 'translate(-50%, -40%)'
    });

    // アニメーション（1.5秒）
    $el.animate(
        {
            // 最終的な配置
            left: '55%',
            opacity: 1
        },
        1500, // 1.5秒
        'swing'
    );
});

// Slick
$('.slick-slider').slick({
    dots: true,          // ページネーション（●●）を表示
    arrows: true,        // 前後の矢印を表示
    speed: 400,          // スライド切り替えのアニメーション速度（ミリ秒）
    slidesToShow: 1,     // 一度に表示するスライド数
    slidesToScroll: 1    // 一度にスクロールするスライド数
});