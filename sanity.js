import { createClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const client = createClient({
  projectId: "a1evytuo",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false,
});
// const builder = ImageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

export default client;
