function appendSelectFoodContents(data, index) {
    var selectAppendTag = document.getElementById('selectFoodImage');
    
    return function () {
    
        for (var i = 0; i < data.length; i++) {
            var foodData = data[i];
            var imageUrl = './' + foodData.url;
    
            if(Number(foodData.id) === index + 1) {
                var str = '';
    
                str += '<div id=' + foodData.id + '>';
                str += '<img style="border:5px solid gray; border-radius:100px;" width="200px;" height="200px;" src="'+ imageUrl +'"/>';
                str += '<br><br>';
                str += '<p>' + foodData.content + '</p>';
                str +='</div>';
    
                selectAppendTag.innerHTML = str;
            }
        }   
    };
}

$(function () {
    //동적으로 원격에 있는 JSON 파일(결과값)을 로드
    $.ajax({
        url:"ajaxImg.json",
        dataType: "json",
        success: function (data) {
            var foodNames = document.getElementsByName('foodButton');

            for (var i = 0; i < foodNames.length; i++) {
                foodNames[i].addEventListener('click', appendSelectFoodContents(data, i));
            }
        },
        error: function () { 
            alert("에러발생"); 
        },
    });
});
