
console.log ("test");
document.addEventListener('DOMContentLoaded', () =>{
   const form = document.getElementById('myForm');

   form.addEventListener('submit', (event)=>{
    if(!validateForm()){
        console.log("El formulario no es valido ");
        event.preventDefault();

    }else{
        console.log("Enviando datos");
    }

   });

   //funcion de validacion de formulario
   const validateForm= () =>{
    let isValid = true;

            isValid = validateEmail('email', 'El correo no es válido') && isValid; 
            isValid = validatePassword('password', 'La contraseña es obligatoria') && isValid;
            if (isValid) {
                setSuccessFor(document.getElementById('email'));
                setSuccessFor(document.getElementById('password'));
            }    

    return isValid;
   };


   const validateEmail = (emailId, errorMensaje) =>{
    const field= document.getElementById(emailId);
    const email = field.value.trim();

    if(email ===''){
        setErrorFor(field, 'El correo electronico es obligatorio');
        return false;
    }else if(!isEmail(email)){
        setErrorFor(field, errorMensaje);
        return false;
    }else{
        setErrorFor(field);
        return true;
    }

   };

   const isEmail = (email) =>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
   };

   const validatePassword = (passwordId, errorMensaje) =>{
    const fieldP = document.getElementById(passwordId);
    const password = fieldP.value.trim();

    if(password === ''){
        setErrorFor(fieldP, errorMensaje);
        return false;
    }else if(!isPassword(password)){
        setErrorFor(fieldP, errorMensaje);
        return false;
    }else{
        setErrorFor(fieldP);
        return true;
    }
   };

    // Función para mostrar un mensaje de error
    const setErrorFor = (input, message) => {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        if (message) {
            small.innerText = message;
        }
    };

    // Función para mostrar un mensaje de éxito
    const setSuccessFor = (input) => {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    };

   const isPassword= (password)=>{
    const regex = /^[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);

   };

    
})
