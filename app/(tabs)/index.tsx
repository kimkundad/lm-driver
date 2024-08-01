import React from 'react';
import { Image, Text, View, StyleSheet, Platform, FlatList, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
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

const renderHorizontalCard = ({ item }) => (
  <TouchableOpacity
    onPress={() => {
      router.push('(order)/detail');
    }}>
    <View style={styles.sectionHorizon}>
      <ImageBackground
        source={require('../../assets/images/bg_box.png')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.orderTypeCardx}>
          <View style={styles.orderTypeInfo}>
            <Text style={styles.orderTypeTitle}>คุณ Thanawut Karnpian</Text>
            <Text style={styles.orderTypePrice}>สาขาพระรามเก้า</Text>
            <View style={styles.orderTypeDurationWrapper}>
              <Text style={styles.orderTypeDuration}>ID : 4303690511</Text>
            </View>
            <TouchableOpacity style={styles.buttonc}>
              <View style={styles.iconright}>
                <Feather name="chevron-right" size={24} color="#666" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }} >
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <View style={styles.showflex}>
                <Image
                  style={styles.userImage}
                  source={{ uri: 'https://wpnrayong.com/admin/assets/media/avatars/300-12.jpg' }} />
                <View>
                  <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>Mr.Shuvit Funsok,</Text>
                  <View style={styles.showflex2}>
                    <Text style={{
                      color: '#666', fontSize: 15, fontFamily: 'Prompt_500Medium', marginTop: -3
                    }}>รหัส </Text>
                    <Text style={{
                      color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop: -3
                    }}>430369051</Text>
                  </View>
                </View>
              </View>
              <View>
                <Ionicons name="notifications-circle" size={42} color="black" />
              </View>
            </View>
            <View style={styles.container}>

              <View style={styles.textListHead}>
                <Text style={{ fontSize: 17, fontFamily: 'Prompt_500Medium', }}>Current Shipping</Text>
              </View>

              <FlatList
                horizontal
                data={data}
                renderItem={renderHorizontalCard}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingHorizontal: 0 }}
                showsHorizontalScrollIndicator={false}
              />

              <View style={{ height: 10 }}></View>
              <View style={styles.textListHead}>
                <Text style={{ fontSize: 17, fontFamily: 'Prompt_500Medium', }}>Recent Your Shipment</Text>
                <Text style={{ fontSize: 13, fontFamily: 'Prompt_400Regular', }}>View More</Text>
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
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Prompt_500Medium',
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
  background: {
    flexDirection: 'row',
    padding: 16,
  },
  backgroundImage: {
    borderRadius: 8,
    opacity: 0.9, // Adjust the opacity as needed
  },
  sectionHorizon: {
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: 280
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
    width: 140
  },
  buttonc: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    marginTop: 30
  },
  orderTypeCard: {
    backgroundColor: '#FFF1E5', // Background color
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderTypeCardx: {
    display: 'flex',
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
    fontFamily: 'Prompt_500Medium',
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