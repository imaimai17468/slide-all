"use client";

import type { Bio } from "@/repository/bio/types";
import { Card } from "@mantine/core";
import { useState } from "react";
import { BioCardContent } from "./_components/BioCardContent";
import { BioCardForm } from "./_components/BioCardForm";

export const BioCard: React.FC = () => {
	const [bio, setBio] = useState<Bio | undefined>(undefined);
	const [isEditing, setIsEditing] = useState(false);

	return (
		<Card shadow="md" radius="sm" flex={1}>
			{isEditing ? (
				<BioCardForm
					onSubmit={(values) => setBio(values)}
					onSetEditing={setIsEditing}
					initialValues={bio}
				/>
			) : (
				<BioCardContent content={bio} onSetEditing={setIsEditing} />
			)}
		</Card>
	);
};
