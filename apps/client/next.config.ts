import type { NextConfig } from 'next';
import './load-env';

const nextConfig: NextConfig = {
	basePath: '',
	env: {
		API_URL: process.env.API_URL,
		APP_URL: process.env.APP_URL,
		SITE_NAME: process.env.SITE_NAME,
		APP_PORT: process.env.APP_PORT,
	},
};

export default nextConfig;
