const passbox = document.getElementById("password");
const length=12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "!@#$%^&*/<>?";
const allChars = upperCase+lowerCase+number+symbol;



function createPass(){
    let password="";
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
    password += number[Math.floor(Math.random()* number.length)];
    password += symbol[Math.floor(Math.random()* symbol.length)];

    while(length > password.length){
        password+= allChars[Math.floor(Math.random()*allChars.length)];
    }

    passbox.value = password;
}


function copy(){
    passbox.select();
    document.execCommand("copy");
}