var direccion_ = 'up';

var width,height;
var particles = [];
var cantidad = 25;


function setup(){
  width=400;height=400;
  var myCanvas = createCanvas(width, height);
  myCanvas.parent('canvasContainer');
  for(i=0; i<cantidad; i++){
  	particles[i] = new particle(width,height,2);
  }
}

function draw(){
	background(92,219,103);
	for(i=0; i<cantidad; i++){
		switch(direccion_){
		case 'up': particles[i].up(); break;
		case 'down': particles[i].down(); break;
		case 'right': particles[i].right(); break;
		case 'left': particles[i].left(); break;
		}
		particles[i].draw();
	}

}

function particle(_width,_height,_vel){

		this.width = _width;
		this.height = _height;
		this.x = random(0,_width);
		this.y = random(0,_height);
		this.sizeX = random(10,30);
		this.sizeY = random(10,30);
		this.velocidadX = _vel;
		this.velocidadY = _vel;

		this.color = color(113,191,87);
		this.color1 = color(113,191,87);
		this.color2 = color(204,161,73);
		this.color3 = color(181,51,73);
		this.color4 = color(144,87,163);
		this.color5 = color(131,207,206);
		this.color6 = color(241,255,77);
		this.color7 = color(254,247,250);
		this.color8 = color(47,124,60);

	this.setColor = function(){
		var color = floor(random(0,8));
		switch(color){
			case 0: this.color = this.color1; break;
			case 1: this.color = this.color2; break;
			case 2: this.color = this.color3; break;
			case 3: this.color = this.color4; break;
			case 4: this.color = this.color5; break;
			case 5: this.color = this.color6; break;
			case 6: this.color = this.color7; break;
			case 7: this.color = this.color8; break;
		}
	};

	this.up = function(){
		this.y += this.velocidadY;
		if(this.y > height){this.y = -30; this.x = random(0,width);this.setColor();}
	};
	this.down = function(){
		this.y -= this.velocidadY;
		if(this.y < 0 ){this.y = height+30 ; this.x = random(0,width);this.setColor();}
	};
	this.right = function(){
		this.x -= this.velocidadX;
		if(this.x < 0){this.x = width+30; this.y = random(0,height);this.setColor();}
	};
	this.left = function(){
		this.x += this.velocidadX;
		if(this.x > width){this.x = -30; this.y = random(0,height);this.setColor();}
	};
	this.draw = function(){
		noStroke();
		fill(this.color);
		rect(this.x,this.y,this.sizeX,this.sizeY);
	};
}