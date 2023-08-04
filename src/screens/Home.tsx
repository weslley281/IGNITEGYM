import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { Center, FlatList, HStack, Text, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const [groups, setGroups] = useState([
    'costas',
    'ombro',
    'biceps',
    'peito',
    'triceps',
  ]);
  const [groupSelected, setGroupSelected] = useState('costa');

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        my={10}
        maxH={10}
        _contentContainerStyle={{ px: 8 }}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />
    </VStack>
  );
}
