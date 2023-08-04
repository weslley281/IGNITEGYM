import { HStack, Heading, Icon, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from './UserPhoto';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
  return (
    <HStack bg={'gray.600'} pt={16} px={8} alignItems={'center'}>
      <UserPhoto
        source={{ uri: 'https://avatars.githubusercontent.com/u/65488214?v=4' }}
        size={16}
        alt="Imagem do usuário"
      />
      <VStack flex={1}>
        <Text color={'gray.100'} fontSize={'md'}>
          Olá,
        </Text>

        <Heading color={'gray.100'} fontSize={'md'}>
          Weslley
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" size={7} color={'gray.200'} />
      </TouchableOpacity>
    </HStack>
  );
}
