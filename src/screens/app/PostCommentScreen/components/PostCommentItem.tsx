import React from 'react';
import {Alert, Pressable} from 'react-native';

import {PostComment, postCommentService, usePostCommentRemove} from '@domain';
import {useToast} from '@services';

import {Box, ProfileAvatar, Text} from '@components';

interface Props {
  postComment: PostComment;
  userId: number;
  postAuthorId: number;
  onRemoveComment: () => void;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: Props) {
  const {showToast} = useToast();
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({message: 'Comentário removido com sucesso'});
    },
  });

  const isAllowToDelete = postCommentService.isAllowToDelete(
    userId,
    postComment,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja remover o comentário?', 'pressione para confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Pressable onLongPress={confirmRemove} disabled={!isAllowToDelete}>
      <Box mb="s16" flexDirection="row" alignItems="center" gap="s12">
        <ProfileAvatar imagemURL={postComment.author.profileURL} />
        <Box flex={1}>
          <Text preset="paragraphSmall" bold>
            {postComment.author.userName}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </Pressable>
  );
}
