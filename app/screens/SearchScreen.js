import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Screen from '../components/Screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
function SearchScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [filterdData, setfilteredData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    fetchPosts();
    return () => {};
  }, []);

  const fetchPosts = () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
      .then(response => response.json())
      .then(responseJson => {
        setfilteredData(responseJson);
        setmasterData(responseJson);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
        setError(error);
      });
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setSearch(text);
    } else {
      setfilteredData(masterData);
      setSearch(text);
    }
  };

  const searchdetails = [
    {
      id: 1,
      name: 'Acheampong Victor',
      username: '@Lesron',
      image: require('../assets/img.jpg'),
    },
    {
      id: 2,
      name: 'Akowah Bright',
      username: '@Cvded',
      image: require('../assets/learning.jpg'),
    },
    {
      id: 3,
      name: 'Kusi Manu Joshua',
      username: '@Macho',
      image: require('../assets/img.jpg'),
    },
    {
      id: 4,
      name: 'Nana Banyin ',
      username: '@Smoke',
      image: require('../assets/learning.jpg'),
    },
    {
      id: 5,
      name: 'Hutchful Nasiru',
      username: '@Nas',
      image: require('../assets/img.jpg'),
    },
    {
      id: 6,
      name: 'Kwesi Nyamekye',
      username: '@Gabby',
      image: require('../assets/learning.jpg'),
    },
    {
      id: 7,
      name: 'Shadrack Essien',
      username: '@yuppy_critty',
      image: require('../assets/img.jpg'),
    },
    {
      id: 8,
      name: 'Prince Scott Abakah ',
      username: '@Scottish_Breed',
      image: require('../assets/learning.jpg'),
    },
  ];

  // const [text, setText] = useState('');

  return (
    <Screen>
      <View style={styles.header}>
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} />
          <TextInput
            style={styles.textInput}
            placeholder="Search..."
            value={search}
            onChangeText={text => searchFilter(text)}
          />
        </View>
        <TouchableWithoutFeedback
        // onPress={() => setText('')}
        >
          <Text style={styles.cancelBtn}>cancel</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.container}>
        {isLoading && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
              animating={isLoading}
              size="large"
              color={colors.primary}
            />
          </View>
        )}
        {error && (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 18,
                color: colors.danger,
                paddingHorizontal: 20,
              }}>
              Error fetching data... Check your network connection!
            </Text>
          </View>
        )}
        <FlatList
          style={{paddingTop: 10}}
          data={filterdData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={{paddingHorizontal: 10}}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('SearchProfile', item)}>
                <View style={styles.card}>
                  <Image
                    source={require('../assets/another.jpg')}
                    style={styles.image}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.about}>{'@' + item.username}</Text>
                  </View>
                  <View style={styles.followbutton}>
                    <Text style={styles.followbtntext}>Follow</Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    height: 59,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchBarContainer: {
    backgroundColor: colors.lightgrey,
    width: '80%',
    // marginHorizontal: 5,
    height: '70%',
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  textInput: {
    fontSize: 18,
    paddingLeft: 5,
    height: '100%',
    width: '100%',
  },
  cancelBtn: {
    color: colors.white,
    fontSize: 18,
  },
  card: {
    backgroundColor: 'white',
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: colors.primary,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  name: {fontSize: 18, color: colors.black},
  about: {fontSize: 14, color: colors.medium, paddingRight: 20},
  followbutton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
    marginLeft: 'auto',
  },
  followbtntext: {
    color: 'white',
    fontSize: 13,
  },
});

export default SearchScreen;
