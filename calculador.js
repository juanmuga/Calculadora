

$(document).ready(function(){
        


       $(".calculadora-full").toggle()


       $("#open").on("click",function(){
       $(".calculadora-full").slideToggle(500);
    }).on("click",function(){
       $("#open").slideToggle(100);
    });
    	
    	
      /*  $( ".numeros" ).click(function() {
  		var text = $( this ).text();
  		return $( "input" ).val( text );
		});



       $( ".numeros2" ).click(function() {
  		var text = $( this ).text();
  		$( "input" ).val( text );
		}); */
	

	// VARIABLES
	var count = "";
	var count2 = "";
	
	var esSegundo = false;
	var sigoOperando = false;

	var esSuma = false;
	var esResta = false;
	var esDivision=false;
	var esMultiplicar=false;


	// EVENTO TOMO NUMERO Y IMPRIMO EN box
$(".numeros").click(function(){
	  if(esSegundo){
	  		/*count2 = "";*/
	  		count2 += $(this).text();
			$(".box").text(count2);  
	  } else{
		  	count += $(this).text();
			$(".box").text(count);
	}});
     


     // OPERACIONES LAS DEJO LATENTES
$(".suma").click(function(){ 
		esSegundo = true;
 		esSuma = true;
 		esResta = false;
		esDivision=false;
		esMultiplicar=false;

		

 		$(".box").text("+");  
 		if(sigoOperando && count2){
			calcular();
		} 


});
$(".resta").click(function(){
		esSegundo = true;
 		esResta = true;
 		esSuma = false;
 		esDivision=false;
		esMultiplicar=false; 
				sigoOperando = true;

 		$(".box").text("-");
 		if(sigoOperando && count2){
			calcular();
		}
});
$(".dividir").click(function(){
		esSegundo = true;
 		esDivision = true;
 		esResta = false;
 		esSuma = false;
 		esMultiplicar=false;
 				sigoOperando = true;

 		$(".box").text("/");
 		if(sigoOperando && count2){
				calcular();
			}
});
$(".multiplicar").click(function(){
		esSegundo = true;
 		esMultiplicar = true;
 		esDivision = false;
 		esResta = false;
 		esSuma = false;
 				sigoOperando = true;

 		$(".box").text("x");
 		if(sigoOperando && count2){
				calcular();
		}
});
$(".borrar").click(function(){
 		count = "";
		count2 = "";
		resultado=""; 
		esSegundo = false; 
		sigoOperando = false;
		esSuma = false;
		esResta = false;
		esDivision=false;
		esMultiplicar=false;
		$(".box").text(" ");
		$(".screenbox").text(" ");
		if(sigoOperando){
				calcular();
		}
});


// RESULTADO FINAL EN PANTALLA DE TODAS LAS OPERACIONES
$(".igual").click (function(){
   calcular(); 
}); 

function calcular(){
   var num1=Number(count);
	var num2=Number(count2);

	if (esSuma){
		resultado=num1+num2;
	}
 	if (esResta) {
 		resultado=num1-num2;
 	}
 	if (esDivision) {
 		resultado=num1/num2;
 	}
 	if (esMultiplicar) {
 		resultado=num1*num2;
 	}  

// IMPRIMO EN PANTALLA
$(".screenbox").text(resultado);

count = resultado;
sigoOperando = true;
count2 = "";
resultado=""; 
esSuma = false;
esResta = false;
esDivision=false;
esMultiplicar=false;

}

});



/*

--------------------------------------------------------------------------



 var calculadora = function() {if(confirm("Quieres Sumar?")) {

								var x = prompt("Cual es el Primer numero?");
								var y = prompt("Cual es el Segundo numero?");
								var num1 = parseInt(x); // tuve que poner esto xq el prompt me devolvia un STRING//
 								var num2 = parseInt(y);


								var suma =function(num1,num2) {
			
								return alert(num1+num2);


																};
								suma(num1,num2);

							} else if(confirm("Quieres Restar?")) {

								var x = prompt("Cual es el Primer numero?");
								var y = prompt("Cual es el Segundo numero?");
								var num1 = parseInt(x); // tuve que poner esto xq el prompt me devolvia un STRING//
 								var num2 = parseInt(y);


								var resta =function(num1,num2) {
			
								return alert(num1-num2);


																};
								resta (num1,num2);

											} else if(confirm("Quieres Multiplicar?")) {

								var x = prompt("Cual es el Primer numero?");
								var y = prompt("Cual es el Segundo numero?");
								var num1 = parseInt(x); // tuve que poner esto xq el prompt me devolvia un STRING//
 								var num2 = parseInt(y);


								var multiplicar =function(num1,num2) {
			
								return alert(num1*num2);


																};
								multiplicar (num1,num2);

											} else if(confirm("Quieres Dividir?")) {

								var x = prompt("Cual es el Primer numero?");
								var y = prompt("Cual es el Segundo numero?");
								var num1 = parseInt(x); // tuve que poner esto xq el prompt me devolvia un STRING//
 								var num2 = parseInt(y);


								var dividir =function(num1,num2) {
			
								return alert(num1/num2);


																};
								dividir (num1,num2);

											} else {alert("No hay mas Opciones")};
										};

-------------------------------------------------------------------------------------------
//calculadora con funcion switch





var calculadora = function() {	

								var xy = function(){
								 x = prompt("Cual es el Primer numero?");
								 y = prompt("Cual es el Segundo numero?");
								 num1 = parseInt(x); 
 								 num2 = parseInt(y);
 							
 								 
 									};



								switch (prompt("Que quieres hacer?")) {
    case "sumar":
        						
    							xy();

								var suma =function(num1,num2) {
			
								return alert(num1+num2);


																};
								suma(num1,num2);  
        break;
    case "restar":
        						
 								xy();


								var resta =function(num1,num2) {
			
								return alert(num1-num2);


																};
								resta (num1,num2);
        break;
    case "multiplicar":
        						xy();


								var multiplicar =function(num1,num2) {
			
								return alert(num1*num2);


																};
								multiplicar (num1,num2);
        break;
    case "dividir":
        						xy();
								var dividir =function(num1,num2) {
			
								return alert(num1/num2);


																};
								dividir (num1,num2);
        break;
    
    default:
        
        if(confirm("Eso no existe. Probar de vuelta?"))

    {calculadora();} else {confirm("Vuelva Pronto");};
       
};

}; */















