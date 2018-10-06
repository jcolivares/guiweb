//Ejemplo de funciones extras

$(function(){
   //alert("entrando...");
    
    //Agregando funcionalidad a los botones..
    
    $(".btn").click(function(){
        alert("Presionaste el boton ="+$(this).text());    
    });
    
    //Agregando funcionalidad a todos los labels...
    $(".label").click(etiquetas);
});

function etiquetas(){
    alert("Diste click en ="+$(this).text());
    
}