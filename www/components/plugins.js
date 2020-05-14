
$(document).on("click","#alerta",function(){
  navigator.notification.alert("Versão 0.0.01",null,"Bem vindo ao mapa!","Ok");
});

$(document).on("click","#confirm",function(){
  function confirma(buttonIndex)
  {
    if(buttonIndex == 1)
    {
      navigator.notification.alert(":(",null,"Feedback");
    }
    else
    {
      navigator.notification.alert("Muito obrigado!! :D",null,"Feedback");
    }
  }
  navigator.notification.confirm("Você curtiu o mapa?? :D",confirma,"Feedback",["Não","Sim"]);
});

$(document).on("click","#beep",function(){
  navigator.notification.beep(3);
});

$(document).on("click","#vibrar",function(){
  navigator.vibrate(100);
});

function mostraMapa(lat, long){
        L.mapquest.key = 'GiSd1QWbyiZJyrlbmdlFOpAKUvl2MNYP';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 15
        });

        L.marker([lat, long], {
        icon: L.mapquest.icons.marker(),
        draggable: false
        }).bindPopup('Você está aqui!').addTo(map);

        map.addControl(L.mapquest.control());
      
}

$(document).on("click","#local",function(){
    var onSuccess = function(position){
      mostraMapa(position.coords.latitude, position.coords.longitude)
    };

    function onError(error){
        alert('Não foi possivel encontrar sua localização!');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    $('body').css("background-color","black");
});