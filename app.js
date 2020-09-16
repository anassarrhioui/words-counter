const count_words = () => {
    let number_of_words = 1
    let text = document.getElementById('text').value;
    text = text.replace(/(^\s*)|(\s*$)/gi, "").replace(/[ ]{2,}/gi, " ").replace(/\n /, "\n");
    if (text.length == 0)
        number_of_words = 0
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " ")
            number_of_words++;
    }
    document.getElementById('number-of-words').innerHTML = number_of_words;
    document.getElementById('number-of-chars').innerHTML = document.getElementById('text').value.length;
}

count_words()

const Export2Doc = () => {

    let text = document.getElementById('text').value;
    text = text.replace(/(^\s*)|(\s*$)/gi, "").replace(/[ ]{2,}/gi, " ").replace(/\n /, "\n");

    if (text.length === 0) {
        document.getElementById('erreur').style.visibility = "visible"
    } else {
        document.getElementById('erreur').style.visibility = "hidden"
        let blob = new Blob(['\ufeff', text], {
            type: 'application/msword'
        });

        let url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(text);
        let date = new Date()
        filename = date.getDate() + '-' + date.getMonth() + 1 + '-' + date.getFullYear() + ' ' + date.getHours() + 'H' + date.getMinutes() + '.doc';
        let downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink);

        if (navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            downloadLink.href = url;
            downloadLink.download = filename;
            downloadLink.click();
        }

        document.body.removeChild(downloadLink);
    }


}