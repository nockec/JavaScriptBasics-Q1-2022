//@ts-check
/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;


class Block{


	constructor(x,y){
        this.x = x;
		this.y = y;
		this.color = "red";
		this.width = 10;
		this.height = 10;
		this.xdir = 5;
		this.ydir = 5;
	}
	draw(){
		if( this.x < 0 || this.x + this.width > canvas.width ){
			this.xdir = this.xdir * -1;
		}

		if( this.y < 0 || this.y + this.height > canvas.height ){
			this.ydir = this.ydir * -1;
		}
		ctx.fillStyle = this.color;
	    ctx?.fillRect(this.x, this.y, this.width, this.height);
	    this.x = this.x + this.xdir;
	    this.y = this.y + this.ydir; 
	}
}

let Block1 = new Block(0,0);
let Block2 = new Block(10,10);
let Block3 = new Block(20,20);
let Block4 = new Block(30,30);
let Block5 = new Block(40,40);
let Block6 = new Block(50,50);
let Block7 = new Block(60,60);
let Block8 = new Block(70,70);
let Block9 = new Block(80,80);
let Block10 = new Block(90,90);
let Block11 = new Block(100,100);
let Block12 = new Block(110,110);
let Block13 = new Block(120,120);
let Block14 = new Block(130,130);
let Block15 = new Block(140,140);
let Block16 = new Block(150,150);
let Block17 = new Block(160,160);
let Block18 = new Block(170,170);
let Block19 = new Block(180,180);
const animate = function () {
	ctx?.clearRect(0, 0, canvas.width, canvas.height);
Block1.draw();
Block2.draw();
Block3.draw();
Block4.draw();
Block5.draw();
Block6.draw();
Block7.draw();
Block8.draw();
Block9.draw();
Block10.draw();
Block11.draw();
Block12.draw();
Block13.draw();
Block14.draw();
Block15.draw();
Block16.draw();
Block17.draw();
Block18.draw();
Block19.draw();


	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

