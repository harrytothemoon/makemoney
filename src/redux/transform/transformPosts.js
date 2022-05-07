export default function transformPosts({ posts }) {
  return posts.map(
    ({ id, url, text, post_at: postAt, like_count: likeCount, reply_count: replyCount }) => {
      return {
        id,
        url,
        text,
        postAt,
        likeCount,
        replyCount,
      };
    }
  );
}
