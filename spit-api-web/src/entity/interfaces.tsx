interface Account {
    account_id: number;
    name: string;
    handle: string;
    posts: Post[];
  }

  interface Post {
    id: number;
    date: Date;
    message: string;
    account: Account;
  }

  interface Comment {
    id: number;
    date: Date;
    message: string;
  }

  export default Account;