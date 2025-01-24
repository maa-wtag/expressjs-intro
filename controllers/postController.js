let posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is post one",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is post two",
  },
];

// @desc Get all posts
// @route GET /api/posts

export const getPosts = (req, res, next) => {
  const limit = parseInt(req.query.limit);
  console.log("limit", limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);

  console.log("req.query", req.query);
};

// @desc Get a single post
// @route GET /api/posts/:id

export const getPost = (req, res, next) => {
  console.log("req.params", req.params);

  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);

  console.log("id", id);
};

// @desc Create a single post
// @route POST /api/posts/

export const createPost = (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    const error = new Error(`Please include a title`);
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(posts);
};

// @desc Update a single post
// @route PUT /api/posts/1

export const updatePost = (req, res, next) => {
  console.log("req.params", req.params);
  const id = parseInt(req.params.id);
  console.log("id", id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
};

// @desc Delete a single post
// @route DELETE /api/posts/1

export const deletePost = (req, res, next) => {
  console.log("req.params", req.params);
  const id = parseInt(req.params.id);
  console.log("id", id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`Post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
};
