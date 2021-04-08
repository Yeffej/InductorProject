const ChargeHTML = (title = "", text = "", Confirmation = false) => {
    const confirmationOff = `
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="CustomAlert_bts"></div>
    `
    const confirmationOn = `
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="CustomAlert_bts"></div>
    <button id="CustomModal-OK" >Ok</button>
    <button id="CustomModal-NO" >No</button>
    `
    if(Confirmation) {
        return confirmationOn;
    }else
        return confirmationOff;
     

}

const ChargeCSS = () => {
    return (`
<style>
    .CustomAlert {
        position: fixed;
        top: 0;
        right: 0;
        width: 35vw;
        height: auto;
        border-radius: 1.5vw;
        margin: 5px;
        padding: 5px;
        color: white;
        text-align: center;
        animation: GetIn 1s forwards ease-in-out;
    }
    .CustomAlert--red {
        background-color: #ff0000;
    }
    .CustomAlert--yellow {  
        background-color: #ffff00; 
    }
    .CustomAlert--green {   
        background-color: #00ff00;
    }
    .CustomAlert--blue {
        background-color: #0000ff;
    }
    .CustomAlert h2 {
        margin-top: 0;
        font-size: 2vw;
    } 
    .CustomAlert p {
        font-size: 1.5vw;
    }
    .CustomAlert_bts {
        display: flex;
        justify-content: space-evenly;
    }
    .CustomAlert i {
        margin-right: 5px;
    }

    @keyframes GetIn {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    @keyframes GetOut {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100%);
        }
    }

</style>

    `)
}


function CustomAlert(optionsObject = null) {
    let style = "CustomAlert--blue"
    if(optionsObject) {
        if (optionsObject.type === "error") {
            style = "CustomAlert--red"

        }else if(optionsObject.type === "info") {
            style = "CustomAlert--blue"

        }else if(optionsObject.type === "warning") {
            style = "CustomAlert--yellow"

        }else if( optionsObject.type === "success") {
            style = "CustomAlert--green"
        }
    }
    
   return RenderAlert(optionsObject, style);
     
}


function RenderAlert(Options, colorStyle) {
    let template
    if(Options) {
        template =`
        ${ChargeHTML(Options.title, Options.text, Options.confirmation)}
        ${ChargeCSS()}
        `
    } else {
        template =`
        ${ChargeHTML()}
        ${ChargeCSS()}
        `
    }
    const AlertWrapper = document.createElement("div")
    AlertWrapper.classList.add("CustomAlert")
    AlertWrapper.classList.add(colorStyle)
    AlertWrapper.innerHTML = template
    document.body.appendChild(AlertWrapper)

    if(Options.confirmation) {
        const OkBt =  AlertWrapper.querySelector("#CustomModal-OK")
        const NoBT =  AlertWrapper.querySelector("#CustomModal-NO")
       return [OkBt, NoBT];
    }  
    setTimeout(()=> {
        const rmAlert = () => {
            AlertWrapper.remove()
            AlertWrapper.removeEventListener("animationend", rmAlert)
        }
        AlertWrapper.style.animation = "GetOut 1s forwards ease-in-out"
        AlertWrapper.addEventListener("animationend", rmAlert)
    }, 5000)
}

export default CustomAlert;