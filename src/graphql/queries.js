/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPantryItem = /* GraphQL */ `
  query GetPantryItem($id: ID!) {
    getPantryItem(id: $id) {
      id
      name
      category
      quantity
      image
      restockRequests {
        nextToken
        __typename
      }
      consumptionLogs {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPantryItems = /* GraphQL */ `
  query ListPantryItems(
    $filter: ModelPantryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPantryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        quantity
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRestockRequest = /* GraphQL */ `
  query GetRestockRequest($id: ID!) {
    getRestockRequest(id: $id) {
      id
      itemID
      itemName
      reason
      date
      filled
      requestedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRestockRequests = /* GraphQL */ `
  query ListRestockRequests(
    $filter: ModelRestockRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestockRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemID
        itemName
        reason
        date
        filled
        requestedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const restockRequestsByItemID = /* GraphQL */ `
  query RestockRequestsByItemID(
    $itemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRestockRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    restockRequestsByItemID(
      itemID: $itemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemID
        itemName
        reason
        date
        filled
        requestedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getConsumptionLog = /* GraphQL */ `
  query GetConsumptionLog($id: ID!) {
    getConsumptionLog(id: $id) {
      id
      itemID
      item {
        id
        name
        category
        quantity
        image
        createdAt
        updatedAt
        __typename
      }
      consumedBy
      amount
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listConsumptionLogs = /* GraphQL */ `
  query ListConsumptionLogs(
    $id: ID
    $filter: ModelConsumptionLogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listConsumptionLogs(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        itemID
        consumedBy
        amount
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const consumptionLogsByItemID = /* GraphQL */ `
  query ConsumptionLogsByItemID(
    $itemID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConsumptionLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    consumptionLogsByItemID(
      itemID: $itemID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemID
        consumedBy
        amount
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
