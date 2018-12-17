/* 
* @Author: anchen
* @Date:   2018-11-21 10:49:25
* @Last Modified by:   anchen
* @Last Modified time: 2018-11-21 13:16:41
*/
var g=0;
var pre1=document.getElementById("pre1");

var next1=document.getElementById("next1");

var ul1=document.getElementById("ul1");

        next1.onclick=function(){
            console.log(i)
                if(g>=5){
                ul1.style.left=0;
                g=0;
                }
                g++;
                move(ul1,"left",-800*g);
                }
               
     pre1.onclick=function(){
                if(g<=0){
                ul1.style.left="-4000px";
                g=5;
                }
                g--;
                move(ul1,"right",-800*g);
               
                }

    function move(ele,dir,end){
                clearInterval(ele.timer)
                if(dir==="left"){
                ele.timer=setInterval(function(){
                ele.style.left=ele.offsetLeft-10+"px";
                if(ele.offsetLeft<=end){
                ele.style.left=end+"px";
                clearInterval(ele.timer)
                }
                })
                }else{
                ele.timer=setInterval(function(){
                ele.style.left=ele.offsetLeft+10+"px";
                if(ele.offsetLeft>=end){
                ele.style.left=end+"px";
                clearInterval(ele.timer)
                }
                })
                }
                }

                