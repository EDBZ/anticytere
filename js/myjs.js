moment.locale('fr');
var actual_time = moment();

setInterval(function() {
  document.getElementById('time').innerHTML = moment().format('LL') + ' ' + moment().format('LTS');
  var aiguilleS = document.getElementsByClassName('aiguilleHorloge');
  for (var i = 0; i < aiguilleS.length; i++) {
    aiguilleS[i].style.transformOrigin = 'center bottom';
    aiguilleS[i].style.transition = 'transform ease 1s';
  }
  aiguilleS[0].style.transform = 'rotate(' + (moment().second()) * 6 + 'deg)';
  if (moment().second()==0) {
    aiguileS[0].removeAttribute='style';

  }
  aiguilleS[1].style.transform = 'rotate(' + (moment().minute()) * 6 + 'deg)';
  aiguilleS[2].style.transform = 'rotate(' + (moment().hours()) * 6 + 'deg)';
}, 1000);

function faiguille(temps) {
  var aiguille = document.getElementsByClassName('aiguille');
  var ad = 0 - (89 - (parseInt(moment(temps).format('H')) * 7.5));
  var aw = 0 - (90 - parseInt(moment(temps).format('E') * 25.71));
  var amm = 0 - (90 - parseInt(moment(temps).format('D') * 5.80));
  var am = 0 - (90 - parseInt(moment(temps).format('M') * 15));
  aiguille[0].style.transform = 'rotate(' + (ad - 3.75) + 'deg)';
  aiguille[1].style.transform = 'rotate(' + (aw - 12.85) + 'deg)';
  aiguille[2].style.transform = 'rotate(' + (amm - 2.9) + 'deg)';
  aiguille[3].style.transform = 'rotate(' + (am - 7.5) + 'deg)';
  for (var i = 0; i < aiguille.length; i++) {
    aiguille[i].style.transformOrigin = 'center bottom';
    aiguille[i].style.transition = 'transform ease 2s';
  }
};

function affich() {
  var input = prompt('jj-mm-aaaa hh:mm', 'jj-mm-aaaa hh:mm');
  var dd = input.substr(0, 2);
  var mm = input.substr(3, 2);
  var yy = input.substr(6, 4);
  var hh = input.substr(11, 2);
  var min = input.substr(14, 2);
  var eng_input = moment(mm + '-' + dd + '-' + yy + ' ' + hh + ':' + min,'MM-DD-YYYY HH:mm');
  console.log(yy);
  console.log(moment(eng_input).calendar());
  if (input != null) {
    faiguille(eng_input);
    var result = moment(eng_input).format('LLLL');
    var duration = moment.duration({
      'days': 6585.32
    });
    var saros = moment(eng_input).add(duration);
    document.getElementById('result').innerHTML = result;
    document.getElementById('phrase').innerHTML = 'Prochain saros : ' + moment(saros).format('LL');
  };
};
document.getElementById('btn').addEventListener('click', affich);
faiguille(actual_time);
