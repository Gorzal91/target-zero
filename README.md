# Target Zero Climate App

This project is a React application focused on achieving net-zero climate goals. It provides users with information, resources, and tools to understand and contribute to climate action.

## Features

- **Dynamic Navigation:** Navigate between different sections such as About, Articles, and Air Quality.
- **Interactive Components:**
  - **ScrollList:** A scrollable list with animations and dynamic background changes.
  - **Articles:** A slider showcasing articles with "Learn More" functionality to expand content.
  - **Air Quality:** Displays air quality data for selected cities.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Reusable Components:** Modular components like Header, Footer, and Logo for easy maintenance.

## Project Structure

```
net-zero-climate-app
├── public
│   ├── index.html          # Main HTML file for the application
│   └── favicon.ico         # Favicon for the application
├── src
│   ├── components          # Contains React components
│   │   ├── About.jsx       # About section with team information
│   │   ├── Articles.jsx    # Articles section with slider and expandable content
│   │   ├── AirQuality      # Folder for Air Quality-related components
│   │   │   └── AirQuality.jsx # Displays air quality data
│   │   ├── Footer.jsx      # Footer component with copyright information
│   │   ├── Logo.jsx        # Logo component for the header
│   │   ├── ScrollList.jsx  # Scrollable list with animations
│   ├── styles              # Contains CSS styles
│   │   ├── About.css       # Styles for the About section
│   │   ├── App.css         # Main styles for the application
│   │   ├── Articles.css    # Styles for the Articles section
│   │   └── ScrollList.css  # Styles for the ScrollList component
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

   ```bash
   git clone <repository-url>
   cd net-zero-climate-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the application:**

   ```bash
   npm start
   ```

## Deployment

This project is deployed on GitHub Pages. You can view it live at:
[https://Gorzal91.github.io/target-zero](https://Gorzal91.github.io/target-zero)

---

## Components Overview

### **About**

- Displays information about the project and team members.
- Includes profile pictures, names, and roles.

### **Articles**

- A slider showcasing articles with images and expandable content.
- Users can click "Learn More" to view the full article.

### **ScrollList**

- A scrollable list with animations and dynamic background changes.
- Highlights key information about climate goals and air quality.

### **Air Quality**

- Displays air quality data for selected cities.
- Provides insights into pollution levels and environmental conditions.

### **Footer**

- Contains copyright information and links to additional resources.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
