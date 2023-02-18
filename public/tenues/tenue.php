<?php
error_reporting(E_ALL);
session_start();
session_name('hollandsevelden');

function __autoload($sClassName){
	if($sClassName == 'PclZip'){
		require_once($_SERVER['DOCUMENT_ROOT'].(substr($_SERVER['DOCUMENT_ROOT'],-1)=='/'?'':'/').'classes/pclzip.lib.php');
	}else{
		require_once($_SERVER['DOCUMENT_ROOT'].(substr($_SERVER['DOCUMENT_ROOT'],-1)=='/'?'':'/').'classes/'.$sClassName.'.class.php');
	}
}

function advRmdir($path, $sZip){
    $origipath = $path;
    $handler = opendir($path);
    while (true) {
        $item = readdir($handler);
        if ($item == "." or $item == ".." or $item == "tenue.php" or $item == $sZip) {
            continue;
        } elseif (gettype($item) == "boolean") {
            closedir($handler);
            if (!@rmdir($path)) {
                return false;
            }
            if ($path == $origipath) {
                break;
            }
            $path = substr($path, 0, strrpos($path, "/"));
            $handler = opendir($path);
        } elseif (is_dir($path."/".$item)) {
            closedir($handler);
            $path = $path."/".$item;
            $handler = opendir($path);
        } else {
            unlink($path."/".$item);
        }
    }
    return true;
}

if(!isset($_GET['comp'])){
	header('location: http://www.hollandsevelden.nl/404/');
	die('header(\'location: http://www.hollandsevelden.nl/404/\');');
}

$iCompId = htmlspecialchars(trim(strip_tags(substr($_GET['comp'], 4))));

$oDB = MySQL::connect();
$oRes = $oDB->query('SELECT t.`tenue` FROM `team-competition` tc, `team` t WHERE 
					tc.`compId` = \''.$iCompId.'\' AND
					tc.`teamId` = t.`prettyname`;');
$aData = array();
while($aTmp = $oDB->getArray($oRes)){
	$aData[] = $aTmp['tenue'];
}

if(!is_array($aData) || empty($aData)){
	header('location: http://www.hollandsevelden.nl/404/');
	die('header(\'location: http://www.hollandsevelden.nl/404/\');');
}
$aData = array_unique($aData);

$sTmpDir = $_SERVER['DOCUMENT_ROOT'].(substr($_SERVER['DOCUMENT_ROOT'],-1)=='/'?'':'/').'downloads/tenues/tenues-'.time().'-'.$iCompId;
if(!mkdir($sTmpDir)){
	header('location: http://www.hollandsevelden.nl/404/');
	die('header(\'location: http://www.hollandsevelden.nl/404/\');');
}

$sImgDir = $_SERVER['DOCUMENT_ROOT'].(substr($_SERVER['DOCUMENT_ROOT'],-1)=='/'?'':'/').'images/tenues/';
foreach($aData as $sTenue){
	if(is_file($sImgDir.'t_'.$sTenue.'.png')){
		copy($sImgDir.'t_'.$sTenue.'.png', $sTmpDir.'/t_'.$sTenue.'.png');
	}
}
copy($sImgDir.'t_0.png', $sTmpDir.'/t_0.png');
copy($_SERVER['DOCUMENT_ROOT'].(substr($_SERVER['DOCUMENT_ROOT'],-1)=='/'?'':'/').'downloads/readme.txt', $sTmpDir.'/readme.txt');


$oZip = new PclZip($sTmpDir.'.zip');
if($oZip->create($sTmpDir, PCLZIP_OPT_REMOVE_ALL_PATH) == 0){
	header('location: http://www.hollandsevelden.nl/404/');
	die('header(\'location: http://www.hollandsevelden.nl/404/\');');
}

advRmdir($_SERVER['DOCUMENT_ROOT'].(substr($_SERVER['DOCUMENT_ROOT'],-1)=='/'?'':'/').'downloads/tenues', substr($sTmpDir.'.zip', strrpos($sTmpDir, '/')+1));

header("Pragma: public");
header("Expires: 0");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Content-Type: application/force-download");
header("Content-Type: application/octet-stream", FALSE);
header("Content-Type: application/download", FALSE);
header("Content-Disposition: attachment; filename=".basename($sTmpDir.'.zip'));
header("Content-Transfer-Encoding: binary");
header("Content-Length: ".filesize($sTmpDir.'.zip'));
die(file_get_contents($sTmpDir.'.zip'));
?>