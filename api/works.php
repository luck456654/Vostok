<?php

//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);

header('Access-Control-Allow-Origin: *');
header("Content-type: application/json; charset=utf-8");
header('Access-Control-Allow-Headers: *');

$_POST = json_decode(file_get_contents('php://input'), true);

$msg_box = '';
$errors  = array();
$TEMP_ARR = array() // контейнер для ошибок
// проверяем корректность полей
if ($_POST['type'] == "work") {
  if ($_POST['url'] == "sovremennyj_remont_kvartiry-studii_60_m2"){
    $TEMP_ARR['link'] = 'sovremennyj_remont_kvartiry-studii_60_m2';
    $TEMP_ARR['title'] = 'Современный ремонт квартиры-студии 60 м2';
    $TEMP_ARR['disc'] = 'Для молодой семьи был выполнен капитальный ремонт двухкомнатной квартиры под ключ. Светлые тона, классическая мебель. Всё было согласовано с заказчиками за ранее и отражено в дизайн проекте. Квартира с ремонтом была сдана под ключ и во время';
    $TEMP_ARR['img'] = '/elements/examp1.jpg';
    $TEMP_ARR['surf'] = '60';
    $TEMP_ARR['room'] = '1';
    $TEMP_ARR['price'] = '578 000';
    $TEMP_ARR['time'] = '3 месяца';
    $TEMP_ARR['text'] = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed habitant lacus proin convallis. Placerat enim aliquam euismod tempus lobortis. Interdum hendrerit in sit aliquet eu. Etiam nulla et quis nisl, maecenas est lorem a arcu. Amet amet, egestas amet, metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
    //$TEMP_ARR['list1'] = [{name:'Маркерованный список'},{name:'Маркерованный список'},{name:'Маркерованный список'},{name:'Маркерованный список'},{name:'Маркерованный список'}];
    //$TEMP_ARR['list2'] = [{name:'Нумерованный список'},{name:'Нумерованный список'},{name:'Нумерованный список'},{name:'Нумерованный список'},{name:'Нумерованный список'}];
  }
}

echo json_encode($TEMP_ARR);
