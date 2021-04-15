 

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function confirmaExclusao(aURL)
{
if(confirm('Você tem certeza que deseja excluir?'))
    location.href = aURL;
} 

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function MM_popupMsg(msg)
{
alert(msg);
} 

///////////////////////////////////////////////////////////////////////////////////////////////////////
function dateMask(inputData, e)
{
if(document.all) // Internet Explorer
var tecla = event.keyCode; 
else // Outros Browsers
var tecla = e.which;

if(tecla >= 47 && tecla < 58)
{
var data = inputData.value;
if (data.length == 2 || data.length == 5)
{
    data += '/';
    inputData.value = data;
}
}

else if(tecla == 8 || tecla == 0) // Backspace, Delete e setas direcionais(para mover o cursor, apenas para FF)
return true;
else
return false;
} 

///////////////////////////////////////////////////////////////////////////////////////////////////
function cpfMask(inputData, e)
{
if(document.all)
var tecla = event.keyCode;
else
var tecla = e.which;

if(tecla >= 47 && tecla < 58) // numeros de 0 a 9 e "/"
{ 
var data = inputData.value;
if (data.length == 3 || data.length == 7)
{
data += '.';
inputData.value = data;
}

if (data.length == 11)
{
data += '-';
inputData.value = data;
}
}
else 
if(tecla == 8 || tecla == 0) // Backspace, Delete e setas direcionais(para mover o cursor, apenas para FF)
return true;
else
return false;
} 

////////////////////////////////////////////////////////////////////////////////////////////////////
function cepMask(inputData, e)
{
if(document.all) 
var tecla = event.keyCode;
else
var tecla = e.which;

if(tecla >= 47 && tecla < 58)
{ 
var data = inputData.value;
if (data.length == 2)
{
data += '.';
inputData.value = data;
}

if (data.length == 6)
{
data += '-';
inputData.value = data;
}

}
else 
if(tecla == 8 || tecla == 0)
return true;
else
return false;

} 

///////////////////////////////////////////////////////////////////////////////////////////////////
function foneMask(inputData, e)
{
if(document.all)
var tecla = event.keyCode;
else 
var tecla = e.which;
var tam = 9;
if(tecla >= 47 && tecla < 58)
{
var data = inputData.value;

if(data.substr(0,6) == '(11) 9')
    tam = 10;


if (data.length == 0)
{
    data += '(';
    inputData.value = data;
}

if (data.length == 3)
{
    data += ') ';
    inputData.value = data;
}

if (data.length == tam)
{
    data += '-';
    inputData.value = data;
}
}
else 
if(tecla == 8 || tecla == 0)
    return true;
    else
    return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
function numerMask(inputData, e)
{
var x;
var aux;
var data = inputData.value;

if(document.all)
var tecla = event.keyCode;
else
var tecla = e.which;

if(data == '0,00')
data = '';
aux = '';
for(x=0; x < data.length; x++)
    if(data.charAt(x) != ',')
        if(data.charAt(x) != '.')
            aux += data.charAt(x);

data = aux;

if(tecla >= 47 && tecla < 58)
{
aux = '';
for(x=0; x < data.length; x++)
{
    if((x == (data.length - 1)) && (data.length != 1))
        aux += ',';
    if((x == (data.length - 4)) && (data.length != 4))
        aux += '.';
    if((x == (data.length - 7)) && (data.length != 7))
        aux += '.';
    aux += data.charAt(x);
}

inputData.value = aux;

}
else 
if(tecla == 8 || tecla == 0)
return true;
else
return false;

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function numerInt(inputData, e)
{
var x;
var aux;
var data = inputData.value;

if(document.all)
var tecla = event.keyCode;
else 
var tecla = e.which;

if(tecla >= 47 && tecla < 58)
return true; 
else 
if(tecla == 8 || tecla == 0)
    return true;
    else
    return false;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
function ValCpf(inputData, e)	
{
var cpf;
var data = inputData.value;
var Soma;
var Resto;
var aux = '';

cpf = data.replace(".", "");
cpf = cpf.replace(",", "");
cpf = cpf.replace("/", "");
cpf = cpf.replace("-", "");
cpf = cpf.replace(" ", "");
cpf = cpf.replace(".", "");

if (cpf == "00000000000") aux = 'Cpf Inv&aacute;lido';
if (cpf == "11111111111") aux = 'Cpf Inv&aacute;lido';
if (cpf == "22222222222") aux = 'Cpf Inv&aacute;lido';
if (cpf == "33333333333") aux = 'Cpf Inv&aacute;lido';
if (cpf == "44444444444") aux = 'Cpf Inv&aacute;lido';
if (cpf == "55555555555") aux = 'Cpf Inv&aacute;lido';
if (cpf == "66666666666") aux = 'Cpf Inv&aacute;lido';
if (cpf == "77777777777") aux = 'Cpf Inv&aacute;lido';
if (cpf == "88888888888") aux = 'Cpf Inv&aacute;lido';
if (cpf == "99999999999") aux = 'Cpf Inv&aacute;lido';

if(cpf.length < 11)
    aux = 'Cpf Invalido';

Soma = 0;
for (i=1; i<=9; i++)
    Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i); 

Resto = (Soma * 10) % 11;
if ((Resto == 10) || (Resto == 11)) 
   Resto = 0;

if (Resto != parseInt(cpf.substring(9, 10)) ) 
    aux = 'Cpf Inválido';

Soma = 0; 
for (i = 1; i <= 10; i++) 
    Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i); 

Resto = (Soma * 10) % 11; 
if ((Resto == 10) || (Resto == 11)) 
    Resto = 0; 

if (Resto != parseInt(cpf.substring(10, 11) ) ) 
    aux = 'Cpf n&atilde;o cadastrado na RF';
else
    aux = 'Cpf V&aacute;lido';

document.getElementById('texto_cpf').innerHTML = aux
}
