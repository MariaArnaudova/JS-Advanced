function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let tableCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultElement = document.getElementById('result');

    let emailElements = Array.from(tableCellElements);
    let targetElement = emailElements.find(e => e.textContent == emailInputElement.value);

    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    //  targetElement.parentNode.removeChild(targetElement);

}