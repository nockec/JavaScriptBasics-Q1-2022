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
		this.width = 50;
		this.height = 50;
		this.xdir = 2;
		this.ydir = 2;
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

const numberofblocks = 10;
let blocks = [];
let color = [
	"red",
	"blue",
	"yellow",
	"green",
	"indigo",
	"violet",
	"orange",
];


for (let index = 0; index < numberofblocks; index++) {
	let w = Math.random()*30+10;
	let h = Math.random()*30+10;
	let x = Math.random()*(canvas.width-w);
	let y = Math.random()*(canvas.height-h);
	let colorIndex = Math.floor(Math.random()* color.length)
	let block = new Block(x,y);
	block.width= w;
	block.height= h;
	block.color = color[colorIndex];
	blocks.push(block);

}

const animate = function () {
	ctx?.clearRect(0, 0, canvas.width, canvas.height);

	blocks.forEach((b) =>{b.draw();
	
	})

	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

