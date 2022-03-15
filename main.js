//warmup excersices
//input:N/A
//output: change span with class mess-with-me font size to 40 px

// identify change first mess
let word = document.querySelector('.mess-with-me')
word.style.fontSize ="40px"
//identify and find second mess to change color
let secondP = document.querySelector('.app p:nth-child(2)')
// console.log(secondP)
secondP.style.backgroundColor = 'green'


//input:N/A
//output:hide dino image and change dino image

//identify hide image
let toHide = document.querySelector('section');
// console.log(toHide)
toHide.style.visibility = 'hidden'
//identify && edit size on dino image
let imgEdit = document.querySelector('img')
// console.log(imgEdit)
imgEdit.style.width ='324px'



//event listeners-----------------------------

//input:mess-with-me span
//output:when clicked color changes to orange
const messText = () => {
    word.addEventListener('click', () =>{
        word.style.color = 'orange'
    });
}
messText()

//input:first dinosoar
//output:when clicked, add red border
const addBorder = ()=> {
    imgEdit.addEventListener('click',()=> {
        // console.log(e)
        imgEdit.style.color="blue"
        // alert('hello world')
    });
}
addBorder()


//input:image bird(dino)
//output:make 50% less transparent when clicked

const transparent = () => {
    let bird = document.querySelector('#row #feathers');
    // console.log(bird)
    bird.addEventListener("click",() => {
        bird.style.opacity ="0.5"
    })
}
transparent()

//input: background color button
//output: change backbround color of row of pictures

const toggleColor = () => {
    let button = document.querySelector('#toggle');
    let images = document.querySelector('#row');

    // console.log(images)
    button.addEventListener("click", ()=> {
        let backgroundColor = images.style.backgroundColor;
        if(backgroundColor === 'white') {
            images.style.backgroundColor='red'
        } else {
            images.style.backgroundColor='white'
        }
    })
}
toggleColor()

//input:dino biggify
//output: if hovered grow image 200 px wide