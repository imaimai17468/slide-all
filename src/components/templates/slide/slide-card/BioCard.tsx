"use client";

import { bioAtom } from "@/atom/bioAtom";
import type { Bio } from "@/repository/bio/types";
import { Card } from "@mantine/core";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { BioCardContent } from "./_components/BioCardContent";
import { BioCardForm } from "./_components/BioCardForm";

export const BioCard: React.FC = () => {
	const [bio, setBio] = useState<Bio | undefined>(undefined);
	const [isEditing, setIsEditing] = useState(false);
	const [atomBio, setAtomBio] = useAtom(bioAtom);

	useEffect(() => {
		if (atomBio) {
			setBio(atomBio);
		}
	}, [atomBio]);

	return (
		<Card shadow="md" radius="sm" flex={1}>
			{isEditing ? (
				<BioCardForm
					onSubmit={(values) => {
						setBio(values);
						setAtomBio(values);
					}}
					onSetEditing={setIsEditing}
					initialValues={atomBio ?? bio}
				/>
			) : (
				<BioCardContent content={bio} onSetEditing={setIsEditing} />
			)}
		</Card>
	);
};
