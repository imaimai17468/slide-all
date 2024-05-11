import { Box, Card, Flex, Stack } from "@mantine/core";

export const SlidesContent: React.FC = () => (
	<Box p={64} bg="blue.8" h="100vh">
		<Flex gap={32} h="100%">
			<Stack flex={1} h="100%">
				<Card shadow="md" radius="sm" h="70%">
					slide
				</Card>
				<Card shadow="md" radius="sm" bg="gray.8" c="gray.1" flex={1}>
					aaa
				</Card>
				<Card shadow="md" radius="sm" flex={1}>
					aaa
				</Card>
			</Stack>
			<Card shadow="md" radius="sm" w={300} h={300}>
				people
			</Card>
		</Flex>
	</Box>
);
