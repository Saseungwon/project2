<?php
  error_reporting(E_ALL); 
  ini_set("display_errors", 1);

  //xml을 json으로 변환후 echo 해준다
    $fileContents = file_get_contents("http://apis.data.go.kr/6300000/parkInfoDaejeonService/parkInfoDaejeonList?serviceKey=pIKoPXIMgMpusYudDxvY0EOy2oW5KUbwEZLNKNgAALqksYW8o6hOTZyoTvngnwyZMwq4J%2Bv%2B9qezZJ%2Fjv3IGcw%3D%3D&numOfRows=100&pageNo=1");
    $simpleXml = simplexml_load_string($fileContents);
    $json = json_encode($simpleXml);
    echo $json;

?>