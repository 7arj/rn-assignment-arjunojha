import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const CounterDisplay = ({ count }: { count: number }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    scaleAnim.setValue(1);
    fadeAnim.setValue(1);

    Animated.parallel([
      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 1.3,
          friction: 3,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 3,
          tension: 100,
          useNativeDriver: true,
        }),
      ]),
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [count]);

  return (
    <View style={styles.displayContainer}>
      <Animated.Text
        style={[
          styles.counterText,
          {
            transform: [{ scale: scaleAnim }],
            opacity: fadeAnim,
          },
        ]}
      >
        {count}
      </Animated.Text>
    </View>
  );
};

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      
      <CounterDisplay count={count} />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={decrement}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={reset}
          activeOpacity={0.7}
        >
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={increment}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  displayContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 15,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2196F3',
    width: 80,
  },
  buttonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2196F3',
  },
});