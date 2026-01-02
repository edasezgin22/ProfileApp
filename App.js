// App.js
import { StyleSheet, ScrollView } from 'react-native';
// SafeAreaProvider'ı da import ediyoruz:
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'; 
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    // SafeAreaProvider, çentik hesaplamasını yapan ana kapsayıcıdır.
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* Kart 1: Ada Lovelace */}
          <ProfileCard 
            name="Ada Lovelace"
            role="Mathematician & Writer"
            // Eğer internetten çekiyorsan bu kalsın, dosya ise require(...) yap.
            imageSource={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} 
          />

          {/* Kart 2: Grace Hopper */}
          <ProfileCard 
            name="Grace Hopper"
            role="Computer Scientist"
            imageSource={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }} 
          />

          {/* Kart 3: Hedy Lamarr */}
          <ProfileCard 
            name="Hedy Lamarr"
            role="Actress & Inventor"
            imageSource={{ uri: 'https://randomuser.me/api/portraits/women/65.jpg' }} 
          />

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5', // Arka plan rengi
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40, // En alttaki kartın altına biraz boşluk bırakır
  },
});
