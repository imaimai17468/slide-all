import type { Bio } from "@/repository/bio/types";
import { ActionIcon, Alert, Divider, Flex, Stack } from "@mantine/core";
import {
	ChatBubbleIcon,
	GitHubLogoIcon,
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
		<div>
			{!content ? (
				<Alert>登壇情報が未入力です。</Alert>
			) : (
				<Stack justify="space-between" h="100%" pos="relative">
					<Stack>
						<Stack gap={8}>
							<Flex gap={8} align="center">
								<ChatBubbleIcon />
								<text>{content.title}</text>
							</Flex>
							<text>{content.description}</text>
						</Stack>
						<Divider />
						<Stack gap={8}>
							<Flex gap={8} align="center">
								<PersonIcon />
								<text>{content.name}</text>
							</Flex>
							<text>{content.bio}</text>
						</Stack>
					</Stack>
					<Stack gap={8} mt="auto">
						{content.xID && (
							<Flex gap={8} align="center">
								<TwitterLogoIcon />
								<text>{content.xID}</text>
							</Flex>
						)}
						{content.githubID && (
							<Flex gap={8} align="center">
								<GitHubLogoIcon />
								<text>{content.githubID}</text>
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
		</div>
	);
};
