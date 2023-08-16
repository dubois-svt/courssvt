function getParameterByName(url = window.location.href)
{
    var regex = new RegExp('[?&]' + '(=([^&#]*)|&|#|$)'),results = regex.exec(url);
    console.log('resultts', !results)

    if (!results) 
        return null;
    if (!results[2]) 
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));

}
var param = getParameterByName();
console.log('param', param)

if (param == 'prof')
{
    document.getElementsByClassName("note-prof")[0].style.display = "block";
}