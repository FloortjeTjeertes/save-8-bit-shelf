// let object1 =  document.getElementById('object1');
var info = '';
//ajax functio
function ajax(zoekVar) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


      //
      // debuggen laat http string zien
      // console.log(httpString);
      // bereid de ajax actie voor

      var response = xmlhttp.responseText;

      console.log(response);
       info = response;
       grido.innerHTML = info;

    }
  };

// let httpString = "getGame.php";
let httpString = "getGame.php?zoek="+zoekVar;

    xmlhttp.open("GET", "../private/models/"+httpString, true);
  xmlhttp.send(); //doehet
}
