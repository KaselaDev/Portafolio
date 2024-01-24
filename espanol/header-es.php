<?php
    echo '
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/styleRecursos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap" rel="stylesheet">
<style>
    *{
        margin: 0;
    }
    :root{
        --background: #260d33;
        --backHeader: #003f694f;
        --azulDark: #003f69;
        --azul: #106b87;
        --azulClaro: #157a8c;
        --gris: #b3aca4;
        --grisClaro: #dbc1a3;
    }
    /*Cambio de lenguaje*/
    .Lenguaje{
        background-color: var(--backHeader);
        font-family: system-ui;
    }
    .Leng{
        background-color: var(--gris);
        padding: 4px;
        width: 115px;
        position: relative;
        border-radius: 0 0 5px;
        z-index: 200;
    }
    .leng-img{
        position: relative;
        width: 15px;
        border-radius: 5px;
        top: 3px;
    }
    .menu-leng{
        background-color: var(--grisClaro);
        width: 85px;
        padding: 4px;
        border-radius: 0 0 5px;
        top: -57px;
        position: absolute;
        transition: 1s;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 20px;
        grid-row-gap: 5px;
        justify-items: stretch;
        align-items: stretch;
        z-index: 100;
    }
    .Leng-div:hover{
        position: relative;
        transition: 0.7s;
        transform: scale(1.15);
        left: 3px;
    }
    /*header*/
    header{
        background-color: var(--backHeader);
        padding: 75px 75px 20px 75px;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-column-gap: 20px;
        justify-items: stretch;
        align-items: stretch;
        font-family: "Inconsolata", monospace;
        color: black;
        text-decoration: none;
    }
    .Titulo a{
        color: black;
        text-decoration: none;
        font-size: 30px;
    }
    header img{
        border-radius: 50%;
    }
    .menu{
        display: grid;
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        justify-items: stretch;
        align-items: stretch;
    }
    .menu-op{
        top: -20px;
        position: relative;
        display: grid;
        grid-template-columns: 120px 120px 160px 120px;
        grid-column-gap: 20px;
    }
    .menu-op h2 a{
        text-decoration: none;
        position: absolute;
        font-size: 25px;
        color: black;
    }
h2 > a{
  text-decoration: none;
  color: rgba(0,0,0,.4);
  z-index: 1;
}

h2 > a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background: var(--azul);
  visibility: hidden;
  border-radius: 5px;
  transform: scaleX(0);
  transition: .25s linear;
}
h2 > a:hover:before,
h2 > a:focus:before {
  visibility: visible;
  transform: scaleX(1);
}
</style>
</head>
    <div class="Lenguaje">
    <div class="Leng" onclick="Leng()">
        <p>Lenguaje | es <img class="leng-img" src="/es.png"></p>
        
        
    </div>
    <div class="menu-leng" id="menu-leng">
        <div class="Leng-div"onclick="es()"><p>Español | <img class="leng-img" src="/es.png"></p></div>
        <div class="Leng-div"onclick="en()"><p>English | <img class="leng-img" src="/en.png"></p></div>
    </div>
</div>
<header>
    <a href="/espanol/index-es.html"><img src="/logo.jfif" alt=""width="200"></a>
    <div class="menu">
        <div class="Titulo"><a href="/espanol/index-es.html"><h1>Kasela</h1></a></div>
        <div class="menu-op">
            <h2><a href="">Project</a></h2>
            <h2><a href="">Trabajos</a></h2>
            <h2><a href="">Experiencia</a></h2>
            <h2><a href="">Contacto</a></h2>
        </div>
    </div>
</header>
<script>
    lengInter=0;
    menuLeng=document.getElementById("menu-leng");
    function Leng() {
        lengInter++;
        if(lengInter%2!=0){
            console.log("abre");
            menuLeng.style.top ="29px";
        }else{
            console.log("baja");
            menuLeng.style.top ="-57px";
        }
    }
    function es(){
        console.log("cambio a español");
    }
    function en(){
        console.log("cambio a ingles");
    }
</script>';
?>