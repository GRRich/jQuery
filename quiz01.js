//여기에 jquery코드
//js링크가 먼저일어나기때문에
//도큐먼트레디 먼저해야함

$(document).ready(function() {

    //dark버튼
    $("#dark").click(function() {

        if( $("#dark").hasClass("dark") ) {

            $("body").css("backgroundColor", "black");
            $("p, h3, a").css("color", "white");
            $("#dark").html("밝게보기"); //innerHTML
            $("#dark").addClass("white");
            $("#dark").removeClass("dark");

        } else {

            $("body").css("backgroundColor", "white");
            $("p, h3, a").css("color", "black");
            $("#dark").html("어둡게보기"); //innerHTML
            $("#dark").addClass("dark");
            $("#dark").removeClass("white");

        }

    });

    //name버튼 이벤트
    $("#name").click(function() {

        if( $("#name").hasClass("name") ) {

            $(".inner > p").html("홍길자<br>20세<br>능력단위<br>java,oracle...");
            $(".inner > a").css("display", "none"); //가림
            $("#name").html("내용보기");
            $("#name").addClass("cont");
            $("#name").removeClass("name");

        } else {

            var str = "자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다.위키백과";

            $(".inner > p").html(str);
            $(".inner > a").css("display", "inline");
            $("#name").html("이름보기");
            $("#name").addClass("name");
            $("#name").removeClass("cont");

        }

    })



});