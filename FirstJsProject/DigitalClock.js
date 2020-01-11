function time()
{
    let element =document.getElementById("Clock");
    let now =new Date();
    element.innerHTML=now.toLocaleTimeString();
    setTimeout(time,1000);
}
window.onload=time;