export enum QueryKeys {
  PostList = 'PostList',
  PostCommentList = 'PostCommentList',
  UserGetById = 'UserGetById',
  UserList = 'UserList',
  IsUsernameAvailable = 'IsUsernameAvailable',
  IsEmailAvailable = 'IsEmailAvailable',
}

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}
