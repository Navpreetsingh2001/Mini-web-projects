const form = document.getElementById('form');
const password1 =document.getElementById("password1");
const password2 =document.getElementById("password2");
const messageContainer =document.querySelector(".message-container");
const message =document.getElementById("message");


let isValid =false;
let passwordMatch =false;

function validateForm(){
    isValid =form.checkValidity();
    
    if(!isValid){
        message.textContent ="Fill all the details.";
        message.style.color ='red';
        messageContainer.style.borderColor='red';
        messageContainer.style.borderWidth ='2px';
        messageContainer.style.borderRadius ='5px';
        
    }
    // check if password match 
    if(password1.value === password2.value){
        passwordMatch = true;
        password1.style.color ='green';
        password1.style.borderColor='green'
        password1.style.borderWidth ='2px';

        password2.style.color ='green';
        password2.style.borderColor='green'
        password2.style.borderWidth ='2px';
        
    }
    else{
        passwordMatch=false;

        message.textContent ="Make sure password is correct.";
        message.style.borderColor = 'red';
        message.style.color ='red';
        messageContainer.style.borderWidth ='2px';

        password1.style.color ='red';
        password1.style.borderColor='red'
        password1.style.borderWidth ='2px';

        password2.style.color ='red';
        password2.style.borderColor='red'
        password2.style.borderWidth ='2px';
        
    }
    if(isValid && passwordMatch=== true){
        messageContainer.style.borderColor = 'green';
        message.style.color ='green';
        message.textContent = 'Successfully Registered! ';
        message.style.borderWidth ='2px';
    }
    
}
function storeData(){
    const user ={
        name : form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        url: form.url.value,
        password: form.password.value
    };
    console.log(user);
}
function processData(e){
    
    e.preventDefault();
    validateForm();
    //submit data if valid
    if(isValid && passwordMatch){

        storeData();
    }
}


form.addEventListener('submit',processData);
