const Podcast = () => {
    return (`
    <section class="Podcast">
        <h1>Podcast</h1>
        <iframe class="audioPodcast" id="AudioPodcast" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1024898131%3Fsecret_token%3Ds-r6CwTUBPn58&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        <p>Este Podcast Fue realizado por <strong>Yefri Encarnación</strong> y
            <strong>Luis Santos</strong></p>
        <p>Para Mayor Disfrute se recomienda el uso de audifonos o auriculares</p>
    </section>
    `)
}

export default Podcast;