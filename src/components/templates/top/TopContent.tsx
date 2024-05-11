import { Box, Card, Flex, Stack, Text } from "@mantine/core";
import { RouteButton } from "./_components/RouteButton";

export const TopContent: React.FC = () => (
	<Box bg="blue.8">
		<Flex h="100vh" align="center" justify="center">
			<Card maw={400} p={32} shadow="md" radius="md" flex="1">
				<Stack align="center">
					<Text size="xl" fw="bold">
						Create Screen to Share
					</Text>
					<RouteButton />
				</Stack>
			</Card>
		</Flex>
	</Box>
);
