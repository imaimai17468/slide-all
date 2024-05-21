"use client";
import { slideUrlAtom } from "@/atom/slideUrlAtom";
import {
	ActionIcon,
	Button,
	Card,
	Flex,
	Input,
	Popover,
	Stack,
	Text,
} from "@mantine/core";
import { GearIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { GoogleSlide } from "./_components/GoogleSlide";
import { isUrl } from "./valid/isURL";

export const SlideCard: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [url, setUrl] = useState<string | null>(null);
	const [slideUrl, setSlideUrl] = useAtom(slideUrlAtom);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (slideUrl && isUrl(slideUrl)) {
			setUrl(slideUrl);
		}
	}, [slideUrl]);

	return (
		<Card shadow="md" radius="sm" h="80%" pos="relative">
			<Popover width={300} trapFocus withArrow position="bottom" shadow="md">
				<Popover.Target>
					<ActionIcon bg="green.6" pos="absolute" top={8} right={8}>
						<GearIcon />
					</ActionIcon>
				</Popover.Target>
				<Popover.Dropdown>
					<Flex gap={16}>
						<Stack gap={4}>
							<Input
								ref={inputRef}
								defaultValue={url ?? ""}
								placeholder="Google Slide URL"
							/>
							{isError && (
								<Text size="xs" c="red.6">
									Invalid URL
								</Text>
							)}
						</Stack>
						<Button
							onClick={() => {
								if (inputRef.current && isUrl(inputRef.current.value)) {
									const url = inputRef.current.value;
									setUrl(url);
									setSlideUrl(url);
									setIsError(false);
								} else {
									setIsError(true);
								}
							}}
						>
							Set Slide
						</Button>
					</Flex>
				</Popover.Dropdown>
			</Popover>
			{url && <GoogleSlide url={url} />}
		</Card>
	);
};
