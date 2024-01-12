const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');

const {
    createNewBlog,
    getBlogById,
    getAllBlogs,
    updateBlogById,
    deleteBlogById,
} = require('./services/blogs-service');


const PORT = 3000;
mongoose.connect("mongodb://localhost/restful_blog_app");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
    res.send({
        message: 'Server is running',
    });
})


app.post('/blogs', (req, res) => {
    return createNewBlog(req, res);
});


app.get('/blogs/:blogId', (req, res) => {
    return getBlogById(req, res);
});

app.get('/blogs', (req, res) => {
    return getAllBlogs(req, res);
});


app.put('/blogs/:blogId', (req, res) => {
    return updateBlogById(req, res);
});

app.delete('/blogs/:blogId', (req, res) => {
    return deleteBlogById(req, res);
});


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});


