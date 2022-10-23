const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const formData ={ };
    for (let inputIndex = 0; inputIndex < inputs.length; inputIndex += 1) {
        if (inputs[inputIndex].value === "") {
            alert("All fields must be filled!")
            return;
        }
        formData[inputs[inputIndex].name] = inputs[inputIndex].value;
    }
    console.log(formData);
    event.currentTarget.reset();
}
