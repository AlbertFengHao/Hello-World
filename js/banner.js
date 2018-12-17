// l轮播图

$.ajax({

    type:"get",
    url:"php/bigbig.php",
    data:"shuju=lunbo1",
    success:function(res){

        var lunbo1str=` <span id="pre"></span>
        <span id="next"></span>
        <ul id="page">
            <li style="background:hotpink"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li style="margin-right: 0;"></li>
          
        </ul>`
    
     
        JSON.parse(res).forEach(item => {
            return lunbo1str+=`    <img src="images/${item.img}" alt="" style="opacity:${item.opa}">`
        })
            C.innerHTML=lunbo1str;

            // 全局的轮播图的定时器 
function autoplay(){
    timer=setInterval(function(){
    if(i>=7){
        i=-1;
    }
    // 所有图片 opacity 0  指定当前图片 opacity 1;
    i++;
    changeImage();
    pageColorChange();
},4000) 
}
// 实现切换当前的图片
function changeImage(){
    for(var k=0;k<oimg.length;k++){
        oimg[k].style.opacity=0;
    }
    oimg[i].style.opacity=1;
}
// 实现 按钮颜色变化
function pageColorChange(){
    // 清除所有按钮的背景色
    for(var k=0;k<page.length;k++){
        page[k].style.background="#fff";
    }
    // 指定的按钮变色
    page[i].style.background="hotpink";
}



// 轮播切换时  出现页面 opacity 1  其他图片opacity 0
    var i=0;
    var oimg=document.querySelectorAll("#C img");
    var page=document.querySelectorAll("#page li");
    var C=document.getElementById("C")
    var timer=null;
    // 开启定时器
    autoplay();
    next.onclick=function(){
        if(i>=7){
            i=-1;
        }
        i++;
        changeImage();
        pageColorChange();
    }
    pre.onclick=function(){
        if(i<=0){
            i=8;
        }
        i--;
        changeImage();
        pageColorChange();
    }
    // 圆圈按钮   点击 切换页面
    for(var t=0;t<page.length;t++){
        page[t].index=t;
        page[t].onclick=function(){
            // 全局i 等于  你点击的这个按钮代表的页码
            i=this.index;
            // 切换到此时的图片
            changeImage();
            pageColorChange();
        }
    } 
    // 鼠标进入 定时器停止  鼠标移除 定时器开启
    C.onmouseover=function(){
        clearInterval(timer);
    }
    C.onmouseout=function(){
        autoplay();
    }
    }
    
    })






   

