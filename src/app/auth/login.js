import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "../../../global.css";
import { useEffect, useState } from "react";
import { loadFonts } from "../../lib/font";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    // setLoading(true);
    router.push("/(main)");
  };

  const handleSignUp = () => {
    router.push("/auth/register");
  };

  return (
    <View className="flex-1 px-6 justify-center">
      <Text className="text-3xl font-bold text-gray-900 mt-[67px] font-circular-bold w-64 mb-4">
        Glad to meet you again!
      </Text>

      <View className="space-y-6">
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
            value={password}
            onChangeText={setPassword}
            plaeceholderTextColor="#9ca3f"
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

        <TouchableOpacity
          className="w-full h-14 mb-4 bg-emerald-900 rounded-xl flex-row items-center justify-center"
          onPress={handleSignIn}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-[16px] font-semibold">
              Sign In
            </Text>
          )}
        </TouchableOpacity>

        <Text className="text-center text-[14px] text-black opacity-20 mb-4">
          Or
        </Text>

        <TouchableOpacity
          className="w-full h-14 mb-4 bg-amber-300 rounded-xl items-center justify-center"
          onPress={handleSignUp}
        >
          <Text className="text-white text-[16px] font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
