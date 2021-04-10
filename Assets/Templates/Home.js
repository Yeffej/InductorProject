const Home = () => {
    return (`
    <section class="Home">
    <h1 class="Home_title"><strong>Inductores</strong> con estímulo, fenómenos presentes en
        la <strong>carga y descarga</strong> de un inductor.</h1>
    <p class="Home_description">Bienvenido a esta aplicación interactiva donde estaremos explicando sobre los inductores, como funcionan estos, las leyes en la que se basa su funcionamiento, el estimulo de estos en corriente directa y todo esto durante trayecto de la App. Así que no esperes mas y comienza ahora mismo dando click en el botón que se encuentra debajo.</p>
    <button class="Home_startBT" id="Home_startBT">Comenzar</button>
    <img class="Home_img" id="HomeIMG" src="https://admin.electrotec.pe/elements/images/image-article-6fdb7a9978a123655eadf54e035fb750.png">

    <div class="modalContainer" id="modalContainer">
        <div class="Home_modal" id="Home_modal">
            <h2>Inductores Eléctricos</h2>
            <p>¡Perfecto!, has dado el primer paso para aprender sobre este componente eléctrico llamado <strong>inductor</strong> el cual muy usado en la actualidad, pero antes de: dejanos tu nombre debajo por favor, y presiona continuar para seguir en este trayecto 😉</p>
            <form action="" id="HomeModalform">
                <input type="text" id="NameGetter" placeholder="Ingresa tu nombre">
            </form>
            <div> 
                <button type="button" id="modalContinue" class="Home_modal_RightBT">Continuar</button>
                <button type="button" id="modalCancel" class="Home_modal_WrongBT">Cancelar</button>
            </div>
        </div>
    </div>
</section>
    `)
}

export default Home;