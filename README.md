# MathCalc - Advanced Calculator Application

A modern, feature-rich calculator web application with a sleek dark theme interface. Built with vanilla HTML, CSS, and JavaScript, this calculator provides smooth animations and an intuitive user experience.

## 🚀 Quick Start

1. Navigate to the calculator directory
2. Open `index.html` in any modern web browser
3. Start calculating immediately - no setup required!

## 📁 Project Files

- **index.html** - Main application structure and layout
- **style.css** - Complete styling with gradient themes and animations
- **script.js** - Core calculation logic and event handling

## ✨ Key Features

### Mathematical Operations
- **Addition (+)** - Add two or more numbers
- **Subtraction (-)** - Subtract numbers with precision
- **Multiplication (×)** - Multiply values accurately
- **Division (/)** - Divide with zero-division protection

### User Interface
- **Dark Theme Design** - Modern purple-blue gradient background
- **Neon Display** - Green terminal-style display with monospace font
- **Smooth Animations** - Button hover effects and loading states
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile

### Smart Features
- **Decimal Support** - Full decimal number calculations
- **Expression Display** - Shows current operation (e.g., "5 + 3")
- **Error Prevention** - Blocks invalid operations like division by zero
- **Auto-Reset** - Automatically prepares for next calculation after equals

## 🎯 How to Use

### Basic Calculation
1. Click number buttons to enter your first number
2. Click an operator button (+, -, ×, /)
3. Enter your second number
4. Click the equals (=) button to see the result

### Example Workflow
```
Input: 15 + 27
Steps: Click 1 → 5 → + → 2 → 7 → =
Result: 42
```

### Advanced Usage
- **Decimal Numbers**: Click the decimal point (.) button to add decimals
- **Chain Operations**: After getting a result, click another operator to continue
- **Clear All**: Click the Clear (C) button to reset everything

## 🛠️ Technical Implementation

### State Management
The calculator maintains four core state variables:
- Current value being entered
- Previous value for operations
- Selected operator
- Reset flag for state transitions

### Calculation Precision
Results are rounded to 8 decimal places to handle floating-point arithmetic while maintaining accuracy for practical calculations.

### Button Loading System
Each button click triggers a 150-200ms loading animation to:
- Prevent accidental double-clicks
- Provide visual feedback
- Ensure smooth user experience

### Error Handling
- **Division by Zero**: Shows error message and auto-resets
- **Invalid Operations**: Catches and displays appropriate errors
- **Input Validation**: Prevents duplicate decimal points

## 🎨 Design Philosophy

This calculator features a **dark mode aesthetic** with:
- Gradient backgrounds (purple to blue)
- Neon green display text
- Smooth button transitions
- Modern glassmorphism effects

## 📱 Responsive Breakpoints

- **Mobile (≤360px)**: Compact layout with smaller buttons
- **Tablet (≤480px)**: Medium-sized interface
- **Desktop (≥768px)**: Full-size calculator with larger display

## 🌐 Browser Compatibility

Works in all modern browsers supporting:
- ES6 JavaScript (const, let, arrow functions)
- CSS Grid and Flexbox
- Modern DOM APIs

## 💡 Code Architecture

- **Function-based**: Pure functions without classes or constructors
- **Event-driven**: Dedicated event listeners for each button type
- **Modular**: Separate functions for display, calculation, and validation
- **Clean Naming**: All classes use `mathcalc-` prefix for isolation

## 🔧 Customization

The calculator uses CSS custom properties and can be easily themed by modifying:
- Gradient colors in `style.css`
- Display font and colors
- Button sizes and spacing
- Animation durations

---

**Built with ❤️ using vanilla JavaScript - No frameworks, no dependencies!**
