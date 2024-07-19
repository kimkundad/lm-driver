import { Image, Text, View, StyleSheet, Platform, ScrollView, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function HomeScreen() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }} >
      <ScrollView>
        <View style={styles.header}>
            <View style={styles.showflex}>
                <Image
                    style={styles.userImage}
                    source={{ uri: 'https://wpnrayong.com/admin/assets/media/avatars/300-12.jpg' }} />
                    <View>
                      <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>Mr.Shuvit Funsok,</Text>
                      <View style={styles.showflex2}>
                        <Text style={{
                          color: '#666', fontSize: 15, fontFamily: 'Prompt_500Medium', marginTop:-3
                        }}>รหัส </Text>
                        <Text style={{
                          color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop:-3
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
              <Text style={{ fontSize: 17, fontFamily: 'Prompt_500Medium', }}>Recent Your Shipment</Text>
              <Text style={{ fontSize: 13, fontFamily: 'Prompt_400Regular', }}>View More</Text>
          </View>

            <View style={styles.searchSection}>
                
    <TextInput
        style={styles.input}
        placeholder="Enter Oreder Number"
        underlineColorAndroid="transparent"
    />
    <Feather style={styles.searchIcon} name="search" size={24} color="gray" />
</View>

          <View>


            <View style={styles.boxlist}>
                <View style={styles.showflex2}>
                <Image source={require('../../assets/images/box.png')}
                    style={{ width: 50, height: 50, marginRight:10 }} />
                  <View>
                      <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>คุณนก ชาเย็น สาขาพระรามเก้า...</Text>
                      <View style={styles.showflex2}>
                        <Text style={{
                          color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop:-3
                        }}>ID:43036905112553</Text>
                      </View>
                    </View>
                </View>
                <View style={styles.iconright}>
                  <Feather name="chevron-right" size={24} color="#000" />
                </View>
            </View>

            <View style={styles.boxlist}>
                <View style={styles.showflex2}>
                <Image source={require('../../assets/images/box.png')}
                    style={{ width: 50, height: 50, marginRight:10 }} />
                  <View>
                      <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>คุณนก ชาเย็น สาขาพระรามเก้า...</Text>
                      <View style={styles.showflex2}>
                        <Text style={{
                          color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop:-3
                        }}>ID:43036905112553</Text>
                      </View>
                    </View>
                </View>
                <View style={styles.iconright}>
                  <Feather name="chevron-right" size={24} color="#000" />
                </View>
            </View>

            <View style={styles.boxlist}>
                <View style={styles.showflex2}>
                <Image source={require('../../assets/images/box.png')}
                    style={{ width: 50, height: 50, marginRight:10 }} />
                  <View>
                      <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>คุณนก ชาเย็น สาขาพระรามเก้า...</Text>
                      <View style={styles.showflex2}>
                        <Text style={{
                          color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop:-3
                        }}>ID:43036905112553</Text>
                      </View>
                    </View>
                </View>
                <View style={styles.iconright}>
                  <Feather name="chevron-right" size={24} color="#000" />
                </View>
            </View>

            <View style={styles.boxlist}>
                <View style={styles.showflex2}>
                <Image source={require('../../assets/images/box.png')}
                    style={{ width: 50, height: 50, marginRight:10 }} />
                  <View>
                      <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>คุณนก ชาเย็น สาขาพระรามเก้า...</Text>
                      <View style={styles.showflex2}>
                        <Text style={{
                          color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop:-3
                        }}>ID:43036905112553</Text>
                      </View>
                    </View>
                </View>
                <View style={styles.iconright}>
                  <Feather name="chevron-right" size={24} color="#000" />
                </View>
            </View>

            <View style={styles.boxlist}>
                <View style={styles.showflex2}>
                <Image source={require('../../assets/images/box.png')}
                    style={{ width: 50, height: 50, marginRight:10 }} />
                  <View>
                      <Text style={{ color: '#000', fontSize: 16, fontFamily: 'Prompt_400Regular', }}>คุณนก ชาเย็น สาขาพระรามเก้า...</Text>
                      <View style={styles.showflex2}>
                        <Text style={{
                          color: '#999', fontSize: 14, fontFamily: 'Prompt_400Regular', marginTop:-3
                        }}>ID:43036905112553</Text>
                      </View>
                    </View>
                </View>
                <View style={styles.iconright}>
                  <Feather name="chevron-right" size={24} color="#000" />
                </View>
            </View>


          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal:12,
    marginBottom: 10
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
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconright: {
    justifyContent: 'center'
  }
});
