/* 
* @Author: anchen
* @Date:   2018-12-12 15:08:24
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-12 20:31:29
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

var i4_2=0;
    // move 运动函数  核心在 i 一定要在临界点 判断
    var lis4_2=document.querySelectorAll("#page4_2 li");
    // 点击事件
    for(var k4_2=0;k4_2<lis4_2.length;k4_2++){
        lis4_2[k4_2].index=k4_2;
        lis4_2[k4_2].onmouseover=function(){
            // 区分 到底向哪里走 
            // 向左向右 取决于 你点击的页码 和当前所在的页码
            if(this.index>=i4_2){
                move(ul4_2,"left",-390*this.index);
            }else{
                move(ul4_2,"right",-390*this.index);
            }
            i4_2=this.index;
            pageColorChange4_2();
        }
    }
    function pageColorChange4_2(){
        for(var t4_2=0;t4_2<lis4_2.length;t4_2++){
            lis4_2[t4_2].style.background="#8a7b77";
        }
        lis4_2[i4_2===2?0:i4_2].style.background="red";
    }

