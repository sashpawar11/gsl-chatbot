


let closeButton = document.getElementById("closebtn");
const chatWindow = document.getElementsByClassName("bot_window");


closeButton.onclick = hideWindow;

function hideWindow()
{
    alert("Test");
    if( chatWindow.style.display != "none" )
    {
        chatWindow.style.display = "none";
    }
    if( chatWindow.style.display == "none" )
    {
        chatWindow.style.display = "block";
    }

};

