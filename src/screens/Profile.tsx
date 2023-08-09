import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, ScrollView, Skeleton, Text, VStack } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const PHOTO_SIZE = 33;

export function Profile() {
  const [phoIsLoading, setPhoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {phoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={'full'}
              startColor={'gray.400'}
              endColor={'gray.300'}
            />
          ) : (
            <UserPhoto
              source={{
                uri: 'https://scontent.fcgb10-1.fna.fbcdn.net/v/t39.30808-1/297150155_1651826215188392_4793578278034857764_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEZUJkqJCnvxgReQtgbUlSKRmCWTAbkYMpGYJZMBuRgylZ5GN7q8IMeGUQl_-MfqUrxry1ZRC4zOC69JF5tJFoR&_nc_ohc=ybrvYjnklEQAX-Bv7VW&_nc_ht=scontent.fcgb10-1.fna&oh=00_AfCBJ_brePRD3pKvlIpOxPbU-E_B-duv7LhB7952uSPUcA&oe=64D467A9',
              }}
              alt="Foto do usário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity>
            <Text
              color={'green.500'}
              fontWeight={'bold'}
              fontSize={'md'}
              mb={8}
              mt={2}
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  );
}
