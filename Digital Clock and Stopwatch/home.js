var timeField = document.getElementById('tb');
var dateField = document.getElementById('d');
var currentDate = new Date();
var secs = currentDate.getSeconds();
var minutes = currentDate.getMinutes();
var hours = currentDate.getHours();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();



var months = [
              'Jan' , 'Feb' , 'Mar', 'Apr',
              'May' , 'Jun' , 'Jul' , 'Aug',
              'Sep' , 'Oct' , 'Nov' , 'Dec'
             ];


function formatFields(tf) { return tf.length == 1 ? '0' + tf : tf ; }

function runTime() {

    timeField.innerHTML = `${hours} : ${minutes} : ${secs}`;
    dateField.innerHTML =  date + ' ' + months[month] + ' ' + year;

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

setInterval(runTime, 1000);

    
	


