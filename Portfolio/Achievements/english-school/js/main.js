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
    arrows: false,
    prevArrow: '<img src="images/cover/cover_arrow_left.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="images/cover/cover_arrow_right.svg" class="slide-arrow next-arrow">',
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
});

// smarttab
$(document).ready(function () {
    $('#smarttab').smartTab({
        autoAdjustHeight: false,
        enableUrlHash: false
    });
});

//　3つの特色・左フェードイン
$('.js-fadein-left').waypoint({
    handler: function (direction) {
        // 要素が画面中央に来るとここが実行される
        if (direction === 'down') {
            /**
             * 下方向のスクロール
             * イベント発生元の要素に
             * fadeOutUpを削除して
             * fadeInUpアニメーションを付けることで
             * アニメーションを開始
             */
            $(this.element)
                .addClass('animate__fadeInLeft')
        }
    },
    // 要素が画面中央に来たらhandlerを実行
    offset: '50%',
});

//　3つの特色・右フェードイン
$('.js-fadein-right').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element)
                .addClass('animate__fadeInRight')
        }
    },
    offset: '50%',
});

// アコーディオンタイトル開閉動作
$('.accordion-title').on('click', function (e) {
    // タイトル要素
    var title = $(this);
    // コンテンツ要素
    var content = title.next('.accordion-content');
    // アイコン要素（タイトル内にある）
    var icon = title.find('.bi');

    // アニメーションで表示・非表示
    content.slideToggle(200, function () {
        // 表示状態を判定してアイコンを切り替え
        if (content.is(':visible')) {
            icon.removeClass("bi-caret-down-fill").addClass("bi-caret-up-fill");
        } else {
            icon.removeClass("bi-caret-up-fill").addClass("bi-caret-down-fill");
        }
    });
});