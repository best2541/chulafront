let timeArray = []

for (let i = 0; i <= 24; i++) {
    if (i == 0)
        timeArray.push('0:30')
    else if (i == 24)
        timeArray.push('24.00')
    else {
        timeArray.push(`${i}.00`)
        timeArray.push(`${i}.30`)
    }
}

export default timeArray