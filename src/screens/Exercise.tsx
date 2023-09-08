import { Center, Text, VStack, Image } from 'native-base';
import man_working_out from '../assets/exercises/man-working-out.jpg';

export function Exercise() {
  return (
    <VStack flex={1}>
      <VStack px={8} bg={'gray.600'} pt={12}></VStack>
      <VStack p={8}>
        <Image w={'full'} h={80} src={man_working_out} />
      </VStack>
    </VStack>
  );
}
