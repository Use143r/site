var today = new Date ();
var hourNow = today.getHours ();
var greeting;

if (hourNow > 18) {
    greeting = 'Вечер добрый! пидарас';
}   
else if (hourNow >  12 ) {
    greeting = 'Добрый день, козлина!';
}   
else if (hourNow >  2 ) {
    greeting = 'Хули заперся в такое время?';
}  

document.write ('<h3>' + greeting + '</h3>');
