$(function(){
	$('#tel').on('keyup', (e)=>{checkValue(e.target)});
});

function checkValue(target){
	let mask = "+X (XXX) XXX-XX-XX"
	let number = '';
	let numberPhone = target.value.match(/\d+/g);

	if(!numberPhone) $('#tel').val('');

	if(numberPhone[0].split('')[0] != '7'){
		number = `7${numberPhone.join('')}`;
	}else{
		number = numberPhone.join('');
	}
	if(number.length > 11) number = number.substr(0, 11);
	for(let key of number.split('')){
		mask = mask.replace('X', key);
	}
	let xIndex = mask.search(/\d(?=\D*$)/) +1;
	$('#tel').val(mask.substr(0, xIndex));
}

function onEntry (entry, getClass){
	entry.forEach( (change)=>{
		if(change.isIntersecting){
			change.target.classList.remove(getClass);
			change.target.classList.add('animated');
		}
	})
}
function startAnimation(getClass) {
	for(let elem of $(`.${getClass}`)){
		let observer = new IntersectionObserver((e)=>{
			onEntry(e, getClass)
		}, {threshold:[0.3]});
		observer.observe( elem )
	}
}
startAnimation('downToUp');
startAnimation('upToDown');
startAnimation('leftToRight');
startAnimation('rightToLeft');
startAnimation('justShow');