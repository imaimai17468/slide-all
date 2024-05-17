import type { Bio } from "@/repository/bio/types";
import {
	ActionIcon,
	Alert,
	Box,
	Divider,
	Flex,
	Stack,
	Text,
} from "@mantine/core";
import {
	ChatBubbleIcon,
	GitHubLogoIcon,
	InfoCircledIcon,
	Pencil1Icon,
	PersonIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

type Props = {
	content?: Bio;
	onSetEditing: (value: boolean) => void;
};

export const BioCardContent: React.FC<Props> = ({
	content,
	onSetEditing,
}: Props) => {
	const handleSetEditing = () => {
		onSetEditing(true);
	};

	return (
		<Box h="100%">
			{!content ? (
				<Alert icon={<InfoCircledIcon />} title="登壇情報が未入力です。">
					カード右下のボタンから情報を入力したください
				</Alert>
			) : (
				<Stack justify="space-between" h="100%" pos="relative">
					<Stack>
						<Stack gap={8}>
							<Flex gap={8} align="center">
								<ChatBubbleIcon />
								<Text size="lg">{content.title}</Text>
							</Flex>
							<Text>{content.description}</Text>
						</Stack>
						<Divider />
						<Stack gap={8}>
							<Flex gap={8} align="center">
								<PersonIcon />
								<Text size="lg">{content.name}</Text>
							</Flex>
							<Text>{content.bio}</Text>
						</Stack>
					</Stack>
					<Stack gap={8} mt="auto">
						{content.xID && (
							<Flex gap={8} align="center">
								<TwitterLogoIcon />
								<Text>{content.xID}</Text>
							</Flex>
						)}
						{content.githubID && (
							<Flex gap={8} align="center">
								<GitHubLogoIcon />
								<Text>{content.githubID}</Text>
							</Flex>
						)}
					</Stack>
				</Stack>
			)}
			<ActionIcon
				type="submit"
				size="lg"
				pos="absolute"
				bottom={4}
				right={4}
				bg="green.6"
				onClick={handleSetEditing}
			>
				<Pencil1Icon />
			</ActionIcon>
		</Box>
	);
};
