const password = document.querySelector('.input-box input');

document.querySelector('.show-pass').addEventListener('click', () => {
    const eye = document.querySelector('.show-pass ion-icon');
    password.type = password.type === 'password' ? 'text' : 'password';
    eye.name = eye.name === 'eye-off' ? 'eye' : 'eye-off';
});

password.addEventListener('input', () => {
    let upper = document.getElementById('upper').firstChild;
    let lower = document.getElementById('lower').firstChild;
    let number = document.getElementById('number').firstChild;
    let special = document.getElementById('special').firstChild;
    let length = document.getElementById('length').firstChild;

    const upperChar = new RegExp('(?=.*[A-Z])');
    const lowerChar = new RegExp('(?=.*[a-z])');
    const numberChar = new RegExp('(?=.*[0-9])');
    const specialChar = new RegExp('(?=.*[!@#\$%\^&\*\(\)])');
    const lengthChar = new RegExp('(?=.{8,})');

    const input = [upper, lower, number, special, length];
    const criteria = [upperChar, lowerChar, numberChar, specialChar, lengthChar];

    input.forEach((char, index) => {
        if(criteria[index].test(password.value)){
            return char.name = 'checkmark';
        }
        
        char.name = 'radio-button-off';
    })
})