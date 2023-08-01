import fs from "fs"
import inquirer from "inquirer"
import { getRobotPageHTML } from "./helpers.js"

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the robot\'s name?",
    },
    {
        type: "number",
        name: "price",
        message: "What is the robot\'s price?",
    },
    {
        type: "list",
        name: "condition",
        message: "What is the robot\'s condition?",
        choices: ["new", "used"],
    },
    {
        type: "number",
        name: "weight",
        message: "What is the robot\'s weight?",
    },
    {
        type: "checkbox",
        name: "features",
        message: "Which features are included?",
        choices: ["can fly", "can talk", "can clean"],
    },
    {
        type: "number",
        name: "numCodeViolations",
        message: "Has this robot had any reported code violations?",
        default: 0,
    },
    // image
])
    .then(answers => {
        const html = getRobotPageHTML(answers)
        fs.writeFile(`./robots/${answers.name}.html`, html, err => {
            if (err) {
                throw err
            }
            console.log(`${answers.name}.html saved!`)
        })
    })
    .catch(error => console.log(error))
