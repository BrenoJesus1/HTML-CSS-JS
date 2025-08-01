<template>
	<div class="total">
		<div class="vermelha-caixa">
			<div class="button-volta-logo">
				<button @click="volta" class="button-volta"></button>
				<img
					src="https://ucarecdn.com/4f104287-ec41-4efe-a3a4-8826a54f3ec2/-/preview/308x263/"
					alt="logo Projeto">
			</div>

			<div class="caixa-escura">
				<h1 class="primeiro-frase">Redefinir Senha</h1>

				<b-row>
					<b-col md="6" offset-md="3">
						<h5 class="frase-nome">Nova senha:*</h5>
						<b-form-input type="password" class="custom-input" id="nova-senha" v-model="novaSenha"
							placeholder="Senha"></b-form-input>
					</b-col>
				</b-row>

				<b-row class="ajuste-inputs">
					<b-col md="6" offset-md="3">
						<h5 class="frase-nome">Confirmar a nova senha:*</h5>
						<b-form-input type="password" class="custom-input" id="confirmar-senha" v-model="confirmarSenha"
							placeholder="Confirmar senha"></b-form-input>
					</b-col>
				</b-row>

				<b-row>
					<b-col md="6" offset-md="3">
						<div class="button-confirm">
							<router-link to="/">
								<button class="proximo-botao" @click="confirmarSenhaFunc">Confirmar</button>
							</router-link>
						</div>
					</b-col>
				</b-row>
			</div>
		</div>
		<div class="caixa-white">

		</div>
	</div>
</template>

<script>
import { BRow, BCol, BFormInput } from 'bootstrap-vue';

export default {
	name: 'RedefinirSenha',
	components: {
		BRow,
		BCol,
		BFormInput
	},
	data() {
		return {
			novaSenha: '',
			confirmarSenha: ''
		}
	},
	methods: {
		volta() {
			this.$router.push('/');
		},
		confirmarSenhaFunc() {
			if (this.novaSenha !== this.confirmarSenha) {
				alert('As senhas não coincidem');
			} else {
				// Lógica para redefinir a senha
			}
		}
	}
}
</script>

<style scoped>
.total {
	display: flex;
	background-color: violet;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
	flex-direction: column;
}

.vermelha-caixa {
	padding-top: 50px;
	width: 100vw;
	height: 75vh;
	background-color: #E53A3A;
	flex: 1;
}

.primeiro-frase {
	color: white;
	padding: 30px;
}

.frase-nome {
	color: white;
	text-align: left;
	padding-bottom: 10px;
}

.ajuste-inputs {
	padding-top: 10px;
}

.custom-input {
	padding: 25px;
}

.button-confirm {
	padding-top: 30px;
}

.proximo-botao {
	background-color: white;
	color: red;
	border-radius: 5px;
	border: none;
	width: 100%;
	height: 80px;
}

.button-volta-logo {
	display: flex;
	align-items: center;
	padding: 28px;
	width: 97%;
	height: 30%;
	padding-left: 40px;
}

.button-volta {
	background-image: url('https://ucarecdn.com/04b02b27-4531-476b-951d-4df0d0ff1a74/-/preview/34x46/');
	background-size: 40px;
	background-repeat: no-repeat;
	background-color: #E53A3A;
}
</style>
