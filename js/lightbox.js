// lightbox galeria start
const imagenes  = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const icon_menu1 = document.querySelector('.icon-menu');
const swipercardperfil = document.querySelectorAll('#contenedor-swiper')
const tiempoLimitadoSection = document.querySelector('.tiempo-limitado-section');

imagenes.forEach(imagen =>{
   imagen.addEventListener('click', ()=>{
    aparecerImagen(imagen.getAttribute('src'));
    swipercardperfil.forEach(element => {
        element.style.opacity = '.6'
    });
   })
}

);
contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImage');
        icon_menu1.style.opacity = '1';
        swipercardperfil.forEach(element => {
            element.style.opacity = '1'
        });
        tiempoLimitadoSection.style.display = 'block';
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImage');
    icon_menu1.style.opacity = '0';
    tiempoLimitadoSection.style.display = 'none';
}
// lighbox galeria end
// 

function contarSlider(){
    let perfil = document.getElementsByClassName("slide-cards");
    let logro = document.getElementsByClassName("slide-logro");
    console.log(perfil);
    console.log("logros=",logro);
    for(let i=0 ; i<perfil.length;i++){
        let elementohtml = `<div class="numberslider"> <p> ${i+1}/${perfil.length} </p> </div>`;
        perfil[i].innerHTML += elementohtml;
    }
    for(let i=0 ; i<perfil.length;i++){
        let elementohtml = `<div class="numberslider"> <p> ${i+1}/${logro.length} </p> </div>`;
        logro[i].innerHTML += elementohtml;
    }
    
}
contarSlider();

// PROGRESS HORIZONTAL BAR END





// date to contact us
function agregarFechaEnFooter(idelemento) {
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    let año = fechaActual.getFullYear();
    
    // Formatear la fecha con ceros a la izquierda si es necesario
    let diaFormateado = dia < 10 ? '0' + dia : dia;
    let mesFormateado = mes < 10 ? '0' + mes : mes;
    
    let fechaFormateada = diaFormateado + '/' + mesFormateado + '/' + año;
    
    // Obtener el elemento HTML por su ID
    let elementoFecha = document.getElementById(idelemento);
    
    // Agregar la fecha al contenido del elemento
    elementoFecha.textContent = fechaFormateada;
  }
  
  // Llamar a la función para agregar la fecha al cargar la página
  agregarFechaEnFooter('fechaenfooter');
  agregarFechaEnFooter('fechaenpreguntas');
  