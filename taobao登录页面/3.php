<?php
$a=$_POST["user"];
$b=$_POST["password"];
// $a "aaa" 用户名
// $b  "123" 密码
$arr=array("l张三","李四","小五");
$arr2=array("张三"=>"123","l李四"=>"123","小五"=>"123");
if(in_array($a,$arr)){
    if($arr2[$a]==$b){
        echo '{"code":2}';
    }else{
        echo '{"code":1}';
    }
}else{
  echo '{"code":0}'; 
}

?>