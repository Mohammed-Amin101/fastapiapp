import axios from "axios";
import type { Job } from "../types/job";

const API_BASE_URL = "http://localhost:5500";

export async function getJobs(): Promise<Job[]> {
    const response = await axios.get(`${API_BASE_URL}/jobs`);
    return response.data;
}