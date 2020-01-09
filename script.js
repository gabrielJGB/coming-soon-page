

function validation(){
    const $error = document.querySelector('.error');
    const $myForm = document.querySelector('.form');
    const $input = document.querySelector('.input');
    const email = $myForm.myText.value;

    if(email === ''){
        $error.textContent = 'This field can not be empty';
        $input.style.border = 'solid 1px red';
    }
    else if(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}/i.test(email)){
        $error.textContent = 'Please provide a valid email address';
        $input.style.border = 'solid 1px red';
    }
    else{
        $error.textContent ='';
        $input.style.border = 'solid 1px rgba(128, 128, 128, 0.548)';
        alert('The email was sent');
        $input.value = '';
    }
    return false;
}

