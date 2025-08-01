const apiUrl = 'http://localhost:5000/produtos'
const listaProdutos = document.getElementById('lista-produtos');
const btnNovoProduto = document.getElementById('btn-novo-produto');
const modalNovoProduto = document.getElementById('modal-novo-produto');
const formNovoProduto = document.getElementById('form-novo-produto');
const modalEditarProduto = document.getElementById('modal-editar-produto');
const formEditarProduto = document.getElementById('form-editar-produto');

btnNovoProduto.addEventListener('click', abrirModalNovoProduto);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (modalNovoProduto.style.display != 'none') {
            fecharModalNovoProduto();
        };
        if (modalEditarProduto.style.display != 'none') {
            fecharModalEdicaoProduto();
        };
    }
});
formNovoProduto.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio padrão do formulário
    const nome = document.getElementById('nome').value.trim();
    const preco = parseFloat(document.getElementById('preco').value);
    cadastrarProduto(nome, preco);
});
formEditarProduto.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita envio padrão do formulário
    const id = document.getElementById('produto-id').value;
    const nome = document.getElementById('nome-editar').value.trim();
    const preco = parseFloat(document.getElementById('preco-editar').value);
    console.log(id + nome + preco);
    salvarEdicaoProduto(id,nome,preco);
});

// Carrega a lista no evento onload da janela
window.onload = () => {
    listarProdutos();
};

// Função para listar produtos
function listarProdutos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            listaProdutos.innerHTML = ''; // Limpa a lista antes de adicionar novos itens
            data.forEach(produto => {
                const li = document.createElement('li');
                li.innerHTML = `
                                <span class="nome">${produto.nome}</span>
                                <span class="preco">
                                ${'R$ ' + produto.preco.toFixed(2)}</span>
                                <button class="btn-editar" data-produto-id="${produto.id}">Editar</button>
                                <button class="btn-excluir" data-produto-id="${produto.id}">Excluir</button>
                            `;
                listaProdutos.appendChild(li);
                // Adicionar eventos de click para botões de editar e excluir
                const btnEditar = li.querySelector('.btn-editar');
                btnEditar.addEventListener('click', () => editarProduto(produto.id));
                //console.log('Editar produto de ID: ' + produto.id);
                const btnExcluir = li.querySelector('.btn-excluir');
                btnExcluir.addEventListener('click', () => excluirProduto(produto.id));
                //console.log('Excluir produto de ID: ' + produto.id);
            });
        })
        .catch(error => console.error('Erro ao listar produtos:', error));
}
// Função para abrir modal de novo produto
function abrirModalNovoProduto() {
    modalNovoProduto.style.display = 'block';
    formNovoProduto.reset(); // Limpar campos do formulário
}
// Função para fechar modal de novo produto
function fecharModalNovoProduto() {
    modalNovoProduto.style.display = 'none';
}
/*  Função para abrir modal de editar produto
    Para editar um novo produto, precisa recuperar os dados da API e 
    carregar para os elementos da interface e permitir a edição 
*/
function abrirModalEditarProduto(produtoId) {
    fetch(`${apiUrl}/${produtoId}`)
        .then(response => response.json())
        .then(produto => {
            document.getElementById('produto-id').value = produto.id;
            console.log('carregou o id para produto-id no document: ' + produto.id);
            document.getElementById('nome-editar').value = produto.nome;
            document.getElementById('preco-editar').value = produto.preco;
            modalEditarProduto.style.display = 'block';
        })
        .catch(error => console.error('Erro ao buscar produto:', error));
}

// Função para fechar modal de editar produto
function fecharModalEdicaoProduto() {
    modalEditarProduto.style.display = 'none';
}
// Função para cadastrar novo produto
function cadastrarProduto(nome,preco) {
    console.log('Entrou em cadastrarProduto()');
    const dados = {
    nome,
    preco
    };

    fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
    })
    .then(response => {
        if (response.ok) {
            fecharModalNovoProduto();
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
// Função para editar produto
function editarProduto(produtoId) {
    abrirModalEditarProduto(produtoId);
}
// Função para salvar edição de produto
function salvarEdicaoProduto(id,nome,preco) {
    const dados = {
        nome: nome,
        preco: parseFloat(preco)
    };
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
            console.log(reponse.JSON);
            if (response.ok) {
                fecharModalEditacaoProduto();
                listarProdutos();
                alert('Produto atualizado com sucesso!');
            } else {
                    console.error('Erro ao editar produto:', response.status);
                    alert('Erro ao editar produto. Consulte o console para mais detalhes.');
                }
        })
        .catch(error => {
            console.log(reponse.JSON);
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

