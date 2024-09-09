"use client";

import { bgColorAtom } from "@/atom/bgColorAtom";
import {
	ActionIcon,
	Button,
	ColorPicker,
	Input,
	Popover,
	Stack,
	Text,
} from "@mantine/core";
import { GearIcon } from "@radix-ui/react-icons";
import { ColorWheelIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { useState } from "react";

export const SettingButton: React.FC = () => {
	const [color, setColor] = useState<string>("#1971c2");
	const [_, setBgColor] = useAtom(bgColorAtom);

	return (
		<Popover width={300} position="bottom" shadow="md">
			<Popover.Target>
				<ActionIcon
					bg="green.6"
					pos="absolute"
					top={8}
					right={8}
					aria-label="screen-setting"
				>
					<GearIcon />
				</ActionIcon>
			</Popover.Target>
			<Popover.Dropdown>
				<Stack gap={4}>
					<Text fw={700}>BackgroundColor</Text>
					<ColorPicker format="rgba" value={color} onChange={setColor} />
					<Input value={color} onChange={(e) => setColor(e.target.value)} />
					<Button
						leftSection={<ColorWheelIcon />}
						onClick={() => {
							setBgColor(color);
						}}
					>
						Set Color
					</Button>
				</Stack>
			</Popover.Dropdown>
		</Popover>
	);
};
