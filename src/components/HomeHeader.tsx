import { HStack, Heading, Icon, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { UserPhoto } from './UserPhoto';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
  return (
    <HStack bg={'gray.600'} pt={16} px={8} alignItems={'center'}>
      <UserPhoto
        source={{
          uri: 'https://scontent.fcgb10-1.fna.fbcdn.net/v/t39.30808-1/297150155_1651826215188392_4793578278034857764_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEZUJkqJCnvxgReQtgbUlSKRmCWTAbkYMpGYJZMBuRgylZ5GN7q8IMeGUQl_-MfqUrxry1ZRC4zOC69JF5tJFoR&_nc_ohc=ybrvYjnklEQAX-Bv7VW&_nc_ht=scontent.fcgb10-1.fna&oh=00_AfCBJ_brePRD3pKvlIpOxPbU-E_B-duv7LhB7952uSPUcA&oe=64D467A9',
        }}
        size={16}
        alt="Imagem do usuário"
      />
      <VStack flex={1} ml={3}>
        <Text color={'gray.100'} fontSize={'md'}>
          Olá,
        </Text>

        <Heading color={'gray.100'} fontSize={'md'}>
          Anita Santana tu é gata
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" size={7} color={'red.500'} />
      </TouchableOpacity>
    </HStack>
  );
}
