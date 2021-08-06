# 21 MERN: Book Search Engine

## Mutations

### addUser

```
mutation Mutation($addUserInput: AddUserInput!) {
  addUser(input: $addUserInput) {
    token
    user {
      _id
      username
      email
      bookCount
      saveBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
}
```

### login

```
mutation Mutation($loginInput: LoginInput!) {
  login(input: $loginInput) {
    token
    user {
      _id
      username
      email
      bookCount
      saveBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
}
```
