import { userAgent } from "next/server";

const BASE_URL = "http://localhost:3000"

// All user
export const getUsers = async () => {
    const response = await fetch(`${BASE_URL}/api/users`)
    const json = await response.json()

    return json;
}

// Single User
export const getUser = async(userId) => {
    const response = await fetch(`${BASE_URL}api/users/${userId}`);
    const json = await response.json()

    if(json) return json;
    return {};
}