
<?php

//sql connection to database
$conn = mysqli_connect("localhost", "root", "", "gslchatbot") or die("Database Connection Error!");

$getAns = mysqli_real_escape_string($conn,$_POST['text']);

$check_query = "SELECT answers FROM knowledge_base WHERE questions LIKE '%$getAns%'";
$execute_query = mysqli_query($conn,$check_query) or die("Error while executing query!");

if(mysqli_num_rows($execute_query) > 0){
    $fetch_data = mysqli_fetch_assoc($execute_query);
    $reply = $fetch_data['answers'];
    echo $reply;
}else{ 

    echo "Sorry, i am unable to understand your query.";
}




?>