import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '-----TODO LIST-----',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '      *MORNING*',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'waking up',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'drink water',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'do some stretching',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'drink coffee',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'read',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'taking bath',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'brushing teeth',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'do skin care',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'prefer for school',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'eat breakfast',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'checking assigns',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'checking socials',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'go to school',
  },
 {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '    *AFTERNOON*',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'do some house work',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'washing dishes',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'eat my lunch',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'review some work',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'do my assignments',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'reading some books',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'taking a nap',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'drink lemon water',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'go to market',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'prefer to cook',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'prefer dinner',
  },
 {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '        *EVENING*',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'eating dinner',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'washing dishes',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'read some books',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'checking socials',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'watching',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'taking bath',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'do skin care',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'maglulu',
  },
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'go to bed',
  },
];

type ItemProps = {title: string};


const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
   <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
   </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
       <FlatList data={DATA} renderItem={({item}) => 
          <Item title={item.title}/>} keyExtractor={item => item.id} />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
