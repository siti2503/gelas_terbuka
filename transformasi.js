const myCanvas = document.getElementById('canvas')
const contex = myCanvas.getContext('2d');

myCanvas.width=myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;

function draw2() {

    contex.save();
    var panjangPP5 = 100;
    var tinggiPP5 = 150;
    contex.lineWidth=6;
    contex.strokeRect(300, 350, panjangPP5, tinggiPP5);
    
    var panjangPP6 = 112;
    var tinggiPP6 = 15;
    contex.lineWidth=6;
    contex.strokeRect(295, 335, panjangPP6, tinggiPP6); 
    
    var panjangPP7 = 25;
    var tinggiPP7 = 15;
    contex.lineWidth=6;
    contex.strokeRect(340, 320, panjangPP7, tinggiPP7);
    contex.restore();
    
    contex.beginPath();
    contex.moveTo(322,470);
    contex.lineTo(322,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();
    
    contex.beginPath();
    contex.moveTo(348,470);
    contex.lineTo(348,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();
    
    contex.beginPath();
    contex.moveTo(375,470);
    contex.lineTo(375,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();
    
    
    
    // 2
    contex.save();
    contex.lineWidth=6;
    contex.strokeRect(450, 350, panjangPP5, tinggiPP5);
    
    contex.translate(561,-68); 
    contex.rotate((Math.PI/100) * 25); 
    contex.translate(-27, -50); 
    contex.lineWidth=6;
    contex.strokeRect(200, 335, panjangPP6, tinggiPP6);
    
    contex.lineWidth=6;
    contex.strokeRect(244, 320, panjangPP7, tinggiPP7);
    contex.restore();
    
    contex.beginPath();
    contex.moveTo(473,470);
    contex.lineTo(473,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();
    
    contex.beginPath();
    contex.moveTo(500,470);
    contex.lineTo(500,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();
    
    contex.beginPath();
    contex.moveTo(525,470);
    contex.lineTo(525,380);
    contex.lineWidth=6;
    contex.lineCap='round';
    contex.stroke();
    
    // 3
    contex.save();
    contex.lineWidth=6;
    contex.strokeRect(650, 350, panjangPP5, tinggiPP5);
    
    
   
    
    }
    draw2();
