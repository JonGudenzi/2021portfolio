
import Burger from '../../assets/img/burgerApp.PNG';
import Employee from '../../assets/img/Employee-Summary.PNG';
import MusicJunkies from '../../assets/img/musicJunkies.PNG';
import PasswordGenerator from '../../assets/img/passwordGenerator.PNG';
import WeatherDashboard from '../../assets/img/weatherDashboard.PNG';
import workDay from '../../assets/img/workDay.PNG';
import codeQuiz from '../../assets/img/codeQuiz.PNG';
import employeeDirectory from '../../assets/img/employeeDirectory.PNG';

const WorkData = [
    {
        title: "Password Generator",
        language: "JavaScript",
        image: PasswordGenerator,
        github: "https://github.com/JonGudenzi/password-generator",
        app: "https://jongudenzi.github.io/password-generator/",
        desc: "The password generator webpage is where a user can go to have a random password generated by entering certain criteria."
    },
    {
        title: "Employee-Summary",
        language: "NodeJS",
        image: Employee,
        github: "https://github.com/JonGudenzi/Employee-Summary",
        app: "https://github.com/JonGudenzi/Employee-Summary",
        desc: "The Employee-Summary application allows a user to build a webpage that provides basic information of a team of employees and their positions. The basic information will include the employee's name, email, position and other information based on the position they hold. Technologies: HTML, CSS, NodeJS, JavaScript",
        
    },
    {
        title: "Weather Dashboard",
        language: "APIs / JavaScript",
        image: WeatherDashboard,
        github: "https://github.com/JonGudenzi/weather_dashboard",
        app: "https://jongudenzi.github.io/weather_dashboard/",
        desc: "The weather dashboard provides current weather and 5 day forecast of any city that a user searches.. Previously searched cities will be saved in local storage. A user can click on the previous searches to get the updated current weather. Technologies: HTML, CSS, Bootstrap, JavaScript, Jquery, APIs"

    },
    {
        title: "Work Day Schedule",
        language: "MomentJS / Jquery",
        image: workDay,
        github: "https://github.com/JonGudenzi/Work_Day_Scheduler",
        app: "https://jongudenzi.github.io/Work_Day_Scheduler/",
        desc: "The work day scheduler allows a user to keep track of what they have to do in a day, hour by hour. The user can enter a note and click save where the message will be saved in the local storage for reference later. Technologies: HTML, CSS, Bootstrap, JavaScript, Jquery, MomentJS"

    },
    {
        title: "Burger Logger",
        language: "MySQL database",
        image: Burger,
        github: "https://github.com/JonGudenzi/Burger-Logger",
        app: "https://burger-logger-gudenzi.herokuapp.com/",
        desc: "The Burger Logger allows a user to create new burgers then devour them. This application uses MySQL to hold and create the data. Technologies: HTML, CSS, Bootstrap, JavaScript, Jquery, MySQL, Handlebars"

    },
    {
        title: "Music Junkies",
        language: "APIs / Jquery",
        image: MusicJunkies,
        github: "https://github.com/JonGudenzi/MusicJunkies",
        app: "https://nsc9605.github.io/MusicJunkies/#modalIntro",
        desc: "This application targets all the music lovers out there, a place where fans can explore what songs were at the top of the Billboard Charts at any given date in history. Provided with a calendar starting with the current date, users will be able to navigate into a specific month, day, and year to find out what song was #1 on that date in history on the Billboard Top 100 Charts as well as the other top 5 songs of that date. If available, the user will also be provided with album cover, link to music video, a link to page with biography and more information on that artist. The dates that the user chooses will be saved at the bottom of the page for future reference."

    },
    {
        title: "Employee Directory",
        language: "React",
        image: employeeDirectory,
        github: "https://github.com/JonGudenzi/Employee-Directory",
        app: "https://jongudenzi.github.io/Employee-Directory/",
        desc: "This application will show a list of employees with information for each one including an image, name, phone number, email and age. The user will be able to search for an employee by typing in a piece of the persons name which will filter out others. The user will also be able to sort by their name."
    },
    {
        title: "React - Work Day Scheduler",
        language: "React",
        image: workDay,
        github: "https://github.com/JonGudenzi/Work-Day-Scheduler-React",
        app: "https://jongudenzi.github.io/Work-Day-Scheduler-React/",
        desc: "This is a work day scheduler that has been refactored using React. The app allows a user to set tasks for each hour of the day. These tasks will be saved in local storage so if the user leaves the page and returns later the tasks that were saved will still display."
    },
    {
        title: "Workout Tracker",
        language: "MongoDB, NoSql, Mongoose, Express-js",
        image: Employee,
        github: "https://github.com/JonGudenzi/Workout-Tracker",
        app: "https://workout-tracker-gudenzi.herokuapp.com/?id=603d6e7d60a1570015f33680",
        desc: "The Workout-Tracker allows a user to view and create daily workouts. This app can log multiple exercises in a workout on any given day. It will also track the type of workout including weight, sets, reps, and duration. If a user does a cardio exercise they will also be able to track the distance traveled."
    },
    {
        title: "Note Taker",
        language: "Node-js, heroku, database, express",
        image: Employee,
        github: "https://github.com/JonGudenzi/Note-Taker",
        app: "https://note-taker-jongudenzi.herokuapp.com/",
        desc: "This application allows a user to create notes. They can save them and refer back to them at any time. They can also delete any not at any time."
    },
    {
        title: "Code Quiz",
        language: "JavaScript",
        image: codeQuiz,
        github: "https://github.com/JonGudenzi/coding-quiz",
        app: "https://jongudenzi.github.io/coding-quiz/",
        desc: "This is a timed quiz. If you miss a question time will be deducted. When all questions are answered you can sign your name to the top scores list."
    },

]

export default WorkData;