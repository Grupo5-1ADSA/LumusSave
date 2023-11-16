


    // JavaScript para exibir a data atual
    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Os meses em JavaScript começam de 0 (janeiro) a 11 (dezembro)
    var ano = dataAtual.getFullYear();

    var dataFormatada = dia + '/' + mes + '/' + ano;

    document.getElementById('data-atual').textContent += dataFormatada;


// Pop up com os resultados

function fechar() {
    document.getElementById('div_resultado').style.display = 'none';
}


 // Calculadora

    function calcularResultado() {
        var qtdLampadas = Number(input_qtdLampadas.value);
        var tipoLampada = select_tipoLampada.value;
        var plano = select_Plano.value;
        var horarioAbertura = Number(input_abertura.value);
        var horarioFechamento = Number(input_fechamento.value);
        var horasDeUso = horarioFechamento - horarioAbertura;
        var textoFinal = ``;

        var custoKWH = 0.85;
        // 85 CENTAVOS CADA KWH

        var custoLampadaInteligente = qtdLampadas * 30;
        // DEFINIMOS COMO 30 REAIS O CUSTO DE CADA LÂMPADA INTELIGENTE

        var custo_incandescente = (qtdLampadas * (60 * horasDeUso / 1000) * 30) * custoKWH;
        // KWH MENSAL: (qtdLampadas * (60W * HORAS DE USO DIÁRIAS / 1000) * 30 DIAS )* 0.85 (PREÇO KWH)

        var custo_fluorescente = (qtdLampadas * (20 * horasDeUso / 1000) * 30) * custoKWH;

        // FLUORESCENTE JÁ GASTA 3 VEZES MENOS EM RELAÇÃO À INCANDESCENTE
        //  KWH MENSAL: (qtdLampadas * (20W * HORAS DE USO DIÁRIAS / 1000) *30 )* 0.85

        var custo_LED = (qtdLampadas * (10 * horasDeUso / 1000) * 30) * custoKWH;

        // LED JÁ GASTA 6 VEZES MENOS EM RELAÇÃO À INCANDESCENTE
        //  KWH MENSAL: (qtdLampadas(10W * HORAS DE USO DIÁRIAS / 1000) *30 )* 0.85


        var relacaoInteligente_Incandescente = custo_incandescente * 0.10;
        // A LÂMPADA INTELIGENTE GASTA 90% MENOS ENERGIA EM RELAÇÃO À LÂMPADA INCANDESCENTE
        var economiaMensalIncandescente = custo_incandescente - relacaoInteligente_Incandescente;

        var relacaoInteligente_Fluorescente = custo_fluorescente * 0.35;
        // A LÂMPADA INTELIGENTE GASTA 65% MENOS ENERGIA EM RELAÇÃO Á LÂMPADA FLUORESCENTE
        var economiaMensalFluorescente = custo_fluorescente - relacaoInteligente_Fluorescente;

        var relacaoInteligente_LED = custo_LED * 0.75;
        // A LÂMPADA INTELIGENTE GASTA 25% MENOS ENERGIA EM RELAÇÃO À LÂMPADA LED CONVENCIONAL
        var economiaMensalLED = custo_LED - relacaoInteligente_LED;


        var calculoLucroIncandescente = custoLampadaInteligente / economiaMensalIncandescente;
        var calculoLucroFluorescente = custoLampadaInteligente / economiaMensalFluorescente;
        var calculoLucroLED = custoLampadaInteligente / economiaMensalLED;

        var custoAtual = 0;
        var economiaValorFinal = 0;
        var economiaDiferenca = 0;
        var mesesLucro = 0;

        if (qtdLampadas<=0){
            alert(`Você precisa ter ao menos 1 lâmpada`)
        } else if(tipoLampada == `vazio`) {
            alert(`Selecione o seu tipo de lâmpada`)
        } 
        else if (plano == `vazio`){
            alert(`Selecione um de nossos planos, você poderá alterar depois`)
        } else if (horasDeUso<=0 || horasDeUso>23 || horarioAbertura <0 || horarioFechamento >23) {
             alert(`O horário de abertura/fechamento está incorreto`)
        } else {
            document.getElementById('div_resultado').style.display = 'flex';

            if(plano == `PlanoAnual`){
                plano = `Plano anual R$240/Ano || <b> R$20/Mês </b>`;
            } else if(plano == `PlanoSemestral`){
                plano = `Plano semestral R$324/Ano || <b> R$27/Mês </b> `
            } else{
                plano = `Plano Mensal R$360/Ano || <b> R$30/Mês </b>`
            }           
//   Caso a pessoa não opte pelo Anual ou Semestral, caira no mensal!


             if (tipoLampada == `Incandescente`){
                custoAtual = custo_incandescente;
                economiaValorFinal = economiaMensalIncandescente;
                economiaDiferenca = custoAtual - economiaMensalIncandescente;
                mesesLucro = calculoLucroIncandescente;

             } else if(tipoLampada == `Fluorescente`){
                custoAtual=custo_fluorescente;
                economiaValorFinal = economiaMensalFluorescente;
                economiaDiferenca = custoAtual - economiaMensalFluorescente;
                mesesLucro = calculoLucroFluorescente;

             } else { 
                custoAtual = custo_LED;
                economiaValorFinal = economiaMensalLED;
                economiaDiferenca = custoAtual - economiaMensalLED;
                mesesLucro = calculoLucroLED;
             };
// Se não for lampada incandescente ou fluorescente, só resta ser LED

            //  if()



            textoFinal =
             `
             <h2> Venha negociar conosco! </h2>
                
            <div class="divisaoResultado">Tempo de funcionamento: ${horasDeUso}h  || Plano escolhido: ${plano}
            </div>
            <div class="divisaoResultado"> Você gasta aproximadamente R$${custoAtual.toFixed(2)}
                mensalmente com suas lâmpadas atuais. 
                <br>
                Com lâmpadas inteligentes você gastaria R$<b>${economiaValorFinal.toFixed(2)}</b> pelo mesmo consumo!
                <br>
                    Uma economia de <b>R$${economiaDiferenca.toFixed(1)}</b> por mês.
                <br>
                 Para adquiri-las você investirá cerca de R$${custoLampadaInteligente.toFixed(2)} porém, no máximo em <b>${parseInt(mesesLucro)} meses você começará a ter <u>lucro!</span></u>
            </div>
            <h3> Com nosso produto, você potencializa até 30% sua economia</h3>
            <div class="divisaoResultado"> Para mais informações, entre em contato conosco através dos meios abaixo</div>
            `;

            div_informacao.innerHTML = textoFinal
         }
        

    }
