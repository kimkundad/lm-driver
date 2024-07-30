import { StyleSheet, Image, Button, Text, View, Platform, ScrollView, TextInput, TouchableOpacity } from 'react-native';
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
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Tracking() {

    const [form, setForm] = useState({
        remark: '',
      });


    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#f5f5f5' }} >
          <StatusBar style="dark" />
          
          <ScrollView>
            <View style={styles.listItemCon}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link href="(order)/detail" style={{ padding: 10 }}>
                  <Ionicons name="chevron-back" size={30} color="black" />
                </Link>
                <View style={styles.textListHead} >
                  <Text style={{
                    fontSize: 18,
                    fontFamily: 'Prompt_500Medium',
                    paddingTop: 2
                  }}>แจ้งอุบัติเหตุ</Text>
                </View>
                <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={{ width: 50 }}>
                        
                      </View>
                    </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
                <View style={styles.boxItemList}>
                    <View style={styles.locationsBox}>
                        <View style={styles.myflex}>
                            <FontAwesome name="map-marker" size={24} color="black" />
                            <Text style={styles.TextMap}>ค้นหาที่อยู่บนแผนที่</Text>
                        </View>
                        <View>
                            <Entypo name="chevron-small-right" size={26} color="black" />
                        </View>
                    </View>
                </View>
            

            <Text style={styles.sectionTitle}>อัพรูปที่เกิดเหตุ</Text>
            <View style={styles.boxItemList}>
                
                    <View style={styles.showflexCamera}>
                        <Ionicons name="camera-outline" style={styles.camera} size={100} color="black" />
                        <Image source={require('../../assets/images/list_service2.png')} style={styles.ImgFrist} />
                        <Image source={require('../../assets/images/list_service1.png')} style={styles.ImgFrist} />
                    </View>
            </View>

            <Text style={styles.sectionTitle}>หมายเหตุ</Text>
            <View style={styles.boxItemList}>
                
            <TextInput
                        clearButtonMode="while-editing"
                        onChangeText={name => setForm({ ...form, remark })}
                        placeholder="John Doe"
                        numberOfLines={4}
                        placeholderTextColor="#6b7280"
                        style={styles.textarea}
                        value={form.remark} />
            </View>

            <TouchableOpacity
                        onPress={() => {
                        // handle onPress
                        router.push('(order)/detail');
                        }}>
                        <View style={styles.btn}>
                        <Text style={styles.btnText}>บันทึกข้อมูล</Text>
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
  ImgFrist:{
    width: 100,
    height: 100,
    borderRadius: 10
  },
  camera: {
    borderWidth: 0.5, // Specifies the width of the bottom border
    borderColor: '#000',
    borderRadius: 10
  },
  textarea: {
    height: 100,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top', // Ensures the text starts at the top of the TextInput
  },
  showflexCamera: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: 'Prompt_500Medium',
    marginBottom: 8,
    marginTop:15
},
  locationsBox:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  myflex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  TextMap:{
    fontSize: 16,
    fontFamily: 'Prompt_400Regular',
    color: '#999',
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
  boxItemList: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 5,
    marginTop: 5,
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
  textListHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    fontFamily: 'Prompt_400Regular',
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
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
btnText: {
    fontSize: 18,
    lineHeight: 26,
    color: '#fff',
    fontFamily: 'Prompt_500Medium',
}
});