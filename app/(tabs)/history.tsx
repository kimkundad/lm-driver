import React from 'react';
import { Image, Text, View, StyleSheet, Platform, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useNavigation, router } from 'expo-router';

const data = [
  {
    id: '1',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  {
    id: '2',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  {
    id: '3',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  {
    id: '4',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  {
    id: '5',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  {
    id: '6',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  {
    id: '7',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  {
    id: '8',
    name: 'คุณนก ชาเย็น สาขาพระรามเก้า...',
    image: require('../../assets/images/box.png'),
    userId: '43036905112553',
  },
  // Add more items as needed
];

const renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => {
      // handle onPress
      router.push('(order)');
    }}>
    <View style={styles.boxlist}>
      <View style={styles.showflex2}>
        <Image source={item.image}
          style={{ width: 50, height: 50, marginRight: 10 }} />
        <View>
          <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>{item.name}...</Text>
          <View style={styles.showflex2}>
            <Text style={{
              color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop: -3
            }}>ID:{item.userId}</Text>
          </View>
        </View>
      </View>
      <View style={styles.iconright}>
        <Feather name="chevron-right" size={24} color="#000" />
      </View>
    </View>
  </TouchableOpacity>
);

export default function History() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }} >
      <FlatList
        ListHeaderComponent={
          <>
            <View style={{ marginTop: 20 }}></View>
            <View style={styles.container}>

            <View style={styles.textListHead}>
                <Text style={{ fontSize: 18, fontFamily: 'Prompt_500Medium', }}>History</Text>
              </View>


              <View style={styles.searchSection}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Order Number"
                  underlineColorAndroid="transparent"
                />
                <Feather style={styles.searchIcon} name="search" size={24} color="gray" />
              </View>

             

            </View>
          </>
        }
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchSection: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#999',
    borderRadius: 50,
    paddingHorizontal: 12,
    marginBottom: 10
  },
  section: {
    marginTop: 10,
    marginBottom: 15
},
sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
},
orderTypeDuration: {
  fontSize: 14,
  color: '#888',
},
orderTypeImage: {
  width: 100,
  height: 100,
  borderRadius: 10,
},
packageDetail: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 16,
},
orderTypeDurationWrapper: {
  backgroundColor: '#fff', // Background color for duration
  borderRadius: 10,
  paddingHorizontal: 10,
  paddingVertical: 4,
  marginTop: 8,
  width: 230
},
orderTypeCard: {
    backgroundColor: '#FFF1E5', // Background color
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
orderTypeInfo: {
    flexDirection: 'column',
},
orderTypeTitle: {
    fontSize: 16,
    fontFamily: 'Prompt_500Medium',
    color: '#888',
},
orderTypePrice: {
    fontSize: 18,
    fontWeight: 'bold',
},
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: '#424242',
  },
  TextInput: {
    padding: 7,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    width: '87%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopColor: '#666',
    borderRightColor: '#666',
    borderLeftColor: '#fff',
    borderWidth: 1,
  },
  searchBar: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  iconScan: {
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: 'hidden',
    borderTopColor: '#666',
    borderRightColor: '#000',
    borderLeftColor: '#666',
    borderWidth: 1,
  },
  userImage: {
    width: 40,
    height: 40,
    gap: 10,
    borderRadius: 99,
  },
  header: {
    padding: 10,
    paddingHorizontal: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30
  },
  showflex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  showflex2: {
    display: 'flex',
    flexDirection: 'row',
  },
  textListHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    padding: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  boxlist: {
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    padding: 10,
    marginHorizontal: 10,
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconright: {
    justifyContent: 'center'
  }
});