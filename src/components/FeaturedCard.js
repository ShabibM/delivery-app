import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const FeaturedCard = ({
	id,
	imgUrl,
	title,
	rating,
	desc,
	genre,
	address,
	long,
	lat,
}) => {
	return (
		<TouchableOpacity className="px-1 ">
			<View className="py-3 px-1  items-center ">
				<Image
					source={{ uri: imgUrl }}
					className="w-46 h-46 rounded-lg"
				/>
				<View>
					<Text className=" text-lg font-bold">{title}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default FeaturedCard;
