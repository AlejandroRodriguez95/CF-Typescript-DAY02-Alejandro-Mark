$(function () {
    console.log("Hello World!");
    var Profile = /** @class */ (function () {
        function Profile(name, image, description) {
            this.favorite = false;
            this.name = name;
            this.image = image;
            this.description = description;
        }
        return Profile;
    }());
    var person0 = new Profile("Anna", "../img/person0", "placeholder");
    person0.favorite = true;
    console.table(person0);
});
