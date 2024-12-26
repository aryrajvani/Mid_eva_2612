document.getElementById('loginForm').addEventListener('submit',function(e) 
{
    e.preventDefault();
    const email=
    document.getElementById('email').value;
    const password=
    document.getElementById('password').value;
    if(email==='example@gmail.com'&& password==='example@123') 
        {
        alert('Login Success,You are directed to Quiz');
        window.location.href='quiz.html';
    } else{
        document.getElementById('errorMessage').innerHTML='invalid creds';
    }
    }

);