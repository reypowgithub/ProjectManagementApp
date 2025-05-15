import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Main() {
  const handleLogout = async () => {
    router.replace("/auth/login");
  };

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-gray-900">
      <Text className="text-gray-900 dark:text-white text-xl mb-4">
        Welcome to the main page!
      </Text>
      <TouchableOpacity
        onPress={handleLogout}
        className="mt-8 bg-black px-6 py-3 rounded-xl"
      >
        <Text className="text-white font-semibold text-base">Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
