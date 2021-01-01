interface MetaData {
    /** Short description of the content */
    description: string;
    /** FB OpenGraph type */
    type: string;
    /** URL, duh */
    url: string;
    /** Page title */
    title: string;
    /** Preview image */
    image: string;
}

declare function formatSiteMetadata (meta: MetaData): {
    hid: string,
    name?: string,
    content?: string,
};

export default formatSiteMetadata;