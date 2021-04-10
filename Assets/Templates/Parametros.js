import { UserName }  from "../App/ListenersAdder.js";

const parameters = () => {
    return (`
    <section class="Parameters"> 
        <h1 class="Parameters_title">Parametros que intervienen en el resultado de la inductancia.</h1>
        <p class="Parameters_intro">La inductancia es la capacidad de producir líneas magnéticas. La unidad estándar de inductancia es el Henry. La cantidad de flujo magnético desarrollado o la inductancia de diferentes tipos de inductores depende de cuatro parametros o factores los cuales son: </p>
        <ul class="Parameters_List">
            <li>Número de vueltas en una bobina</li>
            <li>Material del núcleo</li>
            <li>Area transversal de la bobina</li>
        </ul>

        <button class="Parameters_bye">Nos vemos</button>
        <button class="Parameters_NextBT nextBT">Escuchar el PodCast</button>

        <div class="modalContainer" id="ParametersModal-hi">
            <div class="Parameters_ModalGreeting">
                <h2>Repaso de lo Aprendido.</h2>
                <p>${UserName}, estas apunto de terminar esta ruta, pero antes repasa el siguiente concepto 🧠👍: </p>
                <p>Los inductores funcionan gracias a su forma de espirar lo cual aprovecha una mezcla de 3 leyes que relacionan las corrientes eléctricas con los campos magneticos. Estas son: Ley de Oersted, Ley de Faraday, Ley de Lenz</p>
                <button type="button" id="modalOkBT" class="Parameters_HiBT">Perfecto!</button>
            </div>
        </div>
        <div class="modalContainer" id="ParametersModal-bye">
            <div class="Parameters_ModalBye">
                <h2>Felicidades!</h2>
                <p><strong>Has completado</strong> la ruta prepara en esta app interactiva <strong>exitosamente</strong>, gracias por haberla seguido, y esperamos que sean de provecho los conocimientos adquiridos durante esta.</p>
                <p>Varias informaciones encontradas en esta app fueron basadas o tomadas de las siguietes paginas web: </p>
                <a href="https://electronicaonline.net/">electronicaonline.net</a>
                <a href="https://www.mecatronicalatam.com/">mecatronicalatam.com</a>
                <button type="button" id="modalByeBT" class="Parameters_ByeBT">Finalizar</button>
            </div>
        </div>

    </section>
    `)
}

export default parameters;