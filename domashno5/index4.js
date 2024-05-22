function countdown(seconds) {
    let remainingSeconds = seconds

    const intervalId = setInterval(() => {
        if (remainingSeconds === 0) {
            console.log("Countdown complete!")
            clearInterval(intervalId)
        } else {
            console.log(remainingSeconds + " seconds remaining")
            remainingSeconds--
        }
    }, 1000)
}

countdown(5)