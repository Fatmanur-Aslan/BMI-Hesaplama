function Hesapla(){
  kilo=document.getElementById("kiloİnput").value;
  boy=document.getElementById("boyİnput").value;
  sonuc=kilo/(boy*boy);
  document.getElementById("sonucSpan").innerHTML=sonuc;
}


