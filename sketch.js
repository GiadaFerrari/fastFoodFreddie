let bellyBreath = 155;
let bellyHeight = 118;
let bellyFlesh = 40;
let bellyBtn = 159;
let breathCounter = 1;
let bubbleX = 10;
let bubbleY = 10;
let growBelly = true;
let breathFrequency = 25;
let rest = true;
let randomInterval;
let eyeY = 8.5;
let bite = 0;
let bite2 = 0;
let bite3 = 0;
let chips = document.querySelector('.chips');
let chew = document.querySelector('.chew');
let snore = document.querySelector('.snore');

//BUTTONS
let buttons = document.querySelector('div')

let sleepBtn = document.querySelector('.sleep')
let awakeBtn = document.querySelector('.awake');
let smokeBtn = document.querySelector('.smoke');
let eatBtn = document.querySelector('.eat');

//STATES
let awakeState = false;
let eatState = false;



function setup() {
    createCanvas(500, 700);
    smooth();
    noStroke();
    frameRate(breathFrequency);
    strokeCap(ROUND)
    strokeJoin(ROUND);
    //set vieport width to canvas width
    document.body.style.width = width + "px";
    buttons.style.width = width + "px";
}
//translate(width/2, height/3);




function restJJ() {
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
    if (bellyBreath == 180) {
        growBelly = false;
    } else if (bellyBreath == 155) {
        growBelly = true;
    }

}

function draw() {
    randomInterval = Math.floor(random(550));

    //ANIMATE RESTING
    restJJ();
    //JUNKIE JOE
    function drawJJ() {


        background('#000000')
        noStroke();
        fill('#fdc9ba');
        ellipse(250, 100, 70, 80); //head
        ellipse(155, 155, 90, 30); //left arm
        ellipse(345, 155, 90, 30); //rigt arm
        fill(230);
        ellipse(250, bellyBreath, 149, bellyHeight); //shirt
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
        arc(250, 176, 152, 15, -PI, 0) //pants
        arc(250, 176, 152, 130, 0, PI); //pants
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
        stroke(65, 10, 39);
        strokeWeight(8);
        line(221, 72, 203, 90);
        line(220, 75, 210, 95);
        line(223, 80, 216, 96)

        //right
        line(280, 72, 295, 90)
        line(281, 75, 288, 95)
        line(279, 80, 282, 96)
        //WAKE UP JJ


    }
    drawJJ()
    if (awakeState == false) {
        snore.play();

    }
    //WAKE HIM UP

    if (awakeState == true) {
        snore.pause();

        fill('#ffffff');
        bubbleX = 0;
        bubbleY = 0;
        stroke(0)
        strokeWeight(1);
        ellipse(238, 82, 12, eyeY);
        ellipse(262, 82, 12, eyeY);
        strokeWeight(3);
        point(238, 82);
        point(262, 82);

    }

    if (eatState == true) {
        awakeState = true;

        chew.play();
        chips.style.display = 'block';

        noStroke();
        fill(234, 22, 0);
        triangle(270, bellyBreath - 50, 270, bellyBreath - 15, 300, bellyBreath - 20); //pizza base
        strokeWeight(7);
        stroke(234, 187, 0);
        arc(284, bellyBreath - 20, 30, 5, 0, PI) //crust
        noStroke();
        fill('#FdFdFd');
        ellipse(278, bellyBreath - 27, 7, 6); //mozzarella
        ellipse(280, bellyBreath - 34, 4, 5); //mozzarella
        ellipse(286, bellyBreath - 28, 4, 3); //mozzarella
        ellipse(276, bellyBreath - 40, 5, 5); //mozzarella

        fill(230)

        eatPizza(270, bellyBreath - 50, bite) //bite 1

        eatPizza(270, bellyBreath - 40, bite) //bite 2

        eatPizza(270, bellyBreath - 30, bite) //bite 3


        if (bite < 15) {
            bite = 15;
            console.log("eating")

        }
        if (bite == 15) {
            bite2 = 15
        }

        if (bite == 15 && bite2 == 15) {
            bite3 = 15;
        }
        chew.onended = () => {
            chips.style.display = 'none';
            eatState = false;
            awakeState = false;

        };
    }

    function eatPizza(x, y, d) {
        noStroke();
        fill(230);
        ellipse(x, y, d, d)

    }

    /*
        function eat() {
            setTimeout(eatPizza(270, bellyBreath - 50, 10), 1000);
            setTimeout(eatPizza(270, bellyBreath - 40, 15), 2000);
            setTimeout(eatPizza(270, bellyBreath - 30, 15), 3000);
            // setTimeout(eatPizza(280, bellyBreath - 35, 20), 2000);
            //setTimeout(eatPizza(290, bellyBreath - 30, 20), 2500);
            //setTimeout(eatPizza(300, bellyBreath - 30, 20), 3000);

        }
*/

    //randomly wake himup and let him go back to sleep
    if (randomInterval == 10) {
        awakeState = true //set to true

        setTimeout(() => {
            awakeState = false; //set back to false
            eyeY = 10;
        }, 2500)
    }
    if (randomInterval == 20) {
        eatState = true
    }



    //set event listeners

    sleepBtn.addEventListener("click", () => {
        awakeState = false;
        eatState = false;
    })

    awakeBtn.addEventListener("click", () => {
        awakeState = true;
    })
    eatBtn.addEventListener("click", () => {
        eatState = true;
    })

}
