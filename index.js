
function distanceFromHqInBlocks(block) {
	return block>42?(block-42):(42-block)
}


function distanceFromHqInFeet(block) {
	return (distanceFromHqInBlocks(block))*264;
}

function distanceTravelledInFeet(start,arrive) {
return (start<arrive)?(arrive-start)*264:(start-arrive)*264
}

function calculatesFarePrice(start,arrive) {
	const distance = distanceTravelledInFeet(start,arrive)
	if (distance < 400) {
		return 0;
	}
	else if (distance >= 400 && distance <= 2000) {
		return (distance - 400) * .02;
	}
	else if (distance > 2000 && distance < 2500) {
		return 25;
	}
	else if (distance>2500){ 
		return 'cannot travel that far';
	}
}

