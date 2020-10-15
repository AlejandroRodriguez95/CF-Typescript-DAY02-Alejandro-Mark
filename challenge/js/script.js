var people = [];
var initializated = false;
var Profile = /** @class */ (function () {
    function Profile(name, image, description) {
        this.favorite = false;
        this.name = name;
        this.image = image;
        this.description = description;
        people.push(this);
    }
    Profile.prototype.render = function () {
        return "\n      <div class=\"card p-2\">\n      <img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n      <div class=\"text-center card-body\">\n        <h5 class=\"card-title\">" + this.name + "</h5>\n        <p class=\"card-text\">" + this.description + "</p>\n        <a class=\"btn btn-append bg-light border-danger text-secondary btn-primary\">&hearts;</a>\n      </div>\n      </div>\n      ";
    };
    Profile.prototype.renderFav = function () {
        return "        \n      <div class=\"bg-danger card p-2\">\n      <img class=\"card-img-top\" src=\"" + this.image + "\" alt=\"Card image cap\">\n      <div class=\"text-center card-body\">\n        <h5 class=\"card-title\">" + this.name + "</h5>\n        <p class=\"card-text\">" + this.description + "</p>\n        <a class=\"btn btn-remove bg-dark border-dark text-secondary btn-primary\"> &#10006;</a>\n      </div>\n      </div>";
    };
    return Profile;
}());
new Profile("Anna", "img/person0.jpg", "placeholder");
new Profile("Anita", "img/person1.jpg", "placeholder");
new Profile("Anota", "img/person2.jpg", "placeholder");
new Profile("Girl4", "img/person3.jpg", "placeholder");
new Profile("Guy1", "img/person4.jpg", "placeholder");
new Profile("Guywithroses", "img/person5.jpg", "placeholder");
$(document).ready(function () {
    for (var x in people) {
        var data = people[x].render();
        $("#all").append("\n        <div class='p-5 col-lg-3' id=\"" + x + "\">\n        " + data + "\n      </div>\n      ");
        $("#swiper").append("\n        <div class='p-5 col-lg-12 swiper-slide' id=\"" + x + "\">\n        " + data + "\n      </div>\n        ");
    }
    $(".btn-append").on('click', function () {
        var index = $(this).parent().parent().parent().attr('id');
        if (people[index].favorite == false) {
            people[index].favorite = true;
            var data = people[index].renderFav();
            $("#fav").append("\n          <div class='text-white p-5 col-lg-3 wow bounceInDown' id=\"fav" + index + "\" number=\"" + index + "\">\n            " + data + "\n        </div>\n          ");
            $("#swiper-fav").append("\n          <div class='text-white p-5 col-12 wow bounceInDown swiper-slide' id=\"fav" + index + "\" number=\"" + index + "\">\n            " + data + "\n        </div>\n          ");
            console.log(initializated);
            var mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                observer: true,
                // If we need pagination
                pagination: {
                    el: '.swiper-pagination'
                },
                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                // And if we need scrollbar
                scrollbar: {
                    el: '.swiper-scrollbar'
                }
            });
        }
        console.table(people);
    });
    $("#fav").on('click', '.btn-remove', function () {
        var index = $(this).parent().parent().parent().attr('number');
        var item = $(this).parent().parent().parent();
        item.animate({
            opacity: 0.0
        }, 500, function () {
            $(item).remove();
            people[index].favorite = false;
        });
    });
    $("#swiper-fav").on('click', '.btn-remove', function () {
        var index = $(this).parent().parent().parent().attr('number');
        var item = $(this).parent().parent().parent();
        item.animate({
            opacity: 0.0
        }, 500, function () {
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
            el: '.swiper-pagination'
        },
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar'
        }
    });
});
