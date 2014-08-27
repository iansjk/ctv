<?php 
$lastrow = false;


header('Content-Type: text/plain; charset=utf-8');
$dir = "tmp/";
move_uploaded_file($_FILES["file"]["tmp_name"], $dir. $_FILES["file"]["name"]);
$file_name = $dir. $_FILES["file"]["name"];
  $mimes = array('application/vnd.ms-excel','text/plain','text/csv','text/tsv');
     $validate = "pass";
     if(in_array($_FILES['file']['type'],$mimes)){
	 $validate = "pass";
	  $file_handle = fopen("$file_name", "r");
	  //check number of compounds
	  $row = 0;
	  $msg = '';
	  $compound = array();
	 
	  while (($record = fgetcsv($file_handle)) !== FALSE) {
      $compound[] = $record;
	  $row++;
      }
	  fclose($file_handle);
	  if($row > 10)
	  {
	    $msg = "Number of compounds exceed maximum value allowed";
		$validate = "fail";
	  }
    } 
	
	
	else {
	   $validate = "fail";
       $msg = "Invalid file format. Please upload csv file";
}
    if($validate == "pass")
    $msg = "Multiple compound assesment is undergoing maintenance, please check back later";	
     echo"$msg";

?>


