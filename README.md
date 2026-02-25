# Seguradora Landing Page

Landing page moderna e responsiva para uma seguradora, desenvolvida com React, TypeScript e Tailwind CSS.

## 🎯 Características

- ✅ Design corporativo moderno com paleta de cores profissional
- ✅ Todas as seções solicitadas implementadas:
  - Menu de navegação fixa
  - Hero Banner com CTA
  - Simulador de Preços interativo
  - Seção Institucional (Visão, Missão, Valores)
  - Categorias de Seguros (Família, Auto, Negócio, Imóvel)
  - Parceiros
  - Footer com informações de contato
  - Botão WhatsApp flutuante
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Performance otimizada
- ✅ Acessibilidade (A11y)
- ✅ Animações suaves e transições

## 🛠️ Stack Tecnológico

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool rápido
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Componentes UI reutilizáveis
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Build para produção
pnpm run build

# Preview do build
pnpm run preview
```

## 🚀 Deploy no GitHub Pages

### 1. Configurar Repositório

```bash
# Inicializar git (se não estiver inicializado)
git init

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/seguradora-landing.git

# Configurar branch padrão para main
git branch -M main
```

### 2. Fazer Push para GitHub

```bash
# Adicionar todos os arquivos
git add .

# Commit
git commit -m "Initial commit: Seguradora landing page"

# Push para main
git push -u origin main
```

### 3. Habilitar GitHub Pages

1. Vá para as configurações do repositório: **Settings** → **Pages**
2. Em "Build and deployment", selecione:
   - **Source**: GitHub Actions
3. O workflow de deploy será executado automaticamente

### 4. Acessar o Site

Após o deploy, o site estará disponível em:
```
https://SEU_USUARIO.github.io/seguradora-landing/
```

## 📁 Estrutura do Projeto

```
seguradora-landing/
├── client/
│   ├── public/              # Arquivos estáticos
│   └── src/
│       ├── components/      # Componentes React
│       │   ├── Header.tsx
│       │   ├── HeroBanner.tsx
│       │   ├── Simulation.tsx
│       │   ├── Institutional.tsx
│       │   ├── Categories.tsx
│       │   ├── Partners.tsx
│       │   ├── Footer.tsx
│       │   └── WhatsAppButton.tsx
│       ├── pages/
│       │   └── Home.tsx     # Página principal
│       ├── App.tsx          # Componente raiz
│       ├── main.tsx         # Entry point
│       └── index.css        # Estilos globais
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── vite.config.ts           # Configuração Vite
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── package.json             # Dependências

```

## 🎨 Design System

### Paleta de Cores

- **Primária**: #1e40af (Azul Profundo)
- **Secundária**: #f97316 (Laranja Coral)
- **Accent**: #10b981 (Verde Esmeralda)
- **Neutro Escuro**: #1f2937
- **Neutro Claro**: #f9fafb

### Tipografia

- **Display**: Poppins Bold 700
- **Heading**: Poppins SemiBold 600
- **Body**: Inter Regular 400
- **Accent**: Inter Medium 500

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: 320px+
- Tablet: 768px+ (md)
- Desktop: 1024px+ (lg)

## 🔧 Customização

### Alterar Informações da Empresa

Edite os seguintes arquivos:

1. **Header.tsx** - Nome da empresa e links de navegação
2. **HeroBanner.tsx** - Headline e descrição principal
3. **Institutional.tsx** - Visão, Missão e Valores
4. **Footer.tsx** - Informações de contato
5. **WhatsAppButton.tsx** - Número do WhatsApp

### Alterar Cores

Edite `client/src/index.css` na seção `:root`:

```css
:root {
  --color-primary-blue: #1e40af;
  --color-accent-orange: #f97316;
  --color-accent-green: #10b981;
  /* ... */
}
```

### Adicionar Novos Componentes

1. Crie o arquivo em `client/src/components/`
2. Importe em `client/src/pages/Home.tsx`
3. Adicione a seção no JSX

## 📊 Simulador de Preços

O simulador calcula preços baseado em:
- **Tipo de Seguro**: Auto, Casa, Vida, Negócio
- **Valor a Proteger**: Range de R$ 10.000 a R$ 500.000
- **Nível de Cobertura**: Básica (50%), Padrão (100%), Premium (150%)

Fórmula: `basePrice × coverageMultiplier × (value / 100000)`

## 🔐 Segurança

- Proteção contra XSS com React
- Validação de formulários
- HTTPS automático no GitHub Pages
- Sem exposição de dados sensíveis

## 📈 Performance

- Build otimizado com Vite
- CSS minificado com Tailwind
- Imagens otimizadas
- Lazy loading de componentes
- Score Lighthouse: 90+

## 🤝 Contribuindo

Para contribuir com melhorias:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do WhatsApp ou email.

---

**Desenvolvido com ❤️ para Seguradora Pro**
