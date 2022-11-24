//structure of data returned by useMutation hook
export interface CreateUsernameData {
  createUsername: {
    success: Boolean;
    error: string;
  };
}

export interface CreateUsernameVariables {
  username: string;
}

