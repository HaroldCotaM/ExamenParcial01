
 var cod;
 var x=document.getElementsByTagName("article");
 var saldoF=1500;
 var cont=1;
 var servicio;

//Cantidades de retiro
 var a, b, c, d, e, f;
 
 var dni="71696233";
 var pin="12345";
 var ncuenta="0123456789123";
 var name;
 
 var pos1, pos2, pos3, pos4; 
 
 
 var arrayTelefono;
 var arrayCuenta;
 var arrayMontoT;
 var arrayServicio;
 var arrayIncome;
 var arrayTelefono;
 var arrayRetiro;
 
 var randomServ;
 var randomTele;
 
 var contador=0;
var contadorD=0;
var contadorP=0;
var contadorPN=0;
var contadorPR=0;
var input;

var cuentaTrans;
var montoTrans;
var Servicio;
var telefono;
var income;
var CantRetiro;
 
 var quitar;
 function funcion(){
 document.getElementById('cuenta').focus();
    habilitar();
 }
 
function screenChange(cod){
  name=screen(x);
    switch (name){
        case 'screen1':
            switch (cod){
                case '8':
                    var validar=evaluateUser();
                    
                    if(validar==='si'){
                    document.getElementById('1').style.display='none';
                    document.getElementById('2').style.display='block';
                    contador=0;
                        contadorD=0;
                        contadorP=0;
                        document.getElementById("cuenta").value='';
                        document.getElementById("dni").value='';
                        document.getElementById("pin").value='';
                    }else{
                        alert("Error: Vuelva a ingresar sus datos, por favor");
                        contador=0;
                        contadorD=0;
                        contadorP=0;
                        document.getElementById("cuenta").value='';
                        document.getElementById("dni").value='';
                        document.getElementById("pin").value='';
                    }
                    break;
            }
            break;
        case 'screenMenu':
            switch(cod){
                case '2':
                    document.getElementById('2').style.display='none';
                    document.getElementById('3').style.display='block';
                    break;
                case '3':
                    document.getElementById('2').style.display='none';
                    document.getElementById('4').style.display='block';
                    habilitar();
                    break;
                case '4':
                    document.getElementById('2').style.display='none';
                    document.getElementById('1').style.display='block';
                    document.getElementById("cuenta").value='';
                    document.getElementById("dni").value='';
                    document.getElementById("pin").value='';
                    break;
                case '6':
                    document.getElementById('2').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '7':
                    document.getElementById('2').style.display='none';
                    document.getElementById('6').style.display='block';
                    break;
                case '8':
                    document.getElementById('2').style.display='none';
                    document.getElementById('7.1').style.display='block';
                    habilitar();
                    break;
            }
            break;
        case 'screenMovimientos':
            switch(cod){
                case '4':
                    document.getElementById('3').style.display='none';
                    document.getElementById('2').style.display='block';
                    break;
                case '8':
                    document.getElementById('3').style.display='none';
                    document.getElementById('7').style.display='block';
                    break;
            }
            break;
        case 'screenTransferencia':
            switch(cod){
                case '4':
                    document.getElementById('4').style.display='none';
                    document.getElementById('2').style.display='block';
                    break;
                case '8':
                    document.getElementById('4').style.display='none';
                    document.getElementById('4.1').style.display='block';
                    habilitar();
                    var cuentaTransferencia = arrayCuenta.join("");
                    var nroCuentaTag=document.getElementById('nroCuentaTransferencia');
                    insertarText(nroCuentaTag, cuentaTransferencia);
                    console.log(cuentaTransferencia);
                    cancelar(cuentaTrans, 't');
                    
                    break;
            }
            break;
        case 'screenMontoTransferir':
            switch(cod){
                case '4':
                    document.getElementById('4.1').style.display='none';
                    document.getElementById('4').style.display='block';
                    break;
                case '8':
                    
                    var montoTransferencia= arrayMontoT.join("");
                    if(montoTransferencia<saldoF){
                        document.getElementById('4.1').style.display='none';
                        document.getElementById('4.2').style.display='block';
                         var montoTransTag=document.getElementById('montoTransferencia');
                    insertarText(montoTransTag,montoTransferencia);
                    }else{
                        alert("No cuenta con esa cantidad para transferir");
                         cancelar(montoTrans,'mt');
                    }
                   
                    break;
            }
            break;
        case 'confirmTransfer':
            switch(cod){
                case '4':
                    document.getElementById('4.2').style.display='none';
                    document.getElementById('4.1').style.display='block';
                    break;
                case '8':
                    document.getElementById('4.2').style.display='none';
                    document.getElementById('7').style.display='block';
                    var k=parseInt(document.getElementById('montoTransferencia').innerHTML);
                    var pantalla = contarFila();
                    console.log(pantalla);
                    escribirTabla('Transferencia', -k, pantalla);
                    break;
            }
            break;
        
        case 'screenServicio':
            switch(cod){
                case '4':
                    document.getElementById('5').style.display='none';
                    document.getElementById('2').style.display='block';
                    break;
                case '5':
                    document.getElementById('5').style.display='none';
                    document.getElementById('5.1').style.display='block';
                    habilitar();
                    servicio='agua'
                    break;
                case '6':
                    document.getElementById('5').style.display='none';
                    document.getElementById('5.2').style.display='block';
                    habilitar();
                    servicio='telefono'
                    break;
                case '7':
                    document.getElementById('5').style.display='none';
                    document.getElementById('5.1').style.display='block';
                    habilitar();
                    servicio='luz'
                    break;
            }
            break;
        case 'codServicio':
            switch(cod){
                case '4':
                    document.getElementById('5.1').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '8':
                    
                    randomServ=getRandomInteger(20,30);
                    document.getElementById('montoAcancelar').innerHTML=randomServ;
                    document.getElementById('5.1').style.display='none';
                    document.getElementById('5.3').style.display='block';
                    
                    break;
            }
            break;  
        
        case 'codTelefono':
            switch(cod){
                case '4':
                    document.getElementById('5.2').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '8':
                    randomTele=getRandomInteger(30,40);
                    document.getElementById('montoAcancelar').innerHTML=randomTele;
                    document.getElementById('5.2').style.display='none';
                    document.getElementById('5.3').style.display='block';
                    break;
            }
            break;
        
        case 'informeDeuda':
            switch(cod){
                case '4':
                    document.getElementById('5.3').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '8':
                    
//                    var variable=document.getElementById('montoAcancelar').innerHTML;
                    
//                  var montoServicio=  pagarServicio(variable,0);
//                    if(montoServicio>0){
                        
                        if(servicio==='agua'||servicio==='luz'){
                            var elementCant=document.getElementById('montoServicio');
                            var elementServ=document.getElementById('tipoServicio');
                            var elementCod=document.getElementById('codServicio');
                             var codservicio= arrayServicio.join("");
                            insertarText(elementCant, randomServ);
                            insertarText(elementServ, servicio);
                            insertarText(elementCod,codservicio);
                            
                            document.getElementById('5.3').style.display='none';
                            document.getElementById('5.6').style.display='block';
                        }else if(servicio==='telefono'){
                             var elementMontoTele=document.getElementById('montoTele');
                            var elementNumeroTele=document.getElementById('numeroTelefono');
                            var numeroTelefono=arrayTelefono.join("");
                            insertarText(elementMontoTele, randomTele);
                            insertarText(elementNumeroTele, numeroTelefono);
                            
                            document.getElementById('5.3').style.display='none';
                            document.getElementById('5.7').style.display='block';
                            
                        }

                    
                    break;
            }
            break;
        
        
        case 'confirmPagoServicio':
            switch(cod){
                case '4':
                    document.getElementById('5.6').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '8':
                    
                    var montoServicio=pagarServicio(randomServ,0);
                    console.log(randomServ);
                    if(montoServicio>0){
                        document.getElementById('5.6').style.display='none';
                        document.getElementById('7').style.display='block';
                         var d=parseInt(document.getElementById('montoServicio').innerHTML);
                         console.log(typeof d);
                        var pantalla = contarFila();
                        console.log(pantalla);
                       
                        escribirTabla(servicio, -d, pantalla);
                        console.log(quitar);
                    }else if(montoServicio<0){
                        console.log(montoServicio);
                        var elementResto=document.getElementById('montoRestante');
                        insertarText(elementResto, -montoServicio);
                        document.getElementById('5.6').style.display='none';
                        document.getElementById('5.4').style.display='block';
                    }
                    cancelar(Servicio, 'c');
                    break;
            }
            break;
        
        
        case 'confirmPagoTel':
            switch(cod){
                case '4':
                    document.getElementById('5.7').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '8':

                   var montoTelefono=pagarServicio(randomTele,0);
                    if(montoTelefono>0){
                        document.getElementById('5.7').style.display='none';
                        document.getElementById('7').style.display='block';
                        var e=parseInt(document.getElementById('montoTele').innerHTML);
                        console.log(typeof e);
                        var pantalla = contarFila();
                        console.log(pantalla);
                        escribirTabla(servicio, -e, pantalla);
                    }else if(montoTelefono<0){
                        var elementRestoTel=document.getElementById('montoRestante');
                        insertarText(elementRestoTel, -montoTelefono);
                        document.getElementById('5.7').style.display='none';
                        document.getElementById('5.4').style.display='block';
                    }
                    cancelar(telefono, 'c');
                    break;
            }
            break;
        
         case 'respuestaNegativa':
            switch(cod){
                case '4':
                    document.getElementById('5.4').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '8':
                    
                    document.getElementById('5.4').style.display='none';
                    document.getElementById('5.5').style.display='block';
                    break;
            }
            break;
        
        case 'ingresarDinero':
            switch(cod){
                case '4':
                    document.getElementById('5.5').style.display='none';
                    document.getElementById('5').style.display='block';
                    break;
                case '8':
                    var variable=parseInt(document.getElementById('montoRestante').innerHTML);
                    console.log(variable);
                    var income=arrayIncome.join(""); 
                    console.log(income);
                    var saldo=income-variable;
                    console.log(saldo);
                    if(saldo>0){
                        document.getElementById('5.5').style.display='none';
                        document.getElementById('7').style.display='block';
//                        console.log(typeof k);
                        var pantalla = contarFila();
                        console.log(pantalla);
                        escribirTabla(servicio, -quitar, pantalla);
                        var pantalla = contarFila();
                        escribirTabla('Ingreso', income, pantalla)
                       
                    }else if(saldo<0){
                        if(servicio==='agua' || servicio==='luz'){
                            var elementoResto=document.getElementById('montoRestante');
                            insertarText(elementoResto, -saldo);
                            document.getElementById('5.5').style.display='none';
                            document.getElementById('5.4').style.display='block';
                        }else{
                            var elementoRestoTel=document.getElementById('montoRestante');
                            insertarText(elementoRestoTel, -saldo);
                            document.getElementById('5.5').style.display='none';
                            document.getElementById('5.4').style.display='block';
                            
                        }
                    }
                    cancelar(income,'i');
                    break;
            }
            break;
        
        
        case 'screenRetiro':
            var monto=document.getElementById('montoRetiro');
            switch(cod){
                case '1':
                   
                   a=document.getElementById('a').innerHTML;
                   insertarText(monto,a);
                   
                   document.getElementById('6').style.display='none';
                   document.getElementById('6.2').style.display='block';
                    break;
                case '2':
                    b=document.getElementById('b').innerHTML;
                   insertarText(monto,b);
                   
                    document.getElementById('6').style.display='none';
                   document.getElementById('6.2').style.display='block';
                    break;
                case '3':
                   c=document.getElementById('c').innerHTML;
                   insertarText(monto,c);
                   document.getElementById('montoRetiro').value=b;
                    document.getElementById('6').style.display='none';
                   document.getElementById('6.2').style.display='block';
                    break;
                case '4':
                    document.getElementById('6').style.display='none';
                    document.getElementById('2').style.display='block';

                    break;
                case '5':
                   d=document.getElementById('d').innerHTML;
                   insertarText(monto,d);
                   document.getElementById('montoRetiro').value=d;
                    document.getElementById('6').style.display='none';
                   document.getElementById('6.2').style.display='block';
                    break;
                case '6':
                    e=document.getElementById('e').innerHTML;
                    insertarText(monto,e);
                   document.getElementById('montoRetiro').value=e;
                    document.getElementById('6').style.display='none';
                   document.getElementById('6.2').style.display='block';
                    break;
                case '7':
                   f=document.getElementById('f').innerHTML;
                   insertarText(monto,f);
                   document.getElementById('montoRetiro').value=f;
                    document.getElementById('6').style.display='none';
                   document.getElementById('6.2').style.display='block';
                    break;
                case '8':
                    document.getElementById('6').style.display='none';
                    document.getElementById('6.1').style.display='block';
                    document.getElementById('f4').focus();
                    
                    habilitar();
                    

                    break;
            }
            break;
        
        case 'inputNumber':
            switch(cod){
                case '4':
                    document.getElementById('6.1').style.display='none';
                    document.getElementById('6').style.display='block';
                    break;
                case '8':
                    
                    document.getElementById('6.1').style.display='none';
                    document.getElementById('6.2').style.display='block';
                    console.log('f');
                    var retiroInput=arrayRetiro.join("");
                    var elementRetiroCant=document.getElementById('montoRetiro');
                    insertarText(elementRetiroCant,retiroInput);
                    console.log('');
                    break;
            }
            break;
        case 'confirmRetiro':
            switch(cod){
                case '4':
                    document.getElementById('6.2').style.display='none';
                    document.getElementById('6').style.display='block';
                    break;
                case '8':
                    var k=parseInt(document.getElementById('montoRetiro').innerHTML);
                    if(k<saldoF){
                        document.getElementById('6.2').style.display='none';
                    document.getElementById('7').style.display='block';
//                    var k=parseInt(document.getElementById('montoRetiro').innerHTML);
                    console.log(typeof k);
                    var pantalla = contarFila();
                    console.log(pantalla);
                    escribirTabla('Retiro', -k, pantalla);
                    }else{
                        alert("Usted no cuenta con esa cantidad para retirar");
                        cancelar(cantRetiro,'f');
                    }
                    
                    
                    break;
            }
            break;
        
        
        case 'CambiarPin':
            switch(cod){
                case '4':
                    document.getElementById('7.1').style.display='none';
                    document.getElementById('2').style.display='block';
                    break;
                case '8':
                    var cambio=cambioPin();
                    if(cambio==='si'){
                        document.getElementById('7.1').style.display='none';
                        document.getElementById('7').style.display='block';
                    }else{
                        alert('Los pines no coinciden');
                        contadorPN=0;
                        contadorPR=0;
                        document.getElementById("pinN").value="";
                        document.getElementById("pinR").value="";
                    }
                    
                    break;
            }
            break;
        
        case 'finalScreen':
            switch(cod){
                case '4':
                    document.getElementById('7').style.display='none';
                    document.getElementById('1').style.display='block';
                    break;
                case '8':
                    document.getElementById('7').style.display='none';
                    document.getElementById('2').style.display='block';
                    break;
            }
            break;
       
      
        
    }
} 

