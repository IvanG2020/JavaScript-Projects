function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").ariaValueMax;
    var color_Spring = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
            case "Yellow":
                Color_Output = "Yellow" + Color_String;
            break;
            case "Green":
                Color_Output = "Green" + Color_String;
            break;
            case "Blue":
                Color_Output = "Blue" + Color_String;
            break;
            case "Pink":
                Color_Output = "Pink" + Color_String;
            break;
            case "Purple":
                Color_Output = "Purple" + Color_String;
            break;
            default:
                Color_Output = "Please Enter a color exactly as written on the above list";
       

    }
    document.getElementById("Output").innerHTML = Color_Output;
}
document.write(3 + "3" +3);

X = 6;
document.write(5);
var X = 10;

function Hello() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The Text has Changed!";
}


function myCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img,10,10);
    // GRADIENT COLOR
   // var c = document.getElementById("myCanvas");
//var ctx = c.getContext("2d");

//var grd = ctx.createLinearGradient(0, 0, 170, 0);
//grd.addColorStop(0, "black");
//grd.addColorStop(1, "white");

//ctx.fillStyle = grd;
//ctx.fillRect(20, 20, 150, 100);
  }