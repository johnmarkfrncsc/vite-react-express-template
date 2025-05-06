# {{projectName}}

{{projectDescription}}

## Stack

This template includes:

- **Frontend**:
  - React 19
  - Vite 6
  - TailwindCSS 4
  - DaisyUI 5
  - Modern ESLint configuration

- **Backend**:
  - Express.js 5
  - RESTful API structure
  - Nodemon for hot-reloading

## Getting Started

1. Install dependencies:

   ```bash
   npm run install-all
   ```

2. Start development servers:

   ```bash
   npm run dev
   ```

   This will start both the backend server (port 3000) and the frontend dev server.

## Project Structure

```
.
├── backend/             # Express backend
│   ├── index.js         # Main server entry point
│   └── rest-client/     # HTTP request examples
├── frontend/            # React frontend (Vite)
│   ├── public/          # Static assets
│   └── src/             # React source code
└── package.json         # Root package.json for running both servers
```

## Development

- Backend runs on: <http://localhost:3000>
- Frontend runs on: <http://localhost:5173>

## Using this Template

This repository is set up as a GitHub Template. To use it:

1. Click the "Use this template" button at the top of the repository
2. Choose "Create a new repository"
3. Fill in your repository name and description
4. Clone your new repository locally
5. Run the initialization script to personalize the template:

   ```bash
   node init-template.js
   ```

6. Install dependencies:

   ```bash
   npm run install-all
   ```

7. Start development:

   ```bash
   npm run dev
   ```

## Author

Created by {{authorName}}
