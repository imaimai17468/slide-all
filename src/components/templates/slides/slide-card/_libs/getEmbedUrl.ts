export const getEmbedUrl = (urlObj: URL) => {
	const pathName = urlObj.pathname;
	const pathNameWithoutEdit = pathName.endsWith("/edit")
		? pathName.slice(0, -5)
		: pathName;
	const paths = pathNameWithoutEdit.split("/");
	const slideId = paths[paths.length - 1];
	console.log(urlObj, paths, slideId);
	return `https://docs.google.com/presentation/d/${slideId}/embed`;
};
