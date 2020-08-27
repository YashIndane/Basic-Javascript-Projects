var x = '';

function update(a) {
	document.getElementById('ans_panel').innerHTML = a;
}


function select_0(){
	x += '0';
	update(x);
}
function select_1(){
	x += '1';
	update(x);
}
function select_2(){
	x += '2';
	update(x);
}
function select_3(){
	x += '3';
	update(x);
}
function select_4(){
	x += '4';
	update(x);
}
function select_5(){
	x += '5';
	update(x);

}
function select_6(){
	x += '6';
	update(x);
}
function select_7(){
	x += '7';
	update(x);
}
function select_8(){
	x += '8';
	update(x);
}
function select_9(){
	x += '9';
	update(x);
}

//Operations
function add(){
	x += '+';
	update(x);
}
function subtract(){
	x += '-';
	update(x);
}
function mod_val(){
	x += '%';
	update(x);
}
function back(){
	x = x.slice(0,-1);
	update(x);
}
function mul(){
	x += '*';
	update(x);
}
function div(){
	x += '/';
	update(x);
}
function all_clear(){
	x = '';
	update(x);
}
function decimal_point(){
	x += '.';
	update(x);
}



function output_result(){
	var ans = eval(x);
	update(ans);
}


