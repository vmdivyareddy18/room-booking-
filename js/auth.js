function register() {

    let u = document.getElementById("newuser").value;
    let p = document.getElementById("newpass").value;

    localStorage.setItem(u, p);

    alert("Registered Successfully ✅");

    location.href = "login.html";
}

function login() {

    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    let saved = localStorage.getItem(u);

    if (saved === p) {

        alert("Login Success ✅");

        location.href = "admin.html";

    } else {

        alert("Invalid Login ❌");
    }
}
