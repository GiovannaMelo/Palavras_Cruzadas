function verificar(){
    
    var pergunta = pergunta_um.value;

    if(pergunta == "CPU" || pergunta == "cpu" || pergunta == "Cpu"){
        span_cpu1.innerHTML = "C";
        span_cpu2.innerHTML = "P";
        span_cpu3.innerHTML = "U";
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

    if(per2 == "ULA" || per2 == "ula" || per2 == "Ula"){
        span_ula1.innerHTML = "U";
        span_ula2.innerHTML = "L";
        span_ula3.innerHTML = "A";
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

    if(per3 == "REGISTRADORES" || per3 == "registradores" || per3 == "Registradores"){
        span_reg1.innerHTML = "R";
        span_reg2.innerHTML = "E";
        span_reg3.innerHTML = "G";
        span_reg4.innerHTML = "I";
        span_reg5.innerHTML = "S";
        span_reg6.innerHTML = "T";
        span_reg7.innerHTML = "R";
        span_reg8.innerHTML = "A";
        span_reg9.innerHTML = "D";
        span_reg10.innerHTML = "O";
        span_reg11.innerHTML = "R";
        span_reg12.innerHTML = "E";
        span_reg13.innerHTML = "S";
        
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

    if(per4 == "RAM" || per4 == "ram" || per4 == "Ram"){
        span_ram1.innerHTML = "R";
        span_ram2.innerHTML = "A";
        span_ram3.innerHTML = "M";
        
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

    if(per5 == "ROM" || per5 == "rom" || per5 == "Rom"){
        span_rom1.innerHTML = "R";
        span_rom2.innerHTML = "O";
        span_rom3.innerHTML = "M";
        
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

    if(per6 == "EPROM" || per6 == "eprom" || per6 == "Eprom"){
        span_eprom1.innerHTML = "E";
        span_eprom2.innerHTML = "P";
        span_eprom3.innerHTML = "R";
        span_eprom4.innerHTML = "O";
        span_eprom5.innerHTML = "M";
        
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

    if(per7 == "FLASH" || per7 == "flash" || per7 == "Flash"){
        span_flash1.innerHTML = "F";
        span_flash2.innerHTML = "L";
        span_flash3.innerHTML = "A";
        span_adress9.innerHTML = "S";
        span_flash4.innerHTML = "H";
        
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

    if(per8 == "MEMÓRIA DE MASSA" || per8 == "memoria de massa" || per8 == "Memoria de massa" || per8 == "MEMORIA DE MASSA" ){
        span_memo1.innerHTML = "E";
        span_memo2.innerHTML = "O";
        span_memo3.innerHTML = "I";
        span_memo4.innerHTML = "A";
        span_memo5.innerHTML = "D";
        span_memo6.innerHTML = "E";
        span_dma2.innerHTML = "M";
        span_memo7.innerHTML = "A";
        span_memo8.innerHTML = "S";
        span_memo9.innerHTML = "S";
        span_memo10.innerHTML = "A";
        
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

    if(per9 == "DMA" || per9 == "dma" || per9 == "Dma"){
        span_dma1.innerHTML = "D";
        span_dma2.innerHTML = "M";
        span_dma3.innerHTML = "A";
        
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

    if(per10 == "CS" || per10 == "cs" || per10 == "Cs"){
        span_cs1.innerHTML = "C";
        span_adress4.innerHTML = "S";
        
        
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

    if(per11 == "ADDRESS BUS" || per11 == "address bus" || per11 == "Address bus"){
        span_adress1.innerHTML = "D";
        span_adress2.innerHTML = "D";
        span_adress3.innerHTML = "R";
        span_adress4.innerHTML = "E";
        span_adress5.innerHTML = "S";
        span_adress6.innerHTML = "S";
        span_adress7.innerHTML = "B";
        span_adress8.innerHTML = "U";
        span_adress9.innerHTML = "S";
        
        
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

    if(per12 == "DATA BUS" || per12 == "data bus" || per12 == "Data bus"){
        span_databus1.innerHTML = "D";
        span_databus2.innerHTML = "A";
        span_databus3.innerHTML = "T";
        span_databus4.innerHTML = "A";
        span_databus5.innerHTML = "B";
        span_databus7.innerHTML = "S";
        
        
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

    if(per13 == "I5" || per13 == "i5"){
        span_i5.innerHTML = "5";
        
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

function verificar12(){
    
    var per12 = pergunta_doze.value;

    if(per12 == "DATA BUS" || per12 == "data bus" || per12 == "Data bus"){
        span_databus1.innerHTML = "D";
        span_databus2.innerHTML = "A";
        span_databus3.innerHTML = "T";
        span_databus4.innerHTML = "A";
        span_databus5.innerHTML = "B";
        span_databus7.innerHTML = "S";
        
        
        pergunta_doze_correta.style.display= 'block';
        pergunta_doze.style.display= 'none';
        id_check12.style.display= 'block';
        id_resp12.style.display= 'none';
        id_prox12.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
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

    if(per14 == "I7" || per14 == "i7"){
        span_i7.innerHTML = "7";
        
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

    if(per15 == "DUAL CORE" || per15 == "dual core" || per15 == "Dual core"){
        span_dual1.innerHTML = "U";
        span_dual2.innerHTML = "A";
        span_dual3.innerHTML = "L";
        span_dual4.innerHTML = "C";
        span_dual5.innerHTML = "O";
        span_dual6.innerHTML = "R";
        
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

    if(per16 == "QUAD CORE" || per16 == "quad core" || per16 == "Quad core"){
        span_quad1.innerHTML = "Q";
        span_quad2.innerHTML = "U";
        span_ula3.innerHTML = "A";
        span_quad3.innerHTML = "D";
        span_cpu1.innerHTML = "C";
        span_quad4.innerHTML = "O";
        span_reg1.innerHTML = "R";
        span_quad5.innerHTML = "E";
        
        pergunta_dezeseis_correta.style.display= 'block';
        pergunta_dezeseis.style.display= 'none';
        id_check16.style.display= 'block';
        id_resp16.style.display= 'none';
        id_prox16.style.display= 'block';
    }else{
        alert ('Resposta Incorreta, Tente novamente!');
    }
}