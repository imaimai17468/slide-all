import { Box, Card, Flex, Stack } from "@mantine/core";
import { BioCard } from "./slide-card/BioCard";
import { CameraCard } from "./slide-card/CameraCard";
import { SlideCard } from "./slide-card/SlideCard";

export const SlideContent: React.FC = () => (
	<Box p={64} bg="blue.8" h="100vh">
		<Flex gap={32} h="100%">
			<Stack gap={32} flex={1} h="100%">
				<SlideCard />
				<Card shadow="md" radius="sm" bg="gray.8" c="gray.1" flex={1}>
					字幕
				</Card>
			</Stack>
			<Stack gap={32} w={300}>
				<CameraCard />
				<BioCard />
			</Stack>
		</Flex>
	</Box>
);
