# Guia de Personalização - Seguradora Landing Page

## 📝 Conteúdo da Página

### 1. Nome da Empresa

**Arquivo**: `client/src/components/Header.tsx`

```typescript
// Altere esta linha:
<span className="font-bold text-xl text-primary hidden sm:inline">
  Panamericano Seguros
</span>
```

### 2. Headlines e Descrições

**Arquivo**: `client/src/components/HeroBanner.tsx`

```typescript
<h1 className="text-primary font-bold leading-tight">
  Segurança para Você e Sua Família  {/* ← Seu headline */}
</h1>
<p className="text-lg text-neutral-dark/80 leading-relaxed">
  Oferecemos soluções de seguros completas e acessíveis...  {/* ← Sua descrição */}
</p>
```

### 3. Informações Institucionais

**Arquivo**: `client/src/components/Institutional.tsx`

```typescript
const values = [
  {
    title: 'Missão',
    description: 'Sua missão aqui...',
    // ...
  },
  {
    title: 'Visão',
    description: 'Sua visão aqui...',
    // ...
  },
  {
    title: 'Valores',
    description: 'Seus valores aqui...',
    // ...
  },
];
```

### 4. Categorias de Seguros

**Arquivo**: `client/src/components/Categories.tsx`

```typescript
const categories = [
  {
    id: 'family',
    title: 'Seguro Família',  // ← Título
    description: 'Proteção completa...',  // ← Descrição
    features: ['Cobertura Vida', 'Invalidez', 'Funeral'],  // ← Coberturas
    icon: '👨‍👩‍👧‍👦',  // ← Emoji
  },
  // Adicione mais categorias conforme necessário
];
```

### 5. Parceiros

**Arquivo**: `client/src/components/Partners.tsx`

```typescript
const partners = [
  { name: 'TechBank', logo: '🏦' },
  { name: 'CloudPay', logo: '💳' },
  // Adicione seus parceiros aqui
];
```

### 6. Informações de Contato

**Arquivo**: `client/src/components/Footer.tsx`

```typescript
<div className="flex items-center gap-2 text-white/70">
  <Phone className="w-4 h-4" />
  <span>0800 123 4567</span>  {/* ← Seu telefone */}
</div>
<div className="flex items-center gap-2 text-white/70">
  <Mail className="w-4 h-4" />
  <span>contato@seguradora.com</span>  {/* ← Seu email */}
</div>
<div className="flex items-center gap-2 text-white/70">
  <MapPin className="w-4 h-4" />
  <span>São Paulo, SP</span>  {/* ← Seu endereço */}
</div>
```

### 7. WhatsApp

**Arquivo**: `client/src/components/WhatsAppButton.tsx`

```typescript
const phoneNumber = '5511999999999';  // ← Seu número (com código do país)
const message = 'Olá! Gostaria de mais informações sobre os seguros.';  // ← Sua mensagem
```

---

## 🎨 Cores e Design

### Alterar Paleta de Cores

**Arquivo**: `client/src/index.css`

```css
:root {
  /* Corporative Insurance Brand Colors */
  --color-primary-blue: #1e40af;        /* ← Cor primária */
  --color-primary-blue-light: #3b82f6;
  --color-accent-orange: #f97316;       /* ← Cor de destaque */
  --color-accent-green: #10b981;        /* ← Cor de acento */
  --color-neutral-dark: #1f2937;        /* ← Texto escuro */
  --color-neutral-light: #f9fafb;       /* ← Fundo claro */
}
```

### Alterar Tipografia

**Arquivo**: `client/index.html`

```html
<!-- Altere os links de fontes Google -->
<link href="https://fonts.googleapis.com/css2?family=SUA_FONTE:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**Arquivo**: `client/src/index.css`

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'SUA_FONTE', sans-serif;  /* ← Sua fonte */
  font-weight: 700;
}
body {
  font-family: 'OUTRA_FONTE', sans-serif;  /* ← Sua fonte de corpo */
}
```

---

## 🖼️ Imagens

### Alterar Imagens das Categorias

**Arquivo**: `client/src/components/Categories.tsx`

```typescript
const categories = [
  {
    id: 'family',
    title: 'Seguro Família',
    image: 'https://sua-imagem-aqui.com/family.jpg',  // ← Nova URL
    // ...
  },
];
```

### Alterar Logo

1. Coloque seu logo em `client/public/logo.png`
2. Edite `client/src/components/Header.tsx`:

```typescript
<img src="/logo.png" alt="Logo" className="w-10 h-10" />
```

---

## 🔢 Simulador de Preços

### Alterar Preços Base

**Arquivo**: `client/src/components/Simulation.tsx`

```typescript
const BASE_PRICES = {
  auto: 150,        // ← Preço base para auto
  home: 200,        // ← Preço base para casa
  life: 100,        // ← Preço base para vida
  business: 300,    // ← Preço base para negócio
};
```

### Alterar Multiplicadores de Cobertura

```typescript
const COVERAGE_MULTIPLIERS = {
  basic: 0.5,       // ← 50% do preço base
  standard: 1,      // ← 100% do preço base
  premium: 1.5,     // ← 150% do preço base
};
```

### Alterar Range de Valores

```typescript
<input
  type="range"
  min="10000"        // ← Valor mínimo
  max="500000"       // ← Valor máximo
  step="10000"       // ← Incremento
  // ...
/>
```

---

## 🔗 Links e Navegação

### Adicionar Nova Seção

1. Crie um novo componente em `client/src/components/NovaSecao.tsx`
2. Importe em `client/src/pages/Home.tsx`
3. Adicione ao JSX:

```typescript
<main className="flex-1">
  <HeroBanner />
  <Simulation />
  <Institutional />
  <Categories />
  <NovaSecao />  {/* ← Sua nova seção */}
  <Partners />
</main>
```

4. Adicione o link no Header:

```typescript
const navLinks = [
  { label: 'Simulação', href: '#simulacao' },
  { label: 'Institucional', href: '#institucional' },
  { label: 'Categorias', href: '#categorias' },
  { label: 'Nova Seção', href: '#nova-secao' },  // ← Novo link
  { label: 'Parceiros', href: '#parceiros' },
];
```

---

## 📱 Responsividade

### Ajustar Breakpoints

**Arquivo**: `client/src/index.css` ou componentes individuais

```typescript
// Tailwind breakpoints
// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px
// 2xl: 1536px

// Exemplo de uso:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  {/* 1 coluna mobile, 2 tablet, 4 desktop */}
</div>
```

---

## 🚀 Deploy com Customizações

Após fazer suas customizações:

```bash
# Verificar se compila
pnpm run check

# Testar localmente
pnpm run dev

# Build para produção
pnpm run build

# Fazer commit
git add .
git commit -m "Customizações da landing page"

# Push para GitHub (deploy automático)
git push origin main
```

---

## 💡 Dicas Úteis

1. **Sempre teste localmente** antes de fazer push
2. **Use cores com contraste** para acessibilidade
3. **Otimize imagens** antes de adicionar
4. **Mantenha a hierarquia visual** consistente
5. **Teste em mobile** regularmente

---

## ❓ Precisa de Ajuda?

Consulte:
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Vite Docs](https://vitejs.dev)

---

**Happy customizing! 🎨**
