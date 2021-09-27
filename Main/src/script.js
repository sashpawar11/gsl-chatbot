$(document).ready(function(){
   var chatwindow = document.getElementsByClassName("wrapper")[0];
    $("#send-btn").on("click", function(){
        $value = $("#data").val().toLowerCase();
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div></div>';
        $(".form").append($msg);
        $("#data").val('');
        
        // start ajax code
        $.ajax({
            url: 'sendmsg.php',
            type: 'POST',
            data: 'text='+$value,
            success: function(result){
                $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-user"></i></div><div class="msg-header"><p>'+ result +'</p></div></div>';
                $(".form").append($reply);
                // when chat goes down the scroll bar automatically comes to the bottom
                $(".form").scrollTop($(".form")[0].scrollHeight);
            }
            
        });
    });

    $("#chatbtn").on("click", function()
    {
        // ​$('.wrapper').css('display'​​​​​​​​​​​​​​​​​​​​​​​​​​​,'block');​​​​​​
    chatwindow.style.display="block";
    document.getElementById("chatbtn").style.display = "none";
    });

    // Delay for displaying Message
    setTimeout(function(){
        document.getElementById('botmsg').style.visibility = "visible";
        },1000);
});

