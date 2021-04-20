$("#img_btn0").on("click",function(){
    $.ajax({
        type:"post",  
        url:"ajaxImg.json",
        dataType : JSON,

        success:function(p_rslt){
            
            console.log(p_rslt);
            var v_imgPath = "/jsstudy/AJAX/uploads/" + p_rslt;
            $("<img>").attr("src",v_imgPath)
                      .attr("width",100)
                      .attr("height",100)
                      .appendTo($("#tablList"));
        }
    });
});