function sendMessage() {

    let name =
        document.getElementById("name").value;

    let email =
        document.getElementById("email").value;

    let message =
        document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("result").innerHTML =
        "Thank you " + name + "! We received your message.";

}