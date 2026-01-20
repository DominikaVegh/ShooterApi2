import axios from "axios";
import type { Shooter } from "../models/Shooter";


const api = axios.create({
  baseURL: "http://localhost:5261/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// GET all shooters
export const getShooters = async (): Promise<Shooter[]> => {
  const response = await api.get<Shooter[]>("/shooters");
  return response.data;
};

// CREATE shooter
export const createShooter = async (
  shooter: Omit<Shooter, "id">
): Promise<Shooter> => {
  const response = await api.post<Shooter>("/shooters", shooter);
  return response.data;
};

// DELETE shooter
export const deleteShooter = async (id: number): Promise<void> => {
  await api.delete(`/shooters/${id}`);
};

// UPDATE shooter
export const updateShooter = async (shooter: Shooter): Promise<void> => {
  await api.put(`/shooters/${shooter.id}`, shooter);
};

