const BASE_PATH = 'http://localhost:3000/api/'

const config = {
    api: {
        tutor: `${BASE_PATH}tutors/list`,
        learning: `${BASE_PATH}learningsources/list`,
        students: `${BASE_PATH}students`,
        question: `${BASE_PATH}questions`,
        topics: `${BASE_PATH}topics`,
        scores: `${BASE_PATH}scores`,
    }}
export default config