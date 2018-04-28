var xhr;
var form = document.getElementById("form_Id");
var sendData = document.getElementById("sendData");
var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var email = document.getElementById("emailaddress");
var output = document.getElementById("output");    
    function post() {
        event.preventDefault();
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = responseMethod;
        xhr.open('POST', "http://www.talade.worcestercomputing.com/mailing.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        formData = "firstname =" + fname.value + "& lastname =" + lname.value + "& emailaddress =" + email.value;
        xhr.send(form);
    }
    function responseMethod() {
        if (xhr.readyState == 4) { 
        if (xhr.status == 200) { 
            output.innerHTML = xhr.responseText; 
        }
        else {
            console.log('There was a problem with the request.');
            }
        }
    }
 form_Id.addEventListener("submit", post);   