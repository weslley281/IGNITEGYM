import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { FlatList, HStack, Heading, Text, VStack } from 'native-base';
import { useState } from 'react';

export function Home() {
  const [groups, setGroups] = useState([
    'Costas',
    'Peitoral',
    'Ombros',
    'Bíceps',
    'Tríceps',
    'Pernas',
    'Abdômen',
    'Glúteos',
    'Panturrilhas',
    'Trapézio',
  ]);
  const [groupSelected, setGroupSelected] = useState('costa');
  const [exercises, setExercises] = useState([
    'Remada inclinada com halteres',
    'Remada unilateral com halteres',
    'Remada curvada com halteres',
    'Remada alta com halteres',
    'Elevação lateral inclinada',
    'Puxada frontal com halteres',
    'Remada com halteres e rotação externa',
    'Levantamento terra com halteres',
    'Encolhimento de ombros com halteres',
    'Superman com halteres',
  ]);

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

      <VStack flex={1} px={8}>
        <HStack justifyContent={'space-between'} mb={5}>
          <Heading color={'gray.200'}>Exercícios</Heading>
          <Text color={'gray.100'} fontSize={'sm'}>
            4
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => <ExerciseCard />}
        />
      </VStack>
    </VStack>
  );
}
