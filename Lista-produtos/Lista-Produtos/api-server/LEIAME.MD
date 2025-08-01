
# SOBRE O FUNCIONAMENTO DO BACK-END 
## APIRestful - Produtos

A API Produtos é uma APIRestful desenvolvida em Python com Flask (micro framework de desenvolvimento web no Python) e sqlite. 

Ela cria um banco de dados em sqlite chamado `banco.db` com uma tabela **Produtos** e implementa o CRUD dessa tabela. 

O código no arquivo `server.py` é um exemplo de um **aplicativo web usando o framework Flask** para uso acadêmico. 

Vou entender as partes principais:

1. **Inicialização e Configuração**:
   - O Flask é inicializado com `app = Flask(__name__)`.
   - A configuração do banco de dados é definida com `app.config['SQLALCHEMY_DATABASE_URI']`.
   - O SQLAlchemy é configurado com `db = SQLAlchemy(app)`.

2. **Classe Produto**:
   - A classe `Produto` representa uma entidade (tabela) no banco de dados.
   - Ela possui as colunas `id`, `nome` e `preco`.
   - O método `serialize` converte os dados do produto em um formato JSON.

3. **Rotas**:
   - `/produtos` (GET): Retorna todos os produtos.
   - `/produtos/<int:produto_id>` (GET): Retorna um produto específico com base no ID.
   - `/produtos` (POST): Cria um novo produto com base nos dados enviados.
   - `/produtos/<int:produto_id>` (PUT): Atualiza os dados de um produto existente.
   - `/produtos/<int:produto_id>` (DELETE): Remove um produto do banco de dados.

4. **CORS (Cross-Origin Resource Sharing)**:
   - O CORS é configurado para permitir solicitações de origens específicas (por exemplo, `http://127.0.0.1:5500`).

5. **Execução**:
   - O aplicativo é executado com `app.run(debug=True)`.

Esse código cria um servidor web usado para gerenciar produtos em um banco de dados SQLite. Ele oferece endpoints para listar, criar, atualizar e excluir produtos.

Todo o código da APIRestful Produtos está no arquivo `server.py`, para executá-lo pela primeira vez, os pacotes a seguir devem ser instalados utilizando o pip:
```
pip install flask flask-sqlalchemy flask_cors
``` 
Para iniciar a API Produtos, execute server.py no prompt ou no terminal do VSCode:

```cmd
python server.py

* Serving Flask app 'server'
 * Debug mode: on
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on http://127.0.0.1:5000
Press CTRL+C to quit
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 100-995-094
```

Se a mensagem a seguir for exibida, a API estará disponível.

Para acessá-la, use um navegador ou o live server no VSCode:
```
http://127.0.0.1:5000/produtos
```
Se o banco de dados não existir, ele será criado com a tabela Produtos vazia e a resposta exibida será [] que representa uma um JSON vazio:
```
[ ]
```
Para inserir produtos na tabela, utilize uma ferramenta como Postman ou HTTPie.

# SOBRE O FUNCIONAMENTO DO FRONT-END

O front-end foi implementado em HTML, CSS e Javascript. Para melhor entendimento do script.js foram adicionados comentários e as principais partes do código são explicadas a seguir:

