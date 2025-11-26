# Counter with Animations - React Native Assignment

A simple counter app built with React Native and Expo that demonstrates state management and animations.

## Features
# Counter with Animations - React Native Assignment

A simple counter app built with React Native and Expo that demonstrates state management and animations.

## Features

- ✅ Increment and decrement counter
- ✅ Reset button to set counter to 0
- ✅ Smooth scale and fade animations on count change
- ✅ Clean and responsive UI

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI

## Installation

1. Clone the repository:
```bash
git clone https://github.com/7arj/rn-assignment-arjunojha.git
cd rn-assignment-arjunojha
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
- **Web Browser**: Press `w` in the terminal

## Project Structure

```
easy-app/
├── app/
│   ├── (tabs)/
│   │   └── index.tsx           # Main counter app screen
│   ├── _layout.tsx
│   └── +not-found.tsx
├── assets/
├── constants/
├── node_modules/
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## Code Structure

The counter app is implemented in `app/(tabs)/index.tsx` and includes:

- **CounterDisplay Component**: Handles the animated counter display with scale and fade effects
- **HomeScreen Component**: Main screen containing counter logic and UI buttons

## Technologies Used

- React Native
- Expo SDK (~52.0.0)
- Expo Router (file-based routing)
- TypeScript
- React Hooks (useState, useEffect, useRef)
- React Native Animated API

## How It Works

1. **State Management**: Uses `useState` hook to manage the counter value
2. **Animation**: Combines scale and fade animations using `Animated.parallel` and `Animated.sequence`
3. **Component Structure**: CounterDisplay component is embedded within the main screen for animation logic

## Animation Details

- **Scale Animation**: Counter scales up to 1.3x then back to 1.0x using spring animation
- **Fade Animation**: Counter fades to 30% opacity then back to 100% 
- **Trigger**: Animations play every time the count value changes
- **Implementation**: Uses `useNativeDriver: true` for optimal performance

## Expo Version

- Expo SDK: ~52.0.0 (or latest)
- React Native: Latest stable version included with Expo

## Dependencies

All dependencies are included in the default Expo template. No additional packages required.

## Controls

- **+ Button (Green)**: Increment counter by 1
- **- Button (Red)**: Decrement counter by 1  
- **Reset Button (Blue outline)**: Reset counter to 0

