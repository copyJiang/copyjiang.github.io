var context;
var width,height;
var i;
var direction =1;
   
function changeDir(){
	     
	   
	   //direction=direction*(-1);
	   direction *= -1;
   }

function draw(id)
   {
      var canvas = document.getElementById(id); 
      if (canvas == null) 
        return false; 
      context = canvas.getContext('2d');
      width=canvas.width;
      height=canvas.height;
      i=0;
      setInterval(move,100); 
   }
function move()
   {  
      context.clearRect(0,0,width,height);
      var dig=Math.PI/24;
      context.beginPath();
      context.strokeStyle="black";
      context.ellipse(150,150,120,60,0,0,Math.PI*2,true);
      context.stroke();
      context.closePath();
      var x=120*Math.sin(i*dig)+150;
      var y=60*Math.cos(i*dig)+150;
      context.beginPath();
      context.arc(x,y,50,Math.PI*0.5,Math.PI*1.5,Math.PI*2,true);
      context.fillStyle = "yellow";
      context.fill();
      context.closePath();
      //i++;
	  if(direction>0){
		  i++
	  }else{i--}
      if (i>=48) i=0;
	  
   }