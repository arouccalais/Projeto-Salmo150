//efeito container//
const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});
//efeito container//



//form-2-etapas//
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}
//form-2-etapas//


//esqueceu senha//
function validarEmail(email) {
    // Expressão regular para verificar o formato do email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function esqueceuSenha() {
    let email = window.prompt('Informe seu Email:')

    if (email.length == 0) {
        window.alert('Email não informado!')
    }

    if (validarEmail(email)) {
        console.log("O email é válido.");
    } else {
        console.log("O email é inválido.");
    }
    
}

// verificarEmail();

//esqueceu senha//


