import { Card, Divider, Flex, Input, Stack, Textarea } from "@mantine/core";
import {
	GitHubLogoIcon,
	Pencil1Icon,
	PersonIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const BioCard: React.FC = () => (
	<Card shadow="md" radius="sm" flex={1}>
		<Stack justify="space-between" h="100%">
			<Stack>
				<Stack gap={8}>
					<Flex gap={8} align="center">
						<Pencil1Icon />
						<Input placeholder="Title" />
					</Flex>
					<Textarea placeholder="Description" rows={5} />
				</Stack>
				<Divider />
				<Stack gap={8}>
					<Flex gap={8} align="center">
						<PersonIcon />
						<Input placeholder="Your Name" />
					</Flex>
					<Textarea placeholder="Your Bio" rows={5} />
				</Stack>
			</Stack>
			<Stack gap={8} mt="auto">
				<Flex gap={8} align="center">
					<TwitterLogoIcon />
					<Input placeholder="X ID" />
				</Flex>
				<Flex gap={8} align="center">
					<GitHubLogoIcon />
					<Input placeholder="GitHub ID" />
				</Flex>
			</Stack>
		</Stack>
	</Card>
);
