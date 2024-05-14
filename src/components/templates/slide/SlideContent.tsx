import { Box, Card, Flex, Stack } from "@mantine/core";
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
			<Stack gap={32}>
				<Card shadow="md" radius="sm" w={300} h={300}>
					people
				</Card>
				<Card shadow="md" radius="sm" flex={1}>
					aaa
				</Card>
			</Stack>
		</Flex>
	</Box>
);
