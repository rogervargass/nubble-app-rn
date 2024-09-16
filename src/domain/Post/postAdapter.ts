import {Post, PostAPI} from './postType';

function toPost(postApi: PostAPI): Post {
  return {
    id: postApi.id,
    text: postApi.text,
    author: {
      profileURL: postApi.user.profile_url,
      name: postApi.user.full_name,
      userName: postApi.user.username,
    },
    imageURL: postApi.image_url,
    reactionCount: parseInt(postApi.meta.like_count, 10),
    commentCount: parseInt(postApi.meta.comments_count, 10),
    favoriteCount: parseInt(postApi.meta.favorite_count, 10),
  };
}

export const postAdapter = {
  toPost,
};
