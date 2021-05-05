function tabela(){
    id_tabela.style.display= 'block';
    id_ajuda.style.display= 'none';
    icon_question.style.display= 'none';
    id_title.style.display= 'none';
    pergunta1.style.display= 'block';
    id_perg_volta.style.display= 'none';
}


function verificar(){
    
    var pergunta = pergunta_um.value;

    if(pergunta == "435055" || pergunta == "43 50 55"){
        span_cpu1.innerHTML = "43";
        span_cpu2.innerHTML = "50";
        span_cpu3.innerHTML = "55";
        pergunta_um_correta.style.display= 'block';
        pergunta_um.style.display= 'none';
        id_check.style.display= 'block';
        id_resp.style.display= 'none';
        id_prox.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'block';
    pergunta_dois.style.display= 'block';
    id_resp2.style.display= 'block';

}

function verificar2(){
    
    var per2 = pergunta_dois.value;

    if(per2 == "554C41" || per2 == "554c41" || per2 == "55 4C 41" || per2 == "55 4c 41"){
        span_ula1.innerHTML = "55";
        span_ula2.innerHTML = "4C";
        span_ula3.innerHTML = "41";
        pergunta_dois_correta.style.display= 'block';
        pergunta_dois.style.display= 'none';
        id_check2.style.display= 'block';
        id_resp2.style.display= 'none';
        id_prox2.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP2(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'block';
    pergunta_tres.style.display= 'block';
    id_resp3.style.display= 'block';

}

function verificar3(){
    
    var per3 = pergunta_tres.value;

    if(per3 == "52 45 47 49 53 54 52 41 44 4F 52 45 53" || per3 == "5245474953545241444F524553" || per3 == "5245474953545241444f524553" || per3 == "52 45 47 49 53 54 52 41 44 4f 52 45 53"){
        span_reg1.innerHTML = "52";
        span_reg2.innerHTML = "45";
        span_reg3.innerHTML = "47";
        span_reg4.innerHTML = "49";
        span_reg5.innerHTML = "53";
        span_reg6.innerHTML = "54";
        span_reg7.innerHTML = "52";
        span_reg8.innerHTML = "41";
        span_reg9.innerHTML = "44";
        span_reg10.innerHTML = "4F";
        span_reg11.innerHTML = "52";
        span_reg12.innerHTML = "45";
        span_reg13.innerHTML = "53";
        
        pergunta_tres_correta.style.display= 'block';
        pergunta_tres.style.display= 'none';
        id_check3.style.display= 'block';
        id_resp3.style.display= 'none';
        id_prox3.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP3(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'block';
    pergunta_quatro.style.display= 'block';
    id_resp4.style.display= 'block';

}

function verificar4(){
    
    var per4 = pergunta_quatro.value;

    if(per4 == "52 41 4D" || per4 == "52 41 4d" || per4 == "52414D" || per4 == "52414d"){
        span_ram1.innerHTML = "52";
        span_ram2.innerHTML = "41";
        span_ram3.innerHTML = "4D";
        
        pergunta_quatro_correta.style.display= 'block';
        pergunta_quatro.style.display= 'none';
        id_check4.style.display= 'block';
        id_resp4.style.display= 'none';
        id_prox4.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP4(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'block';
    pergunta_cinco.style.display= 'block';
    id_resp5.style.display= 'block';

}

function verificar5(){
    
    var per5 = pergunta_cinco.value;

    if(per5 == "52 4F 4D" || per5 == "52 4f 4d" || per5 == "524F4D" || per5 == "524f4d"){
        span_rom1.innerHTML = "52";
        span_rom2.innerHTML = "4F";
        span_rom3.innerHTML = "4D";
        
        pergunta_cinco_correta.style.display= 'block';
        pergunta_cinco.style.display= 'none';
        id_check5.style.display= 'block';
        id_resp5.style.display= 'none';
        id_prox5.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP5(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'block';
    pergunta_seis.style.display= 'block';
    id_resp6.style.display= 'block';

}

function verificar6(){
    
    var per6 = pergunta_seis.value;

    if(per6 == "4550524F4D" || per6 == "4550524f4d" || per6 == "45 50 52 4f 4d" || per6 == "45 50 52 4F 4D"){
        span_eprom1.innerHTML = "45";
        span_eprom2.innerHTML = "50";
        span_eprom3.innerHTML = "52";
        span_eprom4.innerHTML = "4F";
        span_eprom5.innerHTML = "4D";
        
        pergunta_seis_correta.style.display= 'block';
        pergunta_seis.style.display= 'none';
        id_check6.style.display= 'block';
        id_resp6.style.display= 'none';
        id_prox6.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP6(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'block';
    pergunta_sete.style.display= 'block';
    id_resp7.style.display= 'block';

}

function verificar7(){
    
    var per7 = pergunta_sete.value;

    if(per7 == "46 4C 41 53 48" || per7 == "46 4c 41 53 48" || per7 == "464C415348" || per7 == "464c415348"){
        span_flash1.innerHTML = "46";
        span_flash2.innerHTML = "4C";
        span_flash3.innerHTML = "41";
        span_adress9.innerHTML = "53";
        span_flash4.innerHTML = "48";
        
        pergunta_sete_correta.style.display= 'block';
        pergunta_sete.style.display= 'none';
        id_check7.style.display= 'block';
        id_resp7.style.display= 'none';
        id_prox7.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP7(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'block';
    pergunta_oito.style.display= 'block';
    id_resp8.style.display= 'block';

}

function verificar8(){
    
    var per8 = pergunta_oito.value;

    if(per8 == "4D 45 4D 4F 52 49 41 44 45 4D 41 53 53 41" || per8 == "4d 45 4d 4f 52 49 41 44 45 4d 41 53 53 41" || per8 == "4D454D4F52494144454D41535341" || per8 == "4d454d4f52494144454d41535341" ){
        span_memo1.innerHTML = "45";
        span_memo2.innerHTML = "4F";
        span_memo3.innerHTML = "49";
        span_memo4.innerHTML = "41";
        span_memo5.innerHTML = "44";
        span_memo6.innerHTML = "45";
        span_dma2.innerHTML = "4D";
        span_memo7.innerHTML = "41";
        span_memo8.innerHTML = "53";
        span_memo9.innerHTML = "53";
        span_memo10.innerHTML = "41";
        
        pergunta_oito_correta.style.display= 'block';
        pergunta_oito.style.display= 'none';
        id_check8.style.display= 'block';
        id_resp8.style.display= 'none';
        id_prox8.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP8(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'block';
    pergunta_nove.style.display= 'block';
    id_resp9.style.display= 'block';

}

function verificar9(){
    
    var per9 = pergunta_nove.value;

    if(per9 == "44 4D 41" || per9 == "44 4d 41" || per9 == "444D41" || per9 == "444d41"){
        span_dma1.innerHTML = "44";
        span_dma2.innerHTML = "4D";
        span_dma3.innerHTML = "41";
        
        pergunta_nove_correta.style.display= 'block';
        pergunta_nove.style.display= 'none';
        id_check9.style.display= 'block';
        id_resp9.style.display= 'none';
        id_prox9.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP9(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'block';
    pergunta_dez.style.display= 'block';
    id_resp10.style.display= 'block';

}

function verificar10(){
    
    var per10 = pergunta_dez.value;

    if(per10 == "4353" || per10 == "43 53"){
        span_cs1.innerHTML = "43";
        span_adress4.innerHTML = "53";
        
        
        pergunta_dez_correta.style.display= 'block';
        pergunta_dez.style.display= 'none';
        id_check10.style.display= 'block';
        id_resp10.style.display= 'none';
        id_prox10.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP10(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'none';
    pergunta11.style.display= 'block';
    pergunta_onze.style.display= 'block';
    id_resp11.style.display= 'block';

}

function verificar11(){
    
    var per11 = pergunta_onze.value;

    if(per11 == "41 44 44 52 45 53 53 42 55 53" || per11 == "41444452455353425553" ){
        span_adress1.innerHTML = "44";
        span_adress2.innerHTML = "44";
        span_adress3.innerHTML = "52";
        span_adress4.innerHTML = "45";
        span_adress5.innerHTML = "53";
        span_adress6.innerHTML = "53";
        span_adress7.innerHTML = "42";
        span_adress8.innerHTML = "55";
        span_adress9.innerHTML = "53";
        
        
        pergunta_onze_correta.style.display= 'block';
        pergunta_onze.style.display= 'none';
        id_check11.style.display= 'block';
        id_resp11.style.display= 'none';
        id_prox11.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP11(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'none';
    pergunta11.style.display= 'none';
    pergunta12.style.display= 'block';
    pergunta_doze.style.display= 'block';
    id_resp12.style.display= 'block';

}

function verificar12(){
    
    var per12 = pergunta_doze.value;

    if(per12 == "44 41 54 41 42 55 53" || per12 == "44415441425553"){
        span_databus1.innerHTML = "44";
        span_databus2.innerHTML = "41";
        span_databus3.innerHTML = "54";
        span_databus4.innerHTML = "41";
        span_databus5.innerHTML = "42";
        span_databus7.innerHTML = "53";
        
        
        pergunta_doze_correta.style.display= 'block';
        pergunta_doze.style.display= 'none';
        id_check12.style.display= 'block';
        id_resp12.style.display= 'none';
        id_prox12.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP12(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'none';
    pergunta11.style.display= 'none';
    pergunta12.style.display= 'none';
    pergunta13.style.display= 'block';
    pergunta_treze.style.display= 'block';
    id_resp13.style.display= 'block';

}

function verificar13(){
    
    var per13 = pergunta_treze.value;

    if(per13 == "4935" || per13 == "49 35"){
        span_i5.innerHTML = "35";
        
        pergunta_treze_correta.style.display= 'block';
        pergunta_treze.style.display= 'none';
        id_check13.style.display= 'block';
        id_resp13.style.display= 'none';
        id_prox13.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP11(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'none';
    pergunta11.style.display= 'none';
    pergunta12.style.display= 'block';
    pergunta_doze.style.display= 'block';
    id_resp12.style.display= 'block';

}


function proximaP13(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'none';
    pergunta11.style.display= 'none';
    pergunta12.style.display= 'none';
    pergunta13.style.display= 'none';
    pergunta14.style.display= 'block';
    pergunta_quatorze.style.display= 'block';
    id_resp14.style.display= 'block';

}

function verificar14(){
    
    var per14 = pergunta_quatorze.value;

    if(per14 == "49 37" || per14 == "4937"){
        span_i7.innerHTML = "37";
        
        pergunta_quatorze_correta.style.display= 'block';
        pergunta_quatorze.style.display= 'none';
        id_check14.style.display= 'block';
        id_resp14.style.display= 'none';
        id_prox14.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}

function proximaP14(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'none';
    pergunta11.style.display= 'none';
    pergunta12.style.display= 'none';
    pergunta13.style.display= 'none';
    pergunta14.style.display= 'none';
    pergunta15.style.display= 'block';
    pergunta_quinze.style.display= 'block';
    id_resp15.style.display= 'block';

}

function verificar15(){
    
    var per15 = pergunta_quinze.value;

    if(per15 == "44 55 41 4C 43 4F 52 45" || per15 == "4455414C434F5245" || per15 == "4455414c434f5245" || per15 == "44 55 41 4c 43 4f 52 45"){
        span_dual1.innerHTML = "55";
        span_dual2.innerHTML = "41";
        span_dual3.innerHTML = "4C";
        span_dual4.innerHTML = "43";
        span_dual5.innerHTML = "4F";
        span_dual6.innerHTML = "52";
        
        pergunta_quinze_correta.style.display= 'block';
        pergunta_quinze.style.display= 'none';
        id_check15.style.display= 'block';
        id_resp15.style.display= 'none';
        id_prox15.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}
function proximaP15(){
    pergunta1.style.display= 'none';
    pergunta2.style.display= 'none';
    pergunta3.style.display= 'none';
    pergunta4.style.display= 'none';
    pergunta5.style.display= 'none';
    pergunta6.style.display= 'none';
    pergunta7.style.display= 'none';
    pergunta8.style.display= 'none';
    pergunta9.style.display= 'none';
    pergunta10.style.display= 'none';
    pergunta11.style.display= 'none';
    pergunta12.style.display= 'none';
    pergunta13.style.display= 'none';
    pergunta14.style.display= 'none';
    pergunta15.style.display= 'none';
    pergunta16.style.display= 'block';
    pergunta_dezeseis.style.display= 'block';
    id_resp16.style.display= 'block';

}

function verificar16(){
    
    var per16 = pergunta_dezeseis.value;

    if(per16 == "51 55 41 44 43 4F 52 45" || per16 == "51 55 41 44 43 4f 52 45" || per16 == "51554144434f5245" || per16 == "51554144434F5245"){
        span_quad1.innerHTML = "51";
        span_quad2.innerHTML = "55";
        span_ula3.innerHTML = "41";
        span_quad3.innerHTML = "44";
        span_cpu1.innerHTML = "43";
        span_quad4.innerHTML = "4F";
        span_reg1.innerHTML = "52";
        span_quad5.innerHTML = "45";
        
        pergunta_dezeseis_correta.style.display= 'block';
        pergunta_dezeseis.style.display= 'none';
        id_check16.style.display= 'block';
        id_resp16.style.display= 'none';
        id_prox16.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}