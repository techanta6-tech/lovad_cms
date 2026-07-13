
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
 * Model location
 * 
 */
export type location = $Result.DefaultSelection<Prisma.$locationPayload>
/**
 * Model location_camera_bind
 * 
 */
export type location_camera_bind = $Result.DefaultSelection<Prisma.$location_camera_bindPayload>
/**
 * Model meeting
 * 
 */
export type meeting = $Result.DefaultSelection<Prisma.$meetingPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Locations
 * const locations = await prisma.location.findMany()
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
   * // Fetch zero or more Locations
   * const locations = await prisma.location.findMany()
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
   * `prisma.location`: Exposes CRUD operations for the **location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.locationDelegate<ExtArgs>;

  /**
   * `prisma.location_camera_bind`: Exposes CRUD operations for the **location_camera_bind** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Location_camera_binds
    * const location_camera_binds = await prisma.location_camera_bind.findMany()
    * ```
    */
  get location_camera_bind(): Prisma.location_camera_bindDelegate<ExtArgs>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.meetingDelegate<ExtArgs>;
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
    location: 'location',
    location_camera_bind: 'location_camera_bind',
    meeting: 'meeting'
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
      modelProps: "location" | "location_camera_bind" | "meeting"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      location: {
        payload: Prisma.$locationPayload<ExtArgs>
        fields: Prisma.locationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findFirst: {
            args: Prisma.locationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          findMany: {
            args: Prisma.locationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>[]
          }
          create: {
            args: Prisma.locationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          createMany: {
            args: Prisma.locationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.locationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>[]
          }
          delete: {
            args: Prisma.locationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          update: {
            args: Prisma.locationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          deleteMany: {
            args: Prisma.locationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.locationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.locationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.locationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      location_camera_bind: {
        payload: Prisma.$location_camera_bindPayload<ExtArgs>
        fields: Prisma.location_camera_bindFieldRefs
        operations: {
          findUnique: {
            args: Prisma.location_camera_bindFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.location_camera_bindFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>
          }
          findFirst: {
            args: Prisma.location_camera_bindFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.location_camera_bindFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>
          }
          findMany: {
            args: Prisma.location_camera_bindFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>[]
          }
          create: {
            args: Prisma.location_camera_bindCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>
          }
          createMany: {
            args: Prisma.location_camera_bindCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.location_camera_bindCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>[]
          }
          delete: {
            args: Prisma.location_camera_bindDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>
          }
          update: {
            args: Prisma.location_camera_bindUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>
          }
          deleteMany: {
            args: Prisma.location_camera_bindDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.location_camera_bindUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.location_camera_bindUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$location_camera_bindPayload>
          }
          aggregate: {
            args: Prisma.Location_camera_bindAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation_camera_bind>
          }
          groupBy: {
            args: Prisma.location_camera_bindGroupByArgs<ExtArgs>
            result: $Utils.Optional<Location_camera_bindGroupByOutputType>[]
          }
          count: {
            args: Prisma.location_camera_bindCountArgs<ExtArgs>
            result: $Utils.Optional<Location_camera_bindCountAggregateOutputType> | number
          }
        }
      }
      meeting: {
        payload: Prisma.$meetingPayload<ExtArgs>
        fields: Prisma.meetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.meetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.meetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          findFirst: {
            args: Prisma.meetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.meetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          findMany: {
            args: Prisma.meetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>[]
          }
          create: {
            args: Prisma.meetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          createMany: {
            args: Prisma.meetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.meetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>[]
          }
          delete: {
            args: Prisma.meetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          update: {
            args: Prisma.meetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          deleteMany: {
            args: Prisma.meetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.meetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.meetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$meetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.meetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.meetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
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
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    camera_binds: number
    meetings: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    camera_binds?: boolean | LocationCountOutputTypeCountCamera_bindsArgs
    meetings?: boolean | LocationCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountCamera_bindsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: location_camera_bindWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    code: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    time_created?: true
    time_modified?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    time_created?: true
    time_modified?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which location to aggregate.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type locationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationWhereInput
    orderBy?: locationOrderByWithAggregationInput | locationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: locationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    code: string
    time_created: Date
    time_modified: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends locationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type locationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    time_created?: boolean
    time_modified?: boolean
    camera_binds?: boolean | location$camera_bindsArgs<ExtArgs>
    meetings?: boolean | location$meetingsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type locationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    time_created?: boolean
    time_modified?: boolean
  }, ExtArgs["result"]["location"]>

  export type locationSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    time_created?: boolean
    time_modified?: boolean
  }

  export type locationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    camera_binds?: boolean | location$camera_bindsArgs<ExtArgs>
    meetings?: boolean | location$meetingsArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type locationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $locationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "location"
    objects: {
      camera_binds: Prisma.$location_camera_bindPayload<ExtArgs>[]
      meetings: Prisma.$meetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      time_created: Date
      time_modified: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type locationGetPayload<S extends boolean | null | undefined | locationDefaultArgs> = $Result.GetResult<Prisma.$locationPayload, S>

  type locationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<locationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface locationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['location'], meta: { name: 'location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {locationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends locationFindUniqueArgs>(args: SelectSubset<T, locationFindUniqueArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {locationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends locationFindUniqueOrThrowArgs>(args: SelectSubset<T, locationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends locationFindFirstArgs>(args?: SelectSubset<T, locationFindFirstArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends locationFindFirstOrThrowArgs>(args?: SelectSubset<T, locationFindFirstOrThrowArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends locationFindManyArgs>(args?: SelectSubset<T, locationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Location.
     * @param {locationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends locationCreateArgs>(args: SelectSubset<T, locationCreateArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Locations.
     * @param {locationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends locationCreateManyArgs>(args?: SelectSubset<T, locationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {locationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends locationCreateManyAndReturnArgs>(args?: SelectSubset<T, locationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Location.
     * @param {locationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends locationDeleteArgs>(args: SelectSubset<T, locationDeleteArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Location.
     * @param {locationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends locationUpdateArgs>(args: SelectSubset<T, locationUpdateArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Locations.
     * @param {locationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends locationDeleteManyArgs>(args?: SelectSubset<T, locationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends locationUpdateManyArgs>(args: SelectSubset<T, locationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location.
     * @param {locationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends locationUpsertArgs>(args: SelectSubset<T, locationUpsertArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationCountArgs>(
      args?: Subset<T, locationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationGroupByArgs} args - Group by arguments.
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
      T extends locationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationGroupByArgs['orderBy'] }
        : { orderBy?: locationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, locationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the location model
   */
  readonly fields: locationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    camera_binds<T extends location$camera_bindsArgs<ExtArgs> = {}>(args?: Subset<T, location$camera_bindsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "findMany"> | Null>
    meetings<T extends location$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, location$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the location model
   */ 
  interface locationFieldRefs {
    readonly id: FieldRef<"location", 'String'>
    readonly name: FieldRef<"location", 'String'>
    readonly code: FieldRef<"location", 'String'>
    readonly time_created: FieldRef<"location", 'DateTime'>
    readonly time_modified: FieldRef<"location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * location findUnique
   */
  export type locationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location findUniqueOrThrow
   */
  export type locationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location findFirst
   */
  export type locationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location findFirstOrThrow
   */
  export type locationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which location to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location findMany
   */
  export type locationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationOrderByWithRelationInput | locationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     */
    cursor?: locationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * location create
   */
  export type locationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to create a location.
     */
    data: XOR<locationCreateInput, locationUncheckedCreateInput>
  }

  /**
   * location createMany
   */
  export type locationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationCreateManyInput | locationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * location createManyAndReturn
   */
  export type locationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many locations.
     */
    data: locationCreateManyInput | locationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * location update
   */
  export type locationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The data needed to update a location.
     */
    data: XOR<locationUpdateInput, locationUncheckedUpdateInput>
    /**
     * Choose, which location to update.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location updateMany
   */
  export type locationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationUpdateManyMutationInput, locationUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationWhereInput
  }

  /**
   * location upsert
   */
  export type locationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * The filter to search for the location to update in case it exists.
     */
    where: locationWhereUniqueInput
    /**
     * In case the location found by the `where` argument doesn't exist, create a new location with this data.
     */
    create: XOR<locationCreateInput, locationUncheckedCreateInput>
    /**
     * In case the location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationUpdateInput, locationUncheckedUpdateInput>
  }

  /**
   * location delete
   */
  export type locationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
    /**
     * Filter which location to delete.
     */
    where: locationWhereUniqueInput
  }

  /**
   * location deleteMany
   */
  export type locationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationWhereInput
  }

  /**
   * location.camera_binds
   */
  export type location$camera_bindsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    where?: location_camera_bindWhereInput
    orderBy?: location_camera_bindOrderByWithRelationInput | location_camera_bindOrderByWithRelationInput[]
    cursor?: location_camera_bindWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Location_camera_bindScalarFieldEnum | Location_camera_bindScalarFieldEnum[]
  }

  /**
   * location.meetings
   */
  export type location$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    where?: meetingWhereInput
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    cursor?: meetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * location without action
   */
  export type locationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location
     */
    select?: locationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationInclude<ExtArgs> | null
  }


  /**
   * Model location_camera_bind
   */

  export type AggregateLocation_camera_bind = {
    _count: Location_camera_bindCountAggregateOutputType | null
    _min: Location_camera_bindMinAggregateOutputType | null
    _max: Location_camera_bindMaxAggregateOutputType | null
  }

  export type Location_camera_bindMinAggregateOutputType = {
    id: string | null
    location_id: string | null
    camera_id: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Location_camera_bindMaxAggregateOutputType = {
    id: string | null
    location_id: string | null
    camera_id: string | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type Location_camera_bindCountAggregateOutputType = {
    id: number
    location_id: number
    camera_id: number
    role: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type Location_camera_bindMinAggregateInputType = {
    id?: true
    location_id?: true
    camera_id?: true
    time_created?: true
    time_modified?: true
  }

  export type Location_camera_bindMaxAggregateInputType = {
    id?: true
    location_id?: true
    camera_id?: true
    time_created?: true
    time_modified?: true
  }

  export type Location_camera_bindCountAggregateInputType = {
    id?: true
    location_id?: true
    camera_id?: true
    role?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type Location_camera_bindAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which location_camera_bind to aggregate.
     */
    where?: location_camera_bindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of location_camera_binds to fetch.
     */
    orderBy?: location_camera_bindOrderByWithRelationInput | location_camera_bindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: location_camera_bindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` location_camera_binds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` location_camera_binds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned location_camera_binds
    **/
    _count?: true | Location_camera_bindCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Location_camera_bindMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Location_camera_bindMaxAggregateInputType
  }

  export type GetLocation_camera_bindAggregateType<T extends Location_camera_bindAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation_camera_bind]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation_camera_bind[P]>
      : GetScalarType<T[P], AggregateLocation_camera_bind[P]>
  }




  export type location_camera_bindGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: location_camera_bindWhereInput
    orderBy?: location_camera_bindOrderByWithAggregationInput | location_camera_bindOrderByWithAggregationInput[]
    by: Location_camera_bindScalarFieldEnum[] | Location_camera_bindScalarFieldEnum
    having?: location_camera_bindScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Location_camera_bindCountAggregateInputType | true
    _min?: Location_camera_bindMinAggregateInputType
    _max?: Location_camera_bindMaxAggregateInputType
  }

  export type Location_camera_bindGroupByOutputType = {
    id: string
    location_id: string
    camera_id: string
    role: string[]
    time_created: Date
    time_modified: Date
    _count: Location_camera_bindCountAggregateOutputType | null
    _min: Location_camera_bindMinAggregateOutputType | null
    _max: Location_camera_bindMaxAggregateOutputType | null
  }

  type GetLocation_camera_bindGroupByPayload<T extends location_camera_bindGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Location_camera_bindGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Location_camera_bindGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Location_camera_bindGroupByOutputType[P]>
            : GetScalarType<T[P], Location_camera_bindGroupByOutputType[P]>
        }
      >
    >


  export type location_camera_bindSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location_id?: boolean
    camera_id?: boolean
    role?: boolean
    time_created?: boolean
    time_modified?: boolean
    location?: boolean | locationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location_camera_bind"]>

  export type location_camera_bindSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location_id?: boolean
    camera_id?: boolean
    role?: boolean
    time_created?: boolean
    time_modified?: boolean
    location?: boolean | locationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location_camera_bind"]>

  export type location_camera_bindSelectScalar = {
    id?: boolean
    location_id?: boolean
    camera_id?: boolean
    role?: boolean
    time_created?: boolean
    time_modified?: boolean
  }

  export type location_camera_bindInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | locationDefaultArgs<ExtArgs>
  }
  export type location_camera_bindIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | locationDefaultArgs<ExtArgs>
  }

  export type $location_camera_bindPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "location_camera_bind"
    objects: {
      location: Prisma.$locationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location_id: string
      camera_id: string
      role: string[]
      time_created: Date
      time_modified: Date
    }, ExtArgs["result"]["location_camera_bind"]>
    composites: {}
  }

  type location_camera_bindGetPayload<S extends boolean | null | undefined | location_camera_bindDefaultArgs> = $Result.GetResult<Prisma.$location_camera_bindPayload, S>

  type location_camera_bindCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<location_camera_bindFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Location_camera_bindCountAggregateInputType | true
    }

  export interface location_camera_bindDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['location_camera_bind'], meta: { name: 'location_camera_bind' } }
    /**
     * Find zero or one Location_camera_bind that matches the filter.
     * @param {location_camera_bindFindUniqueArgs} args - Arguments to find a Location_camera_bind
     * @example
     * // Get one Location_camera_bind
     * const location_camera_bind = await prisma.location_camera_bind.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends location_camera_bindFindUniqueArgs>(args: SelectSubset<T, location_camera_bindFindUniqueArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Location_camera_bind that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {location_camera_bindFindUniqueOrThrowArgs} args - Arguments to find a Location_camera_bind
     * @example
     * // Get one Location_camera_bind
     * const location_camera_bind = await prisma.location_camera_bind.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends location_camera_bindFindUniqueOrThrowArgs>(args: SelectSubset<T, location_camera_bindFindUniqueOrThrowArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Location_camera_bind that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {location_camera_bindFindFirstArgs} args - Arguments to find a Location_camera_bind
     * @example
     * // Get one Location_camera_bind
     * const location_camera_bind = await prisma.location_camera_bind.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends location_camera_bindFindFirstArgs>(args?: SelectSubset<T, location_camera_bindFindFirstArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Location_camera_bind that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {location_camera_bindFindFirstOrThrowArgs} args - Arguments to find a Location_camera_bind
     * @example
     * // Get one Location_camera_bind
     * const location_camera_bind = await prisma.location_camera_bind.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends location_camera_bindFindFirstOrThrowArgs>(args?: SelectSubset<T, location_camera_bindFindFirstOrThrowArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Location_camera_binds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {location_camera_bindFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Location_camera_binds
     * const location_camera_binds = await prisma.location_camera_bind.findMany()
     * 
     * // Get first 10 Location_camera_binds
     * const location_camera_binds = await prisma.location_camera_bind.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const location_camera_bindWithIdOnly = await prisma.location_camera_bind.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends location_camera_bindFindManyArgs>(args?: SelectSubset<T, location_camera_bindFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Location_camera_bind.
     * @param {location_camera_bindCreateArgs} args - Arguments to create a Location_camera_bind.
     * @example
     * // Create one Location_camera_bind
     * const Location_camera_bind = await prisma.location_camera_bind.create({
     *   data: {
     *     // ... data to create a Location_camera_bind
     *   }
     * })
     * 
     */
    create<T extends location_camera_bindCreateArgs>(args: SelectSubset<T, location_camera_bindCreateArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Location_camera_binds.
     * @param {location_camera_bindCreateManyArgs} args - Arguments to create many Location_camera_binds.
     * @example
     * // Create many Location_camera_binds
     * const location_camera_bind = await prisma.location_camera_bind.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends location_camera_bindCreateManyArgs>(args?: SelectSubset<T, location_camera_bindCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Location_camera_binds and returns the data saved in the database.
     * @param {location_camera_bindCreateManyAndReturnArgs} args - Arguments to create many Location_camera_binds.
     * @example
     * // Create many Location_camera_binds
     * const location_camera_bind = await prisma.location_camera_bind.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Location_camera_binds and only return the `id`
     * const location_camera_bindWithIdOnly = await prisma.location_camera_bind.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends location_camera_bindCreateManyAndReturnArgs>(args?: SelectSubset<T, location_camera_bindCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Location_camera_bind.
     * @param {location_camera_bindDeleteArgs} args - Arguments to delete one Location_camera_bind.
     * @example
     * // Delete one Location_camera_bind
     * const Location_camera_bind = await prisma.location_camera_bind.delete({
     *   where: {
     *     // ... filter to delete one Location_camera_bind
     *   }
     * })
     * 
     */
    delete<T extends location_camera_bindDeleteArgs>(args: SelectSubset<T, location_camera_bindDeleteArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Location_camera_bind.
     * @param {location_camera_bindUpdateArgs} args - Arguments to update one Location_camera_bind.
     * @example
     * // Update one Location_camera_bind
     * const location_camera_bind = await prisma.location_camera_bind.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends location_camera_bindUpdateArgs>(args: SelectSubset<T, location_camera_bindUpdateArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Location_camera_binds.
     * @param {location_camera_bindDeleteManyArgs} args - Arguments to filter Location_camera_binds to delete.
     * @example
     * // Delete a few Location_camera_binds
     * const { count } = await prisma.location_camera_bind.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends location_camera_bindDeleteManyArgs>(args?: SelectSubset<T, location_camera_bindDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Location_camera_binds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {location_camera_bindUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Location_camera_binds
     * const location_camera_bind = await prisma.location_camera_bind.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends location_camera_bindUpdateManyArgs>(args: SelectSubset<T, location_camera_bindUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Location_camera_bind.
     * @param {location_camera_bindUpsertArgs} args - Arguments to update or create a Location_camera_bind.
     * @example
     * // Update or create a Location_camera_bind
     * const location_camera_bind = await prisma.location_camera_bind.upsert({
     *   create: {
     *     // ... data to create a Location_camera_bind
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location_camera_bind we want to update
     *   }
     * })
     */
    upsert<T extends location_camera_bindUpsertArgs>(args: SelectSubset<T, location_camera_bindUpsertArgs<ExtArgs>>): Prisma__location_camera_bindClient<$Result.GetResult<Prisma.$location_camera_bindPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Location_camera_binds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {location_camera_bindCountArgs} args - Arguments to filter Location_camera_binds to count.
     * @example
     * // Count the number of Location_camera_binds
     * const count = await prisma.location_camera_bind.count({
     *   where: {
     *     // ... the filter for the Location_camera_binds we want to count
     *   }
     * })
    **/
    count<T extends location_camera_bindCountArgs>(
      args?: Subset<T, location_camera_bindCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Location_camera_bindCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location_camera_bind.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Location_camera_bindAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Location_camera_bindAggregateArgs>(args: Subset<T, Location_camera_bindAggregateArgs>): Prisma.PrismaPromise<GetLocation_camera_bindAggregateType<T>>

    /**
     * Group by Location_camera_bind.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {location_camera_bindGroupByArgs} args - Group by arguments.
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
      T extends location_camera_bindGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: location_camera_bindGroupByArgs['orderBy'] }
        : { orderBy?: location_camera_bindGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, location_camera_bindGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocation_camera_bindGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the location_camera_bind model
   */
  readonly fields: location_camera_bindFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for location_camera_bind.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__location_camera_bindClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends locationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, locationDefaultArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the location_camera_bind model
   */ 
  interface location_camera_bindFieldRefs {
    readonly id: FieldRef<"location_camera_bind", 'String'>
    readonly location_id: FieldRef<"location_camera_bind", 'String'>
    readonly camera_id: FieldRef<"location_camera_bind", 'String'>
    readonly role: FieldRef<"location_camera_bind", 'String[]'>
    readonly time_created: FieldRef<"location_camera_bind", 'DateTime'>
    readonly time_modified: FieldRef<"location_camera_bind", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * location_camera_bind findUnique
   */
  export type location_camera_bindFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * Filter, which location_camera_bind to fetch.
     */
    where: location_camera_bindWhereUniqueInput
  }

  /**
   * location_camera_bind findUniqueOrThrow
   */
  export type location_camera_bindFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * Filter, which location_camera_bind to fetch.
     */
    where: location_camera_bindWhereUniqueInput
  }

  /**
   * location_camera_bind findFirst
   */
  export type location_camera_bindFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * Filter, which location_camera_bind to fetch.
     */
    where?: location_camera_bindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of location_camera_binds to fetch.
     */
    orderBy?: location_camera_bindOrderByWithRelationInput | location_camera_bindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for location_camera_binds.
     */
    cursor?: location_camera_bindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` location_camera_binds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` location_camera_binds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of location_camera_binds.
     */
    distinct?: Location_camera_bindScalarFieldEnum | Location_camera_bindScalarFieldEnum[]
  }

  /**
   * location_camera_bind findFirstOrThrow
   */
  export type location_camera_bindFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * Filter, which location_camera_bind to fetch.
     */
    where?: location_camera_bindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of location_camera_binds to fetch.
     */
    orderBy?: location_camera_bindOrderByWithRelationInput | location_camera_bindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for location_camera_binds.
     */
    cursor?: location_camera_bindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` location_camera_binds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` location_camera_binds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of location_camera_binds.
     */
    distinct?: Location_camera_bindScalarFieldEnum | Location_camera_bindScalarFieldEnum[]
  }

  /**
   * location_camera_bind findMany
   */
  export type location_camera_bindFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * Filter, which location_camera_binds to fetch.
     */
    where?: location_camera_bindWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of location_camera_binds to fetch.
     */
    orderBy?: location_camera_bindOrderByWithRelationInput | location_camera_bindOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing location_camera_binds.
     */
    cursor?: location_camera_bindWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` location_camera_binds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` location_camera_binds.
     */
    skip?: number
    distinct?: Location_camera_bindScalarFieldEnum | Location_camera_bindScalarFieldEnum[]
  }

  /**
   * location_camera_bind create
   */
  export type location_camera_bindCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * The data needed to create a location_camera_bind.
     */
    data: XOR<location_camera_bindCreateInput, location_camera_bindUncheckedCreateInput>
  }

  /**
   * location_camera_bind createMany
   */
  export type location_camera_bindCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many location_camera_binds.
     */
    data: location_camera_bindCreateManyInput | location_camera_bindCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * location_camera_bind createManyAndReturn
   */
  export type location_camera_bindCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many location_camera_binds.
     */
    data: location_camera_bindCreateManyInput | location_camera_bindCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * location_camera_bind update
   */
  export type location_camera_bindUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * The data needed to update a location_camera_bind.
     */
    data: XOR<location_camera_bindUpdateInput, location_camera_bindUncheckedUpdateInput>
    /**
     * Choose, which location_camera_bind to update.
     */
    where: location_camera_bindWhereUniqueInput
  }

  /**
   * location_camera_bind updateMany
   */
  export type location_camera_bindUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update location_camera_binds.
     */
    data: XOR<location_camera_bindUpdateManyMutationInput, location_camera_bindUncheckedUpdateManyInput>
    /**
     * Filter which location_camera_binds to update
     */
    where?: location_camera_bindWhereInput
  }

  /**
   * location_camera_bind upsert
   */
  export type location_camera_bindUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * The filter to search for the location_camera_bind to update in case it exists.
     */
    where: location_camera_bindWhereUniqueInput
    /**
     * In case the location_camera_bind found by the `where` argument doesn't exist, create a new location_camera_bind with this data.
     */
    create: XOR<location_camera_bindCreateInput, location_camera_bindUncheckedCreateInput>
    /**
     * In case the location_camera_bind was found with the provided `where` argument, update it with this data.
     */
    update: XOR<location_camera_bindUpdateInput, location_camera_bindUncheckedUpdateInput>
  }

  /**
   * location_camera_bind delete
   */
  export type location_camera_bindDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
    /**
     * Filter which location_camera_bind to delete.
     */
    where: location_camera_bindWhereUniqueInput
  }

  /**
   * location_camera_bind deleteMany
   */
  export type location_camera_bindDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which location_camera_binds to delete
     */
    where?: location_camera_bindWhereInput
  }

  /**
   * location_camera_bind without action
   */
  export type location_camera_bindDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the location_camera_bind
     */
    select?: location_camera_bindSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: location_camera_bindInclude<ExtArgs> | null
  }


  /**
   * Model meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingAvgAggregateOutputType = {
    time_before_begin: number | null
    time_after_end: number | null
  }

  export type MeetingSumAggregateOutputType = {
    time_before_begin: number | null
    time_after_end: number | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    title: string | null
    location_id: string | null
    time_start: string | null
    time_end: string | null
    date_organize: Date | null
    time_before_begin: number | null
    time_after_end: number | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    location_id: string | null
    time_start: string | null
    time_end: string | null
    date_organize: Date | null
    time_before_begin: number | null
    time_after_end: number | null
    time_created: Date | null
    time_modified: Date | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    title: number
    location_id: number
    group_ids: number
    time_start: number
    time_end: number
    date_organize: number
    time_before_begin: number
    time_after_end: number
    time_created: number
    time_modified: number
    _all: number
  }


  export type MeetingAvgAggregateInputType = {
    time_before_begin?: true
    time_after_end?: true
  }

  export type MeetingSumAggregateInputType = {
    time_before_begin?: true
    time_after_end?: true
  }

  export type MeetingMinAggregateInputType = {
    id?: true
    title?: true
    location_id?: true
    time_start?: true
    time_end?: true
    date_organize?: true
    time_before_begin?: true
    time_after_end?: true
    time_created?: true
    time_modified?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    title?: true
    location_id?: true
    time_start?: true
    time_end?: true
    date_organize?: true
    time_before_begin?: true
    time_after_end?: true
    time_created?: true
    time_modified?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    title?: true
    location_id?: true
    group_ids?: true
    time_start?: true
    time_end?: true
    date_organize?: true
    time_before_begin?: true
    time_after_end?: true
    time_created?: true
    time_modified?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meeting to aggregate.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type meetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: meetingWhereInput
    orderBy?: meetingOrderByWithAggregationInput | meetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: meetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _avg?: MeetingAvgAggregateInputType
    _sum?: MeetingSumAggregateInputType
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    title: string
    location_id: string
    group_ids: string[]
    time_start: string
    time_end: string
    date_organize: Date
    time_before_begin: number
    time_after_end: number
    time_created: Date
    time_modified: Date
    _count: MeetingCountAggregateOutputType | null
    _avg: MeetingAvgAggregateOutputType | null
    _sum: MeetingSumAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends meetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type meetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location_id?: boolean
    group_ids?: boolean
    time_start?: boolean
    time_end?: boolean
    date_organize?: boolean
    time_before_begin?: boolean
    time_after_end?: boolean
    time_created?: boolean
    time_modified?: boolean
    location?: boolean | locationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type meetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    location_id?: boolean
    group_ids?: boolean
    time_start?: boolean
    time_end?: boolean
    date_organize?: boolean
    time_before_begin?: boolean
    time_after_end?: boolean
    time_created?: boolean
    time_modified?: boolean
    location?: boolean | locationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type meetingSelectScalar = {
    id?: boolean
    title?: boolean
    location_id?: boolean
    group_ids?: boolean
    time_start?: boolean
    time_end?: boolean
    date_organize?: boolean
    time_before_begin?: boolean
    time_after_end?: boolean
    time_created?: boolean
    time_modified?: boolean
  }

  export type meetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | locationDefaultArgs<ExtArgs>
  }
  export type meetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | locationDefaultArgs<ExtArgs>
  }

  export type $meetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "meeting"
    objects: {
      location: Prisma.$locationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      location_id: string
      group_ids: string[]
      time_start: string
      time_end: string
      date_organize: Date
      time_before_begin: number
      time_after_end: number
      time_created: Date
      time_modified: Date
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type meetingGetPayload<S extends boolean | null | undefined | meetingDefaultArgs> = $Result.GetResult<Prisma.$meetingPayload, S>

  type meetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<meetingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface meetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['meeting'], meta: { name: 'meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {meetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends meetingFindUniqueArgs>(args: SelectSubset<T, meetingFindUniqueArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {meetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends meetingFindUniqueOrThrowArgs>(args: SelectSubset<T, meetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends meetingFindFirstArgs>(args?: SelectSubset<T, meetingFindFirstArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends meetingFindFirstOrThrowArgs>(args?: SelectSubset<T, meetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends meetingFindManyArgs>(args?: SelectSubset<T, meetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Meeting.
     * @param {meetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends meetingCreateArgs>(args: SelectSubset<T, meetingCreateArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Meetings.
     * @param {meetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends meetingCreateManyArgs>(args?: SelectSubset<T, meetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {meetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends meetingCreateManyAndReturnArgs>(args?: SelectSubset<T, meetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Meeting.
     * @param {meetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends meetingDeleteArgs>(args: SelectSubset<T, meetingDeleteArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Meeting.
     * @param {meetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends meetingUpdateArgs>(args: SelectSubset<T, meetingUpdateArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Meetings.
     * @param {meetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends meetingDeleteManyArgs>(args?: SelectSubset<T, meetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends meetingUpdateManyArgs>(args: SelectSubset<T, meetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Meeting.
     * @param {meetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends meetingUpsertArgs>(args: SelectSubset<T, meetingUpsertArgs<ExtArgs>>): Prisma__meetingClient<$Result.GetResult<Prisma.$meetingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends meetingCountArgs>(
      args?: Subset<T, meetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {meetingGroupByArgs} args - Group by arguments.
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
      T extends meetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: meetingGroupByArgs['orderBy'] }
        : { orderBy?: meetingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, meetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the meeting model
   */
  readonly fields: meetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__meetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends locationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, locationDefaultArgs<ExtArgs>>): Prisma__locationClient<$Result.GetResult<Prisma.$locationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the meeting model
   */ 
  interface meetingFieldRefs {
    readonly id: FieldRef<"meeting", 'String'>
    readonly title: FieldRef<"meeting", 'String'>
    readonly location_id: FieldRef<"meeting", 'String'>
    readonly group_ids: FieldRef<"meeting", 'String[]'>
    readonly time_start: FieldRef<"meeting", 'String'>
    readonly time_end: FieldRef<"meeting", 'String'>
    readonly date_organize: FieldRef<"meeting", 'DateTime'>
    readonly time_before_begin: FieldRef<"meeting", 'Int'>
    readonly time_after_end: FieldRef<"meeting", 'Int'>
    readonly time_created: FieldRef<"meeting", 'DateTime'>
    readonly time_modified: FieldRef<"meeting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * meeting findUnique
   */
  export type meetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting findUniqueOrThrow
   */
  export type meetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting findFirst
   */
  export type meetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * meeting findFirstOrThrow
   */
  export type meetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meeting to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * meeting findMany
   */
  export type meetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter, which meetings to fetch.
     */
    where?: meetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of meetings to fetch.
     */
    orderBy?: meetingOrderByWithRelationInput | meetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing meetings.
     */
    cursor?: meetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * meeting create
   */
  export type meetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * The data needed to create a meeting.
     */
    data: XOR<meetingCreateInput, meetingUncheckedCreateInput>
  }

  /**
   * meeting createMany
   */
  export type meetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many meetings.
     */
    data: meetingCreateManyInput | meetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * meeting createManyAndReturn
   */
  export type meetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many meetings.
     */
    data: meetingCreateManyInput | meetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * meeting update
   */
  export type meetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * The data needed to update a meeting.
     */
    data: XOR<meetingUpdateInput, meetingUncheckedUpdateInput>
    /**
     * Choose, which meeting to update.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting updateMany
   */
  export type meetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update meetings.
     */
    data: XOR<meetingUpdateManyMutationInput, meetingUncheckedUpdateManyInput>
    /**
     * Filter which meetings to update
     */
    where?: meetingWhereInput
  }

  /**
   * meeting upsert
   */
  export type meetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * The filter to search for the meeting to update in case it exists.
     */
    where: meetingWhereUniqueInput
    /**
     * In case the meeting found by the `where` argument doesn't exist, create a new meeting with this data.
     */
    create: XOR<meetingCreateInput, meetingUncheckedCreateInput>
    /**
     * In case the meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<meetingUpdateInput, meetingUncheckedUpdateInput>
  }

  /**
   * meeting delete
   */
  export type meetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
    /**
     * Filter which meeting to delete.
     */
    where: meetingWhereUniqueInput
  }

  /**
   * meeting deleteMany
   */
  export type meetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which meetings to delete
     */
    where?: meetingWhereInput
  }

  /**
   * meeting without action
   */
  export type meetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the meeting
     */
    select?: meetingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: meetingInclude<ExtArgs> | null
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


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const Location_camera_bindScalarFieldEnum: {
    id: 'id',
    location_id: 'location_id',
    camera_id: 'camera_id',
    role: 'role',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type Location_camera_bindScalarFieldEnum = (typeof Location_camera_bindScalarFieldEnum)[keyof typeof Location_camera_bindScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    location_id: 'location_id',
    group_ids: 'group_ids',
    time_start: 'time_start',
    time_end: 'time_end',
    date_organize: 'date_organize',
    time_before_begin: 'time_before_begin',
    time_after_end: 'time_after_end',
    time_created: 'time_created',
    time_modified: 'time_modified'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type locationWhereInput = {
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    id?: UuidFilter<"location"> | string
    name?: StringFilter<"location"> | string
    code?: StringFilter<"location"> | string
    time_created?: DateTimeFilter<"location"> | Date | string
    time_modified?: DateTimeFilter<"location"> | Date | string
    camera_binds?: Location_camera_bindListRelationFilter
    meetings?: MeetingListRelationFilter
  }

  export type locationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    camera_binds?: location_camera_bindOrderByRelationAggregateInput
    meetings?: meetingOrderByRelationAggregateInput
  }

  export type locationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: locationWhereInput | locationWhereInput[]
    OR?: locationWhereInput[]
    NOT?: locationWhereInput | locationWhereInput[]
    name?: StringFilter<"location"> | string
    time_created?: DateTimeFilter<"location"> | Date | string
    time_modified?: DateTimeFilter<"location"> | Date | string
    camera_binds?: Location_camera_bindListRelationFilter
    meetings?: MeetingListRelationFilter
  }, "id" | "code">

  export type locationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    _count?: locationCountOrderByAggregateInput
    _max?: locationMaxOrderByAggregateInput
    _min?: locationMinOrderByAggregateInput
  }

  export type locationScalarWhereWithAggregatesInput = {
    AND?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    OR?: locationScalarWhereWithAggregatesInput[]
    NOT?: locationScalarWhereWithAggregatesInput | locationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"location"> | string
    name?: StringWithAggregatesFilter<"location"> | string
    code?: StringWithAggregatesFilter<"location"> | string
    time_created?: DateTimeWithAggregatesFilter<"location"> | Date | string
    time_modified?: DateTimeWithAggregatesFilter<"location"> | Date | string
  }

  export type location_camera_bindWhereInput = {
    AND?: location_camera_bindWhereInput | location_camera_bindWhereInput[]
    OR?: location_camera_bindWhereInput[]
    NOT?: location_camera_bindWhereInput | location_camera_bindWhereInput[]
    id?: UuidFilter<"location_camera_bind"> | string
    location_id?: UuidFilter<"location_camera_bind"> | string
    camera_id?: StringFilter<"location_camera_bind"> | string
    role?: StringNullableListFilter<"location_camera_bind">
    time_created?: DateTimeFilter<"location_camera_bind"> | Date | string
    time_modified?: DateTimeFilter<"location_camera_bind"> | Date | string
    location?: XOR<LocationRelationFilter, locationWhereInput>
  }

  export type location_camera_bindOrderByWithRelationInput = {
    id?: SortOrder
    location_id?: SortOrder
    camera_id?: SortOrder
    role?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    location?: locationOrderByWithRelationInput
  }

  export type location_camera_bindWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: location_camera_bindWhereInput | location_camera_bindWhereInput[]
    OR?: location_camera_bindWhereInput[]
    NOT?: location_camera_bindWhereInput | location_camera_bindWhereInput[]
    location_id?: UuidFilter<"location_camera_bind"> | string
    camera_id?: StringFilter<"location_camera_bind"> | string
    role?: StringNullableListFilter<"location_camera_bind">
    time_created?: DateTimeFilter<"location_camera_bind"> | Date | string
    time_modified?: DateTimeFilter<"location_camera_bind"> | Date | string
    location?: XOR<LocationRelationFilter, locationWhereInput>
  }, "id">

  export type location_camera_bindOrderByWithAggregationInput = {
    id?: SortOrder
    location_id?: SortOrder
    camera_id?: SortOrder
    role?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    _count?: location_camera_bindCountOrderByAggregateInput
    _max?: location_camera_bindMaxOrderByAggregateInput
    _min?: location_camera_bindMinOrderByAggregateInput
  }

  export type location_camera_bindScalarWhereWithAggregatesInput = {
    AND?: location_camera_bindScalarWhereWithAggregatesInput | location_camera_bindScalarWhereWithAggregatesInput[]
    OR?: location_camera_bindScalarWhereWithAggregatesInput[]
    NOT?: location_camera_bindScalarWhereWithAggregatesInput | location_camera_bindScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"location_camera_bind"> | string
    location_id?: UuidWithAggregatesFilter<"location_camera_bind"> | string
    camera_id?: StringWithAggregatesFilter<"location_camera_bind"> | string
    role?: StringNullableListFilter<"location_camera_bind">
    time_created?: DateTimeWithAggregatesFilter<"location_camera_bind"> | Date | string
    time_modified?: DateTimeWithAggregatesFilter<"location_camera_bind"> | Date | string
  }

  export type meetingWhereInput = {
    AND?: meetingWhereInput | meetingWhereInput[]
    OR?: meetingWhereInput[]
    NOT?: meetingWhereInput | meetingWhereInput[]
    id?: UuidFilter<"meeting"> | string
    title?: StringFilter<"meeting"> | string
    location_id?: UuidFilter<"meeting"> | string
    group_ids?: StringNullableListFilter<"meeting">
    time_start?: StringFilter<"meeting"> | string
    time_end?: StringFilter<"meeting"> | string
    date_organize?: DateTimeFilter<"meeting"> | Date | string
    time_before_begin?: IntFilter<"meeting"> | number
    time_after_end?: IntFilter<"meeting"> | number
    time_created?: DateTimeFilter<"meeting"> | Date | string
    time_modified?: DateTimeFilter<"meeting"> | Date | string
    location?: XOR<LocationRelationFilter, locationWhereInput>
  }

  export type meetingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    location_id?: SortOrder
    group_ids?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    date_organize?: SortOrder
    time_before_begin?: SortOrder
    time_after_end?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    location?: locationOrderByWithRelationInput
  }

  export type meetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: meetingWhereInput | meetingWhereInput[]
    OR?: meetingWhereInput[]
    NOT?: meetingWhereInput | meetingWhereInput[]
    title?: StringFilter<"meeting"> | string
    location_id?: UuidFilter<"meeting"> | string
    group_ids?: StringNullableListFilter<"meeting">
    time_start?: StringFilter<"meeting"> | string
    time_end?: StringFilter<"meeting"> | string
    date_organize?: DateTimeFilter<"meeting"> | Date | string
    time_before_begin?: IntFilter<"meeting"> | number
    time_after_end?: IntFilter<"meeting"> | number
    time_created?: DateTimeFilter<"meeting"> | Date | string
    time_modified?: DateTimeFilter<"meeting"> | Date | string
    location?: XOR<LocationRelationFilter, locationWhereInput>
  }, "id">

  export type meetingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    location_id?: SortOrder
    group_ids?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    date_organize?: SortOrder
    time_before_begin?: SortOrder
    time_after_end?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
    _count?: meetingCountOrderByAggregateInput
    _avg?: meetingAvgOrderByAggregateInput
    _max?: meetingMaxOrderByAggregateInput
    _min?: meetingMinOrderByAggregateInput
    _sum?: meetingSumOrderByAggregateInput
  }

  export type meetingScalarWhereWithAggregatesInput = {
    AND?: meetingScalarWhereWithAggregatesInput | meetingScalarWhereWithAggregatesInput[]
    OR?: meetingScalarWhereWithAggregatesInput[]
    NOT?: meetingScalarWhereWithAggregatesInput | meetingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"meeting"> | string
    title?: StringWithAggregatesFilter<"meeting"> | string
    location_id?: UuidWithAggregatesFilter<"meeting"> | string
    group_ids?: StringNullableListFilter<"meeting">
    time_start?: StringWithAggregatesFilter<"meeting"> | string
    time_end?: StringWithAggregatesFilter<"meeting"> | string
    date_organize?: DateTimeWithAggregatesFilter<"meeting"> | Date | string
    time_before_begin?: IntWithAggregatesFilter<"meeting"> | number
    time_after_end?: IntWithAggregatesFilter<"meeting"> | number
    time_created?: DateTimeWithAggregatesFilter<"meeting"> | Date | string
    time_modified?: DateTimeWithAggregatesFilter<"meeting"> | Date | string
  }

  export type locationCreateInput = {
    id: string
    name: string
    code: string
    time_created?: Date | string
    time_modified?: Date | string
    camera_binds?: location_camera_bindCreateNestedManyWithoutLocationInput
    meetings?: meetingCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateInput = {
    id: string
    name: string
    code: string
    time_created?: Date | string
    time_modified?: Date | string
    camera_binds?: location_camera_bindUncheckedCreateNestedManyWithoutLocationInput
    meetings?: meetingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    camera_binds?: location_camera_bindUpdateManyWithoutLocationNestedInput
    meetings?: meetingUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    camera_binds?: location_camera_bindUncheckedUpdateManyWithoutLocationNestedInput
    meetings?: meetingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationCreateManyInput = {
    id: string
    name: string
    code: string
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type locationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type location_camera_bindCreateInput = {
    id: string
    camera_id: string
    role?: location_camera_bindCreateroleInput | string[]
    time_created?: Date | string
    time_modified?: Date | string
    location: locationCreateNestedOneWithoutCamera_bindsInput
  }

  export type location_camera_bindUncheckedCreateInput = {
    id: string
    location_id: string
    camera_id: string
    role?: location_camera_bindCreateroleInput | string[]
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type location_camera_bindUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    role?: location_camera_bindUpdateroleInput | string[]
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutCamera_bindsNestedInput
  }

  export type location_camera_bindUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location_id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    role?: location_camera_bindUpdateroleInput | string[]
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type location_camera_bindCreateManyInput = {
    id: string
    location_id: string
    camera_id: string
    role?: location_camera_bindCreateroleInput | string[]
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type location_camera_bindUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    role?: location_camera_bindUpdateroleInput | string[]
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type location_camera_bindUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location_id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    role?: location_camera_bindUpdateroleInput | string[]
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingCreateInput = {
    id: string
    title: string
    group_ids?: meetingCreategroup_idsInput | string[]
    time_start: string
    time_end: string
    date_organize: Date | string
    time_before_begin?: number
    time_after_end?: number
    time_created?: Date | string
    time_modified?: Date | string
    location: locationCreateNestedOneWithoutMeetingsInput
  }

  export type meetingUncheckedCreateInput = {
    id: string
    title: string
    location_id: string
    group_ids?: meetingCreategroup_idsInput | string[]
    time_start: string
    time_end: string
    date_organize: Date | string
    time_before_begin?: number
    time_after_end?: number
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type meetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    group_ids?: meetingUpdategroup_idsInput | string[]
    time_start?: StringFieldUpdateOperationsInput | string
    time_end?: StringFieldUpdateOperationsInput | string
    date_organize?: DateTimeFieldUpdateOperationsInput | Date | string
    time_before_begin?: IntFieldUpdateOperationsInput | number
    time_after_end?: IntFieldUpdateOperationsInput | number
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: locationUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type meetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location_id?: StringFieldUpdateOperationsInput | string
    group_ids?: meetingUpdategroup_idsInput | string[]
    time_start?: StringFieldUpdateOperationsInput | string
    time_end?: StringFieldUpdateOperationsInput | string
    date_organize?: DateTimeFieldUpdateOperationsInput | Date | string
    time_before_begin?: IntFieldUpdateOperationsInput | number
    time_after_end?: IntFieldUpdateOperationsInput | number
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingCreateManyInput = {
    id: string
    title: string
    location_id: string
    group_ids?: meetingCreategroup_idsInput | string[]
    time_start: string
    time_end: string
    date_organize: Date | string
    time_before_begin?: number
    time_after_end?: number
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type meetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    group_ids?: meetingUpdategroup_idsInput | string[]
    time_start?: StringFieldUpdateOperationsInput | string
    time_end?: StringFieldUpdateOperationsInput | string
    date_organize?: DateTimeFieldUpdateOperationsInput | Date | string
    time_before_begin?: IntFieldUpdateOperationsInput | number
    time_after_end?: IntFieldUpdateOperationsInput | number
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    location_id?: StringFieldUpdateOperationsInput | string
    group_ids?: meetingUpdategroup_idsInput | string[]
    time_start?: StringFieldUpdateOperationsInput | string
    time_end?: StringFieldUpdateOperationsInput | string
    date_organize?: DateTimeFieldUpdateOperationsInput | Date | string
    time_before_begin?: IntFieldUpdateOperationsInput | number
    time_after_end?: IntFieldUpdateOperationsInput | number
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Location_camera_bindListRelationFilter = {
    every?: location_camera_bindWhereInput
    some?: location_camera_bindWhereInput
    none?: location_camera_bindWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: meetingWhereInput
    some?: meetingWhereInput
    none?: meetingWhereInput
  }

  export type location_camera_bindOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type meetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type locationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type locationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type locationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LocationRelationFilter = {
    is?: locationWhereInput
    isNot?: locationWhereInput
  }

  export type location_camera_bindCountOrderByAggregateInput = {
    id?: SortOrder
    location_id?: SortOrder
    camera_id?: SortOrder
    role?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type location_camera_bindMaxOrderByAggregateInput = {
    id?: SortOrder
    location_id?: SortOrder
    camera_id?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type location_camera_bindMinOrderByAggregateInput = {
    id?: SortOrder
    location_id?: SortOrder
    camera_id?: SortOrder
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

  export type meetingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location_id?: SortOrder
    group_ids?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    date_organize?: SortOrder
    time_before_begin?: SortOrder
    time_after_end?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type meetingAvgOrderByAggregateInput = {
    time_before_begin?: SortOrder
    time_after_end?: SortOrder
  }

  export type meetingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    date_organize?: SortOrder
    time_before_begin?: SortOrder
    time_after_end?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type meetingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    location_id?: SortOrder
    time_start?: SortOrder
    time_end?: SortOrder
    date_organize?: SortOrder
    time_before_begin?: SortOrder
    time_after_end?: SortOrder
    time_created?: SortOrder
    time_modified?: SortOrder
  }

  export type meetingSumOrderByAggregateInput = {
    time_before_begin?: SortOrder
    time_after_end?: SortOrder
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

  export type location_camera_bindCreateNestedManyWithoutLocationInput = {
    create?: XOR<location_camera_bindCreateWithoutLocationInput, location_camera_bindUncheckedCreateWithoutLocationInput> | location_camera_bindCreateWithoutLocationInput[] | location_camera_bindUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: location_camera_bindCreateOrConnectWithoutLocationInput | location_camera_bindCreateOrConnectWithoutLocationInput[]
    createMany?: location_camera_bindCreateManyLocationInputEnvelope
    connect?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
  }

  export type meetingCreateNestedManyWithoutLocationInput = {
    create?: XOR<meetingCreateWithoutLocationInput, meetingUncheckedCreateWithoutLocationInput> | meetingCreateWithoutLocationInput[] | meetingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: meetingCreateOrConnectWithoutLocationInput | meetingCreateOrConnectWithoutLocationInput[]
    createMany?: meetingCreateManyLocationInputEnvelope
    connect?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
  }

  export type location_camera_bindUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<location_camera_bindCreateWithoutLocationInput, location_camera_bindUncheckedCreateWithoutLocationInput> | location_camera_bindCreateWithoutLocationInput[] | location_camera_bindUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: location_camera_bindCreateOrConnectWithoutLocationInput | location_camera_bindCreateOrConnectWithoutLocationInput[]
    createMany?: location_camera_bindCreateManyLocationInputEnvelope
    connect?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
  }

  export type meetingUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<meetingCreateWithoutLocationInput, meetingUncheckedCreateWithoutLocationInput> | meetingCreateWithoutLocationInput[] | meetingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: meetingCreateOrConnectWithoutLocationInput | meetingCreateOrConnectWithoutLocationInput[]
    createMany?: meetingCreateManyLocationInputEnvelope
    connect?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type location_camera_bindUpdateManyWithoutLocationNestedInput = {
    create?: XOR<location_camera_bindCreateWithoutLocationInput, location_camera_bindUncheckedCreateWithoutLocationInput> | location_camera_bindCreateWithoutLocationInput[] | location_camera_bindUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: location_camera_bindCreateOrConnectWithoutLocationInput | location_camera_bindCreateOrConnectWithoutLocationInput[]
    upsert?: location_camera_bindUpsertWithWhereUniqueWithoutLocationInput | location_camera_bindUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: location_camera_bindCreateManyLocationInputEnvelope
    set?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    disconnect?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    delete?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    connect?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    update?: location_camera_bindUpdateWithWhereUniqueWithoutLocationInput | location_camera_bindUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: location_camera_bindUpdateManyWithWhereWithoutLocationInput | location_camera_bindUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: location_camera_bindScalarWhereInput | location_camera_bindScalarWhereInput[]
  }

  export type meetingUpdateManyWithoutLocationNestedInput = {
    create?: XOR<meetingCreateWithoutLocationInput, meetingUncheckedCreateWithoutLocationInput> | meetingCreateWithoutLocationInput[] | meetingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: meetingCreateOrConnectWithoutLocationInput | meetingCreateOrConnectWithoutLocationInput[]
    upsert?: meetingUpsertWithWhereUniqueWithoutLocationInput | meetingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: meetingCreateManyLocationInputEnvelope
    set?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    disconnect?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    delete?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    connect?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    update?: meetingUpdateWithWhereUniqueWithoutLocationInput | meetingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: meetingUpdateManyWithWhereWithoutLocationInput | meetingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: meetingScalarWhereInput | meetingScalarWhereInput[]
  }

  export type location_camera_bindUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<location_camera_bindCreateWithoutLocationInput, location_camera_bindUncheckedCreateWithoutLocationInput> | location_camera_bindCreateWithoutLocationInput[] | location_camera_bindUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: location_camera_bindCreateOrConnectWithoutLocationInput | location_camera_bindCreateOrConnectWithoutLocationInput[]
    upsert?: location_camera_bindUpsertWithWhereUniqueWithoutLocationInput | location_camera_bindUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: location_camera_bindCreateManyLocationInputEnvelope
    set?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    disconnect?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    delete?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    connect?: location_camera_bindWhereUniqueInput | location_camera_bindWhereUniqueInput[]
    update?: location_camera_bindUpdateWithWhereUniqueWithoutLocationInput | location_camera_bindUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: location_camera_bindUpdateManyWithWhereWithoutLocationInput | location_camera_bindUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: location_camera_bindScalarWhereInput | location_camera_bindScalarWhereInput[]
  }

  export type meetingUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<meetingCreateWithoutLocationInput, meetingUncheckedCreateWithoutLocationInput> | meetingCreateWithoutLocationInput[] | meetingUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: meetingCreateOrConnectWithoutLocationInput | meetingCreateOrConnectWithoutLocationInput[]
    upsert?: meetingUpsertWithWhereUniqueWithoutLocationInput | meetingUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: meetingCreateManyLocationInputEnvelope
    set?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    disconnect?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    delete?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    connect?: meetingWhereUniqueInput | meetingWhereUniqueInput[]
    update?: meetingUpdateWithWhereUniqueWithoutLocationInput | meetingUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: meetingUpdateManyWithWhereWithoutLocationInput | meetingUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: meetingScalarWhereInput | meetingScalarWhereInput[]
  }

  export type location_camera_bindCreateroleInput = {
    set: string[]
  }

  export type locationCreateNestedOneWithoutCamera_bindsInput = {
    create?: XOR<locationCreateWithoutCamera_bindsInput, locationUncheckedCreateWithoutCamera_bindsInput>
    connectOrCreate?: locationCreateOrConnectWithoutCamera_bindsInput
    connect?: locationWhereUniqueInput
  }

  export type location_camera_bindUpdateroleInput = {
    set?: string[]
    push?: string | string[]
  }

  export type locationUpdateOneRequiredWithoutCamera_bindsNestedInput = {
    create?: XOR<locationCreateWithoutCamera_bindsInput, locationUncheckedCreateWithoutCamera_bindsInput>
    connectOrCreate?: locationCreateOrConnectWithoutCamera_bindsInput
    upsert?: locationUpsertWithoutCamera_bindsInput
    connect?: locationWhereUniqueInput
    update?: XOR<XOR<locationUpdateToOneWithWhereWithoutCamera_bindsInput, locationUpdateWithoutCamera_bindsInput>, locationUncheckedUpdateWithoutCamera_bindsInput>
  }

  export type meetingCreategroup_idsInput = {
    set: string[]
  }

  export type locationCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<locationCreateWithoutMeetingsInput, locationUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: locationCreateOrConnectWithoutMeetingsInput
    connect?: locationWhereUniqueInput
  }

  export type meetingUpdategroup_idsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type locationUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<locationCreateWithoutMeetingsInput, locationUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: locationCreateOrConnectWithoutMeetingsInput
    upsert?: locationUpsertWithoutMeetingsInput
    connect?: locationWhereUniqueInput
    update?: XOR<XOR<locationUpdateToOneWithWhereWithoutMeetingsInput, locationUpdateWithoutMeetingsInput>, locationUncheckedUpdateWithoutMeetingsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type location_camera_bindCreateWithoutLocationInput = {
    id: string
    camera_id: string
    role?: location_camera_bindCreateroleInput | string[]
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type location_camera_bindUncheckedCreateWithoutLocationInput = {
    id: string
    camera_id: string
    role?: location_camera_bindCreateroleInput | string[]
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type location_camera_bindCreateOrConnectWithoutLocationInput = {
    where: location_camera_bindWhereUniqueInput
    create: XOR<location_camera_bindCreateWithoutLocationInput, location_camera_bindUncheckedCreateWithoutLocationInput>
  }

  export type location_camera_bindCreateManyLocationInputEnvelope = {
    data: location_camera_bindCreateManyLocationInput | location_camera_bindCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type meetingCreateWithoutLocationInput = {
    id: string
    title: string
    group_ids?: meetingCreategroup_idsInput | string[]
    time_start: string
    time_end: string
    date_organize: Date | string
    time_before_begin?: number
    time_after_end?: number
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type meetingUncheckedCreateWithoutLocationInput = {
    id: string
    title: string
    group_ids?: meetingCreategroup_idsInput | string[]
    time_start: string
    time_end: string
    date_organize: Date | string
    time_before_begin?: number
    time_after_end?: number
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type meetingCreateOrConnectWithoutLocationInput = {
    where: meetingWhereUniqueInput
    create: XOR<meetingCreateWithoutLocationInput, meetingUncheckedCreateWithoutLocationInput>
  }

  export type meetingCreateManyLocationInputEnvelope = {
    data: meetingCreateManyLocationInput | meetingCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type location_camera_bindUpsertWithWhereUniqueWithoutLocationInput = {
    where: location_camera_bindWhereUniqueInput
    update: XOR<location_camera_bindUpdateWithoutLocationInput, location_camera_bindUncheckedUpdateWithoutLocationInput>
    create: XOR<location_camera_bindCreateWithoutLocationInput, location_camera_bindUncheckedCreateWithoutLocationInput>
  }

  export type location_camera_bindUpdateWithWhereUniqueWithoutLocationInput = {
    where: location_camera_bindWhereUniqueInput
    data: XOR<location_camera_bindUpdateWithoutLocationInput, location_camera_bindUncheckedUpdateWithoutLocationInput>
  }

  export type location_camera_bindUpdateManyWithWhereWithoutLocationInput = {
    where: location_camera_bindScalarWhereInput
    data: XOR<location_camera_bindUpdateManyMutationInput, location_camera_bindUncheckedUpdateManyWithoutLocationInput>
  }

  export type location_camera_bindScalarWhereInput = {
    AND?: location_camera_bindScalarWhereInput | location_camera_bindScalarWhereInput[]
    OR?: location_camera_bindScalarWhereInput[]
    NOT?: location_camera_bindScalarWhereInput | location_camera_bindScalarWhereInput[]
    id?: UuidFilter<"location_camera_bind"> | string
    location_id?: UuidFilter<"location_camera_bind"> | string
    camera_id?: StringFilter<"location_camera_bind"> | string
    role?: StringNullableListFilter<"location_camera_bind">
    time_created?: DateTimeFilter<"location_camera_bind"> | Date | string
    time_modified?: DateTimeFilter<"location_camera_bind"> | Date | string
  }

  export type meetingUpsertWithWhereUniqueWithoutLocationInput = {
    where: meetingWhereUniqueInput
    update: XOR<meetingUpdateWithoutLocationInput, meetingUncheckedUpdateWithoutLocationInput>
    create: XOR<meetingCreateWithoutLocationInput, meetingUncheckedCreateWithoutLocationInput>
  }

  export type meetingUpdateWithWhereUniqueWithoutLocationInput = {
    where: meetingWhereUniqueInput
    data: XOR<meetingUpdateWithoutLocationInput, meetingUncheckedUpdateWithoutLocationInput>
  }

  export type meetingUpdateManyWithWhereWithoutLocationInput = {
    where: meetingScalarWhereInput
    data: XOR<meetingUpdateManyMutationInput, meetingUncheckedUpdateManyWithoutLocationInput>
  }

  export type meetingScalarWhereInput = {
    AND?: meetingScalarWhereInput | meetingScalarWhereInput[]
    OR?: meetingScalarWhereInput[]
    NOT?: meetingScalarWhereInput | meetingScalarWhereInput[]
    id?: UuidFilter<"meeting"> | string
    title?: StringFilter<"meeting"> | string
    location_id?: UuidFilter<"meeting"> | string
    group_ids?: StringNullableListFilter<"meeting">
    time_start?: StringFilter<"meeting"> | string
    time_end?: StringFilter<"meeting"> | string
    date_organize?: DateTimeFilter<"meeting"> | Date | string
    time_before_begin?: IntFilter<"meeting"> | number
    time_after_end?: IntFilter<"meeting"> | number
    time_created?: DateTimeFilter<"meeting"> | Date | string
    time_modified?: DateTimeFilter<"meeting"> | Date | string
  }

  export type locationCreateWithoutCamera_bindsInput = {
    id: string
    name: string
    code: string
    time_created?: Date | string
    time_modified?: Date | string
    meetings?: meetingCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateWithoutCamera_bindsInput = {
    id: string
    name: string
    code: string
    time_created?: Date | string
    time_modified?: Date | string
    meetings?: meetingUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationCreateOrConnectWithoutCamera_bindsInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutCamera_bindsInput, locationUncheckedCreateWithoutCamera_bindsInput>
  }

  export type locationUpsertWithoutCamera_bindsInput = {
    update: XOR<locationUpdateWithoutCamera_bindsInput, locationUncheckedUpdateWithoutCamera_bindsInput>
    create: XOR<locationCreateWithoutCamera_bindsInput, locationUncheckedCreateWithoutCamera_bindsInput>
    where?: locationWhereInput
  }

  export type locationUpdateToOneWithWhereWithoutCamera_bindsInput = {
    where?: locationWhereInput
    data: XOR<locationUpdateWithoutCamera_bindsInput, locationUncheckedUpdateWithoutCamera_bindsInput>
  }

  export type locationUpdateWithoutCamera_bindsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: meetingUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateWithoutCamera_bindsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: meetingUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type locationCreateWithoutMeetingsInput = {
    id: string
    name: string
    code: string
    time_created?: Date | string
    time_modified?: Date | string
    camera_binds?: location_camera_bindCreateNestedManyWithoutLocationInput
  }

  export type locationUncheckedCreateWithoutMeetingsInput = {
    id: string
    name: string
    code: string
    time_created?: Date | string
    time_modified?: Date | string
    camera_binds?: location_camera_bindUncheckedCreateNestedManyWithoutLocationInput
  }

  export type locationCreateOrConnectWithoutMeetingsInput = {
    where: locationWhereUniqueInput
    create: XOR<locationCreateWithoutMeetingsInput, locationUncheckedCreateWithoutMeetingsInput>
  }

  export type locationUpsertWithoutMeetingsInput = {
    update: XOR<locationUpdateWithoutMeetingsInput, locationUncheckedUpdateWithoutMeetingsInput>
    create: XOR<locationCreateWithoutMeetingsInput, locationUncheckedCreateWithoutMeetingsInput>
    where?: locationWhereInput
  }

  export type locationUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: locationWhereInput
    data: XOR<locationUpdateWithoutMeetingsInput, locationUncheckedUpdateWithoutMeetingsInput>
  }

  export type locationUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    camera_binds?: location_camera_bindUpdateManyWithoutLocationNestedInput
  }

  export type locationUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
    camera_binds?: location_camera_bindUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type location_camera_bindCreateManyLocationInput = {
    id: string
    camera_id: string
    role?: location_camera_bindCreateroleInput | string[]
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type meetingCreateManyLocationInput = {
    id: string
    title: string
    group_ids?: meetingCreategroup_idsInput | string[]
    time_start: string
    time_end: string
    date_organize: Date | string
    time_before_begin?: number
    time_after_end?: number
    time_created?: Date | string
    time_modified?: Date | string
  }

  export type location_camera_bindUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    role?: location_camera_bindUpdateroleInput | string[]
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type location_camera_bindUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    role?: location_camera_bindUpdateroleInput | string[]
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type location_camera_bindUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    camera_id?: StringFieldUpdateOperationsInput | string
    role?: location_camera_bindUpdateroleInput | string[]
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    group_ids?: meetingUpdategroup_idsInput | string[]
    time_start?: StringFieldUpdateOperationsInput | string
    time_end?: StringFieldUpdateOperationsInput | string
    date_organize?: DateTimeFieldUpdateOperationsInput | Date | string
    time_before_begin?: IntFieldUpdateOperationsInput | number
    time_after_end?: IntFieldUpdateOperationsInput | number
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    group_ids?: meetingUpdategroup_idsInput | string[]
    time_start?: StringFieldUpdateOperationsInput | string
    time_end?: StringFieldUpdateOperationsInput | string
    date_organize?: DateTimeFieldUpdateOperationsInput | Date | string
    time_before_begin?: IntFieldUpdateOperationsInput | number
    time_after_end?: IntFieldUpdateOperationsInput | number
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type meetingUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    group_ids?: meetingUpdategroup_idsInput | string[]
    time_start?: StringFieldUpdateOperationsInput | string
    time_end?: StringFieldUpdateOperationsInput | string
    date_organize?: DateTimeFieldUpdateOperationsInput | Date | string
    time_before_begin?: IntFieldUpdateOperationsInput | number
    time_after_end?: IntFieldUpdateOperationsInput | number
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    time_modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use LocationCountOutputTypeDefaultArgs instead
     */
    export type LocationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LocationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use locationDefaultArgs instead
     */
    export type locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = locationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use location_camera_bindDefaultArgs instead
     */
    export type location_camera_bindArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = location_camera_bindDefaultArgs<ExtArgs>
    /**
     * @deprecated Use meetingDefaultArgs instead
     */
    export type meetingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = meetingDefaultArgs<ExtArgs>

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