"use client";

import { useRef } from "react";
import { Camera } from "react-camera-pro";

const cameraErrors = {
	noCameraAccessible:
		"No camera device accessible. Please connect your camera or try a different browser.",
	permissionDenied:
		"Permission denied. Please refresh and give camera permission.",
	switchCamera:
		"It is not possible to switch camera to different one because there is only one video device accessible.",
	canvas: "Canvas is not supported.",
};

export const CameraContent = () => {
	const camera = useRef(null);

	return (
		<div>
			<Camera ref={camera} errorMessages={cameraErrors} />
		</div>
	);
};
