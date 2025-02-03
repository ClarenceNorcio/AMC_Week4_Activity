import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '-----TODO LIST-----',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97as63',
    title: '      *MORNING*',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3asd53abb28ba',
    title: 'waking up',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbdsga',
    title: 'drink water',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a32438ba',
    title: 'do some stretching',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab1238ba',
    title: 'drink coffee',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455789829d72',
    title: 'read',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb123ba',
    title: 'taking bath',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a54354328ba',
    title: 'brushing teeth',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb23423438ba',
    title: 'do skin care',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb232448ba',
    title: 'prefer for school',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab2342b28ba',
    title: 'eat breakfast',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab323b28ba',
    title: 'checking assigns',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb324228ba',
    title: 'checking socials',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad523423abb28ba',
    title: 'go to school',
  },
 {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa9234237f63',
    title: '    *AFTERNOON*',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e23429d72',
    title: 'do some house work',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab23423b28ba',
    title: 'washing dishes',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb23428ba',
    title: 'eat my lunch',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a234bb28ba',
    title: 'review some work',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a234bb28ba',
    title: 'do my assignments',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb22348ba',
    title: 'reading some books',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb234228ba',
    title: 'taking a nap',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb12328ba',
    title: 'drink lemon water',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2823ba',
    title: 'go to market',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb21238ba',
    title: 'prefer to cook',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b123a',
    title: 'prefer dinner',
  },
 {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f90863',
    title: '        *EVENING*',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2989d72',
    title: 'eating dinner',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b898a',
    title: 'washing dishes',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb787828ba',
    title: 'read some books',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb27878ba',
    title: 'checking socials',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28898ba',
    title: 'watching',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3a54645d53abb28ba',
    title: 'taking bath',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad564653abb28ba',
    title: 'do skin care',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad535464abb28ba',
    title: 'maglulu',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad55453abb28ba',
    title: 'go to bed',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const COLORS = ['#FFCCCB', '#ADD8E6', '#90EE90', '#FFFFE0', '#E6E6FA', '#FFDAB9', '#D3D3D3'];

const Item = ({item, onPress, backgroundColor, textColor, COLORS}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);


const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item, index}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : COLORS [index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;