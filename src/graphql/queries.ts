/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
      id
      title
      description
      hyperlink
      rating
      image
      list_id
      createdAt
      updatedAt
    }
  }
`;
export const listListItems = /* GraphQL */ `
  query ListListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        hyperlink
        rating
        image
        list_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listItemsByList_id = /* GraphQL */ `
  query ListItemsByList_id(
    $list_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemsByList_id(
      list_id: $list_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        hyperlink
        rating
        image
        list_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollow = /* GraphQL */ `
  query GetFollow($id: ID!) {
    getFollow(id: $id) {
      id
      following_user_id
      followed_user_id
      status
      createdAt
      updatedAt
      followingUserId
    }
  }
`;
export const listFollows = /* GraphQL */ `
  query ListFollows(
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        following_user_id
        followed_user_id
        status
        createdAt
        updatedAt
        followingUserId
      }
      nextToken
    }
  }
`;
export const followsByFollowing_user_id = /* GraphQL */ `
  query FollowsByFollowing_user_id(
    $following_user_id: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followsByFollowing_user_id(
      following_user_id: $following_user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        following_user_id
        followed_user_id
        status
        createdAt
        updatedAt
        followingUserId
      }
      nextToken
    }
  }
`;
export const followsByFollowed_user_id = /* GraphQL */ `
  query FollowsByFollowed_user_id(
    $followed_user_id: Int!
    $sortDirection: ModelSortDirection
    $filter: ModelFollowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    followsByFollowed_user_id(
      followed_user_id: $followed_user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        following_user_id
        followed_user_id
        status
        createdAt
        updatedAt
        followingUserId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      user_email
      role
      privacy_status
      bio
      lists {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        user_email
        role
        privacy_status
        bio
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        user_email
        role
        privacy_status
        bio
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      title
      description
      image
      status
      user_id
      items {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $id: ID
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLists(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        description
        image
        status
        user_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listsByUser_id = /* GraphQL */ `
  query ListsByUser_id(
    $user_id: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listsByUser_id(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        image
        status
        user_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
