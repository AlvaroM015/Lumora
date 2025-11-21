# Lumora - Plataforma Corporativa

Uma plataforma web moderna e responsiva para empresas, desenvolvida com **HTML, CSS e JavaScript puro**, oferecendo funcionalidades de rede social corporativa, gerenciamento de tarefas, atividades de break e chat em tempo real.

##  Objetivo

Lumora é uma plataforma integrada que conecta funcionários, promove colaboração, gerencia tarefas e incentiva momentos de pausa saudáveis através de atividades em grupo e pareamento inteligente baseado em IA.

##  Funcionalidades Principais

### 📰 Feed de Postagens
- Visualizar postagens de colegas
- Criar novas postagens
- Curtir e comentar postagens
- Adicionar postagens aos favoritos
- Timeline em tempo real

###  Esteira de Tarefas
- Visualizar todas as tarefas da empresa
- Filtrar tarefas (todas, atribuídas a mim, concluídas)
- Ver responsáveis por cada tarefa
- Marcar tarefas como concluídas
- Prioridades e datas de vencimento

### Página de Break
- Atividades em grupo (Jogo da Memória, Trivia, Yoga, Meditação, Desenho, Karaokê)
- Pareamento inteligente de IA para encontrar companheiros compatíveis
- Visualizar compatibilidade com outros funcionários
- Sugestões de atividades baseadas em preferências

###  Chat
- Mensagens em tempo real
- Histórico de conversas
- Interface intuitiva e responsiva
- Notificações de novas mensagens

###  Modo Escuro
- Toggle de tema claro/escuro
- Persistência de preferência do usuário
- Design otimizado para ambos os modos

##  Stack Tecnológico

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos customizados e Tailwind CSS via CDN
- **JavaScript ES6+** - Lógica da aplicação
- **Tailwind CSS CDN** - Framework de estilos utilitários
- **Sem dependências externas** - Aplicação totalmente estática

##  Estrutura do Projeto

```
lumora/
├── index.html              # Arquivo HTML principal
├── css/
│   └── style.css          # Estilos customizados
├── js/
│   └── app.js             # Lógica principal da aplicação
├── assets/
│   ├── img/               # Imagens da plataforma
│   └── icons/             # Ícones SVG
├── data/
│   └── (JSONs simulados na memória)
└── README.md              # Este arquivo
```

##  Como Executar

### Localmente (Sem Servidor)
1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` diretamente no navegador
3. A aplicação carregará e funcionará completamente offline

### Com um Servidor Local (Recomendado)
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Depois acesse `http://localhost:8000` no seu navegador.

##  Responsividade

A plataforma é totalmente responsiva e funciona perfeitamente em:
-  Dispositivos móveis (320px+)
-  Tablets (768px+)
-  Desktops (1024px+)
-  Telas grandes (1280px+)

##  Design System

