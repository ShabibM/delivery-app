/**
 * rnf: React Native Functional componenet
 */

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  HomeModernIcon,
  ChevronDownIcon,
} from "react-native-heroicons/outline";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/solid";

export default function HomeScreen() {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // exlcude the upper borders
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row mx-3 pb-3">
        <View className="flex-1  ">
          <TouchableOpacity className="flex-row items-center space-x-1">
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="h-10 w-10 bg-green-300 rounded-full"
            />
            <ChevronDownIcon size={20} color="grey" />
          </TouchableOpacity>
        </View>

        <View className="space-x-4 items-end">
          <Text className="font-bold text-xl">Current Location</Text>
          <Text className="text-xs text-blue-300 font-bold">
            Delivering now !
          </Text>
        </View>
      </View>

      {/* Search */}
      <View className="flex-row space-x-2 items-center pb-2 mr-2">
        <View className="flex-row  bg-gray-200 p-3 space-x-2 flex-1">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            keyboardType="default"
            placeholder="Resturants :P"
            className="text-sm"
          ></TextInput>
        </View>
        <TouchableOpacity>
          <AdjustmentsHorizontalIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
