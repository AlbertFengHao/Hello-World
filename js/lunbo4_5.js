/* 
* @Author: anchen
* @Date:   2018-12-12 15:08:24
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-12 20:45:33
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

var i4_5=0;
    // move 运动函数  核心在 i 一定要在临界点 判断
    var lis4_5=document.querySelectorAll("#page4_5 li");
    // 点击事件
    for(var k4_5=0;k4_5<lis4_5.length;k4_5++){
        lis4_5[k4_5].index=k4_5;
        lis4_5[k4_5].onmouseover=function(){
            // 区分 到底向哪里走 
            // 向左向右 取决于 你点击的页码 和当前所在的页码
            if(this.index>=i4_5){
                move(ul4_5,"left",-390*this.index);
            }else{
                move(ul4_5,"right",-390*this.index);
            }
            i4_5=this.index;
            pageColorChange4_5();
        }
    }
    function pageColorChange4_5(){
        for(var t4_5=0;t4_5<lis4_5.length;t4_5++){
            lis4_5[t4_5].style.background="#8a7b77";
        }
        lis4_5[i4_5===2?0:i4_5].style.background="red";
    }

