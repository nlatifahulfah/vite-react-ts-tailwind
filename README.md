## Getting Started

This project was initialized with [Vite](https://vitejs.dev/) using [react-ts template](https://vitejs.dev/guide/).

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version 20.11.0)
- [Yarn](https://yarnpkg.com/) (version 1.22.19)

### Folder Structure

```
.
├── .storybook          # Storybook configurations
├── docs                # General documentation
├── public
└── src
    ├── assets            # Common image, media, and font
    ├── components        # Generic UI components
    ├── constants         # Application constants
    ├── contexts          # Application contexts
    ├── features          # Feature components
    ├── helpers           # Common utility functions
    ├── hooks             # Reusable custom hooks
    ├── routes            # Route specific components and utilities
    ├── services          # Client services and related utilities
    └── types             # Application data types definition
```

### Environment Variables

```
VITE_API_URL=
```

> **Notes:** Since any variables exposed to your Vite source code will end up in your client bundle, VITE\_\* variables should not contain any sensitive information.

### Start the project on development environment

1. Install dependencies by running `yarn`
2. Create a file and rename it to `.env.development.local`. Add the required environment variables.

   > **Notes:** This file is used for local development environment and is intended to be excluded from version control to prevent accidental changes to environment variables for deployment. Refer to [vite documentation](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes) for more information about the env file priority.

3. Run project on development server with command `yarn dev`.

### Build the production code

1. Install dependencies for building production code by running `yarn --production`.
2. Create a file and rename it to `.env`. Add the required environment variables.
3. Run command `yarn build`. By default, the build output will be placed at `dist` folder. [[Reference](https://vitejs.dev/guide/static-deploy.html#deploying-a-static-site)]

---

**_For more detail about this project, please refer to the project documentation._**

### Start the documentation

1. Make sure that all dependencies are installed by running command `yarn`
2. Run command `npx msw init public`
3. Run command `yarn storybook`.
4. Open http://localhost:6006/

### Build the documentation into static web application

1. Install dependencies by running `yarn`
2. Run command `yarn build-storybook`. By default, the build output will be placed at `storybook-static` folder. [[Reference](https://storybook.js.org/docs/sharing/publish-storybook)]
