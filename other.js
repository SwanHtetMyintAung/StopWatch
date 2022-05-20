var time = document.querySelector('.time');
        var startBtn = document.querySelector('.start');
        var stopBtn = document.querySelector('.stop');
        var resetBtn = document.querySelector('.reset');
        var hr = 0;
        var min = 0;
        var sec = 0;
        var stopTimer = true;
        
        startBtn.onclick = function(){
            if(stopTimer == true){
                stopTimer = false;
                startTimer();
            }
        }
        stopBtn.onclick = function(){
            if(stopTimer == false){
                stopTimer = true;
            }
        }
        function startTimer(){
            if(stopTimer == false){
                sec = parseInt(sec);
                min = parseInt(min);
                hr = parseInt(hr);
                sec += 1;
                if(sec == 60){
                    min = min+1 ;
                    sec = 0;
                }
                if(min == 60){
                    hr = hr+1 ;
                    min = 0;
                    sec = 0;
                }
            
            if(sec < 10 || sec == 0){
                sec = '0' + sec;
            }
            if(min < 10 || min == 0){
                min = '0' + min;
            }
            if(hr < 10 || hr == 0){
                hr = '0' + hr;
            }
            
            time.innerHTML = hr + ":" + min + ":" + sec ;
            setTimeout("startTimer()" , 1000);
        }
            
        }
        resetBtn.onclick = function(){
            time.innerHTML ="00:00:00";
            sec = 0;
            min = 0 ;
            sec = 0;
            stopTimer = true;
        }
