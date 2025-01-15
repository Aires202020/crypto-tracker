const form = document.querySelector("form");
const name = document.querySelector("form input[name=name]");
const email = document.querySelector("form input[name=email]");
const password = document.querySelector("form input[name=password]");
const userList = document.querySelector(".userList");
const users = [];

function signUp() {
    const nameValue = name.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if (nameValue !== "" && emailValue !== "" && passwordValue !== "") {
        const user = {
            nameValue,
            emailValue,
            passwordValue,
        };
        window.location.assign("api.html")
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users));
    } else {
        alert("All are required to be filled")
    }
}

form.addEventListener("click", (event) => {
   event.preventDefault();
 signUp()
});