function cambioPin(){

     var pinN=document.getElementById("pinN").value;
     var pinR=document.getElementById("pinR").value;
    if(pinN===pinR){
        console.log("igual");
        pin=pinN;
        return('si');
        
    }
    else{
        console.log("diferente");
        return('no');
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pagarServicio(aPagar, extra){
    console.log(aPagar);
    console.log(extra);
    extra=parseInt(extra);
    aPagar=parseInt(aPagar);
    saldoF=document.getElementById('sFinal').value;
    saldoF=parseInt(saldoF);
    quitar =extra+aPagar;
    quitar=parseInt(quitar);

    var estadoCuenta=saldoF-quitar;
    console.log(typeof estadoCuenta);
    console.log(estadoCuenta);
    
    return estadoCuenta;
}


// var m;
function screen(m){

 console.log("0");
 for(var i=0;i<m.length; i++){
     console.log("1");
     if(m[i].style.display==="block"){
         console.log("2");
         return m[i].className;
         break;
     }
 }
 console.log("4");

}


function insertarText(tag, texto){
    
    tag.innerHTML='';
    var contenido=document.createTextNode(texto);
    console.log(contenido);
    tag.appendChild(contenido);
}

function evaluateUser(){
     var icuenta=document.getElementById("cuenta").value;
    var idni=document.getElementById("dni").value;
     var ipin=document.getElementById("pin").value;
    if(icuenta===ncuenta && idni===dni && ipin===pin){
        console.log("igual");
        return('si');
    }
    else{
        console.log("diferente");
        return('no');
    }
}


function habilitar(){
                    document.getElementById('btn0').disabled=false;
                    document.getElementById('btn1').disabled=false;
                    document.getElementById('btn2').disabled=false;
                    document.getElementById('btn3').disabled=false;
                    document.getElementById('btn4').disabled=false;
                    document.getElementById('btn5').disabled=false;
                    document.getElementById('btn6').disabled=false;
                    document.getElementById('btn7').disabled=false;
                    document.getElementById('btn8').disabled=false;
                    document.getElementById('btn9').disabled=false;
}


function borrar(arrayOriginal, arrayChange){
    arrayChange.pop();
    console.log('borr[o');
    arrayChange.unshift('');
    console.log(arrayChange[0]);
    for(i in arrayChange){
        arrayOriginal[i].value=arrayChange[i];
    }
}
function cancelar(arrayCancelar,v){
    for(var i=1; i<arrayCancelar.length+1; i++){
                    document.getElementById(v+i).value='';
                }
}

function escribirCalculadora(lastPosition, firstArray, fixArray, number,id){
    if(lastPosition===''){
                        document.getElementById(id).value=number;
                    }else{
                
                        fixArray.shift();
                        fixArray.push(number);

                        for(i in fixArray){
                        firstArray[i].value=fixArray[i];
                    } 
                    
                    }

}

function cambiar(){
    console.log('dd')
var a = document.getElementsByClassName('fila1');
for(var b in a){ //Como nos devuelve un array iteramos
  var c = a[b];
  console.log('itero array')  
  console.log(typeof c);
  if(typeof c === "object"){ //Solo buscamos los objetos
////     c.onclick = function (){ //Asignamos un evento onclick
//         console.log('hola')
//        console.log(String(c));
       var td = this.offsetParent; //Localizamos el TD
       console.log(String(td));
       var tr = td.parentElement;  //LLegamos hasta el TR
       var columna2 = tr.children[1]; // Buscamos la Columna NOMBRE
       alert("Quieres editar al Usuario: "+columna2.textContent);
        columna2.textContent=500;
     }
     break;
  }
}

function escribirTabla(descripcion, monto, cName){
    var a = document.getElementsByClassName(cName);
for(var b in a){ //Como nos devuelve un array iteramos
  var c = a[b];
  console.log('itero array');
    console.log(typeof c);
  if(typeof c === "object"){ //Solo buscamos los objetos
////     c.onclick = function (){ //Asignamos un evento onclick
//         console.log('hola')
//        console.log(String(c));
//       var td = c.offsetParent; //Localizamos el TD
//       console.log(String(td));
//       var tr = td.parentElement;  //LLegamos hasta el TR
       var tr=document.getElementById('row'+cont);
       var columna1 = tr.children[0];
       var columna2 = tr.children[1]; // Buscamos la Columna NOMBRE
       var columna3 = tr.children[2];
//       alert("Quieres editar al Usuario: "+columna2.textContent);
        columna1.textContent=descripcion;
        columna2.textContent=monto;
        var cal=calcularSaldo(monto);
        columna3.textContent=cal;
     }
     break;
  }
}

function calcularSaldo(cantidad){

    saldoF=parseInt(saldoF);
    console.log(saldoF);
    cantidad=parseInt(cantidad);
    saldoF=saldoF+cantidad;
    console.log(saldoF);
    document.getElementById('sFinal').value='';
    document.getElementById('sFinal').value=saldoF;
    return saldoF;

}

function contarFila(){
    cont=cont+1
    console.log(cont);
    var pan;
    switch(cont){
        case 1:
            pan='fila1';
            return pan;
            break;
        case 2:
            pan='fila2';
            
            return pan;
            break;
        case 3:
            pan='fila3';
            return pan;
            break;
        case 4:
            pan='fila4';
            return pan;
            break;
        case 5:
            pan='fila5';
            return pan;
            break;
        case 6:
            pan='fila6';
            return pan;
            break;
        case 7:
            pan='fila7';
            return pan;
            break;
        case 8:
            pan='fila8';
            return pan;
            break;
    }
    return 
}



function Entrada(m){
    console.log('leyo entrada');
    input=m;
}


function escribir(number){

  console.log('leyo funcion');
  name=screen(x);
console.log(name);

    switch(name){
        
        case 'screen1':
            console.log('hi');
             var arrayNumero=[];
            if(input==='cuenta'){
                if(number==='10'){
                    var numero=document.getElementById('cuenta').value;
                    arrayNumero= numero.split("");
                    arrayNumero.pop();
                    document.getElementById('cuenta').value=arrayNumero.join("");
                    contador=contador-1;
                }else if(number=='11'){
                    document.getElementById('cuenta').value="";
                    contador=0;
                }else{
               
                contador=contador+1;
                console.log(contador);
                if(contador===1){
                    console.log('es uno')
                        document.getElementById('cuenta').value=number;
                        
                    }else if(contador<14){
                            var numero=document.getElementById('cuenta').value;
                            console.log(numero)
                            if(numero<10){
                                console.log('menor')
                                arrayNumero= numero.split("");
                                arrayNumero.push(number);
                                document.getElementById('cuenta').value=arrayNumero.join("");
                            }else{
                                arrayNumero= numero.split("");
                                arrayNumero.push(number);
                                document.getElementById('cuenta').value=arrayNumero.join("");
                            }
                }else{
                    alert('Ya escribio los 13 digitos de su cuenta');
                }
            }
        }else if(input==='dni'){
            var arrayDni=[];
        
                if(number==='10'){
                    var numero=document.getElementById('dni').value;
                    ArrayDni= numero.split("");
                    ArrayDni.pop();
                    document.getElementById('dni').value=ArrayDni.join("");
                    contadorD=contadorD-1;
                }else if(number=='11'){
                    document.getElementById('dni').value="";
                    contadorD=0;
                }else{
                
                contadorD=contadorD+1;
                console.log(contadorD);
                if(contadorD===1){
                    console.log('es uno')
                        document.getElementById('dni').value=number;
                        
                    }else if(contadorD<9){
                            var numero=document.getElementById('dni').value;
                            console.log(numero)
                            if(numero<10){
                                console.log('menor')
                                arrayDni= numero.split("");
                                arrayDni.push(number);
                                document.getElementById('dni').value=arrayDni.join("");
                            }else{
                                arrayDni= numero.split("");
                                arrayDni.push(number);
                                document.getElementById('dni').value=arrayDni.join("");
                               
                            }
                }else{
                    alert('Ya escribio los 8 digitos de su dni');
                }}
            }else if(input==='pin'){
                console.log("pin")
               var arrayPin=[];
                if(number==='10'){
                    var numero=document.getElementById('pin').value;
                    ArrayPin= numero.split("");
                    ArrayPin.pop();
                    document.getElementById('pin').value=ArrayPin.join("");
                    contadorP=contadorP-1;
                }else if(number=='11'){
                    document.getElementById('pin').value="";
                    contadorP=0;
                }else{
                
                contadorP=contadorP+1;
                console.log(contadorP);
                if(contadorP===1){
                    console.log('es uno')
                        document.getElementById('pin').value=number;
                        
                    }else if(contadorP<6){
                            var numero=document.getElementById('pin').value;
                            console.log(numero)
                            if(numero<10){
                                console.log('menor')
                                arrayPin= numero.split("");
                                arrayPin.push(number);
                                document.getElementById('pin').value=arrayPin.join("");
                            }else{
                                arrayPin= numero.split("");
                                arrayPin.push(number);
                                document.getElementById('pin').value=arrayPin.join("");
                               
                            }
                }else{
                    alert('Ya escribio los 5 digitos de su clave');
                }
            }
        }
            
            break;
        
        case 'CambiarPin':
            if(input==='pinN'){
                console.log("pinN")
               var arrayPin=[];
                if(number==='10'){
                    var numero=document.getElementById('pinN').value;
                    ArrayPin= numero.split("");
                    ArrayPin.pop();
                    document.getElementById('pinN').value=ArrayPin.join("");
                    contadorPN=contadorPN-1;
                }else if(number=='11'){
                    document.getElementById('pinN').value="";
                    contadorPN=0;
                }else{
                
                contadorPN=contadorPN+1;
                console.log(contadorPN);
                if(contadorPN===1){
                    console.log('es uno')
                        document.getElementById('pinN').value=number;
                        
                    }else if(contadorPN<6){
                            var numero=document.getElementById('pinN').value;
                            console.log(numero)
                            if(numero<10){
                                console.log('menor')
                                arrayPin= numero.split("");
                                arrayPin.push(number);
                                document.getElementById('pinN').value=arrayPin.join("");
                            }else{
                                arrayPin= numero.split("");
                                arrayPin.push(number);
                                document.getElementById('pinN').value=arrayPin.join("");
                               
                            }
                }else{
                    alert('Ya escribio los 5 digitos de su pin');
                }
            }
        }else if(input==='pinR'){
                console.log("pinR")
               var arrayPin=[];
                if(number==='10'){
                    var numero=document.getElementById('pinR').value;
                    ArrayPin= numero.split("");
                    ArrayPin.pop();
                    document.getElementById('pinR').value=ArrayPin.join("");
                    contadorPR=contadorPR-1;
                }else if(number=='11'){
                    document.getElementById('pinR').value="";
                    contadorPR=0;
                }else{
                
                contadorPR=contadorPR+1;
                console.log(contadorPR);
                if(contadorPR===1){
                    console.log('es uno')
                        document.getElementById('pinR').value=number;
                        
                    }else if(contadorPR<6){
                            var numero=document.getElementById('pinR').value;
                            console.log(numero)
                            if(numero<10){
                                console.log('menor')
                                arrayPin= numero.split("");
                                arrayPin.push(number);
                                document.getElementById('pinR').value=arrayPin.join("");
                            }else{
                                arrayPin= numero.split("");
                                arrayPin.push(number);
                                document.getElementById('pinR').value=arrayPin.join("");
                               
                            }
                }else{
                    alert('Ya escribio los 5 digitos de su pin');
                }
            }
        }
            break;
        
        case 'screenTransferencia':
            
            cuentaTrans=document.getElementsByName('transferencia');
            arrayCuenta= [cuentaTrans.length];
            
            for(var i=0; i<cuentaTrans.length; i++){
            arrayCuenta[i]=cuentaTrans[i].value;
            }
            if(number==='10'){
                
                    borrar( cuentaTrans, arrayCuenta);
                                               
            }else if(number==='11'){
                    cancelar(cuentaTrans, 't');
            }else{
                var posFinal=document.getElementById('t13').value;
                escribirCalculadora(posFinal, cuentaTrans ,arrayCuenta, number,'t13');
              
                }
            break;
        case 'screenMontoTransferir':
            montoTrans=document.getElementsByName('montoTransferir');
            
            arrayMontoT=[montoTrans.length];
            
            for(var i=0; i<montoTrans.length; i++){
            arrayMontoT[i]=montoTrans[i].value;
            }
            if(number==='10'){
                
                    borrar( montoTrans, arrayMontoT);
                                               
            }else if(number==='11'){
                    cancelar(montoTrans,'mt');
            }else{
                var posFinal=document.getElementById('mt4').value;
                escribirCalculadora(posFinal, montoTrans ,arrayMontoT, number, 'mt4');
              
                }
            
            break;
        case 'codServicio':
            
            Servicio=document.getElementsByName('codServicio');
            arrayServicio=[Servicio.length];
            
            for(var i=0; i<Servicio.length; i++){
            arrayServicio[i]=Servicio[i].value;
            }
            if(number==='10'){
                
                    borrar( Servicio, arrayServicio);
                                               
            }else if(number==='11'){
                    cancelar(Servicio, 'c');
            }else{
                var posFinal=document.getElementById('c7').value;
                escribirCalculadora(posFinal, Servicio ,arrayServicio, number,'c7');
              
                }
            break;
        case 'codTelefono':
            telefono=document.getElementsByName('codTelefono');
            arrayTelefono=[telefono.length];
            
            for(var i=0; i<telefono.length; i++){
            arrayTelefono[i]=telefono[i].value;
            }
            if(number==='10'){
                
                    borrar( telefono, arrayTelefono);
                                               
            }else if(number==='11'){
                    cancelar(telefono, 'p');
            }else{
                var posFinal=document.getElementById('p9').value;
                escribirCalculadora(posFinal, telefono ,arrayTelefono, number,'p9');
              
                }
            break;
        case 'ingresarDinero':
            income=document.getElementsByName('income');
            arrayIncome=[income.length];
            
            for(var i=0; i<income.length; i++){
            arrayIncome[i]=income[i].value;
            }
            if(number==='10'){
                
                    borrar( income, arrayIncome);
                                               
            }else if(number==='11'){
                    cancelar(income,'i');
            }else{
                var posFinal=document.getElementById('i4').value;
                escribirCalculadora(posFinal, income ,arrayIncome, number, 'i4');
              
                }
            break;
        case 'inputNumber':
            cantRetiro=document.getElementsByName('retiro');
            arrayRetiro=[cantRetiro.length];
            
            for(var i=0; i<cantRetiro.length; i++){
            arrayRetiro[i]=cantRetiro[i].value;
            }
            if(number==='10'){
                
                    borrar( cantRetiro, arrayRetiro);
                                               
            }else if(number==='11'){
                    cancelar(cantRetiro,'f');
            }else{
                var posFinal=document.getElementById('f4').value;
                escribirCalculadora(posFinal, cantRetiro ,arrayRetiro, number,'f4');
              
                }   

          break;
    }
    
    

    
}

