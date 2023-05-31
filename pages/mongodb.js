const createacctbtn = document.getElementById("create-acct-btn");
const formRegister = document.getElementById("formRegister");


formRegister.addEventListener("submit", (event) => {
    event.preventDefault();


    let nameInput = document.getElementById("name-signup").value;
    let emailInput = document.getElementById("email-signup").value;
    let passwordInput = document.getElementById("password-signup").value;
    let confirmPasswordInput = document.getElementById("confirm-password-signup").value;


    if (nameInput == "") {
        return window.alert("O nome é obrigatório")
    }

    if (emailInput == "") {
        return window.alert("O email é obrigatório")
    }

    // if (passwordInput != confirmPasswordInput) {
    //   return window.alert("As senhas não batem")
    // }

    const ponto = {
        data: '00-00-0000',
        entrada: '00:00',
        saida: '00:00'
    }

    const ferias = {
        inicio: '00-00-0000',
        fim: '00-00-0000',
        status: false,
        dias: 0
    }



    const data = {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
        confirmpassword: confirmPasswordInput,
        ponto: ponto,
        ferias: ferias
    };


    fetch('https://api-yourdp.onrender.com/auth/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.ok) {
                alert('Form data successfully')
                formRegister.reset();

            }
            if (data.msg) {
                alert(data.msg);
            }

        })
        .catch((err) => {
            console.log(err)
        })

})