"use client";

import { Box, Button, Card, Flex, Input, Stack } from "@mantine/core";
import { useRef, useState } from "react";
import { GoogleSlide } from "./_components/GoogleSlide";
import { isUrl } from "./valid/isURL";

export const SlideCard: React.FC = () => {
	const inputREf = useRef<HTMLInputElement>(null);
	const [url, setUrl] = useState<URL | null>(null);

	return (
		<Card shadow="md" radius="sm" h="80%">
			<Stack gap={16} h="100%">
				<Flex gap={16}>
					<Input ref={inputREf} placeholder="Google Slide URL" />
					<Button
						onClick={() => {
							if (inputREf.current && isUrl(inputREf.current.value)) {
								setUrl(new URL(inputREf.current.value));
							}
						}}
					>
						Set Slide
					</Button>
				</Flex>
				<Box flex={1}>{url && <GoogleSlide url={url} />}</Box>
			</Stack>
		</Card>
	);
};
