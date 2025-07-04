const metadataGenerator = (
	title,
	description,
	url,
	imageUrl,
	imageWidth,
	imageHeight,
) => {
	const metadata = {
		title: `${title} | X Designers Career Fes`,
		description: description,
		icons: {
			icon: "/logo.png",
		},
		openGraph: {
			type: "website",
			title: title,
			description: description,
			siteName: "X Designers Career Fes",
			url: url,
			images: {
				url: imageUrl,
				width: imageWidth,
				height: imageHeight,
				alt: `${title} | ${description}`,
			},
		},
		twitter: {
			type: "website",
			title: title,
			description: description,
			siteName: "X Designers Career Fes",
			url: url,
			images: {
				url: imageUrl,
				width: imageWidth,
				height: imageHeight,
				alt: `${title} | ${description} `,
			},
			card: "summary_large_image",
		},
	};
	return metadata;
};

export default metadataGenerator;
