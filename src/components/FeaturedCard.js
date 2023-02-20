import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

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
		<View>
			<View className="mr-6 my-3 px-1 bg-white shadow-lg rounded">
				<Image
					source={{ uri: imgUrl }}
					className="w-52 h-52 rounded-lg mb-1 mx-2 mt-2"
				/>
				<TouchableOpacity className="flex   ">
					{/* NAME - RATING */}
					<View className="flex-row items-center justify-between my-1 mx-2">
						<Text className=" text-lg font-bold">{title}</Text>
						<View className="flex-row items-center space-x-1">
							<StarIcon
								className="shadow "
								color="purple"
								opacity={0.6}
							/>
							<Text className="text-gray-500 font-bold"> {rating}</Text>
						</View>
					</View>
					{/* Location */}
					<View className="flex-row items-center justify-around pb-5">
						<View className="flex-row items-center">
							<MapPinIcon
								color="gray"
								opacity={0.7}
							/>
							<Text className="text-s text-gray-400">{address} - </Text>
						</View>
						<Text className="text-s text-gray-400 font-bold"> {genre}</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default FeaturedCard;
