# Getting Started with Create React App
# Tech Interview Guide

An interactive web application to help developers prepare for technical interviews across a broad range of topics and technologies.

## Features

- Browse technologies by category
- View detailed information about specific technologies
- Interview questions with detailed explanations
- Dark/light mode support
- Mobile-responsive design

## Tech Stack

- React 19
- Custom CSS (no frameworks used)
- lucide-react for icons

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm

### Installation

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Start the development server
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/src/styles/` - CSS files organized by component type
- `/src/components/` - React components
- `/src/tech/` - Technology data and content

## Customization

The application uses CSS variables for theming. You can modify the colors, spacing, and other design elements by editing the variables in `src/styles/main.css`.

## License

MIT
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
# Tech Interview Guide

A comprehensive web application for technical interview preparation, featuring:

- 🗂️ Modular content organization by technology
- 📚 Rich question & answer format with code examples
- 🎯 Visual learning aids and simplified explanations
- 🔍 Advanced search and filtering capabilities
- 🌓 Dark/light theme support
- 📊 Progress tracking

## Project Structure

This project follows a modular content architecture where each technology is defined in its own file:

```
src/tech/
├── languages/
│   ├── java.js
│   ├── sql.js
│   └── ...
├── frameworks/
│   ├── spring-boot.js
│   ├── react.js
│   └── ...
└── index.js
```

Each technology file follows a consistent schema for overview, questions, code examples, and more.

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm (v8+)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/tech-interview-guide.git

# Navigate to the project directory
cd tech-interview-guide

# Install dependencies
npm install

# Start the development server
npm start
```

The application will be available at http://localhost:3000.

## Content Model

Each technology file (e.g., `java.js`) exports a content object with the following structure:

```javascript
export const javaContent = {
  id: 'java',
  name: 'Java',
  icon: 'Coffee',
  difficulty: 'Intermediate',
  questionCount: 50,

  overview: { ... },
  questions: [ ... ],
  codeExamples: [ ... ],
  visualLearning: [ ... ],
  practiceProblems: [ ... ],
  resources: { ... }
};
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
