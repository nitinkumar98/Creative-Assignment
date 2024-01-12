const BlogModel = require('../models/blogs');

async function createNewBlog(req, res) {
    try {
        const newBlog = await BlogModel.create(req.body);
        res.send(newBlog);
    } catch (error) {
        console.log('Error while creating a new blog');
        throw error;
    }
};

async function getBlogById(req, res) {
    try {
        const { blogId } = req.params;
        if (!blogId) {
            throw new Error({
                message: 'Blog id not found',
            });
        }
        const blog = await BlogModel.findById(blogId);
        if (!blog) {
            throw new Error({
                message: 'Blog not found with given blogId',
            });
        }
        res.send(blog);
    } catch (error) {
        console.log('Error while finding blog by id');
        throw error;
    }
};

async function getAllBlogs(_req, res) {
    try {
        const blog = await BlogModel.find();
        if (!blog || blog.length === 0) {
            res.send([]);
        }
        res.send(blog);
    } catch (error) {
        console.log('Error while finding all blogs');
        throw error;
    }
};

async function updateBlogById(req, res) {
    try {
        const { blogId } = req.params;
        if (!blogId) {
            throw new Error({
                message: 'Blog id not found',
            });
        }
        const blog = await BlogModel.findByIdAndUpdate(blogId, req.body);
        if (!blog) {
            throw new Error({
                message: 'Blog not found with given blogId',
            });
        }
        res.send({
            message: 'Blog deleted successfully!',
        });
    } catch (error) {
        console.log('Error while updating blog by id');
        throw error;
    }
};

async function deleteBlogById(req, res) {
    try {
        const { blogId } = req.params;
        if (!blogId) {
            throw new Error({
                message: 'Blog id not found',
            });
        }
        const blog = await BlogModel.findByIdAndDelete(blogId);
        if (!blog) {
            throw new Error({
                message: 'Blog not found with given blogId',
            });
        }
        res.send({
            message: 'Blog deleted successfully!',
        });
    } catch (error) {
        console.log('Error while deleting blog by id', JSON.stringify(error));
        throw error;
    }
};

module.exports = {
    createNewBlog,
    getBlogById,
    getAllBlogs,
    updateBlogById,
    deleteBlogById,
};