var sendData = document.getElementById("sendData");
var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var email = document.getElementById("emailaddress");
var form;
var xhr;
    
    function sendData() {
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
                    console.log("2");

            console.log(xhr.responseText); 
        }
        else {
            console.log('There was a problem with the request.');
            }
        }
    }
 sendData.addEventListener("submit", sendData);   