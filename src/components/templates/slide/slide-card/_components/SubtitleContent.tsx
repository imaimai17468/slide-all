"use client";

import { ActionIcon, Box, Flex, Text } from "@mantine/core";
import { PauseIcon, PlayIcon, TrashIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export const SubtitleContent: React.FC = () => {
	const [isRecording, setIsRecording] = useState(false);
	const [text, setText] = useState<string>("");
	const [transcript, setTranscript] = useState<string>("");
	const [recognition, setRecognition] = useState<SpeechRecognition | null>(
		null,
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const recognition = new webkitSpeechRecognition();
			recognition.lang = "ja-JP";
			recognition.continuous = true;
			recognition.interimResults = true;
			setRecognition(recognition);
		}
	}, []);

	useEffect(() => {
		if (!recognition) return;
		if (isRecording) {
			recognition.start();
		} else {
			recognition.stop();
		}
	}, [isRecording, recognition]);

	useEffect(() => {
		if (!recognition) return;
		recognition.onresult = (event) => {
			const results = event.results;
			for (let i = event.resultIndex; i < results.length; i++) {
				if (results[i].isFinal) {
					setText(results[i][0].transcript);
					setTranscript("");
				} else {
					setTranscript(results[i][0].transcript);
				}
			}
		};
	}, [recognition]);

	return (
		<Flex gap={16}>
			<Box flex={1}>
				<Text c="gray.5">{transcript}</Text>
				<Text>{text}</Text>
			</Box>
			<Flex gap={8}>
				{isRecording ? (
					<ActionIcon
						bg="red.6"
						onClick={() => {
							setIsRecording(false);
						}}
					>
						<PauseIcon />
					</ActionIcon>
				) : (
					<ActionIcon
						bg="green.6"
						onClick={() => {
							setIsRecording(true);
						}}
					>
						<PlayIcon />
					</ActionIcon>
				)}
				<ActionIcon
					bg="red.6"
					onClick={() => {
						setText("");
					}}
				>
					<TrashIcon />
				</ActionIcon>
			</Flex>
		</Flex>
	);
};
