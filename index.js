var NumberOfUnread = document.querySelectorAll(".unread").length;
var UnreadClass = document.querySelectorAll(".unread");
var RedDots = document.querySelectorAll(".red-dot");

for (let i = 0; i < NumberOfUnread; i++) {
    document.querySelectorAll(".unread")[i].addEventListener("click", function(){
        RedDots[i].style.display = "none";
    })
    document.querySelectorAll(".unread")[i].addEventListener("click", myFunction);
    
}

function myFunction() {
    this.classList.remove("unread");
    notificationDigit();
    this.removeEventListener("click", myFunction)
}

function notificationDigit() {
    if (NumberOfUnread>1) {
        NumberOfUnread--;
        document.querySelector(".digit").innerHTML= NumberOfUnread;
    } else {
        document.querySelector(".digit").style.display= "none";
    }
}

document.getElementById("marking").addEventListener("click", function () {
    document.querySelector(".digit").style.display= "none";
    for (let i = 0; i < UnreadClass.length; i++) {
        RedDots[i].style.display = "none";
        UnreadClass[i].removeEventListener("click", myFunction);
        UnreadClass[i].classList.remove("unread");  
        
 }
})