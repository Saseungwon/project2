<?php
  error_reporting(E_ALL); 
  ini_set("display_errors", 1);

  //xml을 json으로 변환후 echo 해준다
    $fileContents = file_get_contents("http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?bgnde=20140301&endde=20140430&pageNo=".$_POST["pageNo"]."&numOfRows=10&ServiceKey=pIKoPXIMgMpusYudDxvY0EOy2oW5KUbwEZLNKNgAALqksYW8o6hOTZyoTvngnwyZMwq4J%2Bv%2B9qezZJ%2Fjv3IGcw%3D%3D");
    $simpleXml = simplexml_load_string($fileContents);
    $json = json_encode($simpleXml);
    echo $json;

?>