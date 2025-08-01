<template>
	<div class="fundao">
		<div class="cor-braca01">
			<div class="div-botao-voltar">
				<button @click="volta" class="botao-volta"></button>
			</div>
			<div class="format-frases">
				<h1>Criar uma conta</h1>
				<h5>Insira os detalhes da sua conta</h5>
			</div>
		</div>
		<div class="cor-branca02">
			<img class="logo"
				src="https://ucarecdn.com/61f9038f-20c2-4520-bafe-d0a0bafe8564/-/preview/1000x854/"
				alt="Imagem" />
		</div>

		<div class="form">
			<form action="">

				<div id="inputs-container">
					<b-col role="group">

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Nome Completo</h3>
								<b-form-input type="text" class="inputs-brancos" id="input-none" :state="null" v-model="cadastro.name"
									placeholder="Inserir nome">
								</b-form-input>
							</b-col>
						</b-row>


						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Celular</h3>
								<b-form-input type="text" class="inputs-brancos" id="input-valid" :state="null"
									v-model="cadastro.telefone" placeholder="() _ _ _ _-_ _ _ _"></b-form-input>
							</b-col>
						</b-row>

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Email</h3>
								<b-form-input type="text" class="inputs-brancos" id="input-valid" :state="null" v-model="cadastro.email"
									placeholder="Inserir email"></b-form-input>
							</b-col>
						</b-row>

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Senha</h3>
								<b-form-input type="password" class="inputs-brancos" id="input-valid" :state="null"
									v-model="cadastro.password" placeholder="Inserir senha"></b-form-input>
							</b-col>
						</b-row>

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<h3 class="nome-form">Confirmação senha</h3>
								<b-form-input type="password" class="inputs-brancos" id="input-valid" :state="null"
									v-model="cadastro.passwordConfirm" placeholder="Confirmar senha">
								</b-form-input>
							</b-col>
						</b-row>

						<b-row class="my-1">
							<b-col md="8" offset-md="2">
								<div class="div-botao">
									<button class="botao-avancar" @click="botaoApiAvancar">Avançar</button>
								</div>
							</b-col>
						</b-row>

					</b-col>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			cadastro: {
				name: '',
				telefone: '',
				email: '',
				password: '',
				passwordConfirm: ''
			}
		};
	},
	methods: {
		botaoApiAvancar() {
			event.preventDefault();
			fetch('http://localhost:8090/users', {
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
				body: JSON.stringify({
					name: this.cadastro.name,
					cellPhone: this.cadastro.telefone,
					email: this.cadastro.email,
					password: this.cadastro.password,
					passwordConfirm: this.cadastro.passwordConfirm
				})
			})
			.then(response => {
				console.log("Resposta Completa: ",response)
				if (response.status === 201) {
					this.$router.push('/');
				} else if (response.status === 400) {
					alert("Gentileza preencher todos os campos.");
				}
			})
			.catch(error => {
				console.log('Erro ao enviar solicitação: ', error);
			})
		},
		volta() {
			this.$router.push('/');
		}
	}
};
</script>

<style scoped>
.inputs-brancos {
	width: 100%;
	height: 50px;
	border-radius: 5px;
	border: white;
	padding: 0 15px;
}
.fundao {
	background-color: #e53a3a;
	width: 100%;
	height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	justify-content: center;
}

.cor-braca01 {
	width: 70%;
	height: 32%;
	background-color: white;
	background: linear-gradient(177deg, white 70%, transparent 70%);
}

.cor-branca02 {
	flex: 1;
	height: 32%;
	background: linear-gradient(-173deg, white 70%, transparent 70%);
}

.div-botao-voltar {
	padding: 28px;
	width: 20%;
	height: 42%;
	padding-left: 0;
}

.botao-volta {
	background-image: url('https://ucarecdn.com/cf00dcb9-1be8-46c6-afce-7c9c83dec2b9/-/preview/34x37/');
	background-size: 35px;
	background-repeat: no-repeat;
	background-color: white;
}

.logo {
	width: 35%;
	height: 50%;
	margin-top: 30px;
	margin-left: 70px;
}

.format-frases {
	padding-left: 30px;
	text-align: left;
	color: red;
}

.form {
	color: white;
	width: 50%;
	position: absolute;
	top: 25%;
	display: flex;
	flex-direction: column;
}


.nome-form {
	margin-bottom: 10px;
	text-align: left;
	width: 100%;
	font-size: 20px;
	margin-top: 10px;
}

.div-botao {
	margin-top: 20px;
}

.botao-avancar {
	width: 100%;
	height: 80px;
	border: none;
	color: white;
	background-color: #952626;
	border-radius: 5px;
}
</style>
