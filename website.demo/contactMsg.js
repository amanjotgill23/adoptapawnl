function myFunction(){
    var fullName = document.getElementById("fName").value;
    var emailAddress = document.getElementById("emailAdd").value;
    var message = document.getElementById("message").value;
    if (fullName != "") {
        if (emailAddress != "") {
            if (message != "") {
                alert("Thank you " + fullName + ". We'll get back to you soon!");
            }
        }
    }
}