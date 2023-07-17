const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');

// Info
const titulo = document.getElementById('titulo-info');
const parrafo = document.getElementById('parrafo-info');

// Toggle lista idiomas
idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent.toLowerCase();
        establecerIdioma(idioma);
    });
})

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `banderas/${idioma}.svg`;
    switch (idioma) {
        case 'usa':
            titulo.textContent = 'CapiDeveloper';
            parrafo.textContent = 'Hello! I am a 23-year-old young person and I am currently studying Information Technology. I am passionate about the world of technology and I love sharing my knowledge with others. To achieve this, I have a YouTube channel where I upload videos every weekend.'
            break;
        case 'china':
            titulo.textContent = '資本開發者';
            parrafo.textContent = '你好！我是一名23岁的年轻人，目前正在学习信息技术。我对技术世界充满热情，喜欢与他人分享我的知识。为了实现这一目标，我有一个 YouTube 频道，每个周末都会上传视频。'
            break;
        case 'italia':
            titulo.textContent = 'CapiDeveloper';
            parrafo.textContent = 'Ciao! Sono un giovane di 23 anni e attualmente sto studiando Information Technology. Sono appassionato del mondo della tecnologia e amo condividere le mie conoscenze con gli altri. Per raggiungere questo obiettivo, ho un canale YouTube dove carico video ogni fine settimana.'
            break;
        case 'latino':
            titulo.textContent = 'CapiDeveloper';
            parrafo.textContent = '¡Hola! Soy una persona joven de 23 años y actualmente estoy cursando la carrera de Tecnologías de la Información. Soy apasionado por el mundo de la tecnología y me encanta compartir mis conocimientos con los demás. Para lograr esto, tengo un canal de YouTube donde subo videos cada fin de semana.'
            break;
    
        default:
            break;
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('usa')
            break;
        
        default:
            break;
    }
});