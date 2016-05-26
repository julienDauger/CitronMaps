

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

/* end google maps -----------------------------------------------------*/


$("#bars").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kAjMH7hGmXKU");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kAjMH7hGmXKU" width="640" height="480"></iframe>	
  $("#titre").text(" Les bars cachés");
});

$("#boites").click(function(){

  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kuVA6prrK1yM");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kuVA6prrK1yM" width="640" height="480"></iframe>
  $("#titre").text(" Vos boîtes préférées");
});

$("#foot").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/embed?mid=z8gwmAxuw7mU.knqS-LTvVoc0");
  //<iframe src="https://www.google.com/maps/d/embed?mid=z8gwmAxuw7mU.knqS-LTvVoc0" width="640" height="480"></iframe>
  $("#titre").text(" Bars pour matchs");
});

$("#taff").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kJRLbq1pDmTA");
  //	<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kJRLbq1pDmTA" width="640" height="480"></iframe>
  $("#titre").text(" Les espaces de travail");
});

$("#tabacs").click(function(){

  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kpABprdpTey8");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kpABprdpTey8" width="640" height="480"></iframe>
  $("#titre").text(" Les tabacs nocturnes");
});

$("#sm").click(function(){

  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kIl002pj9onM");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=zFVUJ2CquSz4.kIl002pj9onM" width="640" height="480"></iframe>
  $("#titre").text(" Les supermarchés dominicaux");
});


$("#terrasses").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=zo60WJ1wUvJw.kvBFXl7Fb4mE");
  $("#titre").text(" Les terrasses cachées");
});


$("#Mcdo").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=z8gwmAxuw7mU.kAeAUiWi_BPg");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=z8gwmAxuw7mU.kAeAUiWi_BPg" width="640" height="480"></iframe>	
  $("#titre").text(" Les Mcdos nocturnes");
});

$("#vins").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=10ntUvvdrG228xH_heXBLoyq1RjM");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=10ntUvvdrG228xH_heXBLoyq1RjM" width="640" height="480"></iframe>	
  $("#titre").text(" Bars à vins ");
});


$("#Expos").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/embed?mid=1AZixVYc_89nbwIvlEAMVnnzfe38");
  //<iframe src="https://www.google.com/maps/d/embed?mid=1AZixVYc_89nbwIvlEAMVnnzfe38" width="640" height="480"></iframe>
  $("#titre").text(" Expositions chouettes ");
});

$("#Pharma").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=1aSuzkY1JXsf01ZymO9D6azXmAcY");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1aSuzkY1JXsf01ZymO9D6azXmAcY" width="640" height="480"></iframe>
  $("#titre").text(" Pharmacie H24 ");
});

$("#Brunchs").click(function(){
  $("#map").attr("src","https://www.google.com/maps/d/u/0/embed?mid=1g__u54bOjnz7NVqHEdbGf5YCry8");
  //<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1g__u54bOjnz7NVqHEdbGf5YCry8" width="640" height="480"></iframe>
  $("#titre").text(" Best brunchs ");
});





$("#titre").click(false);