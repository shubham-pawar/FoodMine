# Contributing to Food Mine 🍽️

Thank you for your interest in contributing to Food Mine! We're excited to have you join our community. This document provides guidelines and instructions to help you make meaningful contributions to the project.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branch Naming Conventions](#branch-naming-conventions)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Questions and Support](#questions-and-support)

## Introduction

Food Mine is a dynamic web application built with Angular 21 that allows users to explore food items, search for favorites, and manage a shopping cart. We welcome contributions from developers of all skill levels, whether you're fixing a bug, adding a new feature, improving documentation, or suggesting enhancements.

By contributing to this project, you agree to follow our code of conduct and contribution guidelines to ensure a welcoming and collaborative environment for everyone.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.x or higher recommended)
  - You can download it from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (comes with Node.js)
  - Verify installation: `npm --version`

- **Angular CLI** (version 21.2.x)
  - Install globally: `npm install -g @angular/cli`
  - Verify installation: `ng version`

- **Git**
  - Install from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## Getting Started

### 1. Fork the Repository

Click the "Fork" button in the top-right corner of the repository page to create a copy of the project in your GitHub account.

### 2. Clone Your Fork

```bash
git clone https://github.com/<your-username>/FoodMine.git
cd FoodMine
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
ng serve
```

The application will be available at `http://localhost:4200`. The server will automatically reload if you make changes to the source files.

### 5. Build for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Development Workflow

1. **Sync your fork** with the upstream repository before starting new work:
   ```bash
   git remote add upstream https://github.com/shubham-pawar/FoodMine.git
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a new branch** for your changes (see [Branch Naming Conventions](#branch-naming-conventions))

3. **Make your changes** following our code style guidelines

4. **Test your changes**:
   ```bash
   ng test
   ```

5. **Commit your changes** (see [Commit Message Guidelines](#commit-message-guidelines))

6. **Push your branch** and create a Pull Request

## Branch Naming Conventions

Use descriptive branch names that indicate the type of work being done:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feat/` | New feature | `feat/add-food-filter` |
| `fix/` | Bug fix | `fix/cart-total-calculation` |
| `docs/` | Documentation changes | `docs/update-readme` |
| `style/` | Code style/formatting | `style/format-components` |
| `refactor/` | Code refactoring | `refactor/cart-service` |
| `test/` | Adding or modifying tests | `test/food-service-tests` |
| `chore/` | Maintenance tasks | `chore/update-dependencies` |

**Examples:**
- `feat/add-user-authentication`
- `fix/search-functionality`
- `docs/add-contributing-guide`

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Examples

```
feat(search): add debounce to search input
fix(cart): correct total calculation when removing items
docs(readme): update installation instructions
refactor(food-service): simplify data fetching logic
```

## Pull Request Process

### Before Submitting

1. **Update your branch** with the latest changes from upstream:
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

2. **Run tests** to ensure your changes don't break existing functionality:
   ```bash
   ng test
   ```

3. **Build the project** to check for compilation errors:
   ```bash
   ng build
   ```

4. **Self-review** your changes in the GitHub diff view

### Creating a Pull Request

1. Push your branch to your fork:
   ```bash
   git push origin <your-branch-name>
   ```

2. Go to the original repository on GitHub and click "Compare & pull request"

3. Fill in the PR template with:
   - A clear, descriptive title
   - A description of the changes
   - Any related issue numbers (e.g., "Closes #5")
   - Screenshots or demos if applicable

4. Wait for review and address any feedback

### After Submission

- Respond promptly to review feedback
- Keep your PR updated with the `main` branch if needed
- Be patient and respectful during the review process

## Code Style Guidelines

### TypeScript/Angular

- Follow the [Angular Style Guide](https://angular.dev/style-guide)
- Use meaningful variable and function names
- Keep components small and focused (single responsibility)
- Use TypeScript type annotations
- Prefer `const` over `let` when values don't change
- Use arrow functions for callbacks

### File Naming

- Components: `*.component.ts`, `*.component.html`, `*.component.css`
- Services: `*.service.ts`
- Modules: `*.module.ts`

### Code Formatting

- Use consistent indentation (2 or 4 spaces)
- Use single quotes for strings
- Add blank lines between logical sections
- Remove trailing whitespace

### Best Practices

- Write self-documenting code with clear names
- Add comments for complex logic
- Keep functions small and focused
- Handle errors appropriately
- Follow the DRY (Don't Repeat Yourself) principle

## Questions and Support

If you have questions or need help:

1. Check existing [issues](https://github.com/shubham-pawar/FoodMine/issues)
2. Create a new issue with the `question` label
3. Provide as much context as possible

---

Thank you for contributing to Food Mine! Your efforts help make this project better for everyone. 🍕🥗🍰