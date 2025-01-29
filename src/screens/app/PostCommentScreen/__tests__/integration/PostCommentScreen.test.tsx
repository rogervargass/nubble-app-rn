import React from 'react';

import { server } from '@test';
import { fireEvent, renderScreen, screen } from 'test-utils';

import { PostCommentScreen } from '../../PostCommentScreen';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('integration: PostCommentScreen', () => {
  test('when ADDING a comment the list is automatically updated', async () => {
    renderScreen(<PostCommentScreen navigation={{} as any} route={{
      name: 'PostCommentScreen',
      key: 'PostCommentScreen',
      params: {
        postId: 1,
        postAuthorId: 1,
      },
    }} />);

    const comment = await screen.findByText(/meu comentário/i);

    expect(comment).toBeTruthy();

    // achar o campo de input
    const inputText = screen.getByPlaceholderText(/Adicione um comentário/i);

    // preencher o campo de input
    fireEvent.changeText(inputText, 'novo comentário');

    // clicar no botão de enviar
    fireEvent.press(screen.getByText(/Enviar/i));

    //esperar o novo comentário aparecer
    const newComment = await screen.findByText(/novo comentário/i);

    expect(newComment).toBeTruthy();

    const comments = screen.getAllByTestId('post-comment-id');

    expect(comments.length).toBe(2);
  });
});
