import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

// get all posts
router.get("/", getPosts);

// get single post
router.get("/:id", getPost);

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

router.get("/", (req, res, next) => {
  res.send("Posts Page");
});

// create new post
router.post("/", createPost);

// update post
router.put("/:id", updatePost);

// delete post
router.delete("/:id", deletePost);

export default router;
