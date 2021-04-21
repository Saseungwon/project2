var v_btn = document.querySelector("#id_sub");
v_btn.addEventListener("click",function(){

    var v_ajax = new XMLHttpRequest();
    v_ajax.open("get","wpost.php",true); 
    v_ajax.onreadystatechange = function(){
        if(v_ajax.readyState==4 && v_ajax.status == 200){
            alert("zzz");
            //console.log(JSON.parse(v_ajax.responseText));
            var v_json = JSON.parse(v_ajax.responseText); 
            var v_missDogData = v_json.body.items.item; 
            console.log(v_json.body.items.item); 
            var v_tblStr = '<table class="table">'; 
                v_tblStr += '<tr><th>#</th><th>품종</th><th>이미지</th><th scope="col">색상</th><th scope="col">나이</th></tr><th scope="col">성별</th><th scope="col">특징</th>';

                for(var i=0; i < v_missDogData.length; i++){
                    //console.log(v_missDogData.length); 10
                    console.log(v_missDogData[i].age);
                    //v_tblStr += "<td>" + v_missDogData[i].age+ "</td>"; 
                    



                    // age: 나이
                    // colorCd: 색상
                    // kindCd: 품종
                    // processState: 상태
                    // sexCd: 성별

                    // age: 나이
                    // careAddr: 주소
                    // careNm: 보호기관명
                    // careTel: 보호소전화번호
                    // chargeNm: 담당자명
                    // colorCd: 색상
                    // happenDt: 접수일
                    // happenPlace: 발견지역
                    // kindCd: 품종
                    // neuterYn: 중성화여부
                    // officetel: 담당자연락처
                    // popfile: 이미지
                    // processState: 상태
                    // sexCd: 성별
                    // specialMark: 특징
                    // weight: 체중

                    
                }
                //console.log(v_missDogData);

                v_tblStr +="</table>"
                document.querySelector("#id_disp").innerHTML += v_tblStr;
        }
    }
    v_ajax.send(); 
});