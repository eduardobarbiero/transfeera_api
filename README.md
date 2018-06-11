# Transfeera!
## Projeto teste para desenvolvedor na transfeera.

Cadastros de Estados, Cidades e CEPs

## Tecnologias
* Node v7.10.0
* Npm v6.1.0
* Hapi v17.5.1
* PG v7.4.3
* Sequelize v4.37.10
* Postgres v9.6.0

## Utilização
### Requisitos necessários:
* [NodeJS](http://nodejs.org/) (with [NPM](https://www.npmjs.org/))
* [Postgres](https://www.postgresql.org/download/)

### Instalação
1. Clone o repositório: `git clone https://github.com/eduardobarbiero/transfeera_api.git`;
2. Instale as dependências: `npm install`;
3. Para criação da base de dados(caso for local) utilizar `sequelize db:create`;
4. Migração da base de dados utilizar `sequelize db:migrate`;
5. A configuração dos dados de conexão com o banco de dados e porta do servidor devem ser feitos através de variaveis de ambiente para ser usado em produção: 
* NODE_ENV - default development;
* PORT - default 3000;
* DB_USERNAME;
* DB_PASSWORD;
* DB_NAME;
* DB_HOSTNAME;
* DB_PORT.
7. Execute `npm start` para iniciar o servidor;
8. Utilize a URL `http://localhost:8080/#/ ou com o numero da porta que foi definida`.
