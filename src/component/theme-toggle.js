import { Text, TouchableOpacity, View } from "react-native";

export const ThemeToggle = () => {
  return (
    <View className="flex-row space-x-2 p-4">
      <TouchableOpacity
        onPress={() => {}}
        className="px-4 py-2 rounded-lg bg-blue-500"
      >
        <Text className="text-white">Light</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        className="px-4 py-2 rounded-lg bg-gray-500"
      >
        <Text className="text-white">Dark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {}}
        className="px-4 py-2 rounded-lg bg-gray-500"
      >
        <Text className="text-white">System</Text>
      </TouchableOpacity>
    </View>
  );
};
