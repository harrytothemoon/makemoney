export default function transformKolList({ social_medias }) {
  return social_medias.map(
    ({
      id,
      url,
      follow_count: followCount,
      title,
      description,
      image_url: avatar,
      expose_posts,
    }) => {
      const postsCount = expose_posts?.length;
      return {
        id,
        url,
        followCount,
        title,
        description,
        avatar,
        postsCount,
      };
    }
  );
}
