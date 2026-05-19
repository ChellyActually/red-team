var count=0
var dis=document.getElementById("counterDisplay")
var btn=document.getElementById("counterBtn")
btn.addEventListener("click",function(){
    count ++
    if(count>10){
        count=0
    }
    dis.innerHTML=count
})
