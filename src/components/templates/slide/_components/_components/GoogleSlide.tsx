import { getEmbedUrl } from "../_libs/getEmbedUrl";

type Props = {
	url: string;
};

export const GoogleSlide: React.FC<Props> = ({ url }) => {
	return (
		<iframe
			src={getEmbedUrl(url)}
			width="100%"
			height="100%"
			title="Google Slides Presentation"
		/>
	);
};
