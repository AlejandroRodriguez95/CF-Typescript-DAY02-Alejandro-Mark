$(() => {
    console.log("Hello World!");

    class Profile {
        name:string;
        image:string;
        description:string;
        favorite:boolean = false;
        constructor(name:string, image:string, description:string) {
            this.name = name;
            this.image = image;
            this.description = description;           
        }
    }
    
    var person0 = new Profile("Anna", "../img/person0","placeholder");
    person0.favorite = true;
    console.table(person0);

});