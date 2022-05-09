import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export default function transformPosts({ posts }) {
  return posts.map(
    ({ id, url, text, post_at: postAt, like_count: likeCount, reply_count: replyCount }) => {
      return {
        id,
        url,
        text,
        postAt: dayjs(postAt).fromNow(),
        likeCount,
        replyCount,
      };
    }
  );
}
