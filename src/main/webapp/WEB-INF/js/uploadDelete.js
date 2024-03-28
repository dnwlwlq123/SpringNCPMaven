$(function(){
	$('#uploadDeleteBtn').click(function(){
		$.ajax({
			type: 'post',
			url: '/mini/user/uploadDelete',
			data: $('#uploadListForm').serialize(),
			success: function(){
				alert("이미지 삭제 완료");
				location.href = '/mini/user/uploadList';
			},
			error: function(err){
				console.log(err);
			}
		});
	});	
});