
<?php

//sql connection to database
$conn = mysqli_connect("localhost", "root", "", "gslchatbot") or die("Database Connection Error!");

$getAns = mysqli_real_escape_string($conn,$_POST['text']);

$check_query = "SELECT link FROM navigation WHERE opt_id LIKE '%$getAns%'";
$execute_query = mysqli_query($conn,$check_query) or die("Error while executing query!");

if(mysqli_num_rows($execute_query) > 0){
    $fetch_data = mysqli_fetch_assoc($execute_query);
    $reply = $fetch_data['link'];
    echo $reply;
}else{ 

        // When a user will ask a question which the bot cannot answer,
        // it will store it in a seperate datatable called newqueries.
        // so that later the bot can be trained to answer that question.
    $insert_query = "INSERT INTO newqueries (que) VALUES('$getAns')";
    $run_query = mysqli_query($conn, $insert_query) or die("Error while inserting into database!");
    echo "Sorry, I'm not able to understand your query.";
}




?>