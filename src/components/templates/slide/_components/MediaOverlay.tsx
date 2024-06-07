import { Alert, Flex, Overlay, Text } from "@mantine/core";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export const MediaOverlay: React.FC = () => {
	return (
		<Overlay hiddenFrom="md">
			<Flex justify="center" align="center" h="100%">
				<Alert
					title="ご使用のデバイス幅ではご利用になれません"
					icon={<InfoCircledIcon />}
					w="fit-content"
					variant="filled"
				>
					<Text variant="filled">
						本アプリケーションはタブレットサイズ以下ではご利用になれません。
					</Text>
					<Text>1024px以上のデバイスで使用してください。</Text>
				</Alert>
			</Flex>
		</Overlay>
	);
};
