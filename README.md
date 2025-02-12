# Todo List - Nuxt 3 Project

A modern, fast, and responsive Todo List web application built with Nuxt 3 and Vue 3. This project serves as a full-featured task manager where users can add, remove, toggle completion status, and filter tasks based on completion state. The app is styled with Materialize CSS for a sleek and user-friendly interface.

![App UI](./assets/images/Screenshot%202025-02-12%20at%2023.57.18.png){: style="width: 300px; height: 200px;"}

## Features

- **Add New Tasks**: Easily add new tasks to your to-do list.
- **Mark Tasks as Completed**: Toggle tasks as completed or incomplete.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Filter Tasks**: Toggle between showing all tasks or just incomplete ones.
- **Responsive Design**: Fully responsive layout, optimized for both desktop and mobile devices.
- **User-Friendly UI**: Clean, modern design using Materialize CSS.
- **Fast and Lightweight**: Built with Nuxt 3 and Vue 3 for optimal performance.

## Technologies Used

- **Nuxt 3**: The latest version of the popular Vue.js framework for building modern web applications.
- **Vue 3**: Reactive and component-based JavaScript framework for building the frontend.
- **Materialize CSS**: A CSS framework that follows Material Design principles, providing a modern look and feel.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

**Node.js version >= 20**

## Installation

To get started with the project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/MilaSergeeva/nuxt-todo-app.git
```

### Navigate into the project directory:

```bash
cd nuxt-todo-app
```

### Install the required dependencies:

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Run the development server:

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Production

```bash
nuxt-todo-app/
├── assets/
│   └── css/
│       └── main.css          # Custom styles
├── components/
│   ├── BackgroundContainer.vue
│   ├── Button.vue
│   ├── TodoForm.vue          # Form to add new tasks
│   └── TodoItemsList.vue     # List of tasks
├── composables/
│   └── useTodos.ts
├── models/
│   └── TodoItems/
│       └── TodoItem.interface.ts
├── pages/
│   └── index.vue             # Main Todo list page
├── plugins/
│   └── materialize.js        # Initialize Materialize CSS
├── nuxt.config.ts            # Nuxt configuration
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

## Components

#### TodoForm.vue:

Contains the input form for adding new to-do items.

#### TodoItemsList.vue:

Displays the list of to-dos with options to mark as completed, delete, and filter tasks.

#### Button.vue:

Contains the defoult button

#### BackgroundContainer.vue:

App background component

## Nuxt Configuration

The nuxt.config.ts file contains the following important configuration:

**CSS:** Includes Materialize CSS for the layout and custom styles defined in ~/assets/css/main.css.

**Plugins:** Initializes Materialize on the client-side with the ~/plugins/materialize.js plugin.

**App Head:** Configures meta tags and links to Materialize CSS and Google Fonts for icons.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit issues or pull requests. To ensure a smooth workflow:

**Fork the repository.**
**Create a feature branch** (git checkout -b feature/your-feature).
**Commit your changes** (git commit -am 'Add your feature').
**Push to the branch** (git push origin feature/your-feature).
Create a pull request.
