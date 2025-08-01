<script setup>
import {ref, onMounted} from 'vue' 
const apiUrl = 'http://localhost:5000/produtos'
const modalNewProduct = ref(false)
const modalEditProduct = ref(false)
const nome = defineModel("")
const preco = defineModel(0)
const products = ref([])
const productEditedId = ref()
const handleEsc = (event) => {
  if (event.key === "Escape") { 
    modalNewProduct.value = false
    modalEditProduct.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
  listarProdutos()
})

function saveProduct() {
    if (modalNewProduct.value) {
      newProduct()
    } else {
      editProduct(productEditedId.value)
    }
}

function abrirModalNovoProduto() {
    modalNewProduct.value = true
    nome.value=""
    preco.value=0
}

function abrirModalEditarProduto(produtoId) {
    productEditedId.value = produtoId    
    fetch(`${apiUrl}/${produtoId}`)
        .then(response => response.json())
        .then(produto => {
          nome.value = produto.nome
          preco.value = produto.preco
          modalEditProduct.value = true
        })
        .catch(error => console.error('Erro ao buscar produto:', error));   
}

function newProduct() {
    const dados = {
      nome:nome.value, 
      preco:preco.value,
    }
    cadastrarProduto(dados);
}

function editProduct(id) {
    const dados = {
      nome:nome.value, 
      preco:preco.value,
    }
    salvarEdicaoProduto(id,dados);
}

function cadastrarProduto(dados) {
    console.log('Entrou em cadastrarProduto()', dados);
    
    fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
              modalNewProduct.value = false
            listarProdutos();
            alert('Produto cadastrado com sucesso!');
        } else {
                console.error('Erro ao cadastrar produto:', response.status);
                alert('Erro ao cadastrar produto. Consulte o console para mais detalhes.');
            }
    })
    .catch(error => {
        console.error('Erro ao cadastrar produto:', error);
        alert('Erro inesperado ao cadastrar produto. Tente novamente mais tarde.');
    });
}

function salvarEdicaoProduto(id,dados) {
    
    console.log('Salvando produto editado!!');
    console.log(dados);

    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
        })
        .then(response => {
          console.log(response)
            if (response.ok) {
                modalEditProduct.value = false
                listarProdutos();
                alert('Produto atualizado com sucesso!');
            } else {
                    console.error('Erro ao editar produto:', response.status);
                    alert('Erro ao editar produto. Consulte o console para mais detalhes.');
                }
        })
        .catch(error => {
            console.log(error);
            console.error('Erro ao editar produto:', error);
            console.log(error);
            alert('Erro inesperado ao editar produto. Tente novamente mais tarde.');
            
        });
}

function excluirProduto(produtoId) {
    console.log('Excluindo produto:', produtoId);
    
    fetch(`${apiUrl}/${produtoId}`, {
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json'
        }
    })
        .then(response => {
        if (response.ok) {
            console.log('Produto excluído com sucesso!');
            listarProdutos(); // Atualiza a lista de produtos
            alert('Produto excluído com sucesso!');
        } else {
            console.error('Erro ao excluir produto:', response.status);
            alert('Erro ao excluir produto. Consulte o console para mais detalhes.');
        }
        })
        .catch(error => {
        console.error('Erro ao excluir produto:', error);
        alert('Erro inesperado ao excluir produto. Tente novamente mais tarde.');
        });
}


function listarProdutos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          products.value = data                     
        })
        .catch(error => console.error('Erro ao listar produtos:', error));
}
</script>



<template>
    <h1 id="titulo">Lista de Produtos</h1>
    <div id="lista-produtos">
      <li v-for="produto in products">
      <span class="nome">{{produto.nome}}</span>
      <span class="preco">
        {{ `R$${produto.preco.toFixed(2)}`  }}
      </span>
      <button class="btn-editar" @click="abrirModalEditarProduto(produto.id)">Editar</button>
      <button class="btn-excluir" @click="excluirProduto(produto.id)">Excluir</button>
      </li>
        
    </div>
    <button id="btn-novo-produto" @click="abrirModalNovoProduto">Novo Produto</button>
    <div id="modal-novo-produto" class="modal" v-if="modalNewProduct || modalEditProduct">
        <h2>{{ modalNewProduct ? "Novo" : "Editar"}} Produto</h2>
        <form id="form-novo-produto">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required v-model="nome">
            <label for="preco">Preço:</label>
            <input type="number" id="preco" name="preco" required v-model="preco">            
            <button type="button" @click="saveProduct">Salvar</button>
        </form>
    </div>
    
</template>

<style scoped>
body {
    font-family: sans-serif;     
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

#modal-novo-produto h2 {
    font-weight: bold;
}

#form-novo-produto label {
    font-weight: bold;
}

#titulo {    
    color: white;
    font-weight: bold;
    padding-bottom: 8px;
    margin-bottom: 0px;
    background-color: rgb(231, 176, 30, 0.4);    
}

#btn-novo-produto {
    display: flex;   
    margin-left: auto;
    margin-right: auto;
    border-radius:10cm;
    padding: 7px;
}

#btn-novo-produto:hover {
    padding: 0.7em;
    transition: 0.3s;
}

#lista-produtos {
    margin-bottom: 20px;
}

#lista-produtos ul {
    list-style: none;
    padding: 0;
}

#lista-produtos li {
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
}

#lista-produtos li span.nome {
    font-weight: bold;
}

#lista-produtos li span.preco {
    float: right;
}

.modal {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.6);
    padding-top: 10px;
    color: white;    
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 30%;
    margin-top: 20px;
}

button {
    margin-left: 5px;
    border-radius: 9px;
    background-color: black;
    color: white;
    padding: 5px;
}

button:hover {
    padding: 0.5em;
    transition: 0.3s;
}
</style>
