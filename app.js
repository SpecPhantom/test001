// alert("Hello")
// console.log("world")
// // alert("hi")
// var x = 20
// {
//     let name = prompt("กรอกชื่อโว้ยยยยยยย")
//     console.log(name)
//     document.getElementById("name").innerHTML = name
// }
// document.getElementById("randNum").innerHTML = Math.floor(Math.random() * 10)
var img1 = document.createElement("img1")
var img2 = document.createElement("img2")
var NowImg = 1 
function ReplacingImage()
{
    // console.log(i)
    if(NowImg === 1)
    {
    img1 = document.getElementById("pic1").src = "photo-1601425276965-bdb69f1f3977.jpg"
    NowImg = 2;
    }else
    document.getElementById("pic1").src = "photo-1594568284297-7c64464062b1.jpg"
    NowImg = 1;
}
// for(var i = 0;i< 5;i++)
// {
//     setTimeout(ReplacingImage,3000)
//     // alert(i)
// }

