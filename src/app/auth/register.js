import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import "../../../global.css";
import { useEffect, useState } from "react";
import { loadFonts } from "../../lib/font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {

  };

  const handleGotoLogin = () => {
    router.push("/auth/login");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 px-6 justify-center">
        <Text className="text-3xl font-bold text-gray-900 mt-[67px] font-circular-bold w-64 mb-4">
          Singn Up and starting to work!
        </Text>

        <View className="space-y-4">
          <TextInput
            className="w-full h-14 mb-8 px-4 bg-gray-50 bg-opacity-10 rounded-xl text-base text-gray-900"
            placeholder="Full name"
            plaeceholderTextColor="#9ca3f"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            className="w-full h-14 mb-8 px-4 bg-gray-50 bg-opacity-10 rounded-xl text-base text-gray-900"
            placeholder="Email"
            plaeceholderTextColor="#9ca3f"
            value={email}
            onChangeText={setEmail}
          />
          <View className="flex-row items-center ">
            <TextInput
              className="w-full h-14 mb-8 px-4 bg-gray-50 bg-opacity-10 rounded-xl text-base text-gray-900"
              placeholder="Password"
              secureTextEntry={!showPassword}
              plaeceholderTextColor="#9ca3f"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-1/2"
            >
              {showPassword ? (
                <Ionicons name="eye-off" size={24} color="#9ca3af" />
              ) : (
                <Ionicons name="eye" size={24} color="#9ca3af" />
              )}
            </TouchableOpacity>
          </View>

          {error ? (
            <Text className="text-red-500 text-center mb-2">{error}</Text>
          ) : null}

          <Text className="text-center text-gray-700 text-sm mb-4">
            By signin up you agree to our{" "}
            <Text className="font-bold">Terms of Use</Text> and
            <Text className="font-bold"> Privacy notice</Text>
          </Text>

          <TouchableOpacity
            className="w-full h-14 bg-amber-300 rounded-xl items-center justify-center mb-4 mt-20"
            onPress={handleRegister}
            disabled={loading}
          >
            <Text className="text-white font-semibold text-[16px">
              {loading ? "Registering..." : "Sing Up Now"}
            </Text>
          </TouchableOpacity>

          <Text className="text-center text-gray-800 mt-2">
            Already registered?{" "}
            <Text
              className="font-semibold text-amber-400"
              onPress={handleGotoLogin}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
