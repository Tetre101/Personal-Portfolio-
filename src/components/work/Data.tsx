import Work2 from '../../assets/work2.jpg'
import Work3 from '../../assets/work3.jpg'
import Work4 from '../../assets/work4.jpg'
import Work5 from '../../assets/work5.jpg'
import Work6 from '../../assets/work6.jpg'
import Work7 from '../../assets/work7.jpg'
import Work1 from '../../assets/work1.jpg'
export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Expense-tracker",
        category: "Front-End",
        description: (
            <p>
                <i className='bx bxl-css3'></i>
                <i className='bx bxl-React'></i>
            </p>
        ),
        link: "https://expense-tracker-2-react.netlify.app/",
    },
    {
        id: 2,
        image: Work2,
        title: "Roll-A-Dice-Game",
        category: "Front-End",
        description: (
            <div>
                <i className='bx bxl-html5'></i>
                <i className='bx bxl-css3'></i>
                <i className='bx bxl-javascript'></i>
            </div>
        ),
        link: "https://tetre101.github.io/Roll-A-Dice-Game/",
    },
    {
        id: 3,
        image: Work3,
        title: "Todo List App",
        category: "Front-End",
        description: (
            <div>
                <i className='bx bxl-html5'></i>
                <i className='bx bxl-css3'></i>
                <i className='bx bxl-javascript'></i>
            </div>
        ),
        link: "https://todo-app-js-1.netlify.app/",
    },
    {
        id: 4,
        image: Work4,
        title: "Remondis Decluttering App",
        category: "Full-stack",
        description: (
            <div>
                <i className='bx bxl-GraphQl'></i>
                <i className='uil uil-react'></i>
                <i className='bx bxl-nodejs'></i>
                <i className='bx bxl-typescript'></i>
            </div>
        ),
        link: "#portfolio",
    },
    {
        id: 5,
        image: Work5,
        title: "Guess A Number",
        category: "Frontend",
        description: (
            <div>
                <i className='bx bxl-html5'></i>
                <i className='bx bxl-css3'></i>
                <i className='bx bxl-javascript'></i>
            </div>
        ),
        link: "https://tetre101.github.io/Guess-A-number-Js-Game/",
    },
    {
        id: 6,
        image: Work6,
        title: "Portfolio V0.2",
        category: "Front-End",
        description: (
            <div>
                <i className='bx bxl-html5'></i>
                <i className='bx bxl-css3'></i>
                <i className='bx bxl-Angular'></i>
            </div>
        ),
        link: "https://peterworld.netlify.app/",
    },

    {
        id: 7,
        image: Work7,
        title: "Employee Database",
        category: "Full-stack",
        description: (
            <div>
                <i className='bx bxl-mysQl'></i>
                <i className='uil uil-react'></i>
                <i className='bx bxl-nodejs'></i>
                <i className='bx bxl-javascript'></i>
            </div>
        ),
        link: "#portfolio",
    },

];

export const projectsNav = [
    {
        name: "all",
    },
    {
        name: "Front-End",
    },
    {
        name: "Full-stack",
    }
];