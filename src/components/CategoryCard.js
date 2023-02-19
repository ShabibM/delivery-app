import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

// destrucing props
const CategoryCard = ({ imgSource, title }) => {
	return (
		<TouchableOpacity className="px-1 ">
			<View className="py-3 px-1  items-center space-2-2">
				<Image
					source={{ uri: imgSource }}
					className="w-20 h-20 rounded"
				/>
				<View>
					<Text className=" text-lg font-bold">{title}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default CategoryCard;
