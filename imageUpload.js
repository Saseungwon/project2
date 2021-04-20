$(function () {
    //동적으로 원격에 있는 JSON 파일(결과값)을 로드
            $.ajax({
                url:"ajaxImg.json",
                dataType: "json",
    
                success: function (data) {
                //받아온 JSON을 테이블에 출력
                    $.each(data, function () {
                    $('#tablList').append("<tr><td>" + "<img src=" +this.url + ">" + "</td><td>" + this["content"] + "</td></tr>");
    
                    });
              },
                error: function () { alert("에러발생"); }
            });
    
    });
    