/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deletePantryItem = /* GraphQL */ `
  mutation DeletePantryItem(
    $input: DeletePantryItemInput!
    $condition: ModelPantryItemConditionInput
  ) {
    deletePantryItem(input: $input, condition: $condition) {
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
export const deleteRestockRequest = /* GraphQL */ `
  mutation DeleteRestockRequest(
    $input: DeleteRestockRequestInput!
    $condition: ModelRestockRequestConditionInput
  ) {
    deleteRestockRequest(input: $input, condition: $condition) {
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
export const deleteConsumptionLog = /* GraphQL */ `
  mutation DeleteConsumptionLog(
    $input: DeleteConsumptionLogInput!
    $condition: ModelConsumptionLogConditionInput
  ) {
    deleteConsumptionLog(input: $input, condition: $condition) {
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
export const createPantryItem = /* GraphQL */ `
  mutation CreatePantryItem(
    $input: CreatePantryItemInput!
    $condition: ModelPantryItemConditionInput
  ) {
    createPantryItem(input: $input, condition: $condition) {
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
export const updatePantryItem = /* GraphQL */ `
  mutation UpdatePantryItem(
    $input: UpdatePantryItemInput!
    $condition: ModelPantryItemConditionInput
  ) {
    updatePantryItem(input: $input, condition: $condition) {
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
export const createRestockRequest = /* GraphQL */ `
  mutation CreateRestockRequest(
    $input: CreateRestockRequestInput!
    $condition: ModelRestockRequestConditionInput
  ) {
    createRestockRequest(input: $input, condition: $condition) {
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
export const updateRestockRequest = /* GraphQL */ `
  mutation UpdateRestockRequest(
    $input: UpdateRestockRequestInput!
    $condition: ModelRestockRequestConditionInput
  ) {
    updateRestockRequest(input: $input, condition: $condition) {
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
export const createConsumptionLog = /* GraphQL */ `
  mutation CreateConsumptionLog(
    $input: CreateConsumptionLogInput!
    $condition: ModelConsumptionLogConditionInput
  ) {
    createConsumptionLog(input: $input, condition: $condition) {
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
export const updateConsumptionLog = /* GraphQL */ `
  mutation UpdateConsumptionLog(
    $input: UpdateConsumptionLogInput!
    $condition: ModelConsumptionLogConditionInput
  ) {
    updateConsumptionLog(input: $input, condition: $condition) {
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
