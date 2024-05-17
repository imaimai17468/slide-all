export const getEmbedUrl = (url: string) => {
	const paths = url.split("/");
	const slideId = paths[paths.indexOf("d") + 1];
	return `https://docs.google.com/presentation/d/${slideId}/embed`;
};
