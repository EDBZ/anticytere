moment.locale('fr', {
  longDateFormat: {
    LT: "h:mm A",
    LTS: "h:mm:ss A",
    L: "DD/MM/YYYY",
    LL: "Do MMMM YYYY",
    LLL: "Do MMMM YYYY LT",
    LLLL: "dddd,Do MMMM YYYY LT"
  }
});
document.getElementById('time').innerHTML = moment().format('LL');
var td = moment().format('L');
var ddtd = td.slice(0, 2);
var mmtd = td.slice(3, 5);
var yytd = td.slice(6, 10);

var btn = document.getElementById('btn');

function affich() {
  var input = prompt('jj/mm/aaaa', 'jj/mm/aaaa');
  if (input != null) {
    var dd = input.slice(0, 2);
    var mm = input.slice(3, 5);
    var yy = input.slice(6, 10);
    console.log(dd, mm, yy);
    var result = moment((mm + ' ' + dd + ' ' + yy)).format('LL');
var ndd = Math.abs(dd-ddtd);
var nmm = Math.abs(mm-mmtd);
var nyy = Math.abs(yy-yytd);
if (yy<=yytd) {
  // document.getElementById('phrase').innerHTML = 'il y a déjà '+nyy+' ans !';
  document.getElementById('phrase').innerHTML = moment((mm + ' ' + dd + ' ' + yy)).fromNow('mm');

}

console.log(ndd,nmm,nyy);

    document.getElementById('result').innerHTML = result;

  };
};
btn.addEventListener('click', affich);
