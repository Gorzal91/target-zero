# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Net Zero Climate App

This project is a React application focused on achieving net-zero climate goals. It provides users with information, resources, and tools to understand and contribute to climate action.

## Project Structure

```
net-zero-climate-app
├── public
│   ├── index.html          # Main HTML file for the application
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components          # Contains React components
│   │   ├── Header.jsx      # Header component with title and navigation
│   │   ├── Footer.jsx      # Footer component with copyright information
│   │   └── Tabs.jsx        # Tab navigation component for different sections
│   ├── styles              # Contains CSS styles
│   │   ├── App.css         # Main styles for the application
│   │   └── Tabs.css        # Styles specific to the Tabs component
│   ├── App.jsx             # Main component of the application
│   ├── index.jsx           # Entry point of the React application
│   └── assets              # Contains image assets
│       └── background.jpg  # Background image for the application
├── package.json            # Configuration file for npm
├── .gitignore              # Specifies files to ignore by Git
└── README.md               # Documentation for the project
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```
   git clone <repository-url>
   cd net-zero-climate-app
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
