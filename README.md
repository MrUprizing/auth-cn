# Auth CN

A minimalist component library with production-ready authentication setups designed for [Better Auth](https://www.better-auth.com/) and [shadcn/ui](https://ui.shadcn.com/).

## What is Auth CN?

Auth CN provides authentication UI components and starter configurations that you can install directly into your project using the shadcn registry system.

## Installation

Add the auth-ui registry in your components.json

```json
{
  "registries": {
    "@auth-cn": "https://auth.uprizing.me/r/{name}.json",
  }
}
```

Add components using the shadcn CLI:

```bash
npx shadcn@latest add @auth-cn/[component-name]
```

## Features

- 🔐 Built specifically for Better Auth
- 🎨 Styled with shadcn/ui components
- 📦 Install with a single command
- ✨ Fully customizable
- 🔒 Security and accessibility focused
- 🚀 Production-ready setups

## How It Works

Install components with a single command, customize them to fit your needs, and deploy. All components are fully customizable since the code lives in your project.

Better Auth handles the authentication logic while shadcn/ui provides the visual components.
