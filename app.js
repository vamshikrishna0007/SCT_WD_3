let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#resetbtn");
let a=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
let b=true;

function disableAllBoxes()
{
    boxes.forEach((box)=>
{
    
 box.innerText="";
    


});
}
res.addEventListener("click",disableAllBoxes);
function checkWinner() {
    for (let pattern of a) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            alert(pos1 + " Wins!");
            disableAllBoxes();
        }
    }
}

boxes.forEach((box)=>
{
    
    box.addEventListener("click",()=>
    {
        if(box.innerText!=="")
        {
            return;
        }

        if(b)
        {
            box.innerText="x";
        
            b=false;
        }
        else{
            box.innerText="O";
            b=true;
        }
        checkWinner();
    }
    
);

});