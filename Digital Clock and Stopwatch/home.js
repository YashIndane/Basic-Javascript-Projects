var timeField = document.getElementById('tb');
var dateField = document.getElementById('d');
var currentDate = new Date();
var secs = currentDate.getSeconds();
var minutes = currentDate.getMinutes();
var hours = currentDate.getHours();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var setTime_ = true; 



var months = [
              'Jan' , 'Feb' , 'Mar', 'Apr',
              'May' , 'Jun' , 'Jul' , 'Aug',
              'Sep' , 'Oct' , 'Nov' , 'Dec'
             ];

function createAdjustBut(){

  
  setTime_ = false;

  var but_d = document.createElement('input');
  but_d.setAttribute('type', 'button' );
  but_d.setAttribute('class', 'done_button');
  but_d.setAttribute('value', 'Done');
  document.body.appendChild(but_d); 

  var but = document.createElement('input');
  but.setAttribute('type', 'button' );
  but.setAttribute('class', 'p1');
  but.setAttribute('value', '+');
  document.body.appendChild(but); 

  var but1 = document.createElement('input');
  but1.setAttribute('type', 'button' );
  but1.setAttribute('class', 'p2');
  but1.setAttribute('value', '+');
  document.body.appendChild(but1); 

  var but2 = document.createElement('input');
  but2.setAttribute('type', 'button' );
  but2.setAttribute('class', 'p3');
  but2.setAttribute('value', '+');
  document.body.appendChild(but2); 

  var but3 = document.createElement('input');
  but3.setAttribute('type', 'button' );
  but3.setAttribute('class', 'p4');
  but3.setAttribute('value', '-');
  document.body.appendChild(but3); 

  var but4 = document.createElement('input');
  but4.setAttribute('type', 'button' );
  but4.setAttribute('class', 'p5');
  but4.setAttribute('value', '-');
  document.body.appendChild(but4); 

  var but5 = document.createElement('input');
  but5.setAttribute('type', 'button' );
  but5.setAttribute('class', 'p6');
  but5.setAttribute('value', '-');
  document.body.appendChild(but5); 





}             


function formatFields(tf) { return tf.length == 1 ? '0' + tf : tf ; }

function runTime() {


     
        timeField.innerHTML = `${hours} : ${minutes} : ${secs}`;
        dateField.innerHTML =  date + ' ' + months[month] + ' ' + year;

        if (setTime_) { 

          secs = +secs , minutes = +minutes , hours = +hours ;
        	
        	secs = secs <= 58 ? secs + 1 : 0;
        	if (secs == 0) { 

                minutes = minutes <= 58 ? minutes + 1 : 0;
            }

            if (minutes == 0 && secs == 0){

            	hours = hours <= 22 ? hours + 1 : 0;
            }

            [hours , minutes , secs] = ['' + hours , '' + minutes , '' + secs].map(formatFields);

        }  

}	

setInterval(runTime, 1000);

    
	


