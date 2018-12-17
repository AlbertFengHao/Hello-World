/* 
* @Author: anchen
* @Date:   2018-12-12 15:08:24
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-12 20:31:39
*/





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

var i6=0;
// move 运动函数  核心在 i 一定要在临界点 判断
var lis6=document.querySelectorAll("#page6 li");
// 点击事件
for(var k6=0;k6<lis6.length;k6++){
    lis6[k6].index=k6;
    lis6[k6].onmouseover=function(){
        // 区分 到底向哪里走 
        // 向左向右 取决于 你点击的页码 和当前所在的页码
        if(this.index>=i6){
            move(ul6,"left",-350*this.index);
        }else{
            move(ul6,"right",-350*this.index);
        }
        i6=this.index;
        pageColorChange6();
    }
}
function pageColorChange6(){
    for(var t6=0;t6<lis4_3.length;t6++){
        lis6[t6].style.background="#8a7b77";
    }
    lis6[i6===2?0:i6].style.background="red";
}

