/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem($filter: ModelSubscriptionListItemFilterInput) {
    onCreateListItem(filter: $filter) {
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
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem($filter: ModelSubscriptionListItemFilterInput) {
    onUpdateListItem(filter: $filter) {
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
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem($filter: ModelSubscriptionListItemFilterInput) {
    onDeleteListItem(filter: $filter) {
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
export const onCreateFollow = /* GraphQL */ `
  subscription OnCreateFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $followingUserId: String
  ) {
    onCreateFollow(filter: $filter, followingUserId: $followingUserId) {
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
export const onUpdateFollow = /* GraphQL */ `
  subscription OnUpdateFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $followingUserId: String
  ) {
    onUpdateFollow(filter: $filter, followingUserId: $followingUserId) {
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
export const onDeleteFollow = /* GraphQL */ `
  subscription OnDeleteFollow(
    $filter: ModelSubscriptionFollowFilterInput
    $followingUserId: String
  ) {
    onDeleteFollow(filter: $filter, followingUserId: $followingUserId) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList(
    $filter: ModelSubscriptionListFilterInput
    $user_id: String
  ) {
    onCreateList(filter: $filter, user_id: $user_id) {
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
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList(
    $filter: ModelSubscriptionListFilterInput
    $user_id: String
  ) {
    onUpdateList(filter: $filter, user_id: $user_id) {
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
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList(
    $filter: ModelSubscriptionListFilterInput
    $user_id: String
  ) {
    onDeleteList(filter: $filter, user_id: $user_id) {
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
