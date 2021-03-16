import style from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = style.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = style.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = style(FeatherIcon)`
  margin-right: 16px;
`;
