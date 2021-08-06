# MERN: Book Search Engine

## Variables

```
{
  "addUserInput": {
    "username": "bobsmith",
    "email": "bobsmith@email.com",
    "password": "password123"
  },
  "loginInput": {
    "email": "bobsmith@email.com",
    "password": "password123"
  },
  "saveBookInput": {
    "bookId": "456",
    "authors": ["Alice Green"],
    "title": "Your Book",
    "description": "bad bad bad",
    "image": "foo bar",
    "link": "biz baz"
  },
  "removeBookBookId": "123"
}
```

## Query

### me

```
query Query {
  me {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
```

## Mutation

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
      savedBooks {
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
      savedBooks {
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

### saveBook

```
mutation Mutation($saveBookInput: SaveBookInput!) {
  saveBook(input: $saveBookInput) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
```

### removeBook

```
mutation Mutation($removeBookBookId: ID!) {
  removeBook(bookId: $removeBookBookId) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
```
