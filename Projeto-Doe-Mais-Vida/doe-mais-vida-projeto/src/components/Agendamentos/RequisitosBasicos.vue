<template>
	<div class="fundo">
		<div class="requisitos">
			<h1 id="title">Requisitos Báscios para doação de sangue:</h1>
			<ol>
				<li>
					<span>Saúde:</span>
					<h2>Estar em boas condições de saúde.</h2>
				</li>
				<li>
					<span>Idade:</span>
					<h2>Ter entre 16 e 69 anos (a primeira doação deve ser feita até os 60 anos; menores de 18 anos precisam de
						autorização).</h2>
				</li>
				<li>
					<span>Peso:</span>
					<h2>Pesar no mínimo 50 kg.</h2>
				</li>
				<li>
					<span>Descanso:</span>
					<h2>Ter dormido pelo menos 6 horas nas últimas 24 horas.</h2>
				</li>
				<li>
					<span>Alimentação:</span>
					<h2>Estar alimentado e evitar alimentos gordurosos nas 4 horas anteriores à doação.</h2>
				</li>
				<li>
					<span>Documentação:</span>
					<h2>Apresentar documento original com foto recente, emitido por órgão oficial (ex.: RG, CNH).</h2>
				</li>
			</ol>
		</div>

		<div class="requisitos">
			<h1>Principais impedimentos temporários:</h1>
			<ol>
				<li>
					<span>Resfriado:</span>
					<h2>7 dias após os sintomas desaparecerem.</h2>
				</li>
				<li>
					<span>Gravidez e pós-parto:</span>
					<h2>90 dias após parto normal e 180 dias após cesariana.</h2>
				</li>
				<li>
					<span>Amamentação:</span>
					<h2>Até 12 meses após o parto.</h2>
				</li>
				<li>
					<span>Bebida alcoólica:</span>
					<h2>12 horas antes da doação.</h2>
				</li>
				<li>
					<span>Tatuagem e piercing:</span>
					<h2>6 a 12 meses, dependendo das condições de realização.</h2>
				</li>
				<li>
					<span>Procedimentos médicos:</span>
					<h2>Variam de 24 horas (acupuntura segura) a 6 meses (procedimentos endoscópicos).</h2>
				</li>
			</ol>
		</div>

		<div class="requisitos">
			<h1>Principais impedimentos definitivos:</h1>
			<ol>
				<li>Hepatite após os 11 anos de idade.</li>
				<li>Doenças transmissíveis pelo sangue: Hepatites B e C, HIV, HTLV I e II, Doença de Chagas.</li>
				<li>Uso de drogas ilícitas injetáveis.</li>
				<li>Doença de Parkinson.</li>
			</ol>
		</div>

		<div class="requisitos">
			<h1>Intervalos entre doações:</h1>
			<ol>
				<li>Homens: 60 dias (máximo de 4 doações por ano).</li>
				<li>Mulheres: 90 dias (máximo de 3 doações por ano).</li>
			</ol>
		</div>

		<b-row>
			<b-col>
				<router-link to="/agendamentos">
					<b-button class="w-100 btn" @click="btn_voltar">Voltar para Agendamento</b-button>
				</router-link>
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name: "RequisitosDoacao"
};
</script>


<style scoped>
.fundo {
	background-color: red;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: auto;
	padding: 20px;
	box-sizing: border-box;
}

#title,
h1 {
	font-size: 24px;
	text-align: center;
	color: white;
	margin-bottom: 20px;
}

.requisitos {
	text-align: left;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 8px;
	padding: 20px;
	margin: 10px;
	width: 100%;
	max-width: 600px;
	box-sizing: border-box;
}

ol {
	padding-left: 20px;
}

li {
	font-size: 18px;
	margin-bottom: 10px;
	font-weight: bold;
	list-style-position: inside;
}

h2 {
	font-size: 18px;
	font-weight: normal;
	margin: 5px 0 15px 0;
	color: black;
}

.btn {
	background-color: #952626;
	border: 0;
	font-size: 22px;
}
</style>
