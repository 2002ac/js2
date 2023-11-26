let v = 75;
console.log(v)

let s = 130;
console.log(s)

function benzin(v, s) {

  if (v >= 0 && v <= 60) {
    return (s / 100) * 6;
  } 

  else if (v > 60 && v <= 90) {
    return (s / 100) * 9;
  } 

  else if (v > 90 && v <= 120) {
    return (s / 100) * 8;
  } 

  else if ( v > 120 && v <= 150) {
    return (s / 100) * 10;

  } 
}



console.log(benzin(v , s)+ " 12 olmaliydi olmaliydi amma olmadi");
