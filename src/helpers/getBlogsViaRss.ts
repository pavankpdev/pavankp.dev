import Parser from "rss-parser"

export const getBlogs = async () => {
    let parser = new Parser();

    return parser.parseURL('https://blogs.pavankp.dev/rss.xml');
}