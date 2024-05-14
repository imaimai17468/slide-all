export const isUrl = (txt: string) => {
	try {
		new URL(txt);
		return true;
	} catch (_) {
		return false;
	}
};
