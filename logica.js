document.getElementById('informacion').addEventListener('click',function(){
    document.getElementById('contenedorInfo').style.display='block';
    document.getElementById('contenedorForm').style.display='none';
    document.getElementById('contenedorInformatica').style.display='none';
    document.getElementById('contenedorObj').style.display='none';
});

document.getElementById('formación').addEventListener('click',function(){
    document.getElementById('contenedorForm').style.display='block';
    document.getElementById('contenedorInfo').style.display='none';
    document.getElementById('contenedorInformatica').style.display='none';
    document.getElementById('contenedorObj').style.display='none';
});

document.getElementById('informatica').addEventListener('click',function(){
    document.getElementById('contenedorInformatica').style.display='block';
    document.getElementById('contenedorForm').style.display='none';
    document.getElementById('contenedorInfo').style.display='none';
    document.getElementById('contenedorObj').style.display='none';
});