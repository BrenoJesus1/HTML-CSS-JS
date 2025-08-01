<template>
	<div id="fundo" class="fundo-total">
		<div class="caixa-red">

			<img
				src="https://ucarecdn.com/4f104287-ec41-4efe-a3a4-8826a54f3ec2/-/preview/308x263/"
				alt="Logo do projeto">

			<div class="caixa-escura">
				<div class="caixa-para-botoes">
					<b-button key="botaoEmail" :variant="buttonVariant01" pill @click="changeColor(1)">E-mail</b-button>
					<b-button key="botaoCelular" :variant="buttonVariant02" pill @click="changeColor(2)">Celular</b-button>
				</div>

				<b-container class="tudao">
					<form action="">

					</form>
					<!-- v-if="buttonVariant01 === 'danger'"  -->
					<div class="informacoes-email">
						<div>
							<h1 class="texto-h1">
								Cadastrar conta com o meu {{ buttonVariant01 === 'danger' ? "email" : "celular" }}
							</h1>
						</div>
						<div id="inputs-container">
							<b-col role="group">
								<b-row class="my-1">
									<b-col md="8" offset-md="2">
										<b-form-input class="custom-input" id="input-none" :state="null" v-model="infoLogin.user"
											:placeholder="buttonVariant01 === 'danger' ? 'Inserir email' : 'Inserir celular'">
										</b-form-input>
									</b-col>
								</b-row>
								<b-row class="my-1">
									<b-col md="8" offset-md="2">
										<b-form-input type="password" class="custom-input" id="input-valid" :state="null"
											v-model="infoLogin.password" placeholder="Inserir senha"></b-form-input>
									</b-col>
								</b-row>
							</b-col>
						</div>
						<b-container class="login">
							<b-button variant="light" class="primeiro-botao-padrao" @click="login">Entrar</b-button>
						</b-container>
						<b-container>
							<router-link to="/CadastroUsuario">
								<b-button variant="light" class="botao-padrao">Criar conta</b-button>
							</router-link>
						</b-container>
						<b-container>
							<b-button variant="light" class="botao-padrao img-google">Entrar com Google</b-button>
						</b-container>
						<router-link to="/recuperarConta">
							<a class="link-conta">Esqueci minha senha</a>
						</router-link>
					</div>
				</b-container>
			</div>
		</div>
		<div class="caixa-white">

		</div>
	</div>
</template>

<script>
// import axios from 'axios';

export default {
	name: "LoginLogar",
	data() {
		return {
			buttonVariant01: 'danger',
			buttonVariant02: 'light',
			name: '',
			nameState: null,
			infoLogin: {
				user: '',
				password: ''
			}
		}
	},
	methods: {
		login() {
			fetch("http://localhost:8090/users/login", {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					emailOrPhone: this.infoLogin.user,
					password: this.infoLogin.password
				})
			})
				.then(response => {
					console.log('Resposta completa: ', response);
					if (response.status === 200) {
						return response.json();
					} else if (response.status === 400) {
						alert("Credenciais inválidas. Por favor, tente novamente.");
					} else if (response.status === 500) {
						alert("Gentileza preencher todos os campos para prosseguir.");
					} else {
						throw new Error('Erro ao enviar solicitação: status ' + response.status);
					}
				})
				.then(data => {
					//Armazene o token de autenticação no localStorage
					localStorage.setItem('authToken', data.token);
					this.$router.push('/home')
				}
				)
				.catch(error => {
					console.log('Erro ao enviar solicitação: ', error);
					// error.json().then(errorMessage => console.log('Mensagem de erro: ', errorMessage));
				});
		},
		changeColor(buttonNumber) {
			if (buttonNumber === 1) {
				this.buttonVariant01 = 'danger';
				this.buttonVariant02 = 'light';
			} else if (buttonNumber === 2) {
				this.buttonVariant01 = 'light';
				this.buttonVariant02 = 'danger';
			}
		}
	}
}
</script>

<style>
img {
	width: 100px;
	height: 100px;
	margin-bottom: 50px;
}

.fundo-total {
	display: flex;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-color: violet;
	flex-direction: column;
}

.caixa-red {
	padding-top: 50px;
	width: 100vw;
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

.caixa-escura {
	padding: 30px;
	margin: auto;
	position: relative;
	background-color: #952626;
	width: 95%;
	height: 100%;
	border-radius: 15px;
}

.caixa-para-botoes {
	padding: 5px;
	margin: auto;
	border-radius: 30px;
	width: 25%;
	height: 10%;
	background-color: white;
	display: flex;
	justify-content: space-evenly;
}

button {
	border-radius: 10px;
	padding: 10px;
	width: 48%;
	height: 100%;
	border: none;
	background-color: #EE3C3C;
}

.tudao {
	display: flex;
	justify-content: center;
}

.informacoes-email,
.informacoes-celular {
	margin-top: 50px;
	width: 50%;
	height: 90%;
}

.texto-h1 {
	font-size: 20px;
	color: white;
}

#inputs-container {
	margin-top: 30px;
	margin-bottom: 20px;
}

.primeiro-botao-padrao,
.botao-padrao {
	margin-bottom: 10px;
	width: 340px;
	height: 60px;
}

.custom-input {
	width: 100% !important;
	font-size: 18px !important;
	margin-bottom: 8px;
	background-color: transparent !important;
	border-color: white !important;
	color: white !important;
}

.custom-input::placeholder {
	color: white !important;
}

.login {
	margin-top: 20px;
}

.img-google {
	background-image: url('https://ucarecdn.com/f4fb7244-ca6f-481b-a4f3-074a15884c17/-/preview/51x51/');
	background-size: 50px;
	background-position: left center;
	background-repeat: no-repeat;
	padding-left: 30px;
}

.link-conta {
	text-decoration: none;
	color: white;
	text-align: left;
}

.link-conta:hover {
	text-decoration: none
}
</style>
