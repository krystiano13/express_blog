import { Request, Response } from "express";

export async function getPosts(req: Request, res: Response) {}

export async function getPost(req: Request, res: Response) {}

export async function createPost(req: Request, res: Response) { return res.sendStatus(200) }

export async function updatePost(req: Request, res: Response) { }

export async function deletePost(req: Request, res: Response) {}
