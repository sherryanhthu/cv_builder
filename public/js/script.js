"use strict";
const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
const progress = document.getElementById("progress");
const progressSteps = document.querySelectorAll(".progress-step");

let currentStep = formSteps.findIndex((step) => {
    return step.classList.contains("active");
});

if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep();
}

multiStepForm.addEventListener("click", (e) => {
    let incrementor;
    if (e.target.matches("[data-next]")) {
        incrementor = 1;
    } else if (e.target.matches("[data-previous]")) {
        incrementor = -1;
    }

    if (incrementor == null) return;

    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every((input) => input.reportValidity());
    if (allValid) {
        currentStep += incrementor;
        showCurrentStep();
        updateProgressbar();
    }
});

formSteps.forEach((step) => {
    step.addEventListener("animationend", (e) => {
        formSteps[currentStep].classList.remove("hide");
        e.target.classList.toggle(
            "hide",
            !e.target.classList.contains("active")
        );
    });
});

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < currentStep + 1) {
            progressStep.classList.add("progress-step-active");
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
