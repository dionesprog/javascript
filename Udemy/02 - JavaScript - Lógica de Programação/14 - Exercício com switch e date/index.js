/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dataStyle: 'full', timestyle: 'short'});


function getDiaSemana(diaSemana){
    let diaSemanaTexto;
    
    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
            case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
            case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
            case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
            case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
            case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
            case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
            default:
                diaSemanaTexto = '';
    }
    }

    function getDiaSemana(numeroMEs){
        let nomeMes;
        
        switch (numeroMEs{
            case 0:
                nomeMes = 'janeiro';
                return diaSemanaTexto;
                case 1:
                nomeMes = 'feveiro';
                return diaSemanaTexto;
                case 2:
                nomeMes = 'março';
                return diaSemanaTexto;
                case 3:
                nomeMes = 'abril';
                return diaSemanaTexto;
                case 4:
                nomeMes = 'maio';
                return diaSemanaTexto;
                case 5:
                nomeMes = 'junho';
                return diaSemanaTexto;
                case 6:
                nomeMes = 'julho';
                return nomeMes;
                case 7:
                nomeMes = 'agosto';
                return nomeMes;
                case 8:
                nomeMes = 'setembro';
                return nomeMes;
                case 9:
                nomeMes = 'outubro';
                return nomeMes;
                case 10:
                nomeMes = 'novembro';
                return nomeMes;
                case 11:
                nomeMes = 'dezembro';
                return nomeMes;
                default:
                    nomeMes = '';
        }
        }

        function criaData(data) {
            const diaSemana = data.getDay();
            const numeroMEs = data.getMonth();
            const nomeDia = getDiaSemana(diaSemana);
            const nomeMes = getNomeMes (numeroMEs);

            return (
                `${nomeDia}, ${data.getDate()} de ${nomeMes}` + 
                `de ${data.getFullYear()} ${data.getHours}:${data.getMinutes} `
            )
        }
    
    h1.innerHTML = criaData(data);
 */

    const h1 = document.querySelector('.container h1');
    const data = new Date();
    h1.innerHTML = data.toLocaleDateString('pt-BR',{ dateStyle: 'full'});
    
