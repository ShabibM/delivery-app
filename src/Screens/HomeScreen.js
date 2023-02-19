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
	ScrollView,
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
import Category from "../components/Category";
import FeaturedRow from "../components/FeaturedRow";

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
				<View className="flex-1">
					<TouchableOpacity className="flex-row items-center space-x-2">
						<Image
							source={{
								uri: "https://links.papareact.com/wru",
							}}
							className="h-10 w-10 bg-green-300 rounded-full"
						/>
						<ChevronDownIcon
							size={23}
							color="#00ffdd"
						/>
					</TouchableOpacity>
				</View>

				<View className="space-x-4 items-end">
					<Text className="font-bold text-xl">Current Location</Text>
					<Text className="text-xs text-gray-400 font-bold">
						Delivering now !
					</Text>
				</View>
			</View>

			{/* Search */}
			<View className="flex-row space-x-2 items-center pb-2 mx-2">
				<View className="flex-row  bg-gray-200 p-3 space-x-2 flex-1">
					<MagnifyingGlassIcon
						size={20}
						color="gray"
						opacity={0.4}
						className="font-bold"
					/>
					<TextInput
						keyboardType="default"
						placeholder="Resturants :P"
						className="text-sm "
					/>
				</View>
				<TouchableOpacity>
					<AdjustmentsHorizontalIcon color="#00ffdd" />
				</TouchableOpacity>
			</View>

			{/* Body (Scroll) */}

			<ScrollView
				className="bg-gray-100 "
				contentContainerStyle={{}}
			>
				{/* Categories */}
				<Category />

				{/* Featured */}
				<FeaturedRow
					title="Featured Meals"
					desc="most sold meals"
				/>

				{/* Discounts */}
				<FeaturedRow
					title="Discounted"
					desc="%25 price off, what are you waiting for :P "
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
