const logDiv= document.getElementById("log");
const stateDiv=document.getElementById("state");
const startBtn=document.getElementById("start-btn");
const stopBtn=document.getElementById("stop-btn");

startBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
    startBtn.disabled=true;
    stopBtn.disabled= false;

})

stopBtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
    logDiv.textContent="";
    stateDiv.textContent=" ";
    stopBtn.disabled=true;
    startBtn.disabled= false;
})
function handleDown(e)
{
    logDiv.textContent= `Key ${e.key} pressed Up`;
    stateDiv.textContent="key is down"
}
function handleUp(e)
{
    logDiv.textContent=  `Key ${e.key} pressed Up`;
    stateDiv.textContent="key is Up"
}