# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Run linting then build for production (runs lint before build)
- `pnpm start` - Start production server
- `pnpm run lint` - Run ESLint with auto-fix
- `pnpm run lint:check` - Run ESLint without making changes
- `pnpm run knip` - Find unused dependencies and exports

## Architecture Overview

This is a Next.js 14 personal blog/portfolio using App Router with file-based MDX content management.

### Content Management System
- **MDX files** stored in `/app/(posts)/w/content/` for blog posts
- **Static pages** in `/app/(posts)/pages/content/` (About, Resume)
- **Frontmatter** parsed with `gray-matter` for metadata
- **Dynamic routing** via `[slug]` folders with `generateStaticParams()`
- **Custom MDX components** defined in `/mdx-components.tsx`

### Routing Structure
- **Route groups** using `(posts)` to organize without affecting URLs
- **Dynamic routes**: `/w/[slug]` for blog posts
- **Static routes**: `/pages/about`, `/pages/resume`
- **URL redirects** in `next.config.mjs` for backwards compatibility (`/notes/:slug` → `/posts/:slug` → `/w/:slug`)

### Component Organization
- **Feature-based** structure: `components/{feature}/index.tsx`
- **Layout components**: `main-nav`, `footer`, `breadcrumb`
- **Content components**: `posts`, `card`, `image`
- **Screen components**: Full page composite layouts
- **Server components by default** with selective client hydration

### Styling System
- **Tailwind CSS** with custom configuration and design tokens
- **Radix UI colors** for semantic color scales (gray-1 through gray-12)
- **CSS custom properties** for theming (defined in globals.css)
- **Dark mode** support with class-based switching
- **Custom typography** with enhanced code highlighting via `rehype-pretty-code`

### Key Libraries
- **MDX processing**: `@next/mdx`, `gray-matter`, `next-mdx-remote`
- **Code highlighting**: `rehype-pretty-code` with Shiki
- **Styling**: Tailwind + Radix UI colors + custom CSS properties
- **Icons**: Lucide React and Radix UI icons
- **Animations**: Motion (Framer Motion successor)

## Development Patterns

### Content Creation
- Add new posts as `.mdx` files in `/app/(posts)/w/content/`
- Include frontmatter with `title`, `date`, `tags`, etc.
- Use custom MDX components for enhanced content

### Component Development
- Follow server-first approach (default to Server Components)
- Use TypeScript interfaces for props
- Implement responsive design mobile-first
- Leverage Tailwind utilities with `cn()` helper for conditional classes

### Styling Conventions
- Use semantic color tokens (`gray-9`, `gray-11`) rather than raw Tailwind colors
- Implement dark mode via CSS custom properties
- Follow the established design system in `tailwind.config.ts`
- Use `clsx` and `tailwind-merge` via the `cn()` utility

### Code Quality
- **ESLint** with Stylistic plugin enforces formatting
- **TypeScript strict mode** enabled
- **Single quotes** and **no semicolons** (ASI)
- **Trailing commas** in multiline structures
- **160 character** line length limit
- **2-space indentation**

## Special Features

### Dynamic OG Images
- API route at `/api/og` generates social media images on-demand
- Uses `@vercel/og` with custom styling
- Configured in `/lib/og/index.ts` for metadata

### Content Processing
- Custom MDX processing in `/lib/mdx/index.ts`
- Error handling for file operations with `console.error` (allowed by ESLint)
- Type-safe post interfaces in `/types/post/index.tsx`

### Build Configuration
- **MDX support** configured in `next.config.mjs`
- **Image optimization** with remote pattern allowlist
- **Redirects** maintain URL compatibility
- **Static export** capability configured

## Git Workflow

Using conventional commits.
