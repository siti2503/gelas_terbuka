const myCanvas = document.getElementById('canvas')
const contex = myCanvas.getContext('2d');
const tBuka = document.getElementById('tombolB');
const tTutup = document.getElementById('tombolT');

myCanvas.width=myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;
var rotation = 0;



function draw1() { 
    contex.clearRect(20, 74, myCanvas.width, myCanvas.height/2);
    contex.clearRect(180, 0, myCanvas.width/2, myCanvas.height/2);

    contex.save();
    var panjangPP2 = 100;
    var tinggiPP2 = 15;
    contex.translate(90,83);
    contex.scale(-1, 1);
    contex.rotate(rotation,5); 
    contex.lineWidth=6;
    contex.strokeRect(-40, 248, panjangPP2, tinggiPP2);

    var panjangPP3 = 25;
    var tinggiPP3 = 15;
    contex.lineWidth=6;
    contex.strokeRect(-2, 230, panjangPP3, tinggiPP3);
    contex.restore();
   
}
draw1();
