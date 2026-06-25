# VivaClin Saúde — 06. Design System Implementado

> Este documento descreve o design system **como ele existe hoje no código** (`app/globals.css` + componentes em `components/sections/`), não o plano original do documento 01. Use este arquivo como referência para construir novas peças (páginas de especialidade, novas seções, ou um sistema separado) com os mesmos padrões visuais já validados nesta versão do site.

## 1. Stack

- Next.js 16 (App Router, Turbopack no build; dev roda com `--webpack` por uma falha de spawn de processo do Turbopack no Windows — ver `package.json`)
- TypeScript
- Tailwind CSS v4 (tokens via `@theme` em `app/globals.css`, sem `tailwind.config.js`)
- Fontes via `next/font/google`
- Ícones: `lucide-react` (outline) + 3 SVGs customizados para redes sociais (Instagram/Facebook/TikTok, que não existem no lucide)
- GSAP (`gsap` + `@gsap/react`) instalado e aprovado para animações, mas **nenhuma animação está ativa no código agora** — foi testado uma vez no Hero e revertido a pedido do cliente

## 2. Cores

### 2.1 Tokens oficiais (`app/globals.css`)

```css
@theme {
  --color-brand-dark: #4a1b0c;
  --color-brand-primary: #993c1d;
  --color-brand-logo: #b97d6e;
  --color-brand-soft: #f0997b;
  --color-bg-section: #faece7;
  --color-bg-neutral: #f1efe8;
  --color-text-body: #2c2c2a;
}
```

Geram as classes Tailwind: `bg-brand-dark`, `text-brand-primary`, `border-brand-soft`, etc. (incluindo modificadores de opacidade, ex: `bg-brand-primary/90`, `text-brand-dark/80`).

| Token | Hex | Uso real observado |
|---|---|---|
| `brand-dark` | `#4A1B0C` | Fundo de seções escuras (Footer, caixa flutuante do CTAFinal), texto de alto contraste sobre fundo claro |
| `brand-primary` | `#993C1D` | Botões primários sólidos (Header "Agendamento", SobreNos "Fale Conosco"), ícones de destaque, link "Saiba mais" |
| `brand-logo` | `#B97D6E` | Reservado para a logo — não usado diretamente em componentes ainda |
| `brand-soft` | `#F0997B` | Borda de badges/pills (`border-brand-soft`) |
| `bg-section` | `#FAECE7` | Não usado atualmente em nenhuma seção ativa (EspecialidadesGrid e Consultório migraram para `bg-neutral` a pedido do cliente) |
| `bg-neutral` | `#F1EFE8` | Fundo padrão do `<body>`, EspecialidadesGrid, Consultório, círculo dos ícones sociais do Footer |
| `text-body` | `#2C2C2A` | Texto de corpo padrão |

### 2.2 Cores fora do sistema de tokens (decisões pontuais do cliente)

Estas cores foram pedidas explicitamente pelo cliente como valores hex diretos, **não** foram promovidas a tokens do `@theme` (uso via classe arbitrária `bg-[#hex]`):

| Cor | Hex | Onde é usada | Observação |
|---|---|---|---|
| Quase-branco custom | `#FAFAF8` | Fundo das seções SobreNos e CTAFinal | Visualmente muito próximo de `bg-neutral` (`#F1EFE8`), mas é um valor distinto pedido à parte |
| Vermelho vivo | `#E60023` | Botão "Agende sua consulta" (CTAFinal) | Foge da paleta monocromática quente documentada no doc 01 — decisão explícita do cliente, não uma escolha de design autônoma |

**Atenção:** se for replicar o design system em outro lugar, decida se quer continuar usando esses dois valores soltos ou formalizá-los como tokens (`--color-bg-soft-white` / `--color-cta-accent`, por exemplo) — hoje eles só existem como classes arbitrárias espalhadas pelos componentes.

### 2.3 Regra de texto escuro

Nunca usar preto puro (`#000000`). Texto escuro sempre usa `text-brand-dark` ou `text-text-body`.

## 3. Tipografia

### 3.1 Fontes (`app/layout.tsx`)

```ts
const fraunces = Fraunces({ variable: "--font-fraunces", display: "swap" });
const inter = Inter({ variable: "--font-inter", display: "swap" });
```

Mapeadas em `@theme` como:

```css
--font-heading: var(--font-fraunces);
--font-body: var(--font-inter);
```

→ classes Tailwind `font-heading` (Fraunces, serifada) e `font-body` (Inter, sans-serif). **Não usar `font-serif`/`font-sans`** (não foram sobrescritos, ficam com o fallback padrão do Tailwind).

### 3.2 Padrão de heading com mistura de peso/fonte

Este é o padrão tipográfico mais repetido no site — aparece em EspecialidadesGrid, SobreNos, Consultório e CTAFinal. Sempre como `<h2>` de duas linhas:

