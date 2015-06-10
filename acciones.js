// JavaScript Document
// JavaScript Document
$(document).ready(function(e) {
  $('#principal').height(s('#page').height());//Calcular el alto de la pantalla del dispositivo
  document.addEventListener("deviceready",function(){
	  //precarga el sonido
	  audio=windou.plugins.LowLatencyAudio;
	  audio.preloadFX('abeja','audio/son_perro.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('caballo','audio/son2_gato.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('cerdo','audio/son3_chivo.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('gallo','audio/son4_pajaro.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('perro','audio/son5_caballo.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('raton','audio/son6_burro.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('tigre ','audio/son7_leon.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('leon','audio/son8_cocodrilo.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('elefante','audio/son9_cebra.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('dinosaurio','audio/son10_mono.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('gorila','audio/son11_oso.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('pantera','audio/son12_tigre.mp3',function(){},function(e){alert('Error '+e);});
	  
	  //reproducir las notas
	  
	  $('.nota').bind('touchstart',function(){$(this).addClass('tocada');
	  audio.play ($(this).attr('id'));});
	  $('.nota').bind('touchend',function(){$(this).removeClass('tocada'); }); 
	  },false); //deviceready
	  
}); //ready