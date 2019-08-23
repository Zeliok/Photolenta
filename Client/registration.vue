<style>
	#button{
	background-color: red;
	color: white;
	border: solid 1px red;
	width: 700px;
	}
	form{
	width: 700px;
	}	
</style>

<template>
	<div>
		<form>
			  <div class="form-group">
			    <input type="email" class="form-control" id="login" aria-describedby="emailHelp" placeholder="Логин">
			  </div>
			  <div class="form-group">
			    <input type="password" class="form-control" id="password" placeholder="Пароль">
			  </div>
			  <div class="form-group">
			  	<input type="password" class="form-control" id="Repeat password" placeholder="Повтор пароля">
			  </div>
			  <button type="submit" class="btn btn-primary" id="button">Зарегистрироваться!</button>
			</form>
	</div>
</template>