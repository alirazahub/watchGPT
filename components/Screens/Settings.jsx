import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { backgroundColor, primaryColor, secondaryColor } from '../../colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const [name, setName] = useState('Ali Raza');
  const [email, setEmail] = useState('aliraza@gmail.com');
  const [editingName, setEditingName] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const updateName = () => {
    if (newName.trim() !== '') {
      setName(newName);
      setNewName('');
      setEditingName(false);
    }
  };

  const updateEmail = () => {
    if (newEmail.trim() !== '') {
      setEmail(newEmail);
      setNewEmail('');
      setEditingEmail(false);
    }
  };

  return (
    <KeyboardAvoidingView>

      <View style={styles.container}>
        <Text style={styles.profileImage}>AR</Text>
        <Text style={styles.label}>Name:</Text>
        {editingName ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Enter new name"
            />
            <TouchableOpacity style={styles.button} onPress={updateName}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{name}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setEditingName(true)}>
              <FontAwesome name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.label}>Email:</Text>
        {editingEmail ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
              placeholder="Enter new email"
            />
            <TouchableOpacity style={styles.button} onPress={updateEmail}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>{email}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setEditingEmail(true)}>
              <FontAwesome name="edit" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:backgroundColor
  },
  profileImage: {
    fontSize: 120,
    marginBottom: 20,
    backgroundColor: primaryColor,
    width: 150,
    height: 150,
    borderRadius: 75,
    textAlign: 'center',
    color: secondaryColor,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    flex: 1,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: secondaryColor,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    paddingLeft: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: primaryColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: secondaryColor,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
