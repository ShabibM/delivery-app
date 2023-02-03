import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// destrucing props
const CategoryCard = ({ imgSource, title }) => {
	return (
		<TouchableOpacity className="px-2 ">
			<View className="p-3  items-center space-y-2">
				<Image
					source={{ uri: imgSource }}
					className="w-20 h-20 rounded"
				/>
				<Text className="text-white text-lg font-bold">{title}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CategoryCard;
