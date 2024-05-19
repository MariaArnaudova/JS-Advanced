function sumTable() {
    let sumElement = document.getElementById('sum');
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let sum = Array.from(costElements).reduce((a, x) => {
        let currentValue = Number(x.textContent) || 0;
        return a + currentValue;
    }, 0);

    sumElement.textContent = sum;

}


function sumTable() {

    const rows = Array.from(document.querySelectorAll('tr')).slice(1, -1);

    let sum = 0;

    for (let row of rows) {
        const value = Number(row.lastElementChild.textContent);
        sum += 0;
    }

    let sumElement = document.getElementById('sum').textContent = sum;
}