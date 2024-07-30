import { StyleSheet, Image, Button, Text, View, Platform, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MapViewDirections from 'react-native-maps-directions';
import { Link, useNavigation, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import React, { useState, useEffect } from 'react';

export default function Tracking() {

  const origin = { latitude: 13.7750069, longitude: 100.7072212 };
  const destination = { latitude: 13.7709242, longitude: 100.702837 };
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCsx9tQ2Mj7WWnunxa8P2blQLcGtjroLVE';

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  
//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#f5f5f5' }} >
      <StatusBar style="dark" />
      
      <ScrollView>
        <View style={styles.listItemCon}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Link href="(tabs)" style={{ padding: 10 }}>
              <Ionicons name="chevron-back" size={30} color="black" />
            </Link>
            <View style={styles.textListHead} >
              <Text style={{
                fontSize: 16,
                fontFamily: 'Prompt_500Medium',
                paddingTop: 5
              }}>1 ก.ค. 2024 15.45 หลังเที่ยง</Text>
            </View>
            <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                    router.push('(setting)/notification');
                  }}>
                  <View>
                    <Ionicons style={{ padding: 10 }} name="notifications-outline" size={27} color="black" />
                  </View>
                </TouchableOpacity>
          </View>
        </View>
        <View>
          <MapView
            initialRegion={{
              latitude: 13.7758339,
              longitude: 100.7054306,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0221,
            }}
            style={styles.map} >
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor="hotpink"
              mode='WALKING'
              language='th'
            />
            <Marker
              coordinate={origin}
              title="Starting Point"
            />
            <Marker
              coordinate={destination}
              title="Destination Point"
            >
              <Image source={require('../../assets/images/truck.png')} style={{ height: 35, width: 35 }} />
            </Marker>
          </MapView>
        </View>



        <View style={styles.container}>

          <View style={styles.boxItemList}>

            <View style={styles.containerOrderMain}>
              <View style={styles.containerOrder}>
                <View >
                  <Image source={require('../../assets/images/box1.png')}
                    style={{ width: 40, height: 40, gap: 10, marginRight: 8 }} />
                </View>
                <View >
                  <Text style={{ fontWeight: 700, fontSize: 16 }}>#ORDR1274663</Text>
                  <Text style={{ fontFamily: 'Prompt_400Regular', fontSize: 12, color: '#666', marginTop: 0 }}>ก่อน 06 ก.ค. 2024 15.47 น.</Text>
                </View>
              </View>
              <View style={styles.textStatus}>
                <Text style={{ color: '#fff', fontSize: 12 }}>On Devivery</Text>
              </View>
            </View>

            {/* profileMain  */}
            <View style={styles.profileMain}>
              <View style={styles.profile}>
                <Image
                  style={styles.userImage}
                  source={ require('../../assets/images/images.png') } />
                <View>
                  <Text style={{ fontFamily: 'Prompt_400Regular', fontSize: 13, color: '#666' }}>สินค้าต้นทาง,</Text>
                  <Text style={{ fontFamily: 'Prompt_500Medium', fontSize: 15, marginTop: -3 }}>Watcharapon Charoen </Text>
                  <Text style={{ fontFamily: 'Prompt_500Medium', fontSize: 14, marginTop: -3 }}>095-846-7417 </Text>

                </View>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Feather style={{ borderWidth: 1, borderRadius: 99, padding: 10, borderColor: '#f47524' }} name="phone" size={20} color="#f47524" />
              </View>
            </View>
            {/* profileMain  */}


            <View style={styles.textBoxDetail}>
              <View style={styles.flexItem}>
                <Text style={{ fontFamily: 'Prompt_400Regular', fontSize: 12, color: '#666' }}>ต้นทาง</Text>
                <Text style={{ fontWeight: 700, fontSize: 13 }}>Mixue เคหะร่มเกล้า</Text>
                <Text style={{ fontWeight: 700, fontSize: 13 }}>401/97 รามคำแหง 166 เขตมีนบุรี กทม. 10510</Text>
              </View>
            </View>
            <View style={styles.line_bot}></View>
            {/* profileMain  */}
            <View style={styles.profileMain}>
              <View style={styles.profile}>
                <Image
                  style={styles.userImage}
                  source={{ uri: 'https://wpnrayong.com/admin/assets/media/avatars/300-12.jpg' }} />
                <View>
                  <Text style={{ fontFamily: 'Prompt_400Regular', fontSize: 13, color: '#666' }}>ผู้รอรับสินค้า,</Text>
                  <Text style={{ fontFamily: 'Prompt_500Medium', fontSize: 15, marginTop: -3 }}>ขุนเดช ด่านปราการ </Text>
                  <Text style={{ fontFamily: 'Prompt_500Medium', fontSize: 14, marginTop: -3 }}>095-846-7417 </Text>

                </View>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                <Feather style={{ borderWidth: 1, borderRadius: 99, padding: 10, borderColor: '#f47524' }} name="phone" size={20} color="#f47524" />
              </View>
            </View>
            {/* profileMain  */}
            
            <View style={styles.textBoxDetail}>
              <View style={styles.flexItem}>
                <Text style={{ fontFamily: 'Prompt_400Regular', fontSize: 12, color: '#666' }}>ปลายทาง</Text>
                <Text style={{ fontWeight: 700, fontSize: 13 }}>คุณนก ชาเย็น สาขาพระรามเก้า</Text>
                <Text style={{ fontWeight: 700, fontSize: 13 }}>299/7 ถ. เคหะร่มเกล้า แขวงคลองสองต้นนุ่น เขตลาดกระบัง กรุงเทพมหานคร 10520</Text>
              </View>
            </View>

          </View>

          <Text style={styles.sectionTitle}>รูปโหลดของขึ้นรถ</Text>
          <View style={styles.boxItemList2}>
            
                <View style={styles.showflexCamera}>
                    <TouchableOpacity onPress={toggleCameraFacing}>
                    <Ionicons name="camera-outline" style={styles.camera} size={100} color="black" />
                    </TouchableOpacity>
                    <Image source={require('../../assets/images/list_service2.png')} style={styles.ImgFrist} />
                    <Image source={require('../../assets/images/list_service1.png')} style={styles.ImgFrist} />
                </View>
                <View style={styles.dottedBorder}></View>
                <View style={styles.showflex}>
                    <Text style={styles.remarkh}> หมายเหตุ : </Text>
                    <Text style={styles.remarkx}>เจ้าหน้าที่รับมอบสินค้าให้ช้า อาจจะทำใช้ระยะเวลาการสิ่งสินค้านานขึ้น</Text>
                </View>
          </View>

          <Text style={styles.sectionTitle}>รูปส่งของสำเร็จ</Text>
          <View style={styles.boxItemList2}>
                <View style={styles.showflexCamera}>
                    <Ionicons name="camera-outline" style={styles.camera} size={100} color="black" />
                    <Image source={require('../../assets/images/list_service2.png')} style={styles.ImgFrist} />
                    <Image source={require('../../assets/images/list_service1.png')} style={styles.ImgFrist} />
                </View>
          </View>


          <TouchableOpacity
                        onPress={() => {
                        // handle onPress
                        router.push('(order)/success');
                        }}>
                        <View style={styles.btn}>
                        <Text style={styles.btnText}>ส่งของสำเร็จ</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                        // handle onPress
                        router.push('(order)/danger');
                        }}>
                        <View style={styles.btnDanger}>
                        <Text style={styles.btnText}>แจ้งอุบัติเหตุ</Text>
                        </View>
                    </TouchableOpacity>
        </View>
      </ScrollView>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  dottedBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dotted',
    marginVertical: 8,
},
  ImgFrist:{
    width: 100,
    height: 100,
    borderRadius: 10
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: 'Prompt_500Medium',
    marginBottom: 8,
    marginTop:15
},
remarkh: {
    fontSize: 14,
    fontFamily: 'Prompt_500Medium',
    width: '20%',
},
message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
remarkx: {
    fontSize: 14,
    fontFamily: 'Prompt_400Regular',
    color: '#999',
    marginTop: -5,
    width: '80%',
    lineHeight: 15
},
  camera: {
    borderWidth: 0.5, // Specifies the width of the bottom border
    borderColor: '#000',
    borderRadius: 10
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  textBoxDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  showflexCamera: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10
  },
  flexItem: {

  },
  line_bot: {
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 0.3,
    paddingBottom: 5,

  },
  flexItem2: {
    alignItems: 'flex-end'
  },
  profileMain: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5, // Specifies the width of the bottom border
    borderBottomColor: '#d7d7d7',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  showflex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 5
  },
  textListHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    fontFamily: 'Prompt_400Regular',
  },
  listItemCon: {
    paddingTop: 40,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    // Android shadow (elevation)
    elevation: 10,
  },
  map: {
    width: '100%',
    height: 300,
  },
  containerOrder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingTop: 2
  },
  containerOrderMain: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5, // Specifies the width of the bottom border
    borderBottomColor: '#d7d7d7',
    paddingBottom: 5
  },
  textStatus: {
    backgroundColor: '#f47524',
    width: 100,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  boxItemList: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 5,
    marginTop: 12,
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow (elevation)
    elevation: 0.8,
  },
  boxItemList2: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 5,
    marginTop: 0,
    // iOS shadow properties
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Android shadow (elevation)
    elevation: 0.8,
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
    marginBottom: 10
},
btnDanger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#f44336',
    borderColor: '#f44336',
    marginBottom: 30
},
btnText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#fff',
    fontFamily: 'Prompt_500Medium',
},
});