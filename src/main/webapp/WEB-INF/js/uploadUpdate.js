$(function(){
	$.ajax({
		type: 'post',
		url: '/mini/user/getUploadImage',
		data: {'seq' : $('#seq').val()},
		dataType: 'json',
		success: function(data){
			console.log(JSON.stringify(data));
			
			var result = `<img src="https://kr.object.ncloudstorage.com/bitcamp-6th-bucket-80/storage/` 
					      + data.imageFileName + `" width="250" heigth="250" />`;
			
			
			$('#imageName').val(data.imageName);
			$('#imageContent').val(data.imageContent);
			$('#showImgList').html(result);
		},
		error: function(err){
			console.log(err);
		}
	});//ajax
	
	//수정
	$('#uploadUpdateBtn').click(function(){
		var formData = new FormData($('#uploadUpdateForm')[0]);
		
		$.ajax({
				type: 'post',
				enctype: 'multipart/form-data',
				processData: false,
				contentType: false,
				url: '/mini/user/uploadUpdate',
				data: formData,
				success: function(data){
					alert(data);
					location.href='/mini/user/uploadList';
				},
				error: function(err){
					console.log(err);
				}
		});
	});
});