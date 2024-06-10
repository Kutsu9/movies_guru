console.log("test2");
const formRegistro = document.getElementById("myRegistro");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordCheck = document.getElementById("passwordCheck");

formRegistro.addEventListener('submit', (event)=>{
    event.preventDefault();

    checkInput();
});

function checkInput(){
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordCheckValue = passwordCheck.value.trim();

        //valido el usuario que no este vacio
    if(usuarioValue===''){
        setErrorFor(usuario,'Este campo no puede estar vacio');
    }else{
        setSuccesFor(usuario);
    }

    //valido el email
    if(emailValue ===''){
        setErrorFor(email,'Este campo no puede estar vacio');
        console.log("test2");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email inválido');
    }else{
        setSuccesFor(email);
    }
    //valido la contraseña
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

    if(passwordCheckValue===''){
        setErrorFor(passwordCheck,'Este campo no puede estar vacio');
    }else if(passwordCheckValue!==(passwordValue)){
        setErrorFor(passwordCheck,'Las contraseñas deben coincidir');
    }else{
        setSuccesFor(passwordCheck);
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