```tsx
<h2 className="text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
  <span className="font-body font-bold">Primeira linha</span>
  <br />
  <span className="font-heading italic">segunda linha</span>
</h2>
```

- Linha 1: `font-body font-bold` (Inter, negrito)
- Linha 2: `font-heading italic` (Fraunces, itálico)
- Escala de tamanho: `text-3xl sm:text-4xl lg:text-5xl` para títulos de seção; `text-2xl sm:text-3xl` para títulos dentro de elementos menores (ex: caixa do CTAFinal)

Heading de página inteira (Hero) usa variação inline em vez de quebra de linha: `<h1>texto normal <em className="italic">parte em itálico</em></h1>`, mantendo a mesma fonte (`font-heading`) o tempo todo, só alternando o estilo itálico.

### 3.3 Escala de tamanho observada

| Contexto | Classes |
|---|---|
| H1 (Hero) | `text-4xl sm:text-5xl lg:text-6xl` |
| H2 (título de seção) | `text-3xl sm:text-4xl lg:text-5xl` |
| H2 menor (dentro de card/caixa) | `text-2xl sm:text-3xl` |
| H3 (subtítulo de card) | `text-lg` a `text-xl` |
| Corpo padrão | `text-base sm:text-lg` |
| Corpo secundário/legenda | `text-sm` |
| Microtexto (copyright, etc.) | `text-xs` |

Não existe um arquivo de "escala tipográfica" centralizado — os tamanhos são aplicados diretamente via classes Tailwind padrão em cada componente.

## 4. Espaçamento

Não há tokens de espaçamento customizados — tudo usa a escala padrão do Tailwind.

### 4.1 Padding de seção (repetido em todas as seções)

```
px-6 sm:px-10 lg:px-20
py-20 sm:py-24
```

### 4.2 Largura máxima de conteúdo

| Contexto | Classe |
|---|---|
| Bloco de texto centralizado (badge + título + subtítulo) | `max-w-2xl` ou `max-w-3xl` |
| Grid de cards (EspecialidadesGrid, SobreNos) | `max-w-[1536px]` |
| Galeria/carrossel (Consultório) | `max-w-4xl` |
| Banner do CTAFinal | `max-w-[1536px]` |

`max-w-[1536px]` é o valor "largo" padrão quando o cliente pede para aumentar a largura de uma grade — usado de forma consistente em 3 seções diferentes depois de pedidos de ajuste.

### 4.3 Gap entre elementos

- Entre itens de uma lista vertical de texto: `gap-3` a `gap-4`
- Entre cards de um grid: `gap-6`
- Entre badge/título/subtítulo/CTA (blocos verticais de uma seção): `gap-4` a `gap-6`

## 5. Padrões de componente

### 5.1 Badge / pill

Dois estilos coexistem, dependendo do fundo:

**Sobre fundo claro** (EspecialidadesGrid, Consultório):
```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white/70 px-4 py-2 font-body text-sm text-brand-dark">
  <Heart className="h-4 w-4 fill-brand-primary text-brand-primary" />
  Texto do badge
</span>
```

**Sobre fundo escuro/foto** (CTAFinal, Hero):
```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 font-body text-sm text-white">
  <Heart className="h-4 w-4 fill-white text-white" />
  Texto do badge
</span>
```

Ícone do `lucide-react` sempre com `fill-*` aplicado (ícones do lucide são outline por padrão; preencher só o ícone do badge dá um acento visual sem fugir do estilo de linha fina do resto do site).

### 5.2 Botões

Três variantes confirmadas em uso:

**Primário sólido** (ação principal — WhatsApp/agendamento):
```tsx
<a className="inline-flex items-center gap-3 rounded-full bg-brand-primary px-6 py-3 font-body text-white">
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-primary">
    <MessageCircle className="h-4 w-4" />
  </span>
  Texto do botão
</a>
```
Selo circular branco com o ícone na cor do botão, à esquerda do texto.

**Secundário/ghost** (ação alternativa, sobre fundo claro):
```tsx
<a className="inline-flex items-center gap-3 rounded-full border border-brand-primary px-6 py-3 font-body text-brand-primary">
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
    <Icon className="h-4 w-4" />
  </span>
  Texto do botão
</a>
```

**Glass** (sobre foto, Header — nav e CTA no estado não-rolado):
```tsx
className="rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md"
```
Validado e aprovado para o menu/nav flutuante do Header. **Já foi testado no botão "Agendamento" e revertido** — o cliente achou o contraste ruim sobre certas fotos; esse botão específico voltou a ser sólido `bg-brand-primary`. Ou seja: use glass para blocos de navegação/cápsulas, evite para CTAs primários onde a legibilidade é crítica.

Todos os botões usam selo circular (~32px, `h-8 w-8`) com o ícone à esquerda do texto, dentro de um pill totalmente arredondado (`rounded-full`).

### 5.3 Cards

Padrão consistente: imagem no topo (`aspect-video`, `aspect-[4/5]` ou `aspect-[16/9]` dependendo da seção) + corpo branco com padding.

