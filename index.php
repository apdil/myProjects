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
<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Architects+Daughter" rel="stylesheet">

    <title>Explore</title>
</head>

<body>
    <!-- display link projects with ancre -->
    <nav id='linkBar' class='absolute'>
        <div id='projects' class='fixed flex column'>
                <?php foreach($dossiers as $dossier){ // get dir of projects
                    if($dossier === '.' || $dossier === '..'){ continue; }
                    $dir = scandir('projects/' . $dossier); 
                    foreach($dir as $file){ // get file of project
                        if($file === 'presentation.json'){ // user json for acces object
                            $projectObj = json_decode(file_get_contents('projects/'. $dossier. '/' .$file));?>
            <a class='ancre' href='#<?php echo $projectObj->name; ?>'><?php echo $projectObj->name; ?></a>
                <?php } } } ?>
            <div id='scrollTop' class='fixed'></div> 
            <div id='scrollBot' class='fixed'></div>  
        </div>
    </nav>

    <header class='flex jsContentSA fixed'>
        <h2><a href='#'>Je suis ..</a></h2> 
        <h2><a href='https://simplon.co/'><img id='simplonImg' src='img/logo-simplon.png'></a></h2>
    </header> 
    <main>
                <?php foreach($dossiers as $dossier){ // get dir of projects
                    if($dossier === '.' || $dossier === '..'){ continue; }
                    $dir = scandir('projects/' . $dossier); 
                    foreach($dir as $file){ // get file of project
                        if($file === 'presentation.json'){ // user json for acces object
                        $projectObj = json_decode(file_get_contents('projects/'. $dossier. '/' .$file)); 
                ?>

        <section id='<?php echo $projectObj->name; ?>' class='flex column jsContentSA'>
            <nav class='relative'>
                <h2 class='title1'><i><?php echo $projectObj->name; ?></i></h2>
                <div class='txtProject absolute txtCenter'><p><?php echo $projectObj->txt; ?></p></div>   
            </nav>
            <div class='presentProject relative'>
                <div class='bande flex alignItemsC absolute'>
                    <div class='toolsProject absolute'> <!-- display tools -->
                        <ul>
                            <?php foreach($projectObj->tools as $tool){ ?>
                            <li><?php echo $tool; ?></li>
                            <?php } ?>
                        </ul>
                    </div>
                     <div class='bandeBright'></div>
                </div>
                <div class='imgProject'>
                    <img class='image' src='projects/<?php echo $dossier ?>/img.png'>
                </div>
            </div>
        </section>        
                
                
                <?php } } } ?>
    </main>
    <script src='script/model/Color.js'></script>
    <script src='script/tab.js'></script>
    <script src='script/title1.js'></script>
    <script src='script/ribbonColor.js'></script>
    <script src='script/scroll.js'></script>
</body>

</html>