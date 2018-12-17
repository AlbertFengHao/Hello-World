



    // 当我在输入框输入不同的内容
    // 向后台发送请求  请求查询当前我的内容相关的数据  返回给前端
  input1.onkeyup=function(){
    var ajax=new XMLHttpRequest();
    ajax.open("get","../php/sousuo.php?cont="+input1.value,true);
    ajax.send(null);
    ajax.onreadystatechange=function(){
        if(ajax.readyState===4&&ajax.status===200){
            console.log(JSON.parse(ajax.responseText))
            var res=JSON.parse(ajax.responseText).suggestKeycords;
            var str="";
            res.forEach(item=>{
                str+=`<li><a href="https://www.kaola.com/search.html?zn=top&key=${item}&searchRefer=searchbutton">${item}</a></li>`
            })
            input.innerHTML=str;
        }
    } 
  }
