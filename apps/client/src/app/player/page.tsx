'use client';

import dynamic from 'next/dynamic';

const VideoPlayer = dynamic(() => import('../../components/hls'), {
	ssr: false, // Отключаем SSR, так как window недоступен на сервере
});

const StreamPage = () => {
	return (
		<div>
			<h1>Live Stream</h1>
			<VideoPlayer src='https://devsynergy.ru/hls/live/test/index.m3u8' />
		</div>
	);
};

export default StreamPage;
