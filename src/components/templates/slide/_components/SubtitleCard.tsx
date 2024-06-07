import { Card } from "@mantine/core";
import { SubtitleContent } from "./_components/SubtitleContent";

export const SubtitleCard: React.FC = () => (
	<Card shadow="md" radius="sm" bg="gray.8" c="gray.1" flex={1}>
		<SubtitleContent />
	</Card>
);
