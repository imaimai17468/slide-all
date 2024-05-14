import { Card } from "@mantine/core";
import { CameraContent } from "./_components/CameraContent";

export const CameraCard: React.FC = () => (
	<Card shadow="md" radius="sm" w={300} h={200}>
		<CameraContent />
	</Card>
);
