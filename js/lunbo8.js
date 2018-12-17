
	// 间隔4s 运动一次
	var i8=0;
	var timer=null;
	timer=setInterval(function(){
		if(i8>=4){
			ul8.style.left=0;
			i8=0;
		}
		i8++;
		move(ul8,"left",-1190*i8);
		pageColorChange8()
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
	next8.onclick=function(){
		if(i8>=4){
			ul8.style.left=0;
			i8=0;
		}
		i8++;
		move(ul8,"left",-1190*i8);
		pageColorChange8()
	}
	pre8.onclick=function(){
		if(i8<=0){
			ul8.style.left="-4760px";
			i8=4;
		}
		i8--;
		move(ul8,"right",-1190*i8);
		pageColorChange8()
	}
	// move 运动函数  核心在 i 一定要在临界点 判断
	var lis8=document.querySelectorAll("#page8 li");
	// 点击事件
	for(var k8=0;k8<lis8.length;k8++){
		lis8[k8].index=k8;
		lis8[k8].onmouseover=function(){
			// 区分 到底向哪里走 
			// 向左向右 取决于 你点击的页码 和当前所在的页码
			if(this.index>=i8){
				move(ul8,"left",-1190*this.index);
			}else{
				move(ul8,"right",-1190*this.index);
			}
			i8=this.index;
			pageColorChange8()
		}
	}
	function pageColorChange8(){
		for(var t8=0;t8<lis8.length;t8++){
			lis8[t8].style.background="#fff";
		}
		lis8[i8===4?0:i8].style.background="red";
	}
	main14.onmouseover=function(){
		clearInterval(timer);
		// 两个箭头出现
		// display=block  inline 之前元素 行内 块 visiblity
		// opacity
		next8.style.opacity=1;
		pre8.style.opacity=1;
	}
	main14.onmouseout=function(){
		timer=setInterval(function(){
		if(i8>=4){
			ul8.style.left=0;
			i8=0;
		}
		i8++;
		move(ul8,"left",-1190*i8);
		pageColorChange8()
	},4000);
		next8.style.opacity=1;
		pre8.style.opacity=1;
	}
