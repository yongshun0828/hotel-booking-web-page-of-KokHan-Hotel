function takevalue(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    
    document.write("your name is = " + name+"<br>");
    document.write("your phone num is = " + phone+"<br>");
    document.write("your email is =" + email+"<br>");
    document.write("your country is =" + country+"<br>");
    document.write("your message leaved is =" + message+"<br>");
}

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
        message: document.getElementById("message").value,
    };

 const serviceID = "service_sjsupom";
 const templateID = "template_gkaelfi";

 emailjs
 .send(serviceID, templateID, params)
 .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("country").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your Message Sent Successfully");
    })
 .catch((err) => console.log(err));
}