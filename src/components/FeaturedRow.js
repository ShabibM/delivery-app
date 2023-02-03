import { View, Text, ScrollView } from "react-native";
import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedRow = () => {
	return (
		<ScrollView>
			<FeaturedCard />
		</ScrollView>
	);
};

export default FeaturedRow;
