# Fundamentos Nodejs - Challenge 

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#fundamentos-do-nodejs---challenge">Fundamentos do NodeJS - Challenge</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
</p>

## Sobre

Desafio proposto no primeiro módulo do Bootcamp Ignite 2023 na trilha de NodeJS.

## Fundamentos do NodeJS - Challenge

Desafio proposto na trilha de NodeJS do bootcamp Ignite 2023 no módulo: **Fundamentos do NodeJS**.

O desafio proposto foi criar uma API para realizar o CRUD de tarefas. A aplicação contem as seguintes funcionalidades:

- [x] Criação de task.
- [x] Listagem de todas as tasks.
- [x] Atualização de uma task pelo `id`.
- [x] Remoção uma task pelo `id`.
- [x] Marcar pelo `id` uma task como completa.
- [x] Importação de tasks em massa por um arquivo CSV.

As tasks possuem as seguintes propriedades:

- **_id_** - Identificador único de cada task.
- **_title_** - Título da task.
- **_description_** - Descrição detalhada da task.
- **_completed_at_** - Data de quando a task foi concluída. O valor inicial deve ser `null`.
- **_created_at_** - Data de quando a task foi criada.
- **_updated_at_** - Deve ser sempre alterado para a data de quando a task foi atualizada.

### Rotas da aplicação

<details>
  <summary>GET - <code>/tasks</code></summary>
  <br>
    Lista todas as tasks salvas no banco de dados. Também é possível realizar uma busca, filtrando as tasks pelo <code>title</code> e <code>description</code>.
</details>

<details>
  <summary>POST - <code>/tasks</code></summary>
  <br>
  Cria uma task no banco de dados com os campos <code>title</code> e <code>description</code> recebidos por meio do <code>body</code> da requisição.
  Ao criar uma task, os campos: <code>id</code>, <code>created_at</code>, <code>updated_at</code> e <code>completed_at</code> são preenchidos automaticamente, conforme a descrição das propriedades de uma task acima.
</details>

<details>
  <summary>PUT - <code>/tasks/:id</code></summary>
  <br>
  Rota para atualizar uma task pelo <code>id</code>.
  O <code>body</code> da requisição, deve conter somente o <code>title</code> e/ou <code>description</code> para serem atualizados. Se for enviado somente o <code>title</code>, significa que o <code>description</code> não será atualizado e vice-versa.
</details>

<details>
  <summary>DELETE - <code>/tasks/:id</code></summary>
  <br>
  Remove uma task pelo <code>id</code>.
</details>

<details>
  <summary>PATCH - <code>/tasks/:id/complete</code></summary>
  <br>
  Marca uma task como completa ou incompleta.
</details>

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/). Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/enzopavanelli/challenge-fundamentos-nodejs.git

# Acesse a pasta do projeto no terminal/cmd
$ cd challenge-fundamentos-nodejs

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# Para executar a criação das tasks por CSV execute
$ node --watch streams/import-csv.js

# O servidor iniciará na porta 3333 - acesse <http://localhost:3333>
```

## Tecnologias

[![My Skills](https://skillicons.dev/icons?i=nodejs,js)](https://skillicons.dev)
