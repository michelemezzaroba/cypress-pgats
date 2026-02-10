# Projeto de Automação de Testes com Cypress

## 💻 Descrição do Projeto
Este projeto foi desenvolvido como Trabalho de Conclusão da disciplina **Automação de Testes na Camada de Interface (Web)**.  
O objetivo é automatizar testes de interface de um sistema web utilizando **Cypress**, garantindo que funcionalidades críticas estejam funcionando corretamente.

Os testes foram implementados na plataforma **Automation Exercise**:  
https://automationexercise.com/test_cases  

Utiliza a aplicação fictícia **Automation Exercise**, que simula um e-commerce para prática de automação de testes.

Os casos de teste implementados são:  
**1, 2, 3, 4, 5, 6, 8, 9, 10 e 15**, cobrindo funcionalidades como:
- Login e registro de usuários  
- Navegação e busca de produtos  
- Interação com carrinho de compras  
- Envio de formulários e validação de mensagens  
- Verificação de elementos da interface  

---

## ⚙️ Tecnologias Utilizadas
- **Cypress** — Framework de automação de testes end-to-end para aplicações web  
- **JavaScript** — Linguagem utilizada para escrita dos testes  
- **Node.js** — Ambiente de execução dos scripts  
- **npm** — Gerenciador de pacotes  

---

## 📁 Estrutura do Projeto

```
cypress/
├── fixtures/          # Arquivos de dados de teste (ex.: JSON)
├── integration/       # Scripts de teste
│   ├── login.spec.js
│   ├── cadastro.spec.js
│   ├── produtos.spec.js
│   ├── carrinho.spec.js
│   └── contato.spec.js
├── support/           # Comandos customizados e configurações globais
cypress.json           # Configurações do Cypress
package.json           # Dependências e scripts do projeto
README.md              # Documentação do projeto
```

---

## 🚀 Pré-requisitos
Para executar este projeto, você precisa ter instalado:
- Node.js **v14 ou superior**
- npm **v6 ou superior**
- Navegador **Chrome** ou **Edge** (recomendado)

---

## 🏃 Como Executar os Testes

### 1️⃣ Instalar dependências
```
npm ci
```

### 2️⃣ Executar os testes em modo headless
```
npm test
```

### 3️⃣ Executar em modo interativo
```
npx cypress open
```

ou

```
npm run cy:open
```
