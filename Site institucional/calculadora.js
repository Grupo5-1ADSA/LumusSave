


    // JavaScript para exibir a data atual
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam de 0 (janeiro) a 11 (dezembro)
    var ano = dataAtual.getFullYear();

    var dataFormatada = dia + '/' + mes + '/' + ano;

    document.getElementById('data-atual').textContent += dataFormatada;

    // Calculadora

    function calcularResultado() {
        var qtdLampadas = Number(input_qtdLampadas.value);
        var tipoLampada = select_tipoLampada.value;
        var Plano = select_Plano.value;
        var horarioAbertura = Number(input_abertura.value);
        var horarioFechamento = Number(input_fechamento.value);
        var horasDeUso = horarioFechamento - horarioAbertura;


        var custoKWH = 0.85;
        // 85 CENTAVOS CADA KWH
        var custoLampadaInteligente = qtdLampadas * 30;
        // DEFINIMOS COMO 30 REAIS O CUSTO DE CADA LÂMPADA INTELIGENTE

        var custo_incandescente = qtdLampadas * 60 * horasDeUso / 1000 * 30 * custoKWH;
        // KWH MENSAL: (qtdLampadas * (60W * HORAS DE USO DIÁRIAS / 1000) * 30 DIAS )* 0.85 (PREÇO KWH)

        var custo_fluorescente = qtdLampadas * 20 * horasDeUso / 1000 * 30 * custoKWH;

        // FLUORESCENTE JÁ GASTA 3 VEZES MENOS EM RELAÇÃO À INCANDESCENTE
        //  KWH MENSAL: (qtdLampadas * (20W * HORAS DE USO DIÁRIAS / 1000) *30 )* 0.85

        var custo_LED = qtdLampadas * 10 * horasDeUso / 1000 * 30 * custoKWH;

        // LED JÁ GASTA 6 VEZES MENOS EM RELAÇÃO À INCANDESCENTE
        //  KWH MENSAL: (qtdLampadas(10W * HORAS DE USO DIÁRIAS / 1000) *30 )* 0.85


        var porcentagemIncandescente = custo_incandescente * 0.10;
        // A LÂMPADA INTELIGENTE GASTA 90% MENOS ENERGIA EM RELAÇÃO À LÂMPADA INCANDESCENTE
        var economiaMensalIncandescente = custo_incandescente - porcentagemIncandescente;

        var porcentagemFluorescente = custo_fluorescente * 0.35;
        // A LÂMPADA INTELIGENTE GASTA 65% MENOS ENERGIA EM RELAÇÃO Á LÂMPADA FLUORESCENTE
        var economiaMensalFluorescente = custo_fluorescente - porcentagemFluorescente;

        var porcentagemLED = custo_LED * 0.75;
        // A LÂMPADA INTELIGENTE GASTA 25% MENOS ENERGIA EM RELAÇÃO À LÂMPADA LED CONVENCIONAL
        var economiaMensalLED = custo_LED - porcentagemLED;


        var calculoLucroIncandescente = custoLampadaInteligente / economiaMensalIncandescente;
        var calculoLucroFluorescente = custoLampadaInteligente / economiaMensalFluorescente;
        var calculoLucroLED = custoLampadaInteligente / economiaMensalLED;


        if (horarioFechamento > horarioAbertura && horarioFechamento > 0 && horarioFechamento < 24 && horarioAbertura > 0 && horarioAbertura < 24) {
            if (qtdLampadas > 0) {

                // PLANO MENSAL (R$40)
                if (Plano == 'PlanoMensal') {

                    if (tipoLampada == 'Incandescente') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b> ${horasDeUso}h </b> || Plano escolhido: <b>Plano Mensal</b> || Custo mensal: R$<b>40</b> <br>
                    Você gasta cerca de R$<b>${custo_incandescente.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemIncandescente.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$<b>${economiaMensalIncandescente.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b>${calculoLucroIncandescente.toFixed(0)} meses </b> você começará a ter lucro! <br><br> <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }

                    if (tipoLampada == 'Fluorescente') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b>${horasDeUso}h </b><br>  Plano escolhido: <b>Plano Mensal</b> || Custo mensal: R$<b>40</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_fluorescente.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemFluorescente.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$<b>${economiaMensalFluorescente.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b>${calculoLucroFluorescente.toFixed(0)} meses </b> você começará a ter lucro! <br><br> <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                    if (tipoLampada == 'LED') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b>${horasDeUso}h </b><br> Plano escolhido: <b>Plano Mensal</b> || Custo mensal: R$<b>40</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_LED.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemLED.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$ <b>${economiaMensalLED.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b> ${calculoLucroLED.toFixed(0)} meses </b> você começará a ter lucro! <br><br>
                    <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                }

                // PLANO SEMESTRAL (R$180)
                if (Plano == 'PlanoSemestral') {

                    if (tipoLampada == 'Incandescente') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b> ${horasDeUso}h </b><br> Plano escolhido: <b>Plano Semestral</b> || Custo semestral: R$<b>180 (R$30/mês)</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_incandescente.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemIncandescente.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$<b>${economiaMensalIncandescente.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b>${calculoLucroIncandescente.toFixed(0)} meses </b> você começará a ter lucro! <br><br>  <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                    if (tipoLampada == 'Fluorescente') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b>${horasDeUso}h </b><br> Plano escolhido: <b>Plano Semestral</b> || Custo semestral: R$<b>180 (R$30/mês)</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_fluorescente.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemFluorescente.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$<b>${economiaMensalFluorescente.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b>${calculoLucroFluorescente.toFixed(0)} meses </b> você começará a ter lucro! <br><br> <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                    if (tipoLampada == 'LED') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b>${horasDeUso}h </b><br> Plano escolhido: <b>Plano Semestral</b> || Custo semestral: R$<b>180 (R$30/mês)</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_LED.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemLED.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$ <b>${economiaMensalLED.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b> ${calculoLucroLED.toFixed(0)} meses </b> você começará a ter lucro! <br><br>
                    <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                }

                // PLANO ANUAL (R$300)
                if (Plano == 'PlanoAnual') {

                    if (tipoLampada == 'Incandescente') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b> ${horasDeUso}h </b><br> Plano escolhido: <b>Plano Anual</b> || Custo anual: R$<b>300 (R$25/mês)</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_incandescente.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemIncandescente.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$<b>${economiaMensalIncandescente.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b>${calculoLucroIncandescente.toFixed(0)} meses </b> você começará a ter lucro! <br><br>  <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                    if (tipoLampada == 'Fluorescente') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b>${horasDeUso}h </b><br> Plano escolhido: <b>Plano Anual</b> || Custo anual: R$<b>300 (R$25/mês)</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_fluorescente.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemFluorescente.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$<b>${economiaMensalFluorescente.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b>${calculoLucroFluorescente.toFixed(0)} meses </b> você começará a ter lucro! <br><br>  <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                    if (tipoLampada == 'LED') {
                        div1.innerHTML = `
                    Tempo de funcionamento: <b>${horasDeUso}h </b><br> Plano escolhido: <b>Plano Anual</b> || Custo anual: R$<b>300 (R$25/mês)</b>  <br><br>
                    Você gasta cerca de R$<b>${custo_LED.toFixed(2)}</b> mensalmente com suas lâmpadas atuais. Com as lâmpadas inteligentes você gastaria apenas R$<b>${porcentagemLED.toFixed(2)}</b> pelo mesmo consumo e teria uma economia de R$ <b>${economiaMensalLED.toFixed(2)}</b> por mês.<br> Para adquiri-las você investirá cerca de R$<b>${custoLampadaInteligente.toFixed(2)}</b> e dentro de <b> ${calculoLucroLED.toFixed(0)} meses </b> você começará a ter lucro! <br><br>
                    <b>Para mais informações, entre em contato conosco através da página inicial!</b>
                    `
                    }
                }

            } else (
                alert(`Quantidade de lâmpadas inválida! Tente novamente`)
            )
        } else (
            alert(`Horário de abertura e/ou fechamento inválidos! Tente novamente`)
        )

        document.getElementById('div_resultado').style.display = 'flex';
    }


// Pop up com os resultados

document.getElementById('botao_calculadora').addEventListener('click', calcularResultado);

function fechar() {
    document.getElementById('div_resultado').style.display = 'none';
}