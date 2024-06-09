"use client";

import { bgColorAtom } from "@/atom/bgColorAtom";
import { Box, Flex, Stack } from "@mantine/core";
import { useAtom } from "jotai";
import { BioCard } from "./_components/BioCard";
import { CameraCard } from "./_components/CameraCard";
import { MediaOverlay } from "./_components/MediaOverlay";
import { SettingButton } from "./_components/SettingButton";
import { SlideCard } from "./_components/SlideCard";
import { SubtitleCard } from "./_components/SubtitleCard";

export const SlideContent: React.FC = () => {
	const [bgColor] = useAtom(bgColorAtom);

	return (
		<>
			<SettingButton />
			<MediaOverlay />
			<Box p={64} bg={bgColor} h="100vh">
				<Flex gap={32} h="100%">
					<Stack gap={32} flex={1} h="100%">
						<SlideCard />
						<SubtitleCard />
					</Stack>
					<Stack gap={32} w={300}>
						<CameraCard />
						<BioCard />
					</Stack>
				</Flex>
			</Box>
		</>
	);
};
