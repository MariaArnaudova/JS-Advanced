function colorize() {

    // let targets = document.querySelectorAll('tr:nth-of-type(2n) td');

    // targets.forEach(x =>{ 
    //     x.style.backgroundColor = 'teal';
    // });

    let rowElements = document.getElementsByTagName('tr');
    let rows = Array.from(rowElements);

    rows.forEach((x, i)=> {
        if(i%2!=0){
            x.style.backgroundColor = 'teal';
        }
    })
}