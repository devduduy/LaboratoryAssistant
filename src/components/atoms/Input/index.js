import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Input = ({label, placeholder, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        placeholder={placeholder}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 8,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[600],
  },
});
