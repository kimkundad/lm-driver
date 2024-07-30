import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Make sure you have the Ionicons package installed

export default function CustomCard() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={ require('../../assets/images/1721145018320.png') } 
        style={styles.backgroundImage} 
        imageStyle={styles.imageStyle}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Premium Box Packing</Text>
          <View style={styles.idContainer}>
            <Text style={styles.idText}>ID: V789456AR123</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="gray" style={styles.icon} />
        </View>
        <Image 
          source={ require('../../assets/images/box1.png') } 
          style={styles.boxImage} 
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  backgroundImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    overflow: 'hidden',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageStyle: {
    borderRadius: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  idContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    marginTop: 8,
  },
  idText: {
    color: '#666',
  },
  icon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  boxImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});