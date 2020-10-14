var Profile = /** @class */ (function () {
    function Profile(name, image, description) {
        this.favorite = false;
        this.name = name;
        this.image = image;
        this.description = description;
    }
    return Profile;
}());
var person0 = new Profile("Anna", "img/person0.jpg", "placeholder");
var person1 = new Profile("Anita", "img/person1.jpg", "placeholder");
var person2 = new Profile("Anota", "img/person2.jpg", "placeholder");
var person3 = new Profile("Girl4", "img/person3.jpg", "placeholder");
var person4 = new Profile("Guy1", "img/person4.jpg", "placeholder");
var person5 = new Profile("Guywithroses", "img/person5.jpg", "placeholder");
var people = [person0, person1, person2, person3, person4, person5];
person0.favorite = true;
console.table(people);
$(document).ready(function () {
    for (var x in people) {
        $("#all").append("\n        <div class='p-5 col-lg-3' id=\"" + x + "\">\n        <div class=\"card p-2\">\n        <img class=\"card-img-top\" src=\"" + people[x].image + "\" alt=\"Card image cap\">\n        <div class=\"text-center card-body\">\n          <h5 class=\"card-title\">" + people[x].name + "</h5>\n          <p class=\"card-text\">" + people[x].description + "</p>\n          <a class=\"btn bg-light border-danger text-secondary btn-primary\">&hearts;</a>\n        </div>\n        </div>\n      </div>\n        ");
    }
    $(".btn").one('click', function () {
        var index = $(this).parent().parent().parent().attr('id');
        $("#fav").append("\n        <div class='text-white p-5 col-lg-3'>\n        <div class=\"bg-danger card p-2\">\n        <img class=\"card-img-top\" src=\"" + people[index].image + "\" alt=\"Card image cap\">\n        <div class=\"text-center card-body\">\n          <h5 class=\"card-title\">" + people[index].name + "</h5>\n          <p class=\"card-text\">" + people[index].description + "</p>\n        </div>\n        </div>\n      </div>\n        ");
    });
});
