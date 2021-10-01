$(document).ready(function(){


    // msgloader on opening chat window 
    $('.loader').delay(2500).fadeOut();

    TODO : 'TIMESTAMP FOR POSTS'
//    const post_time = getCurrentTime();
//    document.getElementById("msg_time").innerHTML = post_time;


   let contactMode = false;
   var chatwindow = document.getElementsByClassName("wrapper")[0];
    $("#send-btn").on("click", function(){
        $value = $("#data").val();
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
        $loader = '<div class="loader"></div>';
        $(".form").append($msg,$loader);
        $('.loader').delay(700).fadeOut();
        $("#data").val('');
        

        // General User Queires
        // Ajax code
        
        if(contactMode == false)
        {

            setTimeout(function(){
                $.ajax({
                    url: 'sendmsg.php',
    
                    method: 'POST',
                    headers: {
                        "Access-Control-Allow-Methods" : "OPTIONS, GET, POST, PUT, DELETE",
                        'Access-Control-Allow-Origin': '*'
                        
                    },
                    data: 'text='+$value,
                    success: function(result){
                        $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header"><p>'+ result +'</p></div></div>';
                        $(".form").append($reply);
                        $(".form").scrollTop($(".form")[0].scrollHeight);
                    }
                    
                });
            
        },1500);
    }

        // CONTACT QUERIES
        if(contactMode == true)
        {
            setTimeout(function(){
                
                $.ajax({
                url: 'sendcontact.php',
    
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Methods" : "OPTIONS, GET, POST, PUT, DELETE",
                    'Access-Control-Allow-Origin': '*'
                    
                 },
                data: 'text='+$value, 
                success: function(result){
                    //$reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header"><p>'+ result +'</p></div></div>';
                    $reply = result;
                    $(".form").append($reply);
                    $(".form").scrollTop($(".form")[0].scrollHeight);
                    contactMode = false;
                
                }
                
            });
        }, 1500);
            
        };

    });


    $("#contact").on("click", function(){
        contactMode = true;
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>Contact Details</p></div></div>';
        $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header"><p>Which of the following department details do you need? (Reply with option):<br>1.IT-ERP<br>2.IT-EDP<br>3.Ship Repair</p></div></div>';
        $loader = '<div class="loader"></div>';
        $(".form").append($msg,$loader);
        $('.loader').delay(700).fadeOut();

        setTimeout(function(){
            $(".form").append($reply);
        }, 1500);

    });

    $("#chatbtn").on("click", function()
    {
        $( ".wrapper" ).animate({
            opacity: 1,
            // top: "+=0",
            height: "toggle",
            width: "toggle",
          }, 100, function() {
            
          });
        // ​$('.wrapper').css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'block');​​​​​​
    chatwindow.style.display="block";
    document.getElementById("chatbtn").style.display = "none";
    });

    $("#btn_close").on("click", function()
    {
        $( ".wrapper" ).animate({
            opacity: 0,
            // top: "+=0",
            height: "toggle",
            width: "toggle",
          }, 100, function() {
            
          });
        // ​$('.wrapper').css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'block');​​​​​​
    //chatwindow.style.display="none";
    document.getElementById("chatbtn").style.display = "block";
    // setTimeout(function(){ location.reload(); }, 10);   // Add this to refresh the page on clicking close, does not save the conversation.
    });

    // Delay for displaying Message1  $('#botmsg').delay
    setTimeout(function(){
        document.getElementById('botmsg').style.visibility = "visible";
        },3000);


        // Delay for displaying Options
    setTimeout(function(){
        document.getElementById('opt_inbox').style.visibility = "visible";
        },3800);

});

// function getCurrentTime()
// {

//     var curr_time = new Date();
//     var timestamp = curr_time.getHours() + ":" + curr_time.getMinutes();
//     return timestamp;

// }
