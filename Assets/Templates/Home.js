const Home = () => {
    return (`
    <section class="Home">
    <h1 class="Home_title"><strong>Inductores</strong> con estímulo, fenómenos presentes en
        la <strong>carga y descarga</strong> de un inductor.</h1>
    <p class="Home_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti esse possimus dignissimos facere praesentium mollitia error! Provident expedita autem excepturi a reiciendis ipsa illum, quibusdam obcaecati deleniti corrupti quasi? Natus.</p>
    <button class="Home_startBT" id="Home_startBT">Comenzar</button>
    <img class="Home_img" id="HomeIMG" src="https://admin.electrotec.pe/elements/images/image-article-6fdb7a9978a123655eadf54e035fb750.png" >

    <div class="modalContainer" id="modalContainer">
        <div class="Home_modal" id="Home_modal">
            <h2>Titulo Modal</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti saepe numquam illo! Ipsa nam, dignissimos unde consectetur vero, accusantium aspernatur fugit assumenda tempora maiores minima sit magnam sunt officia asperiores!</p>
            <input type="text" id="NameGetter" placeholder="Ingresa tu nombre">
            <div> 
                <button class="Home_modal_RightBT">Continuar</button>
                <button id="modalCancel" class="Home_modal_WrongBT">Cancelar</button>
            </div>
        </div>
    </div>
</section>
    `)
}

export default Home;