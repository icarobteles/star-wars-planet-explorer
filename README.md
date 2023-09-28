# Star Wars - Exploração Planetária

Esse projeto foi desenvolvido como solução para um desafio técnico de uma vaga para Desenvolvedor Front-End. A proposta base desse projeto é criar uma aplicação web em React que permite aos usuários buscarem informações sobre planetas da saga Star Wars usando a API pública do Star Wars, a SWAPI.

## Requisitos Funcionais

- Opções de filtragem por: nome e população.
- Pesquisa por um planeta específico.
- Página de detalhes de um planeta pesquisado.
- Possibilidade de editar o nome dos planetas localmente.

## Requisitos Técnicos

- Utilizar React
- Consumir a API: [SWAPI](https://swapi.dev/documentation#planets)
- Gerenciar estados de forma apropriada
- Tratar os erros de chamada à API e fornecer feedback ao usuário.
- Replicar fielmente o design fornecido pelo desafio.
- Aplicação de TDD.

## Como Rodar a Aplicação?

Você deve ter o git e o node instalado em sua máquina e executar os seguintes comandos no terminal:

```bash
git clone https://github.com/icarobteles/star-wars-planet-explorer.git
cd star-wars-planet-explorer
npm install
npm start
```

## Requisitos de Design

A aplicação deve seguir fielmente o design disponibilizado no [Figma](https://www.figma.com/file/Z7rryquU677ifYXJIWCipC/Star-Wars?type=design&node-id=0%3A1&mode=design&t).

## Tecnologias Utilizadas

- React
- TypeScript
- Axios
- Vite
- Vitest + React Testing Library
- Styled-Components
- Zod
- Git + GitHub

## Técnicas Utilizadas

- Conventional Commits
- Atomic Commits
- TDD
