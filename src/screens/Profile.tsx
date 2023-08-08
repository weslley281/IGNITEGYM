import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, ScrollView, Text, VStack } from 'native-base';

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          <UserPhoto
            source={{
              uri: 'https://scontent.fcgb10-1.fna.fbcdn.net/v/t39.30808-1/297150155_1651826215188392_4793578278034857764_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEZUJkqJCnvxgReQtgbUlSKRmCWTAbkYMpGYJZMBuRgylZ5GN7q8IMeGUQl_-MfqUrxry1ZRC4zOC69JF5tJFoR&_nc_ohc=ybrvYjnklEQAX-Bv7VW&_nc_ht=scontent.fcgb10-1.fna&oh=00_AfCBJ_brePRD3pKvlIpOxPbU-E_B-duv7LhB7952uSPUcA&oe=64D467A9',
            }}
            alt="Foto do usário"
            size={33}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
