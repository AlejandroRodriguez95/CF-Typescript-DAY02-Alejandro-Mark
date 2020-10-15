var people = [];
var initializated = false;
class Profile {
    name: string;
    image: string;
    description: string;
    favorite: boolean = false;
    constructor(name: string, image: string, description: string) {
        this.name = name;
        this.image = image;
        this.description = description;
        people.push(this);

    }
    render(){
      return  `
      <div class="card p-2">
      <img class="card-img-top" src="${this.image}" alt="Card image cap">
      <div class="text-center card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">${this.description}</p>
        <a class="btn btn-append bg-light border-danger text-secondary btn-primary">&hearts;</a>
      </div>
      </div>
      `
    }
    renderFav(){
      return `        
      <div class="bg-danger card p-2">
      <img class="card-img-top" src="${this.image}" alt="Card image cap">
      <div class="text-center card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">${this.description}</p>
        <a class="btn btn-remove bg-dark border-dark text-secondary btn-primary"> &#10006;</a>
      </div>
      </div>`
    }
}

new Profile("Anna", "img/person0.jpg", "placeholder");
new Profile("Anita", "img/person1.jpg", "placeholder");
new Profile("Anota", "img/person2.jpg", "placeholder");
new Profile("Girl4", "img/person3.jpg", "placeholder");
new Profile("Guy1", "img/person4.jpg", "placeholder");
new Profile("Guywithroses", "img/person5.jpg", "placeholder");

$(document).ready(function () {



    for (let x in people) {
      let data = people[x].render();
        $("#all").append(`
        <div class='p-5 col-lg-3' id="${x}">
        ${data}
      </div>
      `);

        $("#swiper").append(`
        <div class='p-5 col-lg-12 swiper-slide' id="${x}">
        ${data}
      </div>
        `)
    }

    $(`.btn-append`).on('click', function () {
        let index = $(this).parent().parent().parent().attr('id');
        if(people[index].favorite == false)
        {
          people[index].favorite = true;
          let data = people[index].renderFav();
          $("#fav").append(`
          <div class='text-white p-5 col-lg-3 wow bounceInDown' id="fav${index}" number="${index}">
            ${data}
        </div>
          `);
          $("#swiper-fav").append(`
          <div class='text-white p-5 col-12 wow bounceInDown swiper-slide' id="fav${index}" number="${index}">
            ${data}
        </div>
          `);
            console.log(initializated);
            var mySwiper = new Swiper('.swiper-container', {
              // Optional parameters
              direction: 'horizontal',
              loop: true,
              observer: true,
            
              // If we need pagination
              pagination: {
                el: '.swiper-pagination',
              },
            
              // Navigation arrows
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            
              // And if we need scrollbar
              scrollbar: {
                el: '.swiper-scrollbar',
              },
            })
      }
        console.table(people);
    });

    $(`#fav`).on('click', '.btn-remove', function () {
      let index = $(this).parent().parent().parent().attr('number');
      var item = $(this).parent().parent().parent();
      item.animate({
        opacity: 0.0
    }, 500, function() {
        $(item).remove();
        people[index].favorite = false;
      });
   });
   $(`#swiper-fav`).on('click', '.btn-remove', function () {
    let index = $(this).parent().parent().parent().attr('number');
    var item = $(this).parent().parent().parent();
    item.animate({
      opacity: 0.0
  }, 500, function() {
      $(item).remove();
      people[index].favorite = false;
    });
 });
   var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

});
