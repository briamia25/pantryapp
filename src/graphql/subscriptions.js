/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePantryItem = /* GraphQL */ `
  subscription OnCreatePantryItem(
    $filter: ModelSubscriptionPantryItemFilterInput
  ) {
    onCreatePantryItem(filter: $filter) {
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
export const onUpdatePantryItem = /* GraphQL */ `
  subscription OnUpdatePantryItem(
    $filter: ModelSubscriptionPantryItemFilterInput
  ) {
    onUpdatePantryItem(filter: $filter) {
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
export const onDeletePantryItem = /* GraphQL */ `
  subscription OnDeletePantryItem(
    $filter: ModelSubscriptionPantryItemFilterInput
  ) {
    onDeletePantryItem(filter: $filter) {
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
export const onCreateRestockRequest = /* GraphQL */ `
  subscription OnCreateRestockRequest(
    $filter: ModelSubscriptionRestockRequestFilterInput
  ) {
    onCreateRestockRequest(filter: $filter) {
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
export const onUpdateRestockRequest = /* GraphQL */ `
  subscription OnUpdateRestockRequest(
    $filter: ModelSubscriptionRestockRequestFilterInput
  ) {
    onUpdateRestockRequest(filter: $filter) {
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
export const onDeleteRestockRequest = /* GraphQL */ `
  subscription OnDeleteRestockRequest(
    $filter: ModelSubscriptionRestockRequestFilterInput
  ) {
    onDeleteRestockRequest(filter: $filter) {
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
export const onCreateConsumptionLog = /* GraphQL */ `
  subscription OnCreateConsumptionLog(
    $filter: ModelSubscriptionConsumptionLogFilterInput
  ) {
    onCreateConsumptionLog(filter: $filter) {
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
export const onUpdateConsumptionLog = /* GraphQL */ `
  subscription OnUpdateConsumptionLog(
    $filter: ModelSubscriptionConsumptionLogFilterInput
  ) {
    onUpdateConsumptionLog(filter: $filter) {
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
export const onDeleteConsumptionLog = /* GraphQL */ `
  subscription OnDeleteConsumptionLog(
    $filter: ModelSubscriptionConsumptionLogFilterInput
  ) {
    onDeleteConsumptionLog(filter: $filter) {
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
