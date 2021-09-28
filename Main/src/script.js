$(document).ready(function(){
   var chatwindow = document.getElementsByClassName("wrapper")[0];
    $("#send-btn").on("click", function(){
        $value = $("#data").val();
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
        $(".form").append($msg);
        $("#data").val('');
        
        // Ajax code
        $.ajax({
            url: 'sendmsg.php',
            // url: 'sendmsg.php',
            method: 'POST',
            headers: {
                "Access-Control-Allow-Methods" : "OPTIONS, GET, POST, PUT, DELETE",
                // 'Access-Control-Allow-Headers': 'POST',
                // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                // 'Access-Control-Allow-Credentials': 'true',
                // // header('Access-Control-Max-Age:86400');
                // 'Access-Control-Allow-Headers' :' Origin, Content-Type, X-Auth-Token,  Accept, Authorization, X-Requested-With',
                'Access-Control-Allow-Origin': '*'
                
             },
            data: 'text='+$value,
            success: function(result){
                $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>'+ result +'</p></div></div>';
                $(".form").append($reply);
                $(".form").scrollTop($(".form")[0].scrollHeight);
            }
            
        });
    });

    $("#contact").on("click", function(){
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>Contact Details</p></div></div>';
        
        $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>So you need the contacts huh</p></div></div>';
        $(".form").append($msg,$reply);
        // $(".form").scrollTop($(".form")[0].scrollHeight);
        // Ajax code
        // $.ajax({
        //     url: 'sendmsg.php',
        //     // url: 'sendmsg.php',
        //     method: 'POST',
        //     headers: {
        //         "Access-Control-Allow-Methods" : "OPTIONS, GET, POST, PUT, DELETE",
        //         // 'Access-Control-Allow-Headers': 'POST',
        //         // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        //         // 'Access-Control-Allow-Credentials': 'true',
        //         // // header('Access-Control-Max-Age:86400');
        //         // 'Access-Control-Allow-Headers' :' Origin, Content-Type, X-Auth-Token,  Accept, Authorization, X-Requested-With',
        //         'Access-Control-Allow-Origin': '*'
                
        //      },
        //     data: 'text='+$value,
        //     success: function(result){
        //         $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>'+ result +'</p></div></div>';
        //         $(".form").append($reply);
        //         $(".form").scrollTop($(".form")[0].scrollHeight);
        //     }
            
        // });
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

    // Delay for displaying Message1
    setTimeout(function(){
        document.getElementById('botmsg').style.visibility = "visible";
        },1500);

        // Delay for displaying Message2
    setTimeout(function(){
        document.getElementById('opt_inbox').style.visibility = "visible";
        },2500);
});

