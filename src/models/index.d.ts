import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, OptionallyManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerPantryItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PantryItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category?: string | null;
  readonly quantity?: number | null;
  readonly restockRequests?: (RestockRequest | null)[] | null;
  readonly consumptionLogs?: (ConsumptionLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPantryItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PantryItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly category?: string | null;
  readonly quantity?: number | null;
  readonly restockRequests: AsyncCollection<RestockRequest>;
  readonly consumptionLogs: AsyncCollection<ConsumptionLog>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PantryItem = LazyLoading extends LazyLoadingDisabled ? EagerPantryItem : LazyPantryItem

export declare const PantryItem: (new (init: ModelInit<PantryItem>) => PantryItem) & {
  copyOf(source: PantryItem, mutator: (draft: MutableModel<PantryItem>) => MutableModel<PantryItem> | void): PantryItem;
}

type EagerRestockRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RestockRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly itemName: string;
  readonly reason?: string | null;
  readonly date: string;
  readonly filled?: boolean | null;
  readonly requestedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRestockRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RestockRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly itemName: string;
  readonly reason?: string | null;
  readonly date: string;
  readonly filled?: boolean | null;
  readonly requestedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RestockRequest = LazyLoading extends LazyLoadingDisabled ? EagerRestockRequest : LazyRestockRequest

export declare const RestockRequest: (new (init: ModelInit<RestockRequest>) => RestockRequest) & {
  copyOf(source: RestockRequest, mutator: (draft: MutableModel<RestockRequest>) => MutableModel<RestockRequest> | void): RestockRequest;
}

type EagerConsumptionLog = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ConsumptionLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly item?: PantryItem | null;
  readonly consumedBy?: string | null;
  readonly amount?: number | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsumptionLog = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ConsumptionLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemID: string;
  readonly item: AsyncItem<PantryItem | undefined>;
  readonly consumedBy?: string | null;
  readonly amount?: number | null;
  readonly date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConsumptionLog = LazyLoading extends LazyLoadingDisabled ? EagerConsumptionLog : LazyConsumptionLog

export declare const ConsumptionLog: (new (init: ModelInit<ConsumptionLog>) => ConsumptionLog) & {
  copyOf(source: ConsumptionLog, mutator: (draft: MutableModel<ConsumptionLog>) => MutableModel<ConsumptionLog> | void): ConsumptionLog;
}