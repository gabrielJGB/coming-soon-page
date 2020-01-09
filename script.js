

function validation(){
    const $error = document.querySelector('.error');
    const $myForm = document.querySelector('.form');
    const $input = document.querySelector('.input');
    const email = $myForm.myText.value;
    $error.style.color = 'rgb(209, 43, 43)';
    if(email === ''){
        $error.textContent = 'Whoops! It looks like you forgot to add your email';
        $input.style.border = 'solid 1px red';
    }
    else if(!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2}/i.test(email)){
        $error.textContent = 'Please provide a valid email address';
        $input.style.border = 'solid 1px red';
    }
    else{
        $error.textContent ='';
        $input.style.border = 'solid 1px rgba(128, 128, 128, 0.548)';
        $error.style.color = 'rgb(46, 204, 113)';
        $error.textContent ='The email was sent';$input.value = '';
        setTimeout(function(){
            $error.textContent ='';
        },4000);
        
        
    }
    return false;
}

