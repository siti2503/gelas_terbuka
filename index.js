const myCanvas = document.getElementById('canvas')
const contex = myCanvas.getContext('2d');
const tBuka = document.getElementById('tombolB');
const tTutup = document.getElementById('tombolT');

myCanvas.width=myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;
var rotation = 0;

function buka() {
    
    draw1();

    if(rotation < Math.PI/8.5) {
        rotation += 0.02;
        requestAnimationFrame(buka);
    }
}

function tutup() {
    
    draw1();

    if(rotation > 0) {
        rotation -= 0.02;
        requestAnimationFrame(tutup);
    }
}

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

function draw(){
    contex.save();
    var panjangPP1 = 100;
    var tinggiPP1 = 150;
    contex.lineWidth=6;
    contex.strokeRect(30, 350, panjangPP1, tinggiPP1);
    contex.beginPath();
    contex.moveTo(55,470);
    contex.lineTo(55,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();

    contex.beginPath();
    contex.moveTo(80,470);
    contex.lineTo(80,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();

    contex.beginPath();
    contex.moveTo(105,470);
    contex.lineTo(105,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();
    contex.restore();
}
draw();


tBuka.addEventListener('click', function() {
    Buka();
});

tTutup.addEventListener('click', function() {
    Tutup();
});
