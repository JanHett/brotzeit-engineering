// export interface MetaData {
//     /** Short description of the content */
//     description: string;
//     /** FB OpenGraph type */
//     type: string;
//     /** URL, duh */
//     url: string;
//     /** Page title */
//     title: string;
//     /** Preview image */
//     image: string;
// }

/**
 * Convert the shorthand MetaData object to nuxt's interface
 */
export default (meta) => {
    return [
      {
        hid: "description",
        name: "description",
        content: meta.description,
      },
      {
        hid: "og:type",
        property: "og:type",
        content: meta.type,
      },
      {
        hid: "og:url",
        property: "og:url",
        content: meta.url,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: meta.title,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: meta.description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: meta.image,
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: meta.url,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: meta.title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: meta.description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: meta.image,
      },
    ];
  };
  