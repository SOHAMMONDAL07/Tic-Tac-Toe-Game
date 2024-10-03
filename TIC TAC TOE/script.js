boxes=document.querySelectorAll(".box");
reset=document.querySelector(".reset");
let message=document.querySelector("h3");
let count=0
win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
turn0=true;
boxes.forEach(box => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0===true){
            box.innerText="O";
            turn0=false;
            box.style.color="red";
        }
        else{
            box.innerText="X";
            turn0=true;
            box.style.color="blue";
        }
        box.disabled=true;
        count++;
        if(count===9)
          message.innerText="Game is draw";
        checkwinner();
    })
});

let showwinner=(pos1)=>{
   message.innerText=`Congrats the winner is ${pos1}`;  
   disable();
}

let disable=()=>{
    for(let box of boxes)
      box.disabled=true;
}

const checkwinner=()=>{
    for(i of win){
        pos1=boxes[i[0]].innerText;
        pos2=boxes[i[1]].innerText;
        pos3=boxes[i[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
              showwinner(pos1);
            }   
        }
    }
}

reset.addEventListener("click",()=>{
    boxes.forEach(box=>{
        box.disabled=false;
        box.innerText="";
    })
})