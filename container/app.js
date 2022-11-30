$(document).ready(function(){
	let value;
	let storeValues = []
	let storeValueName;
	let storeValueComment;
	$('#addComment').click(function(){
	storeValueName = getName();	
	storeValueComment = getComment();
	storeValues.push(storeValueName);
	storeValues.push(storeValueComment);
	value = getName() + getComment();
	function getName(){
		let grabName;
		$('#name').val(function(i, v){
			grabName = v;
		})
		return grabName;
	}

	function getComment(){
		let grabComment;
		$('#bodyText').val(function(i, v){
			grabComment = v;
		})
		return grabComment
	}
	console.log(storeValues);
	
	$('.eachComment').prepend('<div class="comments">' +'<img class="imgClass" src="userImage.jpg">'+'<p class="nameVal">'
	+ storeValueName +'</p>' + '<p class="commentVal">'+ storeValueComment +'</p>'+
	'<input type="button" id="edit" value="Edit" />'+ '<input type="button" id="delete" value="Delete" />' + '</div>');
	
		$('#edit').click(function(){

	})
	
	})
	
})
