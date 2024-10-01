document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector('#phone_Input');
    const phoneButton = document.querySelector('#phone_buttonInput');
    const phoneResult = document.querySelector('#phone_result');

    const regExp = /^\+996 [2579]\d{2} \d{2}--\d{2}--\d{2}$/;

    phoneButton.addEventListener('click', function()  {
        if (regExp.test(phoneInput.value)) {
            phoneResult.innerHTML = 'OK';
            phoneResult.style.color = 'green';
        } else {
            phoneResult.innerHTML = 'NOT OK';
            phoneResult.style.color = 'red';
        }
    })
})
