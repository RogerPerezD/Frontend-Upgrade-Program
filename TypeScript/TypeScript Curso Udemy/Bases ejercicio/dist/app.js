"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    let FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        FuerzaHeroes[FuerzaHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        FuerzaHeroes[FuerzaHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        FuerzaHeroes[FuerzaHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    console.log(FuerzaHeroes.fuerzaAcuaman, FuerzaHeroes.fuerzaSuperman);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '1000';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
