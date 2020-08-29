var x = '';

function update(a) {
	document.getElementById('ans_panel').innerHTML = a;
}

function checkAndAdd(z , z_n) {

	var signOperations = '/*.%+-';
    
    if (z_n != '.') {

        if (!signOperations.includes(x.slice(-1))){ x += z_n; } 
    }

    else {

        if (x.includes('.')){

    		var substr = x.slice(x.lastIndexOf('.') , x.length);
    		
            if (substr.split('').some(sub => '/*%+-'.includes(sub))) {
            	
    		    if (!signOperations.includes(x.slice(-1))){ x += z_n; }
    		}
    	}	

    	else {

    		   if (!signOperations.includes(x.slice(-1))){ x += z_n; }
        }	
    }

    update(x);
}

function addNumbers(num) {
     
     x += num;
     update(x);
}

//MIS-Operations
function back(){
	x = x.slice(0,-1);
	update(x);
}

function all_clear(){
	x = '';
	update(x);
}

function output_result(){
	var ans = eval(x);
	update(ans);
}


