import { Image, Text, View, StyleSheet, Platform, ScrollView, TouchableOpacity, TextInput , Dimensions} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Link, useNavigation, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
const { width } = Dimensions.get('window');

export default function TabTwoScreen() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }} >
      <ScrollView>
          <View style={styles.listItemCon}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Link href="/(tabs)" style={{ padding: 10 }}>
                            <Ionicons name="chevron-back" size={30} color="black" />
                        </Link>
                        <View style={styles.textListHead} >
                            <Text style={{ fontSize: 20, fontFamily: 'Prompt_500Medium' }}>Order Detail</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                                router.push('(setting)/notification');
                            }}>
                            <View style={{ width: 50 }}>
                                
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container}>

                  <View style={styles.bodyContainer}>

                  <View style={styles.textListHead}>
                    <Text style={{ fontSize: 16, fontFamily: 'Prompt_500Medium', }}>รูปถ่ายเมื่อรับของเสร็จ</Text>
                  </View>
                  <View style={styles.boxWhite}>
                    <Image source={require('../../assets/images/Detail/1721201642512.jpg')}
                    style={styles.image} />
                  </View>

                  <View style={styles.textListHead}>
                    <Text style={{ fontSize: 16, fontFamily: 'Prompt_500Medium', }}>Package detail</Text>
                  </View>

                  <View style={styles.boxWhite}>
                    <Image source={require('../../assets/images/Detail/1721199429165.jpg')}
                    style={{ width: 345, height: 120, borderRadius: 35 }} />
                  </View>

                  <View style={styles.textListHead}>
                    <Text style={{ fontSize: 16, fontFamily: 'Prompt_500Medium', }}>Shipping address</Text>
                  </View>

                  <View style={styles.boxWhite}>
                    <Image source={require('../../assets/images/Detail/1721199439783.jpg')}
                    style={{ width: 345, height: 160, borderRadius: 35 }} />
                  </View>


                  <View style={styles.textListHead}>
                    <Text style={{ fontSize: 16, fontFamily: 'Prompt_500Medium', }}>รูปถ่ายเมื่อจบงาน</Text>
                  </View>
                  <View style={styles.boxWhite}>
                    <Image source={require('../../assets/images/Detail/1721201642512.jpg')}
                    style={styles.image} />
                  </View>

                  <TouchableOpacity
                        onPress={() => {
                        // handle onPress
                        }}>
                        <View style={styles.btn}>
                        <Text style={styles.btnText}>Accept</Text>
                        </View>
                    </TouchableOpacity>
                    
                  </View>
                </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  listItemCon: {
    paddingTop: 40,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    
},
textListHead: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 10,
  fontFamily: 'Prompt_400Regular',
},
container: {
  padding: 10,
  paddingHorizontal: 12,
  marginTop: 10,
},
bodyContainer: {
  padding: 10,
  borderRadius: 20,
  backgroundColor: '#F5F5F5',
},
boxWhite: {
  padding: 10,
  borderRadius: 20,
  backgroundColor: '#fff',
},
image: {
  width: 345, // Full width of the screen
  height: 120,  // Set the height as needed
  borderRadius: 20
},
btn: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderWidth: 1,
  backgroundColor: '#121F43',
  borderColor: '#121F43',
  marginTop: 20,
  marginBottom: 30
},
btnText: {
  fontSize: 18,
  lineHeight: 26,
  fontWeight: '600',
  color: '#fff',
},
});
