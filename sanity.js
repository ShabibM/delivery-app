import sanityClient from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
import { config } from "dotenv";

/**
 * Establishing the backend connection with Sanity
 *
 * To add exception for the CORS policy, run this in sanity folder:
 * sanity cors add http://localhost:3000
 */

const client = sanityClient({
	projectId: process.env.SANITY_PRIJECT_ID,
	dataset: "production",
	useCdn: true,
	apiVersion: "2021-10-21",
});
console.log(client.projectId);

const builder = ImageUrlBuilder(client);
export const urlFor = (image) => builder.image(image);

export default client;
