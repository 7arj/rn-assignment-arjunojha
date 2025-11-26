# Counter with Animations - React Native Assignment

A simple counter app built with React Native and Expo that demonstrates state management and animations.

## Features

-  Increment and decrement counter
-  Reset button to set counter to 0
-  Smooth scale and fade animations on count change
-  Clean and responsive UI

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

## Installation

1. Clone the repository:
```bash
git clone https://github.com/7arj/rn-assignment-arjunojha.git
cd rn-assignment-your-name
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Start the Expo development server:
```bash
npx expo start
```

### Run on different platforms:

- **iOS Simulator**: Press `i` in the terminal or scan QR code with Expo Go app
- **Android Emulator**: Press `a` in the terminal or scan QR code with Expo Go app
- **Physical Device**: Install Expo Go app and scan the QR code

## Project Structure

```
easy-app/
├── src/
│   ├── components/
│   │   └── CounterDisplay.js    # Animated counter display component
│   └── screens/
│       └── Home.js               # Main screen with counter logic
├── App.js                        # Root component
├── package.json
└── README.md
```

## Technologies Used

- React Native
- Expo SDK
- React Hooks (useState, useEffect, useRef)
- React Native Animated API

## How It Works

1. **State Management**: Uses `useState` hook to manage the counter value
2. **Animation**: Combines scale and fade animations using `Animated.parallel` and `Animated.sequence`
3. **Component Structure**: Separates display logic (CounterDisplay) from business logic (Home screen)

## Expo Version

- Expo SDK: ~52.0.0 (or latest)
- React Native: Latest stable version included with Expo

## Dependencies

All dependencies are included in the default Expo template. No additional packages required.

## Author

[Your Name]

## Assignment Submission

Created as part of React Native Assignment C - Counter with Animations