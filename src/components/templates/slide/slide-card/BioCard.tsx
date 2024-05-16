import { Card } from "@mantine/core";
import { BioCardForm } from "./_components/BioCardForm";

export const BioCard: React.FC = () => (
	<Card shadow="md" radius="sm" flex={1}>
		<BioCardForm />
	</Card>
);
