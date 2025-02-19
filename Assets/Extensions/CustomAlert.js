const ChargeHTML = (title = "", text = "", Confirmation = false) => {
    const confirmationOff = `
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="CustomAlert_bts"></div>
    `
    const confirmationOn = `
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="CustomAlert_bts">
        <button id="CustomModal-OK" >Ok</button>
        <button id="CustomModal-NO" >No</button>
    </div>
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
        min-width: 230px;
        height: auto;
        border-radius: 1.5vw;
        margin: 5px;
        padding: 5px;
        color: white;
        text-align: center;
        animation: GetIn 1s forwards ease-in-out;
    }
    .CustomAlert--red {
        background-color: #7c0707;
    }
    .CustomAlert--yellow {  
        background-color: #89890e; 
    }
    .CustomAlert--green {   
        background-color: #064706;
    }
    .CustomAlert--blue {
        background-color: #4f1262;
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
        margin: 8px 0;
    }
    .CustomAlert_bts button {
        height: 30px;
        min-width: 40px;
        cursor: pointer;
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

    @media screen and (max-width: 720px){
        .CustomAlert p {
            font-size: .75em;
        }
        .CustomAlert h2 {
            font-size: .9em;
        } 
    }

</style>

    `)
}


/**
 * CustomAlert - A function that Configures and renders a Custom Alert Box
 * @param {Object} optionsObject - An object with the following properties:
 *  - type: The type of the alert. Possible values are "error", "info", "warning", "success"
 *  - title: The title of the alert
 *  - text: The main text of the alert
 *  - confirmation: The text of the confirmation button. If not provided, the alert will be rendered without a confirmation button
 */
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


/**
 * RenderAlert - A function that renders a Custom Alert Box
 * @param {Object} Options - An object with the following properties:
 *  - title: The title of the alert
 *  - text: The main text of the alert
 *  - confirmation: The text of the confirmation button. If not provided, the alert will be rendered without a confirmation button
 * @param {String} colorStyle - The style of the alert. Possible values are "CustomAlert--blue", "CustomAlert--red", "CustomAlert--yellow", "CustomAlert--green"
 */
function RenderAlert(Options, colorStyle) {
    let template
    if(Options) {
        template =`
        ${ChargeCSS()}
        ${ChargeHTML(Options.title, Options.text, Options.confirmation)}
        `
    } else {
        template =`
        ${ChargeCSS()}
        ${ChargeHTML()}
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