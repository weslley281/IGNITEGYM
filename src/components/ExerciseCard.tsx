import { HStack, Heading, Icon, Image, Text, VStack } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg={'gray.500'}
        alignItems={'center'}
        p={2}
        pr={4}
        rounded={'md'}
        mb={3}
      >
        <Image
          source={{ uri: 'https://i.ytimg.com/vi/C-tlPEhjwTk/mqdefault.jpg' }}
          w={16}
          h={16}
          rounded={'md'}
          mr={4}
          resizeMode="center"
          alt="Imagem do execício remada unilateral"
        />
        <VStack flex={1}>
          <Heading color={'white'} fontSize={'lg'}>
            Remada Unilateral
          </Heading>
          <Text color={'grey.200'} fontSize={'sm'} mt={1} numberOfLines={2}>
            3 séries x 12 repetiçoes
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color={'gray.300'} />
      </HStack>
    </TouchableOpacity>
  );
}
