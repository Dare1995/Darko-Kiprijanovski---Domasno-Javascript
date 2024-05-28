const redLight = document.getElementsByClassName("light")[0]
    const orangeLight = document.getElementsByClassName("light")[1]
    const greenLight = document.getElementsByClassName("light")[2]

    document.addEventListener("keydown", (event) => {
      if (event.key === "r") {
        redLight.style.background = "red";
        orangeLight.style.background = "#585858";
        greenLight.style.background = "#585858";
      } else if (event.key === "o") {
        redLight.style.background = "#585858";
        orangeLight.style.background = "orange";
        greenLight.style.background = "#585858";
      } else if (event.key === "g") {
        redLight.style.background = "#585858";
        orangeLight.style.background = "#585858";
        greenLight.style.background = "green";
      }
    })