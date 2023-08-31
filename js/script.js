$(function () {
    var $menu = $('.gnb li');
    var $sec = $('section');

    $menu.click(function (e) {
        e.preventDefault();
        var idx = $(this).index();
        var con = $sec.eq(idx);
        var secDistance = con.offset().top;
        $('html, body')
            .stop(true)
            .animate({ scrollTop: secDistance - 96 });
    });

    $(window).scroll(function () {
        var header = $('header').height(); /* 추가한 변수 헤더 높이값 */

        $sec.each(function () {
            // if ($(this).offset().top <= $(window).scrollTop()) {
            if ($(this).offset().top - (header + 1) <= $(window).scrollTop()) {
                var index = $(this).index();
                $menu.removeClass('on');
                // $menu.eq(index).addClass('on');
                $menu.eq(index - 1).addClass('on');
            }
        });
    });

    console.log($('.gnb li').eq());

    /* 2023.08.26
     * 1. index.html 파일에 .portfolio ID 수정했습니다.
     * 2. 기존 문제 있던 코드 주석 처리 후 아래줄에 추가해뒀습니다.
     * 3. 주석 처리 해둔 부분은 확인하시고 지우셔도 됩니다.
     *
     *  🎨 헤더 높이값 변수 추가
     * 메뉴별로 클릭시 이동할 때 헤더 높이값 96px을 빼주고 있으니까
     * 헤더 변수를 하나 추가해서 스크롤할 때도 컴퓨터가 헤더 높이값을 빼고
     * 계산하도록 했습니다.
     *
     *
     *  🎨 클래스 추가
     * 기능을 .each()로 반복시켰을 때
     * .index()는 숫자를 순서대로 잘 출력해주지만 (ex. 1,2,3,4 ...)
     * .eq()는 0부터 시작합니다. (ex. 0,1,2,3 ...)
     * index는 1,2,3,4 를 출력해주고 있는데
     * eq는 0,1,2,3를 출력해주고 있어서 gnb li에 클래스 추가가 제대로 안되고 있었어요.
     *
     * 참고하실 수 있도록 console.log를 남겨두었습니다.
     * (index.html에서 개발자도구 -> 콘솔 창 n.fn.init... 클릭 -> prevObject 클릭)
     *
     * on 클래스를 추가할 때
     * index 값에서 1을 빼서 1,2,3,4를 0,1,2,3 으로 맞춰줬어요.
     *
     * 이상입니다. 원하시는 곳에 취업 잘하세요😊😊
     *
     */
});
