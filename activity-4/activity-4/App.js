import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

//List of to do list
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Waking Up',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97as63',
    title: 'Fixing Bed',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3asd53abb28ba',
    title: 'Drinking Water',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abbdsga',
    title: 'Prefer Clothes',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a32438ba',
    title: 'Ice Bath (Face)',
  },
     {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab1238ba',
    title: 'Stretching',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455789829d72',
    title: 'Go For A Run',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb123ba',
    title: 'Exercise',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a54354328ba',
    title: 'Taking Shower',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb23423438ba',
    title: 'Brushing Teeth',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb232448ba',
    title: 'Skin Care',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab2342b28ba',
    title: 'Breakfast',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab323b28ba',
    title: 'Checking Social Media',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb324228ba',
    title: 'Checking Assignments',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad523423abb28ba',
    title: 'Go To School',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa9234237f63',
    title: 'Lunch',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e23429d72',
    title: 'Clean Up',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab23423b28ba',
    title: 'Review Some Lessons',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb23428ba',
    title: ' Eat Snack',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a234bb28ba',
    title: 'Do Homework',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53a234bb28ba',
    title: 'Take A Nap',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb22348ba',
    title: 'Go To Market',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb234228ba',
    title: 'Prefer For Dinner',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb12328ba',
    title: 'Dinner',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2823ba',
    title: 'Clean Up',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb21238ba',
    title: 'Prefering Your Bed',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b123a',
    title: 'Brushing Teeth',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f90863',
    title: 'Do Night Skin Care',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e2989d72',
    title: 'Read Some Books',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b898a',
    title: 'Watching Anime',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb787828ba',
    title: 'Go To Bed',
  },
];

//Color Array for the list
const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  isChecked,
  onCheckBoxToggle,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <View style={styles.itemContent}>
      <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      <TouchableOpacity
        onPress={() => onCheckBoxToggle(item.id)}
        style={styles.checkbox}
      >
        <Text style={{ fontSize: 20 }}>{isChecked ? '✔️' : '☐'}</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const App = () => {
  // State fpr sllected items
  const [selectedId, setSelectedId] = useState();
  const [checkedItems, setCheckedItems] = useState({});

  //For calculation of not done and finished
  const checkedCount = Object.values(checkedItems).filter((checked) => checked).length;
  const notDoneCount = DATA.length - checkedCount;

  const renderItem = ({ item, index }) => {

    const backgroundColor = checkedItems[item.id] ? 'black' : COLORS[index % COLORS.length];
    const textColor = checkedItems[item.id] ? 'white' : 'black'; 
    const isChecked = checkedItems[item.id] || false;

    // Function to toggle check on the item
    const handleCheckBoxToggle = (id) => {
      setCheckedItems((prevState) => ({
        ...prevState,
        [id]: !prevState[id], //for changing check mark
      }));
    };

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
        isChecked={isChecked}
        onCheckBoxToggle={handleCheckBoxToggle}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text style={styles.titleHeader}>----To Do List----</Text>

        {/*to print the finished adn not done */}
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>Finished: {checkedCount}</Text>
          <Text style={styles.counter}>Not Done: {notDoneCount}</Text>
        </View>

        {/*list */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
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
    paddingHorizontal: 15,
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontSize: 20,
    flex: 1,
  },
  checkbox: {
    padding: 5,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  counter: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