```tsx
<div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm">
  <div className="relative aspect-video">
    <Image fill className="object-cover" />
  </div>
  <div className="flex flex-1 flex-col gap-3 p-6 sm:p-8">
    {/* título, texto, link */}
  </div>
</div>
```

- Raio de borda do card: `rounded-xl` (EspecialidadesGrid) ou `rounded-2xl` (SobreNos) — não há um valor único fixo, varia por seção
- Sombra: `shadow-sm` (cards padrão) ou `shadow-lg`/`shadow-md` (elementos que precisam de mais destaque, ex: botões de navegação do carrossel)
- **Importante:** evitar `align-items: stretch` implícito do grid quando os cards têm conteúdo de tamanho variável — use `line-clamp-N` + altura fixa no texto, ou aceite alturas desiguais, em vez de deixar o grid forçar todos os cards à mesma altura (já gerou bug visual uma vez)

### 5.4 Imagens / placeholder

- Sempre `next/image` com `fill` + `sizes` apropriado + `object-cover`
- Fotos reais já têm gradiente/cantos arredondados embutidos em alguns casos (ex: banner do CTAFinal) — ao usar um asset assim, **não duplique** o tratamento (rounded-corner + overlay) via CSS por cima, isso já causou bugs de alinhamento
- Regra de placeholder (quando falta imagem real): fundo `bg-section` ou `bg-neutral`, texto centralizado "Imagem aqui — [descrição]", mesmas dimensões que a imagem real vai ocupar

### 5.5 Header (comportamento especial)

- `position: fixed`, `z-50`, transparente no topo da página
- Ao passar de 40px de scroll (`window.scrollY > 40`), transiciona para `bg-bg-neutral` + `shadow-md` (CSS `transition-colors duration-300`)
- Logo troca de arquivo conforme o estado: SVG branco (transparente) ↔ PNG colorido (rolado) — **não** é a mesma imagem recolorida via CSS, são dois arquivos diferentes
- Nav central usa posicionamento absoluto (`left-1/2 -translate-x-1/2`) para ficar genuinamente centralizado independente da largura da logo/CTA nas pontas

### 5.6 Overlay de imagem de fundo (Hero, banners)

Para imagens de fundo com texto por cima, usar gradiente CSS customizado (não Tailwind padrão) para controlar precisamente onde escurece:

```tsx
className="bg-[linear-gradient(to_right,rgba(74,27,12,0.5)_0%,rgba(74,27,12,0.2)_30%,transparent_55%)]"
```

Isso evita que o gradiente "lave" a cor real da foto além da área onde o texto realmente precisa de contraste — lição aprendida depois de várias iterações com overlays muito fortes/genéricos.

## 6. Ícones

- Biblioteca principal: `lucide-react`, estilo outline, monocromático
- Ícones de marca (Instagram, Facebook, TikTok) **não existem no lucide** — foram desenhados como SVGs inline customizados em `Footer.tsx`, mantendo o mesmo estilo de linha fina (`stroke="currentColor" strokeWidth="1.5"`)
- Selo circular ao redor de ícones em botões: `h-7 w-7` a `h-8 w-8`

## 7. Responsividade

Breakpoints padrão do Tailwind (`sm`, `lg`), mobile-first. Sem customização de breakpoints.

- Grids de card: `grid-cols-1` → `sm:grid-cols-2` → `lg:grid-cols-3` (varia conforme pedido do cliente; já existiu uma versão `lg:grid-cols-5`, foi revertida)
- Header: nav central e logo grande só aparecem a partir de `md:`; mobile usa menu hambúrguer
- Seções com imagem de fundo grande (Hero, CTAFinal): no mobile costuma usar `min-h-[Npx]` em vez de manter a mesma `aspect-ratio` do desktop, para não espremer o texto

## 8. Inconsistências conhecidas (não resolvidas)

Registrar aqui para não repetir os mesmos pontos de fricção ao construir novas seções:

1. **EspecialidadesGrid tem 6 cards, não 5** — "Clínica Geral" aparece duplicado para fechar a grade em 2 linhas de 3, a pedido do cliente. Isso é uma decisão de layout, não um erro de conteúdo a corrigir.
2. **`bg-section` (#FAECE7) não está em uso ativo** — todas as seções que poderiam usá-lo foram migradas para `bg-neutral` ou para o `#FAFAF8` solto.
3. **Dois "quase-brancos" distintos coexistem**: `bg-neutral` (`#F1EFE8`, token oficial) e `#FAFAF8` (valor solto, usado em SobreNos/CTAFinal). Visualmente quase idênticos — ao criar algo novo, decidir conscientemente qual usar, não assumir que são intercambiáveis sem checar.
4. **GSAP instalado mas não usado** — fica disponível para quando o cliente decidir retomar animações; não recriar a tentativa de fade-in do Hero sem alinhar o efeito esperado antes.
