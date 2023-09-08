import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import {
  Center,
  Heading,
  ScrollView,
  Skeleton,
  Text,
  VStack,
} from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const PHOTO_SIZE = 33;

export function Profile() {
  const [phoIsLoading, setPhoIsLoading] = useState(false);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
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
                uri: 'https://scontent.fcgb10-1.fna.fbcdn.net/v/t39.30808-1/336286057_1213537462700589_64666111073547397_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFRqZ-STsQwEeAMP7Bgxs4sG6-9R0hJyF8br71HSEnIXzotbsQ8JgpxHL6zN4VxW15ZUMRVMSdlhOQrdiLhHAGd&_nc_ohc=LQX-af8cb9UAX8n_0JN&_nc_ht=scontent.fcgb10-1.fna&oh=00_AfC-J1cHg7vOFAYfWhC-rvsUULUTBbnU3NpI4MpYwaenBA&oe=64D92F13',
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

          <Input bg={'gray.600'} placeholder="Nome" />
          <Input
            bg={'gray.600'}
            placeholder="weslleyhenrique800@gmail.com"
            isDisabled
          />

          <Heading
            color={'gray.200'}
            fontSize={'md'}
            mb={2}
            alignSelf={'flex-start'}
            mt={12}
          >
            Alterar Senha
          </Heading>

          <Input bg={'gray.600'} placeholder="Senha antiga" secureTextEntry />

          <Input bg={'gray.600'} placeholder="Nova senha" secureTextEntry />
          <Input
            bg={'gray.600'}
            placeholder="Confirme a nova senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={5} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
