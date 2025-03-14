export const GOOGLE_API_KEY = "AIzaSyC_XZi5JmzoO7IWlY460_2NmErVxvflI0k";
export const YT_POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${GOOGLE_API_KEY}`;
export const YT_AUTO_COMPLETE_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=`
