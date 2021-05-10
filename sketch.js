
function preload() {

  //images
  bg = loadImage("Images/background.png")
  gokuiconImg = loadImage("Images/goku.png")
  friezaiconImg = loadImage("Images/frieza.png")
 
  //goku right
  gokustandingright = loadImage("Goku Right/standing.png")

  gokuwalkingright = loadImage("Goku Right/moving .png")

  gokujumpright = loadImage("Goku Right/jump.png")

  gokukamehameharight1 = loadImage("Goku Right/kamehameha 1.png")
  gokukamehameharight2 = loadImage("Goku Right/kamehameha 2.png")
  gokukamehameharight3 = loadImage("Goku Right/kamehameha 3.png")
  gokukamehameharight4 = loadImage("Goku Right/kamehameha 4.png")
  
  gokupowerupright1 = loadImage("Goku Right/power up 1.png")
  gokupowerupright2 = loadImage("Goku Right/power up 2.png")
  gokupowerupright3 = loadImage("Goku Right/power up 3.png")

  gokukickright1 = loadImage("Goku Right/attacking 1.png")
  gokukickright2 = loadImage("Goku Right/attacking 2.png")
  gokukickright3 = loadImage("Goku Right/attacking 3.png")
  gokukickright4 = loadImage("Goku Right/attacking 4.png")
  gokukickright5 = loadImage("Goku Right/attacking 5.png")
  gokukickright6 = loadImage("Goku Right/attacking 6.png")

  gokukickright1 = loadImage("Goku Right/attacking 1.png")
  gokukickright2 = loadImage("Goku Right/attacking 2.png")
  gokukickright3 = loadImage("Goku Right/attacking 3.png")
  gokukickright4 = loadImage("Goku Right/attacking 4.png")
  gokukickright5 = loadImage("Goku Right/attacking 5.png")
  gokukickright6 = loadImage("Goku Right/attacking 6.png")

  gokudeadright = loadImage("Goku Right/dead.png")

  //goku left
  gokustandingleft = loadImage("Goku Left/standing.png")
  
  gokuwalkingleft = loadImage("Goku Left/moving .png")

  gokujumpleft = loadImage("Goku Left/jump.png")

  gokukamehamehaleft1 = loadImage("Goku Left/kamehameha 1.png")
  gokukamehamehaleft2 = loadImage("Goku Left/kamehameha 2.png")
  gokukamehamehaleft3 = loadImage("Goku Left/kamehameha 3.png")
  gokukamehamehaleft4 = loadImage("Goku Left/kamehameha 4.png")

  gokupowerupleft1 = loadImage("Goku Left/power up 1.png")
  gokupowerupleft2 = loadImage("Goku Left/power up 2.png")
  gokupowerupleft3 = loadImage("Goku Left/power up 3.png")

  gokukickleft1 = loadImage("Goku Left/attacking 1.png")
  gokukickleft2 = loadImage("Goku Left/attacking 2.png")
  gokukickleft3 = loadImage("Goku Left/attacking 3.png")
  gokukickleft4 = loadImage("Goku Left/attacking 4.png")
  gokukickleft5 = loadImage("Goku Left/attacking 5.png")
  gokukickleft6 = loadImage("Goku Left/attacking 6.png")

  gokudeadleft = loadImage("Goku Left/dead.png")

  //frieza right
  friezastandingright = loadImage("Frieza Right/Standing.png")
  friezawalkingright = loadImage("Frieza Right/Walking.png")
  friezaattackingright1 = loadImage("Frieza Right/attacking 1.png")
  friezaattackingright2 = loadImage("Frieza Right/attacking 2.png")
  friezaattackingright3 = loadImage("Frieza Right/attacking 3.png")
  friezaattackingright4 = loadImage("Frieza Right/attacking 4.png")
  friezaattackingright5 = loadImage("Frieza Right/attacking 5.png")

  friezapowerupright1 = loadImage("Frieza Right/Powerup 1.png")
  friezapowerupright2 = loadImage("Frieza Right/Powerup 2.png")

  friezadeathbulletright = loadImage("Frieza Right/Death Bullet.png")

  friezadeadright = loadImage("Frieza Right/dead.png")


  //frieza left
  friezastandingleft = loadImage("Frieza Left/Standing.png")
  friezawalkingleft = loadImage("Frieza Left/Walking.png")
  friezaattackingleft1 = loadImage("Frieza Left/attacking 1.png")
  friezaattackingleft2 = loadImage("Frieza Left/attacking 2.png")
  friezaattackingleft3 = loadImage("Frieza Left/attacking 3.png")
  friezaattackingleft4 = loadImage("Frieza Left/attacking 4.png")
  friezaattackingleft5 = loadImage("Frieza Left/attacking 5.png")

  friezapowerupleft1 = loadImage("Frieza Left/Powerup 1.png")
  friezapowerupleft2 = loadImage("Frieza Left/Powerup 2.png")

  friezadeathbulletleft = loadImage("Frieza Left/Death Bullet.png")

  friezadeadleft = loadImage("Frieza Left/dead.png")

  //effects
  ssj = loadImage("Effects/Super saiyan 2.png")
  kame = loadImage("Effects/Kamehameha Right.png")
  kameha = loadImage("Effects/Kamehameha Left.png")
  ssf = loadImage("Effects/Super Frieza.png")
  
  
}
function setup() {
  createCanvas(800,400);

   b1 = createSprite(1,200,1,400)
   b1.visible = false

   b2 = createSprite(799,200,1,400)
   b2.visible = false

  sf = createSprite(20,20)
 sf.addImage(ssf)
 sf.visible = false
 sf.scale = 0.15

 ss = createSprite(20,20)
 ss.addImage(ssj)
 ss.visible = false
 ss.scale = 0.3

  goku = createSprite(200,200)
  goku.addImage(gokustandingright)
  goku.scale = 2

  ground = createSprite(400,300,800,20)
  ground.visible = false  

  frieza = createSprite(600,200)
  frieza.addImage(friezastandingleft)
  frieza.scale = 1.7

  ground = createSprite(400,300,800,20)
  ground.visible = false
  
 
  deathbullet1 = createSprite(400,300,10,5)
  deathbullet1.shapeColor = "red"
  deathbullet1.visible = false

  deathbullet2 = createSprite(400,300,10,5)
  deathbullet2.shapeColor = "red"
  deathbullet2.visible = false

  deathbullet3 = createSprite(400,300,10,5)
  deathbullet3.shapeColor = "red"
  deathbullet3.visible = false

  deathbullet4 = createSprite(400,300,10,5)
  deathbullet4.shapeColor = "red"
  deathbullet4.visible = false

  deathbullet5 = createSprite(400,300,10,5)
  deathbullet5.shapeColor = "red"
  deathbullet5.visible = false

 gameState = 0
 gokuDirection = "right"
 friezaDirection = "left"

 kamehamehatime = 0
 sstime = 0
 attacktime = 0
 friezatime = 0
 sftime = 0
 deathtime = 0

 kamecounter = createSprite(20,0,10,10)
 kamecounter.visible = false

 sscounter = createSprite(40,0,10,10)
 sscounter.visible = false

 attackcounter = createSprite(60,0,10,10)
 attackcounter.visible = false

 friezacounter = createSprite(80,0,10,10)
 friezacounter.visible = false

 sfcounter = createSprite(100,0,10,10)
 sfcounter.visible = false

 deathcounter = createSprite(120,0,10,10)
 deathcounter.visible = false

 
 kamehameha = createSprite(20,20)
 kamehameha.addImage(kame)
 kamehameha.scale = 2
 kamehameha.visible = false

 gokuhp = 500
 friezahp = 500

 kickcharge = 0
 sscharge = 0
 kamecharge = 0

 kickcounter = createSprite(120,0,10,10)
 kickcounter.visible = false

 sscharger = createSprite(140,0,10,10)
 sscharger.visible = false

 kamehamecounter = createSprite(160,0,10,10)
 kamehamecounter.visible = false

 tailcharge = 0
 sfcharge = 0
 deathcharge = 0

 tailcounter = createSprite(180,0,10,10)
 tailcounter.visible = false

 sfcharger = createSprite(200,0,10,10)
 sfcharger.visible = false

 deathcharger = createSprite(220,0,10,10)
 deathcharger.visible = false

 gokuicon = createSprite(60,40)
 gokuicon.addImage(gokuiconImg)
 gokuicon.scale = 0.08

 friezaicon = createSprite(740,40)
 friezaicon.addImage(friezaiconImg)
 friezaicon.scale = 0.2

}

