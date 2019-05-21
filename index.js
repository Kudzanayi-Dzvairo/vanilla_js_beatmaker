window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound")
    const pads = document.querySelectorAll(".pads div")
    const visual = document.querySelector(".visual")
    const colors = [
        "#60d394",
        "#4a4ab6",
        "#b48b1a",
        "#e2e21a",
        "#ee25e4",
        "#cc3030"
];
    
    console.log(sounds)
    
    //sound starts
    pads.forEach((pad, index)=>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play()

            createBubbles(index)
        })
    })


//create funtion that makes bubbles 
const createBubbles = (index) => {
    const bubble = document.createElement("div")
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease'
    bubble.addEventListener('animationend', ()=>{
        visual.removeChild(bubble)
    })
 }
})