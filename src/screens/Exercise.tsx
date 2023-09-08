<<<<<<< HEAD
import { Center, Text, VStack, Image } from 'native-base';
import man_working_out from '../assets/exercises/man-working-out.jpg';
=======
import { HStack, Heading, Icon, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySVG from '@assets/body.svg';
>>>>>>> f3c4b1bd981f9c402e333540711fd8bfbf5b00d0

export function Exercise() {
  const { navigate, goBack } = useNavigation<AppNavigatorRoutesProps>();

  return (
    <VStack flex={1}>
<<<<<<< HEAD
      <VStack px={8} bg={'gray.600'} pt={12}></VStack>
      <VStack p={8}>
        <Image w={'full'} h={80} src={man_working_out} />
=======
      <VStack px={8} bg={'gray.600'} pt={12}>
        <TouchableOpacity onPress={goBack}>
          <Icon as={Feather} name="arrow-left" color={'green.400'} size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent={'space-between'}
          mt={4}
          mb={8}
          alignItems={'center'}
        >
          <Heading color={'gray.100'} fontSize={'lg'} flexShrink={1}>
            Puchada Frontal
          </Heading>

          <HStack alignItems={'center'}>
            <BodySVG />
            <Text color={'gray.200'} ml={1} textTransform={'capitalize'}>
              Costas
            </Text>
          </HStack>
        </HStack>
>>>>>>> f3c4b1bd981f9c402e333540711fd8bfbf5b00d0
      </VStack>
    </VStack>
  );
}
