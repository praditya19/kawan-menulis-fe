const BASE_PATH = 'http://localhost:3000/api/'

const config = {
    api: {
        tutor: `${BASE_PATH}tutors/list`,
        learning: `${BASE_PATH}learningsources/list`,
        students: `${BASE_PATH}students`,
        question: `${BASE_PATH}questions`,
        paragraphtypes: `${BASE_PATH}paragraphtypes`,
        scores: `${BASE_PATH}scores`,
        studentactions: `${BASE_PATH}studentactions`
    }}
export default config