# Guia de Deployment - Seguradora Landing Page

## 🚀 Opção 1: Deploy no GitHub Pages (Recomendado)

### Pré-requisitos
- Conta no GitHub
- Git instalado localmente

### Passo a Passo

#### 1. Criar Repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha os dados:
   - **Repository name**: `seguradora-landing`
   - **Description**: Landing page para seguradora
   - **Public** (para GitHub Pages funcionar gratuitamente)
3. Clique em "Create repository"

#### 2. Configurar Git Localmente

```bash
# Navegar para o diretório do projeto
cd seguradora-landing

# Inicializar git (se não estiver)
git init

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/seguradora-landing.git

# Configurar branch padrão
git branch -M main

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Seguradora landing page completa"

# Push para GitHub
git push -u origin main
```

#### 3. Habilitar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em "Build and deployment":
   - **Source**: Selecione "GitHub Actions"
5. O workflow será executado automaticamente

#### 4. Acessar o Site

Após alguns minutos, o site estará disponível em:
```
https://SEU_USUARIO.github.io/seguradora-landing/
```

---

## 🚀 Opção 2: Deploy em Outro Servidor

### Vercel (Alternativa Rápida)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist/public
```

### Servidor Próprio (Node.js)

```bash
# Build
pnpm run build

# Copiar arquivos para servidor
scp -r dist/public/* usuario@seu-servidor:/var/www/seguradora/

# Reiniciar servidor web (nginx/apache)
```

---

## 📋 Checklist Pré-Deploy

- [ ] Todas as imagens carregam corretamente
- [ ] Links de navegação funcionam
- [ ] Simulador de preços calcula corretamente
- [ ] Botão WhatsApp redireciona para o número correto
- [ ] Formulário de simulação envia dados
- [ ] Site é responsivo em mobile
- [ ] Sem erros no console do navegador
- [ ] Performance está boa (Lighthouse 90+)

---

## 🔧 Configurações Importantes

### Alterar Número do WhatsApp

Edite `client/src/components/WhatsAppButton.tsx`:

```typescript
const phoneNumber = '5511999999999'; // Seu número aqui
```

### Alterar Informações de Contato

Edite `client/src/components/Footer.tsx`:

```typescript
<span>0800 123 4567</span>  // Telefone
<span>contato@seguradora.com</span>  // Email
<span>São Paulo, SP</span>  // Endereço
```

### Alterar Redes Sociais

Edite os links em `client/src/components/Footer.tsx`:

```typescript
href="https://facebook.com/sua-pagina"
href="https://twitter.com/seu-usuario"
href="https://linkedin.com/company/sua-empresa"
```

---

## 🎨 Customizações Recomendadas

### 1. Adicionar Logo Personalizado

Substitua o "S" no Header por um logo:

```typescript
// Em client/src/components/Header.tsx
<img src="/logo.png" alt="Logo" className="w-10 h-10" />
```

### 2. Integrar com Backend

Para enviar dados do formulário:

```typescript
// Em client/src/components/Simulation.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://seu-api.com/quotes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quote, email })
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

### 3. Adicionar Google Analytics

Edite `client/index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🐛 Troubleshooting

### Site não carrega no GitHub Pages

1. Verifique se o branch é "main"
2. Confirme que "GitHub Actions" está selecionado em Pages
3. Verifique os logs do workflow em "Actions"

### Imagens não aparecem

1. Verifique se as URLs estão corretas
2. Confirme que a base path está configurada (`/seguradora-landing/`)
3. Teste em modo incógnito (cache)

### Formulário não funciona

1. Verifique o console do navegador (F12)
2. Confirme que o email é válido
3. Teste em outro navegador

---

## 📞 Suporte

Para dúvidas sobre o deployment:
- Consulte a documentação do GitHub Pages
- Verifique os logs em "Actions" → "Workflows"
- Teste localmente com `pnpm run build && pnpm run preview`

---

**Sucesso no deploy! 🎉**
