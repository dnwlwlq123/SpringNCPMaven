<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
table{
	border-collapse: collapse;
}
th, td{
	padding: 5px;
}

</style>
</head>
<body>
<form id="uploadUpdateForm">
	<input type="text" name="seq" id="seq" value="${seq }">
	<table border="1">
		<tr>
			<th>상품명</th>
			<td>
				<input type="text" name="imageName" id="imageName" size="35">
			</td>
		</tr>
			
		<tr>
			<td colspan="2">
				<textarea name="imageContent" id="imageContent" rows="10" cols="50"></textarea>
			</td>
		</tr>
		
		<tr>
			<td colspan="2">
			<span id="showImgList"></span>
			<img src="../image/camera3.webp" id="camera" alt="카메라" width="260px" height="260px">
				<input type="file" name="img" id="img"  style="visibility: hidden;">
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="button" value="목록" onclick="location.href='/mini/user/uploadList'">
				<input type="button" value="수정" id="uploadUpdateBtn">
				<input type="reset" value="취소" onclick="location.reload();">
			</td>
		</tr>
	</table>
</form>

<script type="text/javascript" src="http://code.jQuery.com/jquery-3.7.1.min.js"></script>
<script type="text/javascript" src="../js/uploadUpdate.js"></script>
<script type="text/javascript">
$('#camera').click(function(){
	$('#img').trigger('click');
});

//여러개의 이미지 보이기
$('#img').change(function(){
	$('#showImgList').empty();
	
	for(var i=0; i<this.files.length; i++){
		readURL(this.files[i])
	}
});

function readURL(file){
	var reader = new FileReader();
	
	var show;
	reader.onload = function(e){
		var img = document.createElement('img');
		img.src = e.target.result;
		img.width = 70;
		img.height = 70;
		$('#showImgList').append(img);
	}
	reader.readAsDataURL(file);
}
</script>
</body>
</html>