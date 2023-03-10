import { View, Text, ScrollView, ViewBase } from "react-native";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import CategoryCard from "./CategoryCard";

const FeaturedRow = ({ title, desc }) => {
	return (
		<View>
			<View className="px-3 py-2 white shadow ">
				<View className="flex-row justify-between px-1 ">
					<Text className="font-bold text-lg">{title}</Text>

					<ArrowRightIcon className="bg-green-300" />
				</View>
				<Text className="text-sm italic text-gray-500">{desc}</Text>
			</View>
			<ScrollView
				className="flex-row space-x-5"
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					paddingHorizontal: 10,
					paddingTop: 12,
				}}
			>
				<FeaturedCard
					id="123"
					imgUrl="https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg"
					title="Burger King"
					rating="4.2"
					desc="Burger"
					genre="American"
					address="Hajr district "
					long={230}
					lat={239}
				></FeaturedCard>

				<FeaturedCard
					id="123"
					imgUrl="https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg"
					title="Burger King"
					rating="4.5"
					desc="Burger"
					genre="Italian"
					address="Ibn batuta street"
					long={230}
					lat={239}
				></FeaturedCard>
				<FeaturedCard
					id="123"
					imgUrl="https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg"
					title="Burger King"
					rating="4.2"
					desc="Burger"
					genre="American"
					address="Hajr district "
					long={230}
					lat={239}
				></FeaturedCard>

				<FeaturedCard
					id="123"
					imgUrl="https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg"
					title="Burger King"
					rating="4.5"
					desc="Burger"
					genre="Italian"
					address="Ibn batuta street"
					long={230}
					lat={239}
				></FeaturedCard>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
