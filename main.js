var canvas=new fabric.Canvas('myCanvas')

block_image_width=30;
block_image_height=30;

player_x=10;
player_y=10;

var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width+10;
        block_image_height = block_image_height+10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }

    if(e.shiftKey && keyPressed == '73')
    {
        console.log("i and shift pressed together");
        block_image_width = block_image_width-10;
        block_image_height = block_image_height-10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="37"){
        left();
        console.log("left");
    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
    if(keyPressed=="87"){
        new_image('wall.jpg');
        console.log("w");
    }
    if(keyPressed=="71"){
        new_image('ground.png');
        console.log("g");
    }
    if(keyPressed=="76"){
        new_image('light_green.png');
        console.log("l");
    }
    if(keyPressed=="84"){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed=="78"){
        new_image('netherack.jpg');
        console.log("n");
    }
    if(keyPressed=="79"){
        new_image('obsidian.png');
        console.log("o");
    }
    if(keyPressed=="77"){
        new_image('moss.png');
        console.log("m");
    }
    if(keyPressed=="85"){
        new_image('unique.png');
        console.log("u");
    }
    if(keyPressed=="83"){
        new_image('stone.jpg');
        console.log("s");
    }
    if(keyPressed=="75"){
        new_image('Oak.png');
        console.log("k");
    }
    if(keyPressed=="66"){
        new_image('grass_block.png');
        console.log("b");
    }
    if(keyPressed=="68"){
        new_image('plank.png');
        console.log("d");
    }
    }
