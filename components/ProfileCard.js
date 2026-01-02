/**
 * Profil bilgilerini ve görselini gösteren kart bileşeni.
 * Tıklanma (onPress) olayını yönetir.
 */
export default function ProfileCard...
// components/ProfileCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Props: name, role, imageSource [cite: 516]
export default function ProfileCard({ name, role, imageSource }) {
  
  // Tıklama Olayı (Bölüm 4) [cite: 569-570]
  const handlePress = () => {
    Alert.alert("Profil Tıklandı", `${name}'in profiline dokundunuz.`);
  };

  return (
    // Dokunulabilir Yapı (Bölüm 4) [cite: 568]
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.card}>
        {/* Profil Resmi */}
        <Image source={imageSource} style={styles.avatar} />
        
        {/* İsim ve Rol */}
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Stiller (Bölüm 2) [cite: 520-535]
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: 320,
    // Gölge Efektleri (iOS & Android)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android için
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, // Tam daire
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
});