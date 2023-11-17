document.getElementById('myForm').addEventListener('submit', function(event) {

    event.preventDefault(); 

    const form = event.target;
    const formFields = form.elements;

    const fullNameInput = formFields.name;
    const phone = formFields.phone;
    const emailInput = formFields[1];
    console.log("form: " + JSON.stringify(form, null, 4));

    console.log('Ad:' + fullNameInput.value);
    console.log('E-posta:', phone.value);
    alert("Submıtted name: " + fullNameInput.value + " phoe number: " + phone.value);

    fullNameInput.value = "";
    phone.value= "";


});