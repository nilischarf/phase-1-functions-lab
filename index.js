function distanceFromHqInBlocks(pickup){
    const hq = 42
    return Math.abs(pickup - hq)
}


function distanceFromHqInFeet(pickup){
    const blocks = distanceFromHqInBlocks(pickup)
    return blocks * 264
}


function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(destination-start) * 264
    return distance
}


function calculatesFarePrice(start, destination){
    const distance = Math.abs(destination-start) * 264
    if (distance <= 400){
        return 0
    }
        else if (distance <= 2000){
            return 0.02 * (distance-400)
        }
        else if (distance < 2500){
            return 25
        }
        else if (distance >= 2500){
            return 'cannot travel that far'
        }
}