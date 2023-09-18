const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d"); //context

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "black";
c.fillRect(0,0, canvas.width, canvas.height);

class Player{
    constructor ({position, velocity}){
        this.position = position;
        this.velocity = velocity;
    }
    
}