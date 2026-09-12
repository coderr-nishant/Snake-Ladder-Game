let tog=1;//keep track of whose turn it is.
//tog=1 means player1 turn and tog=0 means player2 turn.
let rollingSound=new Audio('SnakesAndLadder_rpg-dice-rolling-95182.mp3');
let winningSound=new Audio('SnakesAndLadder_winharpsichord-39642.mp3');

let p1sum=0; //stores Player 1's current position.
let p2sum=0; //stores Player 2's current position.
let isMoving=false;

function play(player,pSum,correction,num,done){
    let sum;  //It holds the final position of the player.

    if(pSum=="p1sum"){
        p1sum=p1sum+num;

        if(p1sum>100){
        p1sum=p1sum-num;
        }

        if(p1sum==4){
          setTimeout(function(){
          p1sum=56;
          play("p1","p1sum",0,0);
          },1000);
       }

        if(p1sum==14){
            setTimeout(function(){
                p1sum=55;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==22){
            setTimeout(function(){
                p1sum=58;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==28){
            setTimeout(function(){
                p1sum=10;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==37){
            setTimeout(function(){
                p1sum=3;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==41){
            setTimeout(function(){
                p1sum=79;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==48){
            setTimeout(function(){
                p1sum=16;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==54){
            setTimeout(function(){
                p1sum=88;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==75){
            setTimeout(function(){
                p1sum=32;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==94){
            setTimeout(function(){
                p1sum=71;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        if(p1sum==96){
            setTimeout(function(){
                p1sum=42;
                play("p1","p1sum",0,0,done);
            },1000);
        }

        sum=p1sum;

    }
    
    if(pSum=="p2sum"){
        p2sum=p2sum+num;

        if(p2sum>100){
            p2sum=p2sum-num;
        }

        if(p2sum==4){
            setTimeout(function(){
                p2sum=56;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==12){
            setTimeout(function(){
                p2sum=50;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==14){
            setTimeout(function(){
                p2sum=55;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==22){
            setTimeout(function(){
                p2sum=58;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==28){
            setTimeout(function(){
                p2sum=10;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==37){
            setTimeout(function(){
                p2sum=3;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==41){
            setTimeout(function(){
                p2sum=79;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==48){
            setTimeout(function(){
                p2sum=16;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==54){
            setTimeout(function(){
                p2sum=88;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==75){
            setTimeout(function(){
                p2sum=32;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==94){
            setTimeout(function(){
                p2sum=71;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        if(p2sum==96){
            setTimeout(function(){
                p2sum=42;
                play("p2","p2sum",35,0,done);
            },1000);
        }

        sum=p2sum;      

    }


    document.getElementById(`${player}`).style.transition=`all linear 1s`;


    if(sum<10){
        document.getElementById(`${player}`).style.left=`${(sum-1)*62}px`;
        document.getElementById(`${player}`).style.top=`${-0*62-correction}px`;
    }

    else if(sum==100){
        winningSound.play();
        if(player=='p1'){
            alert("Red Won!!");
        }
        else if(player=='p2'){
            alert('Yellow Won!!');
        }

        if(done){
            done();
        }
        setTimeout(() => {
            alert("Reload the game");
        location.reload();
        }, 2000);  //refresh the current webpage.
    }

    else{
        numarr=Array.from(String(sum));

        n1=eval(numarr.shift());
        n2=eval(numarr.pop());

        if(n1%2!=0){

            if(n2==0){

                document.getElementById(`${player}`).style.left=`${9*62}px`;
                document.getElementById(`${player}`).style.top=`${(-n1+1)*62-correction}px`;

            }else{

                document.getElementById(`${player}`).style.left=`${(9-(n2-1))*62}px`;
                document.getElementById(`${player}`).style.top=`${(-n1)*62-correction}px`;
                
            }
        }
        else if(n1%2==0){
            
            if(n2==0){

                document.getElementById(`${player}`).style.left=`${(0)*62}px`;
                document.getElementById(`${player}`).style.top=`${(-n1+1)*62-correction}px`;

            }else{

                document.getElementById(`${player}`).style.left=`${((n2-1))*62}px`;
                document.getElementById(`${player}`).style.top=`${(-n1)*62-correction}px`;
                
            }
        }
    }
    if (done && num != 0) {

        setTimeout(function () {

            done();

        }, 1000);
    }
}


document.getElementById("diceBtn").addEventListener("click",function(){
    if(isMoving){
        return;
    }
    isMoving=true;
    rollingSound.play();
    num=Math.floor(Math.random()*(6+1-1)+1);
    document.getElementById("dice").innerText=num;

    if(tog%2!=0){
        document.getElementById("tog").style.color="yellow";
        document.getElementById("tog").innerText="Yellow's Turn: ";
        play("p1","p1sum",0,num,function(){
            isMoving=false;
        });
    }else{
        document.getElementById("tog").style.color="red";
        document.getElementById("tog").innerText="Red's Turn: ";
        play("p2","p2sum",35,num,function(){
            isMoving=false;
        });
    }

    tog=tog+1;

})



