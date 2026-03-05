import React, { useState } from 'react';
import { View } from 'react-native';
import Login from './Login';
import Register from './Register';

export default function App() {
  const [screen, setScreen] = useState('login');

  return (
    <View style={{ flex: 1 }}>
      {screen === 'login' ? (
        <Login chuyenSangRegister={() => setScreen('register')} />
      ) : (
        <Register chuyenSangLogin={() => setScreen('login')} />
      )}
    </View>
  );
}
