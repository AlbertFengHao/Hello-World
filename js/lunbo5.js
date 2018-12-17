
	// 间隔4s 运动一次
	var i5=0;
	var timer=null;
	timer=setInterval(function(){
		if(i5>=3){
			ul5.style.left=0;
			i5=0;
		}
		i5++;
		move(ul5,"left",-390*i5);
		pageColorChange5()
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
	next5.onclick=function(){
		if(i5>=3){
			ul5.style.left=0;
			i5=0;
		}
		i5++;
		move(ul5,"left",-390*i5);
		pageColorChange5()
	}
	pre5.onclick=function(){
		if(i5<=0){
			ul5.style.left="-1170px";
			i5=3;
		}
		i5--;
		move(ul5,"right",-390*i5);
		pageColorChange5()
	}
	// move 运动函数  核心在 i 一定要在临界点 判断
	var lis5=document.querySelectorAll("#page5 li");
	// 点击事件
	for(var k5=0;k5<lis5.length;k5++){
		lis5[k5].index=k5;
		lis5[k5].onmouseover=function(){
			// 区分 到底向哪里走 
			// 向左向右 取决于 你点击的页码 和当前所在的页码
			if(this.index>=i5){
				move(ul5,"left",-390*this.index);
			}else{
				move(ul5,"right",-390*this.index);
			}
			i5=this.index;
			pageColorChange5()
		}
	}
	function pageColorChange5(){
		for(var t5=0;t5<lis5.length;t5++){
			lis5[t5].style.background="#babebb";
		}
		lis5[i5===3?0:i5].style.background="red";
	}
	lunbo5.onmouseover=function(){
		clearInterval(timer);
		// 两个箭头出现
		// display=block  inline 之前元素 行内 块 visiblity
		// opacity
		next5.style.opacity=1;
		pre5.style.opacity=1;
	}
	lunbo5.onmouseout=function(){
		timer=setInterval(function(){
		if(i5>=3){
			ul5.style.left=0;
			i5=0;
		}
		i5++;
		move(ul5,"left",-390*i5);
		pageColorChange5()
	},4000);
		next5.style.opacity=1;
		pre5.style.opacity=1;
	}
