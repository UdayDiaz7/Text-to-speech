let speech=new SpeechSynthesisUtterance();

let Button1=document.querySelector("button");
// let text=

Button1.addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});