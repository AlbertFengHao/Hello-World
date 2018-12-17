$.ajax({

type:"get",
url:"php/bigbig.php",
data:"shuju=shangpinliebiao",
success:function(res){

    var alla=""
    JSON.parse(res).forEach(item => {
        return alla+=`<div class="hh2">
        <div class="hh7">找相似</div>
        <div class="hh3">
            <img src="images/${item.img}" alt="">
        </div>
        <div class="hh4">
            <p class="hh5">${item.content}</p>
            <div class="hh6">
                <i>￥</i>
                <span>${item.price}</span>
            </div>
        </div>
    </div>`
    });
    $(".bigbig ").html(alla)
}

})



