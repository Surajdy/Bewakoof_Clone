var mail = document.querySelector('#mail');
var pass = document.querySelector('#pass').value;
var uname = document.querySelector('#uname').value;

var form = document.querySelector('form');
form.addEventListener("submit",function(){
    event.preventDefault()
    
    if(mail.value=="" || pass.value==""){
        document.querySelector('#error_mail').innerHTML="";
        var er = document.createElement('p');
        er.innerText="Enter valid Email"
      
        mail.style.borderColor="red"
        document.querySelector('#error_mail').append(er); 
    }
    else{
        alert("Login Successfull")
        window.location.href="login.html"
        var obj={
            email:form.mail.value,
            username:form.uname.value,
        }
        localStorage.setItem("user",JSON.stringify(obj))
        window.location.href="../../index.html"
    }
})