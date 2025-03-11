import { Router } from 'express';
import { getPosts, getPost, createPost, patchPost, deletePostById } from "../controllers/posts"

const router = Router();

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/", createPost);

router.patch("/:id", patchPost);

router.delete("/:id", deletePostById);

module.exports = router;