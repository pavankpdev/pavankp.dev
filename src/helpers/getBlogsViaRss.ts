import {parse} from "rss-to-json"

export const getBlogs = async () => {
    return parse('https://blogs.pavankp.dev/rss.xml');
}