class pageManager {
    ToggleModal(type) {
        if(type === "home") {
            const modalContainer = document.querySelector("#modalContainer");
            const modal = document.querySelector("#Home_modal");
            if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
                modalContainer.classList.add("show")
                modal.style.animationName = "ModalIn"
            }else {
                modal.style.animationName = "ModalOut"
            }
        }else if(type === "parameters") {
            const modalContainer = document.querySelector("#ParametersModal-hi");
            const modal = document.querySelector(".Parameters_ModalGreeting");
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
    showFinalModal() {
        const modalContainer = document.querySelector("#ParametersModal-hi");
        const modal = document.querySelector(".Parameters_ModalGreetingl");
        if (modal.style.animationName === "ModalOut" || modal.style.animationName === "") {
            modalContainer.classList.add("show")
            modal.style.animationName = "ModalIn"
        }else {
            modal.style.animationName = "ModalOut"
        }
    }

}

export default pageManager;