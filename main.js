//input:N/A
//output: change span with class mess-with-me font size to 40 px

const changeMess = () => {
    // identify change first mess
    let word = document.querySelector('.mess-with-me')
    word.style.fontSize ="40px"
    //identify and find second mess to change color
    let secondP = document.querySelector('.app p:nth-child(2)')
    // console.log(secondP)
    secondP.style.backgroundColor = 'green'
}
changeMess()

//input:N/A
//output:hide dino image and change dino image

