
    // 间隔4s 运动一次
    var i3=0;
    var timer=null;
    timer=setInterval(function(){
        if(i3>=2){
            ul3.style.left=0;
            i3=0;
        }
        i3++;
        move(ul3,"left",-180*i3);
        page1ColorChange()
    },4000)

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

    // move 运动函数  核心在 i 一定要在临界点 判断
    var lis=document.querySelectorAll("#lunbo3dian li");
    // 点击事件
    for(var k3=0;k3<lis.length;k3++){
        lis[k3].index=k3;
        lis[k3].onmouseover=function(){
            // 区分 到底向哪里走 
            // 向左向右 取决于 你点击的页码 和当前所在的页码
            if(this.index>=i3){
                move(ul3,"left",-180*this.index);
            }else{
                move(ul3,"right",-180*this.index);
            }
            i3=this.index;
            page1ColorChange()
        }
    }
    function page1ColorChange(){
        for(var t3=0;t3<lis.length;t3++){
            lis[t3].style.background="#fff";
        }
        lis[i3===2?0:i3].style.background="red";
    }
    right.onmouseover=function(){
        clearInterval(timer);
        // 两个箭头出现
        // display=block  inline 之前元素 行内 块 visiblity
        // opacity
        next.style.opacity=1;
        pre.style.opacity=1;
    }
    right.onmouseout=function(){
        timer=setInterval(function(){
        if(i3>=2){
            ul3.style.left=0;
            i3=0;
        }
        i3++;
        move(ul3,"left",-180*i3);
        page1ColorChange()
    },4000);
     
    }