### Cores
- **Primária**: Azul (#3b82f6)
- **Secundária**: Roxo (#8b5cf6)
- **Sucesso**: Verde (#10b981)
- **Aviso**: Amarelo (#f59e0b)
- **Perigo**: Vermelho (#ef4444)

### Tipografia
- **Font Family**: Sistema de fontes do SO (San Francisco, Segoe UI, etc.)
- **Tamanhos**: Escalados com Tailwind CSS
- **Pesos**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Ícones
- Ícones estilo iOS (SVG inline)
- Sem dependências de bibliotecas de ícones
- Customizáveis e acessíveis

##  Dados e Privacidade

- Todos os dados são armazenados localmente no navegador
- Nenhum dado é enviado para servidores externos
- Preferências de tema são salvas em `localStorage`
- Dados são resetados ao limpar o cache do navegador

##  Acessibilidade

- Semântica HTML5 apropriada
- Labels e ARIA attributes
- Contraste de cores adequado (WCAG AA)
- Navegação por teclado suportada
- Focus visível em todos os elementos interativos
- Suporte a modo de movimento reduzido

##  Funcionalidades Futuras

- [ ] Integração com backend real
- [ ] Autenticação de usuários
- [ ] Persistência de dados em banco de dados
- [ ] Notificações em tempo real
- [ ] Upload de imagens
- [ ] Busca avançada
- [ ] Relatórios e analytics
- [ ] Integração com calendário
- [ ] Videochamadas
- [ ] Gamificação e badges

##  Contribuições

Este é um projeto educacional. Sinta-se livre para:
- Reportar bugs
- Sugerir novas funcionalidades
- Melhorar a documentação
- Otimizar o código

##  Licença

Este projeto é fornecido como está para fins educacionais e comerciais.

##  Autores

Desenvolvido como uma plataforma corporativa moderna e responsiva.

---

**Versão**: 1.0.0  
**Última atualização**: Novembro 2025  
**Status**: Em desenvolvimento


---

## Módulo "Profissões do Futuro" (GS – Framework & RWD)

Este projeto inclui uma SPA na raiz (`/`) que carrega uma lista de 40 profissões do futuro ligadas a comércio exterior e logística internacional, com:

- Filtros por área (Tecnologia & Dados, Operações & Logística, Negócios & Estratégia Global, Sustentabilidade & Compliance, Experiência do Cliente & Pessoas)
- Filtros por demanda (Alta, Média, Baixa)
- Busca por título
- Dark Mode com persistência em `localStorage`
- Layout responsivo com Tailwind CSS

A lista de profissões agora é carregada a partir da **API Node/Express** (rota `http://localhost:3000/api/professions`), que lê o mesmo arquivo `data/professions.json` no backend e devolve os dados em JSON. Essa lista é utilizada nas seguintes disciplinas:

- **Computational Thinking** – mesma lista será servida por uma API (`/api/professions`)
- **Cloud & DevOps** – base para o app a ser feito deploy
- **Graphic/Web Design** – base visual do protótipo navegável

Preencha abaixo com os dados do grupo:

- Repositório GitHub:
- GitHub Pages:
- Integrantes e RMs:

---

## 🗂 Estrutura do Repositório

```text
/backend   -> API Node/Express (rota /api/professions)
/frontend  -> SPA estática (HTML, CSS, JS, assets)
```

## Como Rodar o Projeto

### 1 Backend (Node/Express)

```bash
cd backend
npm install
npm start
```

O backend sobe em `http://localhost:3000` e expõe a rota:

- `GET /api/professions` → devolve o conteúdo de `data/professions.json`.

### 2 Frontend (SPA)

Abra o arquivo `frontend/index.html` em um servidor estático (por exemplo, a extensão **Live Server** no VS Code) ou publique no GitHub Pages.

A SPA consome a API via:

```js
fetch('http://localhost:3000/api/professions')
```

---

Este projeto demonstra a orquestração de dois serviços (Frontend Nginx e Banco de Dados MySQL) usando Docker Compose para simular um ambiente de deploy de produção.

1. Arquitetura da Solução (Trilha A)
A arquitetura utiliza uma abordagem multi-containers, onde o Frontend (SPA) é servido por um servidor web leve (Nginx) e o Backend (Banco de Dados) é isolado em um container MySQL.

Frontend (web): Contêiner Nginx que serve a Aplicação de Página Única (SPA) estática. Expõe a porta 8080 no host (sua máquina) e mapeia para a porta 80 do contêiner.

Banco de Dados (db): Contêiner MySQL que armazena os dados. Utiliza volumes para persistência dos dados e inicializa o schema e os dados iniciais (db/schema.sql e db/seed.sql) na primeira execução.

Orquestração: Gerenciada pelo docker-compose.yml que define a rede interna e as dependências entre os serviços.

2. Pré-Requisitos
Para executar o projeto, você precisa ter instalado:

Docker Engine

Docker Compose

Git

3. Como Executar o Deploy
Siga os passos abaixo para construir e iniciar o ambiente. O arquivo de configuração principal (docker-compose.yml e Dockerfile) está localizado no diretório /ops.

3.1. Navegação
Navegue até a pasta de deploy no terminal:

Bash

cd ops
3.2. Construção das Imagens
Construa as imagens do Docker, incluindo a imagem personalizada do Frontend que copia o código da SPA:

Bash

docker compose build --no-cache
3.3. Inicialização do Ambiente
Inicie os dois contêineres (web e db) em modo detached (segundo plano):

Bash

docker compose up -d
4. Validação e Evidências
Após a inicialização, você deve gerar as seguintes evidências para comprovar a funcionalidade da Trilha A.

4.1. Verificação do Status dos Contêineres
Confirme que ambos os serviços estão rodando (status Up):

Bash

docker compose ps
(INSERIR AQUI O PRINT DA SAÍDA DO COMANDO docker compose ps COM OS DOIS SERVIÇOS 'UP')

4.2. Acesso ao Frontend
Acesse a aplicação no seu navegador:

http://localhost:8080
(INSERIR AQUI O PRINT/GIF DA APLICAÇÃO CARREGANDO NO NAVEGADOR)

4.3. Validação do Banco de Dados
Conecte-se ao MySQL e valide que os scripts de inicialização foram executados, carregando as tabelas e dados.

Host: localhost

Porta: 3306 (Padrão)

Banco: gs_ai

(INSERIR AQUI O PRINT DA CONSULTA SQL MOSTRANDO OS DADOS DE EXEMPLO DO seed.sql)

5. Comandos de Limpeza (Opcional)
Para derrubar e remover os contêineres e volumes (para liberar recursos ou começar do zero):

Bash

# Derruba os contêineres e a rede
docker compose down

# Derruba os contêineres e remove os volumes (apaga os dados do banco)
docker compose down -v


## Integrantes e RMs
- Nome 1 Álvaro Milantonio — RM: 561652
- Nome 2 Victoria Barreto — RM: 562435
- Nome 3 Helena Cáceres RM: 563814
- Nome 4 Leonardo Basseti — RM: 