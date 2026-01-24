function printDiv() {
    console.log('Clicked');
  };

  function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    console.log(document.getElementById(elem).innerHTML)
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
}

function getParameterByName(url = window.location.href)
{
    var regex = new RegExp('[?]' + '([a-z]*)'), results = regex.exec(url);

    if (!results) {
        return null;
        }

    if (!results[1]) {
        return '';
        }

    if (results[1]) {
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
        }


}
var param = getParameterByName();



if (param == 'prof')
{
    document.getElementsByClassName("note-prof")[0].style.display = "block";
}
else {
    document.getElementsByClassName("note-prof")[0].style.display = "none";

}


