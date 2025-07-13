# Landing Page API

Esta API fornece endpoints para exibir a informação de veículo, loja e receber mensagens de contato para uma landing page automotiva.

## Endpoints

- **GET /api/v1/landing/vehicle**  
  Retorna o veículo em destaque com suas imagens.

- **GET /api/v1/landing/store**  
  Retorna informações da loja (nome e WhatsApp).

- **POST /api/v1/landing/contact**  
  Recebe mensagens de contato.  
  Parâmetros esperados (JSON):  
  - `name` (string, obrigatório)
  - `phone` (string, obrigatório)
  - `email` (string, obrigatório, formato válido)
  - `message` (string, obrigatório)

## Execução em desenvolvimento

Para iniciar a API localmente:

```sh
bin/rails server
```

Acesse: [http://localhost:3000](http://localhost:3000)

## URL de produção

A API está disponível em produção em:

```
https://des-auto.onrender.com/api/v1/landing
```

## Testes

Execute todos os testes com:

```sh
bin/rails test
```
