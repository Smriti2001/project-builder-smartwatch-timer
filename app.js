var myDate = new Date(); 
var myDay = myDate.getDay(); 

// Array of days. 
var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
var today = document.getElementById("day");
today.innerHTML = weekday[myDay];
var time1 = document.getElementById("time1");
time1.innerHTML = myDate.getHours()+":"+myDate.getMinutes();
var time2 = document.getElementById("time2");
time2.innerHTML = myDate.getHours()+":"+myDate.getMinutes();

//sms feature
document.getElementById("image1").addEventListener("click",function(){
    var messages = document.getElementById("msgContainer");
    if(messages.style.display == "none")
    {
        messages.style.display="block";
        messages.style.display="flex";
    }
    else
    {
        messages.style.display="none";
        // document.getElementById("msg1").style.display="none";
        // document.getElementById("msg2").style.display="none";
        // document.getElementById("msg3").style.display="none";
    }    
    
})

//music Feature
document.getElementById("image2").addEventListener("click",function(){
    var messages = document.getElementById("musicContainer");
    if(messages.style.display == "none")
    {
        messages.style.display="block";
        messages.style.display="flex";
    }
    else
    {
        messages.style.display="none";
        var audio1 = document.getElementById("audio1");
        audio1.pause();
        var audio2 = document.getElementById("audio2");
        audio2.pause();
        var audio3 = document.getElementById("audio3");
        audio3.pause();
        
        // document.getElementById("msg1").style.display="none";
        // document.getElementById("msg2").style.display="none";
        // document.getElementById("msg3").style.display="none";
    }    
    
})

//Timer
document.getElementById("image3").addEventListener("click",function(){
    var messages = document.getElementById("timerContainer");
    if(messages.style.display == "none")
    {
        var timer = 10, minutes, seconds;
        var isPaused=true;
        var pause = setInterval(timerfn,1000);
        function timerfn() {
            if(isPaused)
            {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                var timer1= document.getElementById("timer");
                timer1.textContent = "00:"+minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = 0;
                }
            }
            
            document.getElementById("pause").addEventListener("click",function(){
                if(isPaused)
                {
                    isPaused=false;
                }
                else{
                    isPaused=true;
                }
                
            });
            document.getElementById("reload").addEventListener("click",function(){
                timer=10;
                isPaused=true;
            });
            document.getElementById("stop").addEventListener("click",function(){
                timer=0;
                isPaused=true;
            });
            
        };
        messages.style.display="block";
        messages.style.display="flex";
    }
    else
    {
        messages.style.display="none";
        isPaused=false;
        clearInterval(pause);
        // document.getElementById("msg1").style.display="none";
        // document.getElementById("msg2").style.display="none";
        // document.getElementById("msg3").style.display="none";
    }    
    
})

//MSG1
document.getElementById("msg1").addEventListener("click",function(){
    var msg1 = document.getElementById("msg1");
    msg1.innerHTML="Java is a Object Oriented Language";
    msg1.style.display="block";
    var msg2 = document.getElementById("msg2");
    msg2.style.display="none";
    var msg3 = document.getElementById("msg3");
    msg3.style.display="none";
    var messages = document.getElementById("msgContainer");
    messages.style.display="none";
    messages.style.display="flex";
})
//MSG2
document.getElementById("msg2").addEventListener("click",function(){
    var msg1 = document.getElementById("msg1");
    msg1.style.display="none";
    var msg2 = document.getElementById("msg2");
    msg2.innerHTML="HTML is HyperText Markup Language";
    msg2.style.display="block";
    var msg3 = document.getElementById("msg3");
    msg3.style.display="none";
    var messages = document.getElementById("msgContainer");
    messages.style.display="none";
    messages.style.display="flex";
})
//MSG3
document.getElementById("msg3").addEventListener("click",function(){
    var msg1 = document.getElementById("msg1");
    msg1.style.display="none";
    var msg2 = document.getElementById("msg2");
    msg2.style.display="none";
    var msg3 = document.getElementById("msg3");
    msg3.innerHTML="CSS is a Cascading StyleSheet";
    msg3.style.display="block";
    var messages = document.getElementById("msgContainer");
    messages.style.display="none";
    messages.style.display="flex";
})

//music1
document.getElementById("music1").addEventListener("click",function(){
    var msg1 = document.getElementById("music1");
    music1.innerHTML="Song1 Playing";
    music1.style.display="block";
    var audio = document.getElementById("audio1");
    audio.play();
    var music2 = document.getElementById("music2");
    music2.style.display="none";
    var music3 = document.getElementById("music3");
    music3.style.display="none";
    var music = document.getElementById("musicContainer");
    music.style.display="none";
    music.style.display="flex";
})
//music2
document.getElementById("music2").addEventListener("click",function(){
    var music1 = document.getElementById("music1");
    music1.style.display="none";
    var msg2 = document.getElementById("music2");
    music2.innerHTML="Song2 Playing";
    music2.style.display="block";
    var audio = document.getElementById("audio2");
    audio.play();
    var music3 = document.getElementById("music3");
    music3.style.display="none";
    var music = document.getElementById("musicContainer");
    music.style.display="none";
    music.style.display="flex";
})
//music3
document.getElementById("music3").addEventListener("click",function(){
    var music1 = document.getElementById("music1");
    music1.style.display="none";
    var music2 = document.getElementById("music2");
    music2.style.display="none";
    var music3 = document.getElementById("music3");
    music3.innerHTML="Song3 Playing";
    music3.style.display="block";
    var audio = document.getElementById("audio3");
    audio.play();
    var music = document.getElementById("musicContainer");
    music.style.display="none";
    music.style.display="flex";
})
