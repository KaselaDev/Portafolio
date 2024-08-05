function actualizarTiempo() {
    const fechaPasada = new Date('2024-08-03T18:55:00');
    const fechaActual = new Date();

    const diferencia = fechaActual - fechaPasada;

    const segundosTotales = Math.floor(diferencia / 1000);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const horasTotales = Math.floor(minutosTotales / 60);
    const diasTotales = Math.floor(horasTotales / 24);

    const segundos = segundosTotales % 60;
    const minutos = minutosTotales % 60;
    const horas = horasTotales % 24;

    vidaDias.innerHTML = diasTotales;
    vidaHora.innerHTML = `${numerosDoble(horas)}:${numerosDoble(minutos)}:${numerosDoble(segundos)}`;
}

function numerosDoble(num) {
    if (num < 10) {
        return "0"+num;
    }
    return num;
}

setInterval(actualizarTiempo, 1000);

actualizarTiempo();