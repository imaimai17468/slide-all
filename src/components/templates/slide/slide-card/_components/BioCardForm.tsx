"use client";

import { type Bio, BioSchema, isBio } from "@/repository/bio/types";
import {
	ActionIcon,
	Divider,
	Flex,
	Stack,
	TextInput,
	Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "@mantine/form";
import {
	CheckCircledIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

type Props = {
	onSubmit: (values: Bio) => void;
	onSetEditing: (value: boolean) => void;
	initialValues?: Bio;
};

export const BioCardForm: React.FC<Props> = ({
	onSubmit,
	onSetEditing,
	initialValues,
}: Props) => {
	const form = useForm({
		mode: "uncontrolled",
		initialValues,
		validate: zodResolver(BioSchema),
	});

	const handleSubmit = (values: unknown) => {
		if (isBio(values)) {
			onSubmit(values);
			onSetEditing(false);
		}
	};

	return (
		<form onSubmit={form.onSubmit(handleSubmit)} style={{ height: "100%" }}>
			<Stack justify="space-between" h="100%" pos="relative">
				<Stack>
					<Stack gap={8}>
						<TextInput
							placeholder="〇〇で××した話"
							label="Title"
							withAsterisk
							key={form.key("title")}
							{...form.getInputProps("title")}
						/>
						<Textarea
							placeholder="〇〇を使って××しました"
							label="Description"
							rows={3}
							key={form.key("description")}
							{...form.getInputProps("description")}
						/>
					</Stack>
					<Divider />
					<Stack gap={8}>
						<TextInput
							placeholder="John Doe"
							label="Your Name"
							withAsterisk
							key={form.key("name")}
							{...form.getInputProps("name")}
						/>
						<Textarea
							placeholder="ゆめみ フロントエンド 24卒"
							label="Your Bio"
							rows={3}
							key={form.key("bio")}
							{...form.getInputProps("bio")}
						/>
					</Stack>
				</Stack>
				<Stack gap={8} mt="auto">
					<Flex gap={8} align="center">
						<TwitterLogoIcon />
						<TextInput
							placeholder="X ID"
							key={form.key("xID")}
							{...form.getInputProps("xID")}
						/>
					</Flex>
					<Flex gap={8} align="center">
						<GitHubLogoIcon />
						<TextInput
							placeholder="GitHub ID"
							key={form.key("githubID")}
							{...form.getInputProps("githubID")}
						/>
					</Flex>
				</Stack>
			</Stack>
			<ActionIcon
				type="submit"
				size="lg"
				pos="absolute"
				bottom={4}
				right={4}
				bg="green.6"
			>
				<CheckCircledIcon />
			</ActionIcon>
		</form>
	);
};
