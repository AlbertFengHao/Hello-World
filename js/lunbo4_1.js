/* 
* @Author: anchen
* @Date:   2018-12-12 15:08:24
* @Last Modified by:   anchen
* @Last Modified time: 2018-12-12 19:39:44
*/


// 第一个
lunbo4_1.onmouseover=function(){


    r2.style.display="none";
    r3.style.display="none";
    r4.style.display="none";
    r5.style.display="none";



    lunbo4_2.style.color="#666666"
    lunbo4_3.style.color="#666666"
    lunbo4_4.style.color="#666666"
    lunbo4_5.style.color="#666666"






    this.style.color="red";
    r1.style.display="block";
}


// 第二个
lunbo4_2.onmouseover=function(){
    r1.style.display="none";
    r3.style.display="none";
    r4.style.display="none";
    r5.style.display="none";

        lunbo4_1.style.color="#666666"
        lunbo4_3.style.color="#666666"
        lunbo4_4.style.color="#666666"
        lunbo4_5.style.color="#666666"

    r2.style.display="block";
    this.style.color="red";
}


// 第三个


lunbo4_3.onmouseover=function(){
    r1.style.display="none";
    r2.style.display="none";
    r4.style.display="none";
    r5.style.display="none";

        lunbo4_1.style.color="#666666"
        lunbo4_2.style.color="#666666"
        lunbo4_4.style.color="#666666"
        lunbo4_5.style.color="#666666"

    r3.style.display="block";
    this.style.color="red";
}

// 第四个

lunbo4_4.onmouseover=function(){
    r1.style.display="none";
    r2.style.display="none";
    r3.style.display="none";
    r5.style.display="none";

        lunbo4_1.style.color="#666666"
        lunbo4_2.style.color="#666666"
        lunbo4_3.style.color="#666666"
        lunbo4_5.style.color="#666666"

    r4.style.display="block";
    this.style.color="red";
}

// 第五个

lunbo4_5.onmouseover=function(){
    r1.style.display="none";
    r3.style.display="none";
    r4.style.display="none";
    r2.style.display="none";

        lunbo4_1.style.color="#666666"
        lunbo4_3.style.color="#666666"
        lunbo4_4.style.color="#666666"
        lunbo4_2.style.color="#666666"

    r5.style.display="block";
    this.style.color="red";
}


// -------------------------------



    // 间隔4s 运动一次



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

var i4=0;
    // move 运动函数  核心在 i 一定要在临界点 判断
    var lis4=document.querySelectorAll("#page4_1 li");
    // 点击事件
    for(var k4=0;k4<lis4.length;k4++){
        lis4[k4].index=k4;
        lis4[k4].onmouseover=function(){
            // 区分 到底向哪里走 
            // 向左向右 取决于 你点击的页码 和当前所在的页码
            if(this.index>=i4){
                move(ul4_1,"left",-390*this.index);
            }else{
                move(ul4_1,"right",-390*this.index);
            }
            i4=this.index;
            pageColorChange4();
        }
    }
    function pageColorChange4(){
        for(var t4=0;t4<lis4.length;t4++){
            lis4[t4].style.background="blue";
        }
        lis4[i4===2?0:i4].style.background="red";
    }




