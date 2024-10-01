document.addEventListener('DOMContentLoaded', function () {
    const gmail = document.getElementById('gmail_input');
    const gmailButton = document.getElementById('gmail_button');
    const result = document.getElementById('gmail_result');
    const child = document.getElementsByClassName('child_block');

    const regExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    function solve() {
        gmailButton.addEventListener('click', function () {
            if (regExp.test(gmail.value)) {
                result.textContent = 'Correct email address';
                result.style.color = 'green';
            } else {
                result.textContent = 'Invalid email address';
                result.style.color = 'red';
            }
        });
    }

    solve();

    let childPosition = 0;

    const counter = () => {
        childPosition++;
        console.log(childPosition);
        if (childPosition < 450) {
            requestAnimationFrame(counter);
            for (let i = 0; i < child.length; i++) {
                child[i].style.left = `${childPosition}px`;
            }
        }
    };

    counter();
});
