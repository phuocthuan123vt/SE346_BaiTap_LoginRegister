import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Register = ({ chuyenSangLogin }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Register</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textInputZone}
          placeholder="test"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.textInputZone}
          placeholder="test@mail.com"
          placeholderTextColor="black"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.textInputZone}
          placeholder=" ●   ●   ●   ● "
          placeholderTextColor="black"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.textInputZone}
          placeholder=" ●   ●   ●   ● "
          placeholderTextColor="black"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={chuyenSangLogin} style={{ marginTop: 20 }}>
        <Text style={{ textDecorationLine: 'underline' }}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -100,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 30,
    fontWeight: 'bold',
  },
  textInputZone: {
    width: '80%',
    borderWidth: 3,
    borderColor: 'black',
    paddingHorizontal: 10,
    height: 40,
    marginTop: 5,
    marginLeft: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 50,
    borderWidth: 3,
    borderColor: 'black',
    paddingHorizontal: 35,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Register;
