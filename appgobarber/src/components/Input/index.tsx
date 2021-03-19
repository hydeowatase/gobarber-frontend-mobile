import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';
import { Value } from 'react-native-reanimated';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface IInputValueRef {
  value: string;
}

const Input: React.FC<IInputProps> = ({ name, icon, ...rest }) => {
  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<IInputValueRef>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default Input;
