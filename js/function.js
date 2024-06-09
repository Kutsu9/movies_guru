console.log("test1");
const form = document.getElementById("myForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    checkInput();
});

function checkInput(){
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue ===''){
        setErrorFor(email,'Este campo no puede estar vacio');
        console.log("test2");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email inválido');
    }else{
        setSuccesFor(email);
    }

    if(passwordValue===''){
        console.log("test4");
        setErrorFor(password,'Este campo no puede estar vacio');
    }else if(!isPassword(passwordValue)){
        console.log("test3");
        setErrorFor(password,'contraseña inválida')
    }else{
        setSuccesFor(password);
        irAlInicio();
    }

    
}
function setErrorFor(input){
    const searchForm = input.parentElement;
    searchForm.className = "search-form.error"

}

function setSuccesFor(input){
    const searchForm = input.parentElement;
    searchForm.className ="search-form.success"
}

function isEmail(){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

}
function isPassword(password){
    return  /^(?=.*\S)[\s\S]*$/.test(password);
}
function irAlInicio(){
    window.location.href="./index.html";
}
