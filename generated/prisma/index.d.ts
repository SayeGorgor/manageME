
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Organizations
 * 
 */
export type Organizations = $Result.DefaultSelection<Prisma.$OrganizationsPayload>
/**
 * Model Memberships
 * 
 */
export type Memberships = $Result.DefaultSelection<Prisma.$MembershipsPayload>
/**
 * Model Tasks
 * 
 */
export type Tasks = $Result.DefaultSelection<Prisma.$TasksPayload>
/**
 * Model Notes
 * 
 */
export type Notes = $Result.DefaultSelection<Prisma.$NotesPayload>
/**
 * Model Events
 * 
 */
export type Events = $Result.DefaultSelection<Prisma.$EventsPayload>
/**
 * Model Invitations
 * 
 */
export type Invitations = $Result.DefaultSelection<Prisma.$InvitationsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  MEMBER: 'MEMBER',
  ADMIN: 'ADMIN',
  OWNER: 'OWNER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.sessions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Sessions
   * const sessions = await prisma.sessions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizations`: Exposes CRUD operations for the **Organizations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organizations.findMany()
    * ```
    */
  get organizations(): Prisma.OrganizationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberships`: Exposes CRUD operations for the **Memberships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.memberships.findMany()
    * ```
    */
  get memberships(): Prisma.MembershipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **Tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.TasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notes`: Exposes CRUD operations for the **Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitations`: Exposes CRUD operations for the **Invitations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitations.findMany()
    * ```
    */
  get invitations(): Prisma.InvitationsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Sessions: 'Sessions',
    Users: 'Users',
    Organizations: 'Organizations',
    Memberships: 'Memberships',
    Tasks: 'Tasks',
    Notes: 'Notes',
    Events: 'Events',
    Invitations: 'Invitations'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "sessions" | "users" | "organizations" | "memberships" | "tasks" | "notes" | "events" | "invitations"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Organizations: {
        payload: Prisma.$OrganizationsPayload<ExtArgs>
        fields: Prisma.OrganizationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>
          }
          findFirst: {
            args: Prisma.OrganizationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>
          }
          findMany: {
            args: Prisma.OrganizationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>[]
          }
          create: {
            args: Prisma.OrganizationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>
          }
          createMany: {
            args: Prisma.OrganizationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>[]
          }
          delete: {
            args: Prisma.OrganizationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>
          }
          update: {
            args: Prisma.OrganizationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationsPayload>
          }
          aggregate: {
            args: Prisma.OrganizationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizations>
          }
          groupBy: {
            args: Prisma.OrganizationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationsCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationsCountAggregateOutputType> | number
          }
        }
      }
      Memberships: {
        payload: Prisma.$MembershipsPayload<ExtArgs>
        fields: Prisma.MembershipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MembershipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MembershipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>
          }
          findFirst: {
            args: Prisma.MembershipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MembershipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>
          }
          findMany: {
            args: Prisma.MembershipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>[]
          }
          create: {
            args: Prisma.MembershipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>
          }
          createMany: {
            args: Prisma.MembershipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MembershipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>[]
          }
          delete: {
            args: Prisma.MembershipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>
          }
          update: {
            args: Prisma.MembershipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>
          }
          deleteMany: {
            args: Prisma.MembershipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MembershipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MembershipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>[]
          }
          upsert: {
            args: Prisma.MembershipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MembershipsPayload>
          }
          aggregate: {
            args: Prisma.MembershipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberships>
          }
          groupBy: {
            args: Prisma.MembershipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MembershipsCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipsCountAggregateOutputType> | number
          }
        }
      }
      Tasks: {
        payload: Prisma.$TasksPayload<ExtArgs>
        fields: Prisma.TasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findFirst: {
            args: Prisma.TasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findMany: {
            args: Prisma.TasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          create: {
            args: Prisma.TasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          createMany: {
            args: Prisma.TasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          delete: {
            args: Prisma.TasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          update: {
            args: Prisma.TasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          deleteMany: {
            args: Prisma.TasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          upsert: {
            args: Prisma.TasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.TasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      Notes: {
        payload: Prisma.$NotesPayload<ExtArgs>
        fields: Prisma.NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findFirst: {
            args: Prisma.NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findMany: {
            args: Prisma.NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          create: {
            args: Prisma.NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          createMany: {
            args: Prisma.NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          delete: {
            args: Prisma.NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          update: {
            args: Prisma.NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          deleteMany: {
            args: Prisma.NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          upsert: {
            args: Prisma.NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      Events: {
        payload: Prisma.$EventsPayload<ExtArgs>
        fields: Prisma.EventsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findFirst: {
            args: Prisma.EventsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          findMany: {
            args: Prisma.EventsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          create: {
            args: Prisma.EventsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          createMany: {
            args: Prisma.EventsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          delete: {
            args: Prisma.EventsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          update: {
            args: Prisma.EventsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          deleteMany: {
            args: Prisma.EventsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>[]
          }
          upsert: {
            args: Prisma.EventsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventsPayload>
          }
          aggregate: {
            args: Prisma.EventsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvents>
          }
          groupBy: {
            args: Prisma.EventsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventsCountArgs<ExtArgs>
            result: $Utils.Optional<EventsCountAggregateOutputType> | number
          }
        }
      }
      Invitations: {
        payload: Prisma.$InvitationsPayload<ExtArgs>
        fields: Prisma.InvitationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          findFirst: {
            args: Prisma.InvitationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          findMany: {
            args: Prisma.InvitationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>[]
          }
          create: {
            args: Prisma.InvitationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          createMany: {
            args: Prisma.InvitationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>[]
          }
          delete: {
            args: Prisma.InvitationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          update: {
            args: Prisma.InvitationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          deleteMany: {
            args: Prisma.InvitationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>[]
          }
          upsert: {
            args: Prisma.InvitationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationsPayload>
          }
          aggregate: {
            args: Prisma.InvitationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitations>
          }
          groupBy: {
            args: Prisma.InvitationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationsCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    sessions?: SessionsOmit
    users?: UsersOmit
    organizations?: OrganizationsOmit
    memberships?: MembershipsOmit
    tasks?: TasksOmit
    notes?: NotesOmit
    events?: EventsOmit
    invitations?: InvitationsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    session: number
    memberships: number
    tasks: number
    notes: number
    sent_invites: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | UsersCountOutputTypeCountSessionArgs
    memberships?: boolean | UsersCountOutputTypeCountMembershipsArgs
    tasks?: boolean | UsersCountOutputTypeCountTasksArgs
    notes?: boolean | UsersCountOutputTypeCountNotesArgs
    sent_invites?: boolean | UsersCountOutputTypeCountSent_invitesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSent_invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationsWhereInput
  }


  /**
   * Count Type OrganizationsCountOutputType
   */

  export type OrganizationsCountOutputType = {
    memberships: number
    tasks: number
    notes: number
    events: number
    sent_invites: number
  }

  export type OrganizationsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | OrganizationsCountOutputTypeCountMembershipsArgs
    tasks?: boolean | OrganizationsCountOutputTypeCountTasksArgs
    notes?: boolean | OrganizationsCountOutputTypeCountNotesArgs
    events?: boolean | OrganizationsCountOutputTypeCountEventsArgs
    sent_invites?: boolean | OrganizationsCountOutputTypeCountSent_invitesArgs
  }

  // Custom InputTypes
  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationsCountOutputType
     */
    select?: OrganizationsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipsWhereInput
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
  }

  /**
   * OrganizationsCountOutputType without action
   */
  export type OrganizationsCountOutputTypeCountSent_invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    expires_at: Date | null
    created_at: Date | null
    last_used: Date | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    expires_at: Date | null
    created_at: Date | null
    last_used: Date | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    user_id: number
    expires_at: number
    created_at: number
    last_used: number
    _all: number
  }


  export type SessionsMinAggregateInputType = {
    id?: true
    user_id?: true
    expires_at?: true
    created_at?: true
    last_used?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    expires_at?: true
    created_at?: true
    last_used?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    user_id?: true
    expires_at?: true
    created_at?: true
    last_used?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: string
    user_id: string
    expires_at: Date
    created_at: Date
    last_used: Date | null
    _count: SessionsCountAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    last_used?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    last_used?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    last_used?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    expires_at?: boolean
    created_at?: boolean
    last_used?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "expires_at" | "created_at" | "last_used", ExtArgs["result"]["sessions"]>
  export type SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      expires_at: Date
      created_at: Date
      last_used: Date | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
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
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly id: FieldRef<"Sessions", 'String'>
    readonly user_id: FieldRef<"Sessions", 'String'>
    readonly expires_at: FieldRef<"Sessions", 'DateTime'>
    readonly created_at: FieldRef<"Sessions", 'DateTime'>
    readonly last_used: FieldRef<"Sessions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    password: string | null
    phone_number: string | null
    pfp: Bytes | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    password: string | null
    phone_number: string | null
    pfp: Bytes | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    password: number
    phone_number: number
    pfp: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    phone_number?: true
    pfp?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    phone_number?: true
    pfp?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    phone_number?: true
    pfp?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number: string | null
    pfp: Bytes | null
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    phone_number?: boolean
    pfp?: boolean
    created_at?: boolean
    session?: boolean | Users$sessionArgs<ExtArgs>
    memberships?: boolean | Users$membershipsArgs<ExtArgs>
    tasks?: boolean | Users$tasksArgs<ExtArgs>
    notes?: boolean | Users$notesArgs<ExtArgs>
    sent_invites?: boolean | Users$sent_invitesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    phone_number?: boolean
    pfp?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    phone_number?: boolean
    pfp?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    phone_number?: boolean
    pfp?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "last_name" | "password" | "phone_number" | "pfp" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | Users$sessionArgs<ExtArgs>
    memberships?: boolean | Users$membershipsArgs<ExtArgs>
    tasks?: boolean | Users$tasksArgs<ExtArgs>
    notes?: boolean | Users$notesArgs<ExtArgs>
    sent_invites?: boolean | Users$sent_invitesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      session: Prisma.$SessionsPayload<ExtArgs>[]
      memberships: Prisma.$MembershipsPayload<ExtArgs>[]
      tasks: Prisma.$TasksPayload<ExtArgs>[]
      notes: Prisma.$NotesPayload<ExtArgs>[]
      sent_invites: Prisma.$InvitationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      first_name: string
      last_name: string
      password: string
      phone_number: string | null
      pfp: Prisma.Bytes | null
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends Users$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Users$sessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends Users$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Users$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Users$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Users$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Users$notesArgs<ExtArgs> = {}>(args?: Subset<T, Users$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sent_invites<T extends Users$sent_invitesArgs<ExtArgs> = {}>(args?: Subset<T, Users$sent_invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly first_name: FieldRef<"Users", 'String'>
    readonly last_name: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly phone_number: FieldRef<"Users", 'String'>
    readonly pfp: FieldRef<"Users", 'Bytes'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.session
   */
  export type Users$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Users.memberships
   */
  export type Users$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    where?: MembershipsWhereInput
    orderBy?: MembershipsOrderByWithRelationInput | MembershipsOrderByWithRelationInput[]
    cursor?: MembershipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * Users.tasks
   */
  export type Users$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Users.notes
   */
  export type Users$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    cursor?: NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Users.sent_invites
   */
  export type Users$sent_invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    where?: InvitationsWhereInput
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    cursor?: InvitationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Organizations
   */

  export type AggregateOrganizations = {
    _count: OrganizationsCountAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  export type OrganizationsMinAggregateOutputType = {
    id: string | null
    name: string | null
    pfp: Bytes | null
    created_at: Date | null
  }

  export type OrganizationsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    pfp: Bytes | null
    created_at: Date | null
  }

  export type OrganizationsCountAggregateOutputType = {
    id: number
    name: number
    pfp: number
    created_at: number
    _all: number
  }


  export type OrganizationsMinAggregateInputType = {
    id?: true
    name?: true
    pfp?: true
    created_at?: true
  }

  export type OrganizationsMaxAggregateInputType = {
    id?: true
    name?: true
    pfp?: true
    created_at?: true
  }

  export type OrganizationsCountAggregateInputType = {
    id?: true
    name?: true
    pfp?: true
    created_at?: true
    _all?: true
  }

  export type OrganizationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to aggregate.
     */
    where?: OrganizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationsOrderByWithRelationInput | OrganizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationsMaxAggregateInputType
  }

  export type GetOrganizationsAggregateType<T extends OrganizationsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizations[P]>
      : GetScalarType<T[P], AggregateOrganizations[P]>
  }




  export type OrganizationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationsWhereInput
    orderBy?: OrganizationsOrderByWithAggregationInput | OrganizationsOrderByWithAggregationInput[]
    by: OrganizationsScalarFieldEnum[] | OrganizationsScalarFieldEnum
    having?: OrganizationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationsCountAggregateInputType | true
    _min?: OrganizationsMinAggregateInputType
    _max?: OrganizationsMaxAggregateInputType
  }

  export type OrganizationsGroupByOutputType = {
    id: string
    name: string
    pfp: Bytes | null
    created_at: Date
    _count: OrganizationsCountAggregateOutputType | null
    _min: OrganizationsMinAggregateOutputType | null
    _max: OrganizationsMaxAggregateOutputType | null
  }

  type GetOrganizationsGroupByPayload<T extends OrganizationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationsGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pfp?: boolean
    created_at?: boolean
    memberships?: boolean | Organizations$membershipsArgs<ExtArgs>
    tasks?: boolean | Organizations$tasksArgs<ExtArgs>
    notes?: boolean | Organizations$notesArgs<ExtArgs>
    events?: boolean | Organizations$eventsArgs<ExtArgs>
    sent_invites?: boolean | Organizations$sent_invitesArgs<ExtArgs>
    _count?: boolean | OrganizationsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizations"]>

  export type OrganizationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pfp?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["organizations"]>

  export type OrganizationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pfp?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["organizations"]>

  export type OrganizationsSelectScalar = {
    id?: boolean
    name?: boolean
    pfp?: boolean
    created_at?: boolean
  }

  export type OrganizationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "pfp" | "created_at", ExtArgs["result"]["organizations"]>
  export type OrganizationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | Organizations$membershipsArgs<ExtArgs>
    tasks?: boolean | Organizations$tasksArgs<ExtArgs>
    notes?: boolean | Organizations$notesArgs<ExtArgs>
    events?: boolean | Organizations$eventsArgs<ExtArgs>
    sent_invites?: boolean | Organizations$sent_invitesArgs<ExtArgs>
    _count?: boolean | OrganizationsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrganizationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organizations"
    objects: {
      memberships: Prisma.$MembershipsPayload<ExtArgs>[]
      tasks: Prisma.$TasksPayload<ExtArgs>[]
      notes: Prisma.$NotesPayload<ExtArgs>[]
      events: Prisma.$EventsPayload<ExtArgs>[]
      sent_invites: Prisma.$InvitationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      pfp: Prisma.Bytes | null
      created_at: Date
    }, ExtArgs["result"]["organizations"]>
    composites: {}
  }

  type OrganizationsGetPayload<S extends boolean | null | undefined | OrganizationsDefaultArgs> = $Result.GetResult<Prisma.$OrganizationsPayload, S>

  type OrganizationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationsCountAggregateInputType | true
    }

  export interface OrganizationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organizations'], meta: { name: 'Organizations' } }
    /**
     * Find zero or one Organizations that matches the filter.
     * @param {OrganizationsFindUniqueArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationsFindUniqueArgs>(args: SelectSubset<T, OrganizationsFindUniqueArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organizations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationsFindUniqueOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationsFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsFindFirstArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationsFindFirstArgs>(args?: SelectSubset<T, OrganizationsFindFirstArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organizations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsFindFirstOrThrowArgs} args - Arguments to find a Organizations
     * @example
     * // Get one Organizations
     * const organizations = await prisma.organizations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationsFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organizations.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organizations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationsWithIdOnly = await prisma.organizations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationsFindManyArgs>(args?: SelectSubset<T, OrganizationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organizations.
     * @param {OrganizationsCreateArgs} args - Arguments to create a Organizations.
     * @example
     * // Create one Organizations
     * const Organizations = await prisma.organizations.create({
     *   data: {
     *     // ... data to create a Organizations
     *   }
     * })
     * 
     */
    create<T extends OrganizationsCreateArgs>(args: SelectSubset<T, OrganizationsCreateArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationsCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationsCreateManyArgs>(args?: SelectSubset<T, OrganizationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationsCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organizations = await prisma.organizations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationsWithIdOnly = await prisma.organizations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationsCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organizations.
     * @param {OrganizationsDeleteArgs} args - Arguments to delete one Organizations.
     * @example
     * // Delete one Organizations
     * const Organizations = await prisma.organizations.delete({
     *   where: {
     *     // ... filter to delete one Organizations
     *   }
     * })
     * 
     */
    delete<T extends OrganizationsDeleteArgs>(args: SelectSubset<T, OrganizationsDeleteArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organizations.
     * @param {OrganizationsUpdateArgs} args - Arguments to update one Organizations.
     * @example
     * // Update one Organizations
     * const organizations = await prisma.organizations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationsUpdateArgs>(args: SelectSubset<T, OrganizationsUpdateArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationsDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organizations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationsDeleteManyArgs>(args?: SelectSubset<T, OrganizationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationsUpdateManyArgs>(args: SelectSubset<T, OrganizationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationsUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organizations = await prisma.organizations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationsWithIdOnly = await prisma.organizations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationsUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organizations.
     * @param {OrganizationsUpsertArgs} args - Arguments to update or create a Organizations.
     * @example
     * // Update or create a Organizations
     * const organizations = await prisma.organizations.upsert({
     *   create: {
     *     // ... data to create a Organizations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organizations we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationsUpsertArgs>(args: SelectSubset<T, OrganizationsUpsertArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organizations.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationsCountArgs>(
      args?: Subset<T, OrganizationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationsAggregateArgs>(args: Subset<T, OrganizationsAggregateArgs>): Prisma.PrismaPromise<GetOrganizationsAggregateType<T>>

    /**
     * Group by Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationsGroupByArgs} args - Group by arguments.
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
      T extends OrganizationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationsGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organizations model
   */
  readonly fields: OrganizationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organizations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends Organizations$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, Organizations$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Organizations$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Organizations$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Organizations$notesArgs<ExtArgs> = {}>(args?: Subset<T, Organizations$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Organizations$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Organizations$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sent_invites<T extends Organizations$sent_invitesArgs<ExtArgs> = {}>(args?: Subset<T, Organizations$sent_invitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organizations model
   */
  interface OrganizationsFieldRefs {
    readonly id: FieldRef<"Organizations", 'String'>
    readonly name: FieldRef<"Organizations", 'String'>
    readonly pfp: FieldRef<"Organizations", 'Bytes'>
    readonly created_at: FieldRef<"Organizations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organizations findUnique
   */
  export type OrganizationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where: OrganizationsWhereUniqueInput
  }

  /**
   * Organizations findUniqueOrThrow
   */
  export type OrganizationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where: OrganizationsWhereUniqueInput
  }

  /**
   * Organizations findFirst
   */
  export type OrganizationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationsOrderByWithRelationInput | OrganizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * Organizations findFirstOrThrow
   */
  export type OrganizationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationsOrderByWithRelationInput | OrganizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * Organizations findMany
   */
  export type OrganizationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationsOrderByWithRelationInput | OrganizationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationsScalarFieldEnum | OrganizationsScalarFieldEnum[]
  }

  /**
   * Organizations create
   */
  export type OrganizationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Organizations.
     */
    data: XOR<OrganizationsCreateInput, OrganizationsUncheckedCreateInput>
  }

  /**
   * Organizations createMany
   */
  export type OrganizationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationsCreateManyInput | OrganizationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizations createManyAndReturn
   */
  export type OrganizationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationsCreateManyInput | OrganizationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organizations update
   */
  export type OrganizationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Organizations.
     */
    data: XOR<OrganizationsUpdateInput, OrganizationsUncheckedUpdateInput>
    /**
     * Choose, which Organizations to update.
     */
    where: OrganizationsWhereUniqueInput
  }

  /**
   * Organizations updateMany
   */
  export type OrganizationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationsUpdateManyMutationInput, OrganizationsUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationsWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organizations updateManyAndReturn
   */
  export type OrganizationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationsUpdateManyMutationInput, OrganizationsUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationsWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organizations upsert
   */
  export type OrganizationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Organizations to update in case it exists.
     */
    where: OrganizationsWhereUniqueInput
    /**
     * In case the Organizations found by the `where` argument doesn't exist, create a new Organizations with this data.
     */
    create: XOR<OrganizationsCreateInput, OrganizationsUncheckedCreateInput>
    /**
     * In case the Organizations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationsUpdateInput, OrganizationsUncheckedUpdateInput>
  }

  /**
   * Organizations delete
   */
  export type OrganizationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    /**
     * Filter which Organizations to delete.
     */
    where: OrganizationsWhereUniqueInput
  }

  /**
   * Organizations deleteMany
   */
  export type OrganizationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationsWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organizations.memberships
   */
  export type Organizations$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    where?: MembershipsWhereInput
    orderBy?: MembershipsOrderByWithRelationInput | MembershipsOrderByWithRelationInput[]
    cursor?: MembershipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * Organizations.tasks
   */
  export type Organizations$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Organizations.notes
   */
  export type Organizations$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    cursor?: NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Organizations.events
   */
  export type Organizations$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    cursor?: EventsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Organizations.sent_invites
   */
  export type Organizations$sent_invitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    where?: InvitationsWhereInput
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    cursor?: InvitationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Organizations without action
   */
  export type OrganizationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
  }


  /**
   * Model Memberships
   */

  export type AggregateMemberships = {
    _count: MembershipsCountAggregateOutputType | null
    _min: MembershipsMinAggregateOutputType | null
    _max: MembershipsMaxAggregateOutputType | null
  }

  export type MembershipsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    role: $Enums.Role | null
    joined_at: Date | null
  }

  export type MembershipsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    role: $Enums.Role | null
    joined_at: Date | null
  }

  export type MembershipsCountAggregateOutputType = {
    id: number
    user_id: number
    org_id: number
    role: number
    joined_at: number
    _all: number
  }


  export type MembershipsMinAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    role?: true
    joined_at?: true
  }

  export type MembershipsMaxAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    role?: true
    joined_at?: true
  }

  export type MembershipsCountAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    role?: true
    joined_at?: true
    _all?: true
  }

  export type MembershipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to aggregate.
     */
    where?: MembershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipsOrderByWithRelationInput | MembershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MembershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Memberships
    **/
    _count?: true | MembershipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipsMaxAggregateInputType
  }

  export type GetMembershipsAggregateType<T extends MembershipsAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberships[P]>
      : GetScalarType<T[P], AggregateMemberships[P]>
  }




  export type MembershipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MembershipsWhereInput
    orderBy?: MembershipsOrderByWithAggregationInput | MembershipsOrderByWithAggregationInput[]
    by: MembershipsScalarFieldEnum[] | MembershipsScalarFieldEnum
    having?: MembershipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipsCountAggregateInputType | true
    _min?: MembershipsMinAggregateInputType
    _max?: MembershipsMaxAggregateInputType
  }

  export type MembershipsGroupByOutputType = {
    id: string
    user_id: string
    org_id: string
    role: $Enums.Role
    joined_at: Date
    _count: MembershipsCountAggregateOutputType | null
    _min: MembershipsMinAggregateOutputType | null
    _max: MembershipsMaxAggregateOutputType | null
  }

  type GetMembershipsGroupByPayload<T extends MembershipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipsGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipsGroupByOutputType[P]>
        }
      >
    >


  export type MembershipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    role?: boolean
    joined_at?: boolean
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberships"]>

  export type MembershipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    role?: boolean
    joined_at?: boolean
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberships"]>

  export type MembershipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    role?: boolean
    joined_at?: boolean
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberships"]>

  export type MembershipsSelectScalar = {
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    role?: boolean
    joined_at?: boolean
  }

  export type MembershipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "org_id" | "role" | "joined_at", ExtArgs["result"]["memberships"]>
  export type MembershipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MembershipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type MembershipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MembershipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Memberships"
    objects: {
      org: Prisma.$OrganizationsPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      org_id: string
      role: $Enums.Role
      joined_at: Date
    }, ExtArgs["result"]["memberships"]>
    composites: {}
  }

  type MembershipsGetPayload<S extends boolean | null | undefined | MembershipsDefaultArgs> = $Result.GetResult<Prisma.$MembershipsPayload, S>

  type MembershipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MembershipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipsCountAggregateInputType | true
    }

  export interface MembershipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Memberships'], meta: { name: 'Memberships' } }
    /**
     * Find zero or one Memberships that matches the filter.
     * @param {MembershipsFindUniqueArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MembershipsFindUniqueArgs>(args: SelectSubset<T, MembershipsFindUniqueArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Memberships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MembershipsFindUniqueOrThrowArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MembershipsFindUniqueOrThrowArgs>(args: SelectSubset<T, MembershipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsFindFirstArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MembershipsFindFirstArgs>(args?: SelectSubset<T, MembershipsFindFirstArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Memberships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsFindFirstOrThrowArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MembershipsFindFirstOrThrowArgs>(args?: SelectSubset<T, MembershipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.memberships.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.memberships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipsWithIdOnly = await prisma.memberships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MembershipsFindManyArgs>(args?: SelectSubset<T, MembershipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Memberships.
     * @param {MembershipsCreateArgs} args - Arguments to create a Memberships.
     * @example
     * // Create one Memberships
     * const Memberships = await prisma.memberships.create({
     *   data: {
     *     // ... data to create a Memberships
     *   }
     * })
     * 
     */
    create<T extends MembershipsCreateArgs>(args: SelectSubset<T, MembershipsCreateArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Memberships.
     * @param {MembershipsCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const memberships = await prisma.memberships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MembershipsCreateManyArgs>(args?: SelectSubset<T, MembershipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {MembershipsCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const memberships = await prisma.memberships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `id`
     * const membershipsWithIdOnly = await prisma.memberships.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MembershipsCreateManyAndReturnArgs>(args?: SelectSubset<T, MembershipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Memberships.
     * @param {MembershipsDeleteArgs} args - Arguments to delete one Memberships.
     * @example
     * // Delete one Memberships
     * const Memberships = await prisma.memberships.delete({
     *   where: {
     *     // ... filter to delete one Memberships
     *   }
     * })
     * 
     */
    delete<T extends MembershipsDeleteArgs>(args: SelectSubset<T, MembershipsDeleteArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Memberships.
     * @param {MembershipsUpdateArgs} args - Arguments to update one Memberships.
     * @example
     * // Update one Memberships
     * const memberships = await prisma.memberships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MembershipsUpdateArgs>(args: SelectSubset<T, MembershipsUpdateArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Memberships.
     * @param {MembershipsDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.memberships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MembershipsDeleteManyArgs>(args?: SelectSubset<T, MembershipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const memberships = await prisma.memberships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MembershipsUpdateManyArgs>(args: SelectSubset<T, MembershipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships and returns the data updated in the database.
     * @param {MembershipsUpdateManyAndReturnArgs} args - Arguments to update many Memberships.
     * @example
     * // Update many Memberships
     * const memberships = await prisma.memberships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memberships and only return the `id`
     * const membershipsWithIdOnly = await prisma.memberships.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MembershipsUpdateManyAndReturnArgs>(args: SelectSubset<T, MembershipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Memberships.
     * @param {MembershipsUpsertArgs} args - Arguments to update or create a Memberships.
     * @example
     * // Update or create a Memberships
     * const memberships = await prisma.memberships.upsert({
     *   create: {
     *     // ... data to create a Memberships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memberships we want to update
     *   }
     * })
     */
    upsert<T extends MembershipsUpsertArgs>(args: SelectSubset<T, MembershipsUpsertArgs<ExtArgs>>): Prisma__MembershipsClient<$Result.GetResult<Prisma.$MembershipsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.memberships.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends MembershipsCountArgs>(
      args?: Subset<T, MembershipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MembershipsAggregateArgs>(args: Subset<T, MembershipsAggregateArgs>): Prisma.PrismaPromise<GetMembershipsAggregateType<T>>

    /**
     * Group by Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsGroupByArgs} args - Group by arguments.
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
      T extends MembershipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MembershipsGroupByArgs['orderBy'] }
        : { orderBy?: MembershipsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MembershipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Memberships model
   */
  readonly fields: MembershipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Memberships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MembershipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationsDefaultArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Memberships model
   */
  interface MembershipsFieldRefs {
    readonly id: FieldRef<"Memberships", 'String'>
    readonly user_id: FieldRef<"Memberships", 'String'>
    readonly org_id: FieldRef<"Memberships", 'String'>
    readonly role: FieldRef<"Memberships", 'Role'>
    readonly joined_at: FieldRef<"Memberships", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Memberships findUnique
   */
  export type MembershipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where: MembershipsWhereUniqueInput
  }

  /**
   * Memberships findUniqueOrThrow
   */
  export type MembershipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where: MembershipsWhereUniqueInput
  }

  /**
   * Memberships findFirst
   */
  export type MembershipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipsOrderByWithRelationInput | MembershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * Memberships findFirstOrThrow
   */
  export type MembershipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipsOrderByWithRelationInput | MembershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Memberships.
     */
    cursor?: MembershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Memberships.
     */
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * Memberships findMany
   */
  export type MembershipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * Filter, which Memberships to fetch.
     */
    where?: MembershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Memberships to fetch.
     */
    orderBy?: MembershipsOrderByWithRelationInput | MembershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Memberships.
     */
    cursor?: MembershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Memberships.
     */
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * Memberships create
   */
  export type MembershipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * The data needed to create a Memberships.
     */
    data: XOR<MembershipsCreateInput, MembershipsUncheckedCreateInput>
  }

  /**
   * Memberships createMany
   */
  export type MembershipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Memberships.
     */
    data: MembershipsCreateManyInput | MembershipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Memberships createManyAndReturn
   */
  export type MembershipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * The data used to create many Memberships.
     */
    data: MembershipsCreateManyInput | MembershipsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Memberships update
   */
  export type MembershipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * The data needed to update a Memberships.
     */
    data: XOR<MembershipsUpdateInput, MembershipsUncheckedUpdateInput>
    /**
     * Choose, which Memberships to update.
     */
    where: MembershipsWhereUniqueInput
  }

  /**
   * Memberships updateMany
   */
  export type MembershipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipsUpdateManyMutationInput, MembershipsUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipsWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
  }

  /**
   * Memberships updateManyAndReturn
   */
  export type MembershipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * The data used to update Memberships.
     */
    data: XOR<MembershipsUpdateManyMutationInput, MembershipsUncheckedUpdateManyInput>
    /**
     * Filter which Memberships to update
     */
    where?: MembershipsWhereInput
    /**
     * Limit how many Memberships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Memberships upsert
   */
  export type MembershipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * The filter to search for the Memberships to update in case it exists.
     */
    where: MembershipsWhereUniqueInput
    /**
     * In case the Memberships found by the `where` argument doesn't exist, create a new Memberships with this data.
     */
    create: XOR<MembershipsCreateInput, MembershipsUncheckedCreateInput>
    /**
     * In case the Memberships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MembershipsUpdateInput, MembershipsUncheckedUpdateInput>
  }

  /**
   * Memberships delete
   */
  export type MembershipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
    /**
     * Filter which Memberships to delete.
     */
    where: MembershipsWhereUniqueInput
  }

  /**
   * Memberships deleteMany
   */
  export type MembershipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Memberships to delete
     */
    where?: MembershipsWhereInput
    /**
     * Limit how many Memberships to delete.
     */
    limit?: number
  }

  /**
   * Memberships without action
   */
  export type MembershipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Memberships
     */
    select?: MembershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Memberships
     */
    omit?: MembershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MembershipsInclude<ExtArgs> | null
  }


  /**
   * Model Tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    title: string | null
    content: string | null
    deadline: Date | null
    completed_at: Date | null
    created_at: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    title: string | null
    content: string | null
    deadline: Date | null
    completed_at: Date | null
    created_at: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    user_id: number
    org_id: number
    title: number
    content: number
    deadline: number
    completed_at: number
    created_at: number
    _all: number
  }


  export type TasksMinAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    title?: true
    content?: true
    deadline?: true
    completed_at?: true
    created_at?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    title?: true
    content?: true
    deadline?: true
    completed_at?: true
    created_at?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    title?: true
    content?: true
    deadline?: true
    completed_at?: true
    created_at?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to aggregate.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type TasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithAggregationInput | TasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: TasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: string
    user_id: string
    org_id: string
    title: string
    content: string | null
    deadline: Date | null
    completed_at: Date | null
    created_at: Date
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends TasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type TasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    deadline?: boolean
    completed_at?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    deadline?: boolean
    completed_at?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    deadline?: boolean
    completed_at?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectScalar = {
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    deadline?: boolean
    completed_at?: boolean
    created_at?: boolean
  }

  export type TasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "org_id" | "title" | "content" | "deadline" | "completed_at" | "created_at", ExtArgs["result"]["tasks"]>
  export type TasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }
  export type TasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }
  export type TasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }

  export type $TasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasks"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      org: Prisma.$OrganizationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      org_id: string
      title: string
      content: string | null
      deadline: Date | null
      completed_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type TasksGetPayload<S extends boolean | null | undefined | TasksDefaultArgs> = $Result.GetResult<Prisma.$TasksPayload, S>

  type TasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface TasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tasks'], meta: { name: 'Tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {TasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasksFindUniqueArgs>(args: SelectSubset<T, TasksFindUniqueArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasksFindUniqueOrThrowArgs>(args: SelectSubset<T, TasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasksFindFirstArgs>(args?: SelectSubset<T, TasksFindFirstArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasksFindFirstOrThrowArgs>(args?: SelectSubset<T, TasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasksFindManyArgs>(args?: SelectSubset<T, TasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {TasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends TasksCreateArgs>(args: SelectSubset<T, TasksCreateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasksCreateManyArgs>(args?: SelectSubset<T, TasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasksCreateManyAndReturnArgs>(args?: SelectSubset<T, TasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {TasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends TasksDeleteArgs>(args: SelectSubset<T, TasksDeleteArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {TasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasksUpdateArgs>(args: SelectSubset<T, TasksUpdateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasksDeleteManyArgs>(args?: SelectSubset<T, TasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasksUpdateManyArgs>(args: SelectSubset<T, TasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TasksUpdateManyAndReturnArgs>(args: SelectSubset<T, TasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {TasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends TasksUpsertArgs>(args: SelectSubset<T, TasksUpsertArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TasksCountArgs>(
      args?: Subset<T, TasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksGroupByArgs} args - Group by arguments.
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
      T extends TasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksGroupByArgs['orderBy'] }
        : { orderBy?: TasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tasks model
   */
  readonly fields: TasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    org<T extends OrganizationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationsDefaultArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tasks model
   */
  interface TasksFieldRefs {
    readonly id: FieldRef<"Tasks", 'String'>
    readonly user_id: FieldRef<"Tasks", 'String'>
    readonly org_id: FieldRef<"Tasks", 'String'>
    readonly title: FieldRef<"Tasks", 'String'>
    readonly content: FieldRef<"Tasks", 'String'>
    readonly deadline: FieldRef<"Tasks", 'DateTime'>
    readonly completed_at: FieldRef<"Tasks", 'DateTime'>
    readonly created_at: FieldRef<"Tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tasks findUnique
   */
  export type TasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findUniqueOrThrow
   */
  export type TasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findFirst
   */
  export type TasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findFirstOrThrow
   */
  export type TasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findMany
   */
  export type TasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks create
   */
  export type TasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tasks.
     */
    data: XOR<TasksCreateInput, TasksUncheckedCreateInput>
  }

  /**
   * Tasks createMany
   */
  export type TasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasks createManyAndReturn
   */
  export type TasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks update
   */
  export type TasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tasks.
     */
    data: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
    /**
     * Choose, which Tasks to update.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks updateMany
   */
  export type TasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Tasks updateManyAndReturn
   */
  export type TasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks upsert
   */
  export type TasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tasks to update in case it exists.
     */
    where: TasksWhereUniqueInput
    /**
     * In case the Tasks found by the `where` argument doesn't exist, create a new Tasks with this data.
     */
    create: XOR<TasksCreateInput, TasksUncheckedCreateInput>
    /**
     * In case the Tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
  }

  /**
   * Tasks delete
   */
  export type TasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter which Tasks to delete.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks deleteMany
   */
  export type TasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Tasks without action
   */
  export type TasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
  }


  /**
   * Model Notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    title: string | null
    content: string | null
    remind_at: Date | null
    created_at: Date | null
  }

  export type NotesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    org_id: string | null
    title: string | null
    content: string | null
    remind_at: Date | null
    created_at: Date | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    user_id: number
    org_id: number
    title: number
    content: number
    remind_at: number
    created_at: number
    _all: number
  }


  export type NotesMinAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    title?: true
    content?: true
    remind_at?: true
    created_at?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    title?: true
    content?: true
    remind_at?: true
    created_at?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    user_id?: true
    org_id?: true
    title?: true
    content?: true
    remind_at?: true
    created_at?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to aggregate.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithAggregationInput | NotesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: string
    user_id: string
    org_id: string | null
    title: string
    content: string
    remind_at: Date | null
    created_at: Date
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    remind_at?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | Notes$orgArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    remind_at?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | Notes$orgArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    remind_at?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | Notes$orgArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>

  export type NotesSelectScalar = {
    id?: boolean
    user_id?: boolean
    org_id?: boolean
    title?: boolean
    content?: boolean
    remind_at?: boolean
    created_at?: boolean
  }

  export type NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "org_id" | "title" | "content" | "remind_at" | "created_at", ExtArgs["result"]["notes"]>
  export type NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | Notes$orgArgs<ExtArgs>
  }
  export type NotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | Notes$orgArgs<ExtArgs>
  }
  export type NotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | Notes$orgArgs<ExtArgs>
  }

  export type $NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notes"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      org: Prisma.$OrganizationsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      org_id: string | null
      title: string
      content: string
      remind_at: Date | null
      created_at: Date
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type NotesGetPayload<S extends boolean | null | undefined | NotesDefaultArgs> = $Result.GetResult<Prisma.$NotesPayload, S>

  type NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notes'], meta: { name: 'Notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {NotesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotesFindUniqueArgs>(args: SelectSubset<T, NotesFindUniqueArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotesFindFirstArgs>(args?: SelectSubset<T, NotesFindFirstArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotesFindManyArgs>(args?: SelectSubset<T, NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notes.
     * @param {NotesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends NotesCreateArgs>(args: SelectSubset<T, NotesCreateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {NotesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotesCreateManyArgs>(args?: SelectSubset<T, NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NotesCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotesCreateManyAndReturnArgs>(args?: SelectSubset<T, NotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notes.
     * @param {NotesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends NotesDeleteArgs>(args: SelectSubset<T, NotesDeleteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notes.
     * @param {NotesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotesUpdateArgs>(args: SelectSubset<T, NotesUpdateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {NotesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotesDeleteManyArgs>(args?: SelectSubset<T, NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotesUpdateManyArgs>(args: SelectSubset<T, NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {NotesUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const notesWithIdOnly = await prisma.notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotesUpdateManyAndReturnArgs>(args: SelectSubset<T, NotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notes.
     * @param {NotesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends NotesUpsertArgs>(args: SelectSubset<T, NotesUpsertArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NotesCountArgs>(
      args?: Subset<T, NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesGroupByArgs} args - Group by arguments.
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
      T extends NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotesGroupByArgs['orderBy'] }
        : { orderBy?: NotesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notes model
   */
  readonly fields: NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    org<T extends Notes$orgArgs<ExtArgs> = {}>(args?: Subset<T, Notes$orgArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notes model
   */
  interface NotesFieldRefs {
    readonly id: FieldRef<"Notes", 'String'>
    readonly user_id: FieldRef<"Notes", 'String'>
    readonly org_id: FieldRef<"Notes", 'String'>
    readonly title: FieldRef<"Notes", 'String'>
    readonly content: FieldRef<"Notes", 'String'>
    readonly remind_at: FieldRef<"Notes", 'DateTime'>
    readonly created_at: FieldRef<"Notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notes findUnique
   */
  export type NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findUniqueOrThrow
   */
  export type NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findFirst
   */
  export type NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findFirstOrThrow
   */
  export type NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findMany
   */
  export type NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes create
   */
  export type NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Notes.
     */
    data: XOR<NotesCreateInput, NotesUncheckedCreateInput>
  }

  /**
   * Notes createMany
   */
  export type NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notes createManyAndReturn
   */
  export type NotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notes update
   */
  export type NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Notes.
     */
    data: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
    /**
     * Choose, which Notes to update.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes updateMany
   */
  export type NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
  }

  /**
   * Notes updateManyAndReturn
   */
  export type NotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notes upsert
   */
  export type NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Notes to update in case it exists.
     */
    where: NotesWhereUniqueInput
    /**
     * In case the Notes found by the `where` argument doesn't exist, create a new Notes with this data.
     */
    create: XOR<NotesCreateInput, NotesUncheckedCreateInput>
    /**
     * In case the Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
  }

  /**
   * Notes delete
   */
  export type NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter which Notes to delete.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes deleteMany
   */
  export type NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NotesWhereInput
    /**
     * Limit how many Notes to delete.
     */
    limit?: number
  }

  /**
   * Notes.org
   */
  export type Notes$orgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organizations
     */
    select?: OrganizationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organizations
     */
    omit?: OrganizationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationsInclude<ExtArgs> | null
    where?: OrganizationsWhereInput
  }

  /**
   * Notes without action
   */
  export type NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notes
     */
    omit?: NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
  }


  /**
   * Model Events
   */

  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    name: string | null
    date: Date | null
    event_type: $Enums.Role | null
    content: string | null
    start_time: Date | null
    end_time: Date | null
    created_at: Date | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    name: string | null
    date: Date | null
    event_type: $Enums.Role | null
    content: string | null
    start_time: Date | null
    end_time: Date | null
    created_at: Date | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    org_id: number
    name: number
    date: number
    event_type: number
    content: number
    start_time: number
    end_time: number
    created_at: number
    _all: number
  }


  export type EventsMinAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    date?: true
    event_type?: true
    content?: true
    start_time?: true
    end_time?: true
    created_at?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    date?: true
    event_type?: true
    content?: true
    start_time?: true
    end_time?: true
    created_at?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    org_id?: true
    name?: true
    date?: true
    event_type?: true
    content?: true
    start_time?: true
    end_time?: true
    created_at?: true
    _all?: true
  }

  export type EventsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventsWhereInput
    orderBy?: EventsOrderByWithAggregationInput | EventsOrderByWithAggregationInput[]
    by: EventsScalarFieldEnum[] | EventsScalarFieldEnum
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }

  export type EventsGroupByOutputType = {
    id: string
    org_id: string
    name: string
    date: Date
    event_type: $Enums.Role
    content: string | null
    start_time: Date | null
    end_time: Date | null
    created_at: Date
    _count: EventsCountAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    name?: boolean
    date?: boolean
    event_type?: boolean
    content?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    name?: boolean
    date?: boolean
    event_type?: boolean
    content?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    name?: boolean
    date?: boolean
    event_type?: boolean
    content?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["events"]>

  export type EventsSelectScalar = {
    id?: boolean
    org_id?: boolean
    name?: boolean
    date?: boolean
    event_type?: boolean
    content?: boolean
    start_time?: boolean
    end_time?: boolean
    created_at?: boolean
  }

  export type EventsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "name" | "date" | "event_type" | "content" | "start_time" | "end_time" | "created_at", ExtArgs["result"]["events"]>
  export type EventsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }
  export type EventsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }
  export type EventsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }

  export type $EventsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Events"
    objects: {
      org: Prisma.$OrganizationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      name: string
      date: Date
      event_type: $Enums.Role
      content: string | null
      start_time: Date | null
      end_time: Date | null
      created_at: Date
    }, ExtArgs["result"]["events"]>
    composites: {}
  }

  type EventsGetPayload<S extends boolean | null | undefined | EventsDefaultArgs> = $Result.GetResult<Prisma.$EventsPayload, S>

  type EventsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Events'], meta: { name: 'Events' } }
    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventsFindUniqueArgs>(args: SelectSubset<T, EventsFindUniqueArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Events that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventsFindFirstArgs>(args?: SelectSubset<T, EventsFindFirstArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Events that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventsFindManyArgs>(args?: SelectSubset<T, EventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
     */
    create<T extends EventsCreateArgs>(args: SelectSubset<T, EventsCreateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventsCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventsCreateManyArgs>(args?: SelectSubset<T, EventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventsCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const events = await prisma.events.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
     */
    delete<T extends EventsDeleteArgs>(args: SelectSubset<T, EventsDeleteArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventsUpdateArgs>(args: SelectSubset<T, EventsUpdateArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventsDeleteManyArgs>(args?: SelectSubset<T, EventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventsUpdateManyArgs>(args: SelectSubset<T, EventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventsUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventsWithIdOnly = await prisma.events.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
     */
    upsert<T extends EventsUpsertArgs>(args: SelectSubset<T, EventsUpsertArgs<ExtArgs>>): Prisma__EventsClient<$Result.GetResult<Prisma.$EventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
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
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Events model
   */
  readonly fields: EventsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    org<T extends OrganizationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationsDefaultArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Events model
   */
  interface EventsFieldRefs {
    readonly id: FieldRef<"Events", 'String'>
    readonly org_id: FieldRef<"Events", 'String'>
    readonly name: FieldRef<"Events", 'String'>
    readonly date: FieldRef<"Events", 'DateTime'>
    readonly event_type: FieldRef<"Events", 'Role'>
    readonly content: FieldRef<"Events", 'String'>
    readonly start_time: FieldRef<"Events", 'DateTime'>
    readonly end_time: FieldRef<"Events", 'DateTime'>
    readonly created_at: FieldRef<"Events", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Events findUnique
   */
  export type EventsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findFirst
   */
  export type EventsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events findMany
   */
  export type EventsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventsOrderByWithRelationInput | EventsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventsScalarFieldEnum | EventsScalarFieldEnum[]
  }

  /**
   * Events create
   */
  export type EventsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }

  /**
   * Events createMany
   */
  export type EventsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Events createManyAndReturn
   */
  export type EventsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventsCreateManyInput | EventsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events update
   */
  export type EventsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Events updateManyAndReturn
   */
  export type EventsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Events upsert
   */
  export type EventsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }

  /**
   * Events delete
   */
  export type EventsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Events without action
   */
  export type EventsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Events
     */
    omit?: EventsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventsInclude<ExtArgs> | null
  }


  /**
   * Model Invitations
   */

  export type AggregateInvitations = {
    _count: InvitationsCountAggregateOutputType | null
    _min: InvitationsMinAggregateOutputType | null
    _max: InvitationsMaxAggregateOutputType | null
  }

  export type InvitationsMinAggregateOutputType = {
    id: string | null
    org_id: string | null
    email: string | null
    role: $Enums.Role | null
    token: string | null
    accepted_at: Date | null
    expires_at: Date | null
    invited_by: string | null
    created_at: Date | null
  }

  export type InvitationsMaxAggregateOutputType = {
    id: string | null
    org_id: string | null
    email: string | null
    role: $Enums.Role | null
    token: string | null
    accepted_at: Date | null
    expires_at: Date | null
    invited_by: string | null
    created_at: Date | null
  }

  export type InvitationsCountAggregateOutputType = {
    id: number
    org_id: number
    email: number
    role: number
    token: number
    accepted_at: number
    expires_at: number
    invited_by: number
    created_at: number
    _all: number
  }


  export type InvitationsMinAggregateInputType = {
    id?: true
    org_id?: true
    email?: true
    role?: true
    token?: true
    accepted_at?: true
    expires_at?: true
    invited_by?: true
    created_at?: true
  }

  export type InvitationsMaxAggregateInputType = {
    id?: true
    org_id?: true
    email?: true
    role?: true
    token?: true
    accepted_at?: true
    expires_at?: true
    invited_by?: true
    created_at?: true
  }

  export type InvitationsCountAggregateInputType = {
    id?: true
    org_id?: true
    email?: true
    role?: true
    token?: true
    accepted_at?: true
    expires_at?: true
    invited_by?: true
    created_at?: true
    _all?: true
  }

  export type InvitationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to aggregate.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationsMaxAggregateInputType
  }

  export type GetInvitationsAggregateType<T extends InvitationsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitations[P]>
      : GetScalarType<T[P], AggregateInvitations[P]>
  }




  export type InvitationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationsWhereInput
    orderBy?: InvitationsOrderByWithAggregationInput | InvitationsOrderByWithAggregationInput[]
    by: InvitationsScalarFieldEnum[] | InvitationsScalarFieldEnum
    having?: InvitationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationsCountAggregateInputType | true
    _min?: InvitationsMinAggregateInputType
    _max?: InvitationsMaxAggregateInputType
  }

  export type InvitationsGroupByOutputType = {
    id: string
    org_id: string
    email: string
    role: $Enums.Role
    token: string
    accepted_at: Date | null
    expires_at: Date
    invited_by: string
    created_at: Date
    _count: InvitationsCountAggregateOutputType | null
    _min: InvitationsMinAggregateOutputType | null
    _max: InvitationsMaxAggregateOutputType | null
  }

  type GetInvitationsGroupByPayload<T extends InvitationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationsGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationsGroupByOutputType[P]>
        }
      >
    >


  export type InvitationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    accepted_at?: boolean
    expires_at?: boolean
    invited_by?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitations"]>

  export type InvitationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    accepted_at?: boolean
    expires_at?: boolean
    invited_by?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitations"]>

  export type InvitationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    org_id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    accepted_at?: boolean
    expires_at?: boolean
    invited_by?: boolean
    created_at?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitations"]>

  export type InvitationsSelectScalar = {
    id?: boolean
    org_id?: boolean
    email?: boolean
    role?: boolean
    token?: boolean
    accepted_at?: boolean
    expires_at?: boolean
    invited_by?: boolean
    created_at?: boolean
  }

  export type InvitationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "org_id" | "email" | "role" | "token" | "accepted_at" | "expires_at" | "invited_by" | "created_at", ExtArgs["result"]["invitations"]>
  export type InvitationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }
  export type InvitationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }
  export type InvitationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    org?: boolean | OrganizationsDefaultArgs<ExtArgs>
  }

  export type $InvitationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitations"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      org: Prisma.$OrganizationsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      org_id: string
      email: string
      role: $Enums.Role
      token: string
      accepted_at: Date | null
      expires_at: Date
      invited_by: string
      created_at: Date
    }, ExtArgs["result"]["invitations"]>
    composites: {}
  }

  type InvitationsGetPayload<S extends boolean | null | undefined | InvitationsDefaultArgs> = $Result.GetResult<Prisma.$InvitationsPayload, S>

  type InvitationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationsCountAggregateInputType | true
    }

  export interface InvitationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitations'], meta: { name: 'Invitations' } }
    /**
     * Find zero or one Invitations that matches the filter.
     * @param {InvitationsFindUniqueArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationsFindUniqueArgs>(args: SelectSubset<T, InvitationsFindUniqueArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationsFindUniqueOrThrowArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationsFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsFindFirstArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationsFindFirstArgs>(args?: SelectSubset<T, InvitationsFindFirstArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsFindFirstOrThrowArgs} args - Arguments to find a Invitations
     * @example
     * // Get one Invitations
     * const invitations = await prisma.invitations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationsFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitations.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationsWithIdOnly = await prisma.invitations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationsFindManyArgs>(args?: SelectSubset<T, InvitationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitations.
     * @param {InvitationsCreateArgs} args - Arguments to create a Invitations.
     * @example
     * // Create one Invitations
     * const Invitations = await prisma.invitations.create({
     *   data: {
     *     // ... data to create a Invitations
     *   }
     * })
     * 
     */
    create<T extends InvitationsCreateArgs>(args: SelectSubset<T, InvitationsCreateArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationsCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitations = await prisma.invitations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationsCreateManyArgs>(args?: SelectSubset<T, InvitationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationsCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitations = await prisma.invitations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationsWithIdOnly = await prisma.invitations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationsCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitations.
     * @param {InvitationsDeleteArgs} args - Arguments to delete one Invitations.
     * @example
     * // Delete one Invitations
     * const Invitations = await prisma.invitations.delete({
     *   where: {
     *     // ... filter to delete one Invitations
     *   }
     * })
     * 
     */
    delete<T extends InvitationsDeleteArgs>(args: SelectSubset<T, InvitationsDeleteArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitations.
     * @param {InvitationsUpdateArgs} args - Arguments to update one Invitations.
     * @example
     * // Update one Invitations
     * const invitations = await prisma.invitations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationsUpdateArgs>(args: SelectSubset<T, InvitationsUpdateArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationsDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationsDeleteManyArgs>(args?: SelectSubset<T, InvitationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitations = await prisma.invitations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationsUpdateManyArgs>(args: SelectSubset<T, InvitationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationsUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitations = await prisma.invitations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationsWithIdOnly = await prisma.invitations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationsUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitations.
     * @param {InvitationsUpsertArgs} args - Arguments to update or create a Invitations.
     * @example
     * // Update or create a Invitations
     * const invitations = await prisma.invitations.upsert({
     *   create: {
     *     // ... data to create a Invitations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitations we want to update
     *   }
     * })
     */
    upsert<T extends InvitationsUpsertArgs>(args: SelectSubset<T, InvitationsUpsertArgs<ExtArgs>>): Prisma__InvitationsClient<$Result.GetResult<Prisma.$InvitationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitations.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationsCountArgs>(
      args?: Subset<T, InvitationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationsAggregateArgs>(args: Subset<T, InvitationsAggregateArgs>): Prisma.PrismaPromise<GetInvitationsAggregateType<T>>

    /**
     * Group by Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationsGroupByArgs} args - Group by arguments.
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
      T extends InvitationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationsGroupByArgs['orderBy'] }
        : { orderBy?: InvitationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitations model
   */
  readonly fields: InvitationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    org<T extends OrganizationsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationsDefaultArgs<ExtArgs>>): Prisma__OrganizationsClient<$Result.GetResult<Prisma.$OrganizationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invitations model
   */
  interface InvitationsFieldRefs {
    readonly id: FieldRef<"Invitations", 'String'>
    readonly org_id: FieldRef<"Invitations", 'String'>
    readonly email: FieldRef<"Invitations", 'String'>
    readonly role: FieldRef<"Invitations", 'Role'>
    readonly token: FieldRef<"Invitations", 'String'>
    readonly accepted_at: FieldRef<"Invitations", 'DateTime'>
    readonly expires_at: FieldRef<"Invitations", 'DateTime'>
    readonly invited_by: FieldRef<"Invitations", 'String'>
    readonly created_at: FieldRef<"Invitations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitations findUnique
   */
  export type InvitationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations findUniqueOrThrow
   */
  export type InvitationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations findFirst
   */
  export type InvitationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Invitations findFirstOrThrow
   */
  export type InvitationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Invitations findMany
   */
  export type InvitationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationsOrderByWithRelationInput | InvitationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationsScalarFieldEnum | InvitationsScalarFieldEnum[]
  }

  /**
   * Invitations create
   */
  export type InvitationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitations.
     */
    data: XOR<InvitationsCreateInput, InvitationsUncheckedCreateInput>
  }

  /**
   * Invitations createMany
   */
  export type InvitationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationsCreateManyInput | InvitationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitations createManyAndReturn
   */
  export type InvitationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationsCreateManyInput | InvitationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitations update
   */
  export type InvitationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitations.
     */
    data: XOR<InvitationsUpdateInput, InvitationsUncheckedUpdateInput>
    /**
     * Choose, which Invitations to update.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations updateMany
   */
  export type InvitationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationsUpdateManyMutationInput, InvitationsUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationsWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitations updateManyAndReturn
   */
  export type InvitationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationsUpdateManyMutationInput, InvitationsUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationsWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitations upsert
   */
  export type InvitationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitations to update in case it exists.
     */
    where: InvitationsWhereUniqueInput
    /**
     * In case the Invitations found by the `where` argument doesn't exist, create a new Invitations with this data.
     */
    create: XOR<InvitationsCreateInput, InvitationsUncheckedCreateInput>
    /**
     * In case the Invitations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationsUpdateInput, InvitationsUncheckedUpdateInput>
  }

  /**
   * Invitations delete
   */
  export type InvitationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
    /**
     * Filter which Invitations to delete.
     */
    where: InvitationsWhereUniqueInput
  }

  /**
   * Invitations deleteMany
   */
  export type InvitationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationsWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitations without action
   */
  export type InvitationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitations
     */
    select?: InvitationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitations
     */
    omit?: InvitationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationsInclude<ExtArgs> | null
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


  export const SessionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    expires_at: 'expires_at',
    created_at: 'created_at',
    last_used: 'last_used'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    password: 'password',
    phone_number: 'phone_number',
    pfp: 'pfp',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OrganizationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    pfp: 'pfp',
    created_at: 'created_at'
  };

  export type OrganizationsScalarFieldEnum = (typeof OrganizationsScalarFieldEnum)[keyof typeof OrganizationsScalarFieldEnum]


  export const MembershipsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    org_id: 'org_id',
    role: 'role',
    joined_at: 'joined_at'
  };

  export type MembershipsScalarFieldEnum = (typeof MembershipsScalarFieldEnum)[keyof typeof MembershipsScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    org_id: 'org_id',
    title: 'title',
    content: 'content',
    deadline: 'deadline',
    completed_at: 'completed_at',
    created_at: 'created_at'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const NotesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    org_id: 'org_id',
    title: 'title',
    content: 'content',
    remind_at: 'remind_at',
    created_at: 'created_at'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    name: 'name',
    date: 'date',
    event_type: 'event_type',
    content: 'content',
    start_time: 'start_time',
    end_time: 'end_time',
    created_at: 'created_at'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const InvitationsScalarFieldEnum: {
    id: 'id',
    org_id: 'org_id',
    email: 'email',
    role: 'role',
    token: 'token',
    accepted_at: 'accepted_at',
    expires_at: 'expires_at',
    invited_by: 'invited_by',
    created_at: 'created_at'
  };

  export type InvitationsScalarFieldEnum = (typeof InvitationsScalarFieldEnum)[keyof typeof InvitationsScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    id?: UuidFilter<"Sessions"> | string
    user_id?: UuidFilter<"Sessions"> | string
    expires_at?: DateTimeFilter<"Sessions"> | Date | string
    created_at?: DateTimeFilter<"Sessions"> | Date | string
    last_used?: DateTimeNullableFilter<"Sessions"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type SessionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    last_used?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    user_id?: UuidFilter<"Sessions"> | string
    expires_at?: DateTimeFilter<"Sessions"> | Date | string
    created_at?: DateTimeFilter<"Sessions"> | Date | string
    last_used?: DateTimeNullableFilter<"Sessions"> | Date | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type SessionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    last_used?: SortOrderInput | SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Sessions"> | string
    user_id?: UuidWithAggregatesFilter<"Sessions"> | string
    expires_at?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
    last_used?: DateTimeNullableWithAggregatesFilter<"Sessions"> | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: UuidFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone_number?: StringNullableFilter<"Users"> | string | null
    pfp?: BytesNullableFilter<"Users"> | Bytes | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    session?: SessionsListRelationFilter
    memberships?: MembershipsListRelationFilter
    tasks?: TasksListRelationFilter
    notes?: NotesListRelationFilter
    sent_invites?: InvitationsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    pfp?: SortOrderInput | SortOrder
    created_at?: SortOrder
    session?: SessionsOrderByRelationAggregateInput
    memberships?: MembershipsOrderByRelationAggregateInput
    tasks?: TasksOrderByRelationAggregateInput
    notes?: NotesOrderByRelationAggregateInput
    sent_invites?: InvitationsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    first_name?: StringFilter<"Users"> | string
    last_name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    phone_number?: StringNullableFilter<"Users"> | string | null
    pfp?: BytesNullableFilter<"Users"> | Bytes | null
    created_at?: DateTimeFilter<"Users"> | Date | string
    session?: SessionsListRelationFilter
    memberships?: MembershipsListRelationFilter
    tasks?: TasksListRelationFilter
    notes?: NotesListRelationFilter
    sent_invites?: InvitationsListRelationFilter
  }, "id" | "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    pfp?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    first_name?: StringWithAggregatesFilter<"Users"> | string
    last_name?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    phone_number?: StringNullableWithAggregatesFilter<"Users"> | string | null
    pfp?: BytesNullableWithAggregatesFilter<"Users"> | Bytes | null
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type OrganizationsWhereInput = {
    AND?: OrganizationsWhereInput | OrganizationsWhereInput[]
    OR?: OrganizationsWhereInput[]
    NOT?: OrganizationsWhereInput | OrganizationsWhereInput[]
    id?: UuidFilter<"Organizations"> | string
    name?: StringFilter<"Organizations"> | string
    pfp?: BytesNullableFilter<"Organizations"> | Bytes | null
    created_at?: DateTimeFilter<"Organizations"> | Date | string
    memberships?: MembershipsListRelationFilter
    tasks?: TasksListRelationFilter
    notes?: NotesListRelationFilter
    events?: EventsListRelationFilter
    sent_invites?: InvitationsListRelationFilter
  }

  export type OrganizationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pfp?: SortOrderInput | SortOrder
    created_at?: SortOrder
    memberships?: MembershipsOrderByRelationAggregateInput
    tasks?: TasksOrderByRelationAggregateInput
    notes?: NotesOrderByRelationAggregateInput
    events?: EventsOrderByRelationAggregateInput
    sent_invites?: InvitationsOrderByRelationAggregateInput
  }

  export type OrganizationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationsWhereInput | OrganizationsWhereInput[]
    OR?: OrganizationsWhereInput[]
    NOT?: OrganizationsWhereInput | OrganizationsWhereInput[]
    name?: StringFilter<"Organizations"> | string
    pfp?: BytesNullableFilter<"Organizations"> | Bytes | null
    created_at?: DateTimeFilter<"Organizations"> | Date | string
    memberships?: MembershipsListRelationFilter
    tasks?: TasksListRelationFilter
    notes?: NotesListRelationFilter
    events?: EventsListRelationFilter
    sent_invites?: InvitationsListRelationFilter
  }, "id" | "id">

  export type OrganizationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    pfp?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: OrganizationsCountOrderByAggregateInput
    _max?: OrganizationsMaxOrderByAggregateInput
    _min?: OrganizationsMinOrderByAggregateInput
  }

  export type OrganizationsScalarWhereWithAggregatesInput = {
    AND?: OrganizationsScalarWhereWithAggregatesInput | OrganizationsScalarWhereWithAggregatesInput[]
    OR?: OrganizationsScalarWhereWithAggregatesInput[]
    NOT?: OrganizationsScalarWhereWithAggregatesInput | OrganizationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Organizations"> | string
    name?: StringWithAggregatesFilter<"Organizations"> | string
    pfp?: BytesNullableWithAggregatesFilter<"Organizations"> | Bytes | null
    created_at?: DateTimeWithAggregatesFilter<"Organizations"> | Date | string
  }

  export type MembershipsWhereInput = {
    AND?: MembershipsWhereInput | MembershipsWhereInput[]
    OR?: MembershipsWhereInput[]
    NOT?: MembershipsWhereInput | MembershipsWhereInput[]
    id?: UuidFilter<"Memberships"> | string
    user_id?: UuidFilter<"Memberships"> | string
    org_id?: UuidFilter<"Memberships"> | string
    role?: EnumRoleFilter<"Memberships"> | $Enums.Role
    joined_at?: DateTimeFilter<"Memberships"> | Date | string
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MembershipsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    org?: OrganizationsOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type MembershipsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MembershipsWhereInput | MembershipsWhereInput[]
    OR?: MembershipsWhereInput[]
    NOT?: MembershipsWhereInput | MembershipsWhereInput[]
    user_id?: UuidFilter<"Memberships"> | string
    org_id?: UuidFilter<"Memberships"> | string
    role?: EnumRoleFilter<"Memberships"> | $Enums.Role
    joined_at?: DateTimeFilter<"Memberships"> | Date | string
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "id">

  export type MembershipsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
    _count?: MembershipsCountOrderByAggregateInput
    _max?: MembershipsMaxOrderByAggregateInput
    _min?: MembershipsMinOrderByAggregateInput
  }

  export type MembershipsScalarWhereWithAggregatesInput = {
    AND?: MembershipsScalarWhereWithAggregatesInput | MembershipsScalarWhereWithAggregatesInput[]
    OR?: MembershipsScalarWhereWithAggregatesInput[]
    NOT?: MembershipsScalarWhereWithAggregatesInput | MembershipsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Memberships"> | string
    user_id?: UuidWithAggregatesFilter<"Memberships"> | string
    org_id?: UuidWithAggregatesFilter<"Memberships"> | string
    role?: EnumRoleWithAggregatesFilter<"Memberships"> | $Enums.Role
    joined_at?: DateTimeWithAggregatesFilter<"Memberships"> | Date | string
  }

  export type TasksWhereInput = {
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    id?: UuidFilter<"Tasks"> | string
    user_id?: UuidFilter<"Tasks"> | string
    org_id?: UuidFilter<"Tasks"> | string
    title?: StringFilter<"Tasks"> | string
    content?: StringNullableFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    created_at?: DateTimeFilter<"Tasks"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
  }

  export type TasksOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    org?: OrganizationsOrderByWithRelationInput
  }

  export type TasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    user_id?: UuidFilter<"Tasks"> | string
    org_id?: UuidFilter<"Tasks"> | string
    title?: StringFilter<"Tasks"> | string
    content?: StringNullableFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    created_at?: DateTimeFilter<"Tasks"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
  }, "id" | "id">

  export type TasksOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: TasksCountOrderByAggregateInput
    _max?: TasksMaxOrderByAggregateInput
    _min?: TasksMinOrderByAggregateInput
  }

  export type TasksScalarWhereWithAggregatesInput = {
    AND?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    OR?: TasksScalarWhereWithAggregatesInput[]
    NOT?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Tasks"> | string
    user_id?: UuidWithAggregatesFilter<"Tasks"> | string
    org_id?: UuidWithAggregatesFilter<"Tasks"> | string
    title?: StringWithAggregatesFilter<"Tasks"> | string
    content?: StringNullableWithAggregatesFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"Tasks"> | Date | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"Tasks"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Tasks"> | Date | string
  }

  export type NotesWhereInput = {
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    id?: UuidFilter<"Notes"> | string
    user_id?: UuidFilter<"Notes"> | string
    org_id?: UuidNullableFilter<"Notes"> | string | null
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    remind_at?: DateTimeNullableFilter<"Notes"> | Date | string | null
    created_at?: DateTimeFilter<"Notes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    org?: XOR<OrganizationsNullableScalarRelationFilter, OrganizationsWhereInput> | null
  }

  export type NotesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    remind_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    org?: OrganizationsOrderByWithRelationInput
  }

  export type NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    user_id?: UuidFilter<"Notes"> | string
    org_id?: UuidNullableFilter<"Notes"> | string | null
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    remind_at?: DateTimeNullableFilter<"Notes"> | Date | string | null
    created_at?: DateTimeFilter<"Notes"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    org?: XOR<OrganizationsNullableScalarRelationFilter, OrganizationsWhereInput> | null
  }, "id" | "id">

  export type NotesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    remind_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: NotesCountOrderByAggregateInput
    _max?: NotesMaxOrderByAggregateInput
    _min?: NotesMinOrderByAggregateInput
  }

  export type NotesScalarWhereWithAggregatesInput = {
    AND?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    OR?: NotesScalarWhereWithAggregatesInput[]
    NOT?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Notes"> | string
    user_id?: UuidWithAggregatesFilter<"Notes"> | string
    org_id?: UuidNullableWithAggregatesFilter<"Notes"> | string | null
    title?: StringWithAggregatesFilter<"Notes"> | string
    content?: StringWithAggregatesFilter<"Notes"> | string
    remind_at?: DateTimeNullableWithAggregatesFilter<"Notes"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Notes"> | Date | string
  }

  export type EventsWhereInput = {
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    id?: UuidFilter<"Events"> | string
    org_id?: UuidFilter<"Events"> | string
    name?: StringFilter<"Events"> | string
    date?: DateTimeFilter<"Events"> | Date | string
    event_type?: EnumRoleFilter<"Events"> | $Enums.Role
    content?: StringNullableFilter<"Events"> | string | null
    start_time?: DateTimeNullableFilter<"Events"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Events"> | Date | string | null
    created_at?: DateTimeFilter<"Events"> | Date | string
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    event_type?: SortOrder
    content?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    org?: OrganizationsOrderByWithRelationInput
  }

  export type EventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventsWhereInput | EventsWhereInput[]
    OR?: EventsWhereInput[]
    NOT?: EventsWhereInput | EventsWhereInput[]
    org_id?: UuidFilter<"Events"> | string
    name?: StringFilter<"Events"> | string
    date?: DateTimeFilter<"Events"> | Date | string
    event_type?: EnumRoleFilter<"Events"> | $Enums.Role
    content?: StringNullableFilter<"Events"> | string | null
    start_time?: DateTimeNullableFilter<"Events"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Events"> | Date | string | null
    created_at?: DateTimeFilter<"Events"> | Date | string
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
  }, "id" | "id">

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    event_type?: SortOrder
    content?: SortOrderInput | SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    OR?: EventsScalarWhereWithAggregatesInput[]
    NOT?: EventsScalarWhereWithAggregatesInput | EventsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Events"> | string
    org_id?: UuidWithAggregatesFilter<"Events"> | string
    name?: StringWithAggregatesFilter<"Events"> | string
    date?: DateTimeWithAggregatesFilter<"Events"> | Date | string
    event_type?: EnumRoleWithAggregatesFilter<"Events"> | $Enums.Role
    content?: StringNullableWithAggregatesFilter<"Events"> | string | null
    start_time?: DateTimeNullableWithAggregatesFilter<"Events"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"Events"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Events"> | Date | string
  }

  export type InvitationsWhereInput = {
    AND?: InvitationsWhereInput | InvitationsWhereInput[]
    OR?: InvitationsWhereInput[]
    NOT?: InvitationsWhereInput | InvitationsWhereInput[]
    id?: UuidFilter<"Invitations"> | string
    org_id?: UuidFilter<"Invitations"> | string
    email?: StringFilter<"Invitations"> | string
    role?: EnumRoleFilter<"Invitations"> | $Enums.Role
    token?: UuidFilter<"Invitations"> | string
    accepted_at?: DateTimeNullableFilter<"Invitations"> | Date | string | null
    expires_at?: DateTimeFilter<"Invitations"> | Date | string
    invited_by?: UuidFilter<"Invitations"> | string
    created_at?: DateTimeFilter<"Invitations"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
  }

  export type InvitationsOrderByWithRelationInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    invited_by?: SortOrder
    created_at?: SortOrder
    user?: UsersOrderByWithRelationInput
    org?: OrganizationsOrderByWithRelationInput
  }

  export type InvitationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvitationsWhereInput | InvitationsWhereInput[]
    OR?: InvitationsWhereInput[]
    NOT?: InvitationsWhereInput | InvitationsWhereInput[]
    org_id?: UuidFilter<"Invitations"> | string
    email?: StringFilter<"Invitations"> | string
    role?: EnumRoleFilter<"Invitations"> | $Enums.Role
    token?: UuidFilter<"Invitations"> | string
    accepted_at?: DateTimeNullableFilter<"Invitations"> | Date | string | null
    expires_at?: DateTimeFilter<"Invitations"> | Date | string
    invited_by?: UuidFilter<"Invitations"> | string
    created_at?: DateTimeFilter<"Invitations"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    org?: XOR<OrganizationsScalarRelationFilter, OrganizationsWhereInput>
  }, "id" | "id">

  export type InvitationsOrderByWithAggregationInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    invited_by?: SortOrder
    created_at?: SortOrder
    _count?: InvitationsCountOrderByAggregateInput
    _max?: InvitationsMaxOrderByAggregateInput
    _min?: InvitationsMinOrderByAggregateInput
  }

  export type InvitationsScalarWhereWithAggregatesInput = {
    AND?: InvitationsScalarWhereWithAggregatesInput | InvitationsScalarWhereWithAggregatesInput[]
    OR?: InvitationsScalarWhereWithAggregatesInput[]
    NOT?: InvitationsScalarWhereWithAggregatesInput | InvitationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Invitations"> | string
    org_id?: UuidWithAggregatesFilter<"Invitations"> | string
    email?: StringWithAggregatesFilter<"Invitations"> | string
    role?: EnumRoleWithAggregatesFilter<"Invitations"> | $Enums.Role
    token?: UuidWithAggregatesFilter<"Invitations"> | string
    accepted_at?: DateTimeNullableWithAggregatesFilter<"Invitations"> | Date | string | null
    expires_at?: DateTimeWithAggregatesFilter<"Invitations"> | Date | string
    invited_by?: UuidWithAggregatesFilter<"Invitations"> | string
    created_at?: DateTimeWithAggregatesFilter<"Invitations"> | Date | string
  }

  export type SessionsCreateInput = {
    id: string
    expires_at: Date | string
    created_at?: Date | string
    last_used?: Date | string | null
    user: UsersCreateNestedOneWithoutSessionInput
  }

  export type SessionsUncheckedCreateInput = {
    id: string
    user_id: string
    expires_at: Date | string
    created_at?: Date | string
    last_used?: Date | string | null
  }

  export type SessionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UsersUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsCreateManyInput = {
    id: string
    user_id: string
    expires_at: Date | string
    created_at?: Date | string
    last_used?: Date | string | null
  }

  export type SessionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsCreateNestedManyWithoutUserInput
    memberships?: MembershipsCreateNestedManyWithoutUserInput
    tasks?: TasksCreateNestedManyWithoutUserInput
    notes?: NotesCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    memberships?: MembershipsUncheckedCreateNestedManyWithoutUserInput
    tasks?: TasksUncheckedCreateNestedManyWithoutUserInput
    notes?: NotesUncheckedCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUpdateManyWithoutUserNestedInput
    tasks?: TasksUpdateManyWithoutUserNestedInput
    notes?: NotesUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutUserNestedInput
    notes?: NotesUncheckedUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationsCreateInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsCreateNestedManyWithoutOrgInput
    tasks?: TasksCreateNestedManyWithoutOrgInput
    notes?: NotesCreateNestedManyWithoutOrgInput
    events?: EventsCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsUncheckedCreateInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TasksUncheckedCreateNestedManyWithoutOrgInput
    notes?: NotesUncheckedCreateNestedManyWithoutOrgInput
    events?: EventsUncheckedCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUpdateManyWithoutOrgNestedInput
    tasks?: TasksUpdateManyWithoutOrgNestedInput
    notes?: NotesUpdateManyWithoutOrgNestedInput
    events?: EventsUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutOrgNestedInput
    notes?: NotesUncheckedUpdateManyWithoutOrgNestedInput
    events?: EventsUncheckedUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsCreateManyInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
  }

  export type OrganizationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipsCreateInput = {
    id?: string
    role?: $Enums.Role
    joined_at?: Date | string
    org: OrganizationsCreateNestedOneWithoutMembershipsInput
    user: UsersCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipsUncheckedCreateInput = {
    id?: string
    user_id: string
    org_id: string
    role?: $Enums.Role
    joined_at?: Date | string
  }

  export type MembershipsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationsUpdateOneRequiredWithoutMembershipsNestedInput
    user?: UsersUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipsCreateManyInput = {
    id?: string
    user_id: string
    org_id: string
    role?: $Enums.Role
    joined_at?: Date | string
  }

  export type MembershipsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksCreateInput = {
    id?: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutTasksInput
    org: OrganizationsCreateNestedOneWithoutTasksInput
  }

  export type TasksUncheckedCreateInput = {
    id?: string
    user_id: string
    org_id: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
  }

  export type TasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTasksNestedInput
    org?: OrganizationsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksCreateManyInput = {
    id?: string
    user_id: string
    org_id: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
  }

  export type TasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesCreateInput = {
    id?: string
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutNotesInput
    org?: OrganizationsCreateNestedOneWithoutNotesInput
  }

  export type NotesUncheckedCreateInput = {
    id?: string
    user_id: string
    org_id?: string | null
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
  }

  export type NotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutNotesNestedInput
    org?: OrganizationsUpdateOneWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesCreateManyInput = {
    id?: string
    user_id: string
    org_id?: string | null
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
  }

  export type NotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateInput = {
    id?: string
    name: string
    date: Date | string
    event_type?: $Enums.Role
    content?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    created_at?: Date | string
    org: OrganizationsCreateNestedOneWithoutEventsInput
  }

  export type EventsUncheckedCreateInput = {
    id?: string
    org_id: string
    name: string
    date: Date | string
    event_type?: $Enums.Role
    content?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    created_at?: Date | string
  }

  export type EventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationsUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsCreateManyInput = {
    id?: string
    org_id: string
    name: string
    date: Date | string
    event_type?: $Enums.Role
    content?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    created_at?: Date | string
  }

  export type EventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationsCreateInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutSent_invitesInput
    org: OrganizationsCreateNestedOneWithoutSent_invitesInput
  }

  export type InvitationsUncheckedCreateInput = {
    id?: string
    org_id: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    invited_by: string
    created_at?: Date | string
  }

  export type InvitationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSent_invitesNestedInput
    org?: OrganizationsUpdateOneRequiredWithoutSent_invitesNestedInput
  }

  export type InvitationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationsCreateManyInput = {
    id?: string
    org_id: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    invited_by: string
    created_at?: Date | string
  }

  export type InvitationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    last_used?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    last_used?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    expires_at?: SortOrder
    created_at?: SortOrder
    last_used?: SortOrder
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
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
  }

  export type SessionsListRelationFilter = {
    every?: SessionsWhereInput
    some?: SessionsWhereInput
    none?: SessionsWhereInput
  }

  export type MembershipsListRelationFilter = {
    every?: MembershipsWhereInput
    some?: MembershipsWhereInput
    none?: MembershipsWhereInput
  }

  export type TasksListRelationFilter = {
    every?: TasksWhereInput
    some?: TasksWhereInput
    none?: TasksWhereInput
  }

  export type NotesListRelationFilter = {
    every?: NotesWhereInput
    some?: NotesWhereInput
    none?: NotesWhereInput
  }

  export type InvitationsListRelationFilter = {
    every?: InvitationsWhereInput
    some?: InvitationsWhereInput
    none?: InvitationsWhereInput
  }

  export type SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MembershipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    pfp?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    pfp?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    pfp?: SortOrder
    created_at?: SortOrder
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
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type EventsListRelationFilter = {
    every?: EventsWhereInput
    some?: EventsWhereInput
    none?: EventsWhereInput
  }

  export type EventsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    created_at?: SortOrder
  }

  export type OrganizationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    created_at?: SortOrder
  }

  export type OrganizationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    pfp?: SortOrder
    created_at?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type OrganizationsScalarRelationFilter = {
    is?: OrganizationsWhereInput
    isNot?: OrganizationsWhereInput
  }

  export type MembershipsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type MembershipsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type MembershipsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    role?: SortOrder
    joined_at?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type TasksCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type TasksMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type TasksMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    deadline?: SortOrder
    completed_at?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type OrganizationsNullableScalarRelationFilter = {
    is?: OrganizationsWhereInput | null
    isNot?: OrganizationsWhereInput | null
  }

  export type NotesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    remind_at?: SortOrder
    created_at?: SortOrder
  }

  export type NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    remind_at?: SortOrder
    created_at?: SortOrder
  }

  export type NotesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    org_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    remind_at?: SortOrder
    created_at?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    event_type?: SortOrder
    content?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    event_type?: SortOrder
    content?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    event_type?: SortOrder
    content?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    created_at?: SortOrder
  }

  export type InvitationsCountOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    accepted_at?: SortOrder
    expires_at?: SortOrder
    invited_by?: SortOrder
    created_at?: SortOrder
  }

  export type InvitationsMaxOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    accepted_at?: SortOrder
    expires_at?: SortOrder
    invited_by?: SortOrder
    created_at?: SortOrder
  }

  export type InvitationsMinOrderByAggregateInput = {
    id?: SortOrder
    org_id?: SortOrder
    email?: SortOrder
    role?: SortOrder
    token?: SortOrder
    accepted_at?: SortOrder
    expires_at?: SortOrder
    invited_by?: SortOrder
    created_at?: SortOrder
  }

  export type UsersCreateNestedOneWithoutSessionInput = {
    create?: XOR<UsersCreateWithoutSessionInput, UsersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSessionInput
    connect?: UsersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsersUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UsersCreateWithoutSessionInput, UsersUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSessionInput
    upsert?: UsersUpsertWithoutSessionInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSessionInput, UsersUpdateWithoutSessionInput>, UsersUncheckedUpdateWithoutSessionInput>
  }

  export type SessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type MembershipsCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipsCreateWithoutUserInput, MembershipsUncheckedCreateWithoutUserInput> | MembershipsCreateWithoutUserInput[] | MembershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutUserInput | MembershipsCreateOrConnectWithoutUserInput[]
    createMany?: MembershipsCreateManyUserInputEnvelope
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
  }

  export type TasksCreateNestedManyWithoutUserInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type NotesCreateNestedManyWithoutUserInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type InvitationsCreateNestedManyWithoutUserInput = {
    create?: XOR<InvitationsCreateWithoutUserInput, InvitationsUncheckedCreateWithoutUserInput> | InvitationsCreateWithoutUserInput[] | InvitationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutUserInput | InvitationsCreateOrConnectWithoutUserInput[]
    createMany?: InvitationsCreateManyUserInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type MembershipsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MembershipsCreateWithoutUserInput, MembershipsUncheckedCreateWithoutUserInput> | MembershipsCreateWithoutUserInput[] | MembershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutUserInput | MembershipsCreateOrConnectWithoutUserInput[]
    createMany?: MembershipsCreateManyUserInputEnvelope
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type NotesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type InvitationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<InvitationsCreateWithoutUserInput, InvitationsUncheckedCreateWithoutUserInput> | InvitationsCreateWithoutUserInput[] | InvitationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutUserInput | InvitationsCreateOrConnectWithoutUserInput[]
    createMany?: InvitationsCreateManyUserInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Bytes | null
  }

  export type SessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type MembershipsUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipsCreateWithoutUserInput, MembershipsUncheckedCreateWithoutUserInput> | MembershipsCreateWithoutUserInput[] | MembershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutUserInput | MembershipsCreateOrConnectWithoutUserInput[]
    upsert?: MembershipsUpsertWithWhereUniqueWithoutUserInput | MembershipsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipsCreateManyUserInputEnvelope
    set?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    disconnect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    delete?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    update?: MembershipsUpdateWithWhereUniqueWithoutUserInput | MembershipsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipsUpdateManyWithWhereWithoutUserInput | MembershipsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipsScalarWhereInput | MembershipsScalarWhereInput[]
  }

  export type TasksUpdateManyWithoutUserNestedInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutUserInput | TasksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutUserInput | TasksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutUserInput | TasksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type NotesUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutUserInput | NotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutUserInput | NotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutUserInput | NotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type InvitationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvitationsCreateWithoutUserInput, InvitationsUncheckedCreateWithoutUserInput> | InvitationsCreateWithoutUserInput[] | InvitationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutUserInput | InvitationsCreateOrConnectWithoutUserInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutUserInput | InvitationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvitationsCreateManyUserInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutUserInput | InvitationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutUserInput | InvitationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type MembershipsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MembershipsCreateWithoutUserInput, MembershipsUncheckedCreateWithoutUserInput> | MembershipsCreateWithoutUserInput[] | MembershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutUserInput | MembershipsCreateOrConnectWithoutUserInput[]
    upsert?: MembershipsUpsertWithWhereUniqueWithoutUserInput | MembershipsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MembershipsCreateManyUserInputEnvelope
    set?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    disconnect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    delete?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    update?: MembershipsUpdateWithWhereUniqueWithoutUserInput | MembershipsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MembershipsUpdateManyWithWhereWithoutUserInput | MembershipsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MembershipsScalarWhereInput | MembershipsScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutUserInput | TasksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutUserInput | TasksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutUserInput | TasksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type NotesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput> | NotesCreateWithoutUserInput[] | NotesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutUserInput | NotesCreateOrConnectWithoutUserInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutUserInput | NotesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotesCreateManyUserInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutUserInput | NotesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutUserInput | NotesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type InvitationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<InvitationsCreateWithoutUserInput, InvitationsUncheckedCreateWithoutUserInput> | InvitationsCreateWithoutUserInput[] | InvitationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutUserInput | InvitationsCreateOrConnectWithoutUserInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutUserInput | InvitationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: InvitationsCreateManyUserInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutUserInput | InvitationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutUserInput | InvitationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type MembershipsCreateNestedManyWithoutOrgInput = {
    create?: XOR<MembershipsCreateWithoutOrgInput, MembershipsUncheckedCreateWithoutOrgInput> | MembershipsCreateWithoutOrgInput[] | MembershipsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutOrgInput | MembershipsCreateOrConnectWithoutOrgInput[]
    createMany?: MembershipsCreateManyOrgInputEnvelope
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
  }

  export type TasksCreateNestedManyWithoutOrgInput = {
    create?: XOR<TasksCreateWithoutOrgInput, TasksUncheckedCreateWithoutOrgInput> | TasksCreateWithoutOrgInput[] | TasksUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutOrgInput | TasksCreateOrConnectWithoutOrgInput[]
    createMany?: TasksCreateManyOrgInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type NotesCreateNestedManyWithoutOrgInput = {
    create?: XOR<NotesCreateWithoutOrgInput, NotesUncheckedCreateWithoutOrgInput> | NotesCreateWithoutOrgInput[] | NotesUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutOrgInput | NotesCreateOrConnectWithoutOrgInput[]
    createMany?: NotesCreateManyOrgInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type EventsCreateNestedManyWithoutOrgInput = {
    create?: XOR<EventsCreateWithoutOrgInput, EventsUncheckedCreateWithoutOrgInput> | EventsCreateWithoutOrgInput[] | EventsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutOrgInput | EventsCreateOrConnectWithoutOrgInput[]
    createMany?: EventsCreateManyOrgInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type InvitationsCreateNestedManyWithoutOrgInput = {
    create?: XOR<InvitationsCreateWithoutOrgInput, InvitationsUncheckedCreateWithoutOrgInput> | InvitationsCreateWithoutOrgInput[] | InvitationsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutOrgInput | InvitationsCreateOrConnectWithoutOrgInput[]
    createMany?: InvitationsCreateManyOrgInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type MembershipsUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<MembershipsCreateWithoutOrgInput, MembershipsUncheckedCreateWithoutOrgInput> | MembershipsCreateWithoutOrgInput[] | MembershipsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutOrgInput | MembershipsCreateOrConnectWithoutOrgInput[]
    createMany?: MembershipsCreateManyOrgInputEnvelope
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<TasksCreateWithoutOrgInput, TasksUncheckedCreateWithoutOrgInput> | TasksCreateWithoutOrgInput[] | TasksUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutOrgInput | TasksCreateOrConnectWithoutOrgInput[]
    createMany?: TasksCreateManyOrgInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type NotesUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<NotesCreateWithoutOrgInput, NotesUncheckedCreateWithoutOrgInput> | NotesCreateWithoutOrgInput[] | NotesUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutOrgInput | NotesCreateOrConnectWithoutOrgInput[]
    createMany?: NotesCreateManyOrgInputEnvelope
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
  }

  export type EventsUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<EventsCreateWithoutOrgInput, EventsUncheckedCreateWithoutOrgInput> | EventsCreateWithoutOrgInput[] | EventsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutOrgInput | EventsCreateOrConnectWithoutOrgInput[]
    createMany?: EventsCreateManyOrgInputEnvelope
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
  }

  export type InvitationsUncheckedCreateNestedManyWithoutOrgInput = {
    create?: XOR<InvitationsCreateWithoutOrgInput, InvitationsUncheckedCreateWithoutOrgInput> | InvitationsCreateWithoutOrgInput[] | InvitationsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutOrgInput | InvitationsCreateOrConnectWithoutOrgInput[]
    createMany?: InvitationsCreateManyOrgInputEnvelope
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
  }

  export type MembershipsUpdateManyWithoutOrgNestedInput = {
    create?: XOR<MembershipsCreateWithoutOrgInput, MembershipsUncheckedCreateWithoutOrgInput> | MembershipsCreateWithoutOrgInput[] | MembershipsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutOrgInput | MembershipsCreateOrConnectWithoutOrgInput[]
    upsert?: MembershipsUpsertWithWhereUniqueWithoutOrgInput | MembershipsUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: MembershipsCreateManyOrgInputEnvelope
    set?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    disconnect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    delete?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    update?: MembershipsUpdateWithWhereUniqueWithoutOrgInput | MembershipsUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: MembershipsUpdateManyWithWhereWithoutOrgInput | MembershipsUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: MembershipsScalarWhereInput | MembershipsScalarWhereInput[]
  }

  export type TasksUpdateManyWithoutOrgNestedInput = {
    create?: XOR<TasksCreateWithoutOrgInput, TasksUncheckedCreateWithoutOrgInput> | TasksCreateWithoutOrgInput[] | TasksUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutOrgInput | TasksCreateOrConnectWithoutOrgInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutOrgInput | TasksUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: TasksCreateManyOrgInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutOrgInput | TasksUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutOrgInput | TasksUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type NotesUpdateManyWithoutOrgNestedInput = {
    create?: XOR<NotesCreateWithoutOrgInput, NotesUncheckedCreateWithoutOrgInput> | NotesCreateWithoutOrgInput[] | NotesUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutOrgInput | NotesCreateOrConnectWithoutOrgInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutOrgInput | NotesUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: NotesCreateManyOrgInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutOrgInput | NotesUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutOrgInput | NotesUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type EventsUpdateManyWithoutOrgNestedInput = {
    create?: XOR<EventsCreateWithoutOrgInput, EventsUncheckedCreateWithoutOrgInput> | EventsCreateWithoutOrgInput[] | EventsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutOrgInput | EventsCreateOrConnectWithoutOrgInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutOrgInput | EventsUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: EventsCreateManyOrgInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutOrgInput | EventsUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutOrgInput | EventsUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type InvitationsUpdateManyWithoutOrgNestedInput = {
    create?: XOR<InvitationsCreateWithoutOrgInput, InvitationsUncheckedCreateWithoutOrgInput> | InvitationsCreateWithoutOrgInput[] | InvitationsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutOrgInput | InvitationsCreateOrConnectWithoutOrgInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutOrgInput | InvitationsUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: InvitationsCreateManyOrgInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutOrgInput | InvitationsUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutOrgInput | InvitationsUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type MembershipsUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<MembershipsCreateWithoutOrgInput, MembershipsUncheckedCreateWithoutOrgInput> | MembershipsCreateWithoutOrgInput[] | MembershipsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: MembershipsCreateOrConnectWithoutOrgInput | MembershipsCreateOrConnectWithoutOrgInput[]
    upsert?: MembershipsUpsertWithWhereUniqueWithoutOrgInput | MembershipsUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: MembershipsCreateManyOrgInputEnvelope
    set?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    disconnect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    delete?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    connect?: MembershipsWhereUniqueInput | MembershipsWhereUniqueInput[]
    update?: MembershipsUpdateWithWhereUniqueWithoutOrgInput | MembershipsUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: MembershipsUpdateManyWithWhereWithoutOrgInput | MembershipsUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: MembershipsScalarWhereInput | MembershipsScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<TasksCreateWithoutOrgInput, TasksUncheckedCreateWithoutOrgInput> | TasksCreateWithoutOrgInput[] | TasksUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutOrgInput | TasksCreateOrConnectWithoutOrgInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutOrgInput | TasksUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: TasksCreateManyOrgInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutOrgInput | TasksUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutOrgInput | TasksUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type NotesUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<NotesCreateWithoutOrgInput, NotesUncheckedCreateWithoutOrgInput> | NotesCreateWithoutOrgInput[] | NotesUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: NotesCreateOrConnectWithoutOrgInput | NotesCreateOrConnectWithoutOrgInput[]
    upsert?: NotesUpsertWithWhereUniqueWithoutOrgInput | NotesUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: NotesCreateManyOrgInputEnvelope
    set?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    disconnect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    delete?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    connect?: NotesWhereUniqueInput | NotesWhereUniqueInput[]
    update?: NotesUpdateWithWhereUniqueWithoutOrgInput | NotesUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: NotesUpdateManyWithWhereWithoutOrgInput | NotesUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: NotesScalarWhereInput | NotesScalarWhereInput[]
  }

  export type EventsUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<EventsCreateWithoutOrgInput, EventsUncheckedCreateWithoutOrgInput> | EventsCreateWithoutOrgInput[] | EventsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: EventsCreateOrConnectWithoutOrgInput | EventsCreateOrConnectWithoutOrgInput[]
    upsert?: EventsUpsertWithWhereUniqueWithoutOrgInput | EventsUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: EventsCreateManyOrgInputEnvelope
    set?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    disconnect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    delete?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    connect?: EventsWhereUniqueInput | EventsWhereUniqueInput[]
    update?: EventsUpdateWithWhereUniqueWithoutOrgInput | EventsUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: EventsUpdateManyWithWhereWithoutOrgInput | EventsUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: EventsScalarWhereInput | EventsScalarWhereInput[]
  }

  export type InvitationsUncheckedUpdateManyWithoutOrgNestedInput = {
    create?: XOR<InvitationsCreateWithoutOrgInput, InvitationsUncheckedCreateWithoutOrgInput> | InvitationsCreateWithoutOrgInput[] | InvitationsUncheckedCreateWithoutOrgInput[]
    connectOrCreate?: InvitationsCreateOrConnectWithoutOrgInput | InvitationsCreateOrConnectWithoutOrgInput[]
    upsert?: InvitationsUpsertWithWhereUniqueWithoutOrgInput | InvitationsUpsertWithWhereUniqueWithoutOrgInput[]
    createMany?: InvitationsCreateManyOrgInputEnvelope
    set?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    disconnect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    delete?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    connect?: InvitationsWhereUniqueInput | InvitationsWhereUniqueInput[]
    update?: InvitationsUpdateWithWhereUniqueWithoutOrgInput | InvitationsUpdateWithWhereUniqueWithoutOrgInput[]
    updateMany?: InvitationsUpdateManyWithWhereWithoutOrgInput | InvitationsUpdateManyWithWhereWithoutOrgInput[]
    deleteMany?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
  }

  export type OrganizationsCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<OrganizationsCreateWithoutMembershipsInput, OrganizationsUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutMembershipsInput
    connect?: OrganizationsWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UsersCreateWithoutMembershipsInput, UsersUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMembershipsInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type OrganizationsUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<OrganizationsCreateWithoutMembershipsInput, OrganizationsUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutMembershipsInput
    upsert?: OrganizationsUpsertWithoutMembershipsInput
    connect?: OrganizationsWhereUniqueInput
    update?: XOR<XOR<OrganizationsUpdateToOneWithWhereWithoutMembershipsInput, OrganizationsUpdateWithoutMembershipsInput>, OrganizationsUncheckedUpdateWithoutMembershipsInput>
  }

  export type UsersUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UsersCreateWithoutMembershipsInput, UsersUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMembershipsInput
    upsert?: UsersUpsertWithoutMembershipsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMembershipsInput, UsersUpdateWithoutMembershipsInput>, UsersUncheckedUpdateWithoutMembershipsInput>
  }

  export type UsersCreateNestedOneWithoutTasksInput = {
    create?: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTasksInput
    connect?: UsersWhereUniqueInput
  }

  export type OrganizationsCreateNestedOneWithoutTasksInput = {
    create?: XOR<OrganizationsCreateWithoutTasksInput, OrganizationsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutTasksInput
    connect?: OrganizationsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTasksInput
    upsert?: UsersUpsertWithoutTasksInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTasksInput, UsersUpdateWithoutTasksInput>, UsersUncheckedUpdateWithoutTasksInput>
  }

  export type OrganizationsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<OrganizationsCreateWithoutTasksInput, OrganizationsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutTasksInput
    upsert?: OrganizationsUpsertWithoutTasksInput
    connect?: OrganizationsWhereUniqueInput
    update?: XOR<XOR<OrganizationsUpdateToOneWithWhereWithoutTasksInput, OrganizationsUpdateWithoutTasksInput>, OrganizationsUncheckedUpdateWithoutTasksInput>
  }

  export type UsersCreateNestedOneWithoutNotesInput = {
    create?: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotesInput
    connect?: UsersWhereUniqueInput
  }

  export type OrganizationsCreateNestedOneWithoutNotesInput = {
    create?: XOR<OrganizationsCreateWithoutNotesInput, OrganizationsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutNotesInput
    connect?: OrganizationsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutNotesInput
    upsert?: UsersUpsertWithoutNotesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutNotesInput, UsersUpdateWithoutNotesInput>, UsersUncheckedUpdateWithoutNotesInput>
  }

  export type OrganizationsUpdateOneWithoutNotesNestedInput = {
    create?: XOR<OrganizationsCreateWithoutNotesInput, OrganizationsUncheckedCreateWithoutNotesInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutNotesInput
    upsert?: OrganizationsUpsertWithoutNotesInput
    disconnect?: OrganizationsWhereInput | boolean
    delete?: OrganizationsWhereInput | boolean
    connect?: OrganizationsWhereUniqueInput
    update?: XOR<XOR<OrganizationsUpdateToOneWithWhereWithoutNotesInput, OrganizationsUpdateWithoutNotesInput>, OrganizationsUncheckedUpdateWithoutNotesInput>
  }

  export type OrganizationsCreateNestedOneWithoutEventsInput = {
    create?: XOR<OrganizationsCreateWithoutEventsInput, OrganizationsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutEventsInput
    connect?: OrganizationsWhereUniqueInput
  }

  export type OrganizationsUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<OrganizationsCreateWithoutEventsInput, OrganizationsUncheckedCreateWithoutEventsInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutEventsInput
    upsert?: OrganizationsUpsertWithoutEventsInput
    connect?: OrganizationsWhereUniqueInput
    update?: XOR<XOR<OrganizationsUpdateToOneWithWhereWithoutEventsInput, OrganizationsUpdateWithoutEventsInput>, OrganizationsUncheckedUpdateWithoutEventsInput>
  }

  export type UsersCreateNestedOneWithoutSent_invitesInput = {
    create?: XOR<UsersCreateWithoutSent_invitesInput, UsersUncheckedCreateWithoutSent_invitesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSent_invitesInput
    connect?: UsersWhereUniqueInput
  }

  export type OrganizationsCreateNestedOneWithoutSent_invitesInput = {
    create?: XOR<OrganizationsCreateWithoutSent_invitesInput, OrganizationsUncheckedCreateWithoutSent_invitesInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutSent_invitesInput
    connect?: OrganizationsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutSent_invitesNestedInput = {
    create?: XOR<UsersCreateWithoutSent_invitesInput, UsersUncheckedCreateWithoutSent_invitesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSent_invitesInput
    upsert?: UsersUpsertWithoutSent_invitesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSent_invitesInput, UsersUpdateWithoutSent_invitesInput>, UsersUncheckedUpdateWithoutSent_invitesInput>
  }

  export type OrganizationsUpdateOneRequiredWithoutSent_invitesNestedInput = {
    create?: XOR<OrganizationsCreateWithoutSent_invitesInput, OrganizationsUncheckedCreateWithoutSent_invitesInput>
    connectOrCreate?: OrganizationsCreateOrConnectWithoutSent_invitesInput
    upsert?: OrganizationsUpsertWithoutSent_invitesInput
    connect?: OrganizationsWhereUniqueInput
    update?: XOR<XOR<OrganizationsUpdateToOneWithWhereWithoutSent_invitesInput, OrganizationsUpdateWithoutSent_invitesInput>, OrganizationsUncheckedUpdateWithoutSent_invitesInput>
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
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Bytes | null
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

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel> | null
    in?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Bytes[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Bytes | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersCreateWithoutSessionInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsCreateNestedManyWithoutUserInput
    tasks?: TasksCreateNestedManyWithoutUserInput
    notes?: NotesCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSessionInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsUncheckedCreateNestedManyWithoutUserInput
    tasks?: TasksUncheckedCreateNestedManyWithoutUserInput
    notes?: NotesUncheckedCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSessionInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSessionInput, UsersUncheckedCreateWithoutSessionInput>
  }

  export type UsersUpsertWithoutSessionInput = {
    update: XOR<UsersUpdateWithoutSessionInput, UsersUncheckedUpdateWithoutSessionInput>
    create: XOR<UsersCreateWithoutSessionInput, UsersUncheckedCreateWithoutSessionInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSessionInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSessionInput, UsersUncheckedUpdateWithoutSessionInput>
  }

  export type UsersUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUpdateManyWithoutUserNestedInput
    tasks?: TasksUpdateManyWithoutUserNestedInput
    notes?: NotesUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutUserNestedInput
    notes?: NotesUncheckedUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionsCreateWithoutUserInput = {
    id: string
    expires_at: Date | string
    created_at?: Date | string
    last_used?: Date | string | null
  }

  export type SessionsUncheckedCreateWithoutUserInput = {
    id: string
    expires_at: Date | string
    created_at?: Date | string
    last_used?: Date | string | null
  }

  export type SessionsCreateOrConnectWithoutUserInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsCreateManyUserInputEnvelope = {
    data: SessionsCreateManyUserInput | SessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MembershipsCreateWithoutUserInput = {
    id?: string
    role?: $Enums.Role
    joined_at?: Date | string
    org: OrganizationsCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipsUncheckedCreateWithoutUserInput = {
    id?: string
    org_id: string
    role?: $Enums.Role
    joined_at?: Date | string
  }

  export type MembershipsCreateOrConnectWithoutUserInput = {
    where: MembershipsWhereUniqueInput
    create: XOR<MembershipsCreateWithoutUserInput, MembershipsUncheckedCreateWithoutUserInput>
  }

  export type MembershipsCreateManyUserInputEnvelope = {
    data: MembershipsCreateManyUserInput | MembershipsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TasksCreateWithoutUserInput = {
    id?: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
    org: OrganizationsCreateNestedOneWithoutTasksInput
  }

  export type TasksUncheckedCreateWithoutUserInput = {
    id?: string
    org_id: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
  }

  export type TasksCreateOrConnectWithoutUserInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput>
  }

  export type TasksCreateManyUserInputEnvelope = {
    data: TasksCreateManyUserInput | TasksCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotesCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
    org?: OrganizationsCreateNestedOneWithoutNotesInput
  }

  export type NotesUncheckedCreateWithoutUserInput = {
    id?: string
    org_id?: string | null
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
  }

  export type NotesCreateOrConnectWithoutUserInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput>
  }

  export type NotesCreateManyUserInputEnvelope = {
    data: NotesCreateManyUserInput | NotesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InvitationsCreateWithoutUserInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    created_at?: Date | string
    org: OrganizationsCreateNestedOneWithoutSent_invitesInput
  }

  export type InvitationsUncheckedCreateWithoutUserInput = {
    id?: string
    org_id: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    created_at?: Date | string
  }

  export type InvitationsCreateOrConnectWithoutUserInput = {
    where: InvitationsWhereUniqueInput
    create: XOR<InvitationsCreateWithoutUserInput, InvitationsUncheckedCreateWithoutUserInput>
  }

  export type InvitationsCreateManyUserInputEnvelope = {
    data: InvitationsCreateManyUserInput | InvitationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
  }

  export type SessionsUpdateManyWithWhereWithoutUserInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionsScalarWhereInput = {
    AND?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    OR?: SessionsScalarWhereInput[]
    NOT?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    id?: UuidFilter<"Sessions"> | string
    user_id?: UuidFilter<"Sessions"> | string
    expires_at?: DateTimeFilter<"Sessions"> | Date | string
    created_at?: DateTimeFilter<"Sessions"> | Date | string
    last_used?: DateTimeNullableFilter<"Sessions"> | Date | string | null
  }

  export type MembershipsUpsertWithWhereUniqueWithoutUserInput = {
    where: MembershipsWhereUniqueInput
    update: XOR<MembershipsUpdateWithoutUserInput, MembershipsUncheckedUpdateWithoutUserInput>
    create: XOR<MembershipsCreateWithoutUserInput, MembershipsUncheckedCreateWithoutUserInput>
  }

  export type MembershipsUpdateWithWhereUniqueWithoutUserInput = {
    where: MembershipsWhereUniqueInput
    data: XOR<MembershipsUpdateWithoutUserInput, MembershipsUncheckedUpdateWithoutUserInput>
  }

  export type MembershipsUpdateManyWithWhereWithoutUserInput = {
    where: MembershipsScalarWhereInput
    data: XOR<MembershipsUpdateManyMutationInput, MembershipsUncheckedUpdateManyWithoutUserInput>
  }

  export type MembershipsScalarWhereInput = {
    AND?: MembershipsScalarWhereInput | MembershipsScalarWhereInput[]
    OR?: MembershipsScalarWhereInput[]
    NOT?: MembershipsScalarWhereInput | MembershipsScalarWhereInput[]
    id?: UuidFilter<"Memberships"> | string
    user_id?: UuidFilter<"Memberships"> | string
    org_id?: UuidFilter<"Memberships"> | string
    role?: EnumRoleFilter<"Memberships"> | $Enums.Role
    joined_at?: DateTimeFilter<"Memberships"> | Date | string
  }

  export type TasksUpsertWithWhereUniqueWithoutUserInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutUserInput, TasksUncheckedUpdateWithoutUserInput>
    create: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutUserInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutUserInput, TasksUncheckedUpdateWithoutUserInput>
  }

  export type TasksUpdateManyWithWhereWithoutUserInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutUserInput>
  }

  export type TasksScalarWhereInput = {
    AND?: TasksScalarWhereInput | TasksScalarWhereInput[]
    OR?: TasksScalarWhereInput[]
    NOT?: TasksScalarWhereInput | TasksScalarWhereInput[]
    id?: UuidFilter<"Tasks"> | string
    user_id?: UuidFilter<"Tasks"> | string
    org_id?: UuidFilter<"Tasks"> | string
    title?: StringFilter<"Tasks"> | string
    content?: StringNullableFilter<"Tasks"> | string | null
    deadline?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    completed_at?: DateTimeNullableFilter<"Tasks"> | Date | string | null
    created_at?: DateTimeFilter<"Tasks"> | Date | string
  }

  export type NotesUpsertWithWhereUniqueWithoutUserInput = {
    where: NotesWhereUniqueInput
    update: XOR<NotesUpdateWithoutUserInput, NotesUncheckedUpdateWithoutUserInput>
    create: XOR<NotesCreateWithoutUserInput, NotesUncheckedCreateWithoutUserInput>
  }

  export type NotesUpdateWithWhereUniqueWithoutUserInput = {
    where: NotesWhereUniqueInput
    data: XOR<NotesUpdateWithoutUserInput, NotesUncheckedUpdateWithoutUserInput>
  }

  export type NotesUpdateManyWithWhereWithoutUserInput = {
    where: NotesScalarWhereInput
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyWithoutUserInput>
  }

  export type NotesScalarWhereInput = {
    AND?: NotesScalarWhereInput | NotesScalarWhereInput[]
    OR?: NotesScalarWhereInput[]
    NOT?: NotesScalarWhereInput | NotesScalarWhereInput[]
    id?: UuidFilter<"Notes"> | string
    user_id?: UuidFilter<"Notes"> | string
    org_id?: UuidNullableFilter<"Notes"> | string | null
    title?: StringFilter<"Notes"> | string
    content?: StringFilter<"Notes"> | string
    remind_at?: DateTimeNullableFilter<"Notes"> | Date | string | null
    created_at?: DateTimeFilter<"Notes"> | Date | string
  }

  export type InvitationsUpsertWithWhereUniqueWithoutUserInput = {
    where: InvitationsWhereUniqueInput
    update: XOR<InvitationsUpdateWithoutUserInput, InvitationsUncheckedUpdateWithoutUserInput>
    create: XOR<InvitationsCreateWithoutUserInput, InvitationsUncheckedCreateWithoutUserInput>
  }

  export type InvitationsUpdateWithWhereUniqueWithoutUserInput = {
    where: InvitationsWhereUniqueInput
    data: XOR<InvitationsUpdateWithoutUserInput, InvitationsUncheckedUpdateWithoutUserInput>
  }

  export type InvitationsUpdateManyWithWhereWithoutUserInput = {
    where: InvitationsScalarWhereInput
    data: XOR<InvitationsUpdateManyMutationInput, InvitationsUncheckedUpdateManyWithoutUserInput>
  }

  export type InvitationsScalarWhereInput = {
    AND?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
    OR?: InvitationsScalarWhereInput[]
    NOT?: InvitationsScalarWhereInput | InvitationsScalarWhereInput[]
    id?: UuidFilter<"Invitations"> | string
    org_id?: UuidFilter<"Invitations"> | string
    email?: StringFilter<"Invitations"> | string
    role?: EnumRoleFilter<"Invitations"> | $Enums.Role
    token?: UuidFilter<"Invitations"> | string
    accepted_at?: DateTimeNullableFilter<"Invitations"> | Date | string | null
    expires_at?: DateTimeFilter<"Invitations"> | Date | string
    invited_by?: UuidFilter<"Invitations"> | string
    created_at?: DateTimeFilter<"Invitations"> | Date | string
  }

  export type MembershipsCreateWithoutOrgInput = {
    id?: string
    role?: $Enums.Role
    joined_at?: Date | string
    user: UsersCreateNestedOneWithoutMembershipsInput
  }

  export type MembershipsUncheckedCreateWithoutOrgInput = {
    id?: string
    user_id: string
    role?: $Enums.Role
    joined_at?: Date | string
  }

  export type MembershipsCreateOrConnectWithoutOrgInput = {
    where: MembershipsWhereUniqueInput
    create: XOR<MembershipsCreateWithoutOrgInput, MembershipsUncheckedCreateWithoutOrgInput>
  }

  export type MembershipsCreateManyOrgInputEnvelope = {
    data: MembershipsCreateManyOrgInput | MembershipsCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type TasksCreateWithoutOrgInput = {
    id?: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutTasksInput
  }

  export type TasksUncheckedCreateWithoutOrgInput = {
    id?: string
    user_id: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
  }

  export type TasksCreateOrConnectWithoutOrgInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutOrgInput, TasksUncheckedCreateWithoutOrgInput>
  }

  export type TasksCreateManyOrgInputEnvelope = {
    data: TasksCreateManyOrgInput | TasksCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type NotesCreateWithoutOrgInput = {
    id?: string
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutNotesInput
  }

  export type NotesUncheckedCreateWithoutOrgInput = {
    id?: string
    user_id: string
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
  }

  export type NotesCreateOrConnectWithoutOrgInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutOrgInput, NotesUncheckedCreateWithoutOrgInput>
  }

  export type NotesCreateManyOrgInputEnvelope = {
    data: NotesCreateManyOrgInput | NotesCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type EventsCreateWithoutOrgInput = {
    id?: string
    name: string
    date: Date | string
    event_type?: $Enums.Role
    content?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    created_at?: Date | string
  }

  export type EventsUncheckedCreateWithoutOrgInput = {
    id?: string
    name: string
    date: Date | string
    event_type?: $Enums.Role
    content?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    created_at?: Date | string
  }

  export type EventsCreateOrConnectWithoutOrgInput = {
    where: EventsWhereUniqueInput
    create: XOR<EventsCreateWithoutOrgInput, EventsUncheckedCreateWithoutOrgInput>
  }

  export type EventsCreateManyOrgInputEnvelope = {
    data: EventsCreateManyOrgInput | EventsCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type InvitationsCreateWithoutOrgInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    created_at?: Date | string
    user: UsersCreateNestedOneWithoutSent_invitesInput
  }

  export type InvitationsUncheckedCreateWithoutOrgInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    invited_by: string
    created_at?: Date | string
  }

  export type InvitationsCreateOrConnectWithoutOrgInput = {
    where: InvitationsWhereUniqueInput
    create: XOR<InvitationsCreateWithoutOrgInput, InvitationsUncheckedCreateWithoutOrgInput>
  }

  export type InvitationsCreateManyOrgInputEnvelope = {
    data: InvitationsCreateManyOrgInput | InvitationsCreateManyOrgInput[]
    skipDuplicates?: boolean
  }

  export type MembershipsUpsertWithWhereUniqueWithoutOrgInput = {
    where: MembershipsWhereUniqueInput
    update: XOR<MembershipsUpdateWithoutOrgInput, MembershipsUncheckedUpdateWithoutOrgInput>
    create: XOR<MembershipsCreateWithoutOrgInput, MembershipsUncheckedCreateWithoutOrgInput>
  }

  export type MembershipsUpdateWithWhereUniqueWithoutOrgInput = {
    where: MembershipsWhereUniqueInput
    data: XOR<MembershipsUpdateWithoutOrgInput, MembershipsUncheckedUpdateWithoutOrgInput>
  }

  export type MembershipsUpdateManyWithWhereWithoutOrgInput = {
    where: MembershipsScalarWhereInput
    data: XOR<MembershipsUpdateManyMutationInput, MembershipsUncheckedUpdateManyWithoutOrgInput>
  }

  export type TasksUpsertWithWhereUniqueWithoutOrgInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutOrgInput, TasksUncheckedUpdateWithoutOrgInput>
    create: XOR<TasksCreateWithoutOrgInput, TasksUncheckedCreateWithoutOrgInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutOrgInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutOrgInput, TasksUncheckedUpdateWithoutOrgInput>
  }

  export type TasksUpdateManyWithWhereWithoutOrgInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutOrgInput>
  }

  export type NotesUpsertWithWhereUniqueWithoutOrgInput = {
    where: NotesWhereUniqueInput
    update: XOR<NotesUpdateWithoutOrgInput, NotesUncheckedUpdateWithoutOrgInput>
    create: XOR<NotesCreateWithoutOrgInput, NotesUncheckedCreateWithoutOrgInput>
  }

  export type NotesUpdateWithWhereUniqueWithoutOrgInput = {
    where: NotesWhereUniqueInput
    data: XOR<NotesUpdateWithoutOrgInput, NotesUncheckedUpdateWithoutOrgInput>
  }

  export type NotesUpdateManyWithWhereWithoutOrgInput = {
    where: NotesScalarWhereInput
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyWithoutOrgInput>
  }

  export type EventsUpsertWithWhereUniqueWithoutOrgInput = {
    where: EventsWhereUniqueInput
    update: XOR<EventsUpdateWithoutOrgInput, EventsUncheckedUpdateWithoutOrgInput>
    create: XOR<EventsCreateWithoutOrgInput, EventsUncheckedCreateWithoutOrgInput>
  }

  export type EventsUpdateWithWhereUniqueWithoutOrgInput = {
    where: EventsWhereUniqueInput
    data: XOR<EventsUpdateWithoutOrgInput, EventsUncheckedUpdateWithoutOrgInput>
  }

  export type EventsUpdateManyWithWhereWithoutOrgInput = {
    where: EventsScalarWhereInput
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyWithoutOrgInput>
  }

  export type EventsScalarWhereInput = {
    AND?: EventsScalarWhereInput | EventsScalarWhereInput[]
    OR?: EventsScalarWhereInput[]
    NOT?: EventsScalarWhereInput | EventsScalarWhereInput[]
    id?: UuidFilter<"Events"> | string
    org_id?: UuidFilter<"Events"> | string
    name?: StringFilter<"Events"> | string
    date?: DateTimeFilter<"Events"> | Date | string
    event_type?: EnumRoleFilter<"Events"> | $Enums.Role
    content?: StringNullableFilter<"Events"> | string | null
    start_time?: DateTimeNullableFilter<"Events"> | Date | string | null
    end_time?: DateTimeNullableFilter<"Events"> | Date | string | null
    created_at?: DateTimeFilter<"Events"> | Date | string
  }

  export type InvitationsUpsertWithWhereUniqueWithoutOrgInput = {
    where: InvitationsWhereUniqueInput
    update: XOR<InvitationsUpdateWithoutOrgInput, InvitationsUncheckedUpdateWithoutOrgInput>
    create: XOR<InvitationsCreateWithoutOrgInput, InvitationsUncheckedCreateWithoutOrgInput>
  }

  export type InvitationsUpdateWithWhereUniqueWithoutOrgInput = {
    where: InvitationsWhereUniqueInput
    data: XOR<InvitationsUpdateWithoutOrgInput, InvitationsUncheckedUpdateWithoutOrgInput>
  }

  export type InvitationsUpdateManyWithWhereWithoutOrgInput = {
    where: InvitationsScalarWhereInput
    data: XOR<InvitationsUpdateManyMutationInput, InvitationsUncheckedUpdateManyWithoutOrgInput>
  }

  export type OrganizationsCreateWithoutMembershipsInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    tasks?: TasksCreateNestedManyWithoutOrgInput
    notes?: NotesCreateNestedManyWithoutOrgInput
    events?: EventsCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsUncheckedCreateWithoutMembershipsInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    tasks?: TasksUncheckedCreateNestedManyWithoutOrgInput
    notes?: NotesUncheckedCreateNestedManyWithoutOrgInput
    events?: EventsUncheckedCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsCreateOrConnectWithoutMembershipsInput = {
    where: OrganizationsWhereUniqueInput
    create: XOR<OrganizationsCreateWithoutMembershipsInput, OrganizationsUncheckedCreateWithoutMembershipsInput>
  }

  export type UsersCreateWithoutMembershipsInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsCreateNestedManyWithoutUserInput
    tasks?: TasksCreateNestedManyWithoutUserInput
    notes?: NotesCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    tasks?: TasksUncheckedCreateNestedManyWithoutUserInput
    notes?: NotesUncheckedCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMembershipsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMembershipsInput, UsersUncheckedCreateWithoutMembershipsInput>
  }

  export type OrganizationsUpsertWithoutMembershipsInput = {
    update: XOR<OrganizationsUpdateWithoutMembershipsInput, OrganizationsUncheckedUpdateWithoutMembershipsInput>
    create: XOR<OrganizationsCreateWithoutMembershipsInput, OrganizationsUncheckedCreateWithoutMembershipsInput>
    where?: OrganizationsWhereInput
  }

  export type OrganizationsUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: OrganizationsWhereInput
    data: XOR<OrganizationsUpdateWithoutMembershipsInput, OrganizationsUncheckedUpdateWithoutMembershipsInput>
  }

  export type OrganizationsUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TasksUpdateManyWithoutOrgNestedInput
    notes?: NotesUpdateManyWithoutOrgNestedInput
    events?: EventsUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TasksUncheckedUpdateManyWithoutOrgNestedInput
    notes?: NotesUncheckedUpdateManyWithoutOrgNestedInput
    events?: EventsUncheckedUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UsersUpsertWithoutMembershipsInput = {
    update: XOR<UsersUpdateWithoutMembershipsInput, UsersUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UsersCreateWithoutMembershipsInput, UsersUncheckedCreateWithoutMembershipsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMembershipsInput, UsersUncheckedUpdateWithoutMembershipsInput>
  }

  export type UsersUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUpdateManyWithoutUserNestedInput
    tasks?: TasksUpdateManyWithoutUserNestedInput
    notes?: NotesUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutUserNestedInput
    notes?: NotesUncheckedUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutTasksInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsCreateNestedManyWithoutUserInput
    memberships?: MembershipsCreateNestedManyWithoutUserInput
    notes?: NotesCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    memberships?: MembershipsUncheckedCreateNestedManyWithoutUserInput
    notes?: NotesUncheckedCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutTasksInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
  }

  export type OrganizationsCreateWithoutTasksInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsCreateNestedManyWithoutOrgInput
    notes?: NotesCreateNestedManyWithoutOrgInput
    events?: EventsCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsUncheckedCreateNestedManyWithoutOrgInput
    notes?: NotesUncheckedCreateNestedManyWithoutOrgInput
    events?: EventsUncheckedCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsCreateOrConnectWithoutTasksInput = {
    where: OrganizationsWhereUniqueInput
    create: XOR<OrganizationsCreateWithoutTasksInput, OrganizationsUncheckedCreateWithoutTasksInput>
  }

  export type UsersUpsertWithoutTasksInput = {
    update: XOR<UsersUpdateWithoutTasksInput, UsersUncheckedUpdateWithoutTasksInput>
    create: XOR<UsersCreateWithoutTasksInput, UsersUncheckedCreateWithoutTasksInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTasksInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTasksInput, UsersUncheckedUpdateWithoutTasksInput>
  }

  export type UsersUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUpdateManyWithoutUserNestedInput
    notes?: NotesUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUncheckedUpdateManyWithoutUserNestedInput
    notes?: NotesUncheckedUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationsUpsertWithoutTasksInput = {
    update: XOR<OrganizationsUpdateWithoutTasksInput, OrganizationsUncheckedUpdateWithoutTasksInput>
    create: XOR<OrganizationsCreateWithoutTasksInput, OrganizationsUncheckedCreateWithoutTasksInput>
    where?: OrganizationsWhereInput
  }

  export type OrganizationsUpdateToOneWithWhereWithoutTasksInput = {
    where?: OrganizationsWhereInput
    data: XOR<OrganizationsUpdateWithoutTasksInput, OrganizationsUncheckedUpdateWithoutTasksInput>
  }

  export type OrganizationsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUpdateManyWithoutOrgNestedInput
    notes?: NotesUpdateManyWithoutOrgNestedInput
    events?: EventsUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUncheckedUpdateManyWithoutOrgNestedInput
    notes?: NotesUncheckedUpdateManyWithoutOrgNestedInput
    events?: EventsUncheckedUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UsersCreateWithoutNotesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsCreateNestedManyWithoutUserInput
    memberships?: MembershipsCreateNestedManyWithoutUserInput
    tasks?: TasksCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutNotesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    memberships?: MembershipsUncheckedCreateNestedManyWithoutUserInput
    tasks?: TasksUncheckedCreateNestedManyWithoutUserInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutNotesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
  }

  export type OrganizationsCreateWithoutNotesInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsCreateNestedManyWithoutOrgInput
    tasks?: TasksCreateNestedManyWithoutOrgInput
    events?: EventsCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TasksUncheckedCreateNestedManyWithoutOrgInput
    events?: EventsUncheckedCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsCreateOrConnectWithoutNotesInput = {
    where: OrganizationsWhereUniqueInput
    create: XOR<OrganizationsCreateWithoutNotesInput, OrganizationsUncheckedCreateWithoutNotesInput>
  }

  export type UsersUpsertWithoutNotesInput = {
    update: XOR<UsersUpdateWithoutNotesInput, UsersUncheckedUpdateWithoutNotesInput>
    create: XOR<UsersCreateWithoutNotesInput, UsersUncheckedCreateWithoutNotesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutNotesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutNotesInput, UsersUncheckedUpdateWithoutNotesInput>
  }

  export type UsersUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUpdateManyWithoutUserNestedInput
    tasks?: TasksUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutUserNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationsUpsertWithoutNotesInput = {
    update: XOR<OrganizationsUpdateWithoutNotesInput, OrganizationsUncheckedUpdateWithoutNotesInput>
    create: XOR<OrganizationsCreateWithoutNotesInput, OrganizationsUncheckedCreateWithoutNotesInput>
    where?: OrganizationsWhereInput
  }

  export type OrganizationsUpdateToOneWithWhereWithoutNotesInput = {
    where?: OrganizationsWhereInput
    data: XOR<OrganizationsUpdateWithoutNotesInput, OrganizationsUncheckedUpdateWithoutNotesInput>
  }

  export type OrganizationsUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUpdateManyWithoutOrgNestedInput
    tasks?: TasksUpdateManyWithoutOrgNestedInput
    events?: EventsUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutOrgNestedInput
    events?: EventsUncheckedUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsCreateWithoutEventsInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsCreateNestedManyWithoutOrgInput
    tasks?: TasksCreateNestedManyWithoutOrgInput
    notes?: NotesCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TasksUncheckedCreateNestedManyWithoutOrgInput
    notes?: NotesUncheckedCreateNestedManyWithoutOrgInput
    sent_invites?: InvitationsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsCreateOrConnectWithoutEventsInput = {
    where: OrganizationsWhereUniqueInput
    create: XOR<OrganizationsCreateWithoutEventsInput, OrganizationsUncheckedCreateWithoutEventsInput>
  }

  export type OrganizationsUpsertWithoutEventsInput = {
    update: XOR<OrganizationsUpdateWithoutEventsInput, OrganizationsUncheckedUpdateWithoutEventsInput>
    create: XOR<OrganizationsCreateWithoutEventsInput, OrganizationsUncheckedCreateWithoutEventsInput>
    where?: OrganizationsWhereInput
  }

  export type OrganizationsUpdateToOneWithWhereWithoutEventsInput = {
    where?: OrganizationsWhereInput
    data: XOR<OrganizationsUpdateWithoutEventsInput, OrganizationsUncheckedUpdateWithoutEventsInput>
  }

  export type OrganizationsUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUpdateManyWithoutOrgNestedInput
    tasks?: TasksUpdateManyWithoutOrgNestedInput
    notes?: NotesUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutOrgNestedInput
    notes?: NotesUncheckedUpdateManyWithoutOrgNestedInput
    sent_invites?: InvitationsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type UsersCreateWithoutSent_invitesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsCreateNestedManyWithoutUserInput
    memberships?: MembershipsCreateNestedManyWithoutUserInput
    tasks?: TasksCreateNestedManyWithoutUserInput
    notes?: NotesCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutSent_invitesInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    phone_number?: string | null
    pfp?: Bytes | null
    created_at?: Date | string
    session?: SessionsUncheckedCreateNestedManyWithoutUserInput
    memberships?: MembershipsUncheckedCreateNestedManyWithoutUserInput
    tasks?: TasksUncheckedCreateNestedManyWithoutUserInput
    notes?: NotesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutSent_invitesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSent_invitesInput, UsersUncheckedCreateWithoutSent_invitesInput>
  }

  export type OrganizationsCreateWithoutSent_invitesInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsCreateNestedManyWithoutOrgInput
    tasks?: TasksCreateNestedManyWithoutOrgInput
    notes?: NotesCreateNestedManyWithoutOrgInput
    events?: EventsCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsUncheckedCreateWithoutSent_invitesInput = {
    id?: string
    name: string
    pfp?: Bytes | null
    created_at?: Date | string
    memberships?: MembershipsUncheckedCreateNestedManyWithoutOrgInput
    tasks?: TasksUncheckedCreateNestedManyWithoutOrgInput
    notes?: NotesUncheckedCreateNestedManyWithoutOrgInput
    events?: EventsUncheckedCreateNestedManyWithoutOrgInput
  }

  export type OrganizationsCreateOrConnectWithoutSent_invitesInput = {
    where: OrganizationsWhereUniqueInput
    create: XOR<OrganizationsCreateWithoutSent_invitesInput, OrganizationsUncheckedCreateWithoutSent_invitesInput>
  }

  export type UsersUpsertWithoutSent_invitesInput = {
    update: XOR<UsersUpdateWithoutSent_invitesInput, UsersUncheckedUpdateWithoutSent_invitesInput>
    create: XOR<UsersCreateWithoutSent_invitesInput, UsersUncheckedCreateWithoutSent_invitesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSent_invitesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSent_invitesInput, UsersUncheckedUpdateWithoutSent_invitesInput>
  }

  export type UsersUpdateWithoutSent_invitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUpdateManyWithoutUserNestedInput
    tasks?: TasksUpdateManyWithoutUserNestedInput
    notes?: NotesUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutSent_invitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionsUncheckedUpdateManyWithoutUserNestedInput
    memberships?: MembershipsUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutUserNestedInput
    notes?: NotesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrganizationsUpsertWithoutSent_invitesInput = {
    update: XOR<OrganizationsUpdateWithoutSent_invitesInput, OrganizationsUncheckedUpdateWithoutSent_invitesInput>
    create: XOR<OrganizationsCreateWithoutSent_invitesInput, OrganizationsUncheckedCreateWithoutSent_invitesInput>
    where?: OrganizationsWhereInput
  }

  export type OrganizationsUpdateToOneWithWhereWithoutSent_invitesInput = {
    where?: OrganizationsWhereInput
    data: XOR<OrganizationsUpdateWithoutSent_invitesInput, OrganizationsUncheckedUpdateWithoutSent_invitesInput>
  }

  export type OrganizationsUpdateWithoutSent_invitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUpdateManyWithoutOrgNestedInput
    tasks?: TasksUpdateManyWithoutOrgNestedInput
    notes?: NotesUpdateManyWithoutOrgNestedInput
    events?: EventsUpdateManyWithoutOrgNestedInput
  }

  export type OrganizationsUncheckedUpdateWithoutSent_invitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    pfp?: NullableBytesFieldUpdateOperationsInput | Bytes | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: MembershipsUncheckedUpdateManyWithoutOrgNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutOrgNestedInput
    notes?: NotesUncheckedUpdateManyWithoutOrgNestedInput
    events?: EventsUncheckedUpdateManyWithoutOrgNestedInput
  }

  export type SessionsCreateManyUserInput = {
    id: string
    expires_at: Date | string
    created_at?: Date | string
    last_used?: Date | string | null
  }

  export type MembershipsCreateManyUserInput = {
    id?: string
    org_id: string
    role?: $Enums.Role
    joined_at?: Date | string
  }

  export type TasksCreateManyUserInput = {
    id?: string
    org_id: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
  }

  export type NotesCreateManyUserInput = {
    id?: string
    org_id?: string | null
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
  }

  export type InvitationsCreateManyUserInput = {
    id?: string
    org_id: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    created_at?: Date | string
  }

  export type SessionsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SessionsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MembershipsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationsUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TasksUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationsUpdateOneWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    org?: OrganizationsUpdateOneRequiredWithoutSent_invitesNestedInput
  }

  export type InvitationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    org_id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipsCreateManyOrgInput = {
    id?: string
    user_id: string
    role?: $Enums.Role
    joined_at?: Date | string
  }

  export type TasksCreateManyOrgInput = {
    id?: string
    user_id: string
    title: string
    content?: string | null
    deadline?: Date | string | null
    completed_at?: Date | string | null
    created_at?: Date | string
  }

  export type NotesCreateManyOrgInput = {
    id?: string
    user_id: string
    title: string
    content: string
    remind_at?: Date | string | null
    created_at?: Date | string
  }

  export type EventsCreateManyOrgInput = {
    id?: string
    name: string
    date: Date | string
    event_type?: $Enums.Role
    content?: string | null
    start_time?: Date | string | null
    end_time?: Date | string | null
    created_at?: Date | string
  }

  export type InvitationsCreateManyOrgInput = {
    id?: string
    email: string
    role?: $Enums.Role
    token?: string
    accepted_at?: Date | string | null
    expires_at: Date | string
    invited_by: string
    created_at?: Date | string
  }

  export type MembershipsUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type MembershipsUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MembershipsUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TasksUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotesUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    remind_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventsUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    event_type?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationsUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutSent_invitesNestedInput
  }

  export type InvitationsUncheckedUpdateWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationsUncheckedUpdateManyWithoutOrgInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    token?: StringFieldUpdateOperationsInput | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    invited_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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