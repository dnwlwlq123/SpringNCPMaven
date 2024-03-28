$(function(){
	$.ajax({
		type: 'post',
		url: '/mini/user/getUploadImage',
		data: {'seq' : $('#seq').val()},
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			var result = `<img src="https://kr.object.ncloudstorage.com/bitcamp-6th-bucket-80/storage/` 
					      + data.imageFileName+`" width="250" heigth="250" />`;
			
			$('#imageSpan').html(result);
			$('#imageNameSpan').html(data.imageName);
			$('#imageOriginalNameSpan').html(data.imageOriginalName);
			$('#imageContentSpan').html(data.imageContent);
		},
		error: function(err){
			console.log(err);
		}
	});//ajax
});