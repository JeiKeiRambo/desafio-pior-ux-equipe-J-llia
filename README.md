# desafio-pior-ux-equipe-J-llia

## Sobre o Projeto

Este projeto foi desenvolvido para criar propositalmente uma experiência
de usuário ruim, mas ainda funcional.

A interface utiliza cores exageradas, elementos deslocados,
mensagens confusas, regras absurdas e feedbacks exagerados.

O objetivo é demonstrar como decisões ruins de UI podem prejudicar
a experiência do usuário.

## Princípios e Heurísticas Violados

### 1. Visibilidade do status do sistema

Ao clicar em AVANÇAR, tomates aparecem na tela mesmo quando existe
um erro no formulário.

### 2. Correspondência entre o sistema e o mundo real

A senha exige exatamente 12 números e um emoji de fruta,
uma regra sem justificativa para um cadastro comum.

### 3. Consistência e padrões

A interface utiliza várias cores, rotações, bordas e estilos diferentes.

### 4. Prevenção de erros

O sistema não ajuda adequadamente o usuário a evitar os erros.

### 5. Reconhecimento em vez de memorização

O usuário precisa memorizar uma regra específica para a senha.

### 6. Estética e design minimalista

A interface possui excesso de cores, sombras, bordas,
animações e elementos decorativos.

### 7. Ajuda para reconhecer e corrigir erros

As mensagens são exageradas e pouco claras.

## Proposta de Correção / Versão Ideal

Uma versão ideal deveria possuir:

- hierarquia visual clara;
- cores consistentes;
- campos alinhados;
- mensagens de erro próximas aos campos;
- regras de senha claras;
- feedback objetivo;
- botões consistentes;
- menos elementos decorativos;
- boa acessibilidade e contraste.

## Como Executar

Abra o arquivo `index.html` no navegador.

Também é possível executar um servidor local com:

```bash
python -m http.server 8000 