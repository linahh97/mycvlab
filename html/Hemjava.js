function pic() {
    let hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

    console.log(hexColor[Math.floor(Math.random() * hexColor.length)])
    let colorParts = []

    for(let i = 0; i < 6; i++){
    colorParts.push(hexColor[Math.floor(Math.random() * hexColor.length)])
    }

    let finalColor = `#${colorParts.join("")}`
    document.body.style.background = finalColor;
}