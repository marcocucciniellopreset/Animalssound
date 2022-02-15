let zona =[];
let dzona =[];
let flag, flagpre;
let colori = [false,false,false,false];
let suoni =[];
let img = [];

function preload() {
  suoni[0] = loadSound('Uccelli.mp3');
  suoni[1] = loadSound('Cavalli.mp3');
  suoni[2] = loadSound('Insetti.mp3');
  suoni[3] = loadSound('Pesci.mp3');
}

function setup() {
  createCanvas(400, 600);
  zona[0] = 150;
  zona[1] = 265;
  zona[2] = 370;
  zona[3] = 480;
  
  suoni[0].loop();
  suoni[1].loop();
  suoni[2].loop();
  suoni[3].loop();

  suoni[0].stop();
  suoni[1].stop();
  suoni[2].stop();
  suoni[3].stop();

  img[0] = loadImage('uccello.png');
  img[1] = loadImage('cavalloa.png');
  img[2] = loadImage('formicola.png');
  img[3] = loadImage('pescio.png');
  img[4] = loadImage('foresta.jpg');
  
}

function draw() {
  image(img[4] ,0, 0, img[4].width, img[4].height);
  for (let i = 0; i < 4; i++){
    let inzona = false;
    fill(20)
    
    
    dzona[i] = dist(mouseX, mouseY, 220, zona[i]);
    //zona[i] = (600/4) * (1 + i) - 100;
    
    if (dzona[i] < 50){
      fill(0,220, 255)
      inzona = true;  
      if (mouseIsPressed){
        flag = true;
       
      } else {
        flag = false;
      }
      if (flag == true && flagpre == false){
        //Metto in play e randomicamente scelgo l'indice dell'array con i testi
        colori[i] = !colori[i];
       if (suoni[i].isPlaying() == true){
         suoni[i].stop()
       }
        else{ suoni[i].play() 
             
            }
      }
    }//FineIF
    else { 
        if (colori[i] == false){
     fill(255, 0, 0) 
    } else {
      fill(0,255, 0)
    }
      inzona = false; 
    }
  
    //image(img[4] ,0, 0, img[4].width, img[4].height);
    image(img[0],180, zona[0] - 35, img[0].width/12, img[0].height/19);
   image(img[1],185, zona[1] - 45, img[1].width/15, img[1].height/15);
   image(img[2],165, zona[2] - 55, img[2].width/8, img[2].height/7);
   image(img[3] ,170, zona[3] - 45 , img[3].width/9, img[3].height/8);
  /*ellipse (120, zona[0], 5, 5);
  ellipse (120, zona[1], 5, 5);
  ellipse (120, zona[2], 5, 5);
  */ellipse (150, zona[i], 5, 5);
  //ellipse (120, zona[i], 5, 5);
    
  }//FineFor
  //print(inzona)
  
  flagpre = flag;
}//FineDraw
