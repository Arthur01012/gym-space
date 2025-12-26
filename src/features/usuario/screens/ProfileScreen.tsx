import { View, TouchableOpacity, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useUserStore } from '../store';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const user = useUserStore((state) => state.user);
  const updateProfileImage = useUserStore(
    (state) => state.updateProfileImage
  );
  const logout = useUserStore((state) => state.logout);

  const pickImage = async () => {
    const { status } =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') return;

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      updateProfileImage(result.assets[0].uri);
    }
  };

  if (!user) return null;

  return (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <TouchableOpacity onPress={pickImage}>
        {user.profileImage ? (
          <Image
            source={{ uri: user.profileImage }}
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
            }}
          />
        ) : (
          <Ionicons name="person-circle" size={90} color="#999" />
        )}
      </TouchableOpacity>

      <Text style={{ marginTop: 10, fontSize: 18 }}>
        {user.username}
      </Text>

      <TouchableOpacity
        onPress={logout}
        style={{
          marginTop: 30,
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 10,
          backgroundColor: '#000',
        }}
      >
        <Text style={{ color: '#fff' }}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
    </View>
  );
}
