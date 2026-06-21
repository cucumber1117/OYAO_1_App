const POINTER_ANGLE = 0;

export function pickRandomIndex(items) {
	if (!Array.isArray(items) || items.length === 0) return -1;
	return Math.floor(Math.random() * items.length);
}

export function spinResult(items) {
	const index = pickRandomIndex(items);
	return {
		index,
		item: index >= 0 ? items[index] : null,
	};
}

export function getSegmentAngle(items) {
	if (!Array.isArray(items) || items.length === 0) return 0;
	return 360 / items.length;
}

export function getResultRotation(index, items, currentRotation = 0, extraSpins = 5) {
	const segmentAngle = getSegmentAngle(items);
	if (index < 0 || segmentAngle === 0) return currentRotation;

	const selectedSegmentCenter = index * segmentAngle + segmentAngle / 2;
	const targetAngle = POINTER_ANGLE - selectedSegmentCenter;
	const normalizedTarget = ((targetAngle % 360) + 360) % 360;
	const currentTurns = Math.floor(currentRotation / 360);

	return (currentTurns + extraSpins) * 360 + normalizedTarget;
}

export function buildWheelGradient(items) {
	if (!Array.isArray(items) || items.length === 0) {
		return 'linear-gradient(135deg, #f3f4f6, #e5e7eb)';
	}

	const colors = ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
	const segmentAngle = getSegmentAngle(items);
	const stops = items.map((_, index) => {
		const start = index * segmentAngle;
		const end = (index + 1) * segmentAngle;
		return `${colors[index % colors.length]} ${start}deg ${end}deg`;
	});

	return `conic-gradient(from -90deg, ${stops.join(', ')})`;
}

export default {
	pickRandomIndex,
	spinResult,
	getSegmentAngle,
	getResultRotation,
	buildWheelGradient,
};
