# Mabel - Gerador de Domínios Gratuitos

## Estrutura do Projeto

```
/
├── index.html           # Ponto de entrada HTML e CDN Tailwind
├── index.tsx            # Ponto de entrada React
├── App.tsx              # Configuração de Rotas e Providers
├── types.ts             # Definições de Tipos TypeScript
├── metadata.json        # Metadados do App
├── services/
│   └── api.ts           # Mock Backend (Simula API, DB e Emails)
├── context/
│   └── AuthContext.tsx  # Gestão de Estado de Autenticação
├── components/
│   ├── Layout.tsx       # Layout Principal (Navbar, Footer)
│   ├── ProtectedRoute.tsx # Guardião de rotas privadas
│   ├── Button.tsx       # Componente UI
│   └── Input.tsx        # Componente UI
└── pages/
    ├── Home.tsx         # Landing Page
    ├── Register.tsx     # Cadastro
    ├── Login.tsx        # Login
    ├── VerifyEmail.tsx  # Validação de Código
    └── Dashboard.tsx    # Área do Usuário
```

## Fluxo de Funcionamento

1.  **Registo**: O utilizador cria conta. Um código é "enviado" (simulado no console e alerta).
2.  **Verificação**: O utilizador insere o código para ativar a conta.
3.  **Login**: Acesso permitido apenas a contas verificadas.
4.  **Dashboard**: O utilizador cria subdomínios (ex: `teste.mabel.app`).
5.  **Persistência**: Dados salvos no `localStorage` do navegador.

## Como Implementar e Implantar (Gratuitamente)

### Frontend (React + Vite)
1.  Use `create-vite` para gerar o projeto.
2.  Copie os componentes fornecidos.
3.  Hospede no **Vercel** ou **Netlify** (conecta com GitHub e deploy automático).

### Backend (Opções Gratuitas)
Para substituir o `services/api.ts` por um backend real:

1.  **Supabase (Recomendado)**:
    *   Banco de dados PostgreSQL gratuito.
    *   Autenticação (Auth) já pronta.
    *   Substitua `api.ts` pelo cliente JS do Supabase.

2.  **Firebase**:
    *   Auth e Firestore (NoSQL).
    *   Excelente plano gratuito.

3.  **Serviço de Email**:
    *   Use **EmailJS** (frontend only) ou **Resend** (via Edge Functions) para enviar os códigos reais.

### DNS e Subdomínios
Para que os subdomínios `usuario.mabel.app` funcionem realmente:
1.  Configure um **Wildcard DNS** (`*.mabel.app`) no seu provedor de domínio (ex: Cloudflare).
2.  Aponte para o IP do seu servidor/frontend.
3.  No código do frontend, leia `window.location.hostname` para identificar qual subdomínio está sendo acessado e renderizar o conteúdo correspondente.
