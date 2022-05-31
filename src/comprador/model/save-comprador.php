<?php

$requestData = $_REQUEST;

if(empty($requestData['NOME']) && empty($requestData['CELULAR'])){
    $dadosRetorno = array(
        'tipo' => 'error',
        'mensagem' => 'Existe(m) campo(s) obrigatorio(s) não preenchido(s)'
    );
}else{

    $ID = isset($requestData['ID']) ? $requestData['ID'] : "";
    $operacao = isset($requestData['operacao']) : $requestData
}



echo json_encode($dadosRetorno);
