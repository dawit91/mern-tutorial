import axios from "axios";

const API_URL = '/api/goals'
const createGoal = async(goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }    
    }

    const response = await axios.post(API_URL,goalData,config)

    return response.data
}

// Get goals
const getGoals = async(token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }    
    }

    const response = await axios.post(API_URL,config)

    return response.data
}

const goalService = {
    createGoal,
    getGoals,
}

export default goalService