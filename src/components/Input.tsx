import { Input as NativeBaseInput } from 'native-base';

export function Input() {
  return (
    <NativeBaseInput
      bgColor={'blueGray.800'}
      h={14}
      px={14}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily={'body'}
    />
  );
}
