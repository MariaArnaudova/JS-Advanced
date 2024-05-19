function extract(content) {

    let contentElement = document.getElementById('content').textContent;
    let result = '';

    let pattern = /\((.+?)\)/g;

    let match = pattern.exec(contentElement);

    while (match != null) {

        result += match[1] + ';';
        match = pattern.exec(contentElement);

    }
   
    return result;
}