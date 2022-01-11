function removeChar(str){
    return str.slice(1, -1);
  };
 removeChar('keqmgkoo');


function noSpace(x){
    return x.replace(/\s+/g,'');
  };
  noSpace('  A B  C   D EF ');
  

function fakeBin(x){
    return x.replace( /[0-4]/g, "0" ).replace( /[5-9]/g, "1");
  }
  fakeBin("12345678");


function toBinary(n){
    let x = n.toString(2);
    return Number(x);
   }
   toBinary(56);


function century(year) {
    return Math.floor((year-1)/100) + 1;} 
    century(2012);


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + 
    string.slice(1);} 
    capitalizeFirstLetter("rtring");


function isDivideBy(number, a, b) {
    if ((number % b == 0) && (number % a == 0)) {return true;}
    else { return false; };}; 
    isDivideBy(25, -2, 4);


function reverse (n) {
    let yoString = Math.abs(n).toString();
    let yoArray = yoString.split('');
    let result = yoArray.reverse().join('');
    return result};
    reverse(158987654);
