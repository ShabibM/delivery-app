import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

/**
 * Establishing the backend connection with Sanity
 *
 * To add exception for the CORS policy, run this in sanity folder:
 * sanity cors add http://localhost:3000
 */

const client = createClient({
	projectId: "5dv6xvp5", // use env varibles
	dataset: "production",
	useCdn: true,
	apiVersion: "2021-10-21",
});
console.log(client.projectId);

const builder = ImageUrlBuilder(client);
export const urlFor = (image) => builder.image(image);

export default client;
