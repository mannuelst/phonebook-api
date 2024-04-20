# phonebook-api

## Descrição

Este é um projeto de API para gerenciar uma agenda de contatos. Utiliza o [Fastify](https://www.fastify.io/) como framework web e o [Prisma](https://www.prisma.io/) como ORM para interagir com o banco de dados.

## Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:

```bash
git clone https://github.com/mannuelst/phonebook-api.git
```

2. Instale as dependências:

```bash
npm install
```

## Configuração

Antes de iniciar a API, é necessário configurar o banco de dados. Certifique-se de ter um banco de dados configurado e atualize as configurações de conexão no arquivo `prisma/schema.prisma`.

Em seguida, execute o seguinte comando para aplicar as migrações do banco de dados:

```bash
npx prisma migrate dev
```

## Uso

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.
