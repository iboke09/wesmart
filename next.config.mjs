import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextVideo(nextConfig, { folder: 'y' });

// const withVideos = require("next-videos");

// module.exports = withVideos()