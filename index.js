        var time = document.querySelector('.time');
        var startBtn = document.querySelector('.start');
        var stopBtn = document.querySelector('.stop');
        var resetBtn = document.querySelector('.reset');
        var hr = 0;
        var min = 0;
        var sec = 0;
        var Myinterval;
        var stopTimer = true;
        
        function stopwatch(){
            if(stopTimer == false){
           sec =  parseInt(sec);
           min =  parseInt(min);
           hr =  parseInt(hr);
            sec++;
            if(sec == 60){
                min++;
                sec=0;
            }if(min == 60){
                hr++;
                min=0;
                sec=0;
            }
            if(sec  < 9  || sec == 0 ){
                sec = '0' + sec;
            }
            if(min < 9 || min ==0 ){
                min = '0' + min;
            }
            if(hr < 9 || hr ==0 ){
                hr = '0' + hr;
            }
            time.innerHTML = hr + ':' + min + ':' +sec ;
            Myinterval = setTimeout('stopwatch()' , 1000)
            }
        }
        
        startBtn.onclick = function() {
            stopTimer = false;
            setTimeout('stopwatch()',500)
            this.classList.add('disabled');
            stopBtn.classList.remove('disabled');
        }
        stopBtn.onclick = function() {
           clearTimeout(Myinterval);
           stopTimer = true;
           this.classList.add('disabled');
           startBtn.classList.remove('disabled');
        }
        resetBtn.onclick = function (){
            time.innerHTML = "00:00:00";
            hr = 0 ;
            min = 0 ;
            sec = 0 ;
            //stopTimer = true ;
        }
