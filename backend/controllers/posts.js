function getPosts(req, res) {
    try {
        const posts = getAllPosts();
        res.send(posts);
    } catch {
        res.status(500);
        res.send(error.message);
    }
}

function getPost(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            const post = getPostById(id);
            res.send(post);
        } else {
            res.status("Could not find this post - invalid id");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function createPost(req, res) {
    try {
        const ownerId = req.body.ownerId;
        const message = req.body.text;
        const tagsId = req.body.tagsIds;
        const referencePost = req.body.referencePost;
        const awnserPost = req.body.awnserPost;
        if(ownerId && message && tagsId) {
            createNewpost(ownerId, message, tagsId, referencePost, awnserPost);
            res.status(201);
            res.send("Post created successfully!");
        } else {
            res.status(422);
            res.send("Missing fields.");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function patchPost(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            const body = req.body;
            updatePost(body);
            res.send("Post successfully updated");
        } else {
            res.status(422);
            res.send("Invalid post Id.")
        }
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}

function deletePostById(req, res) {
    // this function will actually only hides the post, but keep it in internal DB;
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            hidePost(id);
            res.send("Post successfully hidden")
        } else {
            res.status(422);
            res.send("Invalid Id");
        }
    } catch(error) {
        res.status(500);
        res.send(error.message);
    }
}