function draw() {
  background(bg); 
  ss.x = goku.x
  ss.y = goku.y - 20
  sf.x = frieza.x
  sf.y = frieza.y - 30
  kamehameha.x = goku.x
  kamehameha.y = goku.y - 25
  if(gameState === 0){
  if(frameCount >=10 && frameCount<=60){
    textFont('Georgia');
    fill("yellow")
    textSize(65)
    text("3",360,200);
  }
  if(frameCount >=70 && frameCount<=120){
    textFont('Georgia');
    fill("yellow")
    textSize(65)
    text("2",360,200);
  }
  if(frameCount >=130 && frameCount<=180){
    textFont('Georgia');
    fill("yellow")
    textSize(65)
    text("1",360,200);
  }

  if(frameCount >=190 && frameCount<=240){
    textFont('Georgia');
    fill("yellow")
    textSize(65)
    text("Go!",360,200);
  }
  if(frameCount >=250){
    gameState = 1;
  }
  }

  if(gameState === 1){
    textFont('Georgia');
    fill("white")
    textSize(20)
    text("Press F",3,360);
    text("To Kick",3,390);
    text("Press G",140,360);
    text("To Powerup",126,390);
    text("Press H",275,360);
    textSize(15)
    text("To use Kamehamha",259,390);
    textSize(20)
    text("Press J",430,360);
    text("To Attack",420,390);
    text("Press K",540,360);
    text("To be Invincible",520,390);
    text("Press L",700,360);
    textSize(15)
    text("To use Death Bullet",665,390);
    rect(400,330,10,70) 
    rect(0,330,800,10)
    fill("green")    
    rect(100,20,gokuhp/2,20)
    rect(450,20,friezahp/2,20)

    fill(rgb(43,194,186))
    if(kickcharge === 1){
    rect(100,45,1,5)
    }
    if(kickcharge === 0){
    rect(100,45,250,5)
   }
 
   if(sscharge === 0){
    rect(100,55,250,5)
    }
    if(sscharge !== 0){
    rect(100,55,sscharge*2.5,5)
   }

   if(kamecharge === 0){
    rect(100,65,250,5)
    }
    if(kamecharge !== 0){
    rect(100,65,kamecharge*5,5)
   }



   if(tailcharge === 1){
    rect(450,45,1,5)
    }
    if(tailcharge === 0){
    rect(450,45,250,5)
   }
 
   if(sfcharge === 0){
    rect(450,55,250,5)
    }
    if(sfcharge !== 0){
    rect(450,55,sfcharge*2.5,5)
   }

   if(deathcharge === 0){
    rect(450,65,250,5)
    }
    if(deathcharge !== 0){
    rect(450,65,deathcharge*5,5)
   }

    textFont('Georgia');
    fill("black")
    textSize(20)
    text("Press W to jump",20,100);
    text("Press A & D to move",10,120);

    text("Press UP to jump",550,100);
    text("Press RIGHT & LEFT to move",510,120);


   if(friezahp > 0 &&gokuhp > 0){

   if(keyDown("w")&&goku.y > 180){
     goku.velocityY = -12
   }   
   goku.velocityY = goku.velocityY + 0.8

   if(keyDown("up")&&frieza.y > 180){
    frieza.velocityY = -12
  }   
  frieza.velocityY = frieza.velocityY + 0.8

   if(keyDown("d")){
   goku.addImage(gokuwalkingright)
   goku.x = goku.x + 4
   gokuDirection = "right"
   ss.x = goku.x + 15
    }

   else{
     if (gokuDirection === "right") {
      goku.addImage(gokustandingright)
      ss.x = goku.x
     }
   }

   
  if(keyDown("right")){
    frieza.addImage(friezawalkingright)
    friezaDirection = "right"
    frieza.x = frieza.x + 4
     }
     else{
      if (friezaDirection === "right") {
       frieza.addImage(friezastandingright)
      }
    }

   
   if(keyDown("a")){
    goku.addImage(gokuwalkingleft)
    goku.x = goku.x - 4
    gokuDirection = "left"
    ss.x = goku.x - 15
   }
   else{
     if (gokuDirection === "left") {
      goku.addImage(gokustandingleft)
      ss.x = goku.x
     }
   }

   if(keyDown("left")){
    frieza.addImage(friezawalkingleft)
    frieza.x = frieza.x - 4
    friezaDirection = "left"
   }
   else{
    if (friezaDirection === "left") {
     frieza.addImage(friezastandingleft)
    }
  }
   
   if(keyDown("f")&&kickcharge === 0){
    kickcounter.velocityY = 50
    kickcharge = 1
     if(gokuDirection === "right"){
       attackcounter.velocityY = 50
       goku.addImage(gokukickright1)
     }
     if(gokuDirection === "left"){
      attackcounter.velocityY = 50
      goku.addImage(gokukickleft1)
    }
   }

   if(attacktime === 1&&gokuDirection === "right"){
    goku.addImage(gokukickright2)
  }
  if(attacktime === 2&&gokuDirection === "right"){
    goku.addImage(gokukickright3)
  }
  if(attacktime === 3&&gokuDirection === "right"){
    goku.addImage(gokukickright4)
  }
  if(attacktime === 4&&gokuDirection === "right"){
    goku.addImage(gokukickright5)
  }
  if(attacktime === 5&&gokuDirection === "right"){
    goku.addImage(gokukickright6)
  }

  if(attacktime === 6&&gokuDirection === "right"){
    attacktime = 0
    attackcounter.velocityY = 0
    attackcounter.y = 0
    goku.addImage(gokustandingright)
  }

  if(attacktime === 1&&gokuDirection === "left"){
    goku.addImage(gokukickleft2)
  }
  if(attacktime === 2&&gokuDirection === "left"){
    goku.addImage(gokukickleft3)
  }
  if(attacktime === 3&&gokuDirection === "left"){
    goku.addImage(gokukickleft4)
  }
  if(attacktime === 4&&gokuDirection === "left"){
    goku.addImage(gokukickleft5)
  }
  if(attacktime === 5&&gokuDirection === "left"){
    goku.addImage(gokukickleft6)
  }

  if(attacktime === 6&&gokuDirection === "left"){
    attacktime = 0
    attackcounter.velocityY = 0
    attackcounter.y = 0
    goku.addImage(gokustandingleft)
  }

  if(attackcounter.y === 400&&attacktime !== 7){
   attackcounter.y = 0
   attacktime = attacktime + 1
  }

    if(keyDown("g")&&sscharge === 0){
     sscounter.velocityY = 40
     sscharger.velocityY = 50
     sscharge = 1
     if(gokuDirection === "right"){
     goku.addImage(gokupowerupright1)
     }
     if(gokuDirection === "left"){
      goku.addImage(gokupowerupleft1)
      }
    }

    if(sstime === 1&&gokuDirection === "right"){
      goku.addImage(gokupowerupright2)
    }
    if(sstime === 2&&gokuDirection === "right"){
      goku.addImage(gokupowerupright3)
    }
    if(sstime === 3&&gokuDirection === "right"){
      goku.addImage(gokustandingright)
      ss.visible = true
    }

    if(sstime === 30&&gokuDirection === "right"){
      ss.visible = false
      sstime = 0
      sscounter.velocityY = 0
      sscounter.y = 0
      goku.addImage(gokustandingright)
    }
    
    if(sstime === 1&&gokuDirection === "left"){
      goku.addImage(gokupowerupleft2)
    }
    if(sstime === 2&&gokuDirection === "left"){
      goku.addImage(gokupowerupleft3)
    }
    if(sstime === 3&&gokuDirection === "left"){
      goku.addImage(gokustandingleft)
      ss.visible = true
    }

    if(sstime === 50&&gokuDirection === "left"){
      ss.visible = false
      sstime = 0
      sscounter.velocityY = 0
      sscounter.y = 0
      goku.addImage((gokustandingleft))
    }

    if(sscounter.y === 400 && sstime !== 50){
      sscounter.y = 0
      sstime = sstime + 1
    }

    if(keyDown("h")&&kamecharge === 0){
      kamecharge === 1
      kamehamecounter.velocityY = 40
    if(gokuDirection === "right"){
      goku.addImage(gokukamehameharight1)
      kamehameha.x = goku.x + 180
      kamehameha.addImage(kame)
      kamecounter.velocityY = 20
    }
    if(gokuDirection === "left"){
      goku.addImage(gokukamehamehaleft1)
      kamehameha.x = goku.x - 180
      kamehameha.addImage(kameha)
      kamecounter.velocityY = 20
    }
    }
     
    if(kamecounter.y === 400 && kamehamehatime !== 5){
      kamecounter.y = 0
      kamehamehatime = kamehamehatime + 1
    }
  
    if(kamehamehatime === 1&&gokuDirection === "right"){
      goku.addImage(gokukamehameharight2)
    }
    if(kamehamehatime === 2&&gokuDirection === "right"){
      goku.addImage(gokukamehameharight3)
    }
    if(kamehamehatime === 3&&gokuDirection === "right"){
      goku.addImage(gokukamehameharight4)
      kamehameha.visible = true
      kamehameha.x = goku.x + 170
      
    }
    if(kamehamehatime === 4&&gokuDirection === "right"){
      goku.addImage(gokustandingright)
      kamehameha.visible = false
      kamehamehatime = 0
      kamecounter.velocityY = 0
      kamecounter.y = 0
    }

    if(kamehamehatime === 1&&gokuDirection === "left"){
      goku.addImage(gokukamehamehaleft2)
    }
    if(kamehamehatime === 2&&gokuDirection === "left"){
      goku.addImage(gokukamehamehaleft3)
    }
    if(kamehamehatime === 3&&gokuDirection === "left"){
      goku.addImage(gokukamehamehaleft4)
      kamehameha.visible = true
      kamehameha.x = goku.x - 170
      
    }
    if(kamehamehatime === 4&&gokuDirection === "left"){
      goku.addImage(gokustandingleft)
      kamehameha.visible = false
      kamehamehatime = 0
      kamecounter.velocityY = 0
      kamecounter.y = 0
    }
    
    if(keyDown("j")&&tailcharge === 0){
      tailcharge = 1
      tailcounter.velocityY = 50
      friezacounter.velocityY = 50
      if(friezaDirection === "right"){
        frieza.addImage(friezaattackingright1)
      }
      if(friezaDirection === "left"){
        frieza.addImage(friezaattackingleft1)
      }
    } 

    if(friezatime === 1&&friezaDirection === "right"){
      frieza.addImage(friezaattackingright2)
    }
    if(friezatime === 2&&friezaDirection === "right"){
      frieza.addImage(friezaattackingright3)
    }
    if(friezatime === 3&&friezaDirection === "right"){
      frieza.addImage(friezaattackingright4)
    }
    if(friezatime === 4&&gokuDirection === "right"){
      frieza.addImage(friezaattackingright5)
    }
    if(friezatime === 5&&friezaDirection === "right"){
      friezatime = 0
      friezacounter.velocityY = 0
      friezacounter.y = 0
      frieza.addImage(friezastandingright)
      Math.round(gokuhp)
    }
  
    if(friezacounter.y === 400&& friezatime !== 6){
      friezacounter.y = 0
      friezatime = friezatime + 1
    }

    if(friezatime === 1&&friezaDirection === "left"){
      frieza.addImage(friezaattackingleft2)
    }
    if(friezatime === 2&&friezaDirection === "left"){
      frieza.addImage(friezaattackingleft3)
    }
    if(friezatime === 3&&friezaDirection === "left"){
      frieza.addImage(friezaattackingleft4)
    }
    if(friezatime === 4&&gokuDirection === "left"){
      frieza.addImage(friezaattackingleft5)
    }
    if(friezatime === 5&&friezaDirection === "left"){
      friezatime = 0
      friezacounter.velocityY = 0
      friezacounter.y = 0
      frieza.addImage(friezastandingleft)
      Math.round(gokuhp)
    }
  
    if(friezacounter.y === 400&& friezatime !== 6){
      friezacounter.y = 0
      friezatime = friezatime + 1
    }

    if(keyDown("k")&&sfcharge === 0){
      sfcharge = 1
      sfcharger.velocityY = 50
      sfcounter.velocityY = 40
      if(friezaDirection === "right"){
        frieza.addImage(friezapowerupright1)
      }
      if(friezaDirection === "left"){
        frieza.addImage(friezapowerupleft1)
       }
     }
 
     if(sftime === 1&&friezaDirection === "right"){
      frieza.addImage(friezapowerupright2)
      sf.visible = true
     }
  
     if(sftime === 20&&friezaDirection === "right"){
       sf.visible = false
       sftime = 0
       sfcounter.velocityY = 0
       sfcounter.y = 0
       frieza.addImage(friezastandingright)
     }
     
     if(sftime === 1&&friezaDirection === "left"){
      frieza.addImage(friezapowerupleft2)
      sf.visible = true
     }

     if(sftime === 2&&friezaDirection === "left"){
      frieza.addImage(friezastandingleft)
      sf.visible = true
     }
  
     if(sftime === 20&&friezaDirection === "left"){
       sf.visible = false
       sftime = 0
       sfcounter.velocityY = 0
       sfcounter.y = 0
       frieza.addImage(friezastandingleft)
     }
 
     if(sfcounter.y === 400){
       sfcounter.y = 0
       sftime = sftime + 1
     }

     if(keyDown("l")&&deathcharge === 0){
       deathcharge = 1
       deathcharger.velocityY = 50
      if(friezaDirection === "right"){
        frieza.addImage(friezadeathbulletright)
        deathcounter.velocityY = 20

        deathbullet1.visible = true
        deathbullet2.visible = true
        deathbullet3.visible = true
        deathbullet4.visible = true
        deathbullet5.visible = true
        deathbullet1.x = frieza.x + 70
        deathbullet1.y = frieza.y - 30
        deathbullet2.x = frieza.x + 90
        deathbullet2.y = frieza.y - 30
        deathbullet3.x = frieza.x + 110
        deathbullet3.y = frieza.y - 30
        deathbullet4.x = frieza.x + 130
        deathbullet4.y = frieza.y - 30
        deathbullet5.x = frieza.x + 150
        deathbullet5.y = frieza.y - 30
        
        deathbullet1.velocityX = 8
        deathbullet2.velocityX = 8
        deathbullet3.velocityX = 8
        deathbullet4.velocityX = 8
        deathbullet5.velocityX = 8


      }
      if(friezaDirection === "left"){
        frieza.addImage(friezadeathbulletleft)
        deathcounter.velocityY = 20

        deathbullet1.visible = true
        deathbullet2.visible = true
        deathbullet3.visible = true
        deathbullet4.visible = true
        deathbullet5.visible = true
        deathbullet1.x = frieza.x - 70
        deathbullet1.y = frieza.y - 30
        deathbullet2.x = frieza.x - 90
        deathbullet2.y = frieza.y - 30
        deathbullet3.x = frieza.x - 110
        deathbullet3.y = frieza.y - 30
        deathbullet4.x = frieza.x - 130
        deathbullet4.y = frieza.y - 30
        deathbullet5.x = frieza.x - 150
        deathbullet5.y = frieza.y - 30
        
        deathbullet1.velocityX = -8
        deathbullet2.velocityX = -8
        deathbullet3.velocityX = -8
        deathbullet4.velocityX = -8
        deathbullet5.velocityX = -8


      }
      }
       
     if(deathtime === 2){
       deathcounter.y = 0
       deathcounter.velocityY = 0
       deathtime = 0
     }

      if(deathcounter.y === 400){
        deathcounter.y = 0
        deathtime = deathtime + 1
      }

   }

      gokudamage();
      friezadamage();

      function gokudamage(){

       //normal kamehameha
       if(kamehameha.isTouching(frieza)&&kamehameha.visible === true&&sf.visible === false){
         friezahp = friezahp - 3
         if(gokuDirection === "right"){
         frieza.x = frieza.x + 1
         }
         if(gokuDirection === "left"){
          frieza.x = frieza.x - 1
          }
         frieza.y = frieza.y - 1
       }

       //super saian 2 kamehameha
       if(kamehameha.isTouching(frieza)&&kamehameha.visible === true&&ss.visible === true&&sf.visible === false){
        friezahp = friezahp - 4
        if(gokuDirection === "right"){
          frieza.x = frieza.x + 1
          }
          if(gokuDirection === "left"){
           frieza.x = frieza.x - 1
           }
        frieza.y = frieza.y - 1
      }

      //super frieza kamehameha
      if(kamehameha.isTouching(frieza)&&kamehameha.visible === true&&ss.visible === true&&sf.visible === true){
        friezahp = friezahp - 0
        if(gokuDirection === "right"){
          frieza.x = frieza.x + 1
          }
          if(gokuDirection === "left"){
           frieza.x = frieza.x - 1
           }
        frieza.y = frieza.y - 1
      }
       
     //kick right
     if(goku.isTouching(frieza)&&sf.visible === false&&attacktime > 0&&frieza.x > goku.x&&gokuDirection === "right"){
      friezahp = friezahp - 1
      frieza.x = frieza.x + 1
      frieza.y = frieza.y - 1
     }

     //kick left
     if(goku.isTouching(frieza)&&sf.visible === false&&attacktime > 0&&frieza.x < goku.x&&gokuDirection === "left"){
      friezahp = friezahp - 1
      frieza.x = frieza.x - 1
      frieza.y = frieza.y - 1
     }

    //ss 2 kick right
    if(goku.isTouching(frieza)&&sf.visible === false&&attacktime > 0&&frieza.x > goku.x&&gokuDirection === "right"&&ss.visible === true){
      friezahp = friezahp - 2
      frieza.x = frieza.x + 1
      frieza.y = frieza.y - 1
     }

     //ss 2 kick left
     if(goku.isTouching(frieza)&&sf.visible === false&&attacktime > 0&&frieza.x < goku.x&&gokuDirection === "left"&&ss.visible === true){
      friezahp = friezahp - 2
      frieza.x = frieza.x - 1
      frieza.y = frieza.y - 1
     }

     //superfrieza kick

     if(goku.isTouching(frieza)&&sf.visible === false&&attacktime > 0&&sf.visible === true)
     friezahp = friezahp - 0
      }

      function friezadamage() {

        //tail right
     if(frieza.isTouching(goku)&&friezatime > 0&&goku.x > frieza.x&&friezaDirection === "right"){
      gokuhp = gokuhp - 1
      goku.x = goku.x + 1
      goku.y = goku.y - 1
     }

     //tail left
     if(frieza.isTouching(goku)&&friezatime > 0&&goku.x < frieza.x&&friezaDirection === "left"){
      gokuhp = gokuhp - 2
      goku.x = goku.x - 1
      goku.y = goku.y - 1
     }        
      }

      if(deathbullet5.isTouching(goku)||deathbullet4.isTouching(goku)||deathbullet3.isTouching(goku)||deathbullet2.isTouching(goku)||deathbullet1.isTouching(goku)&&friezaDirection === "left"){
        gokuhp = gokuhp - 2
        goku.x = goku.x - 1
        goku.y = goku.y - 1
      }

      if(deathbullet5.isTouching(goku)||deathbullet4.isTouching(goku)||deathbullet3.isTouching(goku)||deathbullet2.isTouching(goku)||deathbullet1.isTouching(goku)&&friezaDirection === "right"&&deathbullet1.velocityX === 8&&deathbullet2.velocityX === 8&&deathbullet3.velocityX === 8&&deathbullet4.velocityX === 8&&deathbullet5.velocityX === 8){

        gokuhp = gokuhp - 4
        goku.x = goku.x + 1
        goku.y = goku.y + 1
      }


      if(gokuhp <= 0){
    textFont('Georgia');
    fill("white")
    textSize(50)
    text("Frieza Wins",250,130);
    ss.visible = false
    kamehameha.visible = false
    sf.visible = false
    deathbullet1.visible = false
    deathbullet2.visible = false
    deathbullet3.visible = false
    deathbullet4.visible = false
    deathbullet5.visible = false 
    if(gokuDirection === "right"){
    goku.addImage(gokudeadright)
    goku.y = 280
    }   

    if(gokuDirection === "left"){
      goku.addImage(gokudeadleft)
      goku.y = 280
      }  

      }

      if(friezahp <= 0){
        textFont('Georgia');
        fill("white")
        textSize(50)
        text("Goku Wins",250,130);
        ss.visible = false
        kamehameha.visible = false
        ss.visible = false
        deathbullet1.visible = false
    deathbullet2.visible = false
    deathbullet3.visible = false
    deathbullet4.visible = false
    deathbullet5.visible = false
    if(friezaDirection === "right"){
      frieza.addImage(friezadeadright)
      frieza.y = 280
      frieza.scale = 0.8
    }
    if(friezaDirection === "left"){
      frieza.addImage(friezadeadleft)
      frieza.y = 280
      frieza.scale = 0.8
    }
    
          }
    
    if(kickcounter.y === 400){
      kickcounter.y = 0
      kickcounter.velocityY = 0
      kickcharge = 0
    }

    if(sscharger.y === 400){
      sscharger.y = 0
      sscharge = sscharge + 1
    }

    if(sscharge === 100){
    sscharge = 0
    sscharger.velocityY = 0
    sscharger.y = 0
    }

    if(kamehamecounter.y === 400){
      kamehamecounter.y = 0
      kamecharge = kamecharge + 1
    }

    if(kamecharge === 50){
    kamecharge = 0
    kamehamecounter.velocityY = 0
    kamehamecounter.y = 0
    }

    if(tailcounter.y === 400){
      tailcounter.y = 0
      tailcounter.velocityY = 0
      tailcharge = 0
    }

    if(sfcharger.y === 400){
      sfcharger.y = 0
      sfcharge = sfcharge + 1
    }

    if(sfcharge === 70){
    sfcharge = 0
    sfcharger.velocityY = 0
    sfcharger.y = 0
    }

    if(deathcharger.y === 400){
      deathcharger.y = 0
      deathcharge = deathcharge + 1
    }

    if(deathcharge === 50){
    deathcharge = 0
    deathcharger.velocityY = 0
    deathcharger.y = 0
    }   

    goku.collide(ground)
    frieza.collide(ground)
    goku.collide(b1)
    goku.collide(b2)
    frieza.collide(b1)
    frieza.collide(b2)
    
    drawSprites();
  }

}
