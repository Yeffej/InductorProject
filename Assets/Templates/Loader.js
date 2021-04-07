const Loader = () => {
    return (`
<div class="loader">
    <div class="loader_ballsWrapper">
        <div class="loader_ball loader_ball--red"></div>
        <div class="loader_ball loader_ball--pink"></div>
        <div class="loader_ball loader_ball--yellow"></div>
        <div class="loader_ball loader_ball--green"></div>
        <div class="loader_ball loader_ball--blue"></div>
    </div>
    <p class="loader_descrip">Cargando<span class="loader_descrip-points">....</span></p>
</div>
    `)
}

export default Loader;