function printDiv() {
    console.log('Clicked');
  };


function getParameterByName(url = window.location.href)
{
    var regex = new RegExp('[?]' + '([a-z]*)'), results = regex.exec(url);
    console.log('results', results)

    if (!results) 
        return null;
    if (!results[1]) 
        return '';
    return decodeURIComponent(results[1].replace(/\+/g, ' '));

}
var param = getParameterByName();
console.log('param', param)

if (param == 'prof')
{
    document.getElementsByClassName("note-prof")[0].style.display = "block";
}
else {
    document.getElementsByClassName("note-prof")[0].style.display = "none";
}

