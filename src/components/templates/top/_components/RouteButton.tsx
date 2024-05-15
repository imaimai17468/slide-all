"use client";

import { Button, Flex } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export const RouteButton: React.FC = () => {
	const router = useRouter();
	const id = useId();

	return (
		<Button
			onClick={() => {
				router.push(`/slide/${id}`);
			}}
		>
			<Flex gap={4} align="center">
				<p>CERATE</p>
				<PlusCircledIcon />
			</Flex>
		</Button>
	);
};