# 1. Variáveis Globais:

  * apiUrl: Armazena a URL da API para comunicação com o back-end (ex: http://localhost:5000/produtos).
  ## Elementos HTML:
  * `listaProdutos`: Referencia a lista HTML onde os produtos serão exibidos.
  * `btnNovoProduto`: Referencia o botão HTML para abrir o modal de novo produto.
  * `modalNovoProduto`: Referencia o elemento HTML do modal de novo produto.
  * `formNovoProduto`: Referencia o elemento HTML do formulário de novo produto.
  * `modalEditarProduto`: Referencia o elemento HTML do modal de editar produto.
  * `formEditarProduto`: Referencia o elemento HTML do formulário de editar produto.

# 2. Eventos:

  ```
  btnNovoProduto.addEventListener('click', abrirModalNovoProduto)
  ```
  Adiciona um evento de clique ao botão de novo produto.
  Quando clicado, executa a função abrirModalNovoProduto para abrir o modal de novo produto.
  ````
  document.addEventListener('keydown', function(e) {...})
  ````
  Adiciona um evento de pressionar tecla ao documento. Quando a tecla "Escape" for pressionada:
    - Verifica se o modal de novo produto está aberto e o fecha, se for o caso.
    - Verifica se o modal de editar produto está aberto e o fecha, se for o caso.
  
  ```
  formNovoProduto.addEventListener('submit', function(e) {...})
  ```
  Adiciona um evento de submit ao formulário de novo produto.
  Quando o formulário for submetido:
  Evita o envio padrão do formulário.
  Obtém os valores dos campos "nome" e "preco".
  Chama a função cadastrarProduto para cadastrar o novo produto na API.

  ```
  formEditarProduto.addEventListener('submit', function(e) {...})
  ```
  Adiciona um evento de submit ao formulário de editar produto.
  Quando o formulário for submetido:
  Evita o envio padrão do formulário.
  Obtém os valores dos campos "produto-id", "nome-editar" e "preco-editar".
  Chama a função salvarEdicaoProduto para salvar as alterações do produto na API.

# 3. Funções:

  * `listarProdutos()`:
    Busca a lista de produtos da API e a exibe na lista HTML.
    Faz a requisição GET para a URL da API.
    Converte a resposta JSON em um array de produtos.
    Percorre cada produto e cria um item de lista HTML com as informações do produto (nome, preço, botões de editar e excluir).
    Adiciona o item de lista à lista HTML.
    Adiciona eventos de clique aos botões de editar e excluir para chamar as funções correspondentes.

  
    ```javascript
    // Função para listar produtos
      function listarProdutos() {
        // ... (busca dados da API)

        // Limpa a lista de produtos antes de adicionar novos itens
        listaProdutos.innerHTML = '';

        // Percorre cada produto e cria um item de lista HTML
        data.forEach(produto => {
          const li = document.createElement('li');
          li.innerHTML = `
            <span class="nome">${produto.nome}</span>
            <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
            <button class="btn-editar" data-produto-id="${produto.id}">Editar</button>
            <button class="btn-excluir" data-produto-id="${produto.id}">Excluir</button>
          `;
          listaProdutos.appendChild(li);

          // Adiciona eventos de click para botões de editar e excluir
          const btnEditar = li.querySelector('.btn-editar');
          btnEditar.addEventListener('click', () => editarProduto(produto.id));
          const btnExcluir = li.querySelector('.btn-excluir');
          btnExcluir.addEventListener('click', () => excluirProduto(produto.id));
        });

        // ... (restante do código)
      }
  * `abrirModalNovoProduto()`:
    Exibe o modal de novo produto definindo seu estilo de display como "block".
    Limpa os campos do formulário de novo produto utilizando o método `reset()`.
  * `fecharModalNovoProduto()`:
    Oculta o modal de novo produto definindo seu estilo de display como "none".
  * `abrirModalEditarProduto(produtoId)`:
    Exibe o modal de editar produto definindo seu estilo de display como "block".
    Busca as informações do produto pela API utilizando o ID do produto.
    Preenche os campos do formulário de editar produto com as informações do produto obtido.
  * `fecharModalEdicaoProduto()`:
    Oculta o modal de editar produto definindo seu estilo de display como "none".
  * `cadastrarProduto(nome, preco)`:
      Cria um objeto com as informações do novo produto (nome e preço).
      Faz a requisição POST para a URL da API, enviando o objeto do produto como JSON no corpo da requisição.
      Processa a resposta da API:
      Se a requisição for bem-sucedida:
      Fecha o modal de novo produto.
      Atualiza a lista de produtos.
      Exibe uma mensagem de sucesso.
      Se a requisição falhar:
          
          Javascript
          // Função para cadastrar novo produto
            function cadastrarProduto(nome, preco) {
              // Cria um objeto com as informações do produto
              const dados = {
                nome: nome.trim(), // Adiciona trim para remover espaços em branco
                preco: parseFloat(preco) // Converte o preço para um número real
              };

              // Faz a requisição POST para a API, enviando o objeto do produto como JSON
              fetch(apiUrl, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
              })
              // ... (restante do código)
            }


# 4. Tratamento de Erros em Funções de Requisição à API:
  * Captura de Erros:
      As funções cadastrarProduto(), salvarEdicaoProduto() e excluirProduto() utilizam o método fetch() para realizar requisições à API.
      O método fetch() retorna uma promessa (Promise).
      Se a requisição for bem-sucedida, a promessa é resolvida com um objeto Response.
      Se a requisição falhar, a promessa é rejeitada com um objeto Error.
  * Tratamento de Resposta Positiva (response.ok):
      O código verifica se a propriedade response.ok é true.
      Se true, a requisição foi bem-sucedida e o código executa as ações previstas para o sucesso, como atualizar a lista de produtos, fechar modais ou exibir mensagens de confirmação.
  * Tratamento de Erro (response.status):
      Se response.ok for false, a requisição falhou e o código captura o status da resposta (response.status).
      O status da resposta indica o tipo de erro que ocorreu, como erro 404 (recurso não encontrado), erro 500 (erro interno do servidor) etc.
      O código registra o erro no console usando console.error().
      Uma mensagem de alerta informativa é exibida para o usuário, detalhando o tipo de erro e orientando sobre como proceder.
  * Tratamento de Erro Inesperado (error):
      O método fetch() também pode lançar um objeto Error em caso de problemas inesperados, como falha na conexão com a internet ou problemas com o código JavaScript.
      O código captura esse erro usando o bloco catch().
      O erro é registrado no console usando console.error().
      Uma mensagem de alerta genérica é exibida para o usuário, informando que ocorreu um erro inesperado e sugerindo que ele tente novamente mais tarde.
      Exemplo Detalhado:
          
          JavaScript
          // Função para cadastrar novo produto
          function cadastrarProduto(nome, preco) {
            // ... (criação do objeto dados)

            fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dados)
            })
            .then(response => {
              if (response.ok) {
                // Sucesso na requisição:
                fecharModalNovoProduto();
                listarProdutos();
                alert('Produto cadastrado com sucesso!');
              } else {
                // Erro na requisição:
                console.error('Erro ao cadastrar produto:', response.status);
                switch (response.status) {
                  case 400:
                    alert('Erro nos dados do produto. Verifique os campos e tente novamente.');
                    break;
                  case 404:
                    alert('Produto não encontrado. Verifique o ID do produto e tente novamente.');
                    break;
                  case 500:
                    alert('Erro interno do servidor. Tente novamente mais tarde.');
                    break;
                  default:
                    alert('Erro ao cadastrar produto. Consulte o console para mais detalhes.');
                }
              }
            })
            .catch(error => {
              // Erro inesperado:
              console.error('Erro inesperado ao cadastrar produto:', error);
              alert('Erro inesperado ao cadastrar produto. Tente novamente mais tarde.');
            });
          }