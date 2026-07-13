
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model camera_cfg
 * 
 */
export type camera_cfg = $Result.DefaultSelection<Prisma.$camera_cfgPayload>
/**
 * Model camera_storage_total
 * 
 */
export type camera_storage_total = $Result.DefaultSelection<Prisma.$camera_storage_totalPayload>
/**
 * Model channel_cfg
 * 
 */
export type channel_cfg = $Result.DefaultSelection<Prisma.$channel_cfgPayload>
/**
 * Model device_owner_cfg
 * 
 */
export type device_owner_cfg = $Result.DefaultSelection<Prisma.$device_owner_cfgPayload>
/**
 * Model event_vms_sync_parent
 * This table is a partition table and requires additional setup for migrations. Visit https://pris.ly/d/partition-tables for more info.
 * This model contains an index with non-default null sort order and requires additional setup for migrations. Visit https://pris.ly/d/default-index-null-ordering for more info.
 */
export type event_vms_sync_parent = $Result.DefaultSelection<Prisma.$event_vms_sync_parentPayload>
/**
 * Model event_vms_sync_update_parent
 * This table is a partition table and requires additional setup for migrations. Visit https://pris.ly/d/partition-tables for more info.
 */
export type event_vms_sync_update_parent = $Result.DefaultSelection<Prisma.$event_vms_sync_update_parentPayload>
/**
 * Model face_index_sync_parent
 * This table is a partition table and requires additional setup for migrations. Visit https://pris.ly/d/partition-tables for more info.
 * This model contains an index with non-default null sort order and requires additional setup for migrations. Visit https://pris.ly/d/default-index-null-ordering for more info.
 */
export type face_index_sync_parent = $Result.DefaultSelection<Prisma.$face_index_sync_parentPayload>
/**
 * Model human_info
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type human_info = $Result.DefaultSelection<Prisma.$human_infoPayload>
/**
 * Model human_list
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type human_list = $Result.DefaultSelection<Prisma.$human_listPayload>
/**
 * Model monitoring_slot_summary_sync_parent
 * This table is a partition table and requires additional setup for migrations. Visit https://pris.ly/d/partition-tables for more info.
 * This model contains an index with non-default null sort order and requires additional setup for migrations. Visit https://pris.ly/d/default-index-null-ordering for more info.
 */
export type monitoring_slot_summary_sync_parent = $Result.DefaultSelection<Prisma.$monitoring_slot_summary_sync_parentPayload>
/**
 * Model nvr_cfg
 * 
 */
export type nvr_cfg = $Result.DefaultSelection<Prisma.$nvr_cfgPayload>
/**
 * Model nvr_channel_cfg
 * 
 */
export type nvr_channel_cfg = $Result.DefaultSelection<Prisma.$nvr_channel_cfgPayload>
/**
 * Model vehicle_info
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type vehicle_info = $Result.DefaultSelection<Prisma.$vehicle_infoPayload>
/**
 * Model vehicle_list
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type vehicle_list = $Result.DefaultSelection<Prisma.$vehicle_listPayload>
/**
 * Model version_control
 * 
 */
export type version_control = $Result.DefaultSelection<Prisma.$version_controlPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Camera_cfgs
 * const camera_cfgs = await prisma.camera_cfg.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Camera_cfgs
   * const camera_cfgs = await prisma.camera_cfg.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.camera_cfg`: Exposes CRUD operations for the **camera_cfg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Camera_cfgs
    * const camera_cfgs = await prisma.camera_cfg.findMany()
    * ```
    */
  get camera_cfg(): Prisma.camera_cfgDelegate<ExtArgs>;

  /**
   * `prisma.camera_storage_total`: Exposes CRUD operations for the **camera_storage_total** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Camera_storage_totals
    * const camera_storage_totals = await prisma.camera_storage_total.findMany()
    * ```
    */
  get camera_storage_total(): Prisma.camera_storage_totalDelegate<ExtArgs>;

  /**
   * `prisma.channel_cfg`: Exposes CRUD operations for the **channel_cfg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channel_cfgs
    * const channel_cfgs = await prisma.channel_cfg.findMany()
    * ```
    */
  get channel_cfg(): Prisma.channel_cfgDelegate<ExtArgs>;

  /**
   * `prisma.device_owner_cfg`: Exposes CRUD operations for the **device_owner_cfg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Device_owner_cfgs
    * const device_owner_cfgs = await prisma.device_owner_cfg.findMany()
    * ```
    */
  get device_owner_cfg(): Prisma.device_owner_cfgDelegate<ExtArgs>;

  /**
   * `prisma.event_vms_sync_parent`: Exposes CRUD operations for the **event_vms_sync_parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_vms_sync_parents
    * const event_vms_sync_parents = await prisma.event_vms_sync_parent.findMany()
    * ```
    */
  get event_vms_sync_parent(): Prisma.event_vms_sync_parentDelegate<ExtArgs>;

  /**
   * `prisma.event_vms_sync_update_parent`: Exposes CRUD operations for the **event_vms_sync_update_parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_vms_sync_update_parents
    * const event_vms_sync_update_parents = await prisma.event_vms_sync_update_parent.findMany()
    * ```
    */
  get event_vms_sync_update_parent(): Prisma.event_vms_sync_update_parentDelegate<ExtArgs>;

  /**
   * `prisma.face_index_sync_parent`: Exposes CRUD operations for the **face_index_sync_parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Face_index_sync_parents
    * const face_index_sync_parents = await prisma.face_index_sync_parent.findMany()
    * ```
    */
  get face_index_sync_parent(): Prisma.face_index_sync_parentDelegate<ExtArgs>;

  /**
   * `prisma.human_info`: Exposes CRUD operations for the **human_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Human_infos
    * const human_infos = await prisma.human_info.findMany()
    * ```
    */
  get human_info(): Prisma.human_infoDelegate<ExtArgs>;

  /**
   * `prisma.human_list`: Exposes CRUD operations for the **human_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Human_lists
    * const human_lists = await prisma.human_list.findMany()
    * ```
    */
  get human_list(): Prisma.human_listDelegate<ExtArgs>;

  /**
   * `prisma.monitoring_slot_summary_sync_parent`: Exposes CRUD operations for the **monitoring_slot_summary_sync_parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monitoring_slot_summary_sync_parents
    * const monitoring_slot_summary_sync_parents = await prisma.monitoring_slot_summary_sync_parent.findMany()
    * ```
    */
  get monitoring_slot_summary_sync_parent(): Prisma.monitoring_slot_summary_sync_parentDelegate<ExtArgs>;

  /**
   * `prisma.nvr_cfg`: Exposes CRUD operations for the **nvr_cfg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nvr_cfgs
    * const nvr_cfgs = await prisma.nvr_cfg.findMany()
    * ```
    */
  get nvr_cfg(): Prisma.nvr_cfgDelegate<ExtArgs>;

  /**
   * `prisma.nvr_channel_cfg`: Exposes CRUD operations for the **nvr_channel_cfg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nvr_channel_cfgs
    * const nvr_channel_cfgs = await prisma.nvr_channel_cfg.findMany()
    * ```
    */
  get nvr_channel_cfg(): Prisma.nvr_channel_cfgDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_info`: Exposes CRUD operations for the **vehicle_info** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_infos
    * const vehicle_infos = await prisma.vehicle_info.findMany()
    * ```
    */
  get vehicle_info(): Prisma.vehicle_infoDelegate<ExtArgs>;

  /**
   * `prisma.vehicle_list`: Exposes CRUD operations for the **vehicle_list** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_lists
    * const vehicle_lists = await prisma.vehicle_list.findMany()
    * ```
    */
  get vehicle_list(): Prisma.vehicle_listDelegate<ExtArgs>;

  /**
   * `prisma.version_control`: Exposes CRUD operations for the **version_control** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Version_controls
    * const version_controls = await prisma.version_control.findMany()
    * ```
    */
  get version_control(): Prisma.version_controlDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    camera_cfg: 'camera_cfg',
    camera_storage_total: 'camera_storage_total',
    channel_cfg: 'channel_cfg',
    device_owner_cfg: 'device_owner_cfg',
    event_vms_sync_parent: 'event_vms_sync_parent',
    event_vms_sync_update_parent: 'event_vms_sync_update_parent',
    face_index_sync_parent: 'face_index_sync_parent',
    human_info: 'human_info',
    human_list: 'human_list',
    monitoring_slot_summary_sync_parent: 'monitoring_slot_summary_sync_parent',
    nvr_cfg: 'nvr_cfg',
    nvr_channel_cfg: 'nvr_channel_cfg',
    vehicle_info: 'vehicle_info',
    vehicle_list: 'vehicle_list',
    version_control: 'version_control'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "camera_cfg" | "camera_storage_total" | "channel_cfg" | "device_owner_cfg" | "event_vms_sync_parent" | "event_vms_sync_update_parent" | "face_index_sync_parent" | "human_info" | "human_list" | "monitoring_slot_summary_sync_parent" | "nvr_cfg" | "nvr_channel_cfg" | "vehicle_info" | "vehicle_list" | "version_control"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      camera_cfg: {
        payload: Prisma.$camera_cfgPayload<ExtArgs>
        fields: Prisma.camera_cfgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.camera_cfgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.camera_cfgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>
          }
          findFirst: {
            args: Prisma.camera_cfgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.camera_cfgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>
          }
          findMany: {
            args: Prisma.camera_cfgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>[]
          }
          create: {
            args: Prisma.camera_cfgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>
          }
          createMany: {
            args: Prisma.camera_cfgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.camera_cfgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>[]
          }
          delete: {
            args: Prisma.camera_cfgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>
          }
          update: {
            args: Prisma.camera_cfgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>
          }
          deleteMany: {
            args: Prisma.camera_cfgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.camera_cfgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.camera_cfgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_cfgPayload>
          }
          aggregate: {
            args: Prisma.Camera_cfgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCamera_cfg>
          }
          groupBy: {
            args: Prisma.camera_cfgGroupByArgs<ExtArgs>
            result: $Utils.Optional<Camera_cfgGroupByOutputType>[]
          }
          count: {
            args: Prisma.camera_cfgCountArgs<ExtArgs>
            result: $Utils.Optional<Camera_cfgCountAggregateOutputType> | number
          }
        }
      }
      camera_storage_total: {
        payload: Prisma.$camera_storage_totalPayload<ExtArgs>
        fields: Prisma.camera_storage_totalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.camera_storage_totalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.camera_storage_totalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>
          }
          findFirst: {
            args: Prisma.camera_storage_totalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.camera_storage_totalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>
          }
          findMany: {
            args: Prisma.camera_storage_totalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>[]
          }
          create: {
            args: Prisma.camera_storage_totalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>
          }
          createMany: {
            args: Prisma.camera_storage_totalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.camera_storage_totalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>[]
          }
          delete: {
            args: Prisma.camera_storage_totalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>
          }
          update: {
            args: Prisma.camera_storage_totalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>
          }
          deleteMany: {
            args: Prisma.camera_storage_totalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.camera_storage_totalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.camera_storage_totalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$camera_storage_totalPayload>
          }
          aggregate: {
            args: Prisma.Camera_storage_totalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCamera_storage_total>
          }
          groupBy: {
            args: Prisma.camera_storage_totalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Camera_storage_totalGroupByOutputType>[]
          }
          count: {
            args: Prisma.camera_storage_totalCountArgs<ExtArgs>
            result: $Utils.Optional<Camera_storage_totalCountAggregateOutputType> | number
          }
        }
      }
      channel_cfg: {
        payload: Prisma.$channel_cfgPayload<ExtArgs>
        fields: Prisma.channel_cfgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.channel_cfgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.channel_cfgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>
          }
          findFirst: {
            args: Prisma.channel_cfgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.channel_cfgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>
          }
          findMany: {
            args: Prisma.channel_cfgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>[]
          }
          create: {
            args: Prisma.channel_cfgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>
          }
          createMany: {
            args: Prisma.channel_cfgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.channel_cfgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>[]
          }
          delete: {
            args: Prisma.channel_cfgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>
          }
          update: {
            args: Prisma.channel_cfgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>
          }
          deleteMany: {
            args: Prisma.channel_cfgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.channel_cfgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.channel_cfgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$channel_cfgPayload>
          }
          aggregate: {
            args: Prisma.Channel_cfgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChannel_cfg>
          }
          groupBy: {
            args: Prisma.channel_cfgGroupByArgs<ExtArgs>
            result: $Utils.Optional<Channel_cfgGroupByOutputType>[]
          }
          count: {
            args: Prisma.channel_cfgCountArgs<ExtArgs>
            result: $Utils.Optional<Channel_cfgCountAggregateOutputType> | number
          }
        }
      }
      device_owner_cfg: {
        payload: Prisma.$device_owner_cfgPayload<ExtArgs>
        fields: Prisma.device_owner_cfgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.device_owner_cfgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.device_owner_cfgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>
          }
          findFirst: {
            args: Prisma.device_owner_cfgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.device_owner_cfgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>
          }
          findMany: {
            args: Prisma.device_owner_cfgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>[]
          }
          create: {
            args: Prisma.device_owner_cfgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>
          }
          createMany: {
            args: Prisma.device_owner_cfgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.device_owner_cfgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>[]
          }
          delete: {
            args: Prisma.device_owner_cfgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>
          }
          update: {
            args: Prisma.device_owner_cfgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>
          }
          deleteMany: {
            args: Prisma.device_owner_cfgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.device_owner_cfgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.device_owner_cfgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$device_owner_cfgPayload>
          }
          aggregate: {
            args: Prisma.Device_owner_cfgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice_owner_cfg>
          }
          groupBy: {
            args: Prisma.device_owner_cfgGroupByArgs<ExtArgs>
            result: $Utils.Optional<Device_owner_cfgGroupByOutputType>[]
          }
          count: {
            args: Prisma.device_owner_cfgCountArgs<ExtArgs>
            result: $Utils.Optional<Device_owner_cfgCountAggregateOutputType> | number
          }
        }
      }
      event_vms_sync_parent: {
        payload: Prisma.$event_vms_sync_parentPayload<ExtArgs>
        fields: Prisma.event_vms_sync_parentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_vms_sync_parentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_vms_sync_parentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>
          }
          findFirst: {
            args: Prisma.event_vms_sync_parentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_vms_sync_parentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>
          }
          findMany: {
            args: Prisma.event_vms_sync_parentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>[]
          }
          create: {
            args: Prisma.event_vms_sync_parentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>
          }
          createMany: {
            args: Prisma.event_vms_sync_parentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.event_vms_sync_parentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>[]
          }
          delete: {
            args: Prisma.event_vms_sync_parentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>
          }
          update: {
            args: Prisma.event_vms_sync_parentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>
          }
          deleteMany: {
            args: Prisma.event_vms_sync_parentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.event_vms_sync_parentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.event_vms_sync_parentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_parentPayload>
          }
          aggregate: {
            args: Prisma.Event_vms_sync_parentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_vms_sync_parent>
          }
          groupBy: {
            args: Prisma.event_vms_sync_parentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_vms_sync_parentGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_vms_sync_parentCountArgs<ExtArgs>
            result: $Utils.Optional<Event_vms_sync_parentCountAggregateOutputType> | number
          }
        }
      }
      event_vms_sync_update_parent: {
        payload: Prisma.$event_vms_sync_update_parentPayload<ExtArgs>
        fields: Prisma.event_vms_sync_update_parentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_vms_sync_update_parentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_vms_sync_update_parentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>
          }
          findFirst: {
            args: Prisma.event_vms_sync_update_parentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_vms_sync_update_parentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>
          }
          findMany: {
            args: Prisma.event_vms_sync_update_parentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>[]
          }
          create: {
            args: Prisma.event_vms_sync_update_parentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>
          }
          createMany: {
            args: Prisma.event_vms_sync_update_parentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.event_vms_sync_update_parentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>[]
          }
          delete: {
            args: Prisma.event_vms_sync_update_parentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>
          }
          update: {
            args: Prisma.event_vms_sync_update_parentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>
          }
          deleteMany: {
            args: Prisma.event_vms_sync_update_parentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.event_vms_sync_update_parentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.event_vms_sync_update_parentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_vms_sync_update_parentPayload>
          }
          aggregate: {
            args: Prisma.Event_vms_sync_update_parentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_vms_sync_update_parent>
          }
          groupBy: {
            args: Prisma.event_vms_sync_update_parentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_vms_sync_update_parentGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_vms_sync_update_parentCountArgs<ExtArgs>
            result: $Utils.Optional<Event_vms_sync_update_parentCountAggregateOutputType> | number
          }
        }
      }
      face_index_sync_parent: {
        payload: Prisma.$face_index_sync_parentPayload<ExtArgs>
        fields: Prisma.face_index_sync_parentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.face_index_sync_parentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.face_index_sync_parentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>
          }
          findFirst: {
            args: Prisma.face_index_sync_parentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.face_index_sync_parentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>
          }
          findMany: {
            args: Prisma.face_index_sync_parentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>[]
          }
          create: {
            args: Prisma.face_index_sync_parentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>
          }
          createMany: {
            args: Prisma.face_index_sync_parentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.face_index_sync_parentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>[]
          }
          delete: {
            args: Prisma.face_index_sync_parentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>
          }
          update: {
            args: Prisma.face_index_sync_parentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>
          }
          deleteMany: {
            args: Prisma.face_index_sync_parentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.face_index_sync_parentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.face_index_sync_parentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$face_index_sync_parentPayload>
          }
          aggregate: {
            args: Prisma.Face_index_sync_parentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFace_index_sync_parent>
          }
          groupBy: {
            args: Prisma.face_index_sync_parentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Face_index_sync_parentGroupByOutputType>[]
          }
          count: {
            args: Prisma.face_index_sync_parentCountArgs<ExtArgs>
            result: $Utils.Optional<Face_index_sync_parentCountAggregateOutputType> | number
          }
        }
      }
      human_info: {
        payload: Prisma.$human_infoPayload<ExtArgs>
        fields: Prisma.human_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.human_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.human_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>
          }
          findFirst: {
            args: Prisma.human_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.human_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>
          }
          findMany: {
            args: Prisma.human_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>[]
          }
          create: {
            args: Prisma.human_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>
          }
          createMany: {
            args: Prisma.human_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.human_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>[]
          }
          delete: {
            args: Prisma.human_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>
          }
          update: {
            args: Prisma.human_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>
          }
          deleteMany: {
            args: Prisma.human_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.human_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.human_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_infoPayload>
          }
          aggregate: {
            args: Prisma.Human_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHuman_info>
          }
          groupBy: {
            args: Prisma.human_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Human_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.human_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Human_infoCountAggregateOutputType> | number
          }
        }
      }
      human_list: {
        payload: Prisma.$human_listPayload<ExtArgs>
        fields: Prisma.human_listFieldRefs
        operations: {
          findUnique: {
            args: Prisma.human_listFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.human_listFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>
          }
          findFirst: {
            args: Prisma.human_listFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.human_listFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>
          }
          findMany: {
            args: Prisma.human_listFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>[]
          }
          create: {
            args: Prisma.human_listCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>
          }
          createMany: {
            args: Prisma.human_listCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.human_listCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>[]
          }
          delete: {
            args: Prisma.human_listDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>
          }
          update: {
            args: Prisma.human_listUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>
          }
          deleteMany: {
            args: Prisma.human_listDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.human_listUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.human_listUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$human_listPayload>
          }
          aggregate: {
            args: Prisma.Human_listAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHuman_list>
          }
          groupBy: {
            args: Prisma.human_listGroupByArgs<ExtArgs>
            result: $Utils.Optional<Human_listGroupByOutputType>[]
          }
          count: {
            args: Prisma.human_listCountArgs<ExtArgs>
            result: $Utils.Optional<Human_listCountAggregateOutputType> | number
          }
        }
      }
      monitoring_slot_summary_sync_parent: {
        payload: Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>
        fields: Prisma.monitoring_slot_summary_sync_parentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.monitoring_slot_summary_sync_parentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.monitoring_slot_summary_sync_parentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>
          }
          findFirst: {
            args: Prisma.monitoring_slot_summary_sync_parentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.monitoring_slot_summary_sync_parentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>
          }
          findMany: {
            args: Prisma.monitoring_slot_summary_sync_parentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>[]
          }
          create: {
            args: Prisma.monitoring_slot_summary_sync_parentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>
          }
          createMany: {
            args: Prisma.monitoring_slot_summary_sync_parentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.monitoring_slot_summary_sync_parentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>[]
          }
          delete: {
            args: Prisma.monitoring_slot_summary_sync_parentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>
          }
          update: {
            args: Prisma.monitoring_slot_summary_sync_parentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>
          }
          deleteMany: {
            args: Prisma.monitoring_slot_summary_sync_parentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.monitoring_slot_summary_sync_parentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.monitoring_slot_summary_sync_parentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monitoring_slot_summary_sync_parentPayload>
          }
          aggregate: {
            args: Prisma.Monitoring_slot_summary_sync_parentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonitoring_slot_summary_sync_parent>
          }
          groupBy: {
            args: Prisma.monitoring_slot_summary_sync_parentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Monitoring_slot_summary_sync_parentGroupByOutputType>[]
          }
          count: {
            args: Prisma.monitoring_slot_summary_sync_parentCountArgs<ExtArgs>
            result: $Utils.Optional<Monitoring_slot_summary_sync_parentCountAggregateOutputType> | number
          }
        }
      }
      nvr_cfg: {
        payload: Prisma.$nvr_cfgPayload<ExtArgs>
        fields: Prisma.nvr_cfgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nvr_cfgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nvr_cfgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>
          }
          findFirst: {
            args: Prisma.nvr_cfgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nvr_cfgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>
          }
          findMany: {
            args: Prisma.nvr_cfgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>[]
          }
          create: {
            args: Prisma.nvr_cfgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>
          }
          createMany: {
            args: Prisma.nvr_cfgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nvr_cfgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>[]
          }
          delete: {
            args: Prisma.nvr_cfgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>
          }
          update: {
            args: Prisma.nvr_cfgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>
          }
          deleteMany: {
            args: Prisma.nvr_cfgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nvr_cfgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.nvr_cfgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_cfgPayload>
          }
          aggregate: {
            args: Prisma.Nvr_cfgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNvr_cfg>
          }
          groupBy: {
            args: Prisma.nvr_cfgGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nvr_cfgGroupByOutputType>[]
          }
          count: {
            args: Prisma.nvr_cfgCountArgs<ExtArgs>
            result: $Utils.Optional<Nvr_cfgCountAggregateOutputType> | number
          }
        }
      }
      nvr_channel_cfg: {
        payload: Prisma.$nvr_channel_cfgPayload<ExtArgs>
        fields: Prisma.nvr_channel_cfgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nvr_channel_cfgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nvr_channel_cfgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>
          }
          findFirst: {
            args: Prisma.nvr_channel_cfgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nvr_channel_cfgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>
          }
          findMany: {
            args: Prisma.nvr_channel_cfgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>[]
          }
          create: {
            args: Prisma.nvr_channel_cfgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>
          }
          createMany: {
            args: Prisma.nvr_channel_cfgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nvr_channel_cfgCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>[]
          }
          delete: {
            args: Prisma.nvr_channel_cfgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>
          }
          update: {
            args: Prisma.nvr_channel_cfgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>
          }
          deleteMany: {
            args: Prisma.nvr_channel_cfgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nvr_channel_cfgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.nvr_channel_cfgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nvr_channel_cfgPayload>
          }
          aggregate: {
            args: Prisma.Nvr_channel_cfgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNvr_channel_cfg>
          }
          groupBy: {
            args: Prisma.nvr_channel_cfgGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nvr_channel_cfgGroupByOutputType>[]
          }
          count: {
            args: Prisma.nvr_channel_cfgCountArgs<ExtArgs>
            result: $Utils.Optional<Nvr_channel_cfgCountAggregateOutputType> | number
          }
        }
      }
      vehicle_info: {
        payload: Prisma.$vehicle_infoPayload<ExtArgs>
        fields: Prisma.vehicle_infoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehicle_infoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehicle_infoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>
          }
          findFirst: {
            args: Prisma.vehicle_infoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehicle_infoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>
          }
          findMany: {
            args: Prisma.vehicle_infoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>[]
          }
          create: {
            args: Prisma.vehicle_infoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>
          }
          createMany: {
            args: Prisma.vehicle_infoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vehicle_infoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>[]
          }
          delete: {
            args: Prisma.vehicle_infoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>
          }
          update: {
            args: Prisma.vehicle_infoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>
          }
          deleteMany: {
            args: Prisma.vehicle_infoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehicle_infoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vehicle_infoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_infoPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_infoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_info>
          }
          groupBy: {
            args: Prisma.vehicle_infoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_infoGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehicle_infoCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_infoCountAggregateOutputType> | number
          }
        }
      }
      vehicle_list: {
        payload: Prisma.$vehicle_listPayload<ExtArgs>
        fields: Prisma.vehicle_listFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vehicle_listFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vehicle_listFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>
          }
          findFirst: {
            args: Prisma.vehicle_listFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vehicle_listFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>
          }
          findMany: {
            args: Prisma.vehicle_listFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>[]
          }
          create: {
            args: Prisma.vehicle_listCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>
          }
          createMany: {
            args: Prisma.vehicle_listCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.vehicle_listCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>[]
          }
          delete: {
            args: Prisma.vehicle_listDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>
          }
          update: {
            args: Prisma.vehicle_listUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>
          }
          deleteMany: {
            args: Prisma.vehicle_listDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vehicle_listUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vehicle_listUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vehicle_listPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_listAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_list>
          }
          groupBy: {
            args: Prisma.vehicle_listGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_listGroupByOutputType>[]
          }
          count: {
            args: Prisma.vehicle_listCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_listCountAggregateOutputType> | number
          }
        }
      }
      version_control: {
        payload: Prisma.$version_controlPayload<ExtArgs>
        fields: Prisma.version_controlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.version_controlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.version_controlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>
          }
          findFirst: {
            args: Prisma.version_controlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.version_controlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>
          }
          findMany: {
            args: Prisma.version_controlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>[]
          }
          create: {
            args: Prisma.version_controlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>
          }
          createMany: {
            args: Prisma.version_controlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.version_controlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>[]
          }
          delete: {
            args: Prisma.version_controlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>
          }
          update: {
            args: Prisma.version_controlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>
          }
          deleteMany: {
            args: Prisma.version_controlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.version_controlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.version_controlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$version_controlPayload>
          }
          aggregate: {
            args: Prisma.Version_controlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVersion_control>
          }
          groupBy: {
            args: Prisma.version_controlGroupByArgs<ExtArgs>
            result: $Utils.Optional<Version_controlGroupByOutputType>[]
          }
          count: {
            args: Prisma.version_controlCountArgs<ExtArgs>
            result: $Utils.Optional<Version_controlCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model camera_cfg
   */

  export type AggregateCamera_cfg = {
    _count: Camera_cfgCountAggregateOutputType | null
    _min: Camera_cfgMinAggregateOutputType | null
    _max: Camera_cfgMaxAggregateOutputType | null
  }

  export type Camera_cfgMinAggregateOutputType = {
    id: string | null
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Camera_cfgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Camera_cfgCountAggregateOutputType = {
    id: number
    name: number
    search_tag: number
    cfg_data: number
    user_id_owner: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Camera_cfgMinAggregateInputType = {
    id?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Camera_cfgMaxAggregateInputType = {
    id?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Camera_cfgCountAggregateInputType = {
    id?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Camera_cfgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camera_cfg to aggregate.
     */
    where?: camera_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_cfgs to fetch.
     */
    orderBy?: camera_cfgOrderByWithRelationInput | camera_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: camera_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned camera_cfgs
    **/
    _count?: true | Camera_cfgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Camera_cfgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Camera_cfgMaxAggregateInputType
  }

  export type GetCamera_cfgAggregateType<T extends Camera_cfgAggregateArgs> = {
        [P in keyof T & keyof AggregateCamera_cfg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCamera_cfg[P]>
      : GetScalarType<T[P], AggregateCamera_cfg[P]>
  }




  export type camera_cfgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camera_cfgWhereInput
    orderBy?: camera_cfgOrderByWithAggregationInput | camera_cfgOrderByWithAggregationInput[]
    by: Camera_cfgScalarFieldEnum[] | Camera_cfgScalarFieldEnum
    having?: camera_cfgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Camera_cfgCountAggregateInputType | true
    _min?: Camera_cfgMinAggregateInputType
    _max?: Camera_cfgMaxAggregateInputType
  }

  export type Camera_cfgGroupByOutputType = {
    id: string
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
    _count: Camera_cfgCountAggregateOutputType | null
    _min: Camera_cfgMinAggregateOutputType | null
    _max: Camera_cfgMaxAggregateOutputType | null
  }

  type GetCamera_cfgGroupByPayload<T extends camera_cfgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Camera_cfgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Camera_cfgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Camera_cfgGroupByOutputType[P]>
            : GetScalarType<T[P], Camera_cfgGroupByOutputType[P]>
        }
      >
    >


  export type camera_cfgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["camera_cfg"]>

  export type camera_cfgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["camera_cfg"]>

  export type camera_cfgSelectScalar = {
    id?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }


  export type $camera_cfgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "camera_cfg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      search_tag: string | null
      cfg_data: Buffer | null
      user_id_owner: string | null
      time_created: Date | null
      time_modified: Date | null
    }, ExtArgs["result"]["camera_cfg"]>
    composites: {}
  }

  type camera_cfgGetPayload<S extends boolean | null | undefined | camera_cfgDefaultArgs> = $Result.GetResult<Prisma.$camera_cfgPayload, S>

  type camera_cfgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<camera_cfgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Camera_cfgCountAggregateInputType | true
    }

  export interface camera_cfgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['camera_cfg'], meta: { name: 'camera_cfg' } }
    /**
     * Find zero or one Camera_cfg that matches the filter.
     * @param {camera_cfgFindUniqueArgs} args - Arguments to find a Camera_cfg
     * @example
     * // Get one Camera_cfg
     * const camera_cfg = await prisma.camera_cfg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends camera_cfgFindUniqueArgs>(args: SelectSubset<T, camera_cfgFindUniqueArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Camera_cfg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {camera_cfgFindUniqueOrThrowArgs} args - Arguments to find a Camera_cfg
     * @example
     * // Get one Camera_cfg
     * const camera_cfg = await prisma.camera_cfg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends camera_cfgFindUniqueOrThrowArgs>(args: SelectSubset<T, camera_cfgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Camera_cfg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_cfgFindFirstArgs} args - Arguments to find a Camera_cfg
     * @example
     * // Get one Camera_cfg
     * const camera_cfg = await prisma.camera_cfg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends camera_cfgFindFirstArgs>(args?: SelectSubset<T, camera_cfgFindFirstArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Camera_cfg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_cfgFindFirstOrThrowArgs} args - Arguments to find a Camera_cfg
     * @example
     * // Get one Camera_cfg
     * const camera_cfg = await prisma.camera_cfg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends camera_cfgFindFirstOrThrowArgs>(args?: SelectSubset<T, camera_cfgFindFirstOrThrowArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Camera_cfgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_cfgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Camera_cfgs
     * const camera_cfgs = await prisma.camera_cfg.findMany()
     * 
     * // Get first 10 Camera_cfgs
     * const camera_cfgs = await prisma.camera_cfg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const camera_cfgWithIdOnly = await prisma.camera_cfg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends camera_cfgFindManyArgs>(args?: SelectSubset<T, camera_cfgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Camera_cfg.
     * @param {camera_cfgCreateArgs} args - Arguments to create a Camera_cfg.
     * @example
     * // Create one Camera_cfg
     * const Camera_cfg = await prisma.camera_cfg.create({
     *   data: {
     *     // ... data to create a Camera_cfg
     *   }
     * })
     * 
     */
    create<T extends camera_cfgCreateArgs>(args: SelectSubset<T, camera_cfgCreateArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Camera_cfgs.
     * @param {camera_cfgCreateManyArgs} args - Arguments to create many Camera_cfgs.
     * @example
     * // Create many Camera_cfgs
     * const camera_cfg = await prisma.camera_cfg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends camera_cfgCreateManyArgs>(args?: SelectSubset<T, camera_cfgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Camera_cfgs and returns the data saved in the database.
     * @param {camera_cfgCreateManyAndReturnArgs} args - Arguments to create many Camera_cfgs.
     * @example
     * // Create many Camera_cfgs
     * const camera_cfg = await prisma.camera_cfg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Camera_cfgs and only return the `id`
     * const camera_cfgWithIdOnly = await prisma.camera_cfg.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends camera_cfgCreateManyAndReturnArgs>(args?: SelectSubset<T, camera_cfgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Camera_cfg.
     * @param {camera_cfgDeleteArgs} args - Arguments to delete one Camera_cfg.
     * @example
     * // Delete one Camera_cfg
     * const Camera_cfg = await prisma.camera_cfg.delete({
     *   where: {
     *     // ... filter to delete one Camera_cfg
     *   }
     * })
     * 
     */
    delete<T extends camera_cfgDeleteArgs>(args: SelectSubset<T, camera_cfgDeleteArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Camera_cfg.
     * @param {camera_cfgUpdateArgs} args - Arguments to update one Camera_cfg.
     * @example
     * // Update one Camera_cfg
     * const camera_cfg = await prisma.camera_cfg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends camera_cfgUpdateArgs>(args: SelectSubset<T, camera_cfgUpdateArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Camera_cfgs.
     * @param {camera_cfgDeleteManyArgs} args - Arguments to filter Camera_cfgs to delete.
     * @example
     * // Delete a few Camera_cfgs
     * const { count } = await prisma.camera_cfg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends camera_cfgDeleteManyArgs>(args?: SelectSubset<T, camera_cfgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camera_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_cfgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Camera_cfgs
     * const camera_cfg = await prisma.camera_cfg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends camera_cfgUpdateManyArgs>(args: SelectSubset<T, camera_cfgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Camera_cfg.
     * @param {camera_cfgUpsertArgs} args - Arguments to update or create a Camera_cfg.
     * @example
     * // Update or create a Camera_cfg
     * const camera_cfg = await prisma.camera_cfg.upsert({
     *   create: {
     *     // ... data to create a Camera_cfg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Camera_cfg we want to update
     *   }
     * })
     */
    upsert<T extends camera_cfgUpsertArgs>(args: SelectSubset<T, camera_cfgUpsertArgs<ExtArgs>>): Prisma__camera_cfgClient<$Result.GetResult<Prisma.$camera_cfgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Camera_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_cfgCountArgs} args - Arguments to filter Camera_cfgs to count.
     * @example
     * // Count the number of Camera_cfgs
     * const count = await prisma.camera_cfg.count({
     *   where: {
     *     // ... the filter for the Camera_cfgs we want to count
     *   }
     * })
    **/
    count<T extends camera_cfgCountArgs>(
      args?: Subset<T, camera_cfgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Camera_cfgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Camera_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Camera_cfgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Camera_cfgAggregateArgs>(args: Subset<T, Camera_cfgAggregateArgs>): Prisma.PrismaPromise<GetCamera_cfgAggregateType<T>>

    /**
     * Group by Camera_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_cfgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends camera_cfgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: camera_cfgGroupByArgs['orderBy'] }
        : { orderBy?: camera_cfgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, camera_cfgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCamera_cfgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the camera_cfg model
   */
  readonly fields: camera_cfgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for camera_cfg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__camera_cfgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the camera_cfg model
   */ 
  interface camera_cfgFieldRefs {
    readonly id: FieldRef<"camera_cfg", 'String'>
    readonly name: FieldRef<"camera_cfg", 'String'>
    readonly search_tag: FieldRef<"camera_cfg", 'String'>
    readonly cfg_data: FieldRef<"camera_cfg", 'Bytes'>
    readonly user_id_owner: FieldRef<"camera_cfg", 'String'>
    readonly time_created: FieldRef<"camera_cfg", 'DateTime'>
    readonly time_modified: FieldRef<"camera_cfg", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * camera_cfg findUnique
   */
  export type camera_cfgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * Filter, which camera_cfg to fetch.
     */
    where: camera_cfgWhereUniqueInput
  }

  /**
   * camera_cfg findUniqueOrThrow
   */
  export type camera_cfgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * Filter, which camera_cfg to fetch.
     */
    where: camera_cfgWhereUniqueInput
  }

  /**
   * camera_cfg findFirst
   */
  export type camera_cfgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * Filter, which camera_cfg to fetch.
     */
    where?: camera_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_cfgs to fetch.
     */
    orderBy?: camera_cfgOrderByWithRelationInput | camera_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camera_cfgs.
     */
    cursor?: camera_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camera_cfgs.
     */
    distinct?: Camera_cfgScalarFieldEnum | Camera_cfgScalarFieldEnum[]
  }

  /**
   * camera_cfg findFirstOrThrow
   */
  export type camera_cfgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * Filter, which camera_cfg to fetch.
     */
    where?: camera_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_cfgs to fetch.
     */
    orderBy?: camera_cfgOrderByWithRelationInput | camera_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camera_cfgs.
     */
    cursor?: camera_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camera_cfgs.
     */
    distinct?: Camera_cfgScalarFieldEnum | Camera_cfgScalarFieldEnum[]
  }

  /**
   * camera_cfg findMany
   */
  export type camera_cfgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * Filter, which camera_cfgs to fetch.
     */
    where?: camera_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_cfgs to fetch.
     */
    orderBy?: camera_cfgOrderByWithRelationInput | camera_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing camera_cfgs.
     */
    cursor?: camera_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_cfgs.
     */
    skip?: number
    distinct?: Camera_cfgScalarFieldEnum | Camera_cfgScalarFieldEnum[]
  }

  /**
   * camera_cfg create
   */
  export type camera_cfgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * The data needed to create a camera_cfg.
     */
    data: XOR<camera_cfgCreateInput, camera_cfgUncheckedCreateInput>
  }

  /**
   * camera_cfg createMany
   */
  export type camera_cfgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many camera_cfgs.
     */
    data: camera_cfgCreateManyInput | camera_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * camera_cfg createManyAndReturn
   */
  export type camera_cfgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many camera_cfgs.
     */
    data: camera_cfgCreateManyInput | camera_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * camera_cfg update
   */
  export type camera_cfgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * The data needed to update a camera_cfg.
     */
    data: XOR<camera_cfgUpdateInput, camera_cfgUncheckedUpdateInput>
    /**
     * Choose, which camera_cfg to update.
     */
    where: camera_cfgWhereUniqueInput
  }

  /**
   * camera_cfg updateMany
   */
  export type camera_cfgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update camera_cfgs.
     */
    data: XOR<camera_cfgUpdateManyMutationInput, camera_cfgUncheckedUpdateManyInput>
    /**
     * Filter which camera_cfgs to update
     */
    where?: camera_cfgWhereInput
  }

  /**
   * camera_cfg upsert
   */
  export type camera_cfgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * The filter to search for the camera_cfg to update in case it exists.
     */
    where: camera_cfgWhereUniqueInput
    /**
     * In case the camera_cfg found by the `where` argument doesn't exist, create a new camera_cfg with this data.
     */
    create: XOR<camera_cfgCreateInput, camera_cfgUncheckedCreateInput>
    /**
     * In case the camera_cfg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<camera_cfgUpdateInput, camera_cfgUncheckedUpdateInput>
  }

  /**
   * camera_cfg delete
   */
  export type camera_cfgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
    /**
     * Filter which camera_cfg to delete.
     */
    where: camera_cfgWhereUniqueInput
  }

  /**
   * camera_cfg deleteMany
   */
  export type camera_cfgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camera_cfgs to delete
     */
    where?: camera_cfgWhereInput
  }

  /**
   * camera_cfg without action
   */
  export type camera_cfgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_cfg
     */
    select?: camera_cfgSelect<ExtArgs> | null
  }


  /**
   * Model camera_storage_total
   */

  export type AggregateCamera_storage_total = {
    _count: Camera_storage_totalCountAggregateOutputType | null
    _avg: Camera_storage_totalAvgAggregateOutputType | null
    _sum: Camera_storage_totalSumAggregateOutputType | null
    _min: Camera_storage_totalMinAggregateOutputType | null
    _max: Camera_storage_totalMaxAggregateOutputType | null
  }

  export type Camera_storage_totalAvgAggregateOutputType = {
    use_disk_mb: number | null
    total_dur: number | null
    lost_dur: number | null
  }

  export type Camera_storage_totalSumAggregateOutputType = {
    use_disk_mb: number | null
    total_dur: number | null
    lost_dur: number | null
  }

  export type Camera_storage_totalMinAggregateOutputType = {
    partition_path: string | null
    camera_id: string | null
    use_disk_mb: number | null
    time_start: Date | null
    time_end: Date | null
    total_dur: number | null
    lost_dur: number | null
  }

  export type Camera_storage_totalMaxAggregateOutputType = {
    partition_path: string | null
    camera_id: string | null
    use_disk_mb: number | null
    time_start: Date | null
    time_end: Date | null
    total_dur: number | null
    lost_dur: number | null
  }

  export type Camera_storage_totalCountAggregateOutputType = {
    partition_path: number
    camera_id: number
    use_disk_mb: number
    time_start: number
    time_end: number
    total_dur: number
    lost_dur: number
    _all: number
  }


  export type Camera_storage_totalAvgAggregateInputType = {
    use_disk_mb?: true
    total_dur?: true
    lost_dur?: true
  }

  export type Camera_storage_totalSumAggregateInputType = {
    use_disk_mb?: true
    total_dur?: true
    lost_dur?: true
  }

  export type Camera_storage_totalMinAggregateInputType = {
    partition_path?: true
    camera_id?: true
    use_disk_mb?: true
    time_start?: true
    time_end?: true
    total_dur?: true
    lost_dur?: true
  }

  export type Camera_storage_totalMaxAggregateInputType = {
    partition_path?: true
    camera_id?: true
    use_disk_mb?: true
    time_start?: true
    time_end?: true
    total_dur?: true
    lost_dur?: true
  }

  export type Camera_storage_totalCountAggregateInputType = {
    partition_path?: true
    camera_id?: true
    use_disk_mb?: true
    time_start?: true
    time_end?: true
    total_dur?: true
    lost_dur?: true
    _all?: true
  }

  export type Camera_storage_totalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camera_storage_total to aggregate.
     */
    where?: camera_storage_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_storage_totals to fetch.
     */
    orderBy?: camera_storage_totalOrderByWithRelationInput | camera_storage_totalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: camera_storage_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_storage_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_storage_totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned camera_storage_totals
    **/
    _count?: true | Camera_storage_totalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Camera_storage_totalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Camera_storage_totalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Camera_storage_totalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Camera_storage_totalMaxAggregateInputType
  }

  export type GetCamera_storage_totalAggregateType<T extends Camera_storage_totalAggregateArgs> = {
        [P in keyof T & keyof AggregateCamera_storage_total]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCamera_storage_total[P]>
      : GetScalarType<T[P], AggregateCamera_storage_total[P]>
  }




  export type camera_storage_totalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: camera_storage_totalWhereInput
    orderBy?: camera_storage_totalOrderByWithAggregationInput | camera_storage_totalOrderByWithAggregationInput[]
    by: Camera_storage_totalScalarFieldEnum[] | Camera_storage_totalScalarFieldEnum
    having?: camera_storage_totalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Camera_storage_totalCountAggregateInputType | true
    _avg?: Camera_storage_totalAvgAggregateInputType
    _sum?: Camera_storage_totalSumAggregateInputType
    _min?: Camera_storage_totalMinAggregateInputType
    _max?: Camera_storage_totalMaxAggregateInputType
  }

  export type Camera_storage_totalGroupByOutputType = {
    partition_path: string
    camera_id: string
    use_disk_mb: number | null
    time_start: Date | null
    time_end: Date | null
    total_dur: number | null
    lost_dur: number | null
    _count: Camera_storage_totalCountAggregateOutputType | null
    _avg: Camera_storage_totalAvgAggregateOutputType | null
    _sum: Camera_storage_totalSumAggregateOutputType | null
    _min: Camera_storage_totalMinAggregateOutputType | null
    _max: Camera_storage_totalMaxAggregateOutputType | null
  }

  type GetCamera_storage_totalGroupByPayload<T extends camera_storage_totalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Camera_storage_totalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Camera_storage_totalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Camera_storage_totalGroupByOutputType[P]>
            : GetScalarType<T[P], Camera_storage_totalGroupByOutputType[P]>
        }
      >
    >


  export type camera_storage_totalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    partition_path?: boolean
    camera_id?: boolean
    use_disk_mb?: boolean
    time_start?: boolean
    time_end?: boolean
    total_dur?: boolean
    lost_dur?: boolean
  }, ExtArgs["result"]["camera_storage_total"]>

  export type camera_storage_totalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    partition_path?: boolean
    camera_id?: boolean
    use_disk_mb?: boolean
    time_start?: boolean
    time_end?: boolean
    total_dur?: boolean
    lost_dur?: boolean
  }, ExtArgs["result"]["camera_storage_total"]>

  export type camera_storage_totalSelectScalar = {
    partition_path?: boolean
    camera_id?: boolean
    use_disk_mb?: boolean
    time_start?: boolean
    time_end?: boolean
    total_dur?: boolean
    lost_dur?: boolean
  }


  export type $camera_storage_totalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "camera_storage_total"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      partition_path: string
      camera_id: string
      use_disk_mb: number | null
      time_start: Date | null
      time_end: Date | null
      total_dur: number | null
      lost_dur: number | null
    }, ExtArgs["result"]["camera_storage_total"]>
    composites: {}
  }

  type camera_storage_totalGetPayload<S extends boolean | null | undefined | camera_storage_totalDefaultArgs> = $Result.GetResult<Prisma.$camera_storage_totalPayload, S>

  type camera_storage_totalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<camera_storage_totalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Camera_storage_totalCountAggregateInputType | true
    }

  export interface camera_storage_totalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['camera_storage_total'], meta: { name: 'camera_storage_total' } }
    /**
     * Find zero or one Camera_storage_total that matches the filter.
     * @param {camera_storage_totalFindUniqueArgs} args - Arguments to find a Camera_storage_total
     * @example
     * // Get one Camera_storage_total
     * const camera_storage_total = await prisma.camera_storage_total.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends camera_storage_totalFindUniqueArgs>(args: SelectSubset<T, camera_storage_totalFindUniqueArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Camera_storage_total that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {camera_storage_totalFindUniqueOrThrowArgs} args - Arguments to find a Camera_storage_total
     * @example
     * // Get one Camera_storage_total
     * const camera_storage_total = await prisma.camera_storage_total.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends camera_storage_totalFindUniqueOrThrowArgs>(args: SelectSubset<T, camera_storage_totalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Camera_storage_total that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_storage_totalFindFirstArgs} args - Arguments to find a Camera_storage_total
     * @example
     * // Get one Camera_storage_total
     * const camera_storage_total = await prisma.camera_storage_total.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends camera_storage_totalFindFirstArgs>(args?: SelectSubset<T, camera_storage_totalFindFirstArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Camera_storage_total that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_storage_totalFindFirstOrThrowArgs} args - Arguments to find a Camera_storage_total
     * @example
     * // Get one Camera_storage_total
     * const camera_storage_total = await prisma.camera_storage_total.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends camera_storage_totalFindFirstOrThrowArgs>(args?: SelectSubset<T, camera_storage_totalFindFirstOrThrowArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Camera_storage_totals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_storage_totalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Camera_storage_totals
     * const camera_storage_totals = await prisma.camera_storage_total.findMany()
     * 
     * // Get first 10 Camera_storage_totals
     * const camera_storage_totals = await prisma.camera_storage_total.findMany({ take: 10 })
     * 
     * // Only select the `partition_path`
     * const camera_storage_totalWithPartition_pathOnly = await prisma.camera_storage_total.findMany({ select: { partition_path: true } })
     * 
     */
    findMany<T extends camera_storage_totalFindManyArgs>(args?: SelectSubset<T, camera_storage_totalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Camera_storage_total.
     * @param {camera_storage_totalCreateArgs} args - Arguments to create a Camera_storage_total.
     * @example
     * // Create one Camera_storage_total
     * const Camera_storage_total = await prisma.camera_storage_total.create({
     *   data: {
     *     // ... data to create a Camera_storage_total
     *   }
     * })
     * 
     */
    create<T extends camera_storage_totalCreateArgs>(args: SelectSubset<T, camera_storage_totalCreateArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Camera_storage_totals.
     * @param {camera_storage_totalCreateManyArgs} args - Arguments to create many Camera_storage_totals.
     * @example
     * // Create many Camera_storage_totals
     * const camera_storage_total = await prisma.camera_storage_total.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends camera_storage_totalCreateManyArgs>(args?: SelectSubset<T, camera_storage_totalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Camera_storage_totals and returns the data saved in the database.
     * @param {camera_storage_totalCreateManyAndReturnArgs} args - Arguments to create many Camera_storage_totals.
     * @example
     * // Create many Camera_storage_totals
     * const camera_storage_total = await prisma.camera_storage_total.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Camera_storage_totals and only return the `partition_path`
     * const camera_storage_totalWithPartition_pathOnly = await prisma.camera_storage_total.createManyAndReturn({ 
     *   select: { partition_path: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends camera_storage_totalCreateManyAndReturnArgs>(args?: SelectSubset<T, camera_storage_totalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Camera_storage_total.
     * @param {camera_storage_totalDeleteArgs} args - Arguments to delete one Camera_storage_total.
     * @example
     * // Delete one Camera_storage_total
     * const Camera_storage_total = await prisma.camera_storage_total.delete({
     *   where: {
     *     // ... filter to delete one Camera_storage_total
     *   }
     * })
     * 
     */
    delete<T extends camera_storage_totalDeleteArgs>(args: SelectSubset<T, camera_storage_totalDeleteArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Camera_storage_total.
     * @param {camera_storage_totalUpdateArgs} args - Arguments to update one Camera_storage_total.
     * @example
     * // Update one Camera_storage_total
     * const camera_storage_total = await prisma.camera_storage_total.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends camera_storage_totalUpdateArgs>(args: SelectSubset<T, camera_storage_totalUpdateArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Camera_storage_totals.
     * @param {camera_storage_totalDeleteManyArgs} args - Arguments to filter Camera_storage_totals to delete.
     * @example
     * // Delete a few Camera_storage_totals
     * const { count } = await prisma.camera_storage_total.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends camera_storage_totalDeleteManyArgs>(args?: SelectSubset<T, camera_storage_totalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Camera_storage_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_storage_totalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Camera_storage_totals
     * const camera_storage_total = await prisma.camera_storage_total.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends camera_storage_totalUpdateManyArgs>(args: SelectSubset<T, camera_storage_totalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Camera_storage_total.
     * @param {camera_storage_totalUpsertArgs} args - Arguments to update or create a Camera_storage_total.
     * @example
     * // Update or create a Camera_storage_total
     * const camera_storage_total = await prisma.camera_storage_total.upsert({
     *   create: {
     *     // ... data to create a Camera_storage_total
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Camera_storage_total we want to update
     *   }
     * })
     */
    upsert<T extends camera_storage_totalUpsertArgs>(args: SelectSubset<T, camera_storage_totalUpsertArgs<ExtArgs>>): Prisma__camera_storage_totalClient<$Result.GetResult<Prisma.$camera_storage_totalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Camera_storage_totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_storage_totalCountArgs} args - Arguments to filter Camera_storage_totals to count.
     * @example
     * // Count the number of Camera_storage_totals
     * const count = await prisma.camera_storage_total.count({
     *   where: {
     *     // ... the filter for the Camera_storage_totals we want to count
     *   }
     * })
    **/
    count<T extends camera_storage_totalCountArgs>(
      args?: Subset<T, camera_storage_totalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Camera_storage_totalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Camera_storage_total.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Camera_storage_totalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Camera_storage_totalAggregateArgs>(args: Subset<T, Camera_storage_totalAggregateArgs>): Prisma.PrismaPromise<GetCamera_storage_totalAggregateType<T>>

    /**
     * Group by Camera_storage_total.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {camera_storage_totalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends camera_storage_totalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: camera_storage_totalGroupByArgs['orderBy'] }
        : { orderBy?: camera_storage_totalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, camera_storage_totalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCamera_storage_totalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the camera_storage_total model
   */
  readonly fields: camera_storage_totalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for camera_storage_total.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__camera_storage_totalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the camera_storage_total model
   */ 
  interface camera_storage_totalFieldRefs {
    readonly partition_path: FieldRef<"camera_storage_total", 'String'>
    readonly camera_id: FieldRef<"camera_storage_total", 'String'>
    readonly use_disk_mb: FieldRef<"camera_storage_total", 'Float'>
    readonly time_start: FieldRef<"camera_storage_total", 'DateTime'>
    readonly time_end: FieldRef<"camera_storage_total", 'DateTime'>
    readonly total_dur: FieldRef<"camera_storage_total", 'Int'>
    readonly lost_dur: FieldRef<"camera_storage_total", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * camera_storage_total findUnique
   */
  export type camera_storage_totalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * Filter, which camera_storage_total to fetch.
     */
    where: camera_storage_totalWhereUniqueInput
  }

  /**
   * camera_storage_total findUniqueOrThrow
   */
  export type camera_storage_totalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * Filter, which camera_storage_total to fetch.
     */
    where: camera_storage_totalWhereUniqueInput
  }

  /**
   * camera_storage_total findFirst
   */
  export type camera_storage_totalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * Filter, which camera_storage_total to fetch.
     */
    where?: camera_storage_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_storage_totals to fetch.
     */
    orderBy?: camera_storage_totalOrderByWithRelationInput | camera_storage_totalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camera_storage_totals.
     */
    cursor?: camera_storage_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_storage_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_storage_totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camera_storage_totals.
     */
    distinct?: Camera_storage_totalScalarFieldEnum | Camera_storage_totalScalarFieldEnum[]
  }

  /**
   * camera_storage_total findFirstOrThrow
   */
  export type camera_storage_totalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * Filter, which camera_storage_total to fetch.
     */
    where?: camera_storage_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_storage_totals to fetch.
     */
    orderBy?: camera_storage_totalOrderByWithRelationInput | camera_storage_totalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for camera_storage_totals.
     */
    cursor?: camera_storage_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_storage_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_storage_totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of camera_storage_totals.
     */
    distinct?: Camera_storage_totalScalarFieldEnum | Camera_storage_totalScalarFieldEnum[]
  }

  /**
   * camera_storage_total findMany
   */
  export type camera_storage_totalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * Filter, which camera_storage_totals to fetch.
     */
    where?: camera_storage_totalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of camera_storage_totals to fetch.
     */
    orderBy?: camera_storage_totalOrderByWithRelationInput | camera_storage_totalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing camera_storage_totals.
     */
    cursor?: camera_storage_totalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` camera_storage_totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` camera_storage_totals.
     */
    skip?: number
    distinct?: Camera_storage_totalScalarFieldEnum | Camera_storage_totalScalarFieldEnum[]
  }

  /**
   * camera_storage_total create
   */
  export type camera_storage_totalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * The data needed to create a camera_storage_total.
     */
    data: XOR<camera_storage_totalCreateInput, camera_storage_totalUncheckedCreateInput>
  }

  /**
   * camera_storage_total createMany
   */
  export type camera_storage_totalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many camera_storage_totals.
     */
    data: camera_storage_totalCreateManyInput | camera_storage_totalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * camera_storage_total createManyAndReturn
   */
  export type camera_storage_totalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many camera_storage_totals.
     */
    data: camera_storage_totalCreateManyInput | camera_storage_totalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * camera_storage_total update
   */
  export type camera_storage_totalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * The data needed to update a camera_storage_total.
     */
    data: XOR<camera_storage_totalUpdateInput, camera_storage_totalUncheckedUpdateInput>
    /**
     * Choose, which camera_storage_total to update.
     */
    where: camera_storage_totalWhereUniqueInput
  }

  /**
   * camera_storage_total updateMany
   */
  export type camera_storage_totalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update camera_storage_totals.
     */
    data: XOR<camera_storage_totalUpdateManyMutationInput, camera_storage_totalUncheckedUpdateManyInput>
    /**
     * Filter which camera_storage_totals to update
     */
    where?: camera_storage_totalWhereInput
  }

  /**
   * camera_storage_total upsert
   */
  export type camera_storage_totalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * The filter to search for the camera_storage_total to update in case it exists.
     */
    where: camera_storage_totalWhereUniqueInput
    /**
     * In case the camera_storage_total found by the `where` argument doesn't exist, create a new camera_storage_total with this data.
     */
    create: XOR<camera_storage_totalCreateInput, camera_storage_totalUncheckedCreateInput>
    /**
     * In case the camera_storage_total was found with the provided `where` argument, update it with this data.
     */
    update: XOR<camera_storage_totalUpdateInput, camera_storage_totalUncheckedUpdateInput>
  }

  /**
   * camera_storage_total delete
   */
  export type camera_storage_totalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
    /**
     * Filter which camera_storage_total to delete.
     */
    where: camera_storage_totalWhereUniqueInput
  }

  /**
   * camera_storage_total deleteMany
   */
  export type camera_storage_totalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which camera_storage_totals to delete
     */
    where?: camera_storage_totalWhereInput
  }

  /**
   * camera_storage_total without action
   */
  export type camera_storage_totalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the camera_storage_total
     */
    select?: camera_storage_totalSelect<ExtArgs> | null
  }


  /**
   * Model channel_cfg
   */

  export type AggregateChannel_cfg = {
    _count: Channel_cfgCountAggregateOutputType | null
    _min: Channel_cfgMinAggregateOutputType | null
    _max: Channel_cfgMaxAggregateOutputType | null
  }

  export type Channel_cfgMinAggregateOutputType = {
    id: string | null
    name: string | null
    camera_mapping_id: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Channel_cfgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    camera_mapping_id: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Channel_cfgCountAggregateOutputType = {
    id: number
    name: number
    camera_mapping_id: number
    search_tag: number
    cfg_data: number
    user_id_owner: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Channel_cfgMinAggregateInputType = {
    id?: true
    name?: true
    camera_mapping_id?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Channel_cfgMaxAggregateInputType = {
    id?: true
    name?: true
    camera_mapping_id?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Channel_cfgCountAggregateInputType = {
    id?: true
    name?: true
    camera_mapping_id?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Channel_cfgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channel_cfg to aggregate.
     */
    where?: channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channel_cfgs to fetch.
     */
    orderBy?: channel_cfgOrderByWithRelationInput | channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channel_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned channel_cfgs
    **/
    _count?: true | Channel_cfgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Channel_cfgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Channel_cfgMaxAggregateInputType
  }

  export type GetChannel_cfgAggregateType<T extends Channel_cfgAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel_cfg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel_cfg[P]>
      : GetScalarType<T[P], AggregateChannel_cfg[P]>
  }




  export type channel_cfgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channel_cfgWhereInput
    orderBy?: channel_cfgOrderByWithAggregationInput | channel_cfgOrderByWithAggregationInput[]
    by: Channel_cfgScalarFieldEnum[] | Channel_cfgScalarFieldEnum
    having?: channel_cfgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Channel_cfgCountAggregateInputType | true
    _min?: Channel_cfgMinAggregateInputType
    _max?: Channel_cfgMaxAggregateInputType
  }

  export type Channel_cfgGroupByOutputType = {
    id: string
    name: string | null
    camera_mapping_id: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
    _count: Channel_cfgCountAggregateOutputType | null
    _min: Channel_cfgMinAggregateOutputType | null
    _max: Channel_cfgMaxAggregateOutputType | null
  }

  type GetChannel_cfgGroupByPayload<T extends channel_cfgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Channel_cfgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Channel_cfgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Channel_cfgGroupByOutputType[P]>
            : GetScalarType<T[P], Channel_cfgGroupByOutputType[P]>
        }
      >
    >


  export type channel_cfgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    camera_mapping_id?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["channel_cfg"]>

  export type channel_cfgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    camera_mapping_id?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["channel_cfg"]>

  export type channel_cfgSelectScalar = {
    id?: boolean
    name?: boolean
    camera_mapping_id?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }


  export type $channel_cfgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "channel_cfg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      camera_mapping_id: string | null
      search_tag: string | null
      cfg_data: Buffer | null
      user_id_owner: string | null
      time_created: Date | null
      time_modified: Date | null
    }, ExtArgs["result"]["channel_cfg"]>
    composites: {}
  }

  type channel_cfgGetPayload<S extends boolean | null | undefined | channel_cfgDefaultArgs> = $Result.GetResult<Prisma.$channel_cfgPayload, S>

  type channel_cfgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<channel_cfgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Channel_cfgCountAggregateInputType | true
    }

  export interface channel_cfgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['channel_cfg'], meta: { name: 'channel_cfg' } }
    /**
     * Find zero or one Channel_cfg that matches the filter.
     * @param {channel_cfgFindUniqueArgs} args - Arguments to find a Channel_cfg
     * @example
     * // Get one Channel_cfg
     * const channel_cfg = await prisma.channel_cfg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends channel_cfgFindUniqueArgs>(args: SelectSubset<T, channel_cfgFindUniqueArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Channel_cfg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {channel_cfgFindUniqueOrThrowArgs} args - Arguments to find a Channel_cfg
     * @example
     * // Get one Channel_cfg
     * const channel_cfg = await prisma.channel_cfg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends channel_cfgFindUniqueOrThrowArgs>(args: SelectSubset<T, channel_cfgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Channel_cfg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channel_cfgFindFirstArgs} args - Arguments to find a Channel_cfg
     * @example
     * // Get one Channel_cfg
     * const channel_cfg = await prisma.channel_cfg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends channel_cfgFindFirstArgs>(args?: SelectSubset<T, channel_cfgFindFirstArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Channel_cfg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channel_cfgFindFirstOrThrowArgs} args - Arguments to find a Channel_cfg
     * @example
     * // Get one Channel_cfg
     * const channel_cfg = await prisma.channel_cfg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends channel_cfgFindFirstOrThrowArgs>(args?: SelectSubset<T, channel_cfgFindFirstOrThrowArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Channel_cfgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channel_cfgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channel_cfgs
     * const channel_cfgs = await prisma.channel_cfg.findMany()
     * 
     * // Get first 10 Channel_cfgs
     * const channel_cfgs = await prisma.channel_cfg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channel_cfgWithIdOnly = await prisma.channel_cfg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends channel_cfgFindManyArgs>(args?: SelectSubset<T, channel_cfgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Channel_cfg.
     * @param {channel_cfgCreateArgs} args - Arguments to create a Channel_cfg.
     * @example
     * // Create one Channel_cfg
     * const Channel_cfg = await prisma.channel_cfg.create({
     *   data: {
     *     // ... data to create a Channel_cfg
     *   }
     * })
     * 
     */
    create<T extends channel_cfgCreateArgs>(args: SelectSubset<T, channel_cfgCreateArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Channel_cfgs.
     * @param {channel_cfgCreateManyArgs} args - Arguments to create many Channel_cfgs.
     * @example
     * // Create many Channel_cfgs
     * const channel_cfg = await prisma.channel_cfg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends channel_cfgCreateManyArgs>(args?: SelectSubset<T, channel_cfgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channel_cfgs and returns the data saved in the database.
     * @param {channel_cfgCreateManyAndReturnArgs} args - Arguments to create many Channel_cfgs.
     * @example
     * // Create many Channel_cfgs
     * const channel_cfg = await prisma.channel_cfg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channel_cfgs and only return the `id`
     * const channel_cfgWithIdOnly = await prisma.channel_cfg.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends channel_cfgCreateManyAndReturnArgs>(args?: SelectSubset<T, channel_cfgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Channel_cfg.
     * @param {channel_cfgDeleteArgs} args - Arguments to delete one Channel_cfg.
     * @example
     * // Delete one Channel_cfg
     * const Channel_cfg = await prisma.channel_cfg.delete({
     *   where: {
     *     // ... filter to delete one Channel_cfg
     *   }
     * })
     * 
     */
    delete<T extends channel_cfgDeleteArgs>(args: SelectSubset<T, channel_cfgDeleteArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Channel_cfg.
     * @param {channel_cfgUpdateArgs} args - Arguments to update one Channel_cfg.
     * @example
     * // Update one Channel_cfg
     * const channel_cfg = await prisma.channel_cfg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends channel_cfgUpdateArgs>(args: SelectSubset<T, channel_cfgUpdateArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Channel_cfgs.
     * @param {channel_cfgDeleteManyArgs} args - Arguments to filter Channel_cfgs to delete.
     * @example
     * // Delete a few Channel_cfgs
     * const { count } = await prisma.channel_cfg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends channel_cfgDeleteManyArgs>(args?: SelectSubset<T, channel_cfgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channel_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channel_cfgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channel_cfgs
     * const channel_cfg = await prisma.channel_cfg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends channel_cfgUpdateManyArgs>(args: SelectSubset<T, channel_cfgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel_cfg.
     * @param {channel_cfgUpsertArgs} args - Arguments to update or create a Channel_cfg.
     * @example
     * // Update or create a Channel_cfg
     * const channel_cfg = await prisma.channel_cfg.upsert({
     *   create: {
     *     // ... data to create a Channel_cfg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel_cfg we want to update
     *   }
     * })
     */
    upsert<T extends channel_cfgUpsertArgs>(args: SelectSubset<T, channel_cfgUpsertArgs<ExtArgs>>): Prisma__channel_cfgClient<$Result.GetResult<Prisma.$channel_cfgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Channel_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channel_cfgCountArgs} args - Arguments to filter Channel_cfgs to count.
     * @example
     * // Count the number of Channel_cfgs
     * const count = await prisma.channel_cfg.count({
     *   where: {
     *     // ... the filter for the Channel_cfgs we want to count
     *   }
     * })
    **/
    count<T extends channel_cfgCountArgs>(
      args?: Subset<T, channel_cfgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Channel_cfgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Channel_cfgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Channel_cfgAggregateArgs>(args: Subset<T, Channel_cfgAggregateArgs>): Prisma.PrismaPromise<GetChannel_cfgAggregateType<T>>

    /**
     * Group by Channel_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channel_cfgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends channel_cfgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: channel_cfgGroupByArgs['orderBy'] }
        : { orderBy?: channel_cfgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, channel_cfgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannel_cfgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the channel_cfg model
   */
  readonly fields: channel_cfgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for channel_cfg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__channel_cfgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the channel_cfg model
   */ 
  interface channel_cfgFieldRefs {
    readonly id: FieldRef<"channel_cfg", 'String'>
    readonly name: FieldRef<"channel_cfg", 'String'>
    readonly camera_mapping_id: FieldRef<"channel_cfg", 'String'>
    readonly search_tag: FieldRef<"channel_cfg", 'String'>
    readonly cfg_data: FieldRef<"channel_cfg", 'Bytes'>
    readonly user_id_owner: FieldRef<"channel_cfg", 'String'>
    readonly time_created: FieldRef<"channel_cfg", 'DateTime'>
    readonly time_modified: FieldRef<"channel_cfg", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * channel_cfg findUnique
   */
  export type channel_cfgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which channel_cfg to fetch.
     */
    where: channel_cfgWhereUniqueInput
  }

  /**
   * channel_cfg findUniqueOrThrow
   */
  export type channel_cfgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which channel_cfg to fetch.
     */
    where: channel_cfgWhereUniqueInput
  }

  /**
   * channel_cfg findFirst
   */
  export type channel_cfgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which channel_cfg to fetch.
     */
    where?: channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channel_cfgs to fetch.
     */
    orderBy?: channel_cfgOrderByWithRelationInput | channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channel_cfgs.
     */
    cursor?: channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channel_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channel_cfgs.
     */
    distinct?: Channel_cfgScalarFieldEnum | Channel_cfgScalarFieldEnum[]
  }

  /**
   * channel_cfg findFirstOrThrow
   */
  export type channel_cfgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which channel_cfg to fetch.
     */
    where?: channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channel_cfgs to fetch.
     */
    orderBy?: channel_cfgOrderByWithRelationInput | channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channel_cfgs.
     */
    cursor?: channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channel_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channel_cfgs.
     */
    distinct?: Channel_cfgScalarFieldEnum | Channel_cfgScalarFieldEnum[]
  }

  /**
   * channel_cfg findMany
   */
  export type channel_cfgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which channel_cfgs to fetch.
     */
    where?: channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channel_cfgs to fetch.
     */
    orderBy?: channel_cfgOrderByWithRelationInput | channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing channel_cfgs.
     */
    cursor?: channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channel_cfgs.
     */
    skip?: number
    distinct?: Channel_cfgScalarFieldEnum | Channel_cfgScalarFieldEnum[]
  }

  /**
   * channel_cfg create
   */
  export type channel_cfgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * The data needed to create a channel_cfg.
     */
    data: XOR<channel_cfgCreateInput, channel_cfgUncheckedCreateInput>
  }

  /**
   * channel_cfg createMany
   */
  export type channel_cfgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many channel_cfgs.
     */
    data: channel_cfgCreateManyInput | channel_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * channel_cfg createManyAndReturn
   */
  export type channel_cfgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many channel_cfgs.
     */
    data: channel_cfgCreateManyInput | channel_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * channel_cfg update
   */
  export type channel_cfgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * The data needed to update a channel_cfg.
     */
    data: XOR<channel_cfgUpdateInput, channel_cfgUncheckedUpdateInput>
    /**
     * Choose, which channel_cfg to update.
     */
    where: channel_cfgWhereUniqueInput
  }

  /**
   * channel_cfg updateMany
   */
  export type channel_cfgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update channel_cfgs.
     */
    data: XOR<channel_cfgUpdateManyMutationInput, channel_cfgUncheckedUpdateManyInput>
    /**
     * Filter which channel_cfgs to update
     */
    where?: channel_cfgWhereInput
  }

  /**
   * channel_cfg upsert
   */
  export type channel_cfgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * The filter to search for the channel_cfg to update in case it exists.
     */
    where: channel_cfgWhereUniqueInput
    /**
     * In case the channel_cfg found by the `where` argument doesn't exist, create a new channel_cfg with this data.
     */
    create: XOR<channel_cfgCreateInput, channel_cfgUncheckedCreateInput>
    /**
     * In case the channel_cfg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<channel_cfgUpdateInput, channel_cfgUncheckedUpdateInput>
  }

  /**
   * channel_cfg delete
   */
  export type channel_cfgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
    /**
     * Filter which channel_cfg to delete.
     */
    where: channel_cfgWhereUniqueInput
  }

  /**
   * channel_cfg deleteMany
   */
  export type channel_cfgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channel_cfgs to delete
     */
    where?: channel_cfgWhereInput
  }

  /**
   * channel_cfg without action
   */
  export type channel_cfgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel_cfg
     */
    select?: channel_cfgSelect<ExtArgs> | null
  }


  /**
   * Model device_owner_cfg
   */

  export type AggregateDevice_owner_cfg = {
    _count: Device_owner_cfgCountAggregateOutputType | null
    _min: Device_owner_cfgMinAggregateOutputType | null
    _max: Device_owner_cfgMaxAggregateOutputType | null
  }

  export type Device_owner_cfgMinAggregateOutputType = {
    id: string | null
    name: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Device_owner_cfgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Device_owner_cfgCountAggregateOutputType = {
    id: number
    name: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Device_owner_cfgMinAggregateInputType = {
    id?: true
    name?: true
    time_created?: true
    time_modified?: true
  }

  export type Device_owner_cfgMaxAggregateInputType = {
    id?: true
    name?: true
    time_created?: true
    time_modified?: true
  }

  export type Device_owner_cfgCountAggregateInputType = {
    id?: true
    name?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Device_owner_cfgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_owner_cfg to aggregate.
     */
    where?: device_owner_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_owner_cfgs to fetch.
     */
    orderBy?: device_owner_cfgOrderByWithRelationInput | device_owner_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: device_owner_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_owner_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_owner_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned device_owner_cfgs
    **/
    _count?: true | Device_owner_cfgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Device_owner_cfgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Device_owner_cfgMaxAggregateInputType
  }

  export type GetDevice_owner_cfgAggregateType<T extends Device_owner_cfgAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice_owner_cfg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice_owner_cfg[P]>
      : GetScalarType<T[P], AggregateDevice_owner_cfg[P]>
  }




  export type device_owner_cfgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: device_owner_cfgWhereInput
    orderBy?: device_owner_cfgOrderByWithAggregationInput | device_owner_cfgOrderByWithAggregationInput[]
    by: Device_owner_cfgScalarFieldEnum[] | Device_owner_cfgScalarFieldEnum
    having?: device_owner_cfgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Device_owner_cfgCountAggregateInputType | true
    _min?: Device_owner_cfgMinAggregateInputType
    _max?: Device_owner_cfgMaxAggregateInputType
  }

  export type Device_owner_cfgGroupByOutputType = {
    id: string
    name: string | null
    time_created: Date | null
    time_modified: Date | null
    _count: Device_owner_cfgCountAggregateOutputType | null
    _min: Device_owner_cfgMinAggregateOutputType | null
    _max: Device_owner_cfgMaxAggregateOutputType | null
  }

  type GetDevice_owner_cfgGroupByPayload<T extends device_owner_cfgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Device_owner_cfgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Device_owner_cfgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Device_owner_cfgGroupByOutputType[P]>
            : GetScalarType<T[P], Device_owner_cfgGroupByOutputType[P]>
        }
      >
    >


  export type device_owner_cfgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["device_owner_cfg"]>

  export type device_owner_cfgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["device_owner_cfg"]>

  export type device_owner_cfgSelectScalar = {
    id?: boolean
    name?: boolean
    time_created?: boolean
    time_modified?: boolean
  }


  export type $device_owner_cfgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device_owner_cfg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      time_created: Date | null
      time_modified: Date | null
    }, ExtArgs["result"]["device_owner_cfg"]>
    composites: {}
  }

  type device_owner_cfgGetPayload<S extends boolean | null | undefined | device_owner_cfgDefaultArgs> = $Result.GetResult<Prisma.$device_owner_cfgPayload, S>

  type device_owner_cfgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<device_owner_cfgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Device_owner_cfgCountAggregateInputType | true
    }

  export interface device_owner_cfgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device_owner_cfg'], meta: { name: 'device_owner_cfg' } }
    /**
     * Find zero or one Device_owner_cfg that matches the filter.
     * @param {device_owner_cfgFindUniqueArgs} args - Arguments to find a Device_owner_cfg
     * @example
     * // Get one Device_owner_cfg
     * const device_owner_cfg = await prisma.device_owner_cfg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends device_owner_cfgFindUniqueArgs>(args: SelectSubset<T, device_owner_cfgFindUniqueArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Device_owner_cfg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {device_owner_cfgFindUniqueOrThrowArgs} args - Arguments to find a Device_owner_cfg
     * @example
     * // Get one Device_owner_cfg
     * const device_owner_cfg = await prisma.device_owner_cfg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends device_owner_cfgFindUniqueOrThrowArgs>(args: SelectSubset<T, device_owner_cfgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Device_owner_cfg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_owner_cfgFindFirstArgs} args - Arguments to find a Device_owner_cfg
     * @example
     * // Get one Device_owner_cfg
     * const device_owner_cfg = await prisma.device_owner_cfg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends device_owner_cfgFindFirstArgs>(args?: SelectSubset<T, device_owner_cfgFindFirstArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Device_owner_cfg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_owner_cfgFindFirstOrThrowArgs} args - Arguments to find a Device_owner_cfg
     * @example
     * // Get one Device_owner_cfg
     * const device_owner_cfg = await prisma.device_owner_cfg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends device_owner_cfgFindFirstOrThrowArgs>(args?: SelectSubset<T, device_owner_cfgFindFirstOrThrowArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Device_owner_cfgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_owner_cfgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Device_owner_cfgs
     * const device_owner_cfgs = await prisma.device_owner_cfg.findMany()
     * 
     * // Get first 10 Device_owner_cfgs
     * const device_owner_cfgs = await prisma.device_owner_cfg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const device_owner_cfgWithIdOnly = await prisma.device_owner_cfg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends device_owner_cfgFindManyArgs>(args?: SelectSubset<T, device_owner_cfgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Device_owner_cfg.
     * @param {device_owner_cfgCreateArgs} args - Arguments to create a Device_owner_cfg.
     * @example
     * // Create one Device_owner_cfg
     * const Device_owner_cfg = await prisma.device_owner_cfg.create({
     *   data: {
     *     // ... data to create a Device_owner_cfg
     *   }
     * })
     * 
     */
    create<T extends device_owner_cfgCreateArgs>(args: SelectSubset<T, device_owner_cfgCreateArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Device_owner_cfgs.
     * @param {device_owner_cfgCreateManyArgs} args - Arguments to create many Device_owner_cfgs.
     * @example
     * // Create many Device_owner_cfgs
     * const device_owner_cfg = await prisma.device_owner_cfg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends device_owner_cfgCreateManyArgs>(args?: SelectSubset<T, device_owner_cfgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Device_owner_cfgs and returns the data saved in the database.
     * @param {device_owner_cfgCreateManyAndReturnArgs} args - Arguments to create many Device_owner_cfgs.
     * @example
     * // Create many Device_owner_cfgs
     * const device_owner_cfg = await prisma.device_owner_cfg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Device_owner_cfgs and only return the `id`
     * const device_owner_cfgWithIdOnly = await prisma.device_owner_cfg.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends device_owner_cfgCreateManyAndReturnArgs>(args?: SelectSubset<T, device_owner_cfgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Device_owner_cfg.
     * @param {device_owner_cfgDeleteArgs} args - Arguments to delete one Device_owner_cfg.
     * @example
     * // Delete one Device_owner_cfg
     * const Device_owner_cfg = await prisma.device_owner_cfg.delete({
     *   where: {
     *     // ... filter to delete one Device_owner_cfg
     *   }
     * })
     * 
     */
    delete<T extends device_owner_cfgDeleteArgs>(args: SelectSubset<T, device_owner_cfgDeleteArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Device_owner_cfg.
     * @param {device_owner_cfgUpdateArgs} args - Arguments to update one Device_owner_cfg.
     * @example
     * // Update one Device_owner_cfg
     * const device_owner_cfg = await prisma.device_owner_cfg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends device_owner_cfgUpdateArgs>(args: SelectSubset<T, device_owner_cfgUpdateArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Device_owner_cfgs.
     * @param {device_owner_cfgDeleteManyArgs} args - Arguments to filter Device_owner_cfgs to delete.
     * @example
     * // Delete a few Device_owner_cfgs
     * const { count } = await prisma.device_owner_cfg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends device_owner_cfgDeleteManyArgs>(args?: SelectSubset<T, device_owner_cfgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Device_owner_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_owner_cfgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Device_owner_cfgs
     * const device_owner_cfg = await prisma.device_owner_cfg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends device_owner_cfgUpdateManyArgs>(args: SelectSubset<T, device_owner_cfgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device_owner_cfg.
     * @param {device_owner_cfgUpsertArgs} args - Arguments to update or create a Device_owner_cfg.
     * @example
     * // Update or create a Device_owner_cfg
     * const device_owner_cfg = await prisma.device_owner_cfg.upsert({
     *   create: {
     *     // ... data to create a Device_owner_cfg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device_owner_cfg we want to update
     *   }
     * })
     */
    upsert<T extends device_owner_cfgUpsertArgs>(args: SelectSubset<T, device_owner_cfgUpsertArgs<ExtArgs>>): Prisma__device_owner_cfgClient<$Result.GetResult<Prisma.$device_owner_cfgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Device_owner_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_owner_cfgCountArgs} args - Arguments to filter Device_owner_cfgs to count.
     * @example
     * // Count the number of Device_owner_cfgs
     * const count = await prisma.device_owner_cfg.count({
     *   where: {
     *     // ... the filter for the Device_owner_cfgs we want to count
     *   }
     * })
    **/
    count<T extends device_owner_cfgCountArgs>(
      args?: Subset<T, device_owner_cfgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Device_owner_cfgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device_owner_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Device_owner_cfgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Device_owner_cfgAggregateArgs>(args: Subset<T, Device_owner_cfgAggregateArgs>): Prisma.PrismaPromise<GetDevice_owner_cfgAggregateType<T>>

    /**
     * Group by Device_owner_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {device_owner_cfgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends device_owner_cfgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: device_owner_cfgGroupByArgs['orderBy'] }
        : { orderBy?: device_owner_cfgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, device_owner_cfgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDevice_owner_cfgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device_owner_cfg model
   */
  readonly fields: device_owner_cfgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device_owner_cfg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__device_owner_cfgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the device_owner_cfg model
   */ 
  interface device_owner_cfgFieldRefs {
    readonly id: FieldRef<"device_owner_cfg", 'String'>
    readonly name: FieldRef<"device_owner_cfg", 'String'>
    readonly time_created: FieldRef<"device_owner_cfg", 'DateTime'>
    readonly time_modified: FieldRef<"device_owner_cfg", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * device_owner_cfg findUnique
   */
  export type device_owner_cfgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * Filter, which device_owner_cfg to fetch.
     */
    where: device_owner_cfgWhereUniqueInput
  }

  /**
   * device_owner_cfg findUniqueOrThrow
   */
  export type device_owner_cfgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * Filter, which device_owner_cfg to fetch.
     */
    where: device_owner_cfgWhereUniqueInput
  }

  /**
   * device_owner_cfg findFirst
   */
  export type device_owner_cfgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * Filter, which device_owner_cfg to fetch.
     */
    where?: device_owner_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_owner_cfgs to fetch.
     */
    orderBy?: device_owner_cfgOrderByWithRelationInput | device_owner_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_owner_cfgs.
     */
    cursor?: device_owner_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_owner_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_owner_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_owner_cfgs.
     */
    distinct?: Device_owner_cfgScalarFieldEnum | Device_owner_cfgScalarFieldEnum[]
  }

  /**
   * device_owner_cfg findFirstOrThrow
   */
  export type device_owner_cfgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * Filter, which device_owner_cfg to fetch.
     */
    where?: device_owner_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_owner_cfgs to fetch.
     */
    orderBy?: device_owner_cfgOrderByWithRelationInput | device_owner_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for device_owner_cfgs.
     */
    cursor?: device_owner_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_owner_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_owner_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of device_owner_cfgs.
     */
    distinct?: Device_owner_cfgScalarFieldEnum | Device_owner_cfgScalarFieldEnum[]
  }

  /**
   * device_owner_cfg findMany
   */
  export type device_owner_cfgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * Filter, which device_owner_cfgs to fetch.
     */
    where?: device_owner_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of device_owner_cfgs to fetch.
     */
    orderBy?: device_owner_cfgOrderByWithRelationInput | device_owner_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing device_owner_cfgs.
     */
    cursor?: device_owner_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` device_owner_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` device_owner_cfgs.
     */
    skip?: number
    distinct?: Device_owner_cfgScalarFieldEnum | Device_owner_cfgScalarFieldEnum[]
  }

  /**
   * device_owner_cfg create
   */
  export type device_owner_cfgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * The data needed to create a device_owner_cfg.
     */
    data: XOR<device_owner_cfgCreateInput, device_owner_cfgUncheckedCreateInput>
  }

  /**
   * device_owner_cfg createMany
   */
  export type device_owner_cfgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many device_owner_cfgs.
     */
    data: device_owner_cfgCreateManyInput | device_owner_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device_owner_cfg createManyAndReturn
   */
  export type device_owner_cfgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many device_owner_cfgs.
     */
    data: device_owner_cfgCreateManyInput | device_owner_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device_owner_cfg update
   */
  export type device_owner_cfgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * The data needed to update a device_owner_cfg.
     */
    data: XOR<device_owner_cfgUpdateInput, device_owner_cfgUncheckedUpdateInput>
    /**
     * Choose, which device_owner_cfg to update.
     */
    where: device_owner_cfgWhereUniqueInput
  }

  /**
   * device_owner_cfg updateMany
   */
  export type device_owner_cfgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update device_owner_cfgs.
     */
    data: XOR<device_owner_cfgUpdateManyMutationInput, device_owner_cfgUncheckedUpdateManyInput>
    /**
     * Filter which device_owner_cfgs to update
     */
    where?: device_owner_cfgWhereInput
  }

  /**
   * device_owner_cfg upsert
   */
  export type device_owner_cfgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * The filter to search for the device_owner_cfg to update in case it exists.
     */
    where: device_owner_cfgWhereUniqueInput
    /**
     * In case the device_owner_cfg found by the `where` argument doesn't exist, create a new device_owner_cfg with this data.
     */
    create: XOR<device_owner_cfgCreateInput, device_owner_cfgUncheckedCreateInput>
    /**
     * In case the device_owner_cfg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<device_owner_cfgUpdateInput, device_owner_cfgUncheckedUpdateInput>
  }

  /**
   * device_owner_cfg delete
   */
  export type device_owner_cfgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
    /**
     * Filter which device_owner_cfg to delete.
     */
    where: device_owner_cfgWhereUniqueInput
  }

  /**
   * device_owner_cfg deleteMany
   */
  export type device_owner_cfgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device_owner_cfgs to delete
     */
    where?: device_owner_cfgWhereInput
  }

  /**
   * device_owner_cfg without action
   */
  export type device_owner_cfgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device_owner_cfg
     */
    select?: device_owner_cfgSelect<ExtArgs> | null
  }


  /**
   * Model event_vms_sync_parent
   */

  export type AggregateEvent_vms_sync_parent = {
    _count: Event_vms_sync_parentCountAggregateOutputType | null
    _avg: Event_vms_sync_parentAvgAggregateOutputType | null
    _sum: Event_vms_sync_parentSumAggregateOutputType | null
    _min: Event_vms_sync_parentMinAggregateOutputType | null
    _max: Event_vms_sync_parentMaxAggregateOutputType | null
  }

  export type Event_vms_sync_parentAvgAggregateOutputType = {
    partition_key: number | null
  }

  export type Event_vms_sync_parentSumAggregateOutputType = {
    partition_key: number | null
  }

  export type Event_vms_sync_parentMinAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    event_vms_id: string | null
    source_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Event_vms_sync_parentMaxAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    event_vms_id: string | null
    source_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Event_vms_sync_parentCountAggregateOutputType = {
    id: number
    lcms_server_id: number
    event_vms_id: number
    source_id: number
    event_time: number
    data_file_path: number
    partition_key: number
    _all: number
  }


  export type Event_vms_sync_parentAvgAggregateInputType = {
    partition_key?: true
  }

  export type Event_vms_sync_parentSumAggregateInputType = {
    partition_key?: true
  }

  export type Event_vms_sync_parentMinAggregateInputType = {
    id?: true
    lcms_server_id?: true
    event_vms_id?: true
    source_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Event_vms_sync_parentMaxAggregateInputType = {
    id?: true
    lcms_server_id?: true
    event_vms_id?: true
    source_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Event_vms_sync_parentCountAggregateInputType = {
    id?: true
    lcms_server_id?: true
    event_vms_id?: true
    source_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
    _all?: true
  }

  export type Event_vms_sync_parentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_vms_sync_parent to aggregate.
     */
    where?: event_vms_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_parents to fetch.
     */
    orderBy?: event_vms_sync_parentOrderByWithRelationInput | event_vms_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_vms_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_vms_sync_parents
    **/
    _count?: true | Event_vms_sync_parentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_vms_sync_parentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_vms_sync_parentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_vms_sync_parentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_vms_sync_parentMaxAggregateInputType
  }

  export type GetEvent_vms_sync_parentAggregateType<T extends Event_vms_sync_parentAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_vms_sync_parent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_vms_sync_parent[P]>
      : GetScalarType<T[P], AggregateEvent_vms_sync_parent[P]>
  }




  export type event_vms_sync_parentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_vms_sync_parentWhereInput
    orderBy?: event_vms_sync_parentOrderByWithAggregationInput | event_vms_sync_parentOrderByWithAggregationInput[]
    by: Event_vms_sync_parentScalarFieldEnum[] | Event_vms_sync_parentScalarFieldEnum
    having?: event_vms_sync_parentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_vms_sync_parentCountAggregateInputType | true
    _avg?: Event_vms_sync_parentAvgAggregateInputType
    _sum?: Event_vms_sync_parentSumAggregateInputType
    _min?: Event_vms_sync_parentMinAggregateInputType
    _max?: Event_vms_sync_parentMaxAggregateInputType
  }

  export type Event_vms_sync_parentGroupByOutputType = {
    id: string
    lcms_server_id: string | null
    event_vms_id: string | null
    source_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number
    _count: Event_vms_sync_parentCountAggregateOutputType | null
    _avg: Event_vms_sync_parentAvgAggregateOutputType | null
    _sum: Event_vms_sync_parentSumAggregateOutputType | null
    _min: Event_vms_sync_parentMinAggregateOutputType | null
    _max: Event_vms_sync_parentMaxAggregateOutputType | null
  }

  type GetEvent_vms_sync_parentGroupByPayload<T extends event_vms_sync_parentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_vms_sync_parentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_vms_sync_parentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_vms_sync_parentGroupByOutputType[P]>
            : GetScalarType<T[P], Event_vms_sync_parentGroupByOutputType[P]>
        }
      >
    >


  export type event_vms_sync_parentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    event_vms_id?: boolean
    source_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["event_vms_sync_parent"]>

  export type event_vms_sync_parentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    event_vms_id?: boolean
    source_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["event_vms_sync_parent"]>

  export type event_vms_sync_parentSelectScalar = {
    id?: boolean
    lcms_server_id?: boolean
    event_vms_id?: boolean
    source_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }


  export type $event_vms_sync_parentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_vms_sync_parent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcms_server_id: string | null
      event_vms_id: string | null
      source_id: string | null
      event_time: Date | null
      data_file_path: string | null
      partition_key: number
    }, ExtArgs["result"]["event_vms_sync_parent"]>
    composites: {}
  }

  type event_vms_sync_parentGetPayload<S extends boolean | null | undefined | event_vms_sync_parentDefaultArgs> = $Result.GetResult<Prisma.$event_vms_sync_parentPayload, S>

  type event_vms_sync_parentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<event_vms_sync_parentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Event_vms_sync_parentCountAggregateInputType | true
    }

  export interface event_vms_sync_parentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_vms_sync_parent'], meta: { name: 'event_vms_sync_parent' } }
    /**
     * Find zero or one Event_vms_sync_parent that matches the filter.
     * @param {event_vms_sync_parentFindUniqueArgs} args - Arguments to find a Event_vms_sync_parent
     * @example
     * // Get one Event_vms_sync_parent
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends event_vms_sync_parentFindUniqueArgs>(args: SelectSubset<T, event_vms_sync_parentFindUniqueArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event_vms_sync_parent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {event_vms_sync_parentFindUniqueOrThrowArgs} args - Arguments to find a Event_vms_sync_parent
     * @example
     * // Get one Event_vms_sync_parent
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends event_vms_sync_parentFindUniqueOrThrowArgs>(args: SelectSubset<T, event_vms_sync_parentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event_vms_sync_parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_parentFindFirstArgs} args - Arguments to find a Event_vms_sync_parent
     * @example
     * // Get one Event_vms_sync_parent
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends event_vms_sync_parentFindFirstArgs>(args?: SelectSubset<T, event_vms_sync_parentFindFirstArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event_vms_sync_parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_parentFindFirstOrThrowArgs} args - Arguments to find a Event_vms_sync_parent
     * @example
     * // Get one Event_vms_sync_parent
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends event_vms_sync_parentFindFirstOrThrowArgs>(args?: SelectSubset<T, event_vms_sync_parentFindFirstOrThrowArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Event_vms_sync_parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_parentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_vms_sync_parents
     * const event_vms_sync_parents = await prisma.event_vms_sync_parent.findMany()
     * 
     * // Get first 10 Event_vms_sync_parents
     * const event_vms_sync_parents = await prisma.event_vms_sync_parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_vms_sync_parentWithIdOnly = await prisma.event_vms_sync_parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends event_vms_sync_parentFindManyArgs>(args?: SelectSubset<T, event_vms_sync_parentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event_vms_sync_parent.
     * @param {event_vms_sync_parentCreateArgs} args - Arguments to create a Event_vms_sync_parent.
     * @example
     * // Create one Event_vms_sync_parent
     * const Event_vms_sync_parent = await prisma.event_vms_sync_parent.create({
     *   data: {
     *     // ... data to create a Event_vms_sync_parent
     *   }
     * })
     * 
     */
    create<T extends event_vms_sync_parentCreateArgs>(args: SelectSubset<T, event_vms_sync_parentCreateArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Event_vms_sync_parents.
     * @param {event_vms_sync_parentCreateManyArgs} args - Arguments to create many Event_vms_sync_parents.
     * @example
     * // Create many Event_vms_sync_parents
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends event_vms_sync_parentCreateManyArgs>(args?: SelectSubset<T, event_vms_sync_parentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_vms_sync_parents and returns the data saved in the database.
     * @param {event_vms_sync_parentCreateManyAndReturnArgs} args - Arguments to create many Event_vms_sync_parents.
     * @example
     * // Create many Event_vms_sync_parents
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_vms_sync_parents and only return the `id`
     * const event_vms_sync_parentWithIdOnly = await prisma.event_vms_sync_parent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends event_vms_sync_parentCreateManyAndReturnArgs>(args?: SelectSubset<T, event_vms_sync_parentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event_vms_sync_parent.
     * @param {event_vms_sync_parentDeleteArgs} args - Arguments to delete one Event_vms_sync_parent.
     * @example
     * // Delete one Event_vms_sync_parent
     * const Event_vms_sync_parent = await prisma.event_vms_sync_parent.delete({
     *   where: {
     *     // ... filter to delete one Event_vms_sync_parent
     *   }
     * })
     * 
     */
    delete<T extends event_vms_sync_parentDeleteArgs>(args: SelectSubset<T, event_vms_sync_parentDeleteArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event_vms_sync_parent.
     * @param {event_vms_sync_parentUpdateArgs} args - Arguments to update one Event_vms_sync_parent.
     * @example
     * // Update one Event_vms_sync_parent
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends event_vms_sync_parentUpdateArgs>(args: SelectSubset<T, event_vms_sync_parentUpdateArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Event_vms_sync_parents.
     * @param {event_vms_sync_parentDeleteManyArgs} args - Arguments to filter Event_vms_sync_parents to delete.
     * @example
     * // Delete a few Event_vms_sync_parents
     * const { count } = await prisma.event_vms_sync_parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends event_vms_sync_parentDeleteManyArgs>(args?: SelectSubset<T, event_vms_sync_parentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_vms_sync_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_parentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_vms_sync_parents
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends event_vms_sync_parentUpdateManyArgs>(args: SelectSubset<T, event_vms_sync_parentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_vms_sync_parent.
     * @param {event_vms_sync_parentUpsertArgs} args - Arguments to update or create a Event_vms_sync_parent.
     * @example
     * // Update or create a Event_vms_sync_parent
     * const event_vms_sync_parent = await prisma.event_vms_sync_parent.upsert({
     *   create: {
     *     // ... data to create a Event_vms_sync_parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_vms_sync_parent we want to update
     *   }
     * })
     */
    upsert<T extends event_vms_sync_parentUpsertArgs>(args: SelectSubset<T, event_vms_sync_parentUpsertArgs<ExtArgs>>): Prisma__event_vms_sync_parentClient<$Result.GetResult<Prisma.$event_vms_sync_parentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Event_vms_sync_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_parentCountArgs} args - Arguments to filter Event_vms_sync_parents to count.
     * @example
     * // Count the number of Event_vms_sync_parents
     * const count = await prisma.event_vms_sync_parent.count({
     *   where: {
     *     // ... the filter for the Event_vms_sync_parents we want to count
     *   }
     * })
    **/
    count<T extends event_vms_sync_parentCountArgs>(
      args?: Subset<T, event_vms_sync_parentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_vms_sync_parentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_vms_sync_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_vms_sync_parentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_vms_sync_parentAggregateArgs>(args: Subset<T, Event_vms_sync_parentAggregateArgs>): Prisma.PrismaPromise<GetEvent_vms_sync_parentAggregateType<T>>

    /**
     * Group by Event_vms_sync_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_parentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends event_vms_sync_parentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_vms_sync_parentGroupByArgs['orderBy'] }
        : { orderBy?: event_vms_sync_parentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, event_vms_sync_parentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_vms_sync_parentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_vms_sync_parent model
   */
  readonly fields: event_vms_sync_parentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_vms_sync_parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_vms_sync_parentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the event_vms_sync_parent model
   */ 
  interface event_vms_sync_parentFieldRefs {
    readonly id: FieldRef<"event_vms_sync_parent", 'String'>
    readonly lcms_server_id: FieldRef<"event_vms_sync_parent", 'String'>
    readonly event_vms_id: FieldRef<"event_vms_sync_parent", 'String'>
    readonly source_id: FieldRef<"event_vms_sync_parent", 'String'>
    readonly event_time: FieldRef<"event_vms_sync_parent", 'DateTime'>
    readonly data_file_path: FieldRef<"event_vms_sync_parent", 'String'>
    readonly partition_key: FieldRef<"event_vms_sync_parent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * event_vms_sync_parent findUnique
   */
  export type event_vms_sync_parentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_parent to fetch.
     */
    where: event_vms_sync_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_parent findUniqueOrThrow
   */
  export type event_vms_sync_parentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_parent to fetch.
     */
    where: event_vms_sync_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_parent findFirst
   */
  export type event_vms_sync_parentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_parent to fetch.
     */
    where?: event_vms_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_parents to fetch.
     */
    orderBy?: event_vms_sync_parentOrderByWithRelationInput | event_vms_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_vms_sync_parents.
     */
    cursor?: event_vms_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_vms_sync_parents.
     */
    distinct?: Event_vms_sync_parentScalarFieldEnum | Event_vms_sync_parentScalarFieldEnum[]
  }

  /**
   * event_vms_sync_parent findFirstOrThrow
   */
  export type event_vms_sync_parentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_parent to fetch.
     */
    where?: event_vms_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_parents to fetch.
     */
    orderBy?: event_vms_sync_parentOrderByWithRelationInput | event_vms_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_vms_sync_parents.
     */
    cursor?: event_vms_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_vms_sync_parents.
     */
    distinct?: Event_vms_sync_parentScalarFieldEnum | Event_vms_sync_parentScalarFieldEnum[]
  }

  /**
   * event_vms_sync_parent findMany
   */
  export type event_vms_sync_parentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_parents to fetch.
     */
    where?: event_vms_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_parents to fetch.
     */
    orderBy?: event_vms_sync_parentOrderByWithRelationInput | event_vms_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_vms_sync_parents.
     */
    cursor?: event_vms_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_parents.
     */
    skip?: number
    distinct?: Event_vms_sync_parentScalarFieldEnum | Event_vms_sync_parentScalarFieldEnum[]
  }

  /**
   * event_vms_sync_parent create
   */
  export type event_vms_sync_parentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * The data needed to create a event_vms_sync_parent.
     */
    data: XOR<event_vms_sync_parentCreateInput, event_vms_sync_parentUncheckedCreateInput>
  }

  /**
   * event_vms_sync_parent createMany
   */
  export type event_vms_sync_parentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_vms_sync_parents.
     */
    data: event_vms_sync_parentCreateManyInput | event_vms_sync_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_vms_sync_parent createManyAndReturn
   */
  export type event_vms_sync_parentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many event_vms_sync_parents.
     */
    data: event_vms_sync_parentCreateManyInput | event_vms_sync_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_vms_sync_parent update
   */
  export type event_vms_sync_parentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * The data needed to update a event_vms_sync_parent.
     */
    data: XOR<event_vms_sync_parentUpdateInput, event_vms_sync_parentUncheckedUpdateInput>
    /**
     * Choose, which event_vms_sync_parent to update.
     */
    where: event_vms_sync_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_parent updateMany
   */
  export type event_vms_sync_parentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_vms_sync_parents.
     */
    data: XOR<event_vms_sync_parentUpdateManyMutationInput, event_vms_sync_parentUncheckedUpdateManyInput>
    /**
     * Filter which event_vms_sync_parents to update
     */
    where?: event_vms_sync_parentWhereInput
  }

  /**
   * event_vms_sync_parent upsert
   */
  export type event_vms_sync_parentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * The filter to search for the event_vms_sync_parent to update in case it exists.
     */
    where: event_vms_sync_parentWhereUniqueInput
    /**
     * In case the event_vms_sync_parent found by the `where` argument doesn't exist, create a new event_vms_sync_parent with this data.
     */
    create: XOR<event_vms_sync_parentCreateInput, event_vms_sync_parentUncheckedCreateInput>
    /**
     * In case the event_vms_sync_parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_vms_sync_parentUpdateInput, event_vms_sync_parentUncheckedUpdateInput>
  }

  /**
   * event_vms_sync_parent delete
   */
  export type event_vms_sync_parentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
    /**
     * Filter which event_vms_sync_parent to delete.
     */
    where: event_vms_sync_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_parent deleteMany
   */
  export type event_vms_sync_parentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_vms_sync_parents to delete
     */
    where?: event_vms_sync_parentWhereInput
  }

  /**
   * event_vms_sync_parent without action
   */
  export type event_vms_sync_parentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_parent
     */
    select?: event_vms_sync_parentSelect<ExtArgs> | null
  }


  /**
   * Model event_vms_sync_update_parent
   */

  export type AggregateEvent_vms_sync_update_parent = {
    _count: Event_vms_sync_update_parentCountAggregateOutputType | null
    _avg: Event_vms_sync_update_parentAvgAggregateOutputType | null
    _sum: Event_vms_sync_update_parentSumAggregateOutputType | null
    _min: Event_vms_sync_update_parentMinAggregateOutputType | null
    _max: Event_vms_sync_update_parentMaxAggregateOutputType | null
  }

  export type Event_vms_sync_update_parentAvgAggregateOutputType = {
    index: number | null
    update_table_type: number | null
    partition_key: number | null
  }

  export type Event_vms_sync_update_parentSumAggregateOutputType = {
    index: bigint | null
    update_table_type: number | null
    partition_key: number | null
  }

  export type Event_vms_sync_update_parentMinAggregateOutputType = {
    index: bigint | null
    update_table_type: number | null
    lcms_server_id: string | null
    event_id: string | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Event_vms_sync_update_parentMaxAggregateOutputType = {
    index: bigint | null
    update_table_type: number | null
    lcms_server_id: string | null
    event_id: string | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Event_vms_sync_update_parentCountAggregateOutputType = {
    index: number
    update_table_type: number
    lcms_server_id: number
    event_id: number
    data_file_path: number
    partition_key: number
    _all: number
  }


  export type Event_vms_sync_update_parentAvgAggregateInputType = {
    index?: true
    update_table_type?: true
    partition_key?: true
  }

  export type Event_vms_sync_update_parentSumAggregateInputType = {
    index?: true
    update_table_type?: true
    partition_key?: true
  }

  export type Event_vms_sync_update_parentMinAggregateInputType = {
    index?: true
    update_table_type?: true
    lcms_server_id?: true
    event_id?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Event_vms_sync_update_parentMaxAggregateInputType = {
    index?: true
    update_table_type?: true
    lcms_server_id?: true
    event_id?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Event_vms_sync_update_parentCountAggregateInputType = {
    index?: true
    update_table_type?: true
    lcms_server_id?: true
    event_id?: true
    data_file_path?: true
    partition_key?: true
    _all?: true
  }

  export type Event_vms_sync_update_parentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_vms_sync_update_parent to aggregate.
     */
    where?: event_vms_sync_update_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_update_parents to fetch.
     */
    orderBy?: event_vms_sync_update_parentOrderByWithRelationInput | event_vms_sync_update_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_vms_sync_update_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_update_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_update_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_vms_sync_update_parents
    **/
    _count?: true | Event_vms_sync_update_parentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_vms_sync_update_parentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_vms_sync_update_parentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_vms_sync_update_parentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_vms_sync_update_parentMaxAggregateInputType
  }

  export type GetEvent_vms_sync_update_parentAggregateType<T extends Event_vms_sync_update_parentAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_vms_sync_update_parent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_vms_sync_update_parent[P]>
      : GetScalarType<T[P], AggregateEvent_vms_sync_update_parent[P]>
  }




  export type event_vms_sync_update_parentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_vms_sync_update_parentWhereInput
    orderBy?: event_vms_sync_update_parentOrderByWithAggregationInput | event_vms_sync_update_parentOrderByWithAggregationInput[]
    by: Event_vms_sync_update_parentScalarFieldEnum[] | Event_vms_sync_update_parentScalarFieldEnum
    having?: event_vms_sync_update_parentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_vms_sync_update_parentCountAggregateInputType | true
    _avg?: Event_vms_sync_update_parentAvgAggregateInputType
    _sum?: Event_vms_sync_update_parentSumAggregateInputType
    _min?: Event_vms_sync_update_parentMinAggregateInputType
    _max?: Event_vms_sync_update_parentMaxAggregateInputType
  }

  export type Event_vms_sync_update_parentGroupByOutputType = {
    index: bigint
    update_table_type: number | null
    lcms_server_id: string | null
    event_id: string | null
    data_file_path: string | null
    partition_key: number
    _count: Event_vms_sync_update_parentCountAggregateOutputType | null
    _avg: Event_vms_sync_update_parentAvgAggregateOutputType | null
    _sum: Event_vms_sync_update_parentSumAggregateOutputType | null
    _min: Event_vms_sync_update_parentMinAggregateOutputType | null
    _max: Event_vms_sync_update_parentMaxAggregateOutputType | null
  }

  type GetEvent_vms_sync_update_parentGroupByPayload<T extends event_vms_sync_update_parentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_vms_sync_update_parentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_vms_sync_update_parentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_vms_sync_update_parentGroupByOutputType[P]>
            : GetScalarType<T[P], Event_vms_sync_update_parentGroupByOutputType[P]>
        }
      >
    >


  export type event_vms_sync_update_parentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    update_table_type?: boolean
    lcms_server_id?: boolean
    event_id?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["event_vms_sync_update_parent"]>

  export type event_vms_sync_update_parentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    update_table_type?: boolean
    lcms_server_id?: boolean
    event_id?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["event_vms_sync_update_parent"]>

  export type event_vms_sync_update_parentSelectScalar = {
    index?: boolean
    update_table_type?: boolean
    lcms_server_id?: boolean
    event_id?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }


  export type $event_vms_sync_update_parentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_vms_sync_update_parent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      update_table_type: number | null
      lcms_server_id: string | null
      event_id: string | null
      data_file_path: string | null
      partition_key: number
    }, ExtArgs["result"]["event_vms_sync_update_parent"]>
    composites: {}
  }

  type event_vms_sync_update_parentGetPayload<S extends boolean | null | undefined | event_vms_sync_update_parentDefaultArgs> = $Result.GetResult<Prisma.$event_vms_sync_update_parentPayload, S>

  type event_vms_sync_update_parentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<event_vms_sync_update_parentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Event_vms_sync_update_parentCountAggregateInputType | true
    }

  export interface event_vms_sync_update_parentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_vms_sync_update_parent'], meta: { name: 'event_vms_sync_update_parent' } }
    /**
     * Find zero or one Event_vms_sync_update_parent that matches the filter.
     * @param {event_vms_sync_update_parentFindUniqueArgs} args - Arguments to find a Event_vms_sync_update_parent
     * @example
     * // Get one Event_vms_sync_update_parent
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends event_vms_sync_update_parentFindUniqueArgs>(args: SelectSubset<T, event_vms_sync_update_parentFindUniqueArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event_vms_sync_update_parent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {event_vms_sync_update_parentFindUniqueOrThrowArgs} args - Arguments to find a Event_vms_sync_update_parent
     * @example
     * // Get one Event_vms_sync_update_parent
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends event_vms_sync_update_parentFindUniqueOrThrowArgs>(args: SelectSubset<T, event_vms_sync_update_parentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event_vms_sync_update_parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_update_parentFindFirstArgs} args - Arguments to find a Event_vms_sync_update_parent
     * @example
     * // Get one Event_vms_sync_update_parent
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends event_vms_sync_update_parentFindFirstArgs>(args?: SelectSubset<T, event_vms_sync_update_parentFindFirstArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event_vms_sync_update_parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_update_parentFindFirstOrThrowArgs} args - Arguments to find a Event_vms_sync_update_parent
     * @example
     * // Get one Event_vms_sync_update_parent
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends event_vms_sync_update_parentFindFirstOrThrowArgs>(args?: SelectSubset<T, event_vms_sync_update_parentFindFirstOrThrowArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Event_vms_sync_update_parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_update_parentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_vms_sync_update_parents
     * const event_vms_sync_update_parents = await prisma.event_vms_sync_update_parent.findMany()
     * 
     * // Get first 10 Event_vms_sync_update_parents
     * const event_vms_sync_update_parents = await prisma.event_vms_sync_update_parent.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const event_vms_sync_update_parentWithIndexOnly = await prisma.event_vms_sync_update_parent.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends event_vms_sync_update_parentFindManyArgs>(args?: SelectSubset<T, event_vms_sync_update_parentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event_vms_sync_update_parent.
     * @param {event_vms_sync_update_parentCreateArgs} args - Arguments to create a Event_vms_sync_update_parent.
     * @example
     * // Create one Event_vms_sync_update_parent
     * const Event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.create({
     *   data: {
     *     // ... data to create a Event_vms_sync_update_parent
     *   }
     * })
     * 
     */
    create<T extends event_vms_sync_update_parentCreateArgs>(args: SelectSubset<T, event_vms_sync_update_parentCreateArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Event_vms_sync_update_parents.
     * @param {event_vms_sync_update_parentCreateManyArgs} args - Arguments to create many Event_vms_sync_update_parents.
     * @example
     * // Create many Event_vms_sync_update_parents
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends event_vms_sync_update_parentCreateManyArgs>(args?: SelectSubset<T, event_vms_sync_update_parentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_vms_sync_update_parents and returns the data saved in the database.
     * @param {event_vms_sync_update_parentCreateManyAndReturnArgs} args - Arguments to create many Event_vms_sync_update_parents.
     * @example
     * // Create many Event_vms_sync_update_parents
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_vms_sync_update_parents and only return the `index`
     * const event_vms_sync_update_parentWithIndexOnly = await prisma.event_vms_sync_update_parent.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends event_vms_sync_update_parentCreateManyAndReturnArgs>(args?: SelectSubset<T, event_vms_sync_update_parentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event_vms_sync_update_parent.
     * @param {event_vms_sync_update_parentDeleteArgs} args - Arguments to delete one Event_vms_sync_update_parent.
     * @example
     * // Delete one Event_vms_sync_update_parent
     * const Event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.delete({
     *   where: {
     *     // ... filter to delete one Event_vms_sync_update_parent
     *   }
     * })
     * 
     */
    delete<T extends event_vms_sync_update_parentDeleteArgs>(args: SelectSubset<T, event_vms_sync_update_parentDeleteArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event_vms_sync_update_parent.
     * @param {event_vms_sync_update_parentUpdateArgs} args - Arguments to update one Event_vms_sync_update_parent.
     * @example
     * // Update one Event_vms_sync_update_parent
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends event_vms_sync_update_parentUpdateArgs>(args: SelectSubset<T, event_vms_sync_update_parentUpdateArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Event_vms_sync_update_parents.
     * @param {event_vms_sync_update_parentDeleteManyArgs} args - Arguments to filter Event_vms_sync_update_parents to delete.
     * @example
     * // Delete a few Event_vms_sync_update_parents
     * const { count } = await prisma.event_vms_sync_update_parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends event_vms_sync_update_parentDeleteManyArgs>(args?: SelectSubset<T, event_vms_sync_update_parentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_vms_sync_update_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_update_parentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_vms_sync_update_parents
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends event_vms_sync_update_parentUpdateManyArgs>(args: SelectSubset<T, event_vms_sync_update_parentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_vms_sync_update_parent.
     * @param {event_vms_sync_update_parentUpsertArgs} args - Arguments to update or create a Event_vms_sync_update_parent.
     * @example
     * // Update or create a Event_vms_sync_update_parent
     * const event_vms_sync_update_parent = await prisma.event_vms_sync_update_parent.upsert({
     *   create: {
     *     // ... data to create a Event_vms_sync_update_parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_vms_sync_update_parent we want to update
     *   }
     * })
     */
    upsert<T extends event_vms_sync_update_parentUpsertArgs>(args: SelectSubset<T, event_vms_sync_update_parentUpsertArgs<ExtArgs>>): Prisma__event_vms_sync_update_parentClient<$Result.GetResult<Prisma.$event_vms_sync_update_parentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Event_vms_sync_update_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_update_parentCountArgs} args - Arguments to filter Event_vms_sync_update_parents to count.
     * @example
     * // Count the number of Event_vms_sync_update_parents
     * const count = await prisma.event_vms_sync_update_parent.count({
     *   where: {
     *     // ... the filter for the Event_vms_sync_update_parents we want to count
     *   }
     * })
    **/
    count<T extends event_vms_sync_update_parentCountArgs>(
      args?: Subset<T, event_vms_sync_update_parentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_vms_sync_update_parentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_vms_sync_update_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_vms_sync_update_parentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_vms_sync_update_parentAggregateArgs>(args: Subset<T, Event_vms_sync_update_parentAggregateArgs>): Prisma.PrismaPromise<GetEvent_vms_sync_update_parentAggregateType<T>>

    /**
     * Group by Event_vms_sync_update_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_vms_sync_update_parentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends event_vms_sync_update_parentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_vms_sync_update_parentGroupByArgs['orderBy'] }
        : { orderBy?: event_vms_sync_update_parentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, event_vms_sync_update_parentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_vms_sync_update_parentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_vms_sync_update_parent model
   */
  readonly fields: event_vms_sync_update_parentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_vms_sync_update_parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_vms_sync_update_parentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the event_vms_sync_update_parent model
   */ 
  interface event_vms_sync_update_parentFieldRefs {
    readonly index: FieldRef<"event_vms_sync_update_parent", 'BigInt'>
    readonly update_table_type: FieldRef<"event_vms_sync_update_parent", 'Int'>
    readonly lcms_server_id: FieldRef<"event_vms_sync_update_parent", 'String'>
    readonly event_id: FieldRef<"event_vms_sync_update_parent", 'String'>
    readonly data_file_path: FieldRef<"event_vms_sync_update_parent", 'String'>
    readonly partition_key: FieldRef<"event_vms_sync_update_parent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * event_vms_sync_update_parent findUnique
   */
  export type event_vms_sync_update_parentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_update_parent to fetch.
     */
    where: event_vms_sync_update_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_update_parent findUniqueOrThrow
   */
  export type event_vms_sync_update_parentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_update_parent to fetch.
     */
    where: event_vms_sync_update_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_update_parent findFirst
   */
  export type event_vms_sync_update_parentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_update_parent to fetch.
     */
    where?: event_vms_sync_update_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_update_parents to fetch.
     */
    orderBy?: event_vms_sync_update_parentOrderByWithRelationInput | event_vms_sync_update_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_vms_sync_update_parents.
     */
    cursor?: event_vms_sync_update_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_update_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_update_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_vms_sync_update_parents.
     */
    distinct?: Event_vms_sync_update_parentScalarFieldEnum | Event_vms_sync_update_parentScalarFieldEnum[]
  }

  /**
   * event_vms_sync_update_parent findFirstOrThrow
   */
  export type event_vms_sync_update_parentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_update_parent to fetch.
     */
    where?: event_vms_sync_update_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_update_parents to fetch.
     */
    orderBy?: event_vms_sync_update_parentOrderByWithRelationInput | event_vms_sync_update_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_vms_sync_update_parents.
     */
    cursor?: event_vms_sync_update_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_update_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_update_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_vms_sync_update_parents.
     */
    distinct?: Event_vms_sync_update_parentScalarFieldEnum | Event_vms_sync_update_parentScalarFieldEnum[]
  }

  /**
   * event_vms_sync_update_parent findMany
   */
  export type event_vms_sync_update_parentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * Filter, which event_vms_sync_update_parents to fetch.
     */
    where?: event_vms_sync_update_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_vms_sync_update_parents to fetch.
     */
    orderBy?: event_vms_sync_update_parentOrderByWithRelationInput | event_vms_sync_update_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_vms_sync_update_parents.
     */
    cursor?: event_vms_sync_update_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_vms_sync_update_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_vms_sync_update_parents.
     */
    skip?: number
    distinct?: Event_vms_sync_update_parentScalarFieldEnum | Event_vms_sync_update_parentScalarFieldEnum[]
  }

  /**
   * event_vms_sync_update_parent create
   */
  export type event_vms_sync_update_parentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * The data needed to create a event_vms_sync_update_parent.
     */
    data: XOR<event_vms_sync_update_parentCreateInput, event_vms_sync_update_parentUncheckedCreateInput>
  }

  /**
   * event_vms_sync_update_parent createMany
   */
  export type event_vms_sync_update_parentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_vms_sync_update_parents.
     */
    data: event_vms_sync_update_parentCreateManyInput | event_vms_sync_update_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_vms_sync_update_parent createManyAndReturn
   */
  export type event_vms_sync_update_parentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many event_vms_sync_update_parents.
     */
    data: event_vms_sync_update_parentCreateManyInput | event_vms_sync_update_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_vms_sync_update_parent update
   */
  export type event_vms_sync_update_parentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * The data needed to update a event_vms_sync_update_parent.
     */
    data: XOR<event_vms_sync_update_parentUpdateInput, event_vms_sync_update_parentUncheckedUpdateInput>
    /**
     * Choose, which event_vms_sync_update_parent to update.
     */
    where: event_vms_sync_update_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_update_parent updateMany
   */
  export type event_vms_sync_update_parentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_vms_sync_update_parents.
     */
    data: XOR<event_vms_sync_update_parentUpdateManyMutationInput, event_vms_sync_update_parentUncheckedUpdateManyInput>
    /**
     * Filter which event_vms_sync_update_parents to update
     */
    where?: event_vms_sync_update_parentWhereInput
  }

  /**
   * event_vms_sync_update_parent upsert
   */
  export type event_vms_sync_update_parentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * The filter to search for the event_vms_sync_update_parent to update in case it exists.
     */
    where: event_vms_sync_update_parentWhereUniqueInput
    /**
     * In case the event_vms_sync_update_parent found by the `where` argument doesn't exist, create a new event_vms_sync_update_parent with this data.
     */
    create: XOR<event_vms_sync_update_parentCreateInput, event_vms_sync_update_parentUncheckedCreateInput>
    /**
     * In case the event_vms_sync_update_parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_vms_sync_update_parentUpdateInput, event_vms_sync_update_parentUncheckedUpdateInput>
  }

  /**
   * event_vms_sync_update_parent delete
   */
  export type event_vms_sync_update_parentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
    /**
     * Filter which event_vms_sync_update_parent to delete.
     */
    where: event_vms_sync_update_parentWhereUniqueInput
  }

  /**
   * event_vms_sync_update_parent deleteMany
   */
  export type event_vms_sync_update_parentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_vms_sync_update_parents to delete
     */
    where?: event_vms_sync_update_parentWhereInput
  }

  /**
   * event_vms_sync_update_parent without action
   */
  export type event_vms_sync_update_parentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_vms_sync_update_parent
     */
    select?: event_vms_sync_update_parentSelect<ExtArgs> | null
  }


  /**
   * Model face_index_sync_parent
   */

  export type AggregateFace_index_sync_parent = {
    _count: Face_index_sync_parentCountAggregateOutputType | null
    _avg: Face_index_sync_parentAvgAggregateOutputType | null
    _sum: Face_index_sync_parentSumAggregateOutputType | null
    _min: Face_index_sync_parentMinAggregateOutputType | null
    _max: Face_index_sync_parentMaxAggregateOutputType | null
  }

  export type Face_index_sync_parentAvgAggregateOutputType = {
    partition_key: number | null
  }

  export type Face_index_sync_parentSumAggregateOutputType = {
    partition_key: number | null
  }

  export type Face_index_sync_parentMinAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    face_index_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Face_index_sync_parentMaxAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    face_index_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Face_index_sync_parentCountAggregateOutputType = {
    id: number
    lcms_server_id: number
    face_index_id: number
    event_time: number
    data_file_path: number
    partition_key: number
    _all: number
  }


  export type Face_index_sync_parentAvgAggregateInputType = {
    partition_key?: true
  }

  export type Face_index_sync_parentSumAggregateInputType = {
    partition_key?: true
  }

  export type Face_index_sync_parentMinAggregateInputType = {
    id?: true
    lcms_server_id?: true
    face_index_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Face_index_sync_parentMaxAggregateInputType = {
    id?: true
    lcms_server_id?: true
    face_index_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Face_index_sync_parentCountAggregateInputType = {
    id?: true
    lcms_server_id?: true
    face_index_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
    _all?: true
  }

  export type Face_index_sync_parentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which face_index_sync_parent to aggregate.
     */
    where?: face_index_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_index_sync_parents to fetch.
     */
    orderBy?: face_index_sync_parentOrderByWithRelationInput | face_index_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: face_index_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_index_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_index_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned face_index_sync_parents
    **/
    _count?: true | Face_index_sync_parentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Face_index_sync_parentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Face_index_sync_parentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Face_index_sync_parentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Face_index_sync_parentMaxAggregateInputType
  }

  export type GetFace_index_sync_parentAggregateType<T extends Face_index_sync_parentAggregateArgs> = {
        [P in keyof T & keyof AggregateFace_index_sync_parent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFace_index_sync_parent[P]>
      : GetScalarType<T[P], AggregateFace_index_sync_parent[P]>
  }




  export type face_index_sync_parentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: face_index_sync_parentWhereInput
    orderBy?: face_index_sync_parentOrderByWithAggregationInput | face_index_sync_parentOrderByWithAggregationInput[]
    by: Face_index_sync_parentScalarFieldEnum[] | Face_index_sync_parentScalarFieldEnum
    having?: face_index_sync_parentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Face_index_sync_parentCountAggregateInputType | true
    _avg?: Face_index_sync_parentAvgAggregateInputType
    _sum?: Face_index_sync_parentSumAggregateInputType
    _min?: Face_index_sync_parentMinAggregateInputType
    _max?: Face_index_sync_parentMaxAggregateInputType
  }

  export type Face_index_sync_parentGroupByOutputType = {
    id: string
    lcms_server_id: string | null
    face_index_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number
    _count: Face_index_sync_parentCountAggregateOutputType | null
    _avg: Face_index_sync_parentAvgAggregateOutputType | null
    _sum: Face_index_sync_parentSumAggregateOutputType | null
    _min: Face_index_sync_parentMinAggregateOutputType | null
    _max: Face_index_sync_parentMaxAggregateOutputType | null
  }

  type GetFace_index_sync_parentGroupByPayload<T extends face_index_sync_parentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Face_index_sync_parentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Face_index_sync_parentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Face_index_sync_parentGroupByOutputType[P]>
            : GetScalarType<T[P], Face_index_sync_parentGroupByOutputType[P]>
        }
      >
    >


  export type face_index_sync_parentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    face_index_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["face_index_sync_parent"]>

  export type face_index_sync_parentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    face_index_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["face_index_sync_parent"]>

  export type face_index_sync_parentSelectScalar = {
    id?: boolean
    lcms_server_id?: boolean
    face_index_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }


  export type $face_index_sync_parentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "face_index_sync_parent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcms_server_id: string | null
      face_index_id: string | null
      event_time: Date | null
      data_file_path: string | null
      partition_key: number
    }, ExtArgs["result"]["face_index_sync_parent"]>
    composites: {}
  }

  type face_index_sync_parentGetPayload<S extends boolean | null | undefined | face_index_sync_parentDefaultArgs> = $Result.GetResult<Prisma.$face_index_sync_parentPayload, S>

  type face_index_sync_parentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<face_index_sync_parentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Face_index_sync_parentCountAggregateInputType | true
    }

  export interface face_index_sync_parentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['face_index_sync_parent'], meta: { name: 'face_index_sync_parent' } }
    /**
     * Find zero or one Face_index_sync_parent that matches the filter.
     * @param {face_index_sync_parentFindUniqueArgs} args - Arguments to find a Face_index_sync_parent
     * @example
     * // Get one Face_index_sync_parent
     * const face_index_sync_parent = await prisma.face_index_sync_parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends face_index_sync_parentFindUniqueArgs>(args: SelectSubset<T, face_index_sync_parentFindUniqueArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Face_index_sync_parent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {face_index_sync_parentFindUniqueOrThrowArgs} args - Arguments to find a Face_index_sync_parent
     * @example
     * // Get one Face_index_sync_parent
     * const face_index_sync_parent = await prisma.face_index_sync_parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends face_index_sync_parentFindUniqueOrThrowArgs>(args: SelectSubset<T, face_index_sync_parentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Face_index_sync_parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_index_sync_parentFindFirstArgs} args - Arguments to find a Face_index_sync_parent
     * @example
     * // Get one Face_index_sync_parent
     * const face_index_sync_parent = await prisma.face_index_sync_parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends face_index_sync_parentFindFirstArgs>(args?: SelectSubset<T, face_index_sync_parentFindFirstArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Face_index_sync_parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_index_sync_parentFindFirstOrThrowArgs} args - Arguments to find a Face_index_sync_parent
     * @example
     * // Get one Face_index_sync_parent
     * const face_index_sync_parent = await prisma.face_index_sync_parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends face_index_sync_parentFindFirstOrThrowArgs>(args?: SelectSubset<T, face_index_sync_parentFindFirstOrThrowArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Face_index_sync_parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_index_sync_parentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Face_index_sync_parents
     * const face_index_sync_parents = await prisma.face_index_sync_parent.findMany()
     * 
     * // Get first 10 Face_index_sync_parents
     * const face_index_sync_parents = await prisma.face_index_sync_parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const face_index_sync_parentWithIdOnly = await prisma.face_index_sync_parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends face_index_sync_parentFindManyArgs>(args?: SelectSubset<T, face_index_sync_parentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Face_index_sync_parent.
     * @param {face_index_sync_parentCreateArgs} args - Arguments to create a Face_index_sync_parent.
     * @example
     * // Create one Face_index_sync_parent
     * const Face_index_sync_parent = await prisma.face_index_sync_parent.create({
     *   data: {
     *     // ... data to create a Face_index_sync_parent
     *   }
     * })
     * 
     */
    create<T extends face_index_sync_parentCreateArgs>(args: SelectSubset<T, face_index_sync_parentCreateArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Face_index_sync_parents.
     * @param {face_index_sync_parentCreateManyArgs} args - Arguments to create many Face_index_sync_parents.
     * @example
     * // Create many Face_index_sync_parents
     * const face_index_sync_parent = await prisma.face_index_sync_parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends face_index_sync_parentCreateManyArgs>(args?: SelectSubset<T, face_index_sync_parentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Face_index_sync_parents and returns the data saved in the database.
     * @param {face_index_sync_parentCreateManyAndReturnArgs} args - Arguments to create many Face_index_sync_parents.
     * @example
     * // Create many Face_index_sync_parents
     * const face_index_sync_parent = await prisma.face_index_sync_parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Face_index_sync_parents and only return the `id`
     * const face_index_sync_parentWithIdOnly = await prisma.face_index_sync_parent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends face_index_sync_parentCreateManyAndReturnArgs>(args?: SelectSubset<T, face_index_sync_parentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Face_index_sync_parent.
     * @param {face_index_sync_parentDeleteArgs} args - Arguments to delete one Face_index_sync_parent.
     * @example
     * // Delete one Face_index_sync_parent
     * const Face_index_sync_parent = await prisma.face_index_sync_parent.delete({
     *   where: {
     *     // ... filter to delete one Face_index_sync_parent
     *   }
     * })
     * 
     */
    delete<T extends face_index_sync_parentDeleteArgs>(args: SelectSubset<T, face_index_sync_parentDeleteArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Face_index_sync_parent.
     * @param {face_index_sync_parentUpdateArgs} args - Arguments to update one Face_index_sync_parent.
     * @example
     * // Update one Face_index_sync_parent
     * const face_index_sync_parent = await prisma.face_index_sync_parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends face_index_sync_parentUpdateArgs>(args: SelectSubset<T, face_index_sync_parentUpdateArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Face_index_sync_parents.
     * @param {face_index_sync_parentDeleteManyArgs} args - Arguments to filter Face_index_sync_parents to delete.
     * @example
     * // Delete a few Face_index_sync_parents
     * const { count } = await prisma.face_index_sync_parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends face_index_sync_parentDeleteManyArgs>(args?: SelectSubset<T, face_index_sync_parentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Face_index_sync_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_index_sync_parentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Face_index_sync_parents
     * const face_index_sync_parent = await prisma.face_index_sync_parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends face_index_sync_parentUpdateManyArgs>(args: SelectSubset<T, face_index_sync_parentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Face_index_sync_parent.
     * @param {face_index_sync_parentUpsertArgs} args - Arguments to update or create a Face_index_sync_parent.
     * @example
     * // Update or create a Face_index_sync_parent
     * const face_index_sync_parent = await prisma.face_index_sync_parent.upsert({
     *   create: {
     *     // ... data to create a Face_index_sync_parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Face_index_sync_parent we want to update
     *   }
     * })
     */
    upsert<T extends face_index_sync_parentUpsertArgs>(args: SelectSubset<T, face_index_sync_parentUpsertArgs<ExtArgs>>): Prisma__face_index_sync_parentClient<$Result.GetResult<Prisma.$face_index_sync_parentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Face_index_sync_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_index_sync_parentCountArgs} args - Arguments to filter Face_index_sync_parents to count.
     * @example
     * // Count the number of Face_index_sync_parents
     * const count = await prisma.face_index_sync_parent.count({
     *   where: {
     *     // ... the filter for the Face_index_sync_parents we want to count
     *   }
     * })
    **/
    count<T extends face_index_sync_parentCountArgs>(
      args?: Subset<T, face_index_sync_parentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Face_index_sync_parentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Face_index_sync_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Face_index_sync_parentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Face_index_sync_parentAggregateArgs>(args: Subset<T, Face_index_sync_parentAggregateArgs>): Prisma.PrismaPromise<GetFace_index_sync_parentAggregateType<T>>

    /**
     * Group by Face_index_sync_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {face_index_sync_parentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends face_index_sync_parentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: face_index_sync_parentGroupByArgs['orderBy'] }
        : { orderBy?: face_index_sync_parentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, face_index_sync_parentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFace_index_sync_parentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the face_index_sync_parent model
   */
  readonly fields: face_index_sync_parentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for face_index_sync_parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__face_index_sync_parentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the face_index_sync_parent model
   */ 
  interface face_index_sync_parentFieldRefs {
    readonly id: FieldRef<"face_index_sync_parent", 'String'>
    readonly lcms_server_id: FieldRef<"face_index_sync_parent", 'String'>
    readonly face_index_id: FieldRef<"face_index_sync_parent", 'String'>
    readonly event_time: FieldRef<"face_index_sync_parent", 'DateTime'>
    readonly data_file_path: FieldRef<"face_index_sync_parent", 'String'>
    readonly partition_key: FieldRef<"face_index_sync_parent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * face_index_sync_parent findUnique
   */
  export type face_index_sync_parentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which face_index_sync_parent to fetch.
     */
    where: face_index_sync_parentWhereUniqueInput
  }

  /**
   * face_index_sync_parent findUniqueOrThrow
   */
  export type face_index_sync_parentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which face_index_sync_parent to fetch.
     */
    where: face_index_sync_parentWhereUniqueInput
  }

  /**
   * face_index_sync_parent findFirst
   */
  export type face_index_sync_parentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which face_index_sync_parent to fetch.
     */
    where?: face_index_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_index_sync_parents to fetch.
     */
    orderBy?: face_index_sync_parentOrderByWithRelationInput | face_index_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for face_index_sync_parents.
     */
    cursor?: face_index_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_index_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_index_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of face_index_sync_parents.
     */
    distinct?: Face_index_sync_parentScalarFieldEnum | Face_index_sync_parentScalarFieldEnum[]
  }

  /**
   * face_index_sync_parent findFirstOrThrow
   */
  export type face_index_sync_parentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which face_index_sync_parent to fetch.
     */
    where?: face_index_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_index_sync_parents to fetch.
     */
    orderBy?: face_index_sync_parentOrderByWithRelationInput | face_index_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for face_index_sync_parents.
     */
    cursor?: face_index_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_index_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_index_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of face_index_sync_parents.
     */
    distinct?: Face_index_sync_parentScalarFieldEnum | Face_index_sync_parentScalarFieldEnum[]
  }

  /**
   * face_index_sync_parent findMany
   */
  export type face_index_sync_parentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which face_index_sync_parents to fetch.
     */
    where?: face_index_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of face_index_sync_parents to fetch.
     */
    orderBy?: face_index_sync_parentOrderByWithRelationInput | face_index_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing face_index_sync_parents.
     */
    cursor?: face_index_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` face_index_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` face_index_sync_parents.
     */
    skip?: number
    distinct?: Face_index_sync_parentScalarFieldEnum | Face_index_sync_parentScalarFieldEnum[]
  }

  /**
   * face_index_sync_parent create
   */
  export type face_index_sync_parentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * The data needed to create a face_index_sync_parent.
     */
    data: XOR<face_index_sync_parentCreateInput, face_index_sync_parentUncheckedCreateInput>
  }

  /**
   * face_index_sync_parent createMany
   */
  export type face_index_sync_parentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many face_index_sync_parents.
     */
    data: face_index_sync_parentCreateManyInput | face_index_sync_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * face_index_sync_parent createManyAndReturn
   */
  export type face_index_sync_parentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many face_index_sync_parents.
     */
    data: face_index_sync_parentCreateManyInput | face_index_sync_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * face_index_sync_parent update
   */
  export type face_index_sync_parentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * The data needed to update a face_index_sync_parent.
     */
    data: XOR<face_index_sync_parentUpdateInput, face_index_sync_parentUncheckedUpdateInput>
    /**
     * Choose, which face_index_sync_parent to update.
     */
    where: face_index_sync_parentWhereUniqueInput
  }

  /**
   * face_index_sync_parent updateMany
   */
  export type face_index_sync_parentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update face_index_sync_parents.
     */
    data: XOR<face_index_sync_parentUpdateManyMutationInput, face_index_sync_parentUncheckedUpdateManyInput>
    /**
     * Filter which face_index_sync_parents to update
     */
    where?: face_index_sync_parentWhereInput
  }

  /**
   * face_index_sync_parent upsert
   */
  export type face_index_sync_parentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * The filter to search for the face_index_sync_parent to update in case it exists.
     */
    where: face_index_sync_parentWhereUniqueInput
    /**
     * In case the face_index_sync_parent found by the `where` argument doesn't exist, create a new face_index_sync_parent with this data.
     */
    create: XOR<face_index_sync_parentCreateInput, face_index_sync_parentUncheckedCreateInput>
    /**
     * In case the face_index_sync_parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<face_index_sync_parentUpdateInput, face_index_sync_parentUncheckedUpdateInput>
  }

  /**
   * face_index_sync_parent delete
   */
  export type face_index_sync_parentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
    /**
     * Filter which face_index_sync_parent to delete.
     */
    where: face_index_sync_parentWhereUniqueInput
  }

  /**
   * face_index_sync_parent deleteMany
   */
  export type face_index_sync_parentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which face_index_sync_parents to delete
     */
    where?: face_index_sync_parentWhereInput
  }

  /**
   * face_index_sync_parent without action
   */
  export type face_index_sync_parentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the face_index_sync_parent
     */
    select?: face_index_sync_parentSelect<ExtArgs> | null
  }


  /**
   * Model human_info
   */

  export type AggregateHuman_info = {
    _count: Human_infoCountAggregateOutputType | null
    _avg: Human_infoAvgAggregateOutputType | null
    _sum: Human_infoSumAggregateOutputType | null
    _min: Human_infoMinAggregateOutputType | null
    _max: Human_infoMaxAggregateOutputType | null
  }

  export type Human_infoAvgAggregateOutputType = {
    gender: number | null
    face_features: number | null
    height: number | null
    weight: number | null
  }

  export type Human_infoSumAggregateOutputType = {
    gender: number | null
    face_features: number[]
    height: number | null
    weight: number | null
  }

  export type Human_infoMinAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    document_id: string | null
    id_type: string | null
    release_date: Date | null
    issued_by: string | null
    full_name: string | null
    gender: number | null
    birthday: Date | null
    phone_number: string | null
    email: string | null
    address: string | null
    note: string | null
    company: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
    height: number | null
    weight: number | null
    certificates_json_text: string | null
  }

  export type Human_infoMaxAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    document_id: string | null
    id_type: string | null
    release_date: Date | null
    issued_by: string | null
    full_name: string | null
    gender: number | null
    birthday: Date | null
    phone_number: string | null
    email: string | null
    address: string | null
    note: string | null
    company: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
    height: number | null
    weight: number | null
    certificates_json_text: string | null
  }

  export type Human_infoCountAggregateOutputType = {
    id: number
    lcms_server_id: number
    document_id: number
    id_type: number
    release_date: number
    issued_by: number
    full_name: number
    gender: number
    birthday: number
    phone_number: number
    email: number
    address: number
    note: number
    company: number
    list_ids: number
    is_deleted: number
    avatars: number
    id_scan_images: number
    other_images: number
    root_face_images: number
    cropped_face_images: number
    face_features: number
    time_created: number
    time_modified: number
    height: number
    weight: number
    certificates_json_text: number
    _all: number
  }


  export type Human_infoAvgAggregateInputType = {
    gender?: true
    face_features?: true
    height?: true
    weight?: true
  }

  export type Human_infoSumAggregateInputType = {
    gender?: true
    face_features?: true
    height?: true
    weight?: true
  }

  export type Human_infoMinAggregateInputType = {
    id?: true
    lcms_server_id?: true
    document_id?: true
    id_type?: true
    release_date?: true
    issued_by?: true
    full_name?: true
    gender?: true
    birthday?: true
    phone_number?: true
    email?: true
    address?: true
    note?: true
    company?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
    height?: true
    weight?: true
    certificates_json_text?: true
  }

  export type Human_infoMaxAggregateInputType = {
    id?: true
    lcms_server_id?: true
    document_id?: true
    id_type?: true
    release_date?: true
    issued_by?: true
    full_name?: true
    gender?: true
    birthday?: true
    phone_number?: true
    email?: true
    address?: true
    note?: true
    company?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
    height?: true
    weight?: true
    certificates_json_text?: true
  }

  export type Human_infoCountAggregateInputType = {
    id?: true
    lcms_server_id?: true
    document_id?: true
    id_type?: true
    release_date?: true
    issued_by?: true
    full_name?: true
    gender?: true
    birthday?: true
    phone_number?: true
    email?: true
    address?: true
    note?: true
    company?: true
    list_ids?: true
    is_deleted?: true
    avatars?: true
    id_scan_images?: true
    other_images?: true
    root_face_images?: true
    cropped_face_images?: true
    face_features?: true
    time_created?: true
    time_modified?: true
    height?: true
    weight?: true
    certificates_json_text?: true
    _all?: true
  }

  export type Human_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which human_info to aggregate.
     */
    where?: human_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_infos to fetch.
     */
    orderBy?: human_infoOrderByWithRelationInput | human_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: human_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned human_infos
    **/
    _count?: true | Human_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Human_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Human_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Human_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Human_infoMaxAggregateInputType
  }

  export type GetHuman_infoAggregateType<T extends Human_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateHuman_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHuman_info[P]>
      : GetScalarType<T[P], AggregateHuman_info[P]>
  }




  export type human_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: human_infoWhereInput
    orderBy?: human_infoOrderByWithAggregationInput | human_infoOrderByWithAggregationInput[]
    by: Human_infoScalarFieldEnum[] | Human_infoScalarFieldEnum
    having?: human_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Human_infoCountAggregateInputType | true
    _avg?: Human_infoAvgAggregateInputType
    _sum?: Human_infoSumAggregateInputType
    _min?: Human_infoMinAggregateInputType
    _max?: Human_infoMaxAggregateInputType
  }

  export type Human_infoGroupByOutputType = {
    id: string
    lcms_server_id: string | null
    document_id: string | null
    id_type: string | null
    release_date: Date | null
    issued_by: string | null
    full_name: string | null
    gender: number | null
    birthday: Date | null
    phone_number: string | null
    email: string | null
    address: string | null
    note: string | null
    company: string | null
    list_ids: string[]
    is_deleted: boolean | null
    avatars: Buffer[]
    id_scan_images: Buffer[]
    other_images: Buffer[]
    root_face_images: Buffer[]
    cropped_face_images: Buffer[]
    face_features: number[]
    time_created: Date | null
    time_modified: Date | null
    height: number | null
    weight: number | null
    certificates_json_text: string | null
    _count: Human_infoCountAggregateOutputType | null
    _avg: Human_infoAvgAggregateOutputType | null
    _sum: Human_infoSumAggregateOutputType | null
    _min: Human_infoMinAggregateOutputType | null
    _max: Human_infoMaxAggregateOutputType | null
  }

  type GetHuman_infoGroupByPayload<T extends human_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Human_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Human_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Human_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Human_infoGroupByOutputType[P]>
        }
      >
    >


  export type human_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    document_id?: boolean
    id_type?: boolean
    release_date?: boolean
    issued_by?: boolean
    full_name?: boolean
    gender?: boolean
    birthday?: boolean
    phone_number?: boolean
    email?: boolean
    address?: boolean
    note?: boolean
    company?: boolean
    list_ids?: boolean
    is_deleted?: boolean
    avatars?: boolean
    id_scan_images?: boolean
    other_images?: boolean
    root_face_images?: boolean
    cropped_face_images?: boolean
    face_features?: boolean
    time_created?: boolean
    time_modified?: boolean
    height?: boolean
    weight?: boolean
    certificates_json_text?: boolean
  }, ExtArgs["result"]["human_info"]>

  export type human_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    document_id?: boolean
    id_type?: boolean
    release_date?: boolean
    issued_by?: boolean
    full_name?: boolean
    gender?: boolean
    birthday?: boolean
    phone_number?: boolean
    email?: boolean
    address?: boolean
    note?: boolean
    company?: boolean
    list_ids?: boolean
    is_deleted?: boolean
    avatars?: boolean
    id_scan_images?: boolean
    other_images?: boolean
    root_face_images?: boolean
    cropped_face_images?: boolean
    face_features?: boolean
    time_created?: boolean
    time_modified?: boolean
    height?: boolean
    weight?: boolean
    certificates_json_text?: boolean
  }, ExtArgs["result"]["human_info"]>

  export type human_infoSelectScalar = {
    id?: boolean
    lcms_server_id?: boolean
    document_id?: boolean
    id_type?: boolean
    release_date?: boolean
    issued_by?: boolean
    full_name?: boolean
    gender?: boolean
    birthday?: boolean
    phone_number?: boolean
    email?: boolean
    address?: boolean
    note?: boolean
    company?: boolean
    list_ids?: boolean
    is_deleted?: boolean
    avatars?: boolean
    id_scan_images?: boolean
    other_images?: boolean
    root_face_images?: boolean
    cropped_face_images?: boolean
    face_features?: boolean
    time_created?: boolean
    time_modified?: boolean
    height?: boolean
    weight?: boolean
    certificates_json_text?: boolean
  }


  export type $human_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "human_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcms_server_id: string | null
      document_id: string | null
      id_type: string | null
      release_date: Date | null
      issued_by: string | null
      full_name: string | null
      gender: number | null
      birthday: Date | null
      phone_number: string | null
      email: string | null
      address: string | null
      note: string | null
      company: string | null
      list_ids: string[]
      is_deleted: boolean | null
      avatars: Buffer[]
      id_scan_images: Buffer[]
      other_images: Buffer[]
      root_face_images: Buffer[]
      cropped_face_images: Buffer[]
      face_features: number[]
      time_created: Date | null
      time_modified: Date | null
      height: number | null
      weight: number | null
      certificates_json_text: string | null
    }, ExtArgs["result"]["human_info"]>
    composites: {}
  }

  type human_infoGetPayload<S extends boolean | null | undefined | human_infoDefaultArgs> = $Result.GetResult<Prisma.$human_infoPayload, S>

  type human_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<human_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Human_infoCountAggregateInputType | true
    }

  export interface human_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['human_info'], meta: { name: 'human_info' } }
    /**
     * Find zero or one Human_info that matches the filter.
     * @param {human_infoFindUniqueArgs} args - Arguments to find a Human_info
     * @example
     * // Get one Human_info
     * const human_info = await prisma.human_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends human_infoFindUniqueArgs>(args: SelectSubset<T, human_infoFindUniqueArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Human_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {human_infoFindUniqueOrThrowArgs} args - Arguments to find a Human_info
     * @example
     * // Get one Human_info
     * const human_info = await prisma.human_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends human_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, human_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Human_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_infoFindFirstArgs} args - Arguments to find a Human_info
     * @example
     * // Get one Human_info
     * const human_info = await prisma.human_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends human_infoFindFirstArgs>(args?: SelectSubset<T, human_infoFindFirstArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Human_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_infoFindFirstOrThrowArgs} args - Arguments to find a Human_info
     * @example
     * // Get one Human_info
     * const human_info = await prisma.human_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends human_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, human_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Human_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Human_infos
     * const human_infos = await prisma.human_info.findMany()
     * 
     * // Get first 10 Human_infos
     * const human_infos = await prisma.human_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const human_infoWithIdOnly = await prisma.human_info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends human_infoFindManyArgs>(args?: SelectSubset<T, human_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Human_info.
     * @param {human_infoCreateArgs} args - Arguments to create a Human_info.
     * @example
     * // Create one Human_info
     * const Human_info = await prisma.human_info.create({
     *   data: {
     *     // ... data to create a Human_info
     *   }
     * })
     * 
     */
    create<T extends human_infoCreateArgs>(args: SelectSubset<T, human_infoCreateArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Human_infos.
     * @param {human_infoCreateManyArgs} args - Arguments to create many Human_infos.
     * @example
     * // Create many Human_infos
     * const human_info = await prisma.human_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends human_infoCreateManyArgs>(args?: SelectSubset<T, human_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Human_infos and returns the data saved in the database.
     * @param {human_infoCreateManyAndReturnArgs} args - Arguments to create many Human_infos.
     * @example
     * // Create many Human_infos
     * const human_info = await prisma.human_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Human_infos and only return the `id`
     * const human_infoWithIdOnly = await prisma.human_info.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends human_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, human_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Human_info.
     * @param {human_infoDeleteArgs} args - Arguments to delete one Human_info.
     * @example
     * // Delete one Human_info
     * const Human_info = await prisma.human_info.delete({
     *   where: {
     *     // ... filter to delete one Human_info
     *   }
     * })
     * 
     */
    delete<T extends human_infoDeleteArgs>(args: SelectSubset<T, human_infoDeleteArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Human_info.
     * @param {human_infoUpdateArgs} args - Arguments to update one Human_info.
     * @example
     * // Update one Human_info
     * const human_info = await prisma.human_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends human_infoUpdateArgs>(args: SelectSubset<T, human_infoUpdateArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Human_infos.
     * @param {human_infoDeleteManyArgs} args - Arguments to filter Human_infos to delete.
     * @example
     * // Delete a few Human_infos
     * const { count } = await prisma.human_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends human_infoDeleteManyArgs>(args?: SelectSubset<T, human_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Human_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Human_infos
     * const human_info = await prisma.human_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends human_infoUpdateManyArgs>(args: SelectSubset<T, human_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Human_info.
     * @param {human_infoUpsertArgs} args - Arguments to update or create a Human_info.
     * @example
     * // Update or create a Human_info
     * const human_info = await prisma.human_info.upsert({
     *   create: {
     *     // ... data to create a Human_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Human_info we want to update
     *   }
     * })
     */
    upsert<T extends human_infoUpsertArgs>(args: SelectSubset<T, human_infoUpsertArgs<ExtArgs>>): Prisma__human_infoClient<$Result.GetResult<Prisma.$human_infoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Human_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_infoCountArgs} args - Arguments to filter Human_infos to count.
     * @example
     * // Count the number of Human_infos
     * const count = await prisma.human_info.count({
     *   where: {
     *     // ... the filter for the Human_infos we want to count
     *   }
     * })
    **/
    count<T extends human_infoCountArgs>(
      args?: Subset<T, human_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Human_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Human_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Human_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Human_infoAggregateArgs>(args: Subset<T, Human_infoAggregateArgs>): Prisma.PrismaPromise<GetHuman_infoAggregateType<T>>

    /**
     * Group by Human_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends human_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: human_infoGroupByArgs['orderBy'] }
        : { orderBy?: human_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, human_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHuman_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the human_info model
   */
  readonly fields: human_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for human_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__human_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the human_info model
   */ 
  interface human_infoFieldRefs {
    readonly id: FieldRef<"human_info", 'String'>
    readonly lcms_server_id: FieldRef<"human_info", 'String'>
    readonly document_id: FieldRef<"human_info", 'String'>
    readonly id_type: FieldRef<"human_info", 'String'>
    readonly release_date: FieldRef<"human_info", 'DateTime'>
    readonly issued_by: FieldRef<"human_info", 'String'>
    readonly full_name: FieldRef<"human_info", 'String'>
    readonly gender: FieldRef<"human_info", 'Int'>
    readonly birthday: FieldRef<"human_info", 'DateTime'>
    readonly phone_number: FieldRef<"human_info", 'String'>
    readonly email: FieldRef<"human_info", 'String'>
    readonly address: FieldRef<"human_info", 'String'>
    readonly note: FieldRef<"human_info", 'String'>
    readonly company: FieldRef<"human_info", 'String'>
    readonly list_ids: FieldRef<"human_info", 'String[]'>
    readonly is_deleted: FieldRef<"human_info", 'Boolean'>
    readonly avatars: FieldRef<"human_info", 'Bytes[]'>
    readonly id_scan_images: FieldRef<"human_info", 'Bytes[]'>
    readonly other_images: FieldRef<"human_info", 'Bytes[]'>
    readonly root_face_images: FieldRef<"human_info", 'Bytes[]'>
    readonly cropped_face_images: FieldRef<"human_info", 'Bytes[]'>
    readonly face_features: FieldRef<"human_info", 'Float[]'>
    readonly time_created: FieldRef<"human_info", 'DateTime'>
    readonly time_modified: FieldRef<"human_info", 'DateTime'>
    readonly height: FieldRef<"human_info", 'Float'>
    readonly weight: FieldRef<"human_info", 'Float'>
    readonly certificates_json_text: FieldRef<"human_info", 'String'>
  }
    

  // Custom InputTypes
  /**
   * human_info findUnique
   */
  export type human_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * Filter, which human_info to fetch.
     */
    where: human_infoWhereUniqueInput
  }

  /**
   * human_info findUniqueOrThrow
   */
  export type human_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * Filter, which human_info to fetch.
     */
    where: human_infoWhereUniqueInput
  }

  /**
   * human_info findFirst
   */
  export type human_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * Filter, which human_info to fetch.
     */
    where?: human_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_infos to fetch.
     */
    orderBy?: human_infoOrderByWithRelationInput | human_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for human_infos.
     */
    cursor?: human_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of human_infos.
     */
    distinct?: Human_infoScalarFieldEnum | Human_infoScalarFieldEnum[]
  }

  /**
   * human_info findFirstOrThrow
   */
  export type human_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * Filter, which human_info to fetch.
     */
    where?: human_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_infos to fetch.
     */
    orderBy?: human_infoOrderByWithRelationInput | human_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for human_infos.
     */
    cursor?: human_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of human_infos.
     */
    distinct?: Human_infoScalarFieldEnum | Human_infoScalarFieldEnum[]
  }

  /**
   * human_info findMany
   */
  export type human_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * Filter, which human_infos to fetch.
     */
    where?: human_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_infos to fetch.
     */
    orderBy?: human_infoOrderByWithRelationInput | human_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing human_infos.
     */
    cursor?: human_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_infos.
     */
    skip?: number
    distinct?: Human_infoScalarFieldEnum | Human_infoScalarFieldEnum[]
  }

  /**
   * human_info create
   */
  export type human_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a human_info.
     */
    data: XOR<human_infoCreateInput, human_infoUncheckedCreateInput>
  }

  /**
   * human_info createMany
   */
  export type human_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many human_infos.
     */
    data: human_infoCreateManyInput | human_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * human_info createManyAndReturn
   */
  export type human_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many human_infos.
     */
    data: human_infoCreateManyInput | human_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * human_info update
   */
  export type human_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a human_info.
     */
    data: XOR<human_infoUpdateInput, human_infoUncheckedUpdateInput>
    /**
     * Choose, which human_info to update.
     */
    where: human_infoWhereUniqueInput
  }

  /**
   * human_info updateMany
   */
  export type human_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update human_infos.
     */
    data: XOR<human_infoUpdateManyMutationInput, human_infoUncheckedUpdateManyInput>
    /**
     * Filter which human_infos to update
     */
    where?: human_infoWhereInput
  }

  /**
   * human_info upsert
   */
  export type human_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the human_info to update in case it exists.
     */
    where: human_infoWhereUniqueInput
    /**
     * In case the human_info found by the `where` argument doesn't exist, create a new human_info with this data.
     */
    create: XOR<human_infoCreateInput, human_infoUncheckedCreateInput>
    /**
     * In case the human_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<human_infoUpdateInput, human_infoUncheckedUpdateInput>
  }

  /**
   * human_info delete
   */
  export type human_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
    /**
     * Filter which human_info to delete.
     */
    where: human_infoWhereUniqueInput
  }

  /**
   * human_info deleteMany
   */
  export type human_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which human_infos to delete
     */
    where?: human_infoWhereInput
  }

  /**
   * human_info without action
   */
  export type human_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_info
     */
    select?: human_infoSelect<ExtArgs> | null
  }


  /**
   * Model human_list
   */

  export type AggregateHuman_list = {
    _count: Human_listCountAggregateOutputType | null
    _min: Human_listMinAggregateOutputType | null
    _max: Human_listMaxAggregateOutputType | null
  }

  export type Human_listMinAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    name: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Human_listMaxAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    name: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Human_listCountAggregateOutputType = {
    id: number
    lcms_server_id: number
    name: number
    is_deleted: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Human_listMinAggregateInputType = {
    id?: true
    lcms_server_id?: true
    name?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
  }

  export type Human_listMaxAggregateInputType = {
    id?: true
    lcms_server_id?: true
    name?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
  }

  export type Human_listCountAggregateInputType = {
    id?: true
    lcms_server_id?: true
    name?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Human_listAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which human_list to aggregate.
     */
    where?: human_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_lists to fetch.
     */
    orderBy?: human_listOrderByWithRelationInput | human_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: human_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned human_lists
    **/
    _count?: true | Human_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Human_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Human_listMaxAggregateInputType
  }

  export type GetHuman_listAggregateType<T extends Human_listAggregateArgs> = {
        [P in keyof T & keyof AggregateHuman_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHuman_list[P]>
      : GetScalarType<T[P], AggregateHuman_list[P]>
  }




  export type human_listGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: human_listWhereInput
    orderBy?: human_listOrderByWithAggregationInput | human_listOrderByWithAggregationInput[]
    by: Human_listScalarFieldEnum[] | Human_listScalarFieldEnum
    having?: human_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Human_listCountAggregateInputType | true
    _min?: Human_listMinAggregateInputType
    _max?: Human_listMaxAggregateInputType
  }

  export type Human_listGroupByOutputType = {
    id: string
    lcms_server_id: string | null
    name: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
    _count: Human_listCountAggregateOutputType | null
    _min: Human_listMinAggregateOutputType | null
    _max: Human_listMaxAggregateOutputType | null
  }

  type GetHuman_listGroupByPayload<T extends human_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Human_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Human_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Human_listGroupByOutputType[P]>
            : GetScalarType<T[P], Human_listGroupByOutputType[P]>
        }
      >
    >


  export type human_listSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    name?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["human_list"]>

  export type human_listSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    name?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["human_list"]>

  export type human_listSelectScalar = {
    id?: boolean
    lcms_server_id?: boolean
    name?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
  }


  export type $human_listPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "human_list"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcms_server_id: string | null
      name: string | null
      is_deleted: boolean | null
      time_created: Date | null
      time_modified: Date | null
    }, ExtArgs["result"]["human_list"]>
    composites: {}
  }

  type human_listGetPayload<S extends boolean | null | undefined | human_listDefaultArgs> = $Result.GetResult<Prisma.$human_listPayload, S>

  type human_listCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<human_listFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Human_listCountAggregateInputType | true
    }

  export interface human_listDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['human_list'], meta: { name: 'human_list' } }
    /**
     * Find zero or one Human_list that matches the filter.
     * @param {human_listFindUniqueArgs} args - Arguments to find a Human_list
     * @example
     * // Get one Human_list
     * const human_list = await prisma.human_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends human_listFindUniqueArgs>(args: SelectSubset<T, human_listFindUniqueArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Human_list that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {human_listFindUniqueOrThrowArgs} args - Arguments to find a Human_list
     * @example
     * // Get one Human_list
     * const human_list = await prisma.human_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends human_listFindUniqueOrThrowArgs>(args: SelectSubset<T, human_listFindUniqueOrThrowArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Human_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_listFindFirstArgs} args - Arguments to find a Human_list
     * @example
     * // Get one Human_list
     * const human_list = await prisma.human_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends human_listFindFirstArgs>(args?: SelectSubset<T, human_listFindFirstArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Human_list that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_listFindFirstOrThrowArgs} args - Arguments to find a Human_list
     * @example
     * // Get one Human_list
     * const human_list = await prisma.human_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends human_listFindFirstOrThrowArgs>(args?: SelectSubset<T, human_listFindFirstOrThrowArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Human_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_listFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Human_lists
     * const human_lists = await prisma.human_list.findMany()
     * 
     * // Get first 10 Human_lists
     * const human_lists = await prisma.human_list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const human_listWithIdOnly = await prisma.human_list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends human_listFindManyArgs>(args?: SelectSubset<T, human_listFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Human_list.
     * @param {human_listCreateArgs} args - Arguments to create a Human_list.
     * @example
     * // Create one Human_list
     * const Human_list = await prisma.human_list.create({
     *   data: {
     *     // ... data to create a Human_list
     *   }
     * })
     * 
     */
    create<T extends human_listCreateArgs>(args: SelectSubset<T, human_listCreateArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Human_lists.
     * @param {human_listCreateManyArgs} args - Arguments to create many Human_lists.
     * @example
     * // Create many Human_lists
     * const human_list = await prisma.human_list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends human_listCreateManyArgs>(args?: SelectSubset<T, human_listCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Human_lists and returns the data saved in the database.
     * @param {human_listCreateManyAndReturnArgs} args - Arguments to create many Human_lists.
     * @example
     * // Create many Human_lists
     * const human_list = await prisma.human_list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Human_lists and only return the `id`
     * const human_listWithIdOnly = await prisma.human_list.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends human_listCreateManyAndReturnArgs>(args?: SelectSubset<T, human_listCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Human_list.
     * @param {human_listDeleteArgs} args - Arguments to delete one Human_list.
     * @example
     * // Delete one Human_list
     * const Human_list = await prisma.human_list.delete({
     *   where: {
     *     // ... filter to delete one Human_list
     *   }
     * })
     * 
     */
    delete<T extends human_listDeleteArgs>(args: SelectSubset<T, human_listDeleteArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Human_list.
     * @param {human_listUpdateArgs} args - Arguments to update one Human_list.
     * @example
     * // Update one Human_list
     * const human_list = await prisma.human_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends human_listUpdateArgs>(args: SelectSubset<T, human_listUpdateArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Human_lists.
     * @param {human_listDeleteManyArgs} args - Arguments to filter Human_lists to delete.
     * @example
     * // Delete a few Human_lists
     * const { count } = await prisma.human_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends human_listDeleteManyArgs>(args?: SelectSubset<T, human_listDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Human_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Human_lists
     * const human_list = await prisma.human_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends human_listUpdateManyArgs>(args: SelectSubset<T, human_listUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Human_list.
     * @param {human_listUpsertArgs} args - Arguments to update or create a Human_list.
     * @example
     * // Update or create a Human_list
     * const human_list = await prisma.human_list.upsert({
     *   create: {
     *     // ... data to create a Human_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Human_list we want to update
     *   }
     * })
     */
    upsert<T extends human_listUpsertArgs>(args: SelectSubset<T, human_listUpsertArgs<ExtArgs>>): Prisma__human_listClient<$Result.GetResult<Prisma.$human_listPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Human_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_listCountArgs} args - Arguments to filter Human_lists to count.
     * @example
     * // Count the number of Human_lists
     * const count = await prisma.human_list.count({
     *   where: {
     *     // ... the filter for the Human_lists we want to count
     *   }
     * })
    **/
    count<T extends human_listCountArgs>(
      args?: Subset<T, human_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Human_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Human_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Human_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Human_listAggregateArgs>(args: Subset<T, Human_listAggregateArgs>): Prisma.PrismaPromise<GetHuman_listAggregateType<T>>

    /**
     * Group by Human_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {human_listGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends human_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: human_listGroupByArgs['orderBy'] }
        : { orderBy?: human_listGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, human_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHuman_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the human_list model
   */
  readonly fields: human_listFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for human_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__human_listClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the human_list model
   */ 
  interface human_listFieldRefs {
    readonly id: FieldRef<"human_list", 'String'>
    readonly lcms_server_id: FieldRef<"human_list", 'String'>
    readonly name: FieldRef<"human_list", 'String'>
    readonly is_deleted: FieldRef<"human_list", 'Boolean'>
    readonly time_created: FieldRef<"human_list", 'DateTime'>
    readonly time_modified: FieldRef<"human_list", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * human_list findUnique
   */
  export type human_listFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * Filter, which human_list to fetch.
     */
    where: human_listWhereUniqueInput
  }

  /**
   * human_list findUniqueOrThrow
   */
  export type human_listFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * Filter, which human_list to fetch.
     */
    where: human_listWhereUniqueInput
  }

  /**
   * human_list findFirst
   */
  export type human_listFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * Filter, which human_list to fetch.
     */
    where?: human_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_lists to fetch.
     */
    orderBy?: human_listOrderByWithRelationInput | human_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for human_lists.
     */
    cursor?: human_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of human_lists.
     */
    distinct?: Human_listScalarFieldEnum | Human_listScalarFieldEnum[]
  }

  /**
   * human_list findFirstOrThrow
   */
  export type human_listFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * Filter, which human_list to fetch.
     */
    where?: human_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_lists to fetch.
     */
    orderBy?: human_listOrderByWithRelationInput | human_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for human_lists.
     */
    cursor?: human_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of human_lists.
     */
    distinct?: Human_listScalarFieldEnum | Human_listScalarFieldEnum[]
  }

  /**
   * human_list findMany
   */
  export type human_listFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * Filter, which human_lists to fetch.
     */
    where?: human_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of human_lists to fetch.
     */
    orderBy?: human_listOrderByWithRelationInput | human_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing human_lists.
     */
    cursor?: human_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` human_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` human_lists.
     */
    skip?: number
    distinct?: Human_listScalarFieldEnum | Human_listScalarFieldEnum[]
  }

  /**
   * human_list create
   */
  export type human_listCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * The data needed to create a human_list.
     */
    data: XOR<human_listCreateInput, human_listUncheckedCreateInput>
  }

  /**
   * human_list createMany
   */
  export type human_listCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many human_lists.
     */
    data: human_listCreateManyInput | human_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * human_list createManyAndReturn
   */
  export type human_listCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many human_lists.
     */
    data: human_listCreateManyInput | human_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * human_list update
   */
  export type human_listUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * The data needed to update a human_list.
     */
    data: XOR<human_listUpdateInput, human_listUncheckedUpdateInput>
    /**
     * Choose, which human_list to update.
     */
    where: human_listWhereUniqueInput
  }

  /**
   * human_list updateMany
   */
  export type human_listUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update human_lists.
     */
    data: XOR<human_listUpdateManyMutationInput, human_listUncheckedUpdateManyInput>
    /**
     * Filter which human_lists to update
     */
    where?: human_listWhereInput
  }

  /**
   * human_list upsert
   */
  export type human_listUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * The filter to search for the human_list to update in case it exists.
     */
    where: human_listWhereUniqueInput
    /**
     * In case the human_list found by the `where` argument doesn't exist, create a new human_list with this data.
     */
    create: XOR<human_listCreateInput, human_listUncheckedCreateInput>
    /**
     * In case the human_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<human_listUpdateInput, human_listUncheckedUpdateInput>
  }

  /**
   * human_list delete
   */
  export type human_listDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
    /**
     * Filter which human_list to delete.
     */
    where: human_listWhereUniqueInput
  }

  /**
   * human_list deleteMany
   */
  export type human_listDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which human_lists to delete
     */
    where?: human_listWhereInput
  }

  /**
   * human_list without action
   */
  export type human_listDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the human_list
     */
    select?: human_listSelect<ExtArgs> | null
  }


  /**
   * Model monitoring_slot_summary_sync_parent
   */

  export type AggregateMonitoring_slot_summary_sync_parent = {
    _count: Monitoring_slot_summary_sync_parentCountAggregateOutputType | null
    _avg: Monitoring_slot_summary_sync_parentAvgAggregateOutputType | null
    _sum: Monitoring_slot_summary_sync_parentSumAggregateOutputType | null
    _min: Monitoring_slot_summary_sync_parentMinAggregateOutputType | null
    _max: Monitoring_slot_summary_sync_parentMaxAggregateOutputType | null
  }

  export type Monitoring_slot_summary_sync_parentAvgAggregateOutputType = {
    partition_key: number | null
  }

  export type Monitoring_slot_summary_sync_parentSumAggregateOutputType = {
    partition_key: number | null
  }

  export type Monitoring_slot_summary_sync_parentMinAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    slot_summary_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Monitoring_slot_summary_sync_parentMaxAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    slot_summary_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number | null
  }

  export type Monitoring_slot_summary_sync_parentCountAggregateOutputType = {
    id: number
    lcms_server_id: number
    slot_summary_id: number
    event_time: number
    data_file_path: number
    partition_key: number
    _all: number
  }


  export type Monitoring_slot_summary_sync_parentAvgAggregateInputType = {
    partition_key?: true
  }

  export type Monitoring_slot_summary_sync_parentSumAggregateInputType = {
    partition_key?: true
  }

  export type Monitoring_slot_summary_sync_parentMinAggregateInputType = {
    id?: true
    lcms_server_id?: true
    slot_summary_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Monitoring_slot_summary_sync_parentMaxAggregateInputType = {
    id?: true
    lcms_server_id?: true
    slot_summary_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
  }

  export type Monitoring_slot_summary_sync_parentCountAggregateInputType = {
    id?: true
    lcms_server_id?: true
    slot_summary_id?: true
    event_time?: true
    data_file_path?: true
    partition_key?: true
    _all?: true
  }

  export type Monitoring_slot_summary_sync_parentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monitoring_slot_summary_sync_parent to aggregate.
     */
    where?: monitoring_slot_summary_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_slot_summary_sync_parents to fetch.
     */
    orderBy?: monitoring_slot_summary_sync_parentOrderByWithRelationInput | monitoring_slot_summary_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: monitoring_slot_summary_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_slot_summary_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_slot_summary_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned monitoring_slot_summary_sync_parents
    **/
    _count?: true | Monitoring_slot_summary_sync_parentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Monitoring_slot_summary_sync_parentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Monitoring_slot_summary_sync_parentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Monitoring_slot_summary_sync_parentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Monitoring_slot_summary_sync_parentMaxAggregateInputType
  }

  export type GetMonitoring_slot_summary_sync_parentAggregateType<T extends Monitoring_slot_summary_sync_parentAggregateArgs> = {
        [P in keyof T & keyof AggregateMonitoring_slot_summary_sync_parent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonitoring_slot_summary_sync_parent[P]>
      : GetScalarType<T[P], AggregateMonitoring_slot_summary_sync_parent[P]>
  }




  export type monitoring_slot_summary_sync_parentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monitoring_slot_summary_sync_parentWhereInput
    orderBy?: monitoring_slot_summary_sync_parentOrderByWithAggregationInput | monitoring_slot_summary_sync_parentOrderByWithAggregationInput[]
    by: Monitoring_slot_summary_sync_parentScalarFieldEnum[] | Monitoring_slot_summary_sync_parentScalarFieldEnum
    having?: monitoring_slot_summary_sync_parentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Monitoring_slot_summary_sync_parentCountAggregateInputType | true
    _avg?: Monitoring_slot_summary_sync_parentAvgAggregateInputType
    _sum?: Monitoring_slot_summary_sync_parentSumAggregateInputType
    _min?: Monitoring_slot_summary_sync_parentMinAggregateInputType
    _max?: Monitoring_slot_summary_sync_parentMaxAggregateInputType
  }

  export type Monitoring_slot_summary_sync_parentGroupByOutputType = {
    id: string
    lcms_server_id: string | null
    slot_summary_id: string | null
    event_time: Date | null
    data_file_path: string | null
    partition_key: number
    _count: Monitoring_slot_summary_sync_parentCountAggregateOutputType | null
    _avg: Monitoring_slot_summary_sync_parentAvgAggregateOutputType | null
    _sum: Monitoring_slot_summary_sync_parentSumAggregateOutputType | null
    _min: Monitoring_slot_summary_sync_parentMinAggregateOutputType | null
    _max: Monitoring_slot_summary_sync_parentMaxAggregateOutputType | null
  }

  type GetMonitoring_slot_summary_sync_parentGroupByPayload<T extends monitoring_slot_summary_sync_parentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Monitoring_slot_summary_sync_parentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Monitoring_slot_summary_sync_parentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Monitoring_slot_summary_sync_parentGroupByOutputType[P]>
            : GetScalarType<T[P], Monitoring_slot_summary_sync_parentGroupByOutputType[P]>
        }
      >
    >


  export type monitoring_slot_summary_sync_parentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    slot_summary_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["monitoring_slot_summary_sync_parent"]>

  export type monitoring_slot_summary_sync_parentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    slot_summary_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }, ExtArgs["result"]["monitoring_slot_summary_sync_parent"]>

  export type monitoring_slot_summary_sync_parentSelectScalar = {
    id?: boolean
    lcms_server_id?: boolean
    slot_summary_id?: boolean
    event_time?: boolean
    data_file_path?: boolean
    partition_key?: boolean
  }


  export type $monitoring_slot_summary_sync_parentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "monitoring_slot_summary_sync_parent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcms_server_id: string | null
      slot_summary_id: string | null
      event_time: Date | null
      data_file_path: string | null
      partition_key: number
    }, ExtArgs["result"]["monitoring_slot_summary_sync_parent"]>
    composites: {}
  }

  type monitoring_slot_summary_sync_parentGetPayload<S extends boolean | null | undefined | monitoring_slot_summary_sync_parentDefaultArgs> = $Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload, S>

  type monitoring_slot_summary_sync_parentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<monitoring_slot_summary_sync_parentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Monitoring_slot_summary_sync_parentCountAggregateInputType | true
    }

  export interface monitoring_slot_summary_sync_parentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['monitoring_slot_summary_sync_parent'], meta: { name: 'monitoring_slot_summary_sync_parent' } }
    /**
     * Find zero or one Monitoring_slot_summary_sync_parent that matches the filter.
     * @param {monitoring_slot_summary_sync_parentFindUniqueArgs} args - Arguments to find a Monitoring_slot_summary_sync_parent
     * @example
     * // Get one Monitoring_slot_summary_sync_parent
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends monitoring_slot_summary_sync_parentFindUniqueArgs>(args: SelectSubset<T, monitoring_slot_summary_sync_parentFindUniqueArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Monitoring_slot_summary_sync_parent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {monitoring_slot_summary_sync_parentFindUniqueOrThrowArgs} args - Arguments to find a Monitoring_slot_summary_sync_parent
     * @example
     * // Get one Monitoring_slot_summary_sync_parent
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends monitoring_slot_summary_sync_parentFindUniqueOrThrowArgs>(args: SelectSubset<T, monitoring_slot_summary_sync_parentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Monitoring_slot_summary_sync_parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_slot_summary_sync_parentFindFirstArgs} args - Arguments to find a Monitoring_slot_summary_sync_parent
     * @example
     * // Get one Monitoring_slot_summary_sync_parent
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends monitoring_slot_summary_sync_parentFindFirstArgs>(args?: SelectSubset<T, monitoring_slot_summary_sync_parentFindFirstArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Monitoring_slot_summary_sync_parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_slot_summary_sync_parentFindFirstOrThrowArgs} args - Arguments to find a Monitoring_slot_summary_sync_parent
     * @example
     * // Get one Monitoring_slot_summary_sync_parent
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends monitoring_slot_summary_sync_parentFindFirstOrThrowArgs>(args?: SelectSubset<T, monitoring_slot_summary_sync_parentFindFirstOrThrowArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Monitoring_slot_summary_sync_parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_slot_summary_sync_parentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monitoring_slot_summary_sync_parents
     * const monitoring_slot_summary_sync_parents = await prisma.monitoring_slot_summary_sync_parent.findMany()
     * 
     * // Get first 10 Monitoring_slot_summary_sync_parents
     * const monitoring_slot_summary_sync_parents = await prisma.monitoring_slot_summary_sync_parent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monitoring_slot_summary_sync_parentWithIdOnly = await prisma.monitoring_slot_summary_sync_parent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends monitoring_slot_summary_sync_parentFindManyArgs>(args?: SelectSubset<T, monitoring_slot_summary_sync_parentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Monitoring_slot_summary_sync_parent.
     * @param {monitoring_slot_summary_sync_parentCreateArgs} args - Arguments to create a Monitoring_slot_summary_sync_parent.
     * @example
     * // Create one Monitoring_slot_summary_sync_parent
     * const Monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.create({
     *   data: {
     *     // ... data to create a Monitoring_slot_summary_sync_parent
     *   }
     * })
     * 
     */
    create<T extends monitoring_slot_summary_sync_parentCreateArgs>(args: SelectSubset<T, monitoring_slot_summary_sync_parentCreateArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Monitoring_slot_summary_sync_parents.
     * @param {monitoring_slot_summary_sync_parentCreateManyArgs} args - Arguments to create many Monitoring_slot_summary_sync_parents.
     * @example
     * // Create many Monitoring_slot_summary_sync_parents
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends monitoring_slot_summary_sync_parentCreateManyArgs>(args?: SelectSubset<T, monitoring_slot_summary_sync_parentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monitoring_slot_summary_sync_parents and returns the data saved in the database.
     * @param {monitoring_slot_summary_sync_parentCreateManyAndReturnArgs} args - Arguments to create many Monitoring_slot_summary_sync_parents.
     * @example
     * // Create many Monitoring_slot_summary_sync_parents
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monitoring_slot_summary_sync_parents and only return the `id`
     * const monitoring_slot_summary_sync_parentWithIdOnly = await prisma.monitoring_slot_summary_sync_parent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends monitoring_slot_summary_sync_parentCreateManyAndReturnArgs>(args?: SelectSubset<T, monitoring_slot_summary_sync_parentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Monitoring_slot_summary_sync_parent.
     * @param {monitoring_slot_summary_sync_parentDeleteArgs} args - Arguments to delete one Monitoring_slot_summary_sync_parent.
     * @example
     * // Delete one Monitoring_slot_summary_sync_parent
     * const Monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.delete({
     *   where: {
     *     // ... filter to delete one Monitoring_slot_summary_sync_parent
     *   }
     * })
     * 
     */
    delete<T extends monitoring_slot_summary_sync_parentDeleteArgs>(args: SelectSubset<T, monitoring_slot_summary_sync_parentDeleteArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Monitoring_slot_summary_sync_parent.
     * @param {monitoring_slot_summary_sync_parentUpdateArgs} args - Arguments to update one Monitoring_slot_summary_sync_parent.
     * @example
     * // Update one Monitoring_slot_summary_sync_parent
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends monitoring_slot_summary_sync_parentUpdateArgs>(args: SelectSubset<T, monitoring_slot_summary_sync_parentUpdateArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Monitoring_slot_summary_sync_parents.
     * @param {monitoring_slot_summary_sync_parentDeleteManyArgs} args - Arguments to filter Monitoring_slot_summary_sync_parents to delete.
     * @example
     * // Delete a few Monitoring_slot_summary_sync_parents
     * const { count } = await prisma.monitoring_slot_summary_sync_parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends monitoring_slot_summary_sync_parentDeleteManyArgs>(args?: SelectSubset<T, monitoring_slot_summary_sync_parentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monitoring_slot_summary_sync_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_slot_summary_sync_parentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monitoring_slot_summary_sync_parents
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends monitoring_slot_summary_sync_parentUpdateManyArgs>(args: SelectSubset<T, monitoring_slot_summary_sync_parentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Monitoring_slot_summary_sync_parent.
     * @param {monitoring_slot_summary_sync_parentUpsertArgs} args - Arguments to update or create a Monitoring_slot_summary_sync_parent.
     * @example
     * // Update or create a Monitoring_slot_summary_sync_parent
     * const monitoring_slot_summary_sync_parent = await prisma.monitoring_slot_summary_sync_parent.upsert({
     *   create: {
     *     // ... data to create a Monitoring_slot_summary_sync_parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monitoring_slot_summary_sync_parent we want to update
     *   }
     * })
     */
    upsert<T extends monitoring_slot_summary_sync_parentUpsertArgs>(args: SelectSubset<T, monitoring_slot_summary_sync_parentUpsertArgs<ExtArgs>>): Prisma__monitoring_slot_summary_sync_parentClient<$Result.GetResult<Prisma.$monitoring_slot_summary_sync_parentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Monitoring_slot_summary_sync_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_slot_summary_sync_parentCountArgs} args - Arguments to filter Monitoring_slot_summary_sync_parents to count.
     * @example
     * // Count the number of Monitoring_slot_summary_sync_parents
     * const count = await prisma.monitoring_slot_summary_sync_parent.count({
     *   where: {
     *     // ... the filter for the Monitoring_slot_summary_sync_parents we want to count
     *   }
     * })
    **/
    count<T extends monitoring_slot_summary_sync_parentCountArgs>(
      args?: Subset<T, monitoring_slot_summary_sync_parentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Monitoring_slot_summary_sync_parentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monitoring_slot_summary_sync_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Monitoring_slot_summary_sync_parentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Monitoring_slot_summary_sync_parentAggregateArgs>(args: Subset<T, Monitoring_slot_summary_sync_parentAggregateArgs>): Prisma.PrismaPromise<GetMonitoring_slot_summary_sync_parentAggregateType<T>>

    /**
     * Group by Monitoring_slot_summary_sync_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monitoring_slot_summary_sync_parentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends monitoring_slot_summary_sync_parentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: monitoring_slot_summary_sync_parentGroupByArgs['orderBy'] }
        : { orderBy?: monitoring_slot_summary_sync_parentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, monitoring_slot_summary_sync_parentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoring_slot_summary_sync_parentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the monitoring_slot_summary_sync_parent model
   */
  readonly fields: monitoring_slot_summary_sync_parentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for monitoring_slot_summary_sync_parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__monitoring_slot_summary_sync_parentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the monitoring_slot_summary_sync_parent model
   */ 
  interface monitoring_slot_summary_sync_parentFieldRefs {
    readonly id: FieldRef<"monitoring_slot_summary_sync_parent", 'String'>
    readonly lcms_server_id: FieldRef<"monitoring_slot_summary_sync_parent", 'String'>
    readonly slot_summary_id: FieldRef<"monitoring_slot_summary_sync_parent", 'String'>
    readonly event_time: FieldRef<"monitoring_slot_summary_sync_parent", 'DateTime'>
    readonly data_file_path: FieldRef<"monitoring_slot_summary_sync_parent", 'String'>
    readonly partition_key: FieldRef<"monitoring_slot_summary_sync_parent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * monitoring_slot_summary_sync_parent findUnique
   */
  export type monitoring_slot_summary_sync_parentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which monitoring_slot_summary_sync_parent to fetch.
     */
    where: monitoring_slot_summary_sync_parentWhereUniqueInput
  }

  /**
   * monitoring_slot_summary_sync_parent findUniqueOrThrow
   */
  export type monitoring_slot_summary_sync_parentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which monitoring_slot_summary_sync_parent to fetch.
     */
    where: monitoring_slot_summary_sync_parentWhereUniqueInput
  }

  /**
   * monitoring_slot_summary_sync_parent findFirst
   */
  export type monitoring_slot_summary_sync_parentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which monitoring_slot_summary_sync_parent to fetch.
     */
    where?: monitoring_slot_summary_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_slot_summary_sync_parents to fetch.
     */
    orderBy?: monitoring_slot_summary_sync_parentOrderByWithRelationInput | monitoring_slot_summary_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monitoring_slot_summary_sync_parents.
     */
    cursor?: monitoring_slot_summary_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_slot_summary_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_slot_summary_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monitoring_slot_summary_sync_parents.
     */
    distinct?: Monitoring_slot_summary_sync_parentScalarFieldEnum | Monitoring_slot_summary_sync_parentScalarFieldEnum[]
  }

  /**
   * monitoring_slot_summary_sync_parent findFirstOrThrow
   */
  export type monitoring_slot_summary_sync_parentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which monitoring_slot_summary_sync_parent to fetch.
     */
    where?: monitoring_slot_summary_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_slot_summary_sync_parents to fetch.
     */
    orderBy?: monitoring_slot_summary_sync_parentOrderByWithRelationInput | monitoring_slot_summary_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monitoring_slot_summary_sync_parents.
     */
    cursor?: monitoring_slot_summary_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_slot_summary_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_slot_summary_sync_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monitoring_slot_summary_sync_parents.
     */
    distinct?: Monitoring_slot_summary_sync_parentScalarFieldEnum | Monitoring_slot_summary_sync_parentScalarFieldEnum[]
  }

  /**
   * monitoring_slot_summary_sync_parent findMany
   */
  export type monitoring_slot_summary_sync_parentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * Filter, which monitoring_slot_summary_sync_parents to fetch.
     */
    where?: monitoring_slot_summary_sync_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monitoring_slot_summary_sync_parents to fetch.
     */
    orderBy?: monitoring_slot_summary_sync_parentOrderByWithRelationInput | monitoring_slot_summary_sync_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing monitoring_slot_summary_sync_parents.
     */
    cursor?: monitoring_slot_summary_sync_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monitoring_slot_summary_sync_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monitoring_slot_summary_sync_parents.
     */
    skip?: number
    distinct?: Monitoring_slot_summary_sync_parentScalarFieldEnum | Monitoring_slot_summary_sync_parentScalarFieldEnum[]
  }

  /**
   * monitoring_slot_summary_sync_parent create
   */
  export type monitoring_slot_summary_sync_parentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * The data needed to create a monitoring_slot_summary_sync_parent.
     */
    data: XOR<monitoring_slot_summary_sync_parentCreateInput, monitoring_slot_summary_sync_parentUncheckedCreateInput>
  }

  /**
   * monitoring_slot_summary_sync_parent createMany
   */
  export type monitoring_slot_summary_sync_parentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many monitoring_slot_summary_sync_parents.
     */
    data: monitoring_slot_summary_sync_parentCreateManyInput | monitoring_slot_summary_sync_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monitoring_slot_summary_sync_parent createManyAndReturn
   */
  export type monitoring_slot_summary_sync_parentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many monitoring_slot_summary_sync_parents.
     */
    data: monitoring_slot_summary_sync_parentCreateManyInput | monitoring_slot_summary_sync_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monitoring_slot_summary_sync_parent update
   */
  export type monitoring_slot_summary_sync_parentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * The data needed to update a monitoring_slot_summary_sync_parent.
     */
    data: XOR<monitoring_slot_summary_sync_parentUpdateInput, monitoring_slot_summary_sync_parentUncheckedUpdateInput>
    /**
     * Choose, which monitoring_slot_summary_sync_parent to update.
     */
    where: monitoring_slot_summary_sync_parentWhereUniqueInput
  }

  /**
   * monitoring_slot_summary_sync_parent updateMany
   */
  export type monitoring_slot_summary_sync_parentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update monitoring_slot_summary_sync_parents.
     */
    data: XOR<monitoring_slot_summary_sync_parentUpdateManyMutationInput, monitoring_slot_summary_sync_parentUncheckedUpdateManyInput>
    /**
     * Filter which monitoring_slot_summary_sync_parents to update
     */
    where?: monitoring_slot_summary_sync_parentWhereInput
  }

  /**
   * monitoring_slot_summary_sync_parent upsert
   */
  export type monitoring_slot_summary_sync_parentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * The filter to search for the monitoring_slot_summary_sync_parent to update in case it exists.
     */
    where: monitoring_slot_summary_sync_parentWhereUniqueInput
    /**
     * In case the monitoring_slot_summary_sync_parent found by the `where` argument doesn't exist, create a new monitoring_slot_summary_sync_parent with this data.
     */
    create: XOR<monitoring_slot_summary_sync_parentCreateInput, monitoring_slot_summary_sync_parentUncheckedCreateInput>
    /**
     * In case the monitoring_slot_summary_sync_parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<monitoring_slot_summary_sync_parentUpdateInput, monitoring_slot_summary_sync_parentUncheckedUpdateInput>
  }

  /**
   * monitoring_slot_summary_sync_parent delete
   */
  export type monitoring_slot_summary_sync_parentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
    /**
     * Filter which monitoring_slot_summary_sync_parent to delete.
     */
    where: monitoring_slot_summary_sync_parentWhereUniqueInput
  }

  /**
   * monitoring_slot_summary_sync_parent deleteMany
   */
  export type monitoring_slot_summary_sync_parentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monitoring_slot_summary_sync_parents to delete
     */
    where?: monitoring_slot_summary_sync_parentWhereInput
  }

  /**
   * monitoring_slot_summary_sync_parent without action
   */
  export type monitoring_slot_summary_sync_parentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monitoring_slot_summary_sync_parent
     */
    select?: monitoring_slot_summary_sync_parentSelect<ExtArgs> | null
  }


  /**
   * Model nvr_cfg
   */

  export type AggregateNvr_cfg = {
    _count: Nvr_cfgCountAggregateOutputType | null
    _min: Nvr_cfgMinAggregateOutputType | null
    _max: Nvr_cfgMaxAggregateOutputType | null
  }

  export type Nvr_cfgMinAggregateOutputType = {
    id: string | null
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Nvr_cfgMaxAggregateOutputType = {
    id: string | null
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Nvr_cfgCountAggregateOutputType = {
    id: number
    name: number
    search_tag: number
    cfg_data: number
    user_id_owner: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Nvr_cfgMinAggregateInputType = {
    id?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Nvr_cfgMaxAggregateInputType = {
    id?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Nvr_cfgCountAggregateInputType = {
    id?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Nvr_cfgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nvr_cfg to aggregate.
     */
    where?: nvr_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_cfgs to fetch.
     */
    orderBy?: nvr_cfgOrderByWithRelationInput | nvr_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nvr_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nvr_cfgs
    **/
    _count?: true | Nvr_cfgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nvr_cfgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nvr_cfgMaxAggregateInputType
  }

  export type GetNvr_cfgAggregateType<T extends Nvr_cfgAggregateArgs> = {
        [P in keyof T & keyof AggregateNvr_cfg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNvr_cfg[P]>
      : GetScalarType<T[P], AggregateNvr_cfg[P]>
  }




  export type nvr_cfgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nvr_cfgWhereInput
    orderBy?: nvr_cfgOrderByWithAggregationInput | nvr_cfgOrderByWithAggregationInput[]
    by: Nvr_cfgScalarFieldEnum[] | Nvr_cfgScalarFieldEnum
    having?: nvr_cfgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nvr_cfgCountAggregateInputType | true
    _min?: Nvr_cfgMinAggregateInputType
    _max?: Nvr_cfgMaxAggregateInputType
  }

  export type Nvr_cfgGroupByOutputType = {
    id: string
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
    _count: Nvr_cfgCountAggregateOutputType | null
    _min: Nvr_cfgMinAggregateOutputType | null
    _max: Nvr_cfgMaxAggregateOutputType | null
  }

  type GetNvr_cfgGroupByPayload<T extends nvr_cfgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nvr_cfgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nvr_cfgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nvr_cfgGroupByOutputType[P]>
            : GetScalarType<T[P], Nvr_cfgGroupByOutputType[P]>
        }
      >
    >


  export type nvr_cfgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["nvr_cfg"]>

  export type nvr_cfgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["nvr_cfg"]>

  export type nvr_cfgSelectScalar = {
    id?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }


  export type $nvr_cfgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nvr_cfg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      search_tag: string | null
      cfg_data: Buffer | null
      user_id_owner: string | null
      time_created: Date | null
      time_modified: Date | null
    }, ExtArgs["result"]["nvr_cfg"]>
    composites: {}
  }

  type nvr_cfgGetPayload<S extends boolean | null | undefined | nvr_cfgDefaultArgs> = $Result.GetResult<Prisma.$nvr_cfgPayload, S>

  type nvr_cfgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<nvr_cfgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Nvr_cfgCountAggregateInputType | true
    }

  export interface nvr_cfgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nvr_cfg'], meta: { name: 'nvr_cfg' } }
    /**
     * Find zero or one Nvr_cfg that matches the filter.
     * @param {nvr_cfgFindUniqueArgs} args - Arguments to find a Nvr_cfg
     * @example
     * // Get one Nvr_cfg
     * const nvr_cfg = await prisma.nvr_cfg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nvr_cfgFindUniqueArgs>(args: SelectSubset<T, nvr_cfgFindUniqueArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Nvr_cfg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {nvr_cfgFindUniqueOrThrowArgs} args - Arguments to find a Nvr_cfg
     * @example
     * // Get one Nvr_cfg
     * const nvr_cfg = await prisma.nvr_cfg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nvr_cfgFindUniqueOrThrowArgs>(args: SelectSubset<T, nvr_cfgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Nvr_cfg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_cfgFindFirstArgs} args - Arguments to find a Nvr_cfg
     * @example
     * // Get one Nvr_cfg
     * const nvr_cfg = await prisma.nvr_cfg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nvr_cfgFindFirstArgs>(args?: SelectSubset<T, nvr_cfgFindFirstArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Nvr_cfg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_cfgFindFirstOrThrowArgs} args - Arguments to find a Nvr_cfg
     * @example
     * // Get one Nvr_cfg
     * const nvr_cfg = await prisma.nvr_cfg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nvr_cfgFindFirstOrThrowArgs>(args?: SelectSubset<T, nvr_cfgFindFirstOrThrowArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Nvr_cfgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_cfgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nvr_cfgs
     * const nvr_cfgs = await prisma.nvr_cfg.findMany()
     * 
     * // Get first 10 Nvr_cfgs
     * const nvr_cfgs = await prisma.nvr_cfg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nvr_cfgWithIdOnly = await prisma.nvr_cfg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nvr_cfgFindManyArgs>(args?: SelectSubset<T, nvr_cfgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Nvr_cfg.
     * @param {nvr_cfgCreateArgs} args - Arguments to create a Nvr_cfg.
     * @example
     * // Create one Nvr_cfg
     * const Nvr_cfg = await prisma.nvr_cfg.create({
     *   data: {
     *     // ... data to create a Nvr_cfg
     *   }
     * })
     * 
     */
    create<T extends nvr_cfgCreateArgs>(args: SelectSubset<T, nvr_cfgCreateArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Nvr_cfgs.
     * @param {nvr_cfgCreateManyArgs} args - Arguments to create many Nvr_cfgs.
     * @example
     * // Create many Nvr_cfgs
     * const nvr_cfg = await prisma.nvr_cfg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nvr_cfgCreateManyArgs>(args?: SelectSubset<T, nvr_cfgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nvr_cfgs and returns the data saved in the database.
     * @param {nvr_cfgCreateManyAndReturnArgs} args - Arguments to create many Nvr_cfgs.
     * @example
     * // Create many Nvr_cfgs
     * const nvr_cfg = await prisma.nvr_cfg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nvr_cfgs and only return the `id`
     * const nvr_cfgWithIdOnly = await prisma.nvr_cfg.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nvr_cfgCreateManyAndReturnArgs>(args?: SelectSubset<T, nvr_cfgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Nvr_cfg.
     * @param {nvr_cfgDeleteArgs} args - Arguments to delete one Nvr_cfg.
     * @example
     * // Delete one Nvr_cfg
     * const Nvr_cfg = await prisma.nvr_cfg.delete({
     *   where: {
     *     // ... filter to delete one Nvr_cfg
     *   }
     * })
     * 
     */
    delete<T extends nvr_cfgDeleteArgs>(args: SelectSubset<T, nvr_cfgDeleteArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Nvr_cfg.
     * @param {nvr_cfgUpdateArgs} args - Arguments to update one Nvr_cfg.
     * @example
     * // Update one Nvr_cfg
     * const nvr_cfg = await prisma.nvr_cfg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nvr_cfgUpdateArgs>(args: SelectSubset<T, nvr_cfgUpdateArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Nvr_cfgs.
     * @param {nvr_cfgDeleteManyArgs} args - Arguments to filter Nvr_cfgs to delete.
     * @example
     * // Delete a few Nvr_cfgs
     * const { count } = await prisma.nvr_cfg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nvr_cfgDeleteManyArgs>(args?: SelectSubset<T, nvr_cfgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nvr_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_cfgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nvr_cfgs
     * const nvr_cfg = await prisma.nvr_cfg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nvr_cfgUpdateManyArgs>(args: SelectSubset<T, nvr_cfgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nvr_cfg.
     * @param {nvr_cfgUpsertArgs} args - Arguments to update or create a Nvr_cfg.
     * @example
     * // Update or create a Nvr_cfg
     * const nvr_cfg = await prisma.nvr_cfg.upsert({
     *   create: {
     *     // ... data to create a Nvr_cfg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nvr_cfg we want to update
     *   }
     * })
     */
    upsert<T extends nvr_cfgUpsertArgs>(args: SelectSubset<T, nvr_cfgUpsertArgs<ExtArgs>>): Prisma__nvr_cfgClient<$Result.GetResult<Prisma.$nvr_cfgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Nvr_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_cfgCountArgs} args - Arguments to filter Nvr_cfgs to count.
     * @example
     * // Count the number of Nvr_cfgs
     * const count = await prisma.nvr_cfg.count({
     *   where: {
     *     // ... the filter for the Nvr_cfgs we want to count
     *   }
     * })
    **/
    count<T extends nvr_cfgCountArgs>(
      args?: Subset<T, nvr_cfgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nvr_cfgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nvr_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nvr_cfgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Nvr_cfgAggregateArgs>(args: Subset<T, Nvr_cfgAggregateArgs>): Prisma.PrismaPromise<GetNvr_cfgAggregateType<T>>

    /**
     * Group by Nvr_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_cfgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nvr_cfgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nvr_cfgGroupByArgs['orderBy'] }
        : { orderBy?: nvr_cfgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nvr_cfgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNvr_cfgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nvr_cfg model
   */
  readonly fields: nvr_cfgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nvr_cfg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nvr_cfgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the nvr_cfg model
   */ 
  interface nvr_cfgFieldRefs {
    readonly id: FieldRef<"nvr_cfg", 'String'>
    readonly name: FieldRef<"nvr_cfg", 'String'>
    readonly search_tag: FieldRef<"nvr_cfg", 'String'>
    readonly cfg_data: FieldRef<"nvr_cfg", 'Bytes'>
    readonly user_id_owner: FieldRef<"nvr_cfg", 'String'>
    readonly time_created: FieldRef<"nvr_cfg", 'DateTime'>
    readonly time_modified: FieldRef<"nvr_cfg", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nvr_cfg findUnique
   */
  export type nvr_cfgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_cfg to fetch.
     */
    where: nvr_cfgWhereUniqueInput
  }

  /**
   * nvr_cfg findUniqueOrThrow
   */
  export type nvr_cfgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_cfg to fetch.
     */
    where: nvr_cfgWhereUniqueInput
  }

  /**
   * nvr_cfg findFirst
   */
  export type nvr_cfgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_cfg to fetch.
     */
    where?: nvr_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_cfgs to fetch.
     */
    orderBy?: nvr_cfgOrderByWithRelationInput | nvr_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nvr_cfgs.
     */
    cursor?: nvr_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nvr_cfgs.
     */
    distinct?: Nvr_cfgScalarFieldEnum | Nvr_cfgScalarFieldEnum[]
  }

  /**
   * nvr_cfg findFirstOrThrow
   */
  export type nvr_cfgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_cfg to fetch.
     */
    where?: nvr_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_cfgs to fetch.
     */
    orderBy?: nvr_cfgOrderByWithRelationInput | nvr_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nvr_cfgs.
     */
    cursor?: nvr_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nvr_cfgs.
     */
    distinct?: Nvr_cfgScalarFieldEnum | Nvr_cfgScalarFieldEnum[]
  }

  /**
   * nvr_cfg findMany
   */
  export type nvr_cfgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_cfgs to fetch.
     */
    where?: nvr_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_cfgs to fetch.
     */
    orderBy?: nvr_cfgOrderByWithRelationInput | nvr_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nvr_cfgs.
     */
    cursor?: nvr_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_cfgs.
     */
    skip?: number
    distinct?: Nvr_cfgScalarFieldEnum | Nvr_cfgScalarFieldEnum[]
  }

  /**
   * nvr_cfg create
   */
  export type nvr_cfgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * The data needed to create a nvr_cfg.
     */
    data: XOR<nvr_cfgCreateInput, nvr_cfgUncheckedCreateInput>
  }

  /**
   * nvr_cfg createMany
   */
  export type nvr_cfgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nvr_cfgs.
     */
    data: nvr_cfgCreateManyInput | nvr_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nvr_cfg createManyAndReturn
   */
  export type nvr_cfgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many nvr_cfgs.
     */
    data: nvr_cfgCreateManyInput | nvr_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nvr_cfg update
   */
  export type nvr_cfgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * The data needed to update a nvr_cfg.
     */
    data: XOR<nvr_cfgUpdateInput, nvr_cfgUncheckedUpdateInput>
    /**
     * Choose, which nvr_cfg to update.
     */
    where: nvr_cfgWhereUniqueInput
  }

  /**
   * nvr_cfg updateMany
   */
  export type nvr_cfgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nvr_cfgs.
     */
    data: XOR<nvr_cfgUpdateManyMutationInput, nvr_cfgUncheckedUpdateManyInput>
    /**
     * Filter which nvr_cfgs to update
     */
    where?: nvr_cfgWhereInput
  }

  /**
   * nvr_cfg upsert
   */
  export type nvr_cfgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * The filter to search for the nvr_cfg to update in case it exists.
     */
    where: nvr_cfgWhereUniqueInput
    /**
     * In case the nvr_cfg found by the `where` argument doesn't exist, create a new nvr_cfg with this data.
     */
    create: XOR<nvr_cfgCreateInput, nvr_cfgUncheckedCreateInput>
    /**
     * In case the nvr_cfg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nvr_cfgUpdateInput, nvr_cfgUncheckedUpdateInput>
  }

  /**
   * nvr_cfg delete
   */
  export type nvr_cfgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
    /**
     * Filter which nvr_cfg to delete.
     */
    where: nvr_cfgWhereUniqueInput
  }

  /**
   * nvr_cfg deleteMany
   */
  export type nvr_cfgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nvr_cfgs to delete
     */
    where?: nvr_cfgWhereInput
  }

  /**
   * nvr_cfg without action
   */
  export type nvr_cfgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_cfg
     */
    select?: nvr_cfgSelect<ExtArgs> | null
  }


  /**
   * Model nvr_channel_cfg
   */

  export type AggregateNvr_channel_cfg = {
    _count: Nvr_channel_cfgCountAggregateOutputType | null
    _avg: Nvr_channel_cfgAvgAggregateOutputType | null
    _sum: Nvr_channel_cfgSumAggregateOutputType | null
    _min: Nvr_channel_cfgMinAggregateOutputType | null
    _max: Nvr_channel_cfgMaxAggregateOutputType | null
  }

  export type Nvr_channel_cfgAvgAggregateOutputType = {
    nvr_channel_index: number | null
  }

  export type Nvr_channel_cfgSumAggregateOutputType = {
    nvr_channel_index: number | null
  }

  export type Nvr_channel_cfgMinAggregateOutputType = {
    id: string | null
    nvr_id: string | null
    nvr_channel_index: number | null
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Nvr_channel_cfgMaxAggregateOutputType = {
    id: string | null
    nvr_id: string | null
    nvr_channel_index: number | null
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Nvr_channel_cfgCountAggregateOutputType = {
    id: number
    nvr_id: number
    nvr_channel_index: number
    name: number
    search_tag: number
    cfg_data: number
    user_id_owner: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Nvr_channel_cfgAvgAggregateInputType = {
    nvr_channel_index?: true
  }

  export type Nvr_channel_cfgSumAggregateInputType = {
    nvr_channel_index?: true
  }

  export type Nvr_channel_cfgMinAggregateInputType = {
    id?: true
    nvr_id?: true
    nvr_channel_index?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Nvr_channel_cfgMaxAggregateInputType = {
    id?: true
    nvr_id?: true
    nvr_channel_index?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
  }

  export type Nvr_channel_cfgCountAggregateInputType = {
    id?: true
    nvr_id?: true
    nvr_channel_index?: true
    name?: true
    search_tag?: true
    cfg_data?: true
    user_id_owner?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Nvr_channel_cfgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nvr_channel_cfg to aggregate.
     */
    where?: nvr_channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_channel_cfgs to fetch.
     */
    orderBy?: nvr_channel_cfgOrderByWithRelationInput | nvr_channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nvr_channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_channel_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nvr_channel_cfgs
    **/
    _count?: true | Nvr_channel_cfgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nvr_channel_cfgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nvr_channel_cfgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nvr_channel_cfgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nvr_channel_cfgMaxAggregateInputType
  }

  export type GetNvr_channel_cfgAggregateType<T extends Nvr_channel_cfgAggregateArgs> = {
        [P in keyof T & keyof AggregateNvr_channel_cfg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNvr_channel_cfg[P]>
      : GetScalarType<T[P], AggregateNvr_channel_cfg[P]>
  }




  export type nvr_channel_cfgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nvr_channel_cfgWhereInput
    orderBy?: nvr_channel_cfgOrderByWithAggregationInput | nvr_channel_cfgOrderByWithAggregationInput[]
    by: Nvr_channel_cfgScalarFieldEnum[] | Nvr_channel_cfgScalarFieldEnum
    having?: nvr_channel_cfgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nvr_channel_cfgCountAggregateInputType | true
    _avg?: Nvr_channel_cfgAvgAggregateInputType
    _sum?: Nvr_channel_cfgSumAggregateInputType
    _min?: Nvr_channel_cfgMinAggregateInputType
    _max?: Nvr_channel_cfgMaxAggregateInputType
  }

  export type Nvr_channel_cfgGroupByOutputType = {
    id: string
    nvr_id: string | null
    nvr_channel_index: number | null
    name: string | null
    search_tag: string | null
    cfg_data: Buffer | null
    user_id_owner: string | null
    time_created: Date | null
    time_modified: Date | null
    _count: Nvr_channel_cfgCountAggregateOutputType | null
    _avg: Nvr_channel_cfgAvgAggregateOutputType | null
    _sum: Nvr_channel_cfgSumAggregateOutputType | null
    _min: Nvr_channel_cfgMinAggregateOutputType | null
    _max: Nvr_channel_cfgMaxAggregateOutputType | null
  }

  type GetNvr_channel_cfgGroupByPayload<T extends nvr_channel_cfgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nvr_channel_cfgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nvr_channel_cfgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nvr_channel_cfgGroupByOutputType[P]>
            : GetScalarType<T[P], Nvr_channel_cfgGroupByOutputType[P]>
        }
      >
    >


  export type nvr_channel_cfgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nvr_id?: boolean
    nvr_channel_index?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["nvr_channel_cfg"]>

  export type nvr_channel_cfgSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nvr_id?: boolean
    nvr_channel_index?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["nvr_channel_cfg"]>

  export type nvr_channel_cfgSelectScalar = {
    id?: boolean
    nvr_id?: boolean
    nvr_channel_index?: boolean
    name?: boolean
    search_tag?: boolean
    cfg_data?: boolean
    user_id_owner?: boolean
    time_created?: boolean
    time_modified?: boolean
  }


  export type $nvr_channel_cfgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nvr_channel_cfg"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nvr_id: string | null
      nvr_channel_index: number | null
      name: string | null
      search_tag: string | null
      cfg_data: Buffer | null
      user_id_owner: string | null
      time_created: Date | null
      time_modified: Date | null
    }, ExtArgs["result"]["nvr_channel_cfg"]>
    composites: {}
  }

  type nvr_channel_cfgGetPayload<S extends boolean | null | undefined | nvr_channel_cfgDefaultArgs> = $Result.GetResult<Prisma.$nvr_channel_cfgPayload, S>

  type nvr_channel_cfgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<nvr_channel_cfgFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Nvr_channel_cfgCountAggregateInputType | true
    }

  export interface nvr_channel_cfgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nvr_channel_cfg'], meta: { name: 'nvr_channel_cfg' } }
    /**
     * Find zero or one Nvr_channel_cfg that matches the filter.
     * @param {nvr_channel_cfgFindUniqueArgs} args - Arguments to find a Nvr_channel_cfg
     * @example
     * // Get one Nvr_channel_cfg
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nvr_channel_cfgFindUniqueArgs>(args: SelectSubset<T, nvr_channel_cfgFindUniqueArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Nvr_channel_cfg that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {nvr_channel_cfgFindUniqueOrThrowArgs} args - Arguments to find a Nvr_channel_cfg
     * @example
     * // Get one Nvr_channel_cfg
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nvr_channel_cfgFindUniqueOrThrowArgs>(args: SelectSubset<T, nvr_channel_cfgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Nvr_channel_cfg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_channel_cfgFindFirstArgs} args - Arguments to find a Nvr_channel_cfg
     * @example
     * // Get one Nvr_channel_cfg
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nvr_channel_cfgFindFirstArgs>(args?: SelectSubset<T, nvr_channel_cfgFindFirstArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Nvr_channel_cfg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_channel_cfgFindFirstOrThrowArgs} args - Arguments to find a Nvr_channel_cfg
     * @example
     * // Get one Nvr_channel_cfg
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nvr_channel_cfgFindFirstOrThrowArgs>(args?: SelectSubset<T, nvr_channel_cfgFindFirstOrThrowArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Nvr_channel_cfgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_channel_cfgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nvr_channel_cfgs
     * const nvr_channel_cfgs = await prisma.nvr_channel_cfg.findMany()
     * 
     * // Get first 10 Nvr_channel_cfgs
     * const nvr_channel_cfgs = await prisma.nvr_channel_cfg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nvr_channel_cfgWithIdOnly = await prisma.nvr_channel_cfg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nvr_channel_cfgFindManyArgs>(args?: SelectSubset<T, nvr_channel_cfgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Nvr_channel_cfg.
     * @param {nvr_channel_cfgCreateArgs} args - Arguments to create a Nvr_channel_cfg.
     * @example
     * // Create one Nvr_channel_cfg
     * const Nvr_channel_cfg = await prisma.nvr_channel_cfg.create({
     *   data: {
     *     // ... data to create a Nvr_channel_cfg
     *   }
     * })
     * 
     */
    create<T extends nvr_channel_cfgCreateArgs>(args: SelectSubset<T, nvr_channel_cfgCreateArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Nvr_channel_cfgs.
     * @param {nvr_channel_cfgCreateManyArgs} args - Arguments to create many Nvr_channel_cfgs.
     * @example
     * // Create many Nvr_channel_cfgs
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nvr_channel_cfgCreateManyArgs>(args?: SelectSubset<T, nvr_channel_cfgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nvr_channel_cfgs and returns the data saved in the database.
     * @param {nvr_channel_cfgCreateManyAndReturnArgs} args - Arguments to create many Nvr_channel_cfgs.
     * @example
     * // Create many Nvr_channel_cfgs
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nvr_channel_cfgs and only return the `id`
     * const nvr_channel_cfgWithIdOnly = await prisma.nvr_channel_cfg.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nvr_channel_cfgCreateManyAndReturnArgs>(args?: SelectSubset<T, nvr_channel_cfgCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Nvr_channel_cfg.
     * @param {nvr_channel_cfgDeleteArgs} args - Arguments to delete one Nvr_channel_cfg.
     * @example
     * // Delete one Nvr_channel_cfg
     * const Nvr_channel_cfg = await prisma.nvr_channel_cfg.delete({
     *   where: {
     *     // ... filter to delete one Nvr_channel_cfg
     *   }
     * })
     * 
     */
    delete<T extends nvr_channel_cfgDeleteArgs>(args: SelectSubset<T, nvr_channel_cfgDeleteArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Nvr_channel_cfg.
     * @param {nvr_channel_cfgUpdateArgs} args - Arguments to update one Nvr_channel_cfg.
     * @example
     * // Update one Nvr_channel_cfg
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nvr_channel_cfgUpdateArgs>(args: SelectSubset<T, nvr_channel_cfgUpdateArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Nvr_channel_cfgs.
     * @param {nvr_channel_cfgDeleteManyArgs} args - Arguments to filter Nvr_channel_cfgs to delete.
     * @example
     * // Delete a few Nvr_channel_cfgs
     * const { count } = await prisma.nvr_channel_cfg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nvr_channel_cfgDeleteManyArgs>(args?: SelectSubset<T, nvr_channel_cfgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nvr_channel_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_channel_cfgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nvr_channel_cfgs
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nvr_channel_cfgUpdateManyArgs>(args: SelectSubset<T, nvr_channel_cfgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nvr_channel_cfg.
     * @param {nvr_channel_cfgUpsertArgs} args - Arguments to update or create a Nvr_channel_cfg.
     * @example
     * // Update or create a Nvr_channel_cfg
     * const nvr_channel_cfg = await prisma.nvr_channel_cfg.upsert({
     *   create: {
     *     // ... data to create a Nvr_channel_cfg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nvr_channel_cfg we want to update
     *   }
     * })
     */
    upsert<T extends nvr_channel_cfgUpsertArgs>(args: SelectSubset<T, nvr_channel_cfgUpsertArgs<ExtArgs>>): Prisma__nvr_channel_cfgClient<$Result.GetResult<Prisma.$nvr_channel_cfgPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Nvr_channel_cfgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_channel_cfgCountArgs} args - Arguments to filter Nvr_channel_cfgs to count.
     * @example
     * // Count the number of Nvr_channel_cfgs
     * const count = await prisma.nvr_channel_cfg.count({
     *   where: {
     *     // ... the filter for the Nvr_channel_cfgs we want to count
     *   }
     * })
    **/
    count<T extends nvr_channel_cfgCountArgs>(
      args?: Subset<T, nvr_channel_cfgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nvr_channel_cfgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nvr_channel_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nvr_channel_cfgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Nvr_channel_cfgAggregateArgs>(args: Subset<T, Nvr_channel_cfgAggregateArgs>): Prisma.PrismaPromise<GetNvr_channel_cfgAggregateType<T>>

    /**
     * Group by Nvr_channel_cfg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nvr_channel_cfgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends nvr_channel_cfgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nvr_channel_cfgGroupByArgs['orderBy'] }
        : { orderBy?: nvr_channel_cfgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, nvr_channel_cfgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNvr_channel_cfgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nvr_channel_cfg model
   */
  readonly fields: nvr_channel_cfgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nvr_channel_cfg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nvr_channel_cfgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the nvr_channel_cfg model
   */ 
  interface nvr_channel_cfgFieldRefs {
    readonly id: FieldRef<"nvr_channel_cfg", 'String'>
    readonly nvr_id: FieldRef<"nvr_channel_cfg", 'String'>
    readonly nvr_channel_index: FieldRef<"nvr_channel_cfg", 'Int'>
    readonly name: FieldRef<"nvr_channel_cfg", 'String'>
    readonly search_tag: FieldRef<"nvr_channel_cfg", 'String'>
    readonly cfg_data: FieldRef<"nvr_channel_cfg", 'Bytes'>
    readonly user_id_owner: FieldRef<"nvr_channel_cfg", 'String'>
    readonly time_created: FieldRef<"nvr_channel_cfg", 'DateTime'>
    readonly time_modified: FieldRef<"nvr_channel_cfg", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nvr_channel_cfg findUnique
   */
  export type nvr_channel_cfgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_channel_cfg to fetch.
     */
    where: nvr_channel_cfgWhereUniqueInput
  }

  /**
   * nvr_channel_cfg findUniqueOrThrow
   */
  export type nvr_channel_cfgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_channel_cfg to fetch.
     */
    where: nvr_channel_cfgWhereUniqueInput
  }

  /**
   * nvr_channel_cfg findFirst
   */
  export type nvr_channel_cfgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_channel_cfg to fetch.
     */
    where?: nvr_channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_channel_cfgs to fetch.
     */
    orderBy?: nvr_channel_cfgOrderByWithRelationInput | nvr_channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nvr_channel_cfgs.
     */
    cursor?: nvr_channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_channel_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nvr_channel_cfgs.
     */
    distinct?: Nvr_channel_cfgScalarFieldEnum | Nvr_channel_cfgScalarFieldEnum[]
  }

  /**
   * nvr_channel_cfg findFirstOrThrow
   */
  export type nvr_channel_cfgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_channel_cfg to fetch.
     */
    where?: nvr_channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_channel_cfgs to fetch.
     */
    orderBy?: nvr_channel_cfgOrderByWithRelationInput | nvr_channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nvr_channel_cfgs.
     */
    cursor?: nvr_channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_channel_cfgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nvr_channel_cfgs.
     */
    distinct?: Nvr_channel_cfgScalarFieldEnum | Nvr_channel_cfgScalarFieldEnum[]
  }

  /**
   * nvr_channel_cfg findMany
   */
  export type nvr_channel_cfgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * Filter, which nvr_channel_cfgs to fetch.
     */
    where?: nvr_channel_cfgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nvr_channel_cfgs to fetch.
     */
    orderBy?: nvr_channel_cfgOrderByWithRelationInput | nvr_channel_cfgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nvr_channel_cfgs.
     */
    cursor?: nvr_channel_cfgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nvr_channel_cfgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nvr_channel_cfgs.
     */
    skip?: number
    distinct?: Nvr_channel_cfgScalarFieldEnum | Nvr_channel_cfgScalarFieldEnum[]
  }

  /**
   * nvr_channel_cfg create
   */
  export type nvr_channel_cfgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * The data needed to create a nvr_channel_cfg.
     */
    data: XOR<nvr_channel_cfgCreateInput, nvr_channel_cfgUncheckedCreateInput>
  }

  /**
   * nvr_channel_cfg createMany
   */
  export type nvr_channel_cfgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nvr_channel_cfgs.
     */
    data: nvr_channel_cfgCreateManyInput | nvr_channel_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nvr_channel_cfg createManyAndReturn
   */
  export type nvr_channel_cfgCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many nvr_channel_cfgs.
     */
    data: nvr_channel_cfgCreateManyInput | nvr_channel_cfgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nvr_channel_cfg update
   */
  export type nvr_channel_cfgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * The data needed to update a nvr_channel_cfg.
     */
    data: XOR<nvr_channel_cfgUpdateInput, nvr_channel_cfgUncheckedUpdateInput>
    /**
     * Choose, which nvr_channel_cfg to update.
     */
    where: nvr_channel_cfgWhereUniqueInput
  }

  /**
   * nvr_channel_cfg updateMany
   */
  export type nvr_channel_cfgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nvr_channel_cfgs.
     */
    data: XOR<nvr_channel_cfgUpdateManyMutationInput, nvr_channel_cfgUncheckedUpdateManyInput>
    /**
     * Filter which nvr_channel_cfgs to update
     */
    where?: nvr_channel_cfgWhereInput
  }

  /**
   * nvr_channel_cfg upsert
   */
  export type nvr_channel_cfgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * The filter to search for the nvr_channel_cfg to update in case it exists.
     */
    where: nvr_channel_cfgWhereUniqueInput
    /**
     * In case the nvr_channel_cfg found by the `where` argument doesn't exist, create a new nvr_channel_cfg with this data.
     */
    create: XOR<nvr_channel_cfgCreateInput, nvr_channel_cfgUncheckedCreateInput>
    /**
     * In case the nvr_channel_cfg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nvr_channel_cfgUpdateInput, nvr_channel_cfgUncheckedUpdateInput>
  }

  /**
   * nvr_channel_cfg delete
   */
  export type nvr_channel_cfgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
    /**
     * Filter which nvr_channel_cfg to delete.
     */
    where: nvr_channel_cfgWhereUniqueInput
  }

  /**
   * nvr_channel_cfg deleteMany
   */
  export type nvr_channel_cfgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nvr_channel_cfgs to delete
     */
    where?: nvr_channel_cfgWhereInput
  }

  /**
   * nvr_channel_cfg without action
   */
  export type nvr_channel_cfgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nvr_channel_cfg
     */
    select?: nvr_channel_cfgSelect<ExtArgs> | null
  }


  /**
   * Model vehicle_info
   */

  export type AggregateVehicle_info = {
    _count: Vehicle_infoCountAggregateOutputType | null
    _avg: Vehicle_infoAvgAggregateOutputType | null
    _sum: Vehicle_infoSumAggregateOutputType | null
    _min: Vehicle_infoMinAggregateOutputType | null
    _max: Vehicle_infoMaxAggregateOutputType | null
  }

  export type Vehicle_infoAvgAggregateOutputType = {
    type: number | null
    manufacturer: number | null
    color: number | null
    color_license_plate: number | null
    vehicle_payload: number | null
  }

  export type Vehicle_infoSumAggregateOutputType = {
    type: number | null
    manufacturer: number | null
    color: number | null
    color_license_plate: number | null
    vehicle_payload: number | null
  }

  export type Vehicle_infoMinAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    license_plate: string | null
    name: string | null
    type: number | null
    manufacturer: number | null
    color: number | null
    color_license_plate: number | null
    vehicle_payload: number | null
    note: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
    card_code: string | null
  }

  export type Vehicle_infoMaxAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    license_plate: string | null
    name: string | null
    type: number | null
    manufacturer: number | null
    color: number | null
    color_license_plate: number | null
    vehicle_payload: number | null
    note: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
    card_code: string | null
  }

  export type Vehicle_infoCountAggregateOutputType = {
    id: number
    lcms_server_id: number
    license_plate: number
    name: number
    type: number
    manufacturer: number
    color: number
    color_license_plate: number
    images: number
    vehicle_payload: number
    note: number
    list_ids: number
    is_deleted: number
    time_created: number
    time_modified: number
    card_code: number
    _all: number
  }


  export type Vehicle_infoAvgAggregateInputType = {
    type?: true
    manufacturer?: true
    color?: true
    color_license_plate?: true
    vehicle_payload?: true
  }

  export type Vehicle_infoSumAggregateInputType = {
    type?: true
    manufacturer?: true
    color?: true
    color_license_plate?: true
    vehicle_payload?: true
  }

  export type Vehicle_infoMinAggregateInputType = {
    id?: true
    lcms_server_id?: true
    license_plate?: true
    name?: true
    type?: true
    manufacturer?: true
    color?: true
    color_license_plate?: true
    vehicle_payload?: true
    note?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
    card_code?: true
  }

  export type Vehicle_infoMaxAggregateInputType = {
    id?: true
    lcms_server_id?: true
    license_plate?: true
    name?: true
    type?: true
    manufacturer?: true
    color?: true
    color_license_plate?: true
    vehicle_payload?: true
    note?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
    card_code?: true
  }

  export type Vehicle_infoCountAggregateInputType = {
    id?: true
    lcms_server_id?: true
    license_plate?: true
    name?: true
    type?: true
    manufacturer?: true
    color?: true
    color_license_plate?: true
    images?: true
    vehicle_payload?: true
    note?: true
    list_ids?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
    card_code?: true
    _all?: true
  }

  export type Vehicle_infoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_info to aggregate.
     */
    where?: vehicle_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_infos to fetch.
     */
    orderBy?: vehicle_infoOrderByWithRelationInput | vehicle_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehicle_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicle_infos
    **/
    _count?: true | Vehicle_infoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_infoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_infoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_infoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_infoMaxAggregateInputType
  }

  export type GetVehicle_infoAggregateType<T extends Vehicle_infoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_info]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_info[P]>
      : GetScalarType<T[P], AggregateVehicle_info[P]>
  }




  export type vehicle_infoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicle_infoWhereInput
    orderBy?: vehicle_infoOrderByWithAggregationInput | vehicle_infoOrderByWithAggregationInput[]
    by: Vehicle_infoScalarFieldEnum[] | Vehicle_infoScalarFieldEnum
    having?: vehicle_infoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_infoCountAggregateInputType | true
    _avg?: Vehicle_infoAvgAggregateInputType
    _sum?: Vehicle_infoSumAggregateInputType
    _min?: Vehicle_infoMinAggregateInputType
    _max?: Vehicle_infoMaxAggregateInputType
  }

  export type Vehicle_infoGroupByOutputType = {
    id: string
    lcms_server_id: string | null
    license_plate: string | null
    name: string | null
    type: number | null
    manufacturer: number | null
    color: number | null
    color_license_plate: number | null
    images: Buffer[]
    vehicle_payload: number | null
    note: string | null
    list_ids: string[]
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
    card_code: string | null
    _count: Vehicle_infoCountAggregateOutputType | null
    _avg: Vehicle_infoAvgAggregateOutputType | null
    _sum: Vehicle_infoSumAggregateOutputType | null
    _min: Vehicle_infoMinAggregateOutputType | null
    _max: Vehicle_infoMaxAggregateOutputType | null
  }

  type GetVehicle_infoGroupByPayload<T extends vehicle_infoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_infoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_infoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_infoGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_infoGroupByOutputType[P]>
        }
      >
    >


  export type vehicle_infoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    license_plate?: boolean
    name?: boolean
    type?: boolean
    manufacturer?: boolean
    color?: boolean
    color_license_plate?: boolean
    images?: boolean
    vehicle_payload?: boolean
    note?: boolean
    list_ids?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
    card_code?: boolean
  }, ExtArgs["result"]["vehicle_info"]>

  export type vehicle_infoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    license_plate?: boolean
    name?: boolean
    type?: boolean
    manufacturer?: boolean
    color?: boolean
    color_license_plate?: boolean
    images?: boolean
    vehicle_payload?: boolean
    note?: boolean
    list_ids?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
    card_code?: boolean
  }, ExtArgs["result"]["vehicle_info"]>

  export type vehicle_infoSelectScalar = {
    id?: boolean
    lcms_server_id?: boolean
    license_plate?: boolean
    name?: boolean
    type?: boolean
    manufacturer?: boolean
    color?: boolean
    color_license_plate?: boolean
    images?: boolean
    vehicle_payload?: boolean
    note?: boolean
    list_ids?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
    card_code?: boolean
  }


  export type $vehicle_infoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicle_info"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcms_server_id: string | null
      license_plate: string | null
      name: string | null
      type: number | null
      manufacturer: number | null
      color: number | null
      color_license_plate: number | null
      images: Buffer[]
      vehicle_payload: number | null
      note: string | null
      list_ids: string[]
      is_deleted: boolean | null
      time_created: Date | null
      time_modified: Date | null
      card_code: string | null
    }, ExtArgs["result"]["vehicle_info"]>
    composites: {}
  }

  type vehicle_infoGetPayload<S extends boolean | null | undefined | vehicle_infoDefaultArgs> = $Result.GetResult<Prisma.$vehicle_infoPayload, S>

  type vehicle_infoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<vehicle_infoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vehicle_infoCountAggregateInputType | true
    }

  export interface vehicle_infoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle_info'], meta: { name: 'vehicle_info' } }
    /**
     * Find zero or one Vehicle_info that matches the filter.
     * @param {vehicle_infoFindUniqueArgs} args - Arguments to find a Vehicle_info
     * @example
     * // Get one Vehicle_info
     * const vehicle_info = await prisma.vehicle_info.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehicle_infoFindUniqueArgs>(args: SelectSubset<T, vehicle_infoFindUniqueArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle_info that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {vehicle_infoFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_info
     * @example
     * // Get one Vehicle_info
     * const vehicle_info = await prisma.vehicle_info.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehicle_infoFindUniqueOrThrowArgs>(args: SelectSubset<T, vehicle_infoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle_info that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_infoFindFirstArgs} args - Arguments to find a Vehicle_info
     * @example
     * // Get one Vehicle_info
     * const vehicle_info = await prisma.vehicle_info.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehicle_infoFindFirstArgs>(args?: SelectSubset<T, vehicle_infoFindFirstArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle_info that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_infoFindFirstOrThrowArgs} args - Arguments to find a Vehicle_info
     * @example
     * // Get one Vehicle_info
     * const vehicle_info = await prisma.vehicle_info.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehicle_infoFindFirstOrThrowArgs>(args?: SelectSubset<T, vehicle_infoFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicle_infos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_infoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_infos
     * const vehicle_infos = await prisma.vehicle_info.findMany()
     * 
     * // Get first 10 Vehicle_infos
     * const vehicle_infos = await prisma.vehicle_info.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicle_infoWithIdOnly = await prisma.vehicle_info.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehicle_infoFindManyArgs>(args?: SelectSubset<T, vehicle_infoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle_info.
     * @param {vehicle_infoCreateArgs} args - Arguments to create a Vehicle_info.
     * @example
     * // Create one Vehicle_info
     * const Vehicle_info = await prisma.vehicle_info.create({
     *   data: {
     *     // ... data to create a Vehicle_info
     *   }
     * })
     * 
     */
    create<T extends vehicle_infoCreateArgs>(args: SelectSubset<T, vehicle_infoCreateArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicle_infos.
     * @param {vehicle_infoCreateManyArgs} args - Arguments to create many Vehicle_infos.
     * @example
     * // Create many Vehicle_infos
     * const vehicle_info = await prisma.vehicle_info.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehicle_infoCreateManyArgs>(args?: SelectSubset<T, vehicle_infoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicle_infos and returns the data saved in the database.
     * @param {vehicle_infoCreateManyAndReturnArgs} args - Arguments to create many Vehicle_infos.
     * @example
     * // Create many Vehicle_infos
     * const vehicle_info = await prisma.vehicle_info.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicle_infos and only return the `id`
     * const vehicle_infoWithIdOnly = await prisma.vehicle_info.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vehicle_infoCreateManyAndReturnArgs>(args?: SelectSubset<T, vehicle_infoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vehicle_info.
     * @param {vehicle_infoDeleteArgs} args - Arguments to delete one Vehicle_info.
     * @example
     * // Delete one Vehicle_info
     * const Vehicle_info = await prisma.vehicle_info.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_info
     *   }
     * })
     * 
     */
    delete<T extends vehicle_infoDeleteArgs>(args: SelectSubset<T, vehicle_infoDeleteArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle_info.
     * @param {vehicle_infoUpdateArgs} args - Arguments to update one Vehicle_info.
     * @example
     * // Update one Vehicle_info
     * const vehicle_info = await prisma.vehicle_info.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehicle_infoUpdateArgs>(args: SelectSubset<T, vehicle_infoUpdateArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicle_infos.
     * @param {vehicle_infoDeleteManyArgs} args - Arguments to filter Vehicle_infos to delete.
     * @example
     * // Delete a few Vehicle_infos
     * const { count } = await prisma.vehicle_info.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehicle_infoDeleteManyArgs>(args?: SelectSubset<T, vehicle_infoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_infoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_infos
     * const vehicle_info = await prisma.vehicle_info.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehicle_infoUpdateManyArgs>(args: SelectSubset<T, vehicle_infoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_info.
     * @param {vehicle_infoUpsertArgs} args - Arguments to update or create a Vehicle_info.
     * @example
     * // Update or create a Vehicle_info
     * const vehicle_info = await prisma.vehicle_info.upsert({
     *   create: {
     *     // ... data to create a Vehicle_info
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_info we want to update
     *   }
     * })
     */
    upsert<T extends vehicle_infoUpsertArgs>(args: SelectSubset<T, vehicle_infoUpsertArgs<ExtArgs>>): Prisma__vehicle_infoClient<$Result.GetResult<Prisma.$vehicle_infoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicle_infos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_infoCountArgs} args - Arguments to filter Vehicle_infos to count.
     * @example
     * // Count the number of Vehicle_infos
     * const count = await prisma.vehicle_info.count({
     *   where: {
     *     // ... the filter for the Vehicle_infos we want to count
     *   }
     * })
    **/
    count<T extends vehicle_infoCountArgs>(
      args?: Subset<T, vehicle_infoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_infoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_infoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vehicle_infoAggregateArgs>(args: Subset<T, Vehicle_infoAggregateArgs>): Prisma.PrismaPromise<GetVehicle_infoAggregateType<T>>

    /**
     * Group by Vehicle_info.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_infoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vehicle_infoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicle_infoGroupByArgs['orderBy'] }
        : { orderBy?: vehicle_infoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vehicle_infoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_infoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicle_info model
   */
  readonly fields: vehicle_infoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle_info.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicle_infoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vehicle_info model
   */ 
  interface vehicle_infoFieldRefs {
    readonly id: FieldRef<"vehicle_info", 'String'>
    readonly lcms_server_id: FieldRef<"vehicle_info", 'String'>
    readonly license_plate: FieldRef<"vehicle_info", 'String'>
    readonly name: FieldRef<"vehicle_info", 'String'>
    readonly type: FieldRef<"vehicle_info", 'Int'>
    readonly manufacturer: FieldRef<"vehicle_info", 'Int'>
    readonly color: FieldRef<"vehicle_info", 'Int'>
    readonly color_license_plate: FieldRef<"vehicle_info", 'Int'>
    readonly images: FieldRef<"vehicle_info", 'Bytes[]'>
    readonly vehicle_payload: FieldRef<"vehicle_info", 'Float'>
    readonly note: FieldRef<"vehicle_info", 'String'>
    readonly list_ids: FieldRef<"vehicle_info", 'String[]'>
    readonly is_deleted: FieldRef<"vehicle_info", 'Boolean'>
    readonly time_created: FieldRef<"vehicle_info", 'DateTime'>
    readonly time_modified: FieldRef<"vehicle_info", 'DateTime'>
    readonly card_code: FieldRef<"vehicle_info", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vehicle_info findUnique
   */
  export type vehicle_infoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_info to fetch.
     */
    where: vehicle_infoWhereUniqueInput
  }

  /**
   * vehicle_info findUniqueOrThrow
   */
  export type vehicle_infoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_info to fetch.
     */
    where: vehicle_infoWhereUniqueInput
  }

  /**
   * vehicle_info findFirst
   */
  export type vehicle_infoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_info to fetch.
     */
    where?: vehicle_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_infos to fetch.
     */
    orderBy?: vehicle_infoOrderByWithRelationInput | vehicle_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_infos.
     */
    cursor?: vehicle_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_infos.
     */
    distinct?: Vehicle_infoScalarFieldEnum | Vehicle_infoScalarFieldEnum[]
  }

  /**
   * vehicle_info findFirstOrThrow
   */
  export type vehicle_infoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_info to fetch.
     */
    where?: vehicle_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_infos to fetch.
     */
    orderBy?: vehicle_infoOrderByWithRelationInput | vehicle_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_infos.
     */
    cursor?: vehicle_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_infos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_infos.
     */
    distinct?: Vehicle_infoScalarFieldEnum | Vehicle_infoScalarFieldEnum[]
  }

  /**
   * vehicle_info findMany
   */
  export type vehicle_infoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_infos to fetch.
     */
    where?: vehicle_infoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_infos to fetch.
     */
    orderBy?: vehicle_infoOrderByWithRelationInput | vehicle_infoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicle_infos.
     */
    cursor?: vehicle_infoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_infos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_infos.
     */
    skip?: number
    distinct?: Vehicle_infoScalarFieldEnum | Vehicle_infoScalarFieldEnum[]
  }

  /**
   * vehicle_info create
   */
  export type vehicle_infoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * The data needed to create a vehicle_info.
     */
    data: XOR<vehicle_infoCreateInput, vehicle_infoUncheckedCreateInput>
  }

  /**
   * vehicle_info createMany
   */
  export type vehicle_infoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicle_infos.
     */
    data: vehicle_infoCreateManyInput | vehicle_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle_info createManyAndReturn
   */
  export type vehicle_infoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many vehicle_infos.
     */
    data: vehicle_infoCreateManyInput | vehicle_infoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle_info update
   */
  export type vehicle_infoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * The data needed to update a vehicle_info.
     */
    data: XOR<vehicle_infoUpdateInput, vehicle_infoUncheckedUpdateInput>
    /**
     * Choose, which vehicle_info to update.
     */
    where: vehicle_infoWhereUniqueInput
  }

  /**
   * vehicle_info updateMany
   */
  export type vehicle_infoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicle_infos.
     */
    data: XOR<vehicle_infoUpdateManyMutationInput, vehicle_infoUncheckedUpdateManyInput>
    /**
     * Filter which vehicle_infos to update
     */
    where?: vehicle_infoWhereInput
  }

  /**
   * vehicle_info upsert
   */
  export type vehicle_infoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * The filter to search for the vehicle_info to update in case it exists.
     */
    where: vehicle_infoWhereUniqueInput
    /**
     * In case the vehicle_info found by the `where` argument doesn't exist, create a new vehicle_info with this data.
     */
    create: XOR<vehicle_infoCreateInput, vehicle_infoUncheckedCreateInput>
    /**
     * In case the vehicle_info was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicle_infoUpdateInput, vehicle_infoUncheckedUpdateInput>
  }

  /**
   * vehicle_info delete
   */
  export type vehicle_infoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
    /**
     * Filter which vehicle_info to delete.
     */
    where: vehicle_infoWhereUniqueInput
  }

  /**
   * vehicle_info deleteMany
   */
  export type vehicle_infoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_infos to delete
     */
    where?: vehicle_infoWhereInput
  }

  /**
   * vehicle_info without action
   */
  export type vehicle_infoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_info
     */
    select?: vehicle_infoSelect<ExtArgs> | null
  }


  /**
   * Model vehicle_list
   */

  export type AggregateVehicle_list = {
    _count: Vehicle_listCountAggregateOutputType | null
    _min: Vehicle_listMinAggregateOutputType | null
    _max: Vehicle_listMaxAggregateOutputType | null
  }

  export type Vehicle_listMinAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    name: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Vehicle_listMaxAggregateOutputType = {
    id: string | null
    lcms_server_id: string | null
    name: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Vehicle_listCountAggregateOutputType = {
    id: number
    lcms_server_id: number
    name: number
    is_deleted: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Vehicle_listMinAggregateInputType = {
    id?: true
    lcms_server_id?: true
    name?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
  }

  export type Vehicle_listMaxAggregateInputType = {
    id?: true
    lcms_server_id?: true
    name?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
  }

  export type Vehicle_listCountAggregateInputType = {
    id?: true
    lcms_server_id?: true
    name?: true
    is_deleted?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Vehicle_listAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_list to aggregate.
     */
    where?: vehicle_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_lists to fetch.
     */
    orderBy?: vehicle_listOrderByWithRelationInput | vehicle_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vehicle_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vehicle_lists
    **/
    _count?: true | Vehicle_listCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_listMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_listMaxAggregateInputType
  }

  export type GetVehicle_listAggregateType<T extends Vehicle_listAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_list]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_list[P]>
      : GetScalarType<T[P], AggregateVehicle_list[P]>
  }




  export type vehicle_listGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vehicle_listWhereInput
    orderBy?: vehicle_listOrderByWithAggregationInput | vehicle_listOrderByWithAggregationInput[]
    by: Vehicle_listScalarFieldEnum[] | Vehicle_listScalarFieldEnum
    having?: vehicle_listScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_listCountAggregateInputType | true
    _min?: Vehicle_listMinAggregateInputType
    _max?: Vehicle_listMaxAggregateInputType
  }

  export type Vehicle_listGroupByOutputType = {
    id: string
    lcms_server_id: string | null
    name: string | null
    is_deleted: boolean | null
    time_created: Date | null
    time_modified: Date | null
    _count: Vehicle_listCountAggregateOutputType | null
    _min: Vehicle_listMinAggregateOutputType | null
    _max: Vehicle_listMaxAggregateOutputType | null
  }

  type GetVehicle_listGroupByPayload<T extends vehicle_listGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_listGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_listGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_listGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_listGroupByOutputType[P]>
        }
      >
    >


  export type vehicle_listSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    name?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["vehicle_list"]>

  export type vehicle_listSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcms_server_id?: boolean
    name?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["vehicle_list"]>

  export type vehicle_listSelectScalar = {
    id?: boolean
    lcms_server_id?: boolean
    name?: boolean
    is_deleted?: boolean
    time_created?: boolean
    time_modified?: boolean
  }


  export type $vehicle_listPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vehicle_list"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcms_server_id: string | null
      name: string | null
      is_deleted: boolean | null
      time_created: Date | null
      time_modified: Date | null
    }, ExtArgs["result"]["vehicle_list"]>
    composites: {}
  }

  type vehicle_listGetPayload<S extends boolean | null | undefined | vehicle_listDefaultArgs> = $Result.GetResult<Prisma.$vehicle_listPayload, S>

  type vehicle_listCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<vehicle_listFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Vehicle_listCountAggregateInputType | true
    }

  export interface vehicle_listDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vehicle_list'], meta: { name: 'vehicle_list' } }
    /**
     * Find zero or one Vehicle_list that matches the filter.
     * @param {vehicle_listFindUniqueArgs} args - Arguments to find a Vehicle_list
     * @example
     * // Get one Vehicle_list
     * const vehicle_list = await prisma.vehicle_list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vehicle_listFindUniqueArgs>(args: SelectSubset<T, vehicle_listFindUniqueArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle_list that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {vehicle_listFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_list
     * @example
     * // Get one Vehicle_list
     * const vehicle_list = await prisma.vehicle_list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vehicle_listFindUniqueOrThrowArgs>(args: SelectSubset<T, vehicle_listFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle_list that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_listFindFirstArgs} args - Arguments to find a Vehicle_list
     * @example
     * // Get one Vehicle_list
     * const vehicle_list = await prisma.vehicle_list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vehicle_listFindFirstArgs>(args?: SelectSubset<T, vehicle_listFindFirstArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle_list that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_listFindFirstOrThrowArgs} args - Arguments to find a Vehicle_list
     * @example
     * // Get one Vehicle_list
     * const vehicle_list = await prisma.vehicle_list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vehicle_listFindFirstOrThrowArgs>(args?: SelectSubset<T, vehicle_listFindFirstOrThrowArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicle_lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_listFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_lists
     * const vehicle_lists = await prisma.vehicle_list.findMany()
     * 
     * // Get first 10 Vehicle_lists
     * const vehicle_lists = await prisma.vehicle_list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicle_listWithIdOnly = await prisma.vehicle_list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends vehicle_listFindManyArgs>(args?: SelectSubset<T, vehicle_listFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle_list.
     * @param {vehicle_listCreateArgs} args - Arguments to create a Vehicle_list.
     * @example
     * // Create one Vehicle_list
     * const Vehicle_list = await prisma.vehicle_list.create({
     *   data: {
     *     // ... data to create a Vehicle_list
     *   }
     * })
     * 
     */
    create<T extends vehicle_listCreateArgs>(args: SelectSubset<T, vehicle_listCreateArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicle_lists.
     * @param {vehicle_listCreateManyArgs} args - Arguments to create many Vehicle_lists.
     * @example
     * // Create many Vehicle_lists
     * const vehicle_list = await prisma.vehicle_list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vehicle_listCreateManyArgs>(args?: SelectSubset<T, vehicle_listCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicle_lists and returns the data saved in the database.
     * @param {vehicle_listCreateManyAndReturnArgs} args - Arguments to create many Vehicle_lists.
     * @example
     * // Create many Vehicle_lists
     * const vehicle_list = await prisma.vehicle_list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicle_lists and only return the `id`
     * const vehicle_listWithIdOnly = await prisma.vehicle_list.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends vehicle_listCreateManyAndReturnArgs>(args?: SelectSubset<T, vehicle_listCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vehicle_list.
     * @param {vehicle_listDeleteArgs} args - Arguments to delete one Vehicle_list.
     * @example
     * // Delete one Vehicle_list
     * const Vehicle_list = await prisma.vehicle_list.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_list
     *   }
     * })
     * 
     */
    delete<T extends vehicle_listDeleteArgs>(args: SelectSubset<T, vehicle_listDeleteArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle_list.
     * @param {vehicle_listUpdateArgs} args - Arguments to update one Vehicle_list.
     * @example
     * // Update one Vehicle_list
     * const vehicle_list = await prisma.vehicle_list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vehicle_listUpdateArgs>(args: SelectSubset<T, vehicle_listUpdateArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicle_lists.
     * @param {vehicle_listDeleteManyArgs} args - Arguments to filter Vehicle_lists to delete.
     * @example
     * // Delete a few Vehicle_lists
     * const { count } = await prisma.vehicle_list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vehicle_listDeleteManyArgs>(args?: SelectSubset<T, vehicle_listDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_listUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_lists
     * const vehicle_list = await prisma.vehicle_list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vehicle_listUpdateManyArgs>(args: SelectSubset<T, vehicle_listUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle_list.
     * @param {vehicle_listUpsertArgs} args - Arguments to update or create a Vehicle_list.
     * @example
     * // Update or create a Vehicle_list
     * const vehicle_list = await prisma.vehicle_list.upsert({
     *   create: {
     *     // ... data to create a Vehicle_list
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_list we want to update
     *   }
     * })
     */
    upsert<T extends vehicle_listUpsertArgs>(args: SelectSubset<T, vehicle_listUpsertArgs<ExtArgs>>): Prisma__vehicle_listClient<$Result.GetResult<Prisma.$vehicle_listPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicle_lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_listCountArgs} args - Arguments to filter Vehicle_lists to count.
     * @example
     * // Count the number of Vehicle_lists
     * const count = await prisma.vehicle_list.count({
     *   where: {
     *     // ... the filter for the Vehicle_lists we want to count
     *   }
     * })
    **/
    count<T extends vehicle_listCountArgs>(
      args?: Subset<T, vehicle_listCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_listCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_listAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vehicle_listAggregateArgs>(args: Subset<T, Vehicle_listAggregateArgs>): Prisma.PrismaPromise<GetVehicle_listAggregateType<T>>

    /**
     * Group by Vehicle_list.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vehicle_listGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vehicle_listGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vehicle_listGroupByArgs['orderBy'] }
        : { orderBy?: vehicle_listGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vehicle_listGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_listGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vehicle_list model
   */
  readonly fields: vehicle_listFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vehicle_list.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vehicle_listClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vehicle_list model
   */ 
  interface vehicle_listFieldRefs {
    readonly id: FieldRef<"vehicle_list", 'String'>
    readonly lcms_server_id: FieldRef<"vehicle_list", 'String'>
    readonly name: FieldRef<"vehicle_list", 'String'>
    readonly is_deleted: FieldRef<"vehicle_list", 'Boolean'>
    readonly time_created: FieldRef<"vehicle_list", 'DateTime'>
    readonly time_modified: FieldRef<"vehicle_list", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * vehicle_list findUnique
   */
  export type vehicle_listFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_list to fetch.
     */
    where: vehicle_listWhereUniqueInput
  }

  /**
   * vehicle_list findUniqueOrThrow
   */
  export type vehicle_listFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_list to fetch.
     */
    where: vehicle_listWhereUniqueInput
  }

  /**
   * vehicle_list findFirst
   */
  export type vehicle_listFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_list to fetch.
     */
    where?: vehicle_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_lists to fetch.
     */
    orderBy?: vehicle_listOrderByWithRelationInput | vehicle_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_lists.
     */
    cursor?: vehicle_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_lists.
     */
    distinct?: Vehicle_listScalarFieldEnum | Vehicle_listScalarFieldEnum[]
  }

  /**
   * vehicle_list findFirstOrThrow
   */
  export type vehicle_listFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_list to fetch.
     */
    where?: vehicle_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_lists to fetch.
     */
    orderBy?: vehicle_listOrderByWithRelationInput | vehicle_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vehicle_lists.
     */
    cursor?: vehicle_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vehicle_lists.
     */
    distinct?: Vehicle_listScalarFieldEnum | Vehicle_listScalarFieldEnum[]
  }

  /**
   * vehicle_list findMany
   */
  export type vehicle_listFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * Filter, which vehicle_lists to fetch.
     */
    where?: vehicle_listWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vehicle_lists to fetch.
     */
    orderBy?: vehicle_listOrderByWithRelationInput | vehicle_listOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vehicle_lists.
     */
    cursor?: vehicle_listWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vehicle_lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vehicle_lists.
     */
    skip?: number
    distinct?: Vehicle_listScalarFieldEnum | Vehicle_listScalarFieldEnum[]
  }

  /**
   * vehicle_list create
   */
  export type vehicle_listCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * The data needed to create a vehicle_list.
     */
    data: XOR<vehicle_listCreateInput, vehicle_listUncheckedCreateInput>
  }

  /**
   * vehicle_list createMany
   */
  export type vehicle_listCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vehicle_lists.
     */
    data: vehicle_listCreateManyInput | vehicle_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle_list createManyAndReturn
   */
  export type vehicle_listCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many vehicle_lists.
     */
    data: vehicle_listCreateManyInput | vehicle_listCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vehicle_list update
   */
  export type vehicle_listUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * The data needed to update a vehicle_list.
     */
    data: XOR<vehicle_listUpdateInput, vehicle_listUncheckedUpdateInput>
    /**
     * Choose, which vehicle_list to update.
     */
    where: vehicle_listWhereUniqueInput
  }

  /**
   * vehicle_list updateMany
   */
  export type vehicle_listUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vehicle_lists.
     */
    data: XOR<vehicle_listUpdateManyMutationInput, vehicle_listUncheckedUpdateManyInput>
    /**
     * Filter which vehicle_lists to update
     */
    where?: vehicle_listWhereInput
  }

  /**
   * vehicle_list upsert
   */
  export type vehicle_listUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * The filter to search for the vehicle_list to update in case it exists.
     */
    where: vehicle_listWhereUniqueInput
    /**
     * In case the vehicle_list found by the `where` argument doesn't exist, create a new vehicle_list with this data.
     */
    create: XOR<vehicle_listCreateInput, vehicle_listUncheckedCreateInput>
    /**
     * In case the vehicle_list was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vehicle_listUpdateInput, vehicle_listUncheckedUpdateInput>
  }

  /**
   * vehicle_list delete
   */
  export type vehicle_listDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
    /**
     * Filter which vehicle_list to delete.
     */
    where: vehicle_listWhereUniqueInput
  }

  /**
   * vehicle_list deleteMany
   */
  export type vehicle_listDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vehicle_lists to delete
     */
    where?: vehicle_listWhereInput
  }

  /**
   * vehicle_list without action
   */
  export type vehicle_listDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vehicle_list
     */
    select?: vehicle_listSelect<ExtArgs> | null
  }


  /**
   * Model version_control
   */

  export type AggregateVersion_control = {
    _count: Version_controlCountAggregateOutputType | null
    _avg: Version_controlAvgAggregateOutputType | null
    _sum: Version_controlSumAggregateOutputType | null
    _min: Version_controlMinAggregateOutputType | null
    _max: Version_controlMaxAggregateOutputType | null
  }

  export type Version_controlAvgAggregateOutputType = {
    type: number | null
    version: number | null
  }

  export type Version_controlSumAggregateOutputType = {
    type: number | null
    version: number | null
  }

  export type Version_controlMinAggregateOutputType = {
    id: string | null
    type: number | null
    tablename: string | null
    version: number | null
    timeupdated: Date | null
  }

  export type Version_controlMaxAggregateOutputType = {
    id: string | null
    type: number | null
    tablename: string | null
    version: number | null
    timeupdated: Date | null
  }

  export type Version_controlCountAggregateOutputType = {
    id: number
    type: number
    tablename: number
    version: number
    timeupdated: number
    _all: number
  }


  export type Version_controlAvgAggregateInputType = {
    type?: true
    version?: true
  }

  export type Version_controlSumAggregateInputType = {
    type?: true
    version?: true
  }

  export type Version_controlMinAggregateInputType = {
    id?: true
    type?: true
    tablename?: true
    version?: true
    timeupdated?: true
  }

  export type Version_controlMaxAggregateInputType = {
    id?: true
    type?: true
    tablename?: true
    version?: true
    timeupdated?: true
  }

  export type Version_controlCountAggregateInputType = {
    id?: true
    type?: true
    tablename?: true
    version?: true
    timeupdated?: true
    _all?: true
  }

  export type Version_controlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which version_control to aggregate.
     */
    where?: version_controlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of version_controls to fetch.
     */
    orderBy?: version_controlOrderByWithRelationInput | version_controlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: version_controlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` version_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` version_controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned version_controls
    **/
    _count?: true | Version_controlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Version_controlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Version_controlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Version_controlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Version_controlMaxAggregateInputType
  }

  export type GetVersion_controlAggregateType<T extends Version_controlAggregateArgs> = {
        [P in keyof T & keyof AggregateVersion_control]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVersion_control[P]>
      : GetScalarType<T[P], AggregateVersion_control[P]>
  }




  export type version_controlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: version_controlWhereInput
    orderBy?: version_controlOrderByWithAggregationInput | version_controlOrderByWithAggregationInput[]
    by: Version_controlScalarFieldEnum[] | Version_controlScalarFieldEnum
    having?: version_controlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Version_controlCountAggregateInputType | true
    _avg?: Version_controlAvgAggregateInputType
    _sum?: Version_controlSumAggregateInputType
    _min?: Version_controlMinAggregateInputType
    _max?: Version_controlMaxAggregateInputType
  }

  export type Version_controlGroupByOutputType = {
    id: string
    type: number | null
    tablename: string | null
    version: number | null
    timeupdated: Date | null
    _count: Version_controlCountAggregateOutputType | null
    _avg: Version_controlAvgAggregateOutputType | null
    _sum: Version_controlSumAggregateOutputType | null
    _min: Version_controlMinAggregateOutputType | null
    _max: Version_controlMaxAggregateOutputType | null
  }

  type GetVersion_controlGroupByPayload<T extends version_controlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Version_controlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Version_controlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Version_controlGroupByOutputType[P]>
            : GetScalarType<T[P], Version_controlGroupByOutputType[P]>
        }
      >
    >


  export type version_controlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tablename?: boolean
    version?: boolean
    timeupdated?: boolean
  }, ExtArgs["result"]["version_control"]>

  export type version_controlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    tablename?: boolean
    version?: boolean
    timeupdated?: boolean
  }, ExtArgs["result"]["version_control"]>

  export type version_controlSelectScalar = {
    id?: boolean
    type?: boolean
    tablename?: boolean
    version?: boolean
    timeupdated?: boolean
  }


  export type $version_controlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "version_control"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: number | null
      tablename: string | null
      version: number | null
      timeupdated: Date | null
    }, ExtArgs["result"]["version_control"]>
    composites: {}
  }

  type version_controlGetPayload<S extends boolean | null | undefined | version_controlDefaultArgs> = $Result.GetResult<Prisma.$version_controlPayload, S>

  type version_controlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<version_controlFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Version_controlCountAggregateInputType | true
    }

  export interface version_controlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['version_control'], meta: { name: 'version_control' } }
    /**
     * Find zero or one Version_control that matches the filter.
     * @param {version_controlFindUniqueArgs} args - Arguments to find a Version_control
     * @example
     * // Get one Version_control
     * const version_control = await prisma.version_control.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends version_controlFindUniqueArgs>(args: SelectSubset<T, version_controlFindUniqueArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Version_control that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {version_controlFindUniqueOrThrowArgs} args - Arguments to find a Version_control
     * @example
     * // Get one Version_control
     * const version_control = await prisma.version_control.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends version_controlFindUniqueOrThrowArgs>(args: SelectSubset<T, version_controlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Version_control that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {version_controlFindFirstArgs} args - Arguments to find a Version_control
     * @example
     * // Get one Version_control
     * const version_control = await prisma.version_control.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends version_controlFindFirstArgs>(args?: SelectSubset<T, version_controlFindFirstArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Version_control that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {version_controlFindFirstOrThrowArgs} args - Arguments to find a Version_control
     * @example
     * // Get one Version_control
     * const version_control = await prisma.version_control.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends version_controlFindFirstOrThrowArgs>(args?: SelectSubset<T, version_controlFindFirstOrThrowArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Version_controls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {version_controlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Version_controls
     * const version_controls = await prisma.version_control.findMany()
     * 
     * // Get first 10 Version_controls
     * const version_controls = await prisma.version_control.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const version_controlWithIdOnly = await prisma.version_control.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends version_controlFindManyArgs>(args?: SelectSubset<T, version_controlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Version_control.
     * @param {version_controlCreateArgs} args - Arguments to create a Version_control.
     * @example
     * // Create one Version_control
     * const Version_control = await prisma.version_control.create({
     *   data: {
     *     // ... data to create a Version_control
     *   }
     * })
     * 
     */
    create<T extends version_controlCreateArgs>(args: SelectSubset<T, version_controlCreateArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Version_controls.
     * @param {version_controlCreateManyArgs} args - Arguments to create many Version_controls.
     * @example
     * // Create many Version_controls
     * const version_control = await prisma.version_control.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends version_controlCreateManyArgs>(args?: SelectSubset<T, version_controlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Version_controls and returns the data saved in the database.
     * @param {version_controlCreateManyAndReturnArgs} args - Arguments to create many Version_controls.
     * @example
     * // Create many Version_controls
     * const version_control = await prisma.version_control.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Version_controls and only return the `id`
     * const version_controlWithIdOnly = await prisma.version_control.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends version_controlCreateManyAndReturnArgs>(args?: SelectSubset<T, version_controlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Version_control.
     * @param {version_controlDeleteArgs} args - Arguments to delete one Version_control.
     * @example
     * // Delete one Version_control
     * const Version_control = await prisma.version_control.delete({
     *   where: {
     *     // ... filter to delete one Version_control
     *   }
     * })
     * 
     */
    delete<T extends version_controlDeleteArgs>(args: SelectSubset<T, version_controlDeleteArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Version_control.
     * @param {version_controlUpdateArgs} args - Arguments to update one Version_control.
     * @example
     * // Update one Version_control
     * const version_control = await prisma.version_control.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends version_controlUpdateArgs>(args: SelectSubset<T, version_controlUpdateArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Version_controls.
     * @param {version_controlDeleteManyArgs} args - Arguments to filter Version_controls to delete.
     * @example
     * // Delete a few Version_controls
     * const { count } = await prisma.version_control.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends version_controlDeleteManyArgs>(args?: SelectSubset<T, version_controlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Version_controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {version_controlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Version_controls
     * const version_control = await prisma.version_control.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends version_controlUpdateManyArgs>(args: SelectSubset<T, version_controlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Version_control.
     * @param {version_controlUpsertArgs} args - Arguments to update or create a Version_control.
     * @example
     * // Update or create a Version_control
     * const version_control = await prisma.version_control.upsert({
     *   create: {
     *     // ... data to create a Version_control
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Version_control we want to update
     *   }
     * })
     */
    upsert<T extends version_controlUpsertArgs>(args: SelectSubset<T, version_controlUpsertArgs<ExtArgs>>): Prisma__version_controlClient<$Result.GetResult<Prisma.$version_controlPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Version_controls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {version_controlCountArgs} args - Arguments to filter Version_controls to count.
     * @example
     * // Count the number of Version_controls
     * const count = await prisma.version_control.count({
     *   where: {
     *     // ... the filter for the Version_controls we want to count
     *   }
     * })
    **/
    count<T extends version_controlCountArgs>(
      args?: Subset<T, version_controlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Version_controlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Version_control.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Version_controlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Version_controlAggregateArgs>(args: Subset<T, Version_controlAggregateArgs>): Prisma.PrismaPromise<GetVersion_controlAggregateType<T>>

    /**
     * Group by Version_control.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {version_controlGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends version_controlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: version_controlGroupByArgs['orderBy'] }
        : { orderBy?: version_controlGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, version_controlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersion_controlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the version_control model
   */
  readonly fields: version_controlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for version_control.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__version_controlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the version_control model
   */ 
  interface version_controlFieldRefs {
    readonly id: FieldRef<"version_control", 'String'>
    readonly type: FieldRef<"version_control", 'Int'>
    readonly tablename: FieldRef<"version_control", 'String'>
    readonly version: FieldRef<"version_control", 'Int'>
    readonly timeupdated: FieldRef<"version_control", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * version_control findUnique
   */
  export type version_controlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * Filter, which version_control to fetch.
     */
    where: version_controlWhereUniqueInput
  }

  /**
   * version_control findUniqueOrThrow
   */
  export type version_controlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * Filter, which version_control to fetch.
     */
    where: version_controlWhereUniqueInput
  }

  /**
   * version_control findFirst
   */
  export type version_controlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * Filter, which version_control to fetch.
     */
    where?: version_controlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of version_controls to fetch.
     */
    orderBy?: version_controlOrderByWithRelationInput | version_controlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for version_controls.
     */
    cursor?: version_controlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` version_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` version_controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of version_controls.
     */
    distinct?: Version_controlScalarFieldEnum | Version_controlScalarFieldEnum[]
  }

  /**
   * version_control findFirstOrThrow
   */
  export type version_controlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * Filter, which version_control to fetch.
     */
    where?: version_controlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of version_controls to fetch.
     */
    orderBy?: version_controlOrderByWithRelationInput | version_controlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for version_controls.
     */
    cursor?: version_controlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` version_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` version_controls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of version_controls.
     */
    distinct?: Version_controlScalarFieldEnum | Version_controlScalarFieldEnum[]
  }

  /**
   * version_control findMany
   */
  export type version_controlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * Filter, which version_controls to fetch.
     */
    where?: version_controlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of version_controls to fetch.
     */
    orderBy?: version_controlOrderByWithRelationInput | version_controlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing version_controls.
     */
    cursor?: version_controlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` version_controls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` version_controls.
     */
    skip?: number
    distinct?: Version_controlScalarFieldEnum | Version_controlScalarFieldEnum[]
  }

  /**
   * version_control create
   */
  export type version_controlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * The data needed to create a version_control.
     */
    data?: XOR<version_controlCreateInput, version_controlUncheckedCreateInput>
  }

  /**
   * version_control createMany
   */
  export type version_controlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many version_controls.
     */
    data: version_controlCreateManyInput | version_controlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * version_control createManyAndReturn
   */
  export type version_controlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many version_controls.
     */
    data: version_controlCreateManyInput | version_controlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * version_control update
   */
  export type version_controlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * The data needed to update a version_control.
     */
    data: XOR<version_controlUpdateInput, version_controlUncheckedUpdateInput>
    /**
     * Choose, which version_control to update.
     */
    where: version_controlWhereUniqueInput
  }

  /**
   * version_control updateMany
   */
  export type version_controlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update version_controls.
     */
    data: XOR<version_controlUpdateManyMutationInput, version_controlUncheckedUpdateManyInput>
    /**
     * Filter which version_controls to update
     */
    where?: version_controlWhereInput
  }

  /**
   * version_control upsert
   */
  export type version_controlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * The filter to search for the version_control to update in case it exists.
     */
    where: version_controlWhereUniqueInput
    /**
     * In case the version_control found by the `where` argument doesn't exist, create a new version_control with this data.
     */
    create: XOR<version_controlCreateInput, version_controlUncheckedCreateInput>
    /**
     * In case the version_control was found with the provided `where` argument, update it with this data.
     */
    update: XOR<version_controlUpdateInput, version_controlUncheckedUpdateInput>
  }

  /**
   * version_control delete
   */
  export type version_controlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
    /**
     * Filter which version_control to delete.
     */
    where: version_controlWhereUniqueInput
  }

  /**
   * version_control deleteMany
   */
  export type version_controlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which version_controls to delete
     */
    where?: version_controlWhereInput
  }

  /**
   * version_control without action
   */
  export type version_controlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the version_control
     */
    select?: version_controlSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Camera_cfgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    search_tag: 'search_tag',
    cfg_data: 'cfg_data',
    user_id_owner: 'user_id_owner',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Camera_cfgScalarFieldEnum = (typeof Camera_cfgScalarFieldEnum)[keyof typeof Camera_cfgScalarFieldEnum]


  export const Camera_storage_totalScalarFieldEnum: {
    partition_path: 'partition_path',
    camera_id: 'camera_id',
    use_disk_mb: 'use_disk_mb',
    time_start: 'time_start',
    time_end: 'time_end',
    total_dur: 'total_dur',
    lost_dur: 'lost_dur'
  };

  export type Camera_storage_totalScalarFieldEnum = (typeof Camera_storage_totalScalarFieldEnum)[keyof typeof Camera_storage_totalScalarFieldEnum]


  export const Channel_cfgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    camera_mapping_id: 'camera_mapping_id',
    search_tag: 'search_tag',
    cfg_data: 'cfg_data',
    user_id_owner: 'user_id_owner',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Channel_cfgScalarFieldEnum = (typeof Channel_cfgScalarFieldEnum)[keyof typeof Channel_cfgScalarFieldEnum]


  export const Device_owner_cfgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Device_owner_cfgScalarFieldEnum = (typeof Device_owner_cfgScalarFieldEnum)[keyof typeof Device_owner_cfgScalarFieldEnum]


  export const Event_vms_sync_parentScalarFieldEnum: {
    id: 'id',
    lcms_server_id: 'lcms_server_id',
    event_vms_id: 'event_vms_id',
    source_id: 'source_id',
    event_time: 'event_time',
    data_file_path: 'data_file_path',
    partition_key: 'partition_key'
  };

  export type Event_vms_sync_parentScalarFieldEnum = (typeof Event_vms_sync_parentScalarFieldEnum)[keyof typeof Event_vms_sync_parentScalarFieldEnum]


  export const Event_vms_sync_update_parentScalarFieldEnum: {
    index: 'index',
    update_table_type: 'update_table_type',
    lcms_server_id: 'lcms_server_id',
    event_id: 'event_id',
    data_file_path: 'data_file_path',
    partition_key: 'partition_key'
  };

  export type Event_vms_sync_update_parentScalarFieldEnum = (typeof Event_vms_sync_update_parentScalarFieldEnum)[keyof typeof Event_vms_sync_update_parentScalarFieldEnum]


  export const Face_index_sync_parentScalarFieldEnum: {
    id: 'id',
    lcms_server_id: 'lcms_server_id',
    face_index_id: 'face_index_id',
    event_time: 'event_time',
    data_file_path: 'data_file_path',
    partition_key: 'partition_key'
  };

  export type Face_index_sync_parentScalarFieldEnum = (typeof Face_index_sync_parentScalarFieldEnum)[keyof typeof Face_index_sync_parentScalarFieldEnum]


  export const Human_infoScalarFieldEnum: {
    id: 'id',
    lcms_server_id: 'lcms_server_id',
    document_id: 'document_id',
    id_type: 'id_type',
    release_date: 'release_date',
    issued_by: 'issued_by',
    full_name: 'full_name',
    gender: 'gender',
    birthday: 'birthday',
    phone_number: 'phone_number',
    email: 'email',
    address: 'address',
    note: 'note',
    company: 'company',
    list_ids: 'list_ids',
    is_deleted: 'is_deleted',
    avatars: 'avatars',
    id_scan_images: 'id_scan_images',
    other_images: 'other_images',
    root_face_images: 'root_face_images',
    cropped_face_images: 'cropped_face_images',
    face_features: 'face_features',
    time_created: 'time_created',
    time_modified: 'time_modified',
    height: 'height',
    weight: 'weight',
    certificates_json_text: 'certificates_json_text'
  };

  export type Human_infoScalarFieldEnum = (typeof Human_infoScalarFieldEnum)[keyof typeof Human_infoScalarFieldEnum]


  export const Human_listScalarFieldEnum: {
    id: 'id',
    lcms_server_id: 'lcms_server_id',
    name: 'name',
    is_deleted: 'is_deleted',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Human_listScalarFieldEnum = (typeof Human_listScalarFieldEnum)[keyof typeof Human_listScalarFieldEnum]


  export const Monitoring_slot_summary_sync_parentScalarFieldEnum: {
    id: 'id',
    lcms_server_id: 'lcms_server_id',
    slot_summary_id: 'slot_summary_id',
    event_time: 'event_time',
    data_file_path: 'data_file_path',
    partition_key: 'partition_key'
  };

  export type Monitoring_slot_summary_sync_parentScalarFieldEnum = (typeof Monitoring_slot_summary_sync_parentScalarFieldEnum)[keyof typeof Monitoring_slot_summary_sync_parentScalarFieldEnum]


  export const Nvr_cfgScalarFieldEnum: {
    id: 'id',
    name: 'name',
    search_tag: 'search_tag',
    cfg_data: 'cfg_data',
    user_id_owner: 'user_id_owner',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Nvr_cfgScalarFieldEnum = (typeof Nvr_cfgScalarFieldEnum)[keyof typeof Nvr_cfgScalarFieldEnum]


  export const Nvr_channel_cfgScalarFieldEnum: {
    id: 'id',
    nvr_id: 'nvr_id',
    nvr_channel_index: 'nvr_channel_index',
    name: 'name',
    search_tag: 'search_tag',
    cfg_data: 'cfg_data',
    user_id_owner: 'user_id_owner',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Nvr_channel_cfgScalarFieldEnum = (typeof Nvr_channel_cfgScalarFieldEnum)[keyof typeof Nvr_channel_cfgScalarFieldEnum]


  export const Vehicle_infoScalarFieldEnum: {
    id: 'id',
    lcms_server_id: 'lcms_server_id',
    license_plate: 'license_plate',
    name: 'name',
    type: 'type',
    manufacturer: 'manufacturer',
    color: 'color',
    color_license_plate: 'color_license_plate',
    images: 'images',
    vehicle_payload: 'vehicle_payload',
    note: 'note',
    list_ids: 'list_ids',
    is_deleted: 'is_deleted',
    time_created: 'time_created',
    time_modified: 'time_modified',
    card_code: 'card_code'
  };

  export type Vehicle_infoScalarFieldEnum = (typeof Vehicle_infoScalarFieldEnum)[keyof typeof Vehicle_infoScalarFieldEnum]


  export const Vehicle_listScalarFieldEnum: {
    id: 'id',
    lcms_server_id: 'lcms_server_id',
    name: 'name',
    is_deleted: 'is_deleted',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Vehicle_listScalarFieldEnum = (typeof Vehicle_listScalarFieldEnum)[keyof typeof Vehicle_listScalarFieldEnum]


  export const Version_controlScalarFieldEnum: {
    id: 'id',
    type: 'type',
    tablename: 'tablename',
    version: 'version',
    timeupdated: 'timeupdated'
  };

  export type Version_controlScalarFieldEnum = (typeof Version_controlScalarFieldEnum)[keyof typeof Version_controlScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type camera_cfgWhereInput = {
    AND?: camera_cfgWhereInput | camera_cfgWhereInput[]
    OR?: camera_cfgWhereInput[]
    NOT?: camera_cfgWhereInput | camera_cfgWhereInput[]
    id?: StringFilter<"camera_cfg"> | string
    name?: StringNullableFilter<"camera_cfg"> | string | null
    search_tag?: StringNullableFilter<"camera_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"camera_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"camera_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"camera_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"camera_cfg"> | Date | string | null
  }

  export type camera_cfgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
  }

  export type camera_cfgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: camera_cfgWhereInput | camera_cfgWhereInput[]
    OR?: camera_cfgWhereInput[]
    NOT?: camera_cfgWhereInput | camera_cfgWhereInput[]
    name?: StringNullableFilter<"camera_cfg"> | string | null
    search_tag?: StringNullableFilter<"camera_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"camera_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"camera_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"camera_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"camera_cfg"> | Date | string | null
  }, "id">

  export type camera_cfgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    _count?: camera_cfgCountOrderByAggregateInput
    _max?: camera_cfgMaxOrderByAggregateInput
    _min?: camera_cfgMinOrderByAggregateInput
  }

  export type camera_cfgScalarWhereWithAggregatesInput = {
    AND?: camera_cfgScalarWhereWithAggregatesInput | camera_cfgScalarWhereWithAggregatesInput[]
    OR?: camera_cfgScalarWhereWithAggregatesInput[]
    NOT?: camera_cfgScalarWhereWithAggregatesInput | camera_cfgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"camera_cfg"> | string
    name?: StringNullableWithAggregatesFilter<"camera_cfg"> | string | null
    search_tag?: StringNullableWithAggregatesFilter<"camera_cfg"> | string | null
    cfg_data?: BytesNullableWithAggregatesFilter<"camera_cfg"> | Buffer | null
    user_id_owner?: StringNullableWithAggregatesFilter<"camera_cfg"> | string | null
    time_created?: DateTimeNullableWithAggregatesFilter<"camera_cfg"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"camera_cfg"> | Date | string | null
  }

  export type camera_storage_totalWhereInput = {
    AND?: camera_storage_totalWhereInput | camera_storage_totalWhereInput[]
    OR?: camera_storage_totalWhereInput[]
    NOT?: camera_storage_totalWhereInput | camera_storage_totalWhereInput[]
    partition_path?: StringFilter<"camera_storage_total"> | string
    camera_id?: StringFilter<"camera_storage_total"> | string
    use_disk_mb?: FloatNullableFilter<"camera_storage_total"> | number | null
    time_start?: DateTimeNullableFilter<"camera_storage_total"> | Date | string | null
    time_end?: DateTimeNullableFilter<"camera_storage_total"> | Date | string | null
    total_dur?: IntNullableFilter<"camera_storage_total"> | number | null
    lost_dur?: IntNullableFilter<"camera_storage_total"> | number | null
  }

  export type camera_storage_totalOrderByWithRelationInput = {
    partition_path?: SortOrder
    camera_id?: SortOrder
    use_disk_mb?: SortOrderInput | SortOrder
    time_start?: SortOrderInput | SortOrder
    time_end?: SortOrderInput | SortOrder
    total_dur?: SortOrderInput | SortOrder
    lost_dur?: SortOrderInput | SortOrder
  }

  export type camera_storage_totalWhereUniqueInput = Prisma.AtLeast<{
    partition_path_camera_id?: camera_storage_totalPartition_pathCamera_idCompoundUniqueInput
    AND?: camera_storage_totalWhereInput | camera_storage_totalWhereInput[]
    OR?: camera_storage_totalWhereInput[]
    NOT?: camera_storage_totalWhereInput | camera_storage_totalWhereInput[]
    partition_path?: StringFilter<"camera_storage_total"> | string
    camera_id?: StringFilter<"camera_storage_total"> | string
    use_disk_mb?: FloatNullableFilter<"camera_storage_total"> | number | null
    time_start?: DateTimeNullableFilter<"camera_storage_total"> | Date | string | null
    time_end?: DateTimeNullableFilter<"camera_storage_total"> | Date | string | null
    total_dur?: IntNullableFilter<"camera_storage_total"> | number | null
    lost_dur?: IntNullableFilter<"camera_storage_total"> | number | null
  }, "partition_path_camera_id">

  export type camera_storage_totalOrderByWithAggregationInput = {
    partition_path?: SortOrder
    camera_id?: SortOrder
    use_disk_mb?: SortOrderInput | SortOrder
    time_start?: SortOrderInput | SortOrder
    time_end?: SortOrderInput | SortOrder
    total_dur?: SortOrderInput | SortOrder
    lost_dur?: SortOrderInput | SortOrder
    _count?: camera_storage_totalCountOrderByAggregateInput
    _avg?: camera_storage_totalAvgOrderByAggregateInput
    _max?: camera_storage_totalMaxOrderByAggregateInput
    _min?: camera_storage_totalMinOrderByAggregateInput
    _sum?: camera_storage_totalSumOrderByAggregateInput
  }

  export type camera_storage_totalScalarWhereWithAggregatesInput = {
    AND?: camera_storage_totalScalarWhereWithAggregatesInput | camera_storage_totalScalarWhereWithAggregatesInput[]
    OR?: camera_storage_totalScalarWhereWithAggregatesInput[]
    NOT?: camera_storage_totalScalarWhereWithAggregatesInput | camera_storage_totalScalarWhereWithAggregatesInput[]
    partition_path?: StringWithAggregatesFilter<"camera_storage_total"> | string
    camera_id?: StringWithAggregatesFilter<"camera_storage_total"> | string
    use_disk_mb?: FloatNullableWithAggregatesFilter<"camera_storage_total"> | number | null
    time_start?: DateTimeNullableWithAggregatesFilter<"camera_storage_total"> | Date | string | null
    time_end?: DateTimeNullableWithAggregatesFilter<"camera_storage_total"> | Date | string | null
    total_dur?: IntNullableWithAggregatesFilter<"camera_storage_total"> | number | null
    lost_dur?: IntNullableWithAggregatesFilter<"camera_storage_total"> | number | null
  }

  export type channel_cfgWhereInput = {
    AND?: channel_cfgWhereInput | channel_cfgWhereInput[]
    OR?: channel_cfgWhereInput[]
    NOT?: channel_cfgWhereInput | channel_cfgWhereInput[]
    id?: StringFilter<"channel_cfg"> | string
    name?: StringNullableFilter<"channel_cfg"> | string | null
    camera_mapping_id?: StringNullableFilter<"channel_cfg"> | string | null
    search_tag?: StringNullableFilter<"channel_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"channel_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"channel_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"channel_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"channel_cfg"> | Date | string | null
  }

  export type channel_cfgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    camera_mapping_id?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
  }

  export type channel_cfgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: channel_cfgWhereInput | channel_cfgWhereInput[]
    OR?: channel_cfgWhereInput[]
    NOT?: channel_cfgWhereInput | channel_cfgWhereInput[]
    name?: StringNullableFilter<"channel_cfg"> | string | null
    camera_mapping_id?: StringNullableFilter<"channel_cfg"> | string | null
    search_tag?: StringNullableFilter<"channel_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"channel_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"channel_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"channel_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"channel_cfg"> | Date | string | null
  }, "id">

  export type channel_cfgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    camera_mapping_id?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    _count?: channel_cfgCountOrderByAggregateInput
    _max?: channel_cfgMaxOrderByAggregateInput
    _min?: channel_cfgMinOrderByAggregateInput
  }

  export type channel_cfgScalarWhereWithAggregatesInput = {
    AND?: channel_cfgScalarWhereWithAggregatesInput | channel_cfgScalarWhereWithAggregatesInput[]
    OR?: channel_cfgScalarWhereWithAggregatesInput[]
    NOT?: channel_cfgScalarWhereWithAggregatesInput | channel_cfgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"channel_cfg"> | string
    name?: StringNullableWithAggregatesFilter<"channel_cfg"> | string | null
    camera_mapping_id?: StringNullableWithAggregatesFilter<"channel_cfg"> | string | null
    search_tag?: StringNullableWithAggregatesFilter<"channel_cfg"> | string | null
    cfg_data?: BytesNullableWithAggregatesFilter<"channel_cfg"> | Buffer | null
    user_id_owner?: StringNullableWithAggregatesFilter<"channel_cfg"> | string | null
    time_created?: DateTimeNullableWithAggregatesFilter<"channel_cfg"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"channel_cfg"> | Date | string | null
  }

  export type device_owner_cfgWhereInput = {
    AND?: device_owner_cfgWhereInput | device_owner_cfgWhereInput[]
    OR?: device_owner_cfgWhereInput[]
    NOT?: device_owner_cfgWhereInput | device_owner_cfgWhereInput[]
    id?: StringFilter<"device_owner_cfg"> | string
    name?: StringNullableFilter<"device_owner_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"device_owner_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"device_owner_cfg"> | Date | string | null
  }

  export type device_owner_cfgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
  }

  export type device_owner_cfgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: device_owner_cfgWhereInput | device_owner_cfgWhereInput[]
    OR?: device_owner_cfgWhereInput[]
    NOT?: device_owner_cfgWhereInput | device_owner_cfgWhereInput[]
    name?: StringNullableFilter<"device_owner_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"device_owner_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"device_owner_cfg"> | Date | string | null
  }, "id">

  export type device_owner_cfgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    _count?: device_owner_cfgCountOrderByAggregateInput
    _max?: device_owner_cfgMaxOrderByAggregateInput
    _min?: device_owner_cfgMinOrderByAggregateInput
  }

  export type device_owner_cfgScalarWhereWithAggregatesInput = {
    AND?: device_owner_cfgScalarWhereWithAggregatesInput | device_owner_cfgScalarWhereWithAggregatesInput[]
    OR?: device_owner_cfgScalarWhereWithAggregatesInput[]
    NOT?: device_owner_cfgScalarWhereWithAggregatesInput | device_owner_cfgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"device_owner_cfg"> | string
    name?: StringNullableWithAggregatesFilter<"device_owner_cfg"> | string | null
    time_created?: DateTimeNullableWithAggregatesFilter<"device_owner_cfg"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"device_owner_cfg"> | Date | string | null
  }

  export type event_vms_sync_parentWhereInput = {
    AND?: event_vms_sync_parentWhereInput | event_vms_sync_parentWhereInput[]
    OR?: event_vms_sync_parentWhereInput[]
    NOT?: event_vms_sync_parentWhereInput | event_vms_sync_parentWhereInput[]
    id?: StringFilter<"event_vms_sync_parent"> | string
    lcms_server_id?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    event_vms_id?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    source_id?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    event_time?: DateTimeNullableFilter<"event_vms_sync_parent"> | Date | string | null
    data_file_path?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    partition_key?: IntFilter<"event_vms_sync_parent"> | number
  }

  export type event_vms_sync_parentOrderByWithRelationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    event_vms_id?: SortOrderInput | SortOrder
    source_id?: SortOrderInput | SortOrder
    event_time?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_parentWhereUniqueInput = Prisma.AtLeast<{
    id_partition_key?: event_vms_sync_parentIdPartition_keyCompoundUniqueInput
    AND?: event_vms_sync_parentWhereInput | event_vms_sync_parentWhereInput[]
    OR?: event_vms_sync_parentWhereInput[]
    NOT?: event_vms_sync_parentWhereInput | event_vms_sync_parentWhereInput[]
    id?: StringFilter<"event_vms_sync_parent"> | string
    lcms_server_id?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    event_vms_id?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    source_id?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    event_time?: DateTimeNullableFilter<"event_vms_sync_parent"> | Date | string | null
    data_file_path?: StringNullableFilter<"event_vms_sync_parent"> | string | null
    partition_key?: IntFilter<"event_vms_sync_parent"> | number
  }, "id_partition_key">

  export type event_vms_sync_parentOrderByWithAggregationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    event_vms_id?: SortOrderInput | SortOrder
    source_id?: SortOrderInput | SortOrder
    event_time?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
    _count?: event_vms_sync_parentCountOrderByAggregateInput
    _avg?: event_vms_sync_parentAvgOrderByAggregateInput
    _max?: event_vms_sync_parentMaxOrderByAggregateInput
    _min?: event_vms_sync_parentMinOrderByAggregateInput
    _sum?: event_vms_sync_parentSumOrderByAggregateInput
  }

  export type event_vms_sync_parentScalarWhereWithAggregatesInput = {
    AND?: event_vms_sync_parentScalarWhereWithAggregatesInput | event_vms_sync_parentScalarWhereWithAggregatesInput[]
    OR?: event_vms_sync_parentScalarWhereWithAggregatesInput[]
    NOT?: event_vms_sync_parentScalarWhereWithAggregatesInput | event_vms_sync_parentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"event_vms_sync_parent"> | string
    lcms_server_id?: StringNullableWithAggregatesFilter<"event_vms_sync_parent"> | string | null
    event_vms_id?: StringNullableWithAggregatesFilter<"event_vms_sync_parent"> | string | null
    source_id?: StringNullableWithAggregatesFilter<"event_vms_sync_parent"> | string | null
    event_time?: DateTimeNullableWithAggregatesFilter<"event_vms_sync_parent"> | Date | string | null
    data_file_path?: StringNullableWithAggregatesFilter<"event_vms_sync_parent"> | string | null
    partition_key?: IntWithAggregatesFilter<"event_vms_sync_parent"> | number
  }

  export type event_vms_sync_update_parentWhereInput = {
    AND?: event_vms_sync_update_parentWhereInput | event_vms_sync_update_parentWhereInput[]
    OR?: event_vms_sync_update_parentWhereInput[]
    NOT?: event_vms_sync_update_parentWhereInput | event_vms_sync_update_parentWhereInput[]
    index?: BigIntFilter<"event_vms_sync_update_parent"> | bigint | number
    update_table_type?: IntNullableFilter<"event_vms_sync_update_parent"> | number | null
    lcms_server_id?: StringNullableFilter<"event_vms_sync_update_parent"> | string | null
    event_id?: StringNullableFilter<"event_vms_sync_update_parent"> | string | null
    data_file_path?: StringNullableFilter<"event_vms_sync_update_parent"> | string | null
    partition_key?: IntFilter<"event_vms_sync_update_parent"> | number
  }

  export type event_vms_sync_update_parentOrderByWithRelationInput = {
    index?: SortOrder
    update_table_type?: SortOrderInput | SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    event_id?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_update_parentWhereUniqueInput = Prisma.AtLeast<{
    index_partition_key?: event_vms_sync_update_parentIndexPartition_keyCompoundUniqueInput
    AND?: event_vms_sync_update_parentWhereInput | event_vms_sync_update_parentWhereInput[]
    OR?: event_vms_sync_update_parentWhereInput[]
    NOT?: event_vms_sync_update_parentWhereInput | event_vms_sync_update_parentWhereInput[]
    index?: BigIntFilter<"event_vms_sync_update_parent"> | bigint | number
    update_table_type?: IntNullableFilter<"event_vms_sync_update_parent"> | number | null
    lcms_server_id?: StringNullableFilter<"event_vms_sync_update_parent"> | string | null
    event_id?: StringNullableFilter<"event_vms_sync_update_parent"> | string | null
    data_file_path?: StringNullableFilter<"event_vms_sync_update_parent"> | string | null
    partition_key?: IntFilter<"event_vms_sync_update_parent"> | number
  }, "index_partition_key">

  export type event_vms_sync_update_parentOrderByWithAggregationInput = {
    index?: SortOrder
    update_table_type?: SortOrderInput | SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    event_id?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
    _count?: event_vms_sync_update_parentCountOrderByAggregateInput
    _avg?: event_vms_sync_update_parentAvgOrderByAggregateInput
    _max?: event_vms_sync_update_parentMaxOrderByAggregateInput
    _min?: event_vms_sync_update_parentMinOrderByAggregateInput
    _sum?: event_vms_sync_update_parentSumOrderByAggregateInput
  }

  export type event_vms_sync_update_parentScalarWhereWithAggregatesInput = {
    AND?: event_vms_sync_update_parentScalarWhereWithAggregatesInput | event_vms_sync_update_parentScalarWhereWithAggregatesInput[]
    OR?: event_vms_sync_update_parentScalarWhereWithAggregatesInput[]
    NOT?: event_vms_sync_update_parentScalarWhereWithAggregatesInput | event_vms_sync_update_parentScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"event_vms_sync_update_parent"> | bigint | number
    update_table_type?: IntNullableWithAggregatesFilter<"event_vms_sync_update_parent"> | number | null
    lcms_server_id?: StringNullableWithAggregatesFilter<"event_vms_sync_update_parent"> | string | null
    event_id?: StringNullableWithAggregatesFilter<"event_vms_sync_update_parent"> | string | null
    data_file_path?: StringNullableWithAggregatesFilter<"event_vms_sync_update_parent"> | string | null
    partition_key?: IntWithAggregatesFilter<"event_vms_sync_update_parent"> | number
  }

  export type face_index_sync_parentWhereInput = {
    AND?: face_index_sync_parentWhereInput | face_index_sync_parentWhereInput[]
    OR?: face_index_sync_parentWhereInput[]
    NOT?: face_index_sync_parentWhereInput | face_index_sync_parentWhereInput[]
    id?: StringFilter<"face_index_sync_parent"> | string
    lcms_server_id?: StringNullableFilter<"face_index_sync_parent"> | string | null
    face_index_id?: StringNullableFilter<"face_index_sync_parent"> | string | null
    event_time?: DateTimeNullableFilter<"face_index_sync_parent"> | Date | string | null
    data_file_path?: StringNullableFilter<"face_index_sync_parent"> | string | null
    partition_key?: IntFilter<"face_index_sync_parent"> | number
  }

  export type face_index_sync_parentOrderByWithRelationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    face_index_id?: SortOrderInput | SortOrder
    event_time?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
  }

  export type face_index_sync_parentWhereUniqueInput = Prisma.AtLeast<{
    id_partition_key?: face_index_sync_parentIdPartition_keyCompoundUniqueInput
    AND?: face_index_sync_parentWhereInput | face_index_sync_parentWhereInput[]
    OR?: face_index_sync_parentWhereInput[]
    NOT?: face_index_sync_parentWhereInput | face_index_sync_parentWhereInput[]
    id?: StringFilter<"face_index_sync_parent"> | string
    lcms_server_id?: StringNullableFilter<"face_index_sync_parent"> | string | null
    face_index_id?: StringNullableFilter<"face_index_sync_parent"> | string | null
    event_time?: DateTimeNullableFilter<"face_index_sync_parent"> | Date | string | null
    data_file_path?: StringNullableFilter<"face_index_sync_parent"> | string | null
    partition_key?: IntFilter<"face_index_sync_parent"> | number
  }, "id_partition_key">

  export type face_index_sync_parentOrderByWithAggregationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    face_index_id?: SortOrderInput | SortOrder
    event_time?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
    _count?: face_index_sync_parentCountOrderByAggregateInput
    _avg?: face_index_sync_parentAvgOrderByAggregateInput
    _max?: face_index_sync_parentMaxOrderByAggregateInput
    _min?: face_index_sync_parentMinOrderByAggregateInput
    _sum?: face_index_sync_parentSumOrderByAggregateInput
  }

  export type face_index_sync_parentScalarWhereWithAggregatesInput = {
    AND?: face_index_sync_parentScalarWhereWithAggregatesInput | face_index_sync_parentScalarWhereWithAggregatesInput[]
    OR?: face_index_sync_parentScalarWhereWithAggregatesInput[]
    NOT?: face_index_sync_parentScalarWhereWithAggregatesInput | face_index_sync_parentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"face_index_sync_parent"> | string
    lcms_server_id?: StringNullableWithAggregatesFilter<"face_index_sync_parent"> | string | null
    face_index_id?: StringNullableWithAggregatesFilter<"face_index_sync_parent"> | string | null
    event_time?: DateTimeNullableWithAggregatesFilter<"face_index_sync_parent"> | Date | string | null
    data_file_path?: StringNullableWithAggregatesFilter<"face_index_sync_parent"> | string | null
    partition_key?: IntWithAggregatesFilter<"face_index_sync_parent"> | number
  }

  export type human_infoWhereInput = {
    AND?: human_infoWhereInput | human_infoWhereInput[]
    OR?: human_infoWhereInput[]
    NOT?: human_infoWhereInput | human_infoWhereInput[]
    id?: StringFilter<"human_info"> | string
    lcms_server_id?: StringNullableFilter<"human_info"> | string | null
    document_id?: StringNullableFilter<"human_info"> | string | null
    id_type?: StringNullableFilter<"human_info"> | string | null
    release_date?: DateTimeNullableFilter<"human_info"> | Date | string | null
    issued_by?: StringNullableFilter<"human_info"> | string | null
    full_name?: StringNullableFilter<"human_info"> | string | null
    gender?: IntNullableFilter<"human_info"> | number | null
    birthday?: DateTimeNullableFilter<"human_info"> | Date | string | null
    phone_number?: StringNullableFilter<"human_info"> | string | null
    email?: StringNullableFilter<"human_info"> | string | null
    address?: StringNullableFilter<"human_info"> | string | null
    note?: StringNullableFilter<"human_info"> | string | null
    company?: StringNullableFilter<"human_info"> | string | null
    list_ids?: StringNullableListFilter<"human_info">
    is_deleted?: BoolNullableFilter<"human_info"> | boolean | null
    avatars?: BytesNullableListFilter<"human_info">
    id_scan_images?: BytesNullableListFilter<"human_info">
    other_images?: BytesNullableListFilter<"human_info">
    root_face_images?: BytesNullableListFilter<"human_info">
    cropped_face_images?: BytesNullableListFilter<"human_info">
    face_features?: FloatNullableListFilter<"human_info">
    time_created?: DateTimeNullableFilter<"human_info"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"human_info"> | Date | string | null
    height?: FloatNullableFilter<"human_info"> | number | null
    weight?: FloatNullableFilter<"human_info"> | number | null
    certificates_json_text?: StringNullableFilter<"human_info"> | string | null
  }

  export type human_infoOrderByWithRelationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    document_id?: SortOrderInput | SortOrder
    id_type?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    issued_by?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    list_ids?: SortOrder
    is_deleted?: SortOrderInput | SortOrder
    avatars?: SortOrder
    id_scan_images?: SortOrder
    other_images?: SortOrder
    root_face_images?: SortOrder
    cropped_face_images?: SortOrder
    face_features?: SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    certificates_json_text?: SortOrderInput | SortOrder
  }

  export type human_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: human_infoWhereInput | human_infoWhereInput[]
    OR?: human_infoWhereInput[]
    NOT?: human_infoWhereInput | human_infoWhereInput[]
    lcms_server_id?: StringNullableFilter<"human_info"> | string | null
    document_id?: StringNullableFilter<"human_info"> | string | null
    id_type?: StringNullableFilter<"human_info"> | string | null
    release_date?: DateTimeNullableFilter<"human_info"> | Date | string | null
    issued_by?: StringNullableFilter<"human_info"> | string | null
    full_name?: StringNullableFilter<"human_info"> | string | null
    gender?: IntNullableFilter<"human_info"> | number | null
    birthday?: DateTimeNullableFilter<"human_info"> | Date | string | null
    phone_number?: StringNullableFilter<"human_info"> | string | null
    email?: StringNullableFilter<"human_info"> | string | null
    address?: StringNullableFilter<"human_info"> | string | null
    note?: StringNullableFilter<"human_info"> | string | null
    company?: StringNullableFilter<"human_info"> | string | null
    list_ids?: StringNullableListFilter<"human_info">
    is_deleted?: BoolNullableFilter<"human_info"> | boolean | null
    avatars?: BytesNullableListFilter<"human_info">
    id_scan_images?: BytesNullableListFilter<"human_info">
    other_images?: BytesNullableListFilter<"human_info">
    root_face_images?: BytesNullableListFilter<"human_info">
    cropped_face_images?: BytesNullableListFilter<"human_info">
    face_features?: FloatNullableListFilter<"human_info">
    time_created?: DateTimeNullableFilter<"human_info"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"human_info"> | Date | string | null
    height?: FloatNullableFilter<"human_info"> | number | null
    weight?: FloatNullableFilter<"human_info"> | number | null
    certificates_json_text?: StringNullableFilter<"human_info"> | string | null
  }, "id">

  export type human_infoOrderByWithAggregationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    document_id?: SortOrderInput | SortOrder
    id_type?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    issued_by?: SortOrderInput | SortOrder
    full_name?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    list_ids?: SortOrder
    is_deleted?: SortOrderInput | SortOrder
    avatars?: SortOrder
    id_scan_images?: SortOrder
    other_images?: SortOrder
    root_face_images?: SortOrder
    cropped_face_images?: SortOrder
    face_features?: SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    certificates_json_text?: SortOrderInput | SortOrder
    _count?: human_infoCountOrderByAggregateInput
    _avg?: human_infoAvgOrderByAggregateInput
    _max?: human_infoMaxOrderByAggregateInput
    _min?: human_infoMinOrderByAggregateInput
    _sum?: human_infoSumOrderByAggregateInput
  }

  export type human_infoScalarWhereWithAggregatesInput = {
    AND?: human_infoScalarWhereWithAggregatesInput | human_infoScalarWhereWithAggregatesInput[]
    OR?: human_infoScalarWhereWithAggregatesInput[]
    NOT?: human_infoScalarWhereWithAggregatesInput | human_infoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"human_info"> | string
    lcms_server_id?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    document_id?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    id_type?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    release_date?: DateTimeNullableWithAggregatesFilter<"human_info"> | Date | string | null
    issued_by?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    full_name?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    gender?: IntNullableWithAggregatesFilter<"human_info"> | number | null
    birthday?: DateTimeNullableWithAggregatesFilter<"human_info"> | Date | string | null
    phone_number?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    email?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    address?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    note?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    company?: StringNullableWithAggregatesFilter<"human_info"> | string | null
    list_ids?: StringNullableListFilter<"human_info">
    is_deleted?: BoolNullableWithAggregatesFilter<"human_info"> | boolean | null
    avatars?: BytesNullableListFilter<"human_info">
    id_scan_images?: BytesNullableListFilter<"human_info">
    other_images?: BytesNullableListFilter<"human_info">
    root_face_images?: BytesNullableListFilter<"human_info">
    cropped_face_images?: BytesNullableListFilter<"human_info">
    face_features?: FloatNullableListFilter<"human_info">
    time_created?: DateTimeNullableWithAggregatesFilter<"human_info"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"human_info"> | Date | string | null
    height?: FloatNullableWithAggregatesFilter<"human_info"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"human_info"> | number | null
    certificates_json_text?: StringNullableWithAggregatesFilter<"human_info"> | string | null
  }

  export type human_listWhereInput = {
    AND?: human_listWhereInput | human_listWhereInput[]
    OR?: human_listWhereInput[]
    NOT?: human_listWhereInput | human_listWhereInput[]
    id?: StringFilter<"human_list"> | string
    lcms_server_id?: StringNullableFilter<"human_list"> | string | null
    name?: StringNullableFilter<"human_list"> | string | null
    is_deleted?: BoolNullableFilter<"human_list"> | boolean | null
    time_created?: DateTimeNullableFilter<"human_list"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"human_list"> | Date | string | null
  }

  export type human_listOrderByWithRelationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
  }

  export type human_listWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: human_listWhereInput | human_listWhereInput[]
    OR?: human_listWhereInput[]
    NOT?: human_listWhereInput | human_listWhereInput[]
    lcms_server_id?: StringNullableFilter<"human_list"> | string | null
    name?: StringNullableFilter<"human_list"> | string | null
    is_deleted?: BoolNullableFilter<"human_list"> | boolean | null
    time_created?: DateTimeNullableFilter<"human_list"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"human_list"> | Date | string | null
  }, "id">

  export type human_listOrderByWithAggregationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    _count?: human_listCountOrderByAggregateInput
    _max?: human_listMaxOrderByAggregateInput
    _min?: human_listMinOrderByAggregateInput
  }

  export type human_listScalarWhereWithAggregatesInput = {
    AND?: human_listScalarWhereWithAggregatesInput | human_listScalarWhereWithAggregatesInput[]
    OR?: human_listScalarWhereWithAggregatesInput[]
    NOT?: human_listScalarWhereWithAggregatesInput | human_listScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"human_list"> | string
    lcms_server_id?: StringNullableWithAggregatesFilter<"human_list"> | string | null
    name?: StringNullableWithAggregatesFilter<"human_list"> | string | null
    is_deleted?: BoolNullableWithAggregatesFilter<"human_list"> | boolean | null
    time_created?: DateTimeNullableWithAggregatesFilter<"human_list"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"human_list"> | Date | string | null
  }

  export type monitoring_slot_summary_sync_parentWhereInput = {
    AND?: monitoring_slot_summary_sync_parentWhereInput | monitoring_slot_summary_sync_parentWhereInput[]
    OR?: monitoring_slot_summary_sync_parentWhereInput[]
    NOT?: monitoring_slot_summary_sync_parentWhereInput | monitoring_slot_summary_sync_parentWhereInput[]
    id?: StringFilter<"monitoring_slot_summary_sync_parent"> | string
    lcms_server_id?: StringNullableFilter<"monitoring_slot_summary_sync_parent"> | string | null
    slot_summary_id?: StringNullableFilter<"monitoring_slot_summary_sync_parent"> | string | null
    event_time?: DateTimeNullableFilter<"monitoring_slot_summary_sync_parent"> | Date | string | null
    data_file_path?: StringNullableFilter<"monitoring_slot_summary_sync_parent"> | string | null
    partition_key?: IntFilter<"monitoring_slot_summary_sync_parent"> | number
  }

  export type monitoring_slot_summary_sync_parentOrderByWithRelationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    slot_summary_id?: SortOrderInput | SortOrder
    event_time?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
  }

  export type monitoring_slot_summary_sync_parentWhereUniqueInput = Prisma.AtLeast<{
    id_partition_key?: monitoring_slot_summary_sync_parentIdPartition_keyCompoundUniqueInput
    AND?: monitoring_slot_summary_sync_parentWhereInput | monitoring_slot_summary_sync_parentWhereInput[]
    OR?: monitoring_slot_summary_sync_parentWhereInput[]
    NOT?: monitoring_slot_summary_sync_parentWhereInput | monitoring_slot_summary_sync_parentWhereInput[]
    id?: StringFilter<"monitoring_slot_summary_sync_parent"> | string
    lcms_server_id?: StringNullableFilter<"monitoring_slot_summary_sync_parent"> | string | null
    slot_summary_id?: StringNullableFilter<"monitoring_slot_summary_sync_parent"> | string | null
    event_time?: DateTimeNullableFilter<"monitoring_slot_summary_sync_parent"> | Date | string | null
    data_file_path?: StringNullableFilter<"monitoring_slot_summary_sync_parent"> | string | null
    partition_key?: IntFilter<"monitoring_slot_summary_sync_parent"> | number
  }, "id_partition_key">

  export type monitoring_slot_summary_sync_parentOrderByWithAggregationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    slot_summary_id?: SortOrderInput | SortOrder
    event_time?: SortOrderInput | SortOrder
    data_file_path?: SortOrderInput | SortOrder
    partition_key?: SortOrder
    _count?: monitoring_slot_summary_sync_parentCountOrderByAggregateInput
    _avg?: monitoring_slot_summary_sync_parentAvgOrderByAggregateInput
    _max?: monitoring_slot_summary_sync_parentMaxOrderByAggregateInput
    _min?: monitoring_slot_summary_sync_parentMinOrderByAggregateInput
    _sum?: monitoring_slot_summary_sync_parentSumOrderByAggregateInput
  }

  export type monitoring_slot_summary_sync_parentScalarWhereWithAggregatesInput = {
    AND?: monitoring_slot_summary_sync_parentScalarWhereWithAggregatesInput | monitoring_slot_summary_sync_parentScalarWhereWithAggregatesInput[]
    OR?: monitoring_slot_summary_sync_parentScalarWhereWithAggregatesInput[]
    NOT?: monitoring_slot_summary_sync_parentScalarWhereWithAggregatesInput | monitoring_slot_summary_sync_parentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"monitoring_slot_summary_sync_parent"> | string
    lcms_server_id?: StringNullableWithAggregatesFilter<"monitoring_slot_summary_sync_parent"> | string | null
    slot_summary_id?: StringNullableWithAggregatesFilter<"monitoring_slot_summary_sync_parent"> | string | null
    event_time?: DateTimeNullableWithAggregatesFilter<"monitoring_slot_summary_sync_parent"> | Date | string | null
    data_file_path?: StringNullableWithAggregatesFilter<"monitoring_slot_summary_sync_parent"> | string | null
    partition_key?: IntWithAggregatesFilter<"monitoring_slot_summary_sync_parent"> | number
  }

  export type nvr_cfgWhereInput = {
    AND?: nvr_cfgWhereInput | nvr_cfgWhereInput[]
    OR?: nvr_cfgWhereInput[]
    NOT?: nvr_cfgWhereInput | nvr_cfgWhereInput[]
    id?: StringFilter<"nvr_cfg"> | string
    name?: StringNullableFilter<"nvr_cfg"> | string | null
    search_tag?: StringNullableFilter<"nvr_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"nvr_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"nvr_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"nvr_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"nvr_cfg"> | Date | string | null
  }

  export type nvr_cfgOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
  }

  export type nvr_cfgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: nvr_cfgWhereInput | nvr_cfgWhereInput[]
    OR?: nvr_cfgWhereInput[]
    NOT?: nvr_cfgWhereInput | nvr_cfgWhereInput[]
    name?: StringNullableFilter<"nvr_cfg"> | string | null
    search_tag?: StringNullableFilter<"nvr_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"nvr_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"nvr_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"nvr_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"nvr_cfg"> | Date | string | null
  }, "id">

  export type nvr_cfgOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    _count?: nvr_cfgCountOrderByAggregateInput
    _max?: nvr_cfgMaxOrderByAggregateInput
    _min?: nvr_cfgMinOrderByAggregateInput
  }

  export type nvr_cfgScalarWhereWithAggregatesInput = {
    AND?: nvr_cfgScalarWhereWithAggregatesInput | nvr_cfgScalarWhereWithAggregatesInput[]
    OR?: nvr_cfgScalarWhereWithAggregatesInput[]
    NOT?: nvr_cfgScalarWhereWithAggregatesInput | nvr_cfgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"nvr_cfg"> | string
    name?: StringNullableWithAggregatesFilter<"nvr_cfg"> | string | null
    search_tag?: StringNullableWithAggregatesFilter<"nvr_cfg"> | string | null
    cfg_data?: BytesNullableWithAggregatesFilter<"nvr_cfg"> | Buffer | null
    user_id_owner?: StringNullableWithAggregatesFilter<"nvr_cfg"> | string | null
    time_created?: DateTimeNullableWithAggregatesFilter<"nvr_cfg"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"nvr_cfg"> | Date | string | null
  }

  export type nvr_channel_cfgWhereInput = {
    AND?: nvr_channel_cfgWhereInput | nvr_channel_cfgWhereInput[]
    OR?: nvr_channel_cfgWhereInput[]
    NOT?: nvr_channel_cfgWhereInput | nvr_channel_cfgWhereInput[]
    id?: StringFilter<"nvr_channel_cfg"> | string
    nvr_id?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    nvr_channel_index?: IntNullableFilter<"nvr_channel_cfg"> | number | null
    name?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    search_tag?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"nvr_channel_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"nvr_channel_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"nvr_channel_cfg"> | Date | string | null
  }

  export type nvr_channel_cfgOrderByWithRelationInput = {
    id?: SortOrder
    nvr_id?: SortOrderInput | SortOrder
    nvr_channel_index?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
  }

  export type nvr_channel_cfgWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: nvr_channel_cfgWhereInput | nvr_channel_cfgWhereInput[]
    OR?: nvr_channel_cfgWhereInput[]
    NOT?: nvr_channel_cfgWhereInput | nvr_channel_cfgWhereInput[]
    nvr_id?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    nvr_channel_index?: IntNullableFilter<"nvr_channel_cfg"> | number | null
    name?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    search_tag?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    cfg_data?: BytesNullableFilter<"nvr_channel_cfg"> | Buffer | null
    user_id_owner?: StringNullableFilter<"nvr_channel_cfg"> | string | null
    time_created?: DateTimeNullableFilter<"nvr_channel_cfg"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"nvr_channel_cfg"> | Date | string | null
  }, "id">

  export type nvr_channel_cfgOrderByWithAggregationInput = {
    id?: SortOrder
    nvr_id?: SortOrderInput | SortOrder
    nvr_channel_index?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    search_tag?: SortOrderInput | SortOrder
    cfg_data?: SortOrderInput | SortOrder
    user_id_owner?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    _count?: nvr_channel_cfgCountOrderByAggregateInput
    _avg?: nvr_channel_cfgAvgOrderByAggregateInput
    _max?: nvr_channel_cfgMaxOrderByAggregateInput
    _min?: nvr_channel_cfgMinOrderByAggregateInput
    _sum?: nvr_channel_cfgSumOrderByAggregateInput
  }

  export type nvr_channel_cfgScalarWhereWithAggregatesInput = {
    AND?: nvr_channel_cfgScalarWhereWithAggregatesInput | nvr_channel_cfgScalarWhereWithAggregatesInput[]
    OR?: nvr_channel_cfgScalarWhereWithAggregatesInput[]
    NOT?: nvr_channel_cfgScalarWhereWithAggregatesInput | nvr_channel_cfgScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"nvr_channel_cfg"> | string
    nvr_id?: StringNullableWithAggregatesFilter<"nvr_channel_cfg"> | string | null
    nvr_channel_index?: IntNullableWithAggregatesFilter<"nvr_channel_cfg"> | number | null
    name?: StringNullableWithAggregatesFilter<"nvr_channel_cfg"> | string | null
    search_tag?: StringNullableWithAggregatesFilter<"nvr_channel_cfg"> | string | null
    cfg_data?: BytesNullableWithAggregatesFilter<"nvr_channel_cfg"> | Buffer | null
    user_id_owner?: StringNullableWithAggregatesFilter<"nvr_channel_cfg"> | string | null
    time_created?: DateTimeNullableWithAggregatesFilter<"nvr_channel_cfg"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"nvr_channel_cfg"> | Date | string | null
  }

  export type vehicle_infoWhereInput = {
    AND?: vehicle_infoWhereInput | vehicle_infoWhereInput[]
    OR?: vehicle_infoWhereInput[]
    NOT?: vehicle_infoWhereInput | vehicle_infoWhereInput[]
    id?: StringFilter<"vehicle_info"> | string
    lcms_server_id?: StringNullableFilter<"vehicle_info"> | string | null
    license_plate?: StringNullableFilter<"vehicle_info"> | string | null
    name?: StringNullableFilter<"vehicle_info"> | string | null
    type?: IntNullableFilter<"vehicle_info"> | number | null
    manufacturer?: IntNullableFilter<"vehicle_info"> | number | null
    color?: IntNullableFilter<"vehicle_info"> | number | null
    color_license_plate?: IntNullableFilter<"vehicle_info"> | number | null
    images?: BytesNullableListFilter<"vehicle_info">
    vehicle_payload?: FloatNullableFilter<"vehicle_info"> | number | null
    note?: StringNullableFilter<"vehicle_info"> | string | null
    list_ids?: StringNullableListFilter<"vehicle_info">
    is_deleted?: BoolNullableFilter<"vehicle_info"> | boolean | null
    time_created?: DateTimeNullableFilter<"vehicle_info"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"vehicle_info"> | Date | string | null
    card_code?: StringNullableFilter<"vehicle_info"> | string | null
  }

  export type vehicle_infoOrderByWithRelationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    license_plate?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    color_license_plate?: SortOrderInput | SortOrder
    images?: SortOrder
    vehicle_payload?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    list_ids?: SortOrder
    is_deleted?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    card_code?: SortOrderInput | SortOrder
  }

  export type vehicle_infoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    card_code?: string
    AND?: vehicle_infoWhereInput | vehicle_infoWhereInput[]
    OR?: vehicle_infoWhereInput[]
    NOT?: vehicle_infoWhereInput | vehicle_infoWhereInput[]
    lcms_server_id?: StringNullableFilter<"vehicle_info"> | string | null
    license_plate?: StringNullableFilter<"vehicle_info"> | string | null
    name?: StringNullableFilter<"vehicle_info"> | string | null
    type?: IntNullableFilter<"vehicle_info"> | number | null
    manufacturer?: IntNullableFilter<"vehicle_info"> | number | null
    color?: IntNullableFilter<"vehicle_info"> | number | null
    color_license_plate?: IntNullableFilter<"vehicle_info"> | number | null
    images?: BytesNullableListFilter<"vehicle_info">
    vehicle_payload?: FloatNullableFilter<"vehicle_info"> | number | null
    note?: StringNullableFilter<"vehicle_info"> | string | null
    list_ids?: StringNullableListFilter<"vehicle_info">
    is_deleted?: BoolNullableFilter<"vehicle_info"> | boolean | null
    time_created?: DateTimeNullableFilter<"vehicle_info"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"vehicle_info"> | Date | string | null
  }, "id" | "card_code">

  export type vehicle_infoOrderByWithAggregationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    license_plate?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    manufacturer?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    color_license_plate?: SortOrderInput | SortOrder
    images?: SortOrder
    vehicle_payload?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    list_ids?: SortOrder
    is_deleted?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    card_code?: SortOrderInput | SortOrder
    _count?: vehicle_infoCountOrderByAggregateInput
    _avg?: vehicle_infoAvgOrderByAggregateInput
    _max?: vehicle_infoMaxOrderByAggregateInput
    _min?: vehicle_infoMinOrderByAggregateInput
    _sum?: vehicle_infoSumOrderByAggregateInput
  }

  export type vehicle_infoScalarWhereWithAggregatesInput = {
    AND?: vehicle_infoScalarWhereWithAggregatesInput | vehicle_infoScalarWhereWithAggregatesInput[]
    OR?: vehicle_infoScalarWhereWithAggregatesInput[]
    NOT?: vehicle_infoScalarWhereWithAggregatesInput | vehicle_infoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vehicle_info"> | string
    lcms_server_id?: StringNullableWithAggregatesFilter<"vehicle_info"> | string | null
    license_plate?: StringNullableWithAggregatesFilter<"vehicle_info"> | string | null
    name?: StringNullableWithAggregatesFilter<"vehicle_info"> | string | null
    type?: IntNullableWithAggregatesFilter<"vehicle_info"> | number | null
    manufacturer?: IntNullableWithAggregatesFilter<"vehicle_info"> | number | null
    color?: IntNullableWithAggregatesFilter<"vehicle_info"> | number | null
    color_license_plate?: IntNullableWithAggregatesFilter<"vehicle_info"> | number | null
    images?: BytesNullableListFilter<"vehicle_info">
    vehicle_payload?: FloatNullableWithAggregatesFilter<"vehicle_info"> | number | null
    note?: StringNullableWithAggregatesFilter<"vehicle_info"> | string | null
    list_ids?: StringNullableListFilter<"vehicle_info">
    is_deleted?: BoolNullableWithAggregatesFilter<"vehicle_info"> | boolean | null
    time_created?: DateTimeNullableWithAggregatesFilter<"vehicle_info"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"vehicle_info"> | Date | string | null
    card_code?: StringNullableWithAggregatesFilter<"vehicle_info"> | string | null
  }

  export type vehicle_listWhereInput = {
    AND?: vehicle_listWhereInput | vehicle_listWhereInput[]
    OR?: vehicle_listWhereInput[]
    NOT?: vehicle_listWhereInput | vehicle_listWhereInput[]
    id?: StringFilter<"vehicle_list"> | string
    lcms_server_id?: StringNullableFilter<"vehicle_list"> | string | null
    name?: StringNullableFilter<"vehicle_list"> | string | null
    is_deleted?: BoolNullableFilter<"vehicle_list"> | boolean | null
    time_created?: DateTimeNullableFilter<"vehicle_list"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"vehicle_list"> | Date | string | null
  }

  export type vehicle_listOrderByWithRelationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
  }

  export type vehicle_listWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: vehicle_listWhereInput | vehicle_listWhereInput[]
    OR?: vehicle_listWhereInput[]
    NOT?: vehicle_listWhereInput | vehicle_listWhereInput[]
    lcms_server_id?: StringNullableFilter<"vehicle_list"> | string | null
    name?: StringNullableFilter<"vehicle_list"> | string | null
    is_deleted?: BoolNullableFilter<"vehicle_list"> | boolean | null
    time_created?: DateTimeNullableFilter<"vehicle_list"> | Date | string | null
    time_modified?: DateTimeNullableFilter<"vehicle_list"> | Date | string | null
  }, "id">

  export type vehicle_listOrderByWithAggregationInput = {
    id?: SortOrder
    lcms_server_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    is_deleted?: SortOrderInput | SortOrder
    time_created?: SortOrderInput | SortOrder
    time_modified?: SortOrderInput | SortOrder
    _count?: vehicle_listCountOrderByAggregateInput
    _max?: vehicle_listMaxOrderByAggregateInput
    _min?: vehicle_listMinOrderByAggregateInput
  }

  export type vehicle_listScalarWhereWithAggregatesInput = {
    AND?: vehicle_listScalarWhereWithAggregatesInput | vehicle_listScalarWhereWithAggregatesInput[]
    OR?: vehicle_listScalarWhereWithAggregatesInput[]
    NOT?: vehicle_listScalarWhereWithAggregatesInput | vehicle_listScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"vehicle_list"> | string
    lcms_server_id?: StringNullableWithAggregatesFilter<"vehicle_list"> | string | null
    name?: StringNullableWithAggregatesFilter<"vehicle_list"> | string | null
    is_deleted?: BoolNullableWithAggregatesFilter<"vehicle_list"> | boolean | null
    time_created?: DateTimeNullableWithAggregatesFilter<"vehicle_list"> | Date | string | null
    time_modified?: DateTimeNullableWithAggregatesFilter<"vehicle_list"> | Date | string | null
  }

  export type version_controlWhereInput = {
    AND?: version_controlWhereInput | version_controlWhereInput[]
    OR?: version_controlWhereInput[]
    NOT?: version_controlWhereInput | version_controlWhereInput[]
    id?: UuidFilter<"version_control"> | string
    type?: IntNullableFilter<"version_control"> | number | null
    tablename?: StringNullableFilter<"version_control"> | string | null
    version?: IntNullableFilter<"version_control"> | number | null
    timeupdated?: DateTimeNullableFilter<"version_control"> | Date | string | null
  }

  export type version_controlOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    tablename?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    timeupdated?: SortOrderInput | SortOrder
  }

  export type version_controlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: version_controlWhereInput | version_controlWhereInput[]
    OR?: version_controlWhereInput[]
    NOT?: version_controlWhereInput | version_controlWhereInput[]
    type?: IntNullableFilter<"version_control"> | number | null
    tablename?: StringNullableFilter<"version_control"> | string | null
    version?: IntNullableFilter<"version_control"> | number | null
    timeupdated?: DateTimeNullableFilter<"version_control"> | Date | string | null
  }, "id">

  export type version_controlOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    tablename?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    timeupdated?: SortOrderInput | SortOrder
    _count?: version_controlCountOrderByAggregateInput
    _avg?: version_controlAvgOrderByAggregateInput
    _max?: version_controlMaxOrderByAggregateInput
    _min?: version_controlMinOrderByAggregateInput
    _sum?: version_controlSumOrderByAggregateInput
  }

  export type version_controlScalarWhereWithAggregatesInput = {
    AND?: version_controlScalarWhereWithAggregatesInput | version_controlScalarWhereWithAggregatesInput[]
    OR?: version_controlScalarWhereWithAggregatesInput[]
    NOT?: version_controlScalarWhereWithAggregatesInput | version_controlScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"version_control"> | string
    type?: IntNullableWithAggregatesFilter<"version_control"> | number | null
    tablename?: StringNullableWithAggregatesFilter<"version_control"> | string | null
    version?: IntNullableWithAggregatesFilter<"version_control"> | number | null
    timeupdated?: DateTimeNullableWithAggregatesFilter<"version_control"> | Date | string | null
  }

  export type camera_cfgCreateInput = {
    id: string
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type camera_cfgUncheckedCreateInput = {
    id: string
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type camera_cfgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_cfgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_cfgCreateManyInput = {
    id: string
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type camera_cfgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_cfgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type camera_storage_totalCreateInput = {
    partition_path: string
    camera_id: string
    use_disk_mb?: number | null
    time_start?: Date | string | null
    time_end?: Date | string | null
    total_dur?: number | null
    lost_dur?: number | null
  }

  export type camera_storage_totalUncheckedCreateInput = {
    partition_path: string
    camera_id: string
    use_disk_mb?: number | null
    time_start?: Date | string | null
    time_end?: Date | string | null
    total_dur?: number | null
    lost_dur?: number | null
  }

  export type camera_storage_totalUpdateInput = {
    partition_path?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    use_disk_mb?: NullableFloatFieldUpdateOperationsInput | number | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_dur?: NullableIntFieldUpdateOperationsInput | number | null
    lost_dur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type camera_storage_totalUncheckedUpdateInput = {
    partition_path?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    use_disk_mb?: NullableFloatFieldUpdateOperationsInput | number | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_dur?: NullableIntFieldUpdateOperationsInput | number | null
    lost_dur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type camera_storage_totalCreateManyInput = {
    partition_path: string
    camera_id: string
    use_disk_mb?: number | null
    time_start?: Date | string | null
    time_end?: Date | string | null
    total_dur?: number | null
    lost_dur?: number | null
  }

  export type camera_storage_totalUpdateManyMutationInput = {
    partition_path?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    use_disk_mb?: NullableFloatFieldUpdateOperationsInput | number | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_dur?: NullableIntFieldUpdateOperationsInput | number | null
    lost_dur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type camera_storage_totalUncheckedUpdateManyInput = {
    partition_path?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    use_disk_mb?: NullableFloatFieldUpdateOperationsInput | number | null
    time_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_dur?: NullableIntFieldUpdateOperationsInput | number | null
    lost_dur?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type channel_cfgCreateInput = {
    id: string
    name?: string | null
    camera_mapping_id?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type channel_cfgUncheckedCreateInput = {
    id: string
    name?: string | null
    camera_mapping_id?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type channel_cfgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    camera_mapping_id?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type channel_cfgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    camera_mapping_id?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type channel_cfgCreateManyInput = {
    id: string
    name?: string | null
    camera_mapping_id?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type channel_cfgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    camera_mapping_id?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type channel_cfgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    camera_mapping_id?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_owner_cfgCreateInput = {
    id: string
    name?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type device_owner_cfgUncheckedCreateInput = {
    id: string
    name?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type device_owner_cfgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_owner_cfgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_owner_cfgCreateManyInput = {
    id: string
    name?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type device_owner_cfgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type device_owner_cfgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_vms_sync_parentCreateInput = {
    id: string
    lcms_server_id?: string | null
    event_vms_id?: string | null
    source_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type event_vms_sync_parentUncheckedCreateInput = {
    id: string
    lcms_server_id?: string | null
    event_vms_id?: string | null
    source_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type event_vms_sync_parentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_vms_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type event_vms_sync_parentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_vms_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type event_vms_sync_parentCreateManyInput = {
    id: string
    lcms_server_id?: string | null
    event_vms_id?: string | null
    source_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type event_vms_sync_parentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_vms_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type event_vms_sync_parentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_vms_id?: NullableStringFieldUpdateOperationsInput | string | null
    source_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type event_vms_sync_update_parentCreateInput = {
    index?: bigint | number
    update_table_type?: number | null
    lcms_server_id?: string | null
    event_id?: string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type event_vms_sync_update_parentUncheckedCreateInput = {
    index?: bigint | number
    update_table_type?: number | null
    lcms_server_id?: string | null
    event_id?: string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type event_vms_sync_update_parentUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    update_table_type?: NullableIntFieldUpdateOperationsInput | number | null
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: NullableStringFieldUpdateOperationsInput | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type event_vms_sync_update_parentUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    update_table_type?: NullableIntFieldUpdateOperationsInput | number | null
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: NullableStringFieldUpdateOperationsInput | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type event_vms_sync_update_parentCreateManyInput = {
    index?: bigint | number
    update_table_type?: number | null
    lcms_server_id?: string | null
    event_id?: string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type event_vms_sync_update_parentUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    update_table_type?: NullableIntFieldUpdateOperationsInput | number | null
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: NullableStringFieldUpdateOperationsInput | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type event_vms_sync_update_parentUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    update_table_type?: NullableIntFieldUpdateOperationsInput | number | null
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_id?: NullableStringFieldUpdateOperationsInput | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type face_index_sync_parentCreateInput = {
    id: string
    lcms_server_id?: string | null
    face_index_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type face_index_sync_parentUncheckedCreateInput = {
    id: string
    lcms_server_id?: string | null
    face_index_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type face_index_sync_parentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    face_index_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type face_index_sync_parentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    face_index_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type face_index_sync_parentCreateManyInput = {
    id: string
    lcms_server_id?: string | null
    face_index_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type face_index_sync_parentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    face_index_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type face_index_sync_parentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    face_index_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type human_infoCreateInput = {
    id: string
    lcms_server_id?: string | null
    document_id?: string | null
    id_type?: string | null
    release_date?: Date | string | null
    issued_by?: string | null
    full_name?: string | null
    gender?: number | null
    birthday?: Date | string | null
    phone_number?: string | null
    email?: string | null
    address?: string | null
    note?: string | null
    company?: string | null
    list_ids?: human_infoCreatelist_idsInput | string[]
    is_deleted?: boolean | null
    avatars?: human_infoCreateavatarsInput | Buffer[]
    id_scan_images?: human_infoCreateid_scan_imagesInput | Buffer[]
    other_images?: human_infoCreateother_imagesInput | Buffer[]
    root_face_images?: human_infoCreateroot_face_imagesInput | Buffer[]
    cropped_face_images?: human_infoCreatecropped_face_imagesInput | Buffer[]
    face_features?: human_infoCreateface_featuresInput | number[]
    time_created?: Date | string | null
    time_modified?: Date | string | null
    height?: number | null
    weight?: number | null
    certificates_json_text?: string | null
  }

  export type human_infoUncheckedCreateInput = {
    id: string
    lcms_server_id?: string | null
    document_id?: string | null
    id_type?: string | null
    release_date?: Date | string | null
    issued_by?: string | null
    full_name?: string | null
    gender?: number | null
    birthday?: Date | string | null
    phone_number?: string | null
    email?: string | null
    address?: string | null
    note?: string | null
    company?: string | null
    list_ids?: human_infoCreatelist_idsInput | string[]
    is_deleted?: boolean | null
    avatars?: human_infoCreateavatarsInput | Buffer[]
    id_scan_images?: human_infoCreateid_scan_imagesInput | Buffer[]
    other_images?: human_infoCreateother_imagesInput | Buffer[]
    root_face_images?: human_infoCreateroot_face_imagesInput | Buffer[]
    cropped_face_images?: human_infoCreatecropped_face_imagesInput | Buffer[]
    face_features?: human_infoCreateface_featuresInput | number[]
    time_created?: Date | string | null
    time_modified?: Date | string | null
    height?: number | null
    weight?: number | null
    certificates_json_text?: string | null
  }

  export type human_infoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_type?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: human_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatars?: human_infoUpdateavatarsInput | Buffer[]
    id_scan_images?: human_infoUpdateid_scan_imagesInput | Buffer[]
    other_images?: human_infoUpdateother_imagesInput | Buffer[]
    root_face_images?: human_infoUpdateroot_face_imagesInput | Buffer[]
    cropped_face_images?: human_infoUpdatecropped_face_imagesInput | Buffer[]
    face_features?: human_infoUpdateface_featuresInput | number[]
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    certificates_json_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type human_infoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_type?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: human_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatars?: human_infoUpdateavatarsInput | Buffer[]
    id_scan_images?: human_infoUpdateid_scan_imagesInput | Buffer[]
    other_images?: human_infoUpdateother_imagesInput | Buffer[]
    root_face_images?: human_infoUpdateroot_face_imagesInput | Buffer[]
    cropped_face_images?: human_infoUpdatecropped_face_imagesInput | Buffer[]
    face_features?: human_infoUpdateface_featuresInput | number[]
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    certificates_json_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type human_infoCreateManyInput = {
    id: string
    lcms_server_id?: string | null
    document_id?: string | null
    id_type?: string | null
    release_date?: Date | string | null
    issued_by?: string | null
    full_name?: string | null
    gender?: number | null
    birthday?: Date | string | null
    phone_number?: string | null
    email?: string | null
    address?: string | null
    note?: string | null
    company?: string | null
    list_ids?: human_infoCreatelist_idsInput | string[]
    is_deleted?: boolean | null
    avatars?: human_infoCreateavatarsInput | Buffer[]
    id_scan_images?: human_infoCreateid_scan_imagesInput | Buffer[]
    other_images?: human_infoCreateother_imagesInput | Buffer[]
    root_face_images?: human_infoCreateroot_face_imagesInput | Buffer[]
    cropped_face_images?: human_infoCreatecropped_face_imagesInput | Buffer[]
    face_features?: human_infoCreateface_featuresInput | number[]
    time_created?: Date | string | null
    time_modified?: Date | string | null
    height?: number | null
    weight?: number | null
    certificates_json_text?: string | null
  }

  export type human_infoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_type?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: human_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatars?: human_infoUpdateavatarsInput | Buffer[]
    id_scan_images?: human_infoUpdateid_scan_imagesInput | Buffer[]
    other_images?: human_infoUpdateother_imagesInput | Buffer[]
    root_face_images?: human_infoUpdateroot_face_imagesInput | Buffer[]
    cropped_face_images?: human_infoUpdatecropped_face_imagesInput | Buffer[]
    face_features?: human_infoUpdateface_featuresInput | number[]
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    certificates_json_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type human_infoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    document_id?: NullableStringFieldUpdateOperationsInput | string | null
    id_type?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    issued_by?: NullableStringFieldUpdateOperationsInput | string | null
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableIntFieldUpdateOperationsInput | number | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: human_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    avatars?: human_infoUpdateavatarsInput | Buffer[]
    id_scan_images?: human_infoUpdateid_scan_imagesInput | Buffer[]
    other_images?: human_infoUpdateother_imagesInput | Buffer[]
    root_face_images?: human_infoUpdateroot_face_imagesInput | Buffer[]
    cropped_face_images?: human_infoUpdatecropped_face_imagesInput | Buffer[]
    face_features?: human_infoUpdateface_featuresInput | number[]
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    certificates_json_text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type human_listCreateInput = {
    id: string
    lcms_server_id?: string | null
    name?: string | null
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type human_listUncheckedCreateInput = {
    id: string
    lcms_server_id?: string | null
    name?: string | null
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type human_listUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type human_listUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type human_listCreateManyInput = {
    id: string
    lcms_server_id?: string | null
    name?: string | null
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type human_listUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type human_listUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type monitoring_slot_summary_sync_parentCreateInput = {
    id: string
    lcms_server_id?: string | null
    slot_summary_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type monitoring_slot_summary_sync_parentUncheckedCreateInput = {
    id: string
    lcms_server_id?: string | null
    slot_summary_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type monitoring_slot_summary_sync_parentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    slot_summary_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type monitoring_slot_summary_sync_parentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    slot_summary_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type monitoring_slot_summary_sync_parentCreateManyInput = {
    id: string
    lcms_server_id?: string | null
    slot_summary_id?: string | null
    event_time?: Date | string | null
    data_file_path?: string | null
    partition_key: number
  }

  export type monitoring_slot_summary_sync_parentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    slot_summary_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type monitoring_slot_summary_sync_parentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    slot_summary_id?: NullableStringFieldUpdateOperationsInput | string | null
    event_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_file_path?: NullableStringFieldUpdateOperationsInput | string | null
    partition_key?: IntFieldUpdateOperationsInput | number
  }

  export type nvr_cfgCreateInput = {
    id: string
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type nvr_cfgUncheckedCreateInput = {
    id: string
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type nvr_cfgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nvr_cfgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nvr_cfgCreateManyInput = {
    id: string
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type nvr_cfgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nvr_cfgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nvr_channel_cfgCreateInput = {
    id: string
    nvr_id?: string | null
    nvr_channel_index?: number | null
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type nvr_channel_cfgUncheckedCreateInput = {
    id: string
    nvr_id?: string | null
    nvr_channel_index?: number | null
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type nvr_channel_cfgUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nvr_id?: NullableStringFieldUpdateOperationsInput | string | null
    nvr_channel_index?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nvr_channel_cfgUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nvr_id?: NullableStringFieldUpdateOperationsInput | string | null
    nvr_channel_index?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nvr_channel_cfgCreateManyInput = {
    id: string
    nvr_id?: string | null
    nvr_channel_index?: number | null
    name?: string | null
    search_tag?: string | null
    cfg_data?: Buffer | null
    user_id_owner?: string | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type nvr_channel_cfgUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nvr_id?: NullableStringFieldUpdateOperationsInput | string | null
    nvr_channel_index?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type nvr_channel_cfgUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nvr_id?: NullableStringFieldUpdateOperationsInput | string | null
    nvr_channel_index?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    search_tag?: NullableStringFieldUpdateOperationsInput | string | null
    cfg_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    user_id_owner?: NullableStringFieldUpdateOperationsInput | string | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vehicle_infoCreateInput = {
    id: string
    lcms_server_id?: string | null
    license_plate?: string | null
    name?: string | null
    type?: number | null
    manufacturer?: number | null
    color?: number | null
    color_license_plate?: number | null
    images?: vehicle_infoCreateimagesInput | Buffer[]
    vehicle_payload?: number | null
    note?: string | null
    list_ids?: vehicle_infoCreatelist_idsInput | string[]
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
    card_code?: string | null
  }

  export type vehicle_infoUncheckedCreateInput = {
    id: string
    lcms_server_id?: string | null
    license_plate?: string | null
    name?: string | null
    type?: number | null
    manufacturer?: number | null
    color?: number | null
    color_license_plate?: number | null
    images?: vehicle_infoCreateimagesInput | Buffer[]
    vehicle_payload?: number | null
    note?: string | null
    list_ids?: vehicle_infoCreatelist_idsInput | string[]
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
    card_code?: string | null
  }

  export type vehicle_infoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    color_license_plate?: NullableIntFieldUpdateOperationsInput | number | null
    images?: vehicle_infoUpdateimagesInput | Buffer[]
    vehicle_payload?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: vehicle_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    card_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vehicle_infoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    color_license_plate?: NullableIntFieldUpdateOperationsInput | number | null
    images?: vehicle_infoUpdateimagesInput | Buffer[]
    vehicle_payload?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: vehicle_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    card_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vehicle_infoCreateManyInput = {
    id: string
    lcms_server_id?: string | null
    license_plate?: string | null
    name?: string | null
    type?: number | null
    manufacturer?: number | null
    color?: number | null
    color_license_plate?: number | null
    images?: vehicle_infoCreateimagesInput | Buffer[]
    vehicle_payload?: number | null
    note?: string | null
    list_ids?: vehicle_infoCreatelist_idsInput | string[]
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
    card_code?: string | null
  }

  export type vehicle_infoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    color_license_plate?: NullableIntFieldUpdateOperationsInput | number | null
    images?: vehicle_infoUpdateimagesInput | Buffer[]
    vehicle_payload?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: vehicle_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    card_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vehicle_infoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    license_plate?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    manufacturer?: NullableIntFieldUpdateOperationsInput | number | null
    color?: NullableIntFieldUpdateOperationsInput | number | null
    color_license_plate?: NullableIntFieldUpdateOperationsInput | number | null
    images?: vehicle_infoUpdateimagesInput | Buffer[]
    vehicle_payload?: NullableFloatFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    list_ids?: vehicle_infoUpdatelist_idsInput | string[]
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    card_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vehicle_listCreateInput = {
    id: string
    lcms_server_id?: string | null
    name?: string | null
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type vehicle_listUncheckedCreateInput = {
    id: string
    lcms_server_id?: string | null
    name?: string | null
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type vehicle_listUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vehicle_listUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vehicle_listCreateManyInput = {
    id: string
    lcms_server_id?: string | null
    name?: string | null
    is_deleted?: boolean | null
    time_created?: Date | string | null
    time_modified?: Date | string | null
  }

  export type vehicle_listUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type vehicle_listUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcms_server_id?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    time_created?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    time_modified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type version_controlCreateInput = {
    id?: string
    type?: number | null
    tablename?: string | null
    version?: number | null
    timeupdated?: Date | string | null
  }

  export type version_controlUncheckedCreateInput = {
    id?: string
    type?: number | null
    tablename?: string | null
    version?: number | null
    timeupdated?: Date | string | null
  }

  export type version_controlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timeupdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type version_controlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timeupdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type version_controlCreateManyInput = {
    id?: string
    type?: number | null
    tablename?: string | null
    version?: number | null
    timeupdated?: Date | string | null
  }

  export type version_controlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timeupdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type version_controlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableIntFieldUpdateOperationsInput | number | null
    tablename?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    timeupdated?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type camera_cfgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type camera_cfgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type camera_cfgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type camera_storage_totalPartition_pathCamera_idCompoundUniqueInput = {
    partition_path: string
    camera_id: string
  }

  export type camera_storage_totalCountOrderByAggregateInput = {
    partition_path?: SortOrder
    camera_id?: SortOrder
    use_disk_mb?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    total_dur?: SortOrder
    lost_dur?: SortOrder
  }

  export type camera_storage_totalAvgOrderByAggregateInput = {
    use_disk_mb?: SortOrder
    total_dur?: SortOrder
    lost_dur?: SortOrder
  }

  export type camera_storage_totalMaxOrderByAggregateInput = {
    partition_path?: SortOrder
    camera_id?: SortOrder
    use_disk_mb?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    total_dur?: SortOrder
    lost_dur?: SortOrder
  }

  export type camera_storage_totalMinOrderByAggregateInput = {
    partition_path?: SortOrder
    camera_id?: SortOrder
    use_disk_mb?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    total_dur?: SortOrder
    lost_dur?: SortOrder
  }

  export type camera_storage_totalSumOrderByAggregateInput = {
    use_disk_mb?: SortOrder
    total_dur?: SortOrder
    lost_dur?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type channel_cfgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    camera_mapping_id?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type channel_cfgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    camera_mapping_id?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type channel_cfgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    camera_mapping_id?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type device_owner_cfgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type device_owner_cfgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type device_owner_cfgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type event_vms_sync_parentIdPartition_keyCompoundUniqueInput = {
    id: string
    partition_key: number
  }

  export type event_vms_sync_parentCountOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    event_vms_id?: SortOrder
    source_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_parentAvgOrderByAggregateInput = {
    partition_key?: SortOrder
  }

  export type event_vms_sync_parentMaxOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    event_vms_id?: SortOrder
    source_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_parentMinOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    event_vms_id?: SortOrder
    source_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_parentSumOrderByAggregateInput = {
    partition_key?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type event_vms_sync_update_parentIndexPartition_keyCompoundUniqueInput = {
    index: bigint | number
    partition_key: number
  }

  export type event_vms_sync_update_parentCountOrderByAggregateInput = {
    index?: SortOrder
    update_table_type?: SortOrder
    lcms_server_id?: SortOrder
    event_id?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_update_parentAvgOrderByAggregateInput = {
    index?: SortOrder
    update_table_type?: SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_update_parentMaxOrderByAggregateInput = {
    index?: SortOrder
    update_table_type?: SortOrder
    lcms_server_id?: SortOrder
    event_id?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_update_parentMinOrderByAggregateInput = {
    index?: SortOrder
    update_table_type?: SortOrder
    lcms_server_id?: SortOrder
    event_id?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type event_vms_sync_update_parentSumOrderByAggregateInput = {
    index?: SortOrder
    update_table_type?: SortOrder
    partition_key?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type face_index_sync_parentIdPartition_keyCompoundUniqueInput = {
    id: string
    partition_key: number
  }

  export type face_index_sync_parentCountOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    face_index_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type face_index_sync_parentAvgOrderByAggregateInput = {
    partition_key?: SortOrder
  }

  export type face_index_sync_parentMaxOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    face_index_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type face_index_sync_parentMinOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    face_index_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type face_index_sync_parentSumOrderByAggregateInput = {
    partition_key?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type BytesNullableListFilter<$PrismaModel = never> = {
    equals?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    has?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    hasEvery?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    hasSome?: Buffer[] | ListBytesFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type human_infoCountOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    document_id?: SortOrder
    id_type?: SortOrder
    release_date?: SortOrder
    issued_by?: SortOrder
    full_name?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    note?: SortOrder
    company?: SortOrder
    list_ids?: SortOrder
    is_deleted?: SortOrder
    avatars?: SortOrder
    id_scan_images?: SortOrder
    other_images?: SortOrder
    root_face_images?: SortOrder
    cropped_face_images?: SortOrder
    face_features?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    certificates_json_text?: SortOrder
  }

  export type human_infoAvgOrderByAggregateInput = {
    gender?: SortOrder
    face_features?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type human_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    document_id?: SortOrder
    id_type?: SortOrder
    release_date?: SortOrder
    issued_by?: SortOrder
    full_name?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    note?: SortOrder
    company?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    certificates_json_text?: SortOrder
  }

  export type human_infoMinOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    document_id?: SortOrder
    id_type?: SortOrder
    release_date?: SortOrder
    issued_by?: SortOrder
    full_name?: SortOrder
    gender?: SortOrder
    birthday?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    address?: SortOrder
    note?: SortOrder
    company?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    certificates_json_text?: SortOrder
  }

  export type human_infoSumOrderByAggregateInput = {
    gender?: SortOrder
    face_features?: SortOrder
    height?: SortOrder
    weight?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type human_listCountOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    name?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type human_listMaxOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    name?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type human_listMinOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    name?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type monitoring_slot_summary_sync_parentIdPartition_keyCompoundUniqueInput = {
    id: string
    partition_key: number
  }

  export type monitoring_slot_summary_sync_parentCountOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    slot_summary_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type monitoring_slot_summary_sync_parentAvgOrderByAggregateInput = {
    partition_key?: SortOrder
  }

  export type monitoring_slot_summary_sync_parentMaxOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    slot_summary_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type monitoring_slot_summary_sync_parentMinOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    slot_summary_id?: SortOrder
    event_time?: SortOrder
    data_file_path?: SortOrder
    partition_key?: SortOrder
  }

  export type monitoring_slot_summary_sync_parentSumOrderByAggregateInput = {
    partition_key?: SortOrder
  }

  export type nvr_cfgCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type nvr_cfgMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type nvr_cfgMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type nvr_channel_cfgCountOrderByAggregateInput = {
    id?: SortOrder
    nvr_id?: SortOrder
    nvr_channel_index?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type nvr_channel_cfgAvgOrderByAggregateInput = {
    nvr_channel_index?: SortOrder
  }

  export type nvr_channel_cfgMaxOrderByAggregateInput = {
    id?: SortOrder
    nvr_id?: SortOrder
    nvr_channel_index?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type nvr_channel_cfgMinOrderByAggregateInput = {
    id?: SortOrder
    nvr_id?: SortOrder
    nvr_channel_index?: SortOrder
    name?: SortOrder
    search_tag?: SortOrder
    cfg_data?: SortOrder
    user_id_owner?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type nvr_channel_cfgSumOrderByAggregateInput = {
    nvr_channel_index?: SortOrder
  }

  export type vehicle_infoCountOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    license_plate?: SortOrder
    name?: SortOrder
    type?: SortOrder
    manufacturer?: SortOrder
    color?: SortOrder
    color_license_plate?: SortOrder
    images?: SortOrder
    vehicle_payload?: SortOrder
    note?: SortOrder
    list_ids?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    card_code?: SortOrder
  }

  export type vehicle_infoAvgOrderByAggregateInput = {
    type?: SortOrder
    manufacturer?: SortOrder
    color?: SortOrder
    color_license_plate?: SortOrder
    vehicle_payload?: SortOrder
  }

  export type vehicle_infoMaxOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    license_plate?: SortOrder
    name?: SortOrder
    type?: SortOrder
    manufacturer?: SortOrder
    color?: SortOrder
    color_license_plate?: SortOrder
    vehicle_payload?: SortOrder
    note?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    card_code?: SortOrder
  }

  export type vehicle_infoMinOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    license_plate?: SortOrder
    name?: SortOrder
    type?: SortOrder
    manufacturer?: SortOrder
    color?: SortOrder
    color_license_plate?: SortOrder
    vehicle_payload?: SortOrder
    note?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    card_code?: SortOrder
  }

  export type vehicle_infoSumOrderByAggregateInput = {
    type?: SortOrder
    manufacturer?: SortOrder
    color?: SortOrder
    color_license_plate?: SortOrder
    vehicle_payload?: SortOrder
  }

  export type vehicle_listCountOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    name?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type vehicle_listMaxOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    name?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type vehicle_listMinOrderByAggregateInput = {
    id?: SortOrder
    lcms_server_id?: SortOrder
    name?: SortOrder
    is_deleted?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type version_controlCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tablename?: SortOrder
    version?: SortOrder
    timeupdated?: SortOrder
  }

  export type version_controlAvgOrderByAggregateInput = {
    type?: SortOrder
    version?: SortOrder
  }

  export type version_controlMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tablename?: SortOrder
    version?: SortOrder
    timeupdated?: SortOrder
  }

  export type version_controlMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    tablename?: SortOrder
    version?: SortOrder
    timeupdated?: SortOrder
  }

  export type version_controlSumOrderByAggregateInput = {
    type?: SortOrder
    version?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type human_infoCreatelist_idsInput = {
    set: string[]
  }

  export type human_infoCreateavatarsInput = {
    set: Buffer[]
  }

  export type human_infoCreateid_scan_imagesInput = {
    set: Buffer[]
  }

  export type human_infoCreateother_imagesInput = {
    set: Buffer[]
  }

  export type human_infoCreateroot_face_imagesInput = {
    set: Buffer[]
  }

  export type human_infoCreatecropped_face_imagesInput = {
    set: Buffer[]
  }

  export type human_infoCreateface_featuresInput = {
    set: number[]
  }

  export type human_infoUpdatelist_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type human_infoUpdateavatarsInput = {
    set?: Buffer[]
    push?: Buffer | Buffer[]
  }

  export type human_infoUpdateid_scan_imagesInput = {
    set?: Buffer[]
    push?: Buffer | Buffer[]
  }

  export type human_infoUpdateother_imagesInput = {
    set?: Buffer[]
    push?: Buffer | Buffer[]
  }

  export type human_infoUpdateroot_face_imagesInput = {
    set?: Buffer[]
    push?: Buffer | Buffer[]
  }

  export type human_infoUpdatecropped_face_imagesInput = {
    set?: Buffer[]
    push?: Buffer | Buffer[]
  }

  export type human_infoUpdateface_featuresInput = {
    set?: number[]
    push?: number | number[]
  }

  export type vehicle_infoCreateimagesInput = {
    set: Buffer[]
  }

  export type vehicle_infoCreatelist_idsInput = {
    set: string[]
  }

  export type vehicle_infoUpdateimagesInput = {
    set?: Buffer[]
    push?: Buffer | Buffer[]
  }

  export type vehicle_infoUpdatelist_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use camera_cfgDefaultArgs instead
     */
    export type camera_cfgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = camera_cfgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use camera_storage_totalDefaultArgs instead
     */
    export type camera_storage_totalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = camera_storage_totalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use channel_cfgDefaultArgs instead
     */
    export type channel_cfgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = channel_cfgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use device_owner_cfgDefaultArgs instead
     */
    export type device_owner_cfgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = device_owner_cfgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use event_vms_sync_parentDefaultArgs instead
     */
    export type event_vms_sync_parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = event_vms_sync_parentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use event_vms_sync_update_parentDefaultArgs instead
     */
    export type event_vms_sync_update_parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = event_vms_sync_update_parentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use face_index_sync_parentDefaultArgs instead
     */
    export type face_index_sync_parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = face_index_sync_parentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use human_infoDefaultArgs instead
     */
    export type human_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = human_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use human_listDefaultArgs instead
     */
    export type human_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = human_listDefaultArgs<ExtArgs>
    /**
     * @deprecated Use monitoring_slot_summary_sync_parentDefaultArgs instead
     */
    export type monitoring_slot_summary_sync_parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = monitoring_slot_summary_sync_parentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use nvr_cfgDefaultArgs instead
     */
    export type nvr_cfgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = nvr_cfgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use nvr_channel_cfgDefaultArgs instead
     */
    export type nvr_channel_cfgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = nvr_channel_cfgDefaultArgs<ExtArgs>
    /**
     * @deprecated Use vehicle_infoDefaultArgs instead
     */
    export type vehicle_infoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = vehicle_infoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use vehicle_listDefaultArgs instead
     */
    export type vehicle_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = vehicle_listDefaultArgs<ExtArgs>
    /**
     * @deprecated Use version_controlDefaultArgs instead
     */
    export type version_controlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = version_controlDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}