# nexus-tailframe-ui

![Nexus Tailframe UI Logo Placeholder](https://via.placeholder.com/150)

A highly flexible and customizable UI component library for React, built with the power of Tailwind CSS and the magic of Framer Motion. Reduce boilerplate and build beautiful, animated user interfaces with ease.

---

### ✨ Features

* **Tailwind CSS Based:** Fully customizable with Tailwind's utility classes and your own `tailwind.config.js`.
* **Framer Motion Integration:** Effortlessly add stunning animations with predefined motion variants like `fade-in` and `slide-in-left`.
* **Minimal Boilerplate:** Start building faster with a rich set of props to handle styling, state, and behavior.
* **Extensible & Overridable:** The library provides a solid foundation, but you have full control to override styles and animations with simple props.
* **Themable:** Easily customize the look and feel of all components by extending a single configuration file.

---

### 📦 Installation

To get started, install the package via npm or yarn:

```bash
npm install nexus-tailframe-ui
# or
yarn add nexus-tailframe-ui
````

Your project must also have `tailwindcss`, `autoprefixer`, and `framer-motion` installed as peer dependencies.

```bash
npm install tailwindcss autoprefixer framer-motion
# or
yarn add tailwindcss autoprefixer framer-motion
```

---

### 🚀 Getting Started

First, make sure your `tailwind.config.js` file is set up to extend our theme and include your component paths.

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/nexus-tailframe-ui/dist/**/*.{js,jsx,ts,tsx}" // Include the library's components
  ],
  theme: {
    extend: {
      colors: {
        // Here you can optionally override or add your custom theme colors
        // Example:
        // 'primary': '#YOUR_PRIMARY_COLOR'
        // 'button-bg': '#YOUR_CUSTOM_BUTTON_COLOR'
      },
    },
  },
  plugins: [],
}
```

Now you're ready to use your first component.

```jsx
import { Button } from 'nexus-tailframe-ui';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <Button variant="primary" size="lg">
        Click Me
      </Button>
      
      {/* A button with a built-in animation */}
      <Button variant="danger" animated motionVariant="slide-in-left">
        Animated Button
      </Button>
    </div>
  );
}
```

---

### 🎨 Theming

The `nexus-tailframe-ui` library is designed to be fully themable. You can control colors, spacing, and more by extending your `tailwind.config.js` file. All components are built using these tokens, ensuring a consistent look and feel across your entire application.

By defining colors like `button-bg`, `card-bg`, and `card-border` in your `tailwind.config.js`, you can change the default appearance of all components globally.

```javascript
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        // Global Theme Colors
        'primary': '#4f46e5',
        'secondary': '#6b7280',
        
        // Component-Specific Overrides
        'button-bg': '#YOUR_BUTTON_BACKGROUND_COLOR',
        'card-bg': '#YOUR_CARD_BACKGROUND_COLOR',
      },
    },
  },
  // ...
}
```

---

### 🧩 Components

#### Button

A highly flexible and animated button component.

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `React.ReactNode` | - | The content inside the button. |
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | The visual style of the button. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | The size of the button. |
| `animated` | `boolean` | `false` | If true, the button will use Framer Motion for animations. |
| `motionVariant` | `string` | - | A predefined motion variant (e.g., `'fade-in'`). |
| `className` | `string` | - | Override default styles with your own Tailwind classes. |

---

### 🤝 Contributing

We welcome contributions\! If you have a bug fix, a new feature, or an idea for a new component, please open an issue or a pull request.

---

### 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

### 👨‍💻 About

`nexus-tailframe-ui` is an open-source project created and maintained by **Owen Erhabor**.

* **GitHub:** [https://github.com/owen-6936](https://github.com/owen-6936)
