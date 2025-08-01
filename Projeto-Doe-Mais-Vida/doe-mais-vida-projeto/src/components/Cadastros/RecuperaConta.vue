<template>
	<div class="tela-cheia">
		<div class="vermelha-caixa">
			<div class="div-botao-voltar-logo">
				<button @click="volta" class="botao-volta"></button>
				<img
					src="https://ucarecdn.com/4f104287-ec41-4efe-a3a4-8826a54f3ec2/-/preview/308x263/"
					alt="Logo Doação">
			</div>
			<div class="caixa-escura">
				<form action="">
					<b-row class="input">
						<b-col md="6" offset-md="3">
							<h3 class="nome-formulario">Redefinir senha</h3>
							<b-form-input type="text" class="custom-input" id="input-valid" :state="null"
								placeholder="Email/ Telefone">
							</b-form-input>
						</b-col>
					</b-row>
					<b-row>
						<b-col md="6" offset-md="3">
							<div class="proximo-button">
								<router-link to="/redefinirSenha">
									<button class="botao-proximo">Próximo</button>
								</router-link>
							</div>
						</b-col>
					</b-row>
				</form>
			</div>
		</div>
		<div class="caixa-white">

		</div>

	</div>
</template>

<script>
export default {
	name: 'MyComponent',
	data() {
		return {

		}
	},
	methods: {
		volta() {
			this.$router.push('/');
		}
	}
}
</script>

<style scoped>
img {
	width: 100px;
	height: 100px;
	margin: 45px auto 50px auto;
}

.tela-cheia {
	display: flex;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	background-color: #E53A3A;
	flex-direction: column;
}

.vermelha-caixa {
	padding-top: 20px;
	width: 100%;
	height: 75vh;
	background-color: #E53A3A;
	flex: 1;
}

.caixa-white {
	top: 0;
	left: 0;
	width: 100vw;
	height: 25vh;
	background-color: white;
}

input {
	width: 50px;
	height: 50px;
	padding: 0 15px;
}

.nome-formulario {
	padding: 30px;
	width: 100%;
	margin-top: 10px;
	color: white;
}

.custom-input {
	width: 100%;
	height: 50%;
}

.botao-proximo {
	width: 100%;
	height: 80px;
	border: none;
	background-color: white;
	color: red;
	border-radius: 5px;
}

.proximo-button {
	padding-top: 30px;
}

.input {
	margin-bottom: 30px;
}

.div-botao-voltar-logo {
	display: flex;
	align-items: center;
	padding: 28px;
	width: 68%;
	height: 30%;
	padding-left: 40px;
}

.botao-volta {
	background-image: url('https://ucarecdn.com/04b02b27-4531-476b-951d-4df0d0ff1a74/-/preview/34x46/');
	background-size: 40px;
	background-repeat: no-repeat;
	background-color: #E53A3A;
}

</style>
