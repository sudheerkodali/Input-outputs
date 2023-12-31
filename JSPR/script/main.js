// console.log('hello sudheer');
// alert(" I am developer");
// document.write(' SAP hcm successFactors');


// string

// let name = "sudheer"
// console.log(name);

// let number = 6969
// console.log(number)

// let job = true
// console.log(job)

// let sudheer = true
// console.log(sudheer)

// let car = 'kia'
// console.log(car);

// let number1 = 50;
// let number2 = 40;

// let division = number1 + number2
// console.log(division);

// let expression = 17;
// console.log(expression);
// let a = 100
// let b = 200
// let c = a + b

// console.log(c)


// let age;
// getting user input
//easy way
//most of the cases we would not use it, short cut 
// age = window.prompt('enter your age');
// console.log(age);

let age;
document.getElementById("agegetter").onclick = function () {
    // alert("Button is clicked");
    age = document.getElementById('box').Value;
    console.log(age);


    if (age > 18) {
        document.write('you are adult');
    }

    else if (age <= 0) {
        document.write('your are child');
    }

    else {
        document.write('you are not born');
    }


}



// document.write('enter your name');
// document.write('your are adult');
// document.write('your are child');
// document.write('you are not born yet');


















