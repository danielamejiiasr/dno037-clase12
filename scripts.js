const datos = [
    {
        picsum: "https://picsum.photos/id/1003/900/600",
        title: "Un ciervo (creo)",
        text: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
        picsum: "https://picsum.photos/id/1012/900/600",
        title: "Updated For Bootstrap 5",
        text: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
        picsum: "https://picsum.photos/id/1025/900/600",
        title: "Este es un perrito abrigado",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
    {
        picsum: "https://picsum.photos/id/106/900/600",
        title: "esta es la cuarta",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
    {
        picsum: "https://picsum.photos/id/56/900/600",
        title: "esta es la quinta",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    }
];


datos.forEach((d,i) => {
    if (i % 2 == 0) {
      // par
      document.getElementById('trabajos').innerHTML += '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url('+ d.picsum +');"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>'+d.title+'</h2><p class="lead mb-0">'+d.text+'</p></div></div>'
    } else {
      // impar
      document.querySelector('#trabajos').innerHTML += '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url('+ d.picsum +');"></div><div class="col-md-6 my-auto showcase-text"><h2>'+ d.title +'</h2><p class="lead mb-0">'+d.text+'</p></div></div>'
    }
});

//
async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=4");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);

resultados.forEach((p) => {
  document.getElementById("personas").innerHTML += '<div class="col-6 col-lg-3"><div class="testimonial-item mx-auto mb-5 mb-lg-0"><img class="img-fluid rounded-circle mb-3" src="'+ p.picture.large +'" alt="..." /><h5>'+ p.name.first +' '+ p.name.last +'</h5><p class="font-weight-light mb-0">'+ p.location.city +', '+ p.location.country +' <br><i class="bi bi-envelope-heart fs-3"></i></p></div></div>'

});

}
users().catch((error) => console.error(error));



/*


*/
