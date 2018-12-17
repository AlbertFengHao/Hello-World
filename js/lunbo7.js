
	// 间隔4s 运动一次
	var i7=0;
	var timer=null;
	timer=setInterval(function(){
		if(i7>=3){
			ul7.style.left=0;
			i7=0;
		}
		i7++;
		move(ul7,"left",-390*i7);
		pageColorChange7()
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
	next7.onclick=function(){
		if(i7>=3){
			ul7.style.left=0;
			i7=0;
		}
		i7++;
		move(ul7,"left",-390*i7);
		pageColorChange7()
	}
	pre7.onclick=function(){
		if(i7<=0){
			ul7.style.left="-1170px";
			i7=3;
		}
		i7--;
		move(ul7,"right",-390*i7);
		pageColorChange7()
	}
	// move 运动函数  核心在 i 一定要在临界点 判断
	var lis7=document.querySelectorAll("#page7 li");
	// 点击事件
	for(var k7=0;k7<lis7.length;k7++){
		lis7[k7].index=k7;
		lis7[k7].onmouseover=function(){
			// 区分 到底向哪里走 
			// 向左向右 取决于 你点击的页码 和当前所在的页码
			if(this.index>=i7){
				move(ul7,"left",-390*this.index);
			}else{
				move(ul7,"right",-390*this.index);
			}
			i7=this.index;
			pageColorChange7()
		}
	}
	function pageColorChange7(){
		for(var t7=0;t7<lis7.length;t7++){
			lis7[t7].style.background="#babebb";
		}
		lis7[i7===3?0:i7].style.background="red";
	}
	lunbo7.onmouseover=function(){
		clearInterval(timer);
		// 两个箭头出现
		// display=block  inline 之前元素 行内 块 visiblity
		// opacity
		next7.style.opacity=1;
		pre7.style.opacity=1;
	}
	lunbo7.onmouseout=function(){
		timer=setInterval(function(){
		if(i7>=3){
			ul7.style.left=0;
			i7=0;
		}
		i7++;
		move(ul7,"left",-390*i7);
		pageColorChange7()
	},4000);
		next7.style.opacity=1;
		pre7.style.opacity=1;
	}
