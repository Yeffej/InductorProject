import { UserName }  from "../App/ListenersAdder.js";


const Laws = () => {
    return (`
    <section class="Laws">
        <h1 class="Laws_title">Leyes que conforman y explican el funcionamiento de un Inductor.</h1>
        <h3 class="Laws_greeting"> ¡Hola ${UserName}!, En este modulo te estaremos hablando de los siguientes temas: <a id="Laws_ShowWriter">ver</a></h3>
        <div class="Laws_intro" >
            <p class="Laws_intro_descrip" id="LawsIntroOpacity">Los inductores funcionan gracias a su forma de espirar lo cual aprovecha una mezcla de 3 reglas o leyes que relacionan las corrientes eléctricas con los campos magneticos. Estas son:</p>
            <ol id="LawsWritterMachine">
                <li class="LawsWritter_son">Ley de Oersted</li>
                <li class="LawsWritter_son">Ley de Faraday</li>
                <li class="LawsWritter_son">Ley de Lenz</li>
            </ol>
        </div>

        <div class="Laws_content">
            <article>
                <h2>Ley de Oersted</h2>
                <figure>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Electromagnetism.png" alt="Imagen ley de Oersted">
                </figure>
                <p>Nos dice que las corrientes electricas, es decir el flujo de electrones al pasar por un conductor generan campos magnéticos</p>
                <p>Orsted descubrió que, para un cable recto que lleva una corriente continua constante: Las líneas del campo magnético rodean el cable portador de corriente. Las líneas del campo magnético se encuentran en un plano perpendicular al cable. Si se invierte la dirección de la corriente, se invierte la dirección del campo magnético. La fuerza del campo es directamente proporcional a la magnitud de la corriente. La fuerza del campo en cualquier punto es inversamente proporcional a la distancia entre el punto y el cable. Ley de Oersted</p>
            </article>
            <article>
                <h2>Ley de Faraday</h2>
                <figure>
                    <img src="https://lh3.googleusercontent.com/proxy/Fvs7Sa0A522_HCc62DmCOFMgIJxOd4P_3496goOONdlqoNBbtEtnq0wMNZF8NGZe5MYloSA0N_n78zK9CdI-Wl2qu75SfMAJXJxhWqAZfZ-wN_XEUAnVuyGqNMnv" alt="Imagen ley de Faraday">
                </figure>
                <p>La ley de inducción electromagnética de Faraday (o simplemente ley de Faraday) establece que la tensión inducida en un circuito cerrado es directamente proporcional a la rapidez con que cambia en el tiempo el flujo magnético que atraviesa una superficie cualquiera con el circuito como borde. Esto quiere decir en terminos simples que: la variación de un campo magnético puede inducir un voltaje</p>
            </article>
            <article>
                <h2>Ley de Lenz</h2>
                <figure>
                    <img src="https://sites.google.com/site/fisicacbtis162/_/rsrc/1468881504153/services/3-2-7-ley-de-lenz/Lenz.gif" alt="Imagen ley de Lenz">
                </figure>
                <p>Esta ley relaciona cambios producidos en el campo eléctrico por un conductor con la propiedad de variar el flujo magnético, y afirma que las tensiones o voltajes aplicadas a un conductor generan una fuerza electro motriz (fem) cuyo campo magnético se opone a toda variación de la corriente original que lo produjo. Esto quiere decir en palabras simples que: <strong>cuando generemos una corriente eléctrica mediante un campo magnético, como lo que hace un generador, la dirección de la corriente inducida es contraria al campo que la genara lo que genera un campo magnético que se opone al campo magnético que genera la corriente.</strong></p>
            </article>
        </div>
        <button class="Laws_NextBT">Continuar Con Conceptos</button>

    </section>
    
    `)
}

export default Laws;