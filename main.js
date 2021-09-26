canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
img_nasa=["Img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg"];

random_number=Math.floor(Math.random()* 4);

background_img=img_nasa[random_number];
rover_img="rover.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground();
    background_imgTag.src=background_img;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover();
    rover_imgTag.src=rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0,canvas.width , canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypress=e.keyCode;
    if(keypress == '38'){
        up();
        console.log("up");

    }
    if(keypress == '40'){
        down();
        console.log("down");
        
    }
    if(keypress == '37'){
        left();
        console.log("left");
        
    }
    if(keypress == '39'){
        right();
        console.log("right");
        
    }
}
function up(){
    if(rover_y >=0){
        rover_y= rover_y -10;
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y <=500){
        rover_y= rover_y +10;
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >=0){
        rover_x= rover_x -10;
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <=700){
        rover_x= rover_x +10;
        uploadBackground();
        uploadRover();
    }
}