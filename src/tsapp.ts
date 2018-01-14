window.onload = () => {

    class Welcome {
        greet(person : Person) {
            return "Welcome " + person.sayHi();
        }
    }

    enum Sex {
        Male = "Male",
        Female = "Female"
    }

    interface Person {
        Name : string,
        Age : number,
        Sex : Sex,
        sayHi : Function
    }

    var welcome = new Welcome();
    document
        .getElementById("app")
        .innerHTML += welcome.greet({
        Name: "Simon",
        Age: 21,
        Sex: Sex.Male,
        sayHi: function () :string {
            return this.Name + " who is " + this.Age + " and is a " + this.Sex;
        }
    });

}