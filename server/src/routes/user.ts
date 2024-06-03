import { Router } from "express";

export const user_router = Router();

user_router.post('/api/auth/register');

user_router.post('/api/auth/login');

user_router.post('/api/auth/logout');

user_router.get('/api/auth/status');