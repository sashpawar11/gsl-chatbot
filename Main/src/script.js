$(document).ready(function(){


    // msgloader on opening chat window 
    $('.loader').delay(2500).fadeOut();


    // Greeting User Msg on Doc load
    greetUser();

    TODO : 'TIMESTAMP FOR POSTS'
    var i = 0;
    setTimeStamp(i);
   

   let contactMode = false;
   var chatwindow = document.getElementsByClassName("wrapper")[0];

   
    $("#send-btn").on("click", function(){
        $value = $("#data").val();
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>'+ $value +'</p></div><div class="timestamps"><i class="fa fa-check-double m-1" style="font-size:8pt; color:#5C7AEA;"></i></div></div>';
        // $loader = '<div class="loader"></div>';
        // $(".form").append($msg,$loader);
        // $('.loader').delay(700).fadeOut();
        getLoaderAnimation($msg);
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
                        i++;
                        $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header"><p>'+ result +'</p></div><div class="timestamps"><p class="msg_time">0:00</p></div></div>';
                        $(".form").append($reply);
                        setTimeStamp(i);

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
                    i++;
                    $(".form").append($reply);
                    $(".form").scrollTop($(".form")[0].scrollHeight);
                    setTimeStamp(i);
                    contactMode = false;
                    
                
                }
                
            });
        }, 1500);
            
        };

    });


    //////////////////////////////////////////////////
    // Question Option Functions

    $("#contact").on("click", function(){
        
        contactMode = true;
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>Contact Details</p></div><div class="timestamps"><i class="fa fa-check-double m-1" style="font-size:8pt; color:#5C7AEA;"></i></div></div>';
        $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header"><p>Which of the following department details do you need? (Reply with option):<br>1.IT-ERP<br>2.IT-EDP<br>3.Ship Repair</p></div><div class="timestamps"><p class="msg_time">0:00</p></div></div>';
        i++;
        getLoaderAnimation($msg,$reply);
        setTimeout(function(){
            setTimeStamp(i);
        }, 1501);
    });

    $("#info").on("click", function(){
        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>Info</p></div><div class="timestamps"><i class="fa fa-check-double m-1" style="font-size:8pt; color:#5C7AEA;"></i></div></div>';
        $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header" style="max-width: 65%;"><p style="word-break: normal;">Goa Shipyard Limited (GSL) established in 1957, is a leading ISO 9001-2015 certified shipyard on the West Coast of India, functioning under the administrative control of Ministry of Defence, Govt. of India.</p><p style="word-break: break-all;">GSL is strategically located on the banks of river Zuari in Goa, a major international tourist destination well connected by its international airport and major port enroute all important shipping lines.</p><p style="word-break: break-all;">Beginning as a small barge building yard, GSL has garnered reputation as one of the most sophisticated ship builders in the Country.</p><p><img src="https://goashipyard.in/file/2016/08/GSL-Products.jpg" alt="GSL-Yard" width="180" height="120"></img></p></div><div class="timestamps"><p class="msg_time">0:00</p></div></div>';
        i++;
        getLoaderAnimation($msg,$reply);
        setTimeout(function(){
            setTimeStamp(i);
        }, 1501);

    });

    $("#location").on("click", function(){

        $msg = '<div class="user-inbox inbox"><div class="msg-header"><p>Location</p></div><div class="timestamps"><i class="fa fa-check-double m-1" style="font-size:8pt; color:#5C7AEA;"></i></div></div>';
        $reply = '<div class="bot-inbox inbox"><div class="icon"><i class="fas fa-robot"></i></div><div class="msg-header" style="max-width: 68%;"><p><iframe width="200" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=200&amp;height=200&amp;hl=en&amp;q=Goa%20Shipyard%20Limited,%20Vaddem,%20Vasco-da-gama,%20Goa,%20Inida+(Goa%20Shipyard%20Limited)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></p></div><div class="timestamps"><p class="msg_time">0:00</p></div></div>';
        i++;
        getLoaderAnimation($msg,$reply);
        setTimeout(function(){
            setTimeStamp(i);
        }, 1501);


    });





    /////////////////////////

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


    $("#maxbtn").on("click", function(){

        $( ".wrapper" ).animate({
            opacity: 1,
            // top: "+=0",
            height: "100%",
            width: "100%",
          
            
          }, {
              duration: 20,
              easing: "linear",
          }, function(){});
          $(".form").css('min-height' ,'500px');
          $(".form").css('max-height' ,'550px');
          $(this).css('display', 'none');
          $("#minbtn").css('display', 'inline-block');
          $(".input-data").css('width','600px');

    });

    $("#minbtn").on("click", function(){

        $( ".wrapper" ).animate({
            opacity: 1,
            // top: "+=0",
            height: "70%",
            width: "360px",
            easing: "linear",
          }, 100, function() {
            
          });
  
          $(".wrapper").css('width' ,'360px');
          $(".wrapper").css('right' ,'6px');
          $(".wrapper").css('bottom' ,'4px');
          $(this).css('display', 'none');
          $("#maxbtn").css('display', 'inline-block');
          $(".form").css('min-height' ,'350px');
          $(".form").css('max-height' ,'350px');
          $(".input-data").css('width','335px');

    });


    /// Sending Input-field Data on pressing Enter Button Function
    $(".input-data").keydown(function(event){
        var keyCode = ( event.keyCode ? event.keyCode : event.which);
        if(keyCode == 13)
        {
            $("#send-btn").trigger("click");
        }


    });


    // Delay for displaying Message1  $('#botmsg').delay
    setTimeout(function(){
        document.getElementById('botmsg').style.visibility = "visible";
        },3000);


        // Delay for displaying Options
    setTimeout(function(){
        $(".opt_inbox").css('visibility', 'visible');
        // document.getElementById('opt_inbox').style.visibility = "visible";
        },3800);

});


function greetUser()
{

    var dt = new Date();
    var hr = dt.getHours();
    var greetmsg = document.getElementById("greet");
    if( hr >= 0 && hr < 12)
    {
        greetmsg.innerHTML = "Good Morning User!<br>How can I help you?";
    }
    else if( hr >= 12 && hr < 17)
    {
        greetmsg.innerHTML = "Good Afternoon User!<br>How can I help you?";

    }
    else
    {
        greetmsg.innerHTML = "Good Evening User!<br>How can I help you?";
    }

}




function getLoaderAnimation($msg,$reply)
{
    $loader = '<div class="loader"></div>';
    $(".form").append($msg,$loader);
    $('.loader').delay(700).fadeOut();

    setTimeout(function(){
        $(".form").append($reply);
    }, 1500);

}


function setTimeStamp(i)
{
   
    var curr_time = new Date();
    var hrs = curr_time.getHours();
    var minutes = curr_time.getMinutes();
    var am_pm = hrs >= 12 ? 'PM': 'AM';
    hrs = hrs % 12;
    hrs = hrs ? hrs: 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var timestamp =  hrs + ":" + minutes + " " + am_pm;
    document.getElementsByClassName("msg_time")[i].innerHTML = timestamp;
}
