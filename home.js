var x = '';

function update(a) {
	document.getElementById('ans_panel').innerHTML = a;
}

function checkAndAdd(z , z_n) {

    if (z.slice(-1) != z_n){ x += z_n;} 
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
