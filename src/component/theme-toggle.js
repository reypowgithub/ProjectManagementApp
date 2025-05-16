import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "./theme-provider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <View className="flex-row space-x-4 p-6">
      <TouchableOpacity
        onPress={() => setTheme("light")}
        className={`px-4 py-2 rounded-lg ${
          theme === "light" ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        <Text
          className={
            theme === "light"
              ? "text-white"
              : "text-gray-800 dark:text-gray-200"
          }
        >
          Light
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTheme("dark")}
        className={`px-4 py-2 rounded-lg ${
          theme === "dark" ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        <Text
          className={
            theme === "dark" ? "text-white" : "text-gray-800 dark:text-gray-200"
          }
        >
          Dark
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTheme("system")}
        className={`px-4 py-2 rounded-lg ${
          theme === "system" ? "bg-blue-500" : "bg-gray-200 dark:bg-gray-700"
        }`}
      >
        <Text
          className={
            theme === "system"
              ? "text-white"
              : "text-gray-800 dark:text-gray-200"
          }
        >
          System
        </Text>
      </TouchableOpacity>
    </View>
  );
};
