

$(document).ready(function(){
        


       $(".calculadora-full").toggle()


       $("#open").on("click",function(){
       $(".calculadora-full").slideToggle(500);
    }).on("click",function(){
       $("#open").slideToggle(100);
    })
    	
    	
        $( ".numeros" ).click(function() {
  		var text = $( this ).text();
  		return $( "input" ).val( text );
		});



       $( ".numeros2" ).click(function() {
  		var text = $( this ).text();
  		$( "input" ).val( text );
		});

       



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















