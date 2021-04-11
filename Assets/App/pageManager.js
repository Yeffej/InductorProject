class pageManager {
    ToggleModal(type) {
        if(type === "home") {
            const modalContainer = document.querySelector("#modalContainer");
            const modal = document.querySelector("#Home_modal");

            modal.addEventListener("animationend", (e)=>{
                if(e.animationName == "ModalOut")
                    modalContainer.classList.remove("show");
            })

            if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
                modalContainer.classList.add("show")
                modal.style.animationName = "ModalIn"
            }else {
                modal.style.animationName = "ModalOut"
            }
        }else if(type === "parameters") {
            const modalContainer = document.querySelector("#ParametersModal-hi");
            const modal = document.querySelector(".Parameters_ModalGreeting");

            modal.addEventListener("animationend", (e)=>{
                if(e.animationName == "ModalOut")
                    modalContainer.classList.remove("show");
            })

            if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
                modalContainer.classList.add("show")
                modal.style.animationName = "ModalIn"
            }else {
                modal.style.animationName = "ModalOut"
            }

        }else {
            console.error("El tipo de modal no existe dentro de esta App")
            return;
        }

    }
    ShowHomeIMG() {
        const HomeImg = document.querySelector("#HomeIMG");
        HomeImg.style.animationName = "FadeIn";
    }
    ToggleFinalModal() {
        const modalContainer = document.querySelector("#ParametersModal-bye");
        const modal = document.querySelector(".Parameters_ModalBye");

        modal.addEventListener("animationend", (e)=>{
            if(e.animationName == "ModalOut")
                modalContainer.classList.remove("show");
        })

        if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
            modalContainer.classList.add("show")
            modal.style.animationName = "ModalIn"
        }else {
            modal.style.animationName = "ModalOut"
        }
    }

}

export default pageManager;