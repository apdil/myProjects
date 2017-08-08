<?php
$dossiers = scandir('projects');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Explore</title>
</head>

<body>
    <!-- <header class='fixed width100 height100 flex jsContentEnd'>
        <a href="#">Je</a>
        <a href="#">Simplon</a>
    </header>   -->
    <nav class='fixed width100 height100 flex column alignItems jsContentCenter'>
        <?php foreach($dossiers as $dossier){ // get dir of projects
                if($dossier === '.' || $dossier === '..'){ continue; }
                $dir = scandir('projects/' . $dossier); 
                foreach($dir as $file){ // get file of project
                    if($file === 'presentation.json'){ // user json for acces object
                        $projectObj = json_decode(file_get_contents('projects/'. $dossier. '/' .$file));?>
        <!-- create link with ancre -->
        <a href='#<?php echo $projectObj->name; ?>'><h5><?php echo $projectObj->name; ?></h5></a>
                    <?php } } } ?>
    </nav>
    <main>
        <?php foreach($dossiers as $dossier){ // get dir of projects
                if($dossier === '.' || $dossier === '..'){ continue; }
                $dir = scandir('projects/' . $dossier); 
                foreach($dir as $file){ // get file of project
                    if($file === 'presentation.json'){ // user json for acces object
                        $projectObj = json_decode(file_get_contents('projects/'. $dossier. '/' .$file));?>
        <!-- use link with ancre -->
        <section id='<?php echo $projectObj->name; ?>' class='height100'>
            <div class='flex'>
                <h2><?php echo $projectObj->name; ?></h2><!-- name of the section -->
                <div> <!-- display tools -->
                    <h5>outils utilisés :</h5>
                    <ul>
                        <?php foreach($projectObj->tools as $tool){ ?> <!-- loop in tab tools -->
                        <li><?php echo $tool; ?></li>
                        <?php } ?>
                    </ul>
                </div>
                <h5>Duree de la formation à la création:</h5>
                <p><?php echo $projectObj->trainingTime; ?></p>
            </div>
            <div class='img'><img src='projects/<?php echo $dossier ?>/img.png'></div>
        </section>
                <?php } } } ?>
    </main>
</body>

</html>