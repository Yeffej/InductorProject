import { UserName }  from "../App/ListenersAdder.js";

const Concepts = () => {
    return (`
    <section class="Concepts">
        <h1 class="Concepts_title">Concepto de inductor y funcionamiento</h1>
        <div class="Concepts_content">
            <p class="Concepts_greeting"><strong>Excelente ${UserName}</strong>, ya sabes las leyes bases que conforman el funcionamiento de un inductor,  pero...</p>
            <article class="Concepts_art">
                <button class="Concepts_art_showBT">+</button>
                <h2>¿Qué es un inductor?</h2>
                <div class="Concepts_art_Info">
                    <img src="https://i1.wp.com/www.luzplantas.com/wp-content/uploads/2017/12/inductor.jpg?fit=342%2C295&ssl=1" alt="imagen de un inductor">
                    <p>Como su nombre indica es un componente eléctrico que produce inducción. Concretamente, induce un campo magnético cuando es atravesado por una corriente. <strong>Un campo magnético generado en un conductor recto no es muy relevante, sin embargo al generarse en un conductor en forma de espira, el campo magnetico resultante es la sumatoria del campo magnetico de todas las vueltas.</strong>.</p>
                    <p> Un inductor se elabora enrollando alambre conductor en círculos, dando varias vueltas, de modo de formar un helicoide. Para evitar que el alambre enrollado entre en cortocircuito al hacer contacto consigo mismo al enrollarse, se emplea alambre esmaltado en la confección del inductor. Cada vuelta que el alambre efectúa se llama espira.</p>
                </div>
            </article>
            <article class="Concepts_art">
                <button class="Concepts_art_showBT">+</button>
                <h2>¿Cual es su funcionamiento o uso en circuitos eléctricos?</h2>
                <div class="Concepts_art_Info">
                    <img src="https://thumbs.gfycat.com/SpectacularLivelyGhostshrimp-small.gif" alt="imagen_gif funcionamiento_inductor">
                    <p>Cuando circula una corriente por las espiras, se induce un campo magnético que atraviesa el cilindro (si lo posee) en su longitud, y también en el exterior de la bobina. Esto se conoce como <strong>ley de Faraday</strong>. La capacidad inductiva de una bobina se puede medir a través de un parámetro propio de la misma llamado autoinductancia, o sencillamente inductancia. Como este campo magnético no aparece instantaneamente sino que va creciendo gradualmente tendremos una variación del campo magnético,  lo que según <strong>la ley de Faraday</strong> va a inducir un voltaje, pero este voltaje según la <strong>ley de lenz</strong> se va a oponer a la corriente electrica que lo generó.</p>
                </div>
            </article>
            <article class="Concepts_art">
                <button class="Concepts_art_showBT">+</button>
                <h2>¿Como se comportan los inductores con estimulo CD (corriente directa)?</h2>
                <p class="Concepts_art_Info">Los inductores estimulados con corriente directa se comportan como si fueran un corto-circuito una vez el campo magnetico generado por el paso de la corriente alcance su máximo crecimiento.</p>
            </article>
            <button class="Concepts_NextBT nextBT">Continuar Con Parametros</button>
        </div>
    </section>
    `)
}

export default Concepts;