$(function () {


    $(".salon-photo").slick({
        dots: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '20%',
    });

    $(".toggle-btn").on("click", function () {
        ($("header").toggleClass("open"));
    });

    $(".header-nav2 a").on("click", function () {
        $("header").toggleClass("open");
    });

    $(document).on("click", function (event) {
        if (!$(event.target).closest('.toggle-btn').length && !$(event.target).closest('.header-nav2').length) {
            $("header").removeClass("open");
        }
    });

    $(".menu-btn").on("click", function() {
        var checkbox = $(this).siblings("input[type='checkbox']"); // クリックされたボタンに隣接するチェックボックスを取得
        checkbox.prop("checked", !checkbox.prop("checked")); // チェックボックスの状態をトグルする
    });
    
    
    



    let pagetop = $(".to-top");
    // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
    pagetop.hide();

    // スクロールイベント（スクロールされた際に実行）
    $(window).scroll(function () {
        // スクロール位置が700pxを超えた場合
        if ($(this).scrollTop() > 700) {
            // トップに戻るボタンを表示する
            pagetop.fadeIn();

            // スクロール位置が700px未満の場合
        } else {
            // トップに戻るボタンを非表示にする
            pagetop.fadeOut();
        }
    });

    // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
        // 0.5秒かけてページトップへ移動
        $("body,html").animate({ scrollTop: 0 }, 500);

        // イベントが親要素へ伝播しないための記述
        // ※詳しく知りたい方は「イベント　バブリング」または「jQuery バブリング」で調べてみてください
        return false;
    });


});
