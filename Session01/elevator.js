

// closestElevator(1,3,5) => right
function closesetElevator(left, right, call) {
    const leftDistance = Math.abs(call - left);
    const rightDistance = Math.abs(call - right);

    if(leftDistance > rightDistance)
        return "Right"
    else 
        return "Left"
}