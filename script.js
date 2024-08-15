//your JS code here. If required.
const student={
	name:"abc"
}
Object.prototype.getKeys=function(){
	let arr=[];
	for(let i in this){
		arr.push(i);
	}
	arr.pop();
	return arr;
}