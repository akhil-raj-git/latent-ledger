---
layout: single
title: "LLM Agents Playground"
excerpt: "Interactive playground for experimenting with different LLM agent architectures"
date: 2026-05-13
categories: 
  - tool
  - agentic-ai
tags:
  - typescript
  - react
  - LLM agents
  - interactive
language: TypeScript
stars: 0
forks: 0
downloads: 0
repo_url: https://github.com/akhil-raj-git/llm-agents-playground
demo_url: https://llm-agents-playground.vercel.app/
tech_stack:
  - React
  - TypeScript
  - Vite
  - TailwindCSS
---

## Overview

An interactive web playground for experimenting with different LLM agent architectures. Build, visualize, and test agent workflows in your browser.

## Features

- 🎨 **Visual Workflow Builder** - Drag-and-drop agent components
- 🧠 **Multiple Agent Types** - ReAct, Self-Reflection, Tree of Thoughts
- 🔧 **Tool Library** - Search, Calculator, Web Browser, Code Interpreter
- 📊 **Real-time Visualization** - Watch agent thought process
- 💾 **Save & Share** - Export agent configurations
- 🚀 **Zero Backend** - Pure client-side processing

## Try It Live

[🌐 Live Demo](https://llm-agents-playground.vercel.app/)

## Architecture

```
┌─────────────────────────────────────────────────┐
│              Agent Playgrounds                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────┐ │
│  │  ReAct      │  │  Self-      │  │  Tree   │ │
│  │  Agent      │  │  Reflection │  │  of     │ │
│  │             │  │  Agent      │  │  Thoughts│ │
│  └─────────────┘  └─────────────┘  └─────────┘ │
└─────────────────────────────────────────────────┘
              │              │              │
              └──────────────┴──────────────┘
                            │
                    ┌───────▼───────┐
                    │  Visualization│
                    │  Engine       │
                    └───────────────┘
```

## Component Library

### Agents

| Agent Type | Description | Use Case |
|------------|-------------|----------|
| **ReAct** | Reasoning + Acting | General purpose tasks |
| **Self-Reflection** | ReAct + Self-critique | Tasks requiring accuracy |
| **Tree of Thoughts** | Multi-path planning | Complex decision trees |
| **Graph of Thoughts** | Reusable thought nodes | Multi-step workflows |

### Tools

| Tool | Description | Parameters |
|------|-------------|------------|
| **Search** | Web search | query, num_results |
| **Calculator** | Math operations | expression |
| **Web Browser** | Page content extraction | url |
| **Code Interpreter** | Execute Python | code |
| **Database Query** | SQL queries | query |

## Usage Examples

### 1. Research Assistant

```
User: "Find recent papers on keyframe diffusion"
└─ ReAct Agent
   ├─ Search: "keyframe diffusion paper 2024"
   ├─ Web Browser: Extract paper details
   ├─ LLM: Summarize findings
   └─ Output: Summary + PDF links
```

### 2. Code Assistant

```
User: "Implement a binary tree in Python"
└─ Self-Reflection Agent
   ├─ Code Interpreter: Generate implementation
   ├─ Self-Reflection: Review for edge cases
   ├─ Re-run: Fix identified issues
   └─ Output: Final implementation + tests
```

### 3. Complex Planner

```
User: "Plan a trip to Japan for 10 days"
└─ Tree of Thoughts Agent
   ├─ Branch: Budget planning
   ├─ Branch: Itinerary
   ├─ Branch: Accommodation
   ├─ Branch: Transportation
   └─ Integrate: Combined plan
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

Contributions, issues, and feature requests are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/akhil-raj-git/llm-agents-playground/blob/main/LICENSE) file for details.

## Acknowledgments

- UI inspired by [LangChain Playground](https://python.langchain.com/)
- Agent architectures based on [The agentic AI paradigm paper](https://arxiv.org/abs/2404.xxxxx)

## Show your support

Give a ⭐️ if you like this project!