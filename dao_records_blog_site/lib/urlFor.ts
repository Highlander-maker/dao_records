import urlBuilder from "@sanity/image-url";
import React from "react";
import { client } from "./sanity.client";
import ImageUrlBuilder from "@sanity/image-url";

//get a pre-configured url-builder from your sanity client
const builder = ImageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor;
