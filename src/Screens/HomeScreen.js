/**
 * rnf: React Native Functional componenet
 */

import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // exlcude the upper borders
    <SafeAreaView>
      <View className="flex-row mx-5 items-center  justify-between">
        {/* Header */}
        <View className="">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-10 w-10 bg-green-300 rounded-full"
          />
        </View>

        <View className="items-center">
          <Text className="text-blue-500 font-bold text-xl">HomeScreen</Text>
          <Text className="text-xs">Deliver now !</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
