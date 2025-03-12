document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentsInput = document.getElementById("comments");
    const errorMessage = document.getElementById("error-message");
    const infoMessage = document.getElementById("info-message");
    const form = document.querySelector("form");
    const hiddenErrorField = document.createElement("input");

    hiddenErrorField.type = "hidden";
    hiddenErrorField.name = "form-errors";
    form.appendChild(hiddenErrorField);

    const namePattern = /^[A-Za-z\s'-]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const maxChars = 250;
    let formErrors = [];

    function flashField(inputElement) {
        inputElement.classList.add("flash-error");
        setTimeout(() => {
            inputElement.classList.remove("flash-error");
        }, 500);
    }
    function validateName() {
        formErrors = formErrors.filter(err => err.field !== "name");
        if (!namePattern.test(nameInput.value) && nameInput.value.length > 0) {
            errorMessage.textContent = "Invalid character in name!";
            errorMessage.style.opacity = "1";
            flashField(nameInput);
            nameInput.value = nameInput.value.replace(/[^A-Za-z\s'-]/g, "");
            formErrors.push({ field: "name", message: "Invalid character in name." });
            setTimeout(() => {
                errorMessage.style.opacity = "0";
            }, 1000);
        } else {
            errorMessage.style.opacity = "0";
        }
    }
    function validateEmail() {
        formErrors = formErrors.filter(err => err.field !== "email");
        if (!emailPattern.test(emailInput.value) && emailInput.value.length > 0) {
            errorMessage.textContent = "Invalid email format!";
            errorMessage.style.opacity = "1";
            flashField(emailInput);
            formErrors.push({ field: "email", message: "Invalid email format." });
            setTimeout(() => {
                errorMessage.style.opacity = "0";
            }, 1000);
        } else {
            errorMessage.style.opacity = "0";
        }
    }

    function updateCharacterCount() {
        const currentLength = commentsInput.value.length;
        infoMessage.textContent = `${currentLength} / ${maxChars} characters`;
        if (currentLength > maxChars * 0.9) {
            infoMessage.style.color = "red";
        } else if (currentLength > maxChars * 0.7) {
            infoMessage.style.color = "orange";
        } else {
            infoMessage.style.color = "green";
        }
        formErrors = formErrors.filter(err => err.field !== "comments");
        if (currentLength > maxChars) {
            commentsInput.value = commentsInput.value.substring(0, maxChars);
            formErrors.push({ field: "comments", message: "Exceeded character limit." });
        }
    }

    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    commentsInput.addEventListener("input", updateCharacterCount);
    form.addEventListener("submit", (event) => {
        hiddenErrorField.value = JSON.stringify(formErrors);
        if (formErrors.length > 0) {
            event.preventDefault();
            alert("Please fix the errors before submitting.");
        }
    });
    updateCharacterCount();
});
