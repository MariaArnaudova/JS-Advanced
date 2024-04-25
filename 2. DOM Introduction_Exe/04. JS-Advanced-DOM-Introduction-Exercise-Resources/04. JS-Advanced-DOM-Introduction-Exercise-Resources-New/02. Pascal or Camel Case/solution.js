function solve() {
  let text = document.getElementById('text').value;
  let conventionElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');
  let words = text
    .split(' ')
    .map(x => x.toLowerCase());

  let result = '';

  if (conventionElement == 'Camel Case') {
    for (let i = 0; i < words.length; i++) {

      // if (i != 0) {
      //   words[i]= words[i].charAt(0).toUpperCase() + words[i].substring(1);
      // }

      if (i != 0) {
        result += words[i].charAt(0).toUpperCase() + words[i].substring(1);
      } else {
        result += words[i];
      }

    }
  } else if (conventionElement == 'Pascal Case') {

    for (let i = 0; i < words.length; i++) {

      //words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
      result += words[i].charAt(0).toUpperCase() + words[i].substring(1);

    }
  } else {

    result = 'Error!';
    return resultElement.textContent = result
  }

  //result = words.join('');
  resultElement.textContent = result;
}
