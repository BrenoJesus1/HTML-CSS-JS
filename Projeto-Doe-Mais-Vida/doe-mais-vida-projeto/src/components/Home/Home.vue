<template>
	<div class="vermelhor-topo">
		<button
			@click="infoUser" 
			class="button-volta"
		>
		</button>
		<div class="primeiro-vermelho">
			<b-row>
				<b-col class="d-flex justify-content-center m-3">
					<div class="caixa">
						<p class="quantidade">
							20976
							<br>
							Precisam de <br>um doador
						</p>
						<b-button @click="pagQueroDoar" type="button" class="btn" variant="light">
							Quero doar
						</b-button>
					</div>
				</b-col>
			</b-row>
		</div>

		<div class="bg-Branco">
			<b-row class="historia-usuario">
				<b-col>
					<strong>
						HISTORIAS DE USUARIOS
					</strong>
				</b-col>
			</b-row>

			<div class="user-stories">
				<b-row v-for="person in persons" :key="person.id" class="mb-4">
					<b-col cols="12">
						<div class="user-story">
							<div class="display">
								<img class="imagem" :src="getImageUrl(person.imgUrlPerfil)"
									alt="">
								<h3 class="texto">{{ person.name }} ✅<br>
									<h5 class="texto2">🕗6m ago 📍Hemominas</h5>
								</h3>
							</div>
							<br>
							<p>
								<img class="img" alt="img" :src="getImageUrl(person.imgUrl)">
							</p>
							<p class="texto-historia">
								{{ person.persona }}
							</p>
						</div>
					</b-col>
				</b-row>
			</div>
		</div>
	</div>
</template>

<script>
import jsons from "../../../persons.example.json"

export default {
	name: "LoginLogar",
	data() {
		return {
			persons: jsons
		}
	},
	methods: {
		getImageUrl(imgUrl) {
			// eslint-disable-next-line no-undef
			return require(`../../../public/persons/${imgUrl}.jpg`);
		},
		pagQueroDoar() {
			this.$router.push('/agendamentos');
		},
		infoUser() {
			this.$router.push('/');
		},
	}
}
</script>

<style scoped>
.vermelhor-topo {
	width: 100%;
	margin: 0;
	padding: 0;
}
.teste {
	cursor: pointer;
}
.button-volta {
	background-image: url("../../assets/infoUsuario.png");
	background-color: red;
	background-repeat: no-repeat;
	align-items: center;
	position: absolute;
	left: 0;
	margin: 10px;
	padding: 0;
	width: 72px;
	height: 72px;
	z-index: 100;
}

.primeiro-vermelho {
	width: 100%;
	height: 20vh;
	background-color: red;
}

.caixa {
	width: 100%;
	max-width: 300px;
	height: 7em;
	border-radius: 10px;
	background-color: rgb(244, 84, 84);
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.quantidade {
	color: white;
}

.btn {
	width: 150px;
	height: 50px;
	border-radius: 30px;
}

.bg-Branco {
	padding: 20px;
	background-color: #F2F2F2;
}

.historia-usuario {
	padding: 20px;
	background-color: #F2F2F2;
}

.user-stories {
	padding: 0 15px;
}

.user-story {
	background: white;
	padding: 20px;
	border-radius: 10px;
}

.texto {
	text-align: left;
	margin-top: 30px;
}

.texto2 {
	/* text-align: center; */
	font-size: 15px;
}

.img {
	width: 80%;
	height: auto;
	border-radius: 40px 40px 0 0;
}

.display {
	display: flex;
}

.imagem {
	margin-right: 20px;
	border-radius: 50%;
	object-fit: cover;
}
</style>
