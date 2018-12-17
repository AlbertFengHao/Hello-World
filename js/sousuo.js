
var box=document.getElementById("box");
        input.onkeyup=function(){
var ajax=new XMLHttpRequest();
ajax.open("get","oneppp/sousuo.php?cont="+input.value,true);
ajax.send(null);
ajax.onreadystatechange=function(){
if(ajax.readyState===4&&ajax.status===200){
    console.log(JSON.parse(ajax.responseText))
    var res=JSON.parse(ajax.responseText).suggestKeycords;
    var str="";
    res.forEach(item=>{
       

str+=`<li><a href="https://www.kaola.com/search.html?zn=top&key=${item}&searchRefer=searchbutton" target="_blank">${item}

</a></li>`

    })
    box.innerHTML=str;
}
} 

box.style.display="block";

if(input.value===""){

box.style.display="none";
}

}

// box.onclick=function(){
//   box.style.display="block";

// }


