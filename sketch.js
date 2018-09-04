let bellyBreath = 155;
let bellyHeight = 120;
let bellyFlesh = 40;
let bellyBtn = 159;
let breathCounter = 1;
let bubbleX = 10;
let bubbleY = 10;
let growBelly = true;
let breathFrequency = 180;
let rest = true;
let randomInterval;

function setup() {
    createCanvas(500, 500);
    smooth();
    noStroke();
    frameRate(30);
    strokeCap(ROUND)
    strokeJoin(ROUND);


}

function restJJ()
 {
        //if statement for breathing
        if (growBelly) {
            bellyBreath++;
            bubbleX++;
            bubbleY++;
            bellyFlesh--;
            bellyBtn++;

        } else {
            bellyBreath--;
            bubbleX--;
            bubbleY--;
            bellyFlesh++;
            bellyBtn--;

        }
        if (bellyBreath == breathFrequency) {
            growBelly = false;
        } else if (bellyBreath == 155) {
            growBelly = true;
        }

    }
function draw() {
    randomInterval = Math.floor(random(1000));

    //ANIMATE RESTING
    restJJ();
    //WAKE UP easter egg

    //JUNKIE JOE
    function drawJJ(){

    background('#FFFFFF')
    noStroke();
    fill('#fdc9ba');
    ellipse(250, 100, 70, 80); //head
    ellipse(155, 155, 90, 30); //left arm
    ellipse(345, 155, 90, 30); //rigt arm
    fill(230);
    ellipse(250, bellyBreath, 150, bellyHeight); //shirt
    fill('#fdc9ba');
    ellipse(250, 175, 145, bellyFlesh); //belly
    stroke(0);
    strokeWeight(2);
    point(250, bellyBtn); //belly button
    strokeWeight(1.5);
    point(248, 88); //nostril
    point(252, 88); //nostril left;
    fill(94, 24, 2);
    noStroke();
    arc(250, 176, 150, 15, -PI, 0) //pants
    arc(250, 176, 150, 130, 0, PI); //pants
    stroke(0);
    strokeWeight(2);
    noFill();
    arc(238, 80, 10, 10, 0, PI); //left eye
    arc(262, 80, 10, 10, 0, PI); //right eye
    noStroke();
    fill(136, 240, 255, 150);
    ellipse(255, 90, bubbleX, bubbleY); //bubble
    fill('#fdc9ba');
    stroke('#fdc9ba')

    //left foot
    beginShape();
    vertex(200, 200);
    vertex(220, 195);
    vertex(225, 220);
    vertex(213, 225);
    endShape(CLOSE);

    //left toes
    ellipse(200, 196, 1.2, 1.2);
    ellipse(204, 195, 1.5, 1.5);
    ellipse(208, 194, 2, 2);
    ellipse(212, 193, 2, 2);
    ellipse(216, 191.5, 3, 3);

    //right foot
    beginShape();
    vertex(280, 195)
    vertex(300, 200)
    vertex(288, 225)
    vertex(278, 221)
    endShape(CLOSE);

    //right toes
    ellipse(300, 196, 1.2, 1.2);
    ellipse(296, 195, 1.5, 1.5);
    ellipse(292, 194, 2, 2);
    ellipse(288, 193, 2, 2);
    ellipse(284, 191.5, 3, 3);

    //hair left
    noFill();
    stroke(65,10,39);
    strokeWeight(8);
    line(221,72,203,90);
    line(220,75,210,95);
    line(223,80,216,96)

    //right
    line(280,72,295,90)
    line(281,75,288,95)
    line(279,80,282,96)
                //WAKE UP JJ


    }
    drawJJ()
   console.log(randomInterval)

 if(randomInterval == Math.floor(random(1000))){
        wakeJJ();
        noLoop();
        setTimeout(()=>{loop();},2000)


}

    }


   function wakeJJ(){
            noStroke();
            fill('#ffd6d6')
            ellipse(238,80,10,10);
            ellipse(262,80,10,10);
            stroke(0)
            strokeWeight(2);
            point(238,80);
            point(262,80);

    }
