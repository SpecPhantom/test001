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
var OnClickedtimes = 0;


// document.getElementById("Blow!").onclick;

function BOnClicked()
{
    // console.log(BOnClicked)
    if(OnClickedtimes < 3)
    {
        ReplacingBlowImage()
        OnClickedtimes++;
        setTimeout(ReplacingImageDefault,3000)
    }else
    {
        ReplacingBlowImage()
        setTimeout(ReplacingOutImage(),10000)
    }

    console.log(OnClickedtimes)
}

function ReplacingBlowImage()
{

    document.getElementById("CakeBday").src = "Bday_cake(blow) (2).gif"
}

function ReplacingOutImage()
{
    document.getElementById("CakeBday").src = "Bday_cake(out) (1).gif"
}

function ReplacingImageDefault()
{
    document.getElementById("CakeBday").src = "CakeBday_idle.gif"
}
// for(var i = 0;i< 5;i++)
// {
//     setTimeout(ReplacingImage,3000)
//     // alert(i)
// }

