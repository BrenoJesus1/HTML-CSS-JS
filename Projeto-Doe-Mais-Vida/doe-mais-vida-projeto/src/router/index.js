import Vue from 'vue';
import Login from '../components/Cadastros/Login.vue';
import VueRouter from 'vue-router';
import CadastroUsuario from '../components/Cadastros/CadastroUsuario.vue';
import RecuperaConta from '../components/Cadastros/RecuperaConta.vue';
import Home from '../components/Home/Home.vue';
import Agendamentos from '../components/Agendamentos/AgendamentosTela.vue';
import RequisitosBasicos from '../components/Agendamentos/RequisitosBasicos.vue';
import PerfilUser from '../components/Perfil/PerfilUser.vue';
import PerfilEdit from '../components/Perfil/PerfilEdit.vue';
import RedefiniSenha from '../components/Cadastros/RedefiniSenha.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
	{
    path: '/home',
    component: Home
  },
	{
		path: '/cadastroUsuario',
		component: CadastroUsuario
	},
	{
		path: '/recuperarConta',
		component: RecuperaConta
	},
	{
		path: '/redefinirSenha',
		component: RedefiniSenha
	},
  {
    path: '/agendamentos',
    component: Agendamentos
  },
  {
    path: '/requisitos',
    component: RequisitosBasicos
  },
  {
    path: '/perfilUser',
    component: PerfilUser
  },
  {
    path: '/perfilEdit',
    component: PerfilEdit
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
