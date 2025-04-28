
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
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model TenantDetails
 * 
 */
export type TenantDetails = $Result.DefaultSelection<Prisma.$TenantDetailsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model TenantCourse
 * 
 */
export type TenantCourse = $Result.DefaultSelection<Prisma.$TenantCoursePayload>
/**
 * Model MCQ
 * 
 */
export type MCQ = $Result.DefaultSelection<Prisma.$MCQPayload>
/**
 * Model UserMCQAnswer
 * 
 */
export type UserMCQAnswer = $Result.DefaultSelection<Prisma.$UserMCQAnswerPayload>
/**
 * Model SlideExplanation
 * 
 */
export type SlideExplanation = $Result.DefaultSelection<Prisma.$SlideExplanationPayload>
/**
 * Model OrganizationInterest
 * 
 */
export type OrganizationInterest = $Result.DefaultSelection<Prisma.$OrganizationInterestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const EnrollmentStatus: {
  NOT_STARTED: 'NOT_STARTED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type EnrollmentStatus = $Enums.EnrollmentStatus

export const EnrollmentStatus: typeof $Enums.EnrollmentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenantDetails`: Exposes CRUD operations for the **TenantDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantDetails
    * const tenantDetails = await prisma.tenantDetails.findMany()
    * ```
    */
  get tenantDetails(): Prisma.TenantDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenantCourse`: Exposes CRUD operations for the **TenantCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantCourses
    * const tenantCourses = await prisma.tenantCourse.findMany()
    * ```
    */
  get tenantCourse(): Prisma.TenantCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mCQ`: Exposes CRUD operations for the **MCQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MCQS
    * const mCQS = await prisma.mCQ.findMany()
    * ```
    */
  get mCQ(): Prisma.MCQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMCQAnswer`: Exposes CRUD operations for the **UserMCQAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMCQAnswers
    * const userMCQAnswers = await prisma.userMCQAnswer.findMany()
    * ```
    */
  get userMCQAnswer(): Prisma.UserMCQAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slideExplanation`: Exposes CRUD operations for the **SlideExplanation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlideExplanations
    * const slideExplanations = await prisma.slideExplanation.findMany()
    * ```
    */
  get slideExplanation(): Prisma.SlideExplanationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationInterest`: Exposes CRUD operations for the **OrganizationInterest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationInterests
    * const organizationInterests = await prisma.organizationInterest.findMany()
    * ```
    */
  get organizationInterest(): Prisma.OrganizationInterestDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Tenant: 'Tenant',
    TenantDetails: 'TenantDetails',
    User: 'User',
    Course: 'Course',
    Enrollment: 'Enrollment',
    Certificate: 'Certificate',
    TenantCourse: 'TenantCourse',
    MCQ: 'MCQ',
    UserMCQAnswer: 'UserMCQAnswer',
    SlideExplanation: 'SlideExplanation',
    OrganizationInterest: 'OrganizationInterest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "tenantDetails" | "user" | "course" | "enrollment" | "certificate" | "tenantCourse" | "mCQ" | "userMCQAnswer" | "slideExplanation" | "organizationInterest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      TenantDetails: {
        payload: Prisma.$TenantDetailsPayload<ExtArgs>
        fields: Prisma.TenantDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>
          }
          findFirst: {
            args: Prisma.TenantDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>
          }
          findMany: {
            args: Prisma.TenantDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>[]
          }
          create: {
            args: Prisma.TenantDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>
          }
          createMany: {
            args: Prisma.TenantDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>[]
          }
          delete: {
            args: Prisma.TenantDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>
          }
          update: {
            args: Prisma.TenantDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>
          }
          deleteMany: {
            args: Prisma.TenantDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>[]
          }
          upsert: {
            args: Prisma.TenantDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantDetailsPayload>
          }
          aggregate: {
            args: Prisma.TenantDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantDetails>
          }
          groupBy: {
            args: Prisma.TenantDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<TenantDetailsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      TenantCourse: {
        payload: Prisma.$TenantCoursePayload<ExtArgs>
        fields: Prisma.TenantCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>
          }
          findFirst: {
            args: Prisma.TenantCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>
          }
          findMany: {
            args: Prisma.TenantCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>[]
          }
          create: {
            args: Prisma.TenantCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>
          }
          createMany: {
            args: Prisma.TenantCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>[]
          }
          delete: {
            args: Prisma.TenantCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>
          }
          update: {
            args: Prisma.TenantCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>
          }
          deleteMany: {
            args: Prisma.TenantCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>[]
          }
          upsert: {
            args: Prisma.TenantCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantCoursePayload>
          }
          aggregate: {
            args: Prisma.TenantCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantCourse>
          }
          groupBy: {
            args: Prisma.TenantCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCourseCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCourseCountAggregateOutputType> | number
          }
        }
      }
      MCQ: {
        payload: Prisma.$MCQPayload<ExtArgs>
        fields: Prisma.MCQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MCQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MCQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>
          }
          findFirst: {
            args: Prisma.MCQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MCQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>
          }
          findMany: {
            args: Prisma.MCQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>[]
          }
          create: {
            args: Prisma.MCQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>
          }
          createMany: {
            args: Prisma.MCQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MCQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>[]
          }
          delete: {
            args: Prisma.MCQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>
          }
          update: {
            args: Prisma.MCQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>
          }
          deleteMany: {
            args: Prisma.MCQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MCQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MCQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>[]
          }
          upsert: {
            args: Prisma.MCQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MCQPayload>
          }
          aggregate: {
            args: Prisma.MCQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMCQ>
          }
          groupBy: {
            args: Prisma.MCQGroupByArgs<ExtArgs>
            result: $Utils.Optional<MCQGroupByOutputType>[]
          }
          count: {
            args: Prisma.MCQCountArgs<ExtArgs>
            result: $Utils.Optional<MCQCountAggregateOutputType> | number
          }
        }
      }
      UserMCQAnswer: {
        payload: Prisma.$UserMCQAnswerPayload<ExtArgs>
        fields: Prisma.UserMCQAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMCQAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMCQAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserMCQAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMCQAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>
          }
          findMany: {
            args: Prisma.UserMCQAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>[]
          }
          create: {
            args: Prisma.UserMCQAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>
          }
          createMany: {
            args: Prisma.UserMCQAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMCQAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserMCQAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>
          }
          update: {
            args: Prisma.UserMCQAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserMCQAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMCQAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMCQAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>[]
          }
          upsert: {
            args: Prisma.UserMCQAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMCQAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserMCQAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMCQAnswer>
          }
          groupBy: {
            args: Prisma.UserMCQAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMCQAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMCQAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserMCQAnswerCountAggregateOutputType> | number
          }
        }
      }
      SlideExplanation: {
        payload: Prisma.$SlideExplanationPayload<ExtArgs>
        fields: Prisma.SlideExplanationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlideExplanationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlideExplanationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>
          }
          findFirst: {
            args: Prisma.SlideExplanationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlideExplanationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>
          }
          findMany: {
            args: Prisma.SlideExplanationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>[]
          }
          create: {
            args: Prisma.SlideExplanationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>
          }
          createMany: {
            args: Prisma.SlideExplanationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlideExplanationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>[]
          }
          delete: {
            args: Prisma.SlideExplanationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>
          }
          update: {
            args: Prisma.SlideExplanationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>
          }
          deleteMany: {
            args: Prisma.SlideExplanationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlideExplanationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlideExplanationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>[]
          }
          upsert: {
            args: Prisma.SlideExplanationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlideExplanationPayload>
          }
          aggregate: {
            args: Prisma.SlideExplanationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlideExplanation>
          }
          groupBy: {
            args: Prisma.SlideExplanationGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlideExplanationGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlideExplanationCountArgs<ExtArgs>
            result: $Utils.Optional<SlideExplanationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationInterest: {
        payload: Prisma.$OrganizationInterestPayload<ExtArgs>
        fields: Prisma.OrganizationInterestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationInterestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationInterestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>
          }
          findFirst: {
            args: Prisma.OrganizationInterestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationInterestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>
          }
          findMany: {
            args: Prisma.OrganizationInterestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>[]
          }
          create: {
            args: Prisma.OrganizationInterestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>
          }
          createMany: {
            args: Prisma.OrganizationInterestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationInterestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>[]
          }
          delete: {
            args: Prisma.OrganizationInterestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>
          }
          update: {
            args: Prisma.OrganizationInterestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationInterestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationInterestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationInterestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationInterestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationInterestPayload>
          }
          aggregate: {
            args: Prisma.OrganizationInterestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationInterest>
          }
          groupBy: {
            args: Prisma.OrganizationInterestGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationInterestGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationInterestCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationInterestCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    tenantDetails?: TenantDetailsOmit
    user?: UserOmit
    course?: CourseOmit
    enrollment?: EnrollmentOmit
    certificate?: CertificateOmit
    tenantCourse?: TenantCourseOmit
    mCQ?: MCQOmit
    userMCQAnswer?: UserMCQAnswerOmit
    slideExplanation?: SlideExplanationOmit
    organizationInterest?: OrganizationInterestOmit
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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    courses: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    courses?: boolean | TenantCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantCourseWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrollments: number
    certificates: number
    mcqAnswers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
    mcqAnswers?: boolean | UserCountOutputTypeCountMcqAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMcqAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMCQAnswerWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    mcqs: number
    enrollments: number
    tenants: number
    slideExplanations: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcqs?: boolean | CourseCountOutputTypeCountMcqsArgs
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
    tenants?: boolean | CourseCountOutputTypeCountTenantsArgs
    slideExplanations?: boolean | CourseCountOutputTypeCountSlideExplanationsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountMcqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MCQWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSlideExplanationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideExplanationWhereInput
  }


  /**
   * Count Type MCQCountOutputType
   */

  export type MCQCountOutputType = {
    userAnswers: number
  }

  export type MCQCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userAnswers?: boolean | MCQCountOutputTypeCountUserAnswersArgs
  }

  // Custom InputTypes
  /**
   * MCQCountOutputType without action
   */
  export type MCQCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQCountOutputType
     */
    select?: MCQCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MCQCountOutputType without action
   */
  export type MCQCountOutputTypeCountUserAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMCQAnswerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    adminEmail: string | null
    adminPassword: string | null
    createdAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    domain: string | null
    adminEmail: string | null
    adminPassword: string | null
    createdAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    domain: number
    adminEmail: number
    adminPassword: number
    createdAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    adminEmail?: true
    adminPassword?: true
    createdAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    adminEmail?: true
    adminPassword?: true
    createdAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    domain?: true
    adminEmail?: true
    adminPassword?: true
    createdAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    createdAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    details?: boolean | Tenant$detailsArgs<ExtArgs>
    courses?: boolean | Tenant$coursesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    domain?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    domain?: boolean
    adminEmail?: boolean
    adminPassword?: boolean
    createdAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "domain" | "adminEmail" | "adminPassword" | "createdAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    details?: boolean | Tenant$detailsArgs<ExtArgs>
    courses?: boolean | Tenant$coursesArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      details: Prisma.$TenantDetailsPayload<ExtArgs> | null
      courses: Prisma.$TenantCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      domain: string
      adminEmail: string
      adminPassword: string
      createdAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    details<T extends Tenant$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$detailsArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    courses<T extends Tenant$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly domain: FieldRef<"Tenant", 'String'>
    readonly adminEmail: FieldRef<"Tenant", 'String'>
    readonly adminPassword: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.details
   */
  export type Tenant$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    where?: TenantDetailsWhereInput
  }

  /**
   * Tenant.courses
   */
  export type Tenant$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    where?: TenantCourseWhereInput
    orderBy?: TenantCourseOrderByWithRelationInput | TenantCourseOrderByWithRelationInput[]
    cursor?: TenantCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantCourseScalarFieldEnum | TenantCourseScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model TenantDetails
   */

  export type AggregateTenantDetails = {
    _count: TenantDetailsCountAggregateOutputType | null
    _min: TenantDetailsMinAggregateOutputType | null
    _max: TenantDetailsMaxAggregateOutputType | null
  }

  export type TenantDetailsMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    presidingOfficerEmail: string | null
    poshCommitteeEmail: string | null
    hrContactName: string | null
    hrContactEmail: string | null
    hrContactPhone: string | null
    ceoName: string | null
    ceoEmail: string | null
    ceoContact: string | null
    ctoName: string | null
    ctoEmail: string | null
    ctoContact: string | null
    ccoEmail: string | null
    ccoContact: string | null
    croName: string | null
    croEmail: string | null
    croContact: string | null
    legalOfficerName: string | null
    legalOfficerEmail: string | null
    legalOfficerContact: string | null
  }

  export type TenantDetailsMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    presidingOfficerEmail: string | null
    poshCommitteeEmail: string | null
    hrContactName: string | null
    hrContactEmail: string | null
    hrContactPhone: string | null
    ceoName: string | null
    ceoEmail: string | null
    ceoContact: string | null
    ctoName: string | null
    ctoEmail: string | null
    ctoContact: string | null
    ccoEmail: string | null
    ccoContact: string | null
    croName: string | null
    croEmail: string | null
    croContact: string | null
    legalOfficerName: string | null
    legalOfficerEmail: string | null
    legalOfficerContact: string | null
  }

  export type TenantDetailsCountAggregateOutputType = {
    id: number
    tenantId: number
    presidingOfficerEmail: number
    poshCommitteeEmail: number
    hrContactName: number
    hrContactEmail: number
    hrContactPhone: number
    ceoName: number
    ceoEmail: number
    ceoContact: number
    ctoName: number
    ctoEmail: number
    ctoContact: number
    ccoEmail: number
    ccoContact: number
    croName: number
    croEmail: number
    croContact: number
    legalOfficerName: number
    legalOfficerEmail: number
    legalOfficerContact: number
    _all: number
  }


  export type TenantDetailsMinAggregateInputType = {
    id?: true
    tenantId?: true
    presidingOfficerEmail?: true
    poshCommitteeEmail?: true
    hrContactName?: true
    hrContactEmail?: true
    hrContactPhone?: true
    ceoName?: true
    ceoEmail?: true
    ceoContact?: true
    ctoName?: true
    ctoEmail?: true
    ctoContact?: true
    ccoEmail?: true
    ccoContact?: true
    croName?: true
    croEmail?: true
    croContact?: true
    legalOfficerName?: true
    legalOfficerEmail?: true
    legalOfficerContact?: true
  }

  export type TenantDetailsMaxAggregateInputType = {
    id?: true
    tenantId?: true
    presidingOfficerEmail?: true
    poshCommitteeEmail?: true
    hrContactName?: true
    hrContactEmail?: true
    hrContactPhone?: true
    ceoName?: true
    ceoEmail?: true
    ceoContact?: true
    ctoName?: true
    ctoEmail?: true
    ctoContact?: true
    ccoEmail?: true
    ccoContact?: true
    croName?: true
    croEmail?: true
    croContact?: true
    legalOfficerName?: true
    legalOfficerEmail?: true
    legalOfficerContact?: true
  }

  export type TenantDetailsCountAggregateInputType = {
    id?: true
    tenantId?: true
    presidingOfficerEmail?: true
    poshCommitteeEmail?: true
    hrContactName?: true
    hrContactEmail?: true
    hrContactPhone?: true
    ceoName?: true
    ceoEmail?: true
    ceoContact?: true
    ctoName?: true
    ctoEmail?: true
    ctoContact?: true
    ccoEmail?: true
    ccoContact?: true
    croName?: true
    croEmail?: true
    croContact?: true
    legalOfficerName?: true
    legalOfficerEmail?: true
    legalOfficerContact?: true
    _all?: true
  }

  export type TenantDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantDetails to aggregate.
     */
    where?: TenantDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantDetails to fetch.
     */
    orderBy?: TenantDetailsOrderByWithRelationInput | TenantDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantDetails
    **/
    _count?: true | TenantDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantDetailsMaxAggregateInputType
  }

  export type GetTenantDetailsAggregateType<T extends TenantDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantDetails[P]>
      : GetScalarType<T[P], AggregateTenantDetails[P]>
  }




  export type TenantDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantDetailsWhereInput
    orderBy?: TenantDetailsOrderByWithAggregationInput | TenantDetailsOrderByWithAggregationInput[]
    by: TenantDetailsScalarFieldEnum[] | TenantDetailsScalarFieldEnum
    having?: TenantDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantDetailsCountAggregateInputType | true
    _min?: TenantDetailsMinAggregateInputType
    _max?: TenantDetailsMaxAggregateInputType
  }

  export type TenantDetailsGroupByOutputType = {
    id: string
    tenantId: string
    presidingOfficerEmail: string | null
    poshCommitteeEmail: string | null
    hrContactName: string | null
    hrContactEmail: string | null
    hrContactPhone: string | null
    ceoName: string | null
    ceoEmail: string | null
    ceoContact: string | null
    ctoName: string | null
    ctoEmail: string | null
    ctoContact: string | null
    ccoEmail: string | null
    ccoContact: string | null
    croName: string | null
    croEmail: string | null
    croContact: string | null
    legalOfficerName: string | null
    legalOfficerEmail: string | null
    legalOfficerContact: string | null
    _count: TenantDetailsCountAggregateOutputType | null
    _min: TenantDetailsMinAggregateOutputType | null
    _max: TenantDetailsMaxAggregateOutputType | null
  }

  type GetTenantDetailsGroupByPayload<T extends TenantDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], TenantDetailsGroupByOutputType[P]>
        }
      >
    >


  export type TenantDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    presidingOfficerEmail?: boolean
    poshCommitteeEmail?: boolean
    hrContactName?: boolean
    hrContactEmail?: boolean
    hrContactPhone?: boolean
    ceoName?: boolean
    ceoEmail?: boolean
    ceoContact?: boolean
    ctoName?: boolean
    ctoEmail?: boolean
    ctoContact?: boolean
    ccoEmail?: boolean
    ccoContact?: boolean
    croName?: boolean
    croEmail?: boolean
    croContact?: boolean
    legalOfficerName?: boolean
    legalOfficerEmail?: boolean
    legalOfficerContact?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantDetails"]>

  export type TenantDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    presidingOfficerEmail?: boolean
    poshCommitteeEmail?: boolean
    hrContactName?: boolean
    hrContactEmail?: boolean
    hrContactPhone?: boolean
    ceoName?: boolean
    ceoEmail?: boolean
    ceoContact?: boolean
    ctoName?: boolean
    ctoEmail?: boolean
    ctoContact?: boolean
    ccoEmail?: boolean
    ccoContact?: boolean
    croName?: boolean
    croEmail?: boolean
    croContact?: boolean
    legalOfficerName?: boolean
    legalOfficerEmail?: boolean
    legalOfficerContact?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantDetails"]>

  export type TenantDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    presidingOfficerEmail?: boolean
    poshCommitteeEmail?: boolean
    hrContactName?: boolean
    hrContactEmail?: boolean
    hrContactPhone?: boolean
    ceoName?: boolean
    ceoEmail?: boolean
    ceoContact?: boolean
    ctoName?: boolean
    ctoEmail?: boolean
    ctoContact?: boolean
    ccoEmail?: boolean
    ccoContact?: boolean
    croName?: boolean
    croEmail?: boolean
    croContact?: boolean
    legalOfficerName?: boolean
    legalOfficerEmail?: boolean
    legalOfficerContact?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantDetails"]>

  export type TenantDetailsSelectScalar = {
    id?: boolean
    tenantId?: boolean
    presidingOfficerEmail?: boolean
    poshCommitteeEmail?: boolean
    hrContactName?: boolean
    hrContactEmail?: boolean
    hrContactPhone?: boolean
    ceoName?: boolean
    ceoEmail?: boolean
    ceoContact?: boolean
    ctoName?: boolean
    ctoEmail?: boolean
    ctoContact?: boolean
    ccoEmail?: boolean
    ccoContact?: boolean
    croName?: boolean
    croEmail?: boolean
    croContact?: boolean
    legalOfficerName?: boolean
    legalOfficerEmail?: boolean
    legalOfficerContact?: boolean
  }

  export type TenantDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "presidingOfficerEmail" | "poshCommitteeEmail" | "hrContactName" | "hrContactEmail" | "hrContactPhone" | "ceoName" | "ceoEmail" | "ceoContact" | "ctoName" | "ctoEmail" | "ctoContact" | "ccoEmail" | "ccoContact" | "croName" | "croEmail" | "croContact" | "legalOfficerName" | "legalOfficerEmail" | "legalOfficerContact", ExtArgs["result"]["tenantDetails"]>
  export type TenantDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type TenantDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $TenantDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantDetails"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      presidingOfficerEmail: string | null
      poshCommitteeEmail: string | null
      hrContactName: string | null
      hrContactEmail: string | null
      hrContactPhone: string | null
      ceoName: string | null
      ceoEmail: string | null
      ceoContact: string | null
      ctoName: string | null
      ctoEmail: string | null
      ctoContact: string | null
      ccoEmail: string | null
      ccoContact: string | null
      croName: string | null
      croEmail: string | null
      croContact: string | null
      legalOfficerName: string | null
      legalOfficerEmail: string | null
      legalOfficerContact: string | null
    }, ExtArgs["result"]["tenantDetails"]>
    composites: {}
  }

  type TenantDetailsGetPayload<S extends boolean | null | undefined | TenantDetailsDefaultArgs> = $Result.GetResult<Prisma.$TenantDetailsPayload, S>

  type TenantDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantDetailsCountAggregateInputType | true
    }

  export interface TenantDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantDetails'], meta: { name: 'TenantDetails' } }
    /**
     * Find zero or one TenantDetails that matches the filter.
     * @param {TenantDetailsFindUniqueArgs} args - Arguments to find a TenantDetails
     * @example
     * // Get one TenantDetails
     * const tenantDetails = await prisma.tenantDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantDetailsFindUniqueArgs>(args: SelectSubset<T, TenantDetailsFindUniqueArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantDetailsFindUniqueOrThrowArgs} args - Arguments to find a TenantDetails
     * @example
     * // Get one TenantDetails
     * const tenantDetails = await prisma.tenantDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantDetailsFindFirstArgs} args - Arguments to find a TenantDetails
     * @example
     * // Get one TenantDetails
     * const tenantDetails = await prisma.tenantDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantDetailsFindFirstArgs>(args?: SelectSubset<T, TenantDetailsFindFirstArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantDetailsFindFirstOrThrowArgs} args - Arguments to find a TenantDetails
     * @example
     * // Get one TenantDetails
     * const tenantDetails = await prisma.tenantDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantDetails
     * const tenantDetails = await prisma.tenantDetails.findMany()
     * 
     * // Get first 10 TenantDetails
     * const tenantDetails = await prisma.tenantDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantDetailsWithIdOnly = await prisma.tenantDetails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantDetailsFindManyArgs>(args?: SelectSubset<T, TenantDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantDetails.
     * @param {TenantDetailsCreateArgs} args - Arguments to create a TenantDetails.
     * @example
     * // Create one TenantDetails
     * const TenantDetails = await prisma.tenantDetails.create({
     *   data: {
     *     // ... data to create a TenantDetails
     *   }
     * })
     * 
     */
    create<T extends TenantDetailsCreateArgs>(args: SelectSubset<T, TenantDetailsCreateArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantDetails.
     * @param {TenantDetailsCreateManyArgs} args - Arguments to create many TenantDetails.
     * @example
     * // Create many TenantDetails
     * const tenantDetails = await prisma.tenantDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantDetailsCreateManyArgs>(args?: SelectSubset<T, TenantDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantDetails and returns the data saved in the database.
     * @param {TenantDetailsCreateManyAndReturnArgs} args - Arguments to create many TenantDetails.
     * @example
     * // Create many TenantDetails
     * const tenantDetails = await prisma.tenantDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantDetails and only return the `id`
     * const tenantDetailsWithIdOnly = await prisma.tenantDetails.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenantDetails.
     * @param {TenantDetailsDeleteArgs} args - Arguments to delete one TenantDetails.
     * @example
     * // Delete one TenantDetails
     * const TenantDetails = await prisma.tenantDetails.delete({
     *   where: {
     *     // ... filter to delete one TenantDetails
     *   }
     * })
     * 
     */
    delete<T extends TenantDetailsDeleteArgs>(args: SelectSubset<T, TenantDetailsDeleteArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantDetails.
     * @param {TenantDetailsUpdateArgs} args - Arguments to update one TenantDetails.
     * @example
     * // Update one TenantDetails
     * const tenantDetails = await prisma.tenantDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantDetailsUpdateArgs>(args: SelectSubset<T, TenantDetailsUpdateArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantDetails.
     * @param {TenantDetailsDeleteManyArgs} args - Arguments to filter TenantDetails to delete.
     * @example
     * // Delete a few TenantDetails
     * const { count } = await prisma.tenantDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDetailsDeleteManyArgs>(args?: SelectSubset<T, TenantDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantDetails
     * const tenantDetails = await prisma.tenantDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantDetailsUpdateManyArgs>(args: SelectSubset<T, TenantDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantDetails and returns the data updated in the database.
     * @param {TenantDetailsUpdateManyAndReturnArgs} args - Arguments to update many TenantDetails.
     * @example
     * // Update many TenantDetails
     * const tenantDetails = await prisma.tenantDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantDetails and only return the `id`
     * const tenantDetailsWithIdOnly = await prisma.tenantDetails.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenantDetails.
     * @param {TenantDetailsUpsertArgs} args - Arguments to update or create a TenantDetails.
     * @example
     * // Update or create a TenantDetails
     * const tenantDetails = await prisma.tenantDetails.upsert({
     *   create: {
     *     // ... data to create a TenantDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantDetails we want to update
     *   }
     * })
     */
    upsert<T extends TenantDetailsUpsertArgs>(args: SelectSubset<T, TenantDetailsUpsertArgs<ExtArgs>>): Prisma__TenantDetailsClient<$Result.GetResult<Prisma.$TenantDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantDetailsCountArgs} args - Arguments to filter TenantDetails to count.
     * @example
     * // Count the number of TenantDetails
     * const count = await prisma.tenantDetails.count({
     *   where: {
     *     // ... the filter for the TenantDetails we want to count
     *   }
     * })
    **/
    count<T extends TenantDetailsCountArgs>(
      args?: Subset<T, TenantDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantDetailsAggregateArgs>(args: Subset<T, TenantDetailsAggregateArgs>): Prisma.PrismaPromise<GetTenantDetailsAggregateType<T>>

    /**
     * Group by TenantDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantDetailsGroupByArgs} args - Group by arguments.
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
      T extends TenantDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantDetailsGroupByArgs['orderBy'] }
        : { orderBy?: TenantDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantDetails model
   */
  readonly fields: TenantDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TenantDetails model
   */
  interface TenantDetailsFieldRefs {
    readonly id: FieldRef<"TenantDetails", 'String'>
    readonly tenantId: FieldRef<"TenantDetails", 'String'>
    readonly presidingOfficerEmail: FieldRef<"TenantDetails", 'String'>
    readonly poshCommitteeEmail: FieldRef<"TenantDetails", 'String'>
    readonly hrContactName: FieldRef<"TenantDetails", 'String'>
    readonly hrContactEmail: FieldRef<"TenantDetails", 'String'>
    readonly hrContactPhone: FieldRef<"TenantDetails", 'String'>
    readonly ceoName: FieldRef<"TenantDetails", 'String'>
    readonly ceoEmail: FieldRef<"TenantDetails", 'String'>
    readonly ceoContact: FieldRef<"TenantDetails", 'String'>
    readonly ctoName: FieldRef<"TenantDetails", 'String'>
    readonly ctoEmail: FieldRef<"TenantDetails", 'String'>
    readonly ctoContact: FieldRef<"TenantDetails", 'String'>
    readonly ccoEmail: FieldRef<"TenantDetails", 'String'>
    readonly ccoContact: FieldRef<"TenantDetails", 'String'>
    readonly croName: FieldRef<"TenantDetails", 'String'>
    readonly croEmail: FieldRef<"TenantDetails", 'String'>
    readonly croContact: FieldRef<"TenantDetails", 'String'>
    readonly legalOfficerName: FieldRef<"TenantDetails", 'String'>
    readonly legalOfficerEmail: FieldRef<"TenantDetails", 'String'>
    readonly legalOfficerContact: FieldRef<"TenantDetails", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TenantDetails findUnique
   */
  export type TenantDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TenantDetails to fetch.
     */
    where: TenantDetailsWhereUniqueInput
  }

  /**
   * TenantDetails findUniqueOrThrow
   */
  export type TenantDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TenantDetails to fetch.
     */
    where: TenantDetailsWhereUniqueInput
  }

  /**
   * TenantDetails findFirst
   */
  export type TenantDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TenantDetails to fetch.
     */
    where?: TenantDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantDetails to fetch.
     */
    orderBy?: TenantDetailsOrderByWithRelationInput | TenantDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantDetails.
     */
    cursor?: TenantDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantDetails.
     */
    distinct?: TenantDetailsScalarFieldEnum | TenantDetailsScalarFieldEnum[]
  }

  /**
   * TenantDetails findFirstOrThrow
   */
  export type TenantDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TenantDetails to fetch.
     */
    where?: TenantDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantDetails to fetch.
     */
    orderBy?: TenantDetailsOrderByWithRelationInput | TenantDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantDetails.
     */
    cursor?: TenantDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantDetails.
     */
    distinct?: TenantDetailsScalarFieldEnum | TenantDetailsScalarFieldEnum[]
  }

  /**
   * TenantDetails findMany
   */
  export type TenantDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * Filter, which TenantDetails to fetch.
     */
    where?: TenantDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantDetails to fetch.
     */
    orderBy?: TenantDetailsOrderByWithRelationInput | TenantDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantDetails.
     */
    cursor?: TenantDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantDetails.
     */
    skip?: number
    distinct?: TenantDetailsScalarFieldEnum | TenantDetailsScalarFieldEnum[]
  }

  /**
   * TenantDetails create
   */
  export type TenantDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantDetails.
     */
    data: XOR<TenantDetailsCreateInput, TenantDetailsUncheckedCreateInput>
  }

  /**
   * TenantDetails createMany
   */
  export type TenantDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantDetails.
     */
    data: TenantDetailsCreateManyInput | TenantDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantDetails createManyAndReturn
   */
  export type TenantDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many TenantDetails.
     */
    data: TenantDetailsCreateManyInput | TenantDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantDetails update
   */
  export type TenantDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantDetails.
     */
    data: XOR<TenantDetailsUpdateInput, TenantDetailsUncheckedUpdateInput>
    /**
     * Choose, which TenantDetails to update.
     */
    where: TenantDetailsWhereUniqueInput
  }

  /**
   * TenantDetails updateMany
   */
  export type TenantDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantDetails.
     */
    data: XOR<TenantDetailsUpdateManyMutationInput, TenantDetailsUncheckedUpdateManyInput>
    /**
     * Filter which TenantDetails to update
     */
    where?: TenantDetailsWhereInput
    /**
     * Limit how many TenantDetails to update.
     */
    limit?: number
  }

  /**
   * TenantDetails updateManyAndReturn
   */
  export type TenantDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * The data used to update TenantDetails.
     */
    data: XOR<TenantDetailsUpdateManyMutationInput, TenantDetailsUncheckedUpdateManyInput>
    /**
     * Filter which TenantDetails to update
     */
    where?: TenantDetailsWhereInput
    /**
     * Limit how many TenantDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantDetails upsert
   */
  export type TenantDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantDetails to update in case it exists.
     */
    where: TenantDetailsWhereUniqueInput
    /**
     * In case the TenantDetails found by the `where` argument doesn't exist, create a new TenantDetails with this data.
     */
    create: XOR<TenantDetailsCreateInput, TenantDetailsUncheckedCreateInput>
    /**
     * In case the TenantDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantDetailsUpdateInput, TenantDetailsUncheckedUpdateInput>
  }

  /**
   * TenantDetails delete
   */
  export type TenantDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
    /**
     * Filter which TenantDetails to delete.
     */
    where: TenantDetailsWhereUniqueInput
  }

  /**
   * TenantDetails deleteMany
   */
  export type TenantDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantDetails to delete
     */
    where?: TenantDetailsWhereInput
    /**
     * Limit how many TenantDetails to delete.
     */
    limit?: number
  }

  /**
   * TenantDetails without action
   */
  export type TenantDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantDetails
     */
    select?: TenantDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantDetails
     */
    omit?: TenantDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantDetailsInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    tenantId: number
    email: number
    name: number
    password: number
    role: number
    createdAt: number
    userRoles: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    tenantId?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    userRoles?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    tenantId: string | null
    email: string
    name: string
    password: string | null
    role: $Enums.UserRole
    createdAt: Date
    userRoles: $Enums.UserRole[]
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    userRoles?: boolean
    tenant?: boolean | User$tenantArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    mcqAnswers?: boolean | User$mcqAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    userRoles?: boolean
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    userRoles?: boolean
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    tenantId?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    userRoles?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "email" | "name" | "password" | "role" | "createdAt" | "userRoles", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | User$tenantArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    mcqAnswers?: boolean | User$mcqAnswersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | User$tenantArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs> | null
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      mcqAnswers: Prisma.$UserMCQAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string | null
      email: string
      name: string
      password: string | null
      role: $Enums.UserRole
      createdAt: Date
      userRoles: $Enums.UserRole[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends User$tenantArgs<ExtArgs> = {}>(args?: Subset<T, User$tenantArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mcqAnswers<T extends User$mcqAnswersArgs<ExtArgs> = {}>(args?: Subset<T, User$mcqAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly userRoles: FieldRef<"User", 'UserRole[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tenant
   */
  export type User$tenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User.mcqAnswers
   */
  export type User$mcqAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    where?: UserMCQAnswerWhereInput
    orderBy?: UserMCQAnswerOrderByWithRelationInput | UserMCQAnswerOrderByWithRelationInput[]
    cursor?: UserMCQAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMCQAnswerScalarFieldEnum | UserMCQAnswerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    duration: number | null
  }

  export type CourseSumAggregateOutputType = {
    duration: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    duration: number | null
    tags: string | null
    learningObjectives: string | null
    targetAudience: string | null
    materialUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    duration: number | null
    tags: string | null
    learningObjectives: string | null
    targetAudience: string | null
    materialUrl: string | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    duration: number
    tags: number
    learningObjectives: number
    targetAudience: number
    materialUrl: number
    videoUrl: number
    slides: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    duration?: true
  }

  export type CourseSumAggregateInputType = {
    duration?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    tags?: true
    learningObjectives?: true
    targetAudience?: true
    materialUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    tags?: true
    learningObjectives?: true
    targetAudience?: true
    materialUrl?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    duration?: true
    tags?: true
    learningObjectives?: true
    targetAudience?: true
    materialUrl?: true
    videoUrl?: true
    slides?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl: string | null
    slides: JsonValue[]
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    tags?: boolean
    learningObjectives?: boolean
    targetAudience?: boolean
    materialUrl?: boolean
    videoUrl?: boolean
    slides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mcqs?: boolean | Course$mcqsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    tenants?: boolean | Course$tenantsArgs<ExtArgs>
    slideExplanations?: boolean | Course$slideExplanationsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    tags?: boolean
    learningObjectives?: boolean
    targetAudience?: boolean
    materialUrl?: boolean
    videoUrl?: boolean
    slides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    tags?: boolean
    learningObjectives?: boolean
    targetAudience?: boolean
    materialUrl?: boolean
    videoUrl?: boolean
    slides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    tags?: boolean
    learningObjectives?: boolean
    targetAudience?: boolean
    materialUrl?: boolean
    videoUrl?: boolean
    slides?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "duration" | "tags" | "learningObjectives" | "targetAudience" | "materialUrl" | "videoUrl" | "slides" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mcqs?: boolean | Course$mcqsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    tenants?: boolean | Course$tenantsArgs<ExtArgs>
    slideExplanations?: boolean | Course$slideExplanationsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      mcqs: Prisma.$MCQPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      tenants: Prisma.$TenantCoursePayload<ExtArgs>[]
      slideExplanations: Prisma.$SlideExplanationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      duration: number
      tags: string
      learningObjectives: string
      targetAudience: string
      materialUrl: string
      videoUrl: string | null
      slides: Prisma.JsonValue[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mcqs<T extends Course$mcqsArgs<ExtArgs> = {}>(args?: Subset<T, Course$mcqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenants<T extends Course$tenantsArgs<ExtArgs> = {}>(args?: Subset<T, Course$tenantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slideExplanations<T extends Course$slideExplanationsArgs<ExtArgs> = {}>(args?: Subset<T, Course$slideExplanationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly duration: FieldRef<"Course", 'Int'>
    readonly tags: FieldRef<"Course", 'String'>
    readonly learningObjectives: FieldRef<"Course", 'String'>
    readonly targetAudience: FieldRef<"Course", 'String'>
    readonly materialUrl: FieldRef<"Course", 'String'>
    readonly videoUrl: FieldRef<"Course", 'String'>
    readonly slides: FieldRef<"Course", 'Json[]'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.mcqs
   */
  export type Course$mcqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    where?: MCQWhereInput
    orderBy?: MCQOrderByWithRelationInput | MCQOrderByWithRelationInput[]
    cursor?: MCQWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MCQScalarFieldEnum | MCQScalarFieldEnum[]
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course.tenants
   */
  export type Course$tenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    where?: TenantCourseWhereInput
    orderBy?: TenantCourseOrderByWithRelationInput | TenantCourseOrderByWithRelationInput[]
    cursor?: TenantCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenantCourseScalarFieldEnum | TenantCourseScalarFieldEnum[]
  }

  /**
   * Course.slideExplanations
   */
  export type Course$slideExplanationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    where?: SlideExplanationWhereInput
    orderBy?: SlideExplanationOrderByWithRelationInput | SlideExplanationOrderByWithRelationInput[]
    cursor?: SlideExplanationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlideExplanationScalarFieldEnum | SlideExplanationScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    progress: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    progress: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    progress: number | null
    status: $Enums.EnrollmentStatus | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    progress: number | null
    status: $Enums.EnrollmentStatus | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    progress: number
    status: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    progress?: true
  }

  export type EnrollmentSumAggregateInputType = {
    progress?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    progress?: true
    status?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    progress?: true
    status?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    progress?: true
    status?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    progress: number
    status: $Enums.EnrollmentStatus
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    progress?: boolean
    status?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "progress" | "status", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      progress: number
      status: $Enums.EnrollmentStatus
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly courseId: FieldRef<"Enrollment", 'String'>
    readonly progress: FieldRef<"Enrollment", 'Int'>
    readonly status: FieldRef<"Enrollment", 'EnrollmentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    certificateUrl: string | null
    issuedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    courseId: string | null
    certificateUrl: string | null
    issuedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    certificateUrl: number
    issuedAt: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    certificateUrl?: true
    issuedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    certificateUrl?: true
    issuedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    certificateUrl?: true
    issuedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    userId: string
    courseId: string
    certificateUrl: string
    issuedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    certificateUrl?: boolean
    issuedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    certificateUrl?: boolean
    issuedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    certificateUrl?: boolean
    issuedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    certificateUrl?: boolean
    issuedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "certificateUrl" | "issuedAt", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      courseId: string
      certificateUrl: string
      issuedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly userId: FieldRef<"Certificate", 'String'>
    readonly courseId: FieldRef<"Certificate", 'String'>
    readonly certificateUrl: FieldRef<"Certificate", 'String'>
    readonly issuedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model TenantCourse
   */

  export type AggregateTenantCourse = {
    _count: TenantCourseCountAggregateOutputType | null
    _min: TenantCourseMinAggregateOutputType | null
    _max: TenantCourseMaxAggregateOutputType | null
  }

  export type TenantCourseMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    courseId: string | null
    assignedAt: Date | null
  }

  export type TenantCourseMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    courseId: string | null
    assignedAt: Date | null
  }

  export type TenantCourseCountAggregateOutputType = {
    id: number
    tenantId: number
    courseId: number
    explanations: number
    assignedAt: number
    _all: number
  }


  export type TenantCourseMinAggregateInputType = {
    id?: true
    tenantId?: true
    courseId?: true
    assignedAt?: true
  }

  export type TenantCourseMaxAggregateInputType = {
    id?: true
    tenantId?: true
    courseId?: true
    assignedAt?: true
  }

  export type TenantCourseCountAggregateInputType = {
    id?: true
    tenantId?: true
    courseId?: true
    explanations?: true
    assignedAt?: true
    _all?: true
  }

  export type TenantCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantCourse to aggregate.
     */
    where?: TenantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantCourses to fetch.
     */
    orderBy?: TenantCourseOrderByWithRelationInput | TenantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantCourses
    **/
    _count?: true | TenantCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantCourseMaxAggregateInputType
  }

  export type GetTenantCourseAggregateType<T extends TenantCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantCourse[P]>
      : GetScalarType<T[P], AggregateTenantCourse[P]>
  }




  export type TenantCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantCourseWhereInput
    orderBy?: TenantCourseOrderByWithAggregationInput | TenantCourseOrderByWithAggregationInput[]
    by: TenantCourseScalarFieldEnum[] | TenantCourseScalarFieldEnum
    having?: TenantCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCourseCountAggregateInputType | true
    _min?: TenantCourseMinAggregateInputType
    _max?: TenantCourseMaxAggregateInputType
  }

  export type TenantCourseGroupByOutputType = {
    id: string
    tenantId: string
    courseId: string
    explanations: JsonValue | null
    assignedAt: Date
    _count: TenantCourseCountAggregateOutputType | null
    _min: TenantCourseMinAggregateOutputType | null
    _max: TenantCourseMaxAggregateOutputType | null
  }

  type GetTenantCourseGroupByPayload<T extends TenantCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantCourseGroupByOutputType[P]>
            : GetScalarType<T[P], TenantCourseGroupByOutputType[P]>
        }
      >
    >


  export type TenantCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    courseId?: boolean
    explanations?: boolean
    assignedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantCourse"]>

  export type TenantCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    courseId?: boolean
    explanations?: boolean
    assignedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantCourse"]>

  export type TenantCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    courseId?: boolean
    explanations?: boolean
    assignedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantCourse"]>

  export type TenantCourseSelectScalar = {
    id?: boolean
    tenantId?: boolean
    courseId?: boolean
    explanations?: boolean
    assignedAt?: boolean
  }

  export type TenantCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "courseId" | "explanations" | "assignedAt", ExtArgs["result"]["tenantCourse"]>
  export type TenantCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TenantCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TenantCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TenantCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantCourse"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      courseId: string
      explanations: Prisma.JsonValue | null
      assignedAt: Date
    }, ExtArgs["result"]["tenantCourse"]>
    composites: {}
  }

  type TenantCourseGetPayload<S extends boolean | null | undefined | TenantCourseDefaultArgs> = $Result.GetResult<Prisma.$TenantCoursePayload, S>

  type TenantCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCourseCountAggregateInputType | true
    }

  export interface TenantCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantCourse'], meta: { name: 'TenantCourse' } }
    /**
     * Find zero or one TenantCourse that matches the filter.
     * @param {TenantCourseFindUniqueArgs} args - Arguments to find a TenantCourse
     * @example
     * // Get one TenantCourse
     * const tenantCourse = await prisma.tenantCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantCourseFindUniqueArgs>(args: SelectSubset<T, TenantCourseFindUniqueArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantCourseFindUniqueOrThrowArgs} args - Arguments to find a TenantCourse
     * @example
     * // Get one TenantCourse
     * const tenantCourse = await prisma.tenantCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCourseFindFirstArgs} args - Arguments to find a TenantCourse
     * @example
     * // Get one TenantCourse
     * const tenantCourse = await prisma.tenantCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantCourseFindFirstArgs>(args?: SelectSubset<T, TenantCourseFindFirstArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCourseFindFirstOrThrowArgs} args - Arguments to find a TenantCourse
     * @example
     * // Get one TenantCourse
     * const tenantCourse = await prisma.tenantCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantCourses
     * const tenantCourses = await prisma.tenantCourse.findMany()
     * 
     * // Get first 10 TenantCourses
     * const tenantCourses = await prisma.tenantCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantCourseWithIdOnly = await prisma.tenantCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantCourseFindManyArgs>(args?: SelectSubset<T, TenantCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantCourse.
     * @param {TenantCourseCreateArgs} args - Arguments to create a TenantCourse.
     * @example
     * // Create one TenantCourse
     * const TenantCourse = await prisma.tenantCourse.create({
     *   data: {
     *     // ... data to create a TenantCourse
     *   }
     * })
     * 
     */
    create<T extends TenantCourseCreateArgs>(args: SelectSubset<T, TenantCourseCreateArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantCourses.
     * @param {TenantCourseCreateManyArgs} args - Arguments to create many TenantCourses.
     * @example
     * // Create many TenantCourses
     * const tenantCourse = await prisma.tenantCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCourseCreateManyArgs>(args?: SelectSubset<T, TenantCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TenantCourses and returns the data saved in the database.
     * @param {TenantCourseCreateManyAndReturnArgs} args - Arguments to create many TenantCourses.
     * @example
     * // Create many TenantCourses
     * const tenantCourse = await prisma.tenantCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TenantCourses and only return the `id`
     * const tenantCourseWithIdOnly = await prisma.tenantCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TenantCourse.
     * @param {TenantCourseDeleteArgs} args - Arguments to delete one TenantCourse.
     * @example
     * // Delete one TenantCourse
     * const TenantCourse = await prisma.tenantCourse.delete({
     *   where: {
     *     // ... filter to delete one TenantCourse
     *   }
     * })
     * 
     */
    delete<T extends TenantCourseDeleteArgs>(args: SelectSubset<T, TenantCourseDeleteArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantCourse.
     * @param {TenantCourseUpdateArgs} args - Arguments to update one TenantCourse.
     * @example
     * // Update one TenantCourse
     * const tenantCourse = await prisma.tenantCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantCourseUpdateArgs>(args: SelectSubset<T, TenantCourseUpdateArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantCourses.
     * @param {TenantCourseDeleteManyArgs} args - Arguments to filter TenantCourses to delete.
     * @example
     * // Delete a few TenantCourses
     * const { count } = await prisma.tenantCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantCourseDeleteManyArgs>(args?: SelectSubset<T, TenantCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantCourses
     * const tenantCourse = await prisma.tenantCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantCourseUpdateManyArgs>(args: SelectSubset<T, TenantCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantCourses and returns the data updated in the database.
     * @param {TenantCourseUpdateManyAndReturnArgs} args - Arguments to update many TenantCourses.
     * @example
     * // Update many TenantCourses
     * const tenantCourse = await prisma.tenantCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TenantCourses and only return the `id`
     * const tenantCourseWithIdOnly = await prisma.tenantCourse.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TenantCourse.
     * @param {TenantCourseUpsertArgs} args - Arguments to update or create a TenantCourse.
     * @example
     * // Update or create a TenantCourse
     * const tenantCourse = await prisma.tenantCourse.upsert({
     *   create: {
     *     // ... data to create a TenantCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantCourse we want to update
     *   }
     * })
     */
    upsert<T extends TenantCourseUpsertArgs>(args: SelectSubset<T, TenantCourseUpsertArgs<ExtArgs>>): Prisma__TenantCourseClient<$Result.GetResult<Prisma.$TenantCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCourseCountArgs} args - Arguments to filter TenantCourses to count.
     * @example
     * // Count the number of TenantCourses
     * const count = await prisma.tenantCourse.count({
     *   where: {
     *     // ... the filter for the TenantCourses we want to count
     *   }
     * })
    **/
    count<T extends TenantCourseCountArgs>(
      args?: Subset<T, TenantCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantCourseAggregateArgs>(args: Subset<T, TenantCourseAggregateArgs>): Prisma.PrismaPromise<GetTenantCourseAggregateType<T>>

    /**
     * Group by TenantCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCourseGroupByArgs} args - Group by arguments.
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
      T extends TenantCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantCourseGroupByArgs['orderBy'] }
        : { orderBy?: TenantCourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantCourse model
   */
  readonly fields: TenantCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TenantCourse model
   */
  interface TenantCourseFieldRefs {
    readonly id: FieldRef<"TenantCourse", 'String'>
    readonly tenantId: FieldRef<"TenantCourse", 'String'>
    readonly courseId: FieldRef<"TenantCourse", 'String'>
    readonly explanations: FieldRef<"TenantCourse", 'Json'>
    readonly assignedAt: FieldRef<"TenantCourse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantCourse findUnique
   */
  export type TenantCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * Filter, which TenantCourse to fetch.
     */
    where: TenantCourseWhereUniqueInput
  }

  /**
   * TenantCourse findUniqueOrThrow
   */
  export type TenantCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * Filter, which TenantCourse to fetch.
     */
    where: TenantCourseWhereUniqueInput
  }

  /**
   * TenantCourse findFirst
   */
  export type TenantCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * Filter, which TenantCourse to fetch.
     */
    where?: TenantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantCourses to fetch.
     */
    orderBy?: TenantCourseOrderByWithRelationInput | TenantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantCourses.
     */
    cursor?: TenantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantCourses.
     */
    distinct?: TenantCourseScalarFieldEnum | TenantCourseScalarFieldEnum[]
  }

  /**
   * TenantCourse findFirstOrThrow
   */
  export type TenantCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * Filter, which TenantCourse to fetch.
     */
    where?: TenantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantCourses to fetch.
     */
    orderBy?: TenantCourseOrderByWithRelationInput | TenantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantCourses.
     */
    cursor?: TenantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantCourses.
     */
    distinct?: TenantCourseScalarFieldEnum | TenantCourseScalarFieldEnum[]
  }

  /**
   * TenantCourse findMany
   */
  export type TenantCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * Filter, which TenantCourses to fetch.
     */
    where?: TenantCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantCourses to fetch.
     */
    orderBy?: TenantCourseOrderByWithRelationInput | TenantCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantCourses.
     */
    cursor?: TenantCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantCourses.
     */
    skip?: number
    distinct?: TenantCourseScalarFieldEnum | TenantCourseScalarFieldEnum[]
  }

  /**
   * TenantCourse create
   */
  export type TenantCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantCourse.
     */
    data: XOR<TenantCourseCreateInput, TenantCourseUncheckedCreateInput>
  }

  /**
   * TenantCourse createMany
   */
  export type TenantCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantCourses.
     */
    data: TenantCourseCreateManyInput | TenantCourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantCourse createManyAndReturn
   */
  export type TenantCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * The data used to create many TenantCourses.
     */
    data: TenantCourseCreateManyInput | TenantCourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantCourse update
   */
  export type TenantCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantCourse.
     */
    data: XOR<TenantCourseUpdateInput, TenantCourseUncheckedUpdateInput>
    /**
     * Choose, which TenantCourse to update.
     */
    where: TenantCourseWhereUniqueInput
  }

  /**
   * TenantCourse updateMany
   */
  export type TenantCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantCourses.
     */
    data: XOR<TenantCourseUpdateManyMutationInput, TenantCourseUncheckedUpdateManyInput>
    /**
     * Filter which TenantCourses to update
     */
    where?: TenantCourseWhereInput
    /**
     * Limit how many TenantCourses to update.
     */
    limit?: number
  }

  /**
   * TenantCourse updateManyAndReturn
   */
  export type TenantCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * The data used to update TenantCourses.
     */
    data: XOR<TenantCourseUpdateManyMutationInput, TenantCourseUncheckedUpdateManyInput>
    /**
     * Filter which TenantCourses to update
     */
    where?: TenantCourseWhereInput
    /**
     * Limit how many TenantCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TenantCourse upsert
   */
  export type TenantCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantCourse to update in case it exists.
     */
    where: TenantCourseWhereUniqueInput
    /**
     * In case the TenantCourse found by the `where` argument doesn't exist, create a new TenantCourse with this data.
     */
    create: XOR<TenantCourseCreateInput, TenantCourseUncheckedCreateInput>
    /**
     * In case the TenantCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantCourseUpdateInput, TenantCourseUncheckedUpdateInput>
  }

  /**
   * TenantCourse delete
   */
  export type TenantCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
    /**
     * Filter which TenantCourse to delete.
     */
    where: TenantCourseWhereUniqueInput
  }

  /**
   * TenantCourse deleteMany
   */
  export type TenantCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantCourses to delete
     */
    where?: TenantCourseWhereInput
    /**
     * Limit how many TenantCourses to delete.
     */
    limit?: number
  }

  /**
   * TenantCourse without action
   */
  export type TenantCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCourse
     */
    select?: TenantCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantCourse
     */
    omit?: TenantCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantCourseInclude<ExtArgs> | null
  }


  /**
   * Model MCQ
   */

  export type AggregateMCQ = {
    _count: MCQCountAggregateOutputType | null
    _min: MCQMinAggregateOutputType | null
    _max: MCQMaxAggregateOutputType | null
  }

  export type MCQMinAggregateOutputType = {
    id: string | null
    question: string | null
    correctAnswer: string | null
    explanation: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MCQMaxAggregateOutputType = {
    id: string | null
    question: string | null
    correctAnswer: string | null
    explanation: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MCQCountAggregateOutputType = {
    id: number
    question: number
    options: number
    correctAnswer: number
    explanation: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MCQMinAggregateInputType = {
    id?: true
    question?: true
    correctAnswer?: true
    explanation?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MCQMaxAggregateInputType = {
    id?: true
    question?: true
    correctAnswer?: true
    explanation?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MCQCountAggregateInputType = {
    id?: true
    question?: true
    options?: true
    correctAnswer?: true
    explanation?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MCQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MCQ to aggregate.
     */
    where?: MCQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCQS to fetch.
     */
    orderBy?: MCQOrderByWithRelationInput | MCQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MCQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MCQS
    **/
    _count?: true | MCQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MCQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MCQMaxAggregateInputType
  }

  export type GetMCQAggregateType<T extends MCQAggregateArgs> = {
        [P in keyof T & keyof AggregateMCQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMCQ[P]>
      : GetScalarType<T[P], AggregateMCQ[P]>
  }




  export type MCQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MCQWhereInput
    orderBy?: MCQOrderByWithAggregationInput | MCQOrderByWithAggregationInput[]
    by: MCQScalarFieldEnum[] | MCQScalarFieldEnum
    having?: MCQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MCQCountAggregateInputType | true
    _min?: MCQMinAggregateInputType
    _max?: MCQMaxAggregateInputType
  }

  export type MCQGroupByOutputType = {
    id: string
    question: string
    options: string[]
    correctAnswer: string
    explanation: string | null
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: MCQCountAggregateOutputType | null
    _min: MCQMinAggregateOutputType | null
    _max: MCQMaxAggregateOutputType | null
  }

  type GetMCQGroupByPayload<T extends MCQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MCQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MCQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MCQGroupByOutputType[P]>
            : GetScalarType<T[P], MCQGroupByOutputType[P]>
        }
      >
    >


  export type MCQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    userAnswers?: boolean | MCQ$userAnswersArgs<ExtArgs>
    _count?: boolean | MCQCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mCQ"]>

  export type MCQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mCQ"]>

  export type MCQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mCQ"]>

  export type MCQSelectScalar = {
    id?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    explanation?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MCQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "options" | "correctAnswer" | "explanation" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["mCQ"]>
  export type MCQInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    userAnswers?: boolean | MCQ$userAnswersArgs<ExtArgs>
    _count?: boolean | MCQCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MCQIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type MCQIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $MCQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MCQ"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      userAnswers: Prisma.$UserMCQAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      options: string[]
      correctAnswer: string
      explanation: string | null
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mCQ"]>
    composites: {}
  }

  type MCQGetPayload<S extends boolean | null | undefined | MCQDefaultArgs> = $Result.GetResult<Prisma.$MCQPayload, S>

  type MCQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MCQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MCQCountAggregateInputType | true
    }

  export interface MCQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MCQ'], meta: { name: 'MCQ' } }
    /**
     * Find zero or one MCQ that matches the filter.
     * @param {MCQFindUniqueArgs} args - Arguments to find a MCQ
     * @example
     * // Get one MCQ
     * const mCQ = await prisma.mCQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MCQFindUniqueArgs>(args: SelectSubset<T, MCQFindUniqueArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MCQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MCQFindUniqueOrThrowArgs} args - Arguments to find a MCQ
     * @example
     * // Get one MCQ
     * const mCQ = await prisma.mCQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MCQFindUniqueOrThrowArgs>(args: SelectSubset<T, MCQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MCQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCQFindFirstArgs} args - Arguments to find a MCQ
     * @example
     * // Get one MCQ
     * const mCQ = await prisma.mCQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MCQFindFirstArgs>(args?: SelectSubset<T, MCQFindFirstArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MCQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCQFindFirstOrThrowArgs} args - Arguments to find a MCQ
     * @example
     * // Get one MCQ
     * const mCQ = await prisma.mCQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MCQFindFirstOrThrowArgs>(args?: SelectSubset<T, MCQFindFirstOrThrowArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MCQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MCQS
     * const mCQS = await prisma.mCQ.findMany()
     * 
     * // Get first 10 MCQS
     * const mCQS = await prisma.mCQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mCQWithIdOnly = await prisma.mCQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MCQFindManyArgs>(args?: SelectSubset<T, MCQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MCQ.
     * @param {MCQCreateArgs} args - Arguments to create a MCQ.
     * @example
     * // Create one MCQ
     * const MCQ = await prisma.mCQ.create({
     *   data: {
     *     // ... data to create a MCQ
     *   }
     * })
     * 
     */
    create<T extends MCQCreateArgs>(args: SelectSubset<T, MCQCreateArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MCQS.
     * @param {MCQCreateManyArgs} args - Arguments to create many MCQS.
     * @example
     * // Create many MCQS
     * const mCQ = await prisma.mCQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MCQCreateManyArgs>(args?: SelectSubset<T, MCQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MCQS and returns the data saved in the database.
     * @param {MCQCreateManyAndReturnArgs} args - Arguments to create many MCQS.
     * @example
     * // Create many MCQS
     * const mCQ = await prisma.mCQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MCQS and only return the `id`
     * const mCQWithIdOnly = await prisma.mCQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MCQCreateManyAndReturnArgs>(args?: SelectSubset<T, MCQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MCQ.
     * @param {MCQDeleteArgs} args - Arguments to delete one MCQ.
     * @example
     * // Delete one MCQ
     * const MCQ = await prisma.mCQ.delete({
     *   where: {
     *     // ... filter to delete one MCQ
     *   }
     * })
     * 
     */
    delete<T extends MCQDeleteArgs>(args: SelectSubset<T, MCQDeleteArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MCQ.
     * @param {MCQUpdateArgs} args - Arguments to update one MCQ.
     * @example
     * // Update one MCQ
     * const mCQ = await prisma.mCQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MCQUpdateArgs>(args: SelectSubset<T, MCQUpdateArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MCQS.
     * @param {MCQDeleteManyArgs} args - Arguments to filter MCQS to delete.
     * @example
     * // Delete a few MCQS
     * const { count } = await prisma.mCQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MCQDeleteManyArgs>(args?: SelectSubset<T, MCQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MCQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MCQS
     * const mCQ = await prisma.mCQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MCQUpdateManyArgs>(args: SelectSubset<T, MCQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MCQS and returns the data updated in the database.
     * @param {MCQUpdateManyAndReturnArgs} args - Arguments to update many MCQS.
     * @example
     * // Update many MCQS
     * const mCQ = await prisma.mCQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MCQS and only return the `id`
     * const mCQWithIdOnly = await prisma.mCQ.updateManyAndReturn({
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
    updateManyAndReturn<T extends MCQUpdateManyAndReturnArgs>(args: SelectSubset<T, MCQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MCQ.
     * @param {MCQUpsertArgs} args - Arguments to update or create a MCQ.
     * @example
     * // Update or create a MCQ
     * const mCQ = await prisma.mCQ.upsert({
     *   create: {
     *     // ... data to create a MCQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MCQ we want to update
     *   }
     * })
     */
    upsert<T extends MCQUpsertArgs>(args: SelectSubset<T, MCQUpsertArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MCQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCQCountArgs} args - Arguments to filter MCQS to count.
     * @example
     * // Count the number of MCQS
     * const count = await prisma.mCQ.count({
     *   where: {
     *     // ... the filter for the MCQS we want to count
     *   }
     * })
    **/
    count<T extends MCQCountArgs>(
      args?: Subset<T, MCQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MCQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MCQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MCQAggregateArgs>(args: Subset<T, MCQAggregateArgs>): Prisma.PrismaPromise<GetMCQAggregateType<T>>

    /**
     * Group by MCQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MCQGroupByArgs} args - Group by arguments.
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
      T extends MCQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MCQGroupByArgs['orderBy'] }
        : { orderBy?: MCQGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MCQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMCQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MCQ model
   */
  readonly fields: MCQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MCQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MCQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userAnswers<T extends MCQ$userAnswersArgs<ExtArgs> = {}>(args?: Subset<T, MCQ$userAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MCQ model
   */
  interface MCQFieldRefs {
    readonly id: FieldRef<"MCQ", 'String'>
    readonly question: FieldRef<"MCQ", 'String'>
    readonly options: FieldRef<"MCQ", 'String[]'>
    readonly correctAnswer: FieldRef<"MCQ", 'String'>
    readonly explanation: FieldRef<"MCQ", 'String'>
    readonly courseId: FieldRef<"MCQ", 'String'>
    readonly createdAt: FieldRef<"MCQ", 'DateTime'>
    readonly updatedAt: FieldRef<"MCQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MCQ findUnique
   */
  export type MCQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * Filter, which MCQ to fetch.
     */
    where: MCQWhereUniqueInput
  }

  /**
   * MCQ findUniqueOrThrow
   */
  export type MCQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * Filter, which MCQ to fetch.
     */
    where: MCQWhereUniqueInput
  }

  /**
   * MCQ findFirst
   */
  export type MCQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * Filter, which MCQ to fetch.
     */
    where?: MCQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCQS to fetch.
     */
    orderBy?: MCQOrderByWithRelationInput | MCQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MCQS.
     */
    cursor?: MCQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MCQS.
     */
    distinct?: MCQScalarFieldEnum | MCQScalarFieldEnum[]
  }

  /**
   * MCQ findFirstOrThrow
   */
  export type MCQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * Filter, which MCQ to fetch.
     */
    where?: MCQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCQS to fetch.
     */
    orderBy?: MCQOrderByWithRelationInput | MCQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MCQS.
     */
    cursor?: MCQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MCQS.
     */
    distinct?: MCQScalarFieldEnum | MCQScalarFieldEnum[]
  }

  /**
   * MCQ findMany
   */
  export type MCQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * Filter, which MCQS to fetch.
     */
    where?: MCQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MCQS to fetch.
     */
    orderBy?: MCQOrderByWithRelationInput | MCQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MCQS.
     */
    cursor?: MCQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MCQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MCQS.
     */
    skip?: number
    distinct?: MCQScalarFieldEnum | MCQScalarFieldEnum[]
  }

  /**
   * MCQ create
   */
  export type MCQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * The data needed to create a MCQ.
     */
    data: XOR<MCQCreateInput, MCQUncheckedCreateInput>
  }

  /**
   * MCQ createMany
   */
  export type MCQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MCQS.
     */
    data: MCQCreateManyInput | MCQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MCQ createManyAndReturn
   */
  export type MCQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * The data used to create many MCQS.
     */
    data: MCQCreateManyInput | MCQCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MCQ update
   */
  export type MCQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * The data needed to update a MCQ.
     */
    data: XOR<MCQUpdateInput, MCQUncheckedUpdateInput>
    /**
     * Choose, which MCQ to update.
     */
    where: MCQWhereUniqueInput
  }

  /**
   * MCQ updateMany
   */
  export type MCQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MCQS.
     */
    data: XOR<MCQUpdateManyMutationInput, MCQUncheckedUpdateManyInput>
    /**
     * Filter which MCQS to update
     */
    where?: MCQWhereInput
    /**
     * Limit how many MCQS to update.
     */
    limit?: number
  }

  /**
   * MCQ updateManyAndReturn
   */
  export type MCQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * The data used to update MCQS.
     */
    data: XOR<MCQUpdateManyMutationInput, MCQUncheckedUpdateManyInput>
    /**
     * Filter which MCQS to update
     */
    where?: MCQWhereInput
    /**
     * Limit how many MCQS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MCQ upsert
   */
  export type MCQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * The filter to search for the MCQ to update in case it exists.
     */
    where: MCQWhereUniqueInput
    /**
     * In case the MCQ found by the `where` argument doesn't exist, create a new MCQ with this data.
     */
    create: XOR<MCQCreateInput, MCQUncheckedCreateInput>
    /**
     * In case the MCQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MCQUpdateInput, MCQUncheckedUpdateInput>
  }

  /**
   * MCQ delete
   */
  export type MCQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
    /**
     * Filter which MCQ to delete.
     */
    where: MCQWhereUniqueInput
  }

  /**
   * MCQ deleteMany
   */
  export type MCQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MCQS to delete
     */
    where?: MCQWhereInput
    /**
     * Limit how many MCQS to delete.
     */
    limit?: number
  }

  /**
   * MCQ.userAnswers
   */
  export type MCQ$userAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    where?: UserMCQAnswerWhereInput
    orderBy?: UserMCQAnswerOrderByWithRelationInput | UserMCQAnswerOrderByWithRelationInput[]
    cursor?: UserMCQAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMCQAnswerScalarFieldEnum | UserMCQAnswerScalarFieldEnum[]
  }

  /**
   * MCQ without action
   */
  export type MCQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MCQ
     */
    select?: MCQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MCQ
     */
    omit?: MCQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MCQInclude<ExtArgs> | null
  }


  /**
   * Model UserMCQAnswer
   */

  export type AggregateUserMCQAnswer = {
    _count: UserMCQAnswerCountAggregateOutputType | null
    _min: UserMCQAnswerMinAggregateOutputType | null
    _max: UserMCQAnswerMaxAggregateOutputType | null
  }

  export type UserMCQAnswerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mcqId: string | null
    answer: string | null
    isCorrect: boolean | null
    createdAt: Date | null
  }

  export type UserMCQAnswerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mcqId: string | null
    answer: string | null
    isCorrect: boolean | null
    createdAt: Date | null
  }

  export type UserMCQAnswerCountAggregateOutputType = {
    id: number
    userId: number
    mcqId: number
    answer: number
    isCorrect: number
    createdAt: number
    _all: number
  }


  export type UserMCQAnswerMinAggregateInputType = {
    id?: true
    userId?: true
    mcqId?: true
    answer?: true
    isCorrect?: true
    createdAt?: true
  }

  export type UserMCQAnswerMaxAggregateInputType = {
    id?: true
    userId?: true
    mcqId?: true
    answer?: true
    isCorrect?: true
    createdAt?: true
  }

  export type UserMCQAnswerCountAggregateInputType = {
    id?: true
    userId?: true
    mcqId?: true
    answer?: true
    isCorrect?: true
    createdAt?: true
    _all?: true
  }

  export type UserMCQAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMCQAnswer to aggregate.
     */
    where?: UserMCQAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMCQAnswers to fetch.
     */
    orderBy?: UserMCQAnswerOrderByWithRelationInput | UserMCQAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMCQAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMCQAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMCQAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMCQAnswers
    **/
    _count?: true | UserMCQAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMCQAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMCQAnswerMaxAggregateInputType
  }

  export type GetUserMCQAnswerAggregateType<T extends UserMCQAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMCQAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMCQAnswer[P]>
      : GetScalarType<T[P], AggregateUserMCQAnswer[P]>
  }




  export type UserMCQAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMCQAnswerWhereInput
    orderBy?: UserMCQAnswerOrderByWithAggregationInput | UserMCQAnswerOrderByWithAggregationInput[]
    by: UserMCQAnswerScalarFieldEnum[] | UserMCQAnswerScalarFieldEnum
    having?: UserMCQAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMCQAnswerCountAggregateInputType | true
    _min?: UserMCQAnswerMinAggregateInputType
    _max?: UserMCQAnswerMaxAggregateInputType
  }

  export type UserMCQAnswerGroupByOutputType = {
    id: string
    userId: string
    mcqId: string
    answer: string
    isCorrect: boolean
    createdAt: Date
    _count: UserMCQAnswerCountAggregateOutputType | null
    _min: UserMCQAnswerMinAggregateOutputType | null
    _max: UserMCQAnswerMaxAggregateOutputType | null
  }

  type GetUserMCQAnswerGroupByPayload<T extends UserMCQAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMCQAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMCQAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMCQAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserMCQAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserMCQAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mcqId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mcq?: boolean | MCQDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMCQAnswer"]>

  export type UserMCQAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mcqId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mcq?: boolean | MCQDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMCQAnswer"]>

  export type UserMCQAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mcqId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mcq?: boolean | MCQDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMCQAnswer"]>

  export type UserMCQAnswerSelectScalar = {
    id?: boolean
    userId?: boolean
    mcqId?: boolean
    answer?: boolean
    isCorrect?: boolean
    createdAt?: boolean
  }

  export type UserMCQAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mcqId" | "answer" | "isCorrect" | "createdAt", ExtArgs["result"]["userMCQAnswer"]>
  export type UserMCQAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mcq?: boolean | MCQDefaultArgs<ExtArgs>
  }
  export type UserMCQAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mcq?: boolean | MCQDefaultArgs<ExtArgs>
  }
  export type UserMCQAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mcq?: boolean | MCQDefaultArgs<ExtArgs>
  }

  export type $UserMCQAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMCQAnswer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mcq: Prisma.$MCQPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mcqId: string
      answer: string
      isCorrect: boolean
      createdAt: Date
    }, ExtArgs["result"]["userMCQAnswer"]>
    composites: {}
  }

  type UserMCQAnswerGetPayload<S extends boolean | null | undefined | UserMCQAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserMCQAnswerPayload, S>

  type UserMCQAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMCQAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMCQAnswerCountAggregateInputType | true
    }

  export interface UserMCQAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMCQAnswer'], meta: { name: 'UserMCQAnswer' } }
    /**
     * Find zero or one UserMCQAnswer that matches the filter.
     * @param {UserMCQAnswerFindUniqueArgs} args - Arguments to find a UserMCQAnswer
     * @example
     * // Get one UserMCQAnswer
     * const userMCQAnswer = await prisma.userMCQAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMCQAnswerFindUniqueArgs>(args: SelectSubset<T, UserMCQAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMCQAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMCQAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserMCQAnswer
     * @example
     * // Get one UserMCQAnswer
     * const userMCQAnswer = await prisma.userMCQAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMCQAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMCQAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMCQAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMCQAnswerFindFirstArgs} args - Arguments to find a UserMCQAnswer
     * @example
     * // Get one UserMCQAnswer
     * const userMCQAnswer = await prisma.userMCQAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMCQAnswerFindFirstArgs>(args?: SelectSubset<T, UserMCQAnswerFindFirstArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMCQAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMCQAnswerFindFirstOrThrowArgs} args - Arguments to find a UserMCQAnswer
     * @example
     * // Get one UserMCQAnswer
     * const userMCQAnswer = await prisma.userMCQAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMCQAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMCQAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMCQAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMCQAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMCQAnswers
     * const userMCQAnswers = await prisma.userMCQAnswer.findMany()
     * 
     * // Get first 10 UserMCQAnswers
     * const userMCQAnswers = await prisma.userMCQAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMCQAnswerWithIdOnly = await prisma.userMCQAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMCQAnswerFindManyArgs>(args?: SelectSubset<T, UserMCQAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMCQAnswer.
     * @param {UserMCQAnswerCreateArgs} args - Arguments to create a UserMCQAnswer.
     * @example
     * // Create one UserMCQAnswer
     * const UserMCQAnswer = await prisma.userMCQAnswer.create({
     *   data: {
     *     // ... data to create a UserMCQAnswer
     *   }
     * })
     * 
     */
    create<T extends UserMCQAnswerCreateArgs>(args: SelectSubset<T, UserMCQAnswerCreateArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMCQAnswers.
     * @param {UserMCQAnswerCreateManyArgs} args - Arguments to create many UserMCQAnswers.
     * @example
     * // Create many UserMCQAnswers
     * const userMCQAnswer = await prisma.userMCQAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMCQAnswerCreateManyArgs>(args?: SelectSubset<T, UserMCQAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMCQAnswers and returns the data saved in the database.
     * @param {UserMCQAnswerCreateManyAndReturnArgs} args - Arguments to create many UserMCQAnswers.
     * @example
     * // Create many UserMCQAnswers
     * const userMCQAnswer = await prisma.userMCQAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMCQAnswers and only return the `id`
     * const userMCQAnswerWithIdOnly = await prisma.userMCQAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMCQAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMCQAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMCQAnswer.
     * @param {UserMCQAnswerDeleteArgs} args - Arguments to delete one UserMCQAnswer.
     * @example
     * // Delete one UserMCQAnswer
     * const UserMCQAnswer = await prisma.userMCQAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserMCQAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserMCQAnswerDeleteArgs>(args: SelectSubset<T, UserMCQAnswerDeleteArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMCQAnswer.
     * @param {UserMCQAnswerUpdateArgs} args - Arguments to update one UserMCQAnswer.
     * @example
     * // Update one UserMCQAnswer
     * const userMCQAnswer = await prisma.userMCQAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMCQAnswerUpdateArgs>(args: SelectSubset<T, UserMCQAnswerUpdateArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMCQAnswers.
     * @param {UserMCQAnswerDeleteManyArgs} args - Arguments to filter UserMCQAnswers to delete.
     * @example
     * // Delete a few UserMCQAnswers
     * const { count } = await prisma.userMCQAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMCQAnswerDeleteManyArgs>(args?: SelectSubset<T, UserMCQAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMCQAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMCQAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMCQAnswers
     * const userMCQAnswer = await prisma.userMCQAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMCQAnswerUpdateManyArgs>(args: SelectSubset<T, UserMCQAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMCQAnswers and returns the data updated in the database.
     * @param {UserMCQAnswerUpdateManyAndReturnArgs} args - Arguments to update many UserMCQAnswers.
     * @example
     * // Update many UserMCQAnswers
     * const userMCQAnswer = await prisma.userMCQAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMCQAnswers and only return the `id`
     * const userMCQAnswerWithIdOnly = await prisma.userMCQAnswer.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserMCQAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMCQAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMCQAnswer.
     * @param {UserMCQAnswerUpsertArgs} args - Arguments to update or create a UserMCQAnswer.
     * @example
     * // Update or create a UserMCQAnswer
     * const userMCQAnswer = await prisma.userMCQAnswer.upsert({
     *   create: {
     *     // ... data to create a UserMCQAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMCQAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserMCQAnswerUpsertArgs>(args: SelectSubset<T, UserMCQAnswerUpsertArgs<ExtArgs>>): Prisma__UserMCQAnswerClient<$Result.GetResult<Prisma.$UserMCQAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMCQAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMCQAnswerCountArgs} args - Arguments to filter UserMCQAnswers to count.
     * @example
     * // Count the number of UserMCQAnswers
     * const count = await prisma.userMCQAnswer.count({
     *   where: {
     *     // ... the filter for the UserMCQAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserMCQAnswerCountArgs>(
      args?: Subset<T, UserMCQAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMCQAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMCQAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMCQAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserMCQAnswerAggregateArgs>(args: Subset<T, UserMCQAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserMCQAnswerAggregateType<T>>

    /**
     * Group by UserMCQAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMCQAnswerGroupByArgs} args - Group by arguments.
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
      T extends UserMCQAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMCQAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserMCQAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserMCQAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMCQAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMCQAnswer model
   */
  readonly fields: UserMCQAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMCQAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMCQAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mcq<T extends MCQDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MCQDefaultArgs<ExtArgs>>): Prisma__MCQClient<$Result.GetResult<Prisma.$MCQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserMCQAnswer model
   */
  interface UserMCQAnswerFieldRefs {
    readonly id: FieldRef<"UserMCQAnswer", 'String'>
    readonly userId: FieldRef<"UserMCQAnswer", 'String'>
    readonly mcqId: FieldRef<"UserMCQAnswer", 'String'>
    readonly answer: FieldRef<"UserMCQAnswer", 'String'>
    readonly isCorrect: FieldRef<"UserMCQAnswer", 'Boolean'>
    readonly createdAt: FieldRef<"UserMCQAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMCQAnswer findUnique
   */
  export type UserMCQAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserMCQAnswer to fetch.
     */
    where: UserMCQAnswerWhereUniqueInput
  }

  /**
   * UserMCQAnswer findUniqueOrThrow
   */
  export type UserMCQAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserMCQAnswer to fetch.
     */
    where: UserMCQAnswerWhereUniqueInput
  }

  /**
   * UserMCQAnswer findFirst
   */
  export type UserMCQAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserMCQAnswer to fetch.
     */
    where?: UserMCQAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMCQAnswers to fetch.
     */
    orderBy?: UserMCQAnswerOrderByWithRelationInput | UserMCQAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMCQAnswers.
     */
    cursor?: UserMCQAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMCQAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMCQAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMCQAnswers.
     */
    distinct?: UserMCQAnswerScalarFieldEnum | UserMCQAnswerScalarFieldEnum[]
  }

  /**
   * UserMCQAnswer findFirstOrThrow
   */
  export type UserMCQAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserMCQAnswer to fetch.
     */
    where?: UserMCQAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMCQAnswers to fetch.
     */
    orderBy?: UserMCQAnswerOrderByWithRelationInput | UserMCQAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMCQAnswers.
     */
    cursor?: UserMCQAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMCQAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMCQAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMCQAnswers.
     */
    distinct?: UserMCQAnswerScalarFieldEnum | UserMCQAnswerScalarFieldEnum[]
  }

  /**
   * UserMCQAnswer findMany
   */
  export type UserMCQAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserMCQAnswers to fetch.
     */
    where?: UserMCQAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMCQAnswers to fetch.
     */
    orderBy?: UserMCQAnswerOrderByWithRelationInput | UserMCQAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMCQAnswers.
     */
    cursor?: UserMCQAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMCQAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMCQAnswers.
     */
    skip?: number
    distinct?: UserMCQAnswerScalarFieldEnum | UserMCQAnswerScalarFieldEnum[]
  }

  /**
   * UserMCQAnswer create
   */
  export type UserMCQAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMCQAnswer.
     */
    data: XOR<UserMCQAnswerCreateInput, UserMCQAnswerUncheckedCreateInput>
  }

  /**
   * UserMCQAnswer createMany
   */
  export type UserMCQAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMCQAnswers.
     */
    data: UserMCQAnswerCreateManyInput | UserMCQAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMCQAnswer createManyAndReturn
   */
  export type UserMCQAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many UserMCQAnswers.
     */
    data: UserMCQAnswerCreateManyInput | UserMCQAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMCQAnswer update
   */
  export type UserMCQAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMCQAnswer.
     */
    data: XOR<UserMCQAnswerUpdateInput, UserMCQAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserMCQAnswer to update.
     */
    where: UserMCQAnswerWhereUniqueInput
  }

  /**
   * UserMCQAnswer updateMany
   */
  export type UserMCQAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMCQAnswers.
     */
    data: XOR<UserMCQAnswerUpdateManyMutationInput, UserMCQAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserMCQAnswers to update
     */
    where?: UserMCQAnswerWhereInput
    /**
     * Limit how many UserMCQAnswers to update.
     */
    limit?: number
  }

  /**
   * UserMCQAnswer updateManyAndReturn
   */
  export type UserMCQAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * The data used to update UserMCQAnswers.
     */
    data: XOR<UserMCQAnswerUpdateManyMutationInput, UserMCQAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserMCQAnswers to update
     */
    where?: UserMCQAnswerWhereInput
    /**
     * Limit how many UserMCQAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMCQAnswer upsert
   */
  export type UserMCQAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMCQAnswer to update in case it exists.
     */
    where: UserMCQAnswerWhereUniqueInput
    /**
     * In case the UserMCQAnswer found by the `where` argument doesn't exist, create a new UserMCQAnswer with this data.
     */
    create: XOR<UserMCQAnswerCreateInput, UserMCQAnswerUncheckedCreateInput>
    /**
     * In case the UserMCQAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMCQAnswerUpdateInput, UserMCQAnswerUncheckedUpdateInput>
  }

  /**
   * UserMCQAnswer delete
   */
  export type UserMCQAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserMCQAnswer to delete.
     */
    where: UserMCQAnswerWhereUniqueInput
  }

  /**
   * UserMCQAnswer deleteMany
   */
  export type UserMCQAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMCQAnswers to delete
     */
    where?: UserMCQAnswerWhereInput
    /**
     * Limit how many UserMCQAnswers to delete.
     */
    limit?: number
  }

  /**
   * UserMCQAnswer without action
   */
  export type UserMCQAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMCQAnswer
     */
    select?: UserMCQAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMCQAnswer
     */
    omit?: UserMCQAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMCQAnswerInclude<ExtArgs> | null
  }


  /**
   * Model SlideExplanation
   */

  export type AggregateSlideExplanation = {
    _count: SlideExplanationCountAggregateOutputType | null
    _avg: SlideExplanationAvgAggregateOutputType | null
    _sum: SlideExplanationSumAggregateOutputType | null
    _min: SlideExplanationMinAggregateOutputType | null
    _max: SlideExplanationMaxAggregateOutputType | null
  }

  export type SlideExplanationAvgAggregateOutputType = {
    slideNumber: number | null
  }

  export type SlideExplanationSumAggregateOutputType = {
    slideNumber: number | null
  }

  export type SlideExplanationMinAggregateOutputType = {
    id: string | null
    courseId: string | null
    slideNumber: number | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlideExplanationMaxAggregateOutputType = {
    id: string | null
    courseId: string | null
    slideNumber: number | null
    explanation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlideExplanationCountAggregateOutputType = {
    id: number
    courseId: number
    slideNumber: number
    explanation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlideExplanationAvgAggregateInputType = {
    slideNumber?: true
  }

  export type SlideExplanationSumAggregateInputType = {
    slideNumber?: true
  }

  export type SlideExplanationMinAggregateInputType = {
    id?: true
    courseId?: true
    slideNumber?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlideExplanationMaxAggregateInputType = {
    id?: true
    courseId?: true
    slideNumber?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlideExplanationCountAggregateInputType = {
    id?: true
    courseId?: true
    slideNumber?: true
    explanation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlideExplanationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlideExplanation to aggregate.
     */
    where?: SlideExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideExplanations to fetch.
     */
    orderBy?: SlideExplanationOrderByWithRelationInput | SlideExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlideExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlideExplanations
    **/
    _count?: true | SlideExplanationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlideExplanationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlideExplanationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlideExplanationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlideExplanationMaxAggregateInputType
  }

  export type GetSlideExplanationAggregateType<T extends SlideExplanationAggregateArgs> = {
        [P in keyof T & keyof AggregateSlideExplanation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlideExplanation[P]>
      : GetScalarType<T[P], AggregateSlideExplanation[P]>
  }




  export type SlideExplanationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlideExplanationWhereInput
    orderBy?: SlideExplanationOrderByWithAggregationInput | SlideExplanationOrderByWithAggregationInput[]
    by: SlideExplanationScalarFieldEnum[] | SlideExplanationScalarFieldEnum
    having?: SlideExplanationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlideExplanationCountAggregateInputType | true
    _avg?: SlideExplanationAvgAggregateInputType
    _sum?: SlideExplanationSumAggregateInputType
    _min?: SlideExplanationMinAggregateInputType
    _max?: SlideExplanationMaxAggregateInputType
  }

  export type SlideExplanationGroupByOutputType = {
    id: string
    courseId: string
    slideNumber: number
    explanation: string
    createdAt: Date
    updatedAt: Date
    _count: SlideExplanationCountAggregateOutputType | null
    _avg: SlideExplanationAvgAggregateOutputType | null
    _sum: SlideExplanationSumAggregateOutputType | null
    _min: SlideExplanationMinAggregateOutputType | null
    _max: SlideExplanationMaxAggregateOutputType | null
  }

  type GetSlideExplanationGroupByPayload<T extends SlideExplanationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlideExplanationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlideExplanationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlideExplanationGroupByOutputType[P]>
            : GetScalarType<T[P], SlideExplanationGroupByOutputType[P]>
        }
      >
    >


  export type SlideExplanationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    slideNumber?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slideExplanation"]>

  export type SlideExplanationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    slideNumber?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slideExplanation"]>

  export type SlideExplanationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    slideNumber?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slideExplanation"]>

  export type SlideExplanationSelectScalar = {
    id?: boolean
    courseId?: boolean
    slideNumber?: boolean
    explanation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlideExplanationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "slideNumber" | "explanation" | "createdAt" | "updatedAt", ExtArgs["result"]["slideExplanation"]>
  export type SlideExplanationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SlideExplanationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SlideExplanationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $SlideExplanationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlideExplanation"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseId: string
      slideNumber: number
      explanation: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slideExplanation"]>
    composites: {}
  }

  type SlideExplanationGetPayload<S extends boolean | null | undefined | SlideExplanationDefaultArgs> = $Result.GetResult<Prisma.$SlideExplanationPayload, S>

  type SlideExplanationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlideExplanationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlideExplanationCountAggregateInputType | true
    }

  export interface SlideExplanationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlideExplanation'], meta: { name: 'SlideExplanation' } }
    /**
     * Find zero or one SlideExplanation that matches the filter.
     * @param {SlideExplanationFindUniqueArgs} args - Arguments to find a SlideExplanation
     * @example
     * // Get one SlideExplanation
     * const slideExplanation = await prisma.slideExplanation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlideExplanationFindUniqueArgs>(args: SelectSubset<T, SlideExplanationFindUniqueArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlideExplanation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlideExplanationFindUniqueOrThrowArgs} args - Arguments to find a SlideExplanation
     * @example
     * // Get one SlideExplanation
     * const slideExplanation = await prisma.slideExplanation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlideExplanationFindUniqueOrThrowArgs>(args: SelectSubset<T, SlideExplanationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlideExplanation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideExplanationFindFirstArgs} args - Arguments to find a SlideExplanation
     * @example
     * // Get one SlideExplanation
     * const slideExplanation = await prisma.slideExplanation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlideExplanationFindFirstArgs>(args?: SelectSubset<T, SlideExplanationFindFirstArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlideExplanation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideExplanationFindFirstOrThrowArgs} args - Arguments to find a SlideExplanation
     * @example
     * // Get one SlideExplanation
     * const slideExplanation = await prisma.slideExplanation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlideExplanationFindFirstOrThrowArgs>(args?: SelectSubset<T, SlideExplanationFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlideExplanations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideExplanationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlideExplanations
     * const slideExplanations = await prisma.slideExplanation.findMany()
     * 
     * // Get first 10 SlideExplanations
     * const slideExplanations = await prisma.slideExplanation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slideExplanationWithIdOnly = await prisma.slideExplanation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlideExplanationFindManyArgs>(args?: SelectSubset<T, SlideExplanationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlideExplanation.
     * @param {SlideExplanationCreateArgs} args - Arguments to create a SlideExplanation.
     * @example
     * // Create one SlideExplanation
     * const SlideExplanation = await prisma.slideExplanation.create({
     *   data: {
     *     // ... data to create a SlideExplanation
     *   }
     * })
     * 
     */
    create<T extends SlideExplanationCreateArgs>(args: SelectSubset<T, SlideExplanationCreateArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlideExplanations.
     * @param {SlideExplanationCreateManyArgs} args - Arguments to create many SlideExplanations.
     * @example
     * // Create many SlideExplanations
     * const slideExplanation = await prisma.slideExplanation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlideExplanationCreateManyArgs>(args?: SelectSubset<T, SlideExplanationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlideExplanations and returns the data saved in the database.
     * @param {SlideExplanationCreateManyAndReturnArgs} args - Arguments to create many SlideExplanations.
     * @example
     * // Create many SlideExplanations
     * const slideExplanation = await prisma.slideExplanation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlideExplanations and only return the `id`
     * const slideExplanationWithIdOnly = await prisma.slideExplanation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlideExplanationCreateManyAndReturnArgs>(args?: SelectSubset<T, SlideExplanationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlideExplanation.
     * @param {SlideExplanationDeleteArgs} args - Arguments to delete one SlideExplanation.
     * @example
     * // Delete one SlideExplanation
     * const SlideExplanation = await prisma.slideExplanation.delete({
     *   where: {
     *     // ... filter to delete one SlideExplanation
     *   }
     * })
     * 
     */
    delete<T extends SlideExplanationDeleteArgs>(args: SelectSubset<T, SlideExplanationDeleteArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlideExplanation.
     * @param {SlideExplanationUpdateArgs} args - Arguments to update one SlideExplanation.
     * @example
     * // Update one SlideExplanation
     * const slideExplanation = await prisma.slideExplanation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlideExplanationUpdateArgs>(args: SelectSubset<T, SlideExplanationUpdateArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlideExplanations.
     * @param {SlideExplanationDeleteManyArgs} args - Arguments to filter SlideExplanations to delete.
     * @example
     * // Delete a few SlideExplanations
     * const { count } = await prisma.slideExplanation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlideExplanationDeleteManyArgs>(args?: SelectSubset<T, SlideExplanationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlideExplanations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideExplanationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlideExplanations
     * const slideExplanation = await prisma.slideExplanation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlideExplanationUpdateManyArgs>(args: SelectSubset<T, SlideExplanationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlideExplanations and returns the data updated in the database.
     * @param {SlideExplanationUpdateManyAndReturnArgs} args - Arguments to update many SlideExplanations.
     * @example
     * // Update many SlideExplanations
     * const slideExplanation = await prisma.slideExplanation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlideExplanations and only return the `id`
     * const slideExplanationWithIdOnly = await prisma.slideExplanation.updateManyAndReturn({
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
    updateManyAndReturn<T extends SlideExplanationUpdateManyAndReturnArgs>(args: SelectSubset<T, SlideExplanationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlideExplanation.
     * @param {SlideExplanationUpsertArgs} args - Arguments to update or create a SlideExplanation.
     * @example
     * // Update or create a SlideExplanation
     * const slideExplanation = await prisma.slideExplanation.upsert({
     *   create: {
     *     // ... data to create a SlideExplanation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlideExplanation we want to update
     *   }
     * })
     */
    upsert<T extends SlideExplanationUpsertArgs>(args: SelectSubset<T, SlideExplanationUpsertArgs<ExtArgs>>): Prisma__SlideExplanationClient<$Result.GetResult<Prisma.$SlideExplanationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlideExplanations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideExplanationCountArgs} args - Arguments to filter SlideExplanations to count.
     * @example
     * // Count the number of SlideExplanations
     * const count = await prisma.slideExplanation.count({
     *   where: {
     *     // ... the filter for the SlideExplanations we want to count
     *   }
     * })
    **/
    count<T extends SlideExplanationCountArgs>(
      args?: Subset<T, SlideExplanationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlideExplanationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlideExplanation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideExplanationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlideExplanationAggregateArgs>(args: Subset<T, SlideExplanationAggregateArgs>): Prisma.PrismaPromise<GetSlideExplanationAggregateType<T>>

    /**
     * Group by SlideExplanation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlideExplanationGroupByArgs} args - Group by arguments.
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
      T extends SlideExplanationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlideExplanationGroupByArgs['orderBy'] }
        : { orderBy?: SlideExplanationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlideExplanationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlideExplanationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlideExplanation model
   */
  readonly fields: SlideExplanationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlideExplanation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlideExplanationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SlideExplanation model
   */
  interface SlideExplanationFieldRefs {
    readonly id: FieldRef<"SlideExplanation", 'String'>
    readonly courseId: FieldRef<"SlideExplanation", 'String'>
    readonly slideNumber: FieldRef<"SlideExplanation", 'Int'>
    readonly explanation: FieldRef<"SlideExplanation", 'String'>
    readonly createdAt: FieldRef<"SlideExplanation", 'DateTime'>
    readonly updatedAt: FieldRef<"SlideExplanation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlideExplanation findUnique
   */
  export type SlideExplanationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * Filter, which SlideExplanation to fetch.
     */
    where: SlideExplanationWhereUniqueInput
  }

  /**
   * SlideExplanation findUniqueOrThrow
   */
  export type SlideExplanationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * Filter, which SlideExplanation to fetch.
     */
    where: SlideExplanationWhereUniqueInput
  }

  /**
   * SlideExplanation findFirst
   */
  export type SlideExplanationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * Filter, which SlideExplanation to fetch.
     */
    where?: SlideExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideExplanations to fetch.
     */
    orderBy?: SlideExplanationOrderByWithRelationInput | SlideExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlideExplanations.
     */
    cursor?: SlideExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlideExplanations.
     */
    distinct?: SlideExplanationScalarFieldEnum | SlideExplanationScalarFieldEnum[]
  }

  /**
   * SlideExplanation findFirstOrThrow
   */
  export type SlideExplanationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * Filter, which SlideExplanation to fetch.
     */
    where?: SlideExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideExplanations to fetch.
     */
    orderBy?: SlideExplanationOrderByWithRelationInput | SlideExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlideExplanations.
     */
    cursor?: SlideExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideExplanations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlideExplanations.
     */
    distinct?: SlideExplanationScalarFieldEnum | SlideExplanationScalarFieldEnum[]
  }

  /**
   * SlideExplanation findMany
   */
  export type SlideExplanationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * Filter, which SlideExplanations to fetch.
     */
    where?: SlideExplanationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlideExplanations to fetch.
     */
    orderBy?: SlideExplanationOrderByWithRelationInput | SlideExplanationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlideExplanations.
     */
    cursor?: SlideExplanationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlideExplanations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlideExplanations.
     */
    skip?: number
    distinct?: SlideExplanationScalarFieldEnum | SlideExplanationScalarFieldEnum[]
  }

  /**
   * SlideExplanation create
   */
  export type SlideExplanationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * The data needed to create a SlideExplanation.
     */
    data: XOR<SlideExplanationCreateInput, SlideExplanationUncheckedCreateInput>
  }

  /**
   * SlideExplanation createMany
   */
  export type SlideExplanationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlideExplanations.
     */
    data: SlideExplanationCreateManyInput | SlideExplanationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlideExplanation createManyAndReturn
   */
  export type SlideExplanationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * The data used to create many SlideExplanations.
     */
    data: SlideExplanationCreateManyInput | SlideExplanationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlideExplanation update
   */
  export type SlideExplanationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * The data needed to update a SlideExplanation.
     */
    data: XOR<SlideExplanationUpdateInput, SlideExplanationUncheckedUpdateInput>
    /**
     * Choose, which SlideExplanation to update.
     */
    where: SlideExplanationWhereUniqueInput
  }

  /**
   * SlideExplanation updateMany
   */
  export type SlideExplanationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlideExplanations.
     */
    data: XOR<SlideExplanationUpdateManyMutationInput, SlideExplanationUncheckedUpdateManyInput>
    /**
     * Filter which SlideExplanations to update
     */
    where?: SlideExplanationWhereInput
    /**
     * Limit how many SlideExplanations to update.
     */
    limit?: number
  }

  /**
   * SlideExplanation updateManyAndReturn
   */
  export type SlideExplanationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * The data used to update SlideExplanations.
     */
    data: XOR<SlideExplanationUpdateManyMutationInput, SlideExplanationUncheckedUpdateManyInput>
    /**
     * Filter which SlideExplanations to update
     */
    where?: SlideExplanationWhereInput
    /**
     * Limit how many SlideExplanations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlideExplanation upsert
   */
  export type SlideExplanationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * The filter to search for the SlideExplanation to update in case it exists.
     */
    where: SlideExplanationWhereUniqueInput
    /**
     * In case the SlideExplanation found by the `where` argument doesn't exist, create a new SlideExplanation with this data.
     */
    create: XOR<SlideExplanationCreateInput, SlideExplanationUncheckedCreateInput>
    /**
     * In case the SlideExplanation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlideExplanationUpdateInput, SlideExplanationUncheckedUpdateInput>
  }

  /**
   * SlideExplanation delete
   */
  export type SlideExplanationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
    /**
     * Filter which SlideExplanation to delete.
     */
    where: SlideExplanationWhereUniqueInput
  }

  /**
   * SlideExplanation deleteMany
   */
  export type SlideExplanationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlideExplanations to delete
     */
    where?: SlideExplanationWhereInput
    /**
     * Limit how many SlideExplanations to delete.
     */
    limit?: number
  }

  /**
   * SlideExplanation without action
   */
  export type SlideExplanationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlideExplanation
     */
    select?: SlideExplanationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlideExplanation
     */
    omit?: SlideExplanationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlideExplanationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationInterest
   */

  export type AggregateOrganizationInterest = {
    _count: OrganizationInterestCountAggregateOutputType | null
    _min: OrganizationInterestMinAggregateOutputType | null
    _max: OrganizationInterestMaxAggregateOutputType | null
  }

  export type OrganizationInterestMinAggregateOutputType = {
    id: string | null
    organizationName: string | null
    email: string | null
    fullName: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationInterestMaxAggregateOutputType = {
    id: string | null
    organizationName: string | null
    email: string | null
    fullName: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationInterestCountAggregateOutputType = {
    id: number
    organizationName: number
    email: number
    fullName: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationInterestMinAggregateInputType = {
    id?: true
    organizationName?: true
    email?: true
    fullName?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationInterestMaxAggregateInputType = {
    id?: true
    organizationName?: true
    email?: true
    fullName?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationInterestCountAggregateInputType = {
    id?: true
    organizationName?: true
    email?: true
    fullName?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationInterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationInterest to aggregate.
     */
    where?: OrganizationInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInterests to fetch.
     */
    orderBy?: OrganizationInterestOrderByWithRelationInput | OrganizationInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationInterests
    **/
    _count?: true | OrganizationInterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationInterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationInterestMaxAggregateInputType
  }

  export type GetOrganizationInterestAggregateType<T extends OrganizationInterestAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationInterest[P]>
      : GetScalarType<T[P], AggregateOrganizationInterest[P]>
  }




  export type OrganizationInterestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationInterestWhereInput
    orderBy?: OrganizationInterestOrderByWithAggregationInput | OrganizationInterestOrderByWithAggregationInput[]
    by: OrganizationInterestScalarFieldEnum[] | OrganizationInterestScalarFieldEnum
    having?: OrganizationInterestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationInterestCountAggregateInputType | true
    _min?: OrganizationInterestMinAggregateInputType
    _max?: OrganizationInterestMaxAggregateInputType
  }

  export type OrganizationInterestGroupByOutputType = {
    id: string
    organizationName: string
    email: string
    fullName: string
    message: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationInterestCountAggregateOutputType | null
    _min: OrganizationInterestMinAggregateOutputType | null
    _max: OrganizationInterestMaxAggregateOutputType | null
  }

  type GetOrganizationInterestGroupByPayload<T extends OrganizationInterestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationInterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationInterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationInterestGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationInterestGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationInterestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    email?: boolean
    fullName?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organizationInterest"]>

  export type OrganizationInterestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    email?: boolean
    fullName?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organizationInterest"]>

  export type OrganizationInterestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationName?: boolean
    email?: boolean
    fullName?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organizationInterest"]>

  export type OrganizationInterestSelectScalar = {
    id?: boolean
    organizationName?: boolean
    email?: boolean
    fullName?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationInterestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationName" | "email" | "fullName" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["organizationInterest"]>

  export type $OrganizationInterestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationInterest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationName: string
      email: string
      fullName: string
      message: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organizationInterest"]>
    composites: {}
  }

  type OrganizationInterestGetPayload<S extends boolean | null | undefined | OrganizationInterestDefaultArgs> = $Result.GetResult<Prisma.$OrganizationInterestPayload, S>

  type OrganizationInterestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationInterestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationInterestCountAggregateInputType | true
    }

  export interface OrganizationInterestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationInterest'], meta: { name: 'OrganizationInterest' } }
    /**
     * Find zero or one OrganizationInterest that matches the filter.
     * @param {OrganizationInterestFindUniqueArgs} args - Arguments to find a OrganizationInterest
     * @example
     * // Get one OrganizationInterest
     * const organizationInterest = await prisma.organizationInterest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationInterestFindUniqueArgs>(args: SelectSubset<T, OrganizationInterestFindUniqueArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrganizationInterest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationInterestFindUniqueOrThrowArgs} args - Arguments to find a OrganizationInterest
     * @example
     * // Get one OrganizationInterest
     * const organizationInterest = await prisma.organizationInterest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationInterestFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationInterestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationInterest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInterestFindFirstArgs} args - Arguments to find a OrganizationInterest
     * @example
     * // Get one OrganizationInterest
     * const organizationInterest = await prisma.organizationInterest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationInterestFindFirstArgs>(args?: SelectSubset<T, OrganizationInterestFindFirstArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrganizationInterest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInterestFindFirstOrThrowArgs} args - Arguments to find a OrganizationInterest
     * @example
     * // Get one OrganizationInterest
     * const organizationInterest = await prisma.organizationInterest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationInterestFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationInterestFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrganizationInterests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInterestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationInterests
     * const organizationInterests = await prisma.organizationInterest.findMany()
     * 
     * // Get first 10 OrganizationInterests
     * const organizationInterests = await prisma.organizationInterest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationInterestWithIdOnly = await prisma.organizationInterest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationInterestFindManyArgs>(args?: SelectSubset<T, OrganizationInterestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrganizationInterest.
     * @param {OrganizationInterestCreateArgs} args - Arguments to create a OrganizationInterest.
     * @example
     * // Create one OrganizationInterest
     * const OrganizationInterest = await prisma.organizationInterest.create({
     *   data: {
     *     // ... data to create a OrganizationInterest
     *   }
     * })
     * 
     */
    create<T extends OrganizationInterestCreateArgs>(args: SelectSubset<T, OrganizationInterestCreateArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrganizationInterests.
     * @param {OrganizationInterestCreateManyArgs} args - Arguments to create many OrganizationInterests.
     * @example
     * // Create many OrganizationInterests
     * const organizationInterest = await prisma.organizationInterest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationInterestCreateManyArgs>(args?: SelectSubset<T, OrganizationInterestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationInterests and returns the data saved in the database.
     * @param {OrganizationInterestCreateManyAndReturnArgs} args - Arguments to create many OrganizationInterests.
     * @example
     * // Create many OrganizationInterests
     * const organizationInterest = await prisma.organizationInterest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationInterests and only return the `id`
     * const organizationInterestWithIdOnly = await prisma.organizationInterest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationInterestCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationInterestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrganizationInterest.
     * @param {OrganizationInterestDeleteArgs} args - Arguments to delete one OrganizationInterest.
     * @example
     * // Delete one OrganizationInterest
     * const OrganizationInterest = await prisma.organizationInterest.delete({
     *   where: {
     *     // ... filter to delete one OrganizationInterest
     *   }
     * })
     * 
     */
    delete<T extends OrganizationInterestDeleteArgs>(args: SelectSubset<T, OrganizationInterestDeleteArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrganizationInterest.
     * @param {OrganizationInterestUpdateArgs} args - Arguments to update one OrganizationInterest.
     * @example
     * // Update one OrganizationInterest
     * const organizationInterest = await prisma.organizationInterest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationInterestUpdateArgs>(args: SelectSubset<T, OrganizationInterestUpdateArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrganizationInterests.
     * @param {OrganizationInterestDeleteManyArgs} args - Arguments to filter OrganizationInterests to delete.
     * @example
     * // Delete a few OrganizationInterests
     * const { count } = await prisma.organizationInterest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationInterestDeleteManyArgs>(args?: SelectSubset<T, OrganizationInterestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInterestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationInterests
     * const organizationInterest = await prisma.organizationInterest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationInterestUpdateManyArgs>(args: SelectSubset<T, OrganizationInterestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationInterests and returns the data updated in the database.
     * @param {OrganizationInterestUpdateManyAndReturnArgs} args - Arguments to update many OrganizationInterests.
     * @example
     * // Update many OrganizationInterests
     * const organizationInterest = await prisma.organizationInterest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrganizationInterests and only return the `id`
     * const organizationInterestWithIdOnly = await prisma.organizationInterest.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationInterestUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationInterestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrganizationInterest.
     * @param {OrganizationInterestUpsertArgs} args - Arguments to update or create a OrganizationInterest.
     * @example
     * // Update or create a OrganizationInterest
     * const organizationInterest = await prisma.organizationInterest.upsert({
     *   create: {
     *     // ... data to create a OrganizationInterest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationInterest we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationInterestUpsertArgs>(args: SelectSubset<T, OrganizationInterestUpsertArgs<ExtArgs>>): Prisma__OrganizationInterestClient<$Result.GetResult<Prisma.$OrganizationInterestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrganizationInterests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInterestCountArgs} args - Arguments to filter OrganizationInterests to count.
     * @example
     * // Count the number of OrganizationInterests
     * const count = await prisma.organizationInterest.count({
     *   where: {
     *     // ... the filter for the OrganizationInterests we want to count
     *   }
     * })
    **/
    count<T extends OrganizationInterestCountArgs>(
      args?: Subset<T, OrganizationInterestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationInterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationInterestAggregateArgs>(args: Subset<T, OrganizationInterestAggregateArgs>): Prisma.PrismaPromise<GetOrganizationInterestAggregateType<T>>

    /**
     * Group by OrganizationInterest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationInterestGroupByArgs} args - Group by arguments.
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
      T extends OrganizationInterestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationInterestGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationInterestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationInterestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationInterest model
   */
  readonly fields: OrganizationInterestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationInterest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationInterestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the OrganizationInterest model
   */
  interface OrganizationInterestFieldRefs {
    readonly id: FieldRef<"OrganizationInterest", 'String'>
    readonly organizationName: FieldRef<"OrganizationInterest", 'String'>
    readonly email: FieldRef<"OrganizationInterest", 'String'>
    readonly fullName: FieldRef<"OrganizationInterest", 'String'>
    readonly message: FieldRef<"OrganizationInterest", 'String'>
    readonly status: FieldRef<"OrganizationInterest", 'String'>
    readonly createdAt: FieldRef<"OrganizationInterest", 'DateTime'>
    readonly updatedAt: FieldRef<"OrganizationInterest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationInterest findUnique
   */
  export type OrganizationInterestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationInterest to fetch.
     */
    where: OrganizationInterestWhereUniqueInput
  }

  /**
   * OrganizationInterest findUniqueOrThrow
   */
  export type OrganizationInterestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationInterest to fetch.
     */
    where: OrganizationInterestWhereUniqueInput
  }

  /**
   * OrganizationInterest findFirst
   */
  export type OrganizationInterestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationInterest to fetch.
     */
    where?: OrganizationInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInterests to fetch.
     */
    orderBy?: OrganizationInterestOrderByWithRelationInput | OrganizationInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationInterests.
     */
    cursor?: OrganizationInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationInterests.
     */
    distinct?: OrganizationInterestScalarFieldEnum | OrganizationInterestScalarFieldEnum[]
  }

  /**
   * OrganizationInterest findFirstOrThrow
   */
  export type OrganizationInterestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationInterest to fetch.
     */
    where?: OrganizationInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInterests to fetch.
     */
    orderBy?: OrganizationInterestOrderByWithRelationInput | OrganizationInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationInterests.
     */
    cursor?: OrganizationInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInterests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationInterests.
     */
    distinct?: OrganizationInterestScalarFieldEnum | OrganizationInterestScalarFieldEnum[]
  }

  /**
   * OrganizationInterest findMany
   */
  export type OrganizationInterestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * Filter, which OrganizationInterests to fetch.
     */
    where?: OrganizationInterestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationInterests to fetch.
     */
    orderBy?: OrganizationInterestOrderByWithRelationInput | OrganizationInterestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationInterests.
     */
    cursor?: OrganizationInterestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationInterests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationInterests.
     */
    skip?: number
    distinct?: OrganizationInterestScalarFieldEnum | OrganizationInterestScalarFieldEnum[]
  }

  /**
   * OrganizationInterest create
   */
  export type OrganizationInterestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * The data needed to create a OrganizationInterest.
     */
    data: XOR<OrganizationInterestCreateInput, OrganizationInterestUncheckedCreateInput>
  }

  /**
   * OrganizationInterest createMany
   */
  export type OrganizationInterestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationInterests.
     */
    data: OrganizationInterestCreateManyInput | OrganizationInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationInterest createManyAndReturn
   */
  export type OrganizationInterestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * The data used to create many OrganizationInterests.
     */
    data: OrganizationInterestCreateManyInput | OrganizationInterestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationInterest update
   */
  export type OrganizationInterestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * The data needed to update a OrganizationInterest.
     */
    data: XOR<OrganizationInterestUpdateInput, OrganizationInterestUncheckedUpdateInput>
    /**
     * Choose, which OrganizationInterest to update.
     */
    where: OrganizationInterestWhereUniqueInput
  }

  /**
   * OrganizationInterest updateMany
   */
  export type OrganizationInterestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationInterests.
     */
    data: XOR<OrganizationInterestUpdateManyMutationInput, OrganizationInterestUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationInterests to update
     */
    where?: OrganizationInterestWhereInput
    /**
     * Limit how many OrganizationInterests to update.
     */
    limit?: number
  }

  /**
   * OrganizationInterest updateManyAndReturn
   */
  export type OrganizationInterestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * The data used to update OrganizationInterests.
     */
    data: XOR<OrganizationInterestUpdateManyMutationInput, OrganizationInterestUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationInterests to update
     */
    where?: OrganizationInterestWhereInput
    /**
     * Limit how many OrganizationInterests to update.
     */
    limit?: number
  }

  /**
   * OrganizationInterest upsert
   */
  export type OrganizationInterestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * The filter to search for the OrganizationInterest to update in case it exists.
     */
    where: OrganizationInterestWhereUniqueInput
    /**
     * In case the OrganizationInterest found by the `where` argument doesn't exist, create a new OrganizationInterest with this data.
     */
    create: XOR<OrganizationInterestCreateInput, OrganizationInterestUncheckedCreateInput>
    /**
     * In case the OrganizationInterest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationInterestUpdateInput, OrganizationInterestUncheckedUpdateInput>
  }

  /**
   * OrganizationInterest delete
   */
  export type OrganizationInterestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
    /**
     * Filter which OrganizationInterest to delete.
     */
    where: OrganizationInterestWhereUniqueInput
  }

  /**
   * OrganizationInterest deleteMany
   */
  export type OrganizationInterestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationInterests to delete
     */
    where?: OrganizationInterestWhereInput
    /**
     * Limit how many OrganizationInterests to delete.
     */
    limit?: number
  }

  /**
   * OrganizationInterest without action
   */
  export type OrganizationInterestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationInterest
     */
    select?: OrganizationInterestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrganizationInterest
     */
    omit?: OrganizationInterestOmit<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    domain: 'domain',
    adminEmail: 'adminEmail',
    adminPassword: 'adminPassword',
    createdAt: 'createdAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const TenantDetailsScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    presidingOfficerEmail: 'presidingOfficerEmail',
    poshCommitteeEmail: 'poshCommitteeEmail',
    hrContactName: 'hrContactName',
    hrContactEmail: 'hrContactEmail',
    hrContactPhone: 'hrContactPhone',
    ceoName: 'ceoName',
    ceoEmail: 'ceoEmail',
    ceoContact: 'ceoContact',
    ctoName: 'ctoName',
    ctoEmail: 'ctoEmail',
    ctoContact: 'ctoContact',
    ccoEmail: 'ccoEmail',
    ccoContact: 'ccoContact',
    croName: 'croName',
    croEmail: 'croEmail',
    croContact: 'croContact',
    legalOfficerName: 'legalOfficerName',
    legalOfficerEmail: 'legalOfficerEmail',
    legalOfficerContact: 'legalOfficerContact'
  };

  export type TenantDetailsScalarFieldEnum = (typeof TenantDetailsScalarFieldEnum)[keyof typeof TenantDetailsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    userRoles: 'userRoles'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    duration: 'duration',
    tags: 'tags',
    learningObjectives: 'learningObjectives',
    targetAudience: 'targetAudience',
    materialUrl: 'materialUrl',
    videoUrl: 'videoUrl',
    slides: 'slides',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    progress: 'progress',
    status: 'status'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    certificateUrl: 'certificateUrl',
    issuedAt: 'issuedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const TenantCourseScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    courseId: 'courseId',
    explanations: 'explanations',
    assignedAt: 'assignedAt'
  };

  export type TenantCourseScalarFieldEnum = (typeof TenantCourseScalarFieldEnum)[keyof typeof TenantCourseScalarFieldEnum]


  export const MCQScalarFieldEnum: {
    id: 'id',
    question: 'question',
    options: 'options',
    correctAnswer: 'correctAnswer',
    explanation: 'explanation',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MCQScalarFieldEnum = (typeof MCQScalarFieldEnum)[keyof typeof MCQScalarFieldEnum]


  export const UserMCQAnswerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mcqId: 'mcqId',
    answer: 'answer',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt'
  };

  export type UserMCQAnswerScalarFieldEnum = (typeof UserMCQAnswerScalarFieldEnum)[keyof typeof UserMCQAnswerScalarFieldEnum]


  export const SlideExplanationScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    slideNumber: 'slideNumber',
    explanation: 'explanation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlideExplanationScalarFieldEnum = (typeof SlideExplanationScalarFieldEnum)[keyof typeof SlideExplanationScalarFieldEnum]


  export const OrganizationInterestScalarFieldEnum: {
    id: 'id',
    organizationName: 'organizationName',
    email: 'email',
    fullName: 'fullName',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationInterestScalarFieldEnum = (typeof OrganizationInterestScalarFieldEnum)[keyof typeof OrganizationInterestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus'
   */
  export type EnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus[]'
   */
  export type ListEnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus[]'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    domain?: StringFilter<"Tenant"> | string
    adminEmail?: StringFilter<"Tenant"> | string
    adminPassword?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    details?: XOR<TenantDetailsNullableScalarRelationFilter, TenantDetailsWhereInput> | null
    courses?: TenantCourseListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    details?: TenantDetailsOrderByWithRelationInput
    courses?: TenantCourseOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domain?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    adminEmail?: StringFilter<"Tenant"> | string
    adminPassword?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    details?: XOR<TenantDetailsNullableScalarRelationFilter, TenantDetailsWhereInput> | null
    courses?: TenantCourseListRelationFilter
  }, "id" | "domain">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    createdAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    domain?: StringWithAggregatesFilter<"Tenant"> | string
    adminEmail?: StringWithAggregatesFilter<"Tenant"> | string
    adminPassword?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type TenantDetailsWhereInput = {
    AND?: TenantDetailsWhereInput | TenantDetailsWhereInput[]
    OR?: TenantDetailsWhereInput[]
    NOT?: TenantDetailsWhereInput | TenantDetailsWhereInput[]
    id?: StringFilter<"TenantDetails"> | string
    tenantId?: StringFilter<"TenantDetails"> | string
    presidingOfficerEmail?: StringNullableFilter<"TenantDetails"> | string | null
    poshCommitteeEmail?: StringNullableFilter<"TenantDetails"> | string | null
    hrContactName?: StringNullableFilter<"TenantDetails"> | string | null
    hrContactEmail?: StringNullableFilter<"TenantDetails"> | string | null
    hrContactPhone?: StringNullableFilter<"TenantDetails"> | string | null
    ceoName?: StringNullableFilter<"TenantDetails"> | string | null
    ceoEmail?: StringNullableFilter<"TenantDetails"> | string | null
    ceoContact?: StringNullableFilter<"TenantDetails"> | string | null
    ctoName?: StringNullableFilter<"TenantDetails"> | string | null
    ctoEmail?: StringNullableFilter<"TenantDetails"> | string | null
    ctoContact?: StringNullableFilter<"TenantDetails"> | string | null
    ccoEmail?: StringNullableFilter<"TenantDetails"> | string | null
    ccoContact?: StringNullableFilter<"TenantDetails"> | string | null
    croName?: StringNullableFilter<"TenantDetails"> | string | null
    croEmail?: StringNullableFilter<"TenantDetails"> | string | null
    croContact?: StringNullableFilter<"TenantDetails"> | string | null
    legalOfficerName?: StringNullableFilter<"TenantDetails"> | string | null
    legalOfficerEmail?: StringNullableFilter<"TenantDetails"> | string | null
    legalOfficerContact?: StringNullableFilter<"TenantDetails"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }

  export type TenantDetailsOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    presidingOfficerEmail?: SortOrderInput | SortOrder
    poshCommitteeEmail?: SortOrderInput | SortOrder
    hrContactName?: SortOrderInput | SortOrder
    hrContactEmail?: SortOrderInput | SortOrder
    hrContactPhone?: SortOrderInput | SortOrder
    ceoName?: SortOrderInput | SortOrder
    ceoEmail?: SortOrderInput | SortOrder
    ceoContact?: SortOrderInput | SortOrder
    ctoName?: SortOrderInput | SortOrder
    ctoEmail?: SortOrderInput | SortOrder
    ctoContact?: SortOrderInput | SortOrder
    ccoEmail?: SortOrderInput | SortOrder
    ccoContact?: SortOrderInput | SortOrder
    croName?: SortOrderInput | SortOrder
    croEmail?: SortOrderInput | SortOrder
    croContact?: SortOrderInput | SortOrder
    legalOfficerName?: SortOrderInput | SortOrder
    legalOfficerEmail?: SortOrderInput | SortOrder
    legalOfficerContact?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type TenantDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    AND?: TenantDetailsWhereInput | TenantDetailsWhereInput[]
    OR?: TenantDetailsWhereInput[]
    NOT?: TenantDetailsWhereInput | TenantDetailsWhereInput[]
    presidingOfficerEmail?: StringNullableFilter<"TenantDetails"> | string | null
    poshCommitteeEmail?: StringNullableFilter<"TenantDetails"> | string | null
    hrContactName?: StringNullableFilter<"TenantDetails"> | string | null
    hrContactEmail?: StringNullableFilter<"TenantDetails"> | string | null
    hrContactPhone?: StringNullableFilter<"TenantDetails"> | string | null
    ceoName?: StringNullableFilter<"TenantDetails"> | string | null
    ceoEmail?: StringNullableFilter<"TenantDetails"> | string | null
    ceoContact?: StringNullableFilter<"TenantDetails"> | string | null
    ctoName?: StringNullableFilter<"TenantDetails"> | string | null
    ctoEmail?: StringNullableFilter<"TenantDetails"> | string | null
    ctoContact?: StringNullableFilter<"TenantDetails"> | string | null
    ccoEmail?: StringNullableFilter<"TenantDetails"> | string | null
    ccoContact?: StringNullableFilter<"TenantDetails"> | string | null
    croName?: StringNullableFilter<"TenantDetails"> | string | null
    croEmail?: StringNullableFilter<"TenantDetails"> | string | null
    croContact?: StringNullableFilter<"TenantDetails"> | string | null
    legalOfficerName?: StringNullableFilter<"TenantDetails"> | string | null
    legalOfficerEmail?: StringNullableFilter<"TenantDetails"> | string | null
    legalOfficerContact?: StringNullableFilter<"TenantDetails"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
  }, "id" | "tenantId">

  export type TenantDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    presidingOfficerEmail?: SortOrderInput | SortOrder
    poshCommitteeEmail?: SortOrderInput | SortOrder
    hrContactName?: SortOrderInput | SortOrder
    hrContactEmail?: SortOrderInput | SortOrder
    hrContactPhone?: SortOrderInput | SortOrder
    ceoName?: SortOrderInput | SortOrder
    ceoEmail?: SortOrderInput | SortOrder
    ceoContact?: SortOrderInput | SortOrder
    ctoName?: SortOrderInput | SortOrder
    ctoEmail?: SortOrderInput | SortOrder
    ctoContact?: SortOrderInput | SortOrder
    ccoEmail?: SortOrderInput | SortOrder
    ccoContact?: SortOrderInput | SortOrder
    croName?: SortOrderInput | SortOrder
    croEmail?: SortOrderInput | SortOrder
    croContact?: SortOrderInput | SortOrder
    legalOfficerName?: SortOrderInput | SortOrder
    legalOfficerEmail?: SortOrderInput | SortOrder
    legalOfficerContact?: SortOrderInput | SortOrder
    _count?: TenantDetailsCountOrderByAggregateInput
    _max?: TenantDetailsMaxOrderByAggregateInput
    _min?: TenantDetailsMinOrderByAggregateInput
  }

  export type TenantDetailsScalarWhereWithAggregatesInput = {
    AND?: TenantDetailsScalarWhereWithAggregatesInput | TenantDetailsScalarWhereWithAggregatesInput[]
    OR?: TenantDetailsScalarWhereWithAggregatesInput[]
    NOT?: TenantDetailsScalarWhereWithAggregatesInput | TenantDetailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantDetails"> | string
    tenantId?: StringWithAggregatesFilter<"TenantDetails"> | string
    presidingOfficerEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    poshCommitteeEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    hrContactName?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    hrContactEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    hrContactPhone?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ceoName?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ceoEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ceoContact?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ctoName?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ctoEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ctoContact?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ccoEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    ccoContact?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    croName?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    croEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    croContact?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    legalOfficerName?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    legalOfficerEmail?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
    legalOfficerContact?: StringNullableWithAggregatesFilter<"TenantDetails"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    userRoles?: EnumUserRoleNullableListFilter<"User">
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    certificates?: CertificateListRelationFilter
    mcqAnswers?: UserMCQAnswerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    userRoles?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
    mcqAnswers?: UserMCQAnswerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    tenantId?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    userRoles?: EnumUserRoleNullableListFilter<"User">
    tenant?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    certificates?: CertificateListRelationFilter
    mcqAnswers?: UserMCQAnswerListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrderInput | SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    userRoles?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    userRoles?: EnumUserRoleNullableListFilter<"User">
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    duration?: IntFilter<"Course"> | number
    tags?: StringFilter<"Course"> | string
    learningObjectives?: StringFilter<"Course"> | string
    targetAudience?: StringFilter<"Course"> | string
    materialUrl?: StringFilter<"Course"> | string
    videoUrl?: StringNullableFilter<"Course"> | string | null
    slides?: JsonNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    mcqs?: MCQListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    tenants?: TenantCourseListRelationFilter
    slideExplanations?: SlideExplanationListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    tags?: SortOrder
    learningObjectives?: SortOrder
    targetAudience?: SortOrder
    materialUrl?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    slides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mcqs?: MCQOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    tenants?: TenantCourseOrderByRelationAggregateInput
    slideExplanations?: SlideExplanationOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    title?: StringFilter<"Course"> | string
    description?: StringNullableFilter<"Course"> | string | null
    duration?: IntFilter<"Course"> | number
    tags?: StringFilter<"Course"> | string
    learningObjectives?: StringFilter<"Course"> | string
    targetAudience?: StringFilter<"Course"> | string
    materialUrl?: StringFilter<"Course"> | string
    videoUrl?: StringNullableFilter<"Course"> | string | null
    slides?: JsonNullableListFilter<"Course">
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    mcqs?: MCQListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    tenants?: TenantCourseListRelationFilter
    slideExplanations?: SlideExplanationListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    tags?: SortOrder
    learningObjectives?: SortOrder
    targetAudience?: SortOrder
    materialUrl?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    slides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    duration?: IntWithAggregatesFilter<"Course"> | number
    tags?: StringWithAggregatesFilter<"Course"> | string
    learningObjectives?: StringWithAggregatesFilter<"Course"> | string
    targetAudience?: StringWithAggregatesFilter<"Course"> | string
    materialUrl?: StringWithAggregatesFilter<"Course"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    slides?: JsonNullableListFilter<"Course">
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    progress?: IntFilter<"Enrollment"> | number
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    progress?: IntFilter<"Enrollment"> | number
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
    courseId?: StringWithAggregatesFilter<"Enrollment"> | string
    progress?: IntWithAggregatesFilter<"Enrollment"> | number
    status?: EnumEnrollmentStatusWithAggregatesFilter<"Enrollment"> | $Enums.EnrollmentStatus
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    courseId?: StringFilter<"Certificate"> | string
    certificateUrl?: StringFilter<"Certificate"> | string
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    certificateUrl?: SortOrder
    issuedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    userId?: StringFilter<"Certificate"> | string
    courseId?: StringFilter<"Certificate"> | string
    certificateUrl?: StringFilter<"Certificate"> | string
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    certificateUrl?: SortOrder
    issuedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    userId?: StringWithAggregatesFilter<"Certificate"> | string
    courseId?: StringWithAggregatesFilter<"Certificate"> | string
    certificateUrl?: StringWithAggregatesFilter<"Certificate"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type TenantCourseWhereInput = {
    AND?: TenantCourseWhereInput | TenantCourseWhereInput[]
    OR?: TenantCourseWhereInput[]
    NOT?: TenantCourseWhereInput | TenantCourseWhereInput[]
    id?: StringFilter<"TenantCourse"> | string
    tenantId?: StringFilter<"TenantCourse"> | string
    courseId?: StringFilter<"TenantCourse"> | string
    explanations?: JsonNullableFilter<"TenantCourse">
    assignedAt?: DateTimeFilter<"TenantCourse"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type TenantCourseOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    courseId?: SortOrder
    explanations?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type TenantCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantCourseWhereInput | TenantCourseWhereInput[]
    OR?: TenantCourseWhereInput[]
    NOT?: TenantCourseWhereInput | TenantCourseWhereInput[]
    tenantId?: StringFilter<"TenantCourse"> | string
    courseId?: StringFilter<"TenantCourse"> | string
    explanations?: JsonNullableFilter<"TenantCourse">
    assignedAt?: DateTimeFilter<"TenantCourse"> | Date | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type TenantCourseOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    courseId?: SortOrder
    explanations?: SortOrderInput | SortOrder
    assignedAt?: SortOrder
    _count?: TenantCourseCountOrderByAggregateInput
    _max?: TenantCourseMaxOrderByAggregateInput
    _min?: TenantCourseMinOrderByAggregateInput
  }

  export type TenantCourseScalarWhereWithAggregatesInput = {
    AND?: TenantCourseScalarWhereWithAggregatesInput | TenantCourseScalarWhereWithAggregatesInput[]
    OR?: TenantCourseScalarWhereWithAggregatesInput[]
    NOT?: TenantCourseScalarWhereWithAggregatesInput | TenantCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TenantCourse"> | string
    tenantId?: StringWithAggregatesFilter<"TenantCourse"> | string
    courseId?: StringWithAggregatesFilter<"TenantCourse"> | string
    explanations?: JsonNullableWithAggregatesFilter<"TenantCourse">
    assignedAt?: DateTimeWithAggregatesFilter<"TenantCourse"> | Date | string
  }

  export type MCQWhereInput = {
    AND?: MCQWhereInput | MCQWhereInput[]
    OR?: MCQWhereInput[]
    NOT?: MCQWhereInput | MCQWhereInput[]
    id?: StringFilter<"MCQ"> | string
    question?: StringFilter<"MCQ"> | string
    options?: StringNullableListFilter<"MCQ">
    correctAnswer?: StringFilter<"MCQ"> | string
    explanation?: StringNullableFilter<"MCQ"> | string | null
    courseId?: StringFilter<"MCQ"> | string
    createdAt?: DateTimeFilter<"MCQ"> | Date | string
    updatedAt?: DateTimeFilter<"MCQ"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    userAnswers?: UserMCQAnswerListRelationFilter
  }

  export type MCQOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    userAnswers?: UserMCQAnswerOrderByRelationAggregateInput
  }

  export type MCQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MCQWhereInput | MCQWhereInput[]
    OR?: MCQWhereInput[]
    NOT?: MCQWhereInput | MCQWhereInput[]
    question?: StringFilter<"MCQ"> | string
    options?: StringNullableListFilter<"MCQ">
    correctAnswer?: StringFilter<"MCQ"> | string
    explanation?: StringNullableFilter<"MCQ"> | string | null
    courseId?: StringFilter<"MCQ"> | string
    createdAt?: DateTimeFilter<"MCQ"> | Date | string
    updatedAt?: DateTimeFilter<"MCQ"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    userAnswers?: UserMCQAnswerListRelationFilter
  }, "id">

  export type MCQOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrderInput | SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MCQCountOrderByAggregateInput
    _max?: MCQMaxOrderByAggregateInput
    _min?: MCQMinOrderByAggregateInput
  }

  export type MCQScalarWhereWithAggregatesInput = {
    AND?: MCQScalarWhereWithAggregatesInput | MCQScalarWhereWithAggregatesInput[]
    OR?: MCQScalarWhereWithAggregatesInput[]
    NOT?: MCQScalarWhereWithAggregatesInput | MCQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MCQ"> | string
    question?: StringWithAggregatesFilter<"MCQ"> | string
    options?: StringNullableListFilter<"MCQ">
    correctAnswer?: StringWithAggregatesFilter<"MCQ"> | string
    explanation?: StringNullableWithAggregatesFilter<"MCQ"> | string | null
    courseId?: StringWithAggregatesFilter<"MCQ"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MCQ"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MCQ"> | Date | string
  }

  export type UserMCQAnswerWhereInput = {
    AND?: UserMCQAnswerWhereInput | UserMCQAnswerWhereInput[]
    OR?: UserMCQAnswerWhereInput[]
    NOT?: UserMCQAnswerWhereInput | UserMCQAnswerWhereInput[]
    id?: StringFilter<"UserMCQAnswer"> | string
    userId?: StringFilter<"UserMCQAnswer"> | string
    mcqId?: StringFilter<"UserMCQAnswer"> | string
    answer?: StringFilter<"UserMCQAnswer"> | string
    isCorrect?: BoolFilter<"UserMCQAnswer"> | boolean
    createdAt?: DateTimeFilter<"UserMCQAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mcq?: XOR<MCQScalarRelationFilter, MCQWhereInput>
  }

  export type UserMCQAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mcqId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    mcq?: MCQOrderByWithRelationInput
  }

  export type UserMCQAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserMCQAnswerWhereInput | UserMCQAnswerWhereInput[]
    OR?: UserMCQAnswerWhereInput[]
    NOT?: UserMCQAnswerWhereInput | UserMCQAnswerWhereInput[]
    userId?: StringFilter<"UserMCQAnswer"> | string
    mcqId?: StringFilter<"UserMCQAnswer"> | string
    answer?: StringFilter<"UserMCQAnswer"> | string
    isCorrect?: BoolFilter<"UserMCQAnswer"> | boolean
    createdAt?: DateTimeFilter<"UserMCQAnswer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mcq?: XOR<MCQScalarRelationFilter, MCQWhereInput>
  }, "id">

  export type UserMCQAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mcqId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    _count?: UserMCQAnswerCountOrderByAggregateInput
    _max?: UserMCQAnswerMaxOrderByAggregateInput
    _min?: UserMCQAnswerMinOrderByAggregateInput
  }

  export type UserMCQAnswerScalarWhereWithAggregatesInput = {
    AND?: UserMCQAnswerScalarWhereWithAggregatesInput | UserMCQAnswerScalarWhereWithAggregatesInput[]
    OR?: UserMCQAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserMCQAnswerScalarWhereWithAggregatesInput | UserMCQAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserMCQAnswer"> | string
    userId?: StringWithAggregatesFilter<"UserMCQAnswer"> | string
    mcqId?: StringWithAggregatesFilter<"UserMCQAnswer"> | string
    answer?: StringWithAggregatesFilter<"UserMCQAnswer"> | string
    isCorrect?: BoolWithAggregatesFilter<"UserMCQAnswer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserMCQAnswer"> | Date | string
  }

  export type SlideExplanationWhereInput = {
    AND?: SlideExplanationWhereInput | SlideExplanationWhereInput[]
    OR?: SlideExplanationWhereInput[]
    NOT?: SlideExplanationWhereInput | SlideExplanationWhereInput[]
    id?: StringFilter<"SlideExplanation"> | string
    courseId?: StringFilter<"SlideExplanation"> | string
    slideNumber?: IntFilter<"SlideExplanation"> | number
    explanation?: StringFilter<"SlideExplanation"> | string
    createdAt?: DateTimeFilter<"SlideExplanation"> | Date | string
    updatedAt?: DateTimeFilter<"SlideExplanation"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type SlideExplanationOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    slideNumber?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type SlideExplanationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SlideExplanationWhereInput | SlideExplanationWhereInput[]
    OR?: SlideExplanationWhereInput[]
    NOT?: SlideExplanationWhereInput | SlideExplanationWhereInput[]
    courseId?: StringFilter<"SlideExplanation"> | string
    slideNumber?: IntFilter<"SlideExplanation"> | number
    explanation?: StringFilter<"SlideExplanation"> | string
    createdAt?: DateTimeFilter<"SlideExplanation"> | Date | string
    updatedAt?: DateTimeFilter<"SlideExplanation"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type SlideExplanationOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    slideNumber?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlideExplanationCountOrderByAggregateInput
    _avg?: SlideExplanationAvgOrderByAggregateInput
    _max?: SlideExplanationMaxOrderByAggregateInput
    _min?: SlideExplanationMinOrderByAggregateInput
    _sum?: SlideExplanationSumOrderByAggregateInput
  }

  export type SlideExplanationScalarWhereWithAggregatesInput = {
    AND?: SlideExplanationScalarWhereWithAggregatesInput | SlideExplanationScalarWhereWithAggregatesInput[]
    OR?: SlideExplanationScalarWhereWithAggregatesInput[]
    NOT?: SlideExplanationScalarWhereWithAggregatesInput | SlideExplanationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlideExplanation"> | string
    courseId?: StringWithAggregatesFilter<"SlideExplanation"> | string
    slideNumber?: IntWithAggregatesFilter<"SlideExplanation"> | number
    explanation?: StringWithAggregatesFilter<"SlideExplanation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SlideExplanation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SlideExplanation"> | Date | string
  }

  export type OrganizationInterestWhereInput = {
    AND?: OrganizationInterestWhereInput | OrganizationInterestWhereInput[]
    OR?: OrganizationInterestWhereInput[]
    NOT?: OrganizationInterestWhereInput | OrganizationInterestWhereInput[]
    id?: StringFilter<"OrganizationInterest"> | string
    organizationName?: StringFilter<"OrganizationInterest"> | string
    email?: StringFilter<"OrganizationInterest"> | string
    fullName?: StringFilter<"OrganizationInterest"> | string
    message?: StringFilter<"OrganizationInterest"> | string
    status?: StringFilter<"OrganizationInterest"> | string
    createdAt?: DateTimeFilter<"OrganizationInterest"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationInterest"> | Date | string
  }

  export type OrganizationInterestOrderByWithRelationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationInterestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_organizationName?: OrganizationInterestEmailOrganizationNameCompoundUniqueInput
    AND?: OrganizationInterestWhereInput | OrganizationInterestWhereInput[]
    OR?: OrganizationInterestWhereInput[]
    NOT?: OrganizationInterestWhereInput | OrganizationInterestWhereInput[]
    organizationName?: StringFilter<"OrganizationInterest"> | string
    email?: StringFilter<"OrganizationInterest"> | string
    fullName?: StringFilter<"OrganizationInterest"> | string
    message?: StringFilter<"OrganizationInterest"> | string
    status?: StringFilter<"OrganizationInterest"> | string
    createdAt?: DateTimeFilter<"OrganizationInterest"> | Date | string
    updatedAt?: DateTimeFilter<"OrganizationInterest"> | Date | string
  }, "id" | "email_organizationName">

  export type OrganizationInterestOrderByWithAggregationInput = {
    id?: SortOrder
    organizationName?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationInterestCountOrderByAggregateInput
    _max?: OrganizationInterestMaxOrderByAggregateInput
    _min?: OrganizationInterestMinOrderByAggregateInput
  }

  export type OrganizationInterestScalarWhereWithAggregatesInput = {
    AND?: OrganizationInterestScalarWhereWithAggregatesInput | OrganizationInterestScalarWhereWithAggregatesInput[]
    OR?: OrganizationInterestScalarWhereWithAggregatesInput[]
    NOT?: OrganizationInterestScalarWhereWithAggregatesInput | OrganizationInterestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationInterest"> | string
    organizationName?: StringWithAggregatesFilter<"OrganizationInterest"> | string
    email?: StringWithAggregatesFilter<"OrganizationInterest"> | string
    fullName?: StringWithAggregatesFilter<"OrganizationInterest"> | string
    message?: StringWithAggregatesFilter<"OrganizationInterest"> | string
    status?: StringWithAggregatesFilter<"OrganizationInterest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationInterest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrganizationInterest"> | Date | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    details?: TenantDetailsCreateNestedOneWithoutTenantInput
    courses?: TenantCourseCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    details?: TenantDetailsUncheckedCreateNestedOneWithoutTenantInput
    courses?: TenantCourseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    details?: TenantDetailsUpdateOneWithoutTenantNestedInput
    courses?: TenantCourseUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    details?: TenantDetailsUncheckedUpdateOneWithoutTenantNestedInput
    courses?: TenantCourseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantDetailsCreateInput = {
    id?: string
    presidingOfficerEmail?: string | null
    poshCommitteeEmail?: string | null
    hrContactName?: string | null
    hrContactEmail?: string | null
    hrContactPhone?: string | null
    ceoName?: string | null
    ceoEmail?: string | null
    ceoContact?: string | null
    ctoName?: string | null
    ctoEmail?: string | null
    ctoContact?: string | null
    ccoEmail?: string | null
    ccoContact?: string | null
    croName?: string | null
    croEmail?: string | null
    croContact?: string | null
    legalOfficerName?: string | null
    legalOfficerEmail?: string | null
    legalOfficerContact?: string | null
    tenant: TenantCreateNestedOneWithoutDetailsInput
  }

  export type TenantDetailsUncheckedCreateInput = {
    id?: string
    tenantId: string
    presidingOfficerEmail?: string | null
    poshCommitteeEmail?: string | null
    hrContactName?: string | null
    hrContactEmail?: string | null
    hrContactPhone?: string | null
    ceoName?: string | null
    ceoEmail?: string | null
    ceoContact?: string | null
    ctoName?: string | null
    ctoEmail?: string | null
    ctoContact?: string | null
    ccoEmail?: string | null
    ccoContact?: string | null
    croName?: string | null
    croEmail?: string | null
    croContact?: string | null
    legalOfficerName?: string | null
    legalOfficerEmail?: string | null
    legalOfficerContact?: string | null
  }

  export type TenantDetailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    presidingOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    poshCommitteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactName?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ceoName?: NullableStringFieldUpdateOperationsInput | string | null
    ceoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ceoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ctoName?: NullableStringFieldUpdateOperationsInput | string | null
    ctoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ctoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ccoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ccoContact?: NullableStringFieldUpdateOperationsInput | string | null
    croName?: NullableStringFieldUpdateOperationsInput | string | null
    croEmail?: NullableStringFieldUpdateOperationsInput | string | null
    croContact?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerName?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerContact?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type TenantDetailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    presidingOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    poshCommitteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactName?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ceoName?: NullableStringFieldUpdateOperationsInput | string | null
    ceoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ceoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ctoName?: NullableStringFieldUpdateOperationsInput | string | null
    ctoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ctoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ccoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ccoContact?: NullableStringFieldUpdateOperationsInput | string | null
    croName?: NullableStringFieldUpdateOperationsInput | string | null
    croEmail?: NullableStringFieldUpdateOperationsInput | string | null
    croContact?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerName?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantDetailsCreateManyInput = {
    id?: string
    tenantId: string
    presidingOfficerEmail?: string | null
    poshCommitteeEmail?: string | null
    hrContactName?: string | null
    hrContactEmail?: string | null
    hrContactPhone?: string | null
    ceoName?: string | null
    ceoEmail?: string | null
    ceoContact?: string | null
    ctoName?: string | null
    ctoEmail?: string | null
    ctoContact?: string | null
    ccoEmail?: string | null
    ccoContact?: string | null
    croName?: string | null
    croEmail?: string | null
    croContact?: string | null
    legalOfficerName?: string | null
    legalOfficerEmail?: string | null
    legalOfficerContact?: string | null
  }

  export type TenantDetailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    presidingOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    poshCommitteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactName?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ceoName?: NullableStringFieldUpdateOperationsInput | string | null
    ceoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ceoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ctoName?: NullableStringFieldUpdateOperationsInput | string | null
    ctoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ctoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ccoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ccoContact?: NullableStringFieldUpdateOperationsInput | string | null
    croName?: NullableStringFieldUpdateOperationsInput | string | null
    croEmail?: NullableStringFieldUpdateOperationsInput | string | null
    croContact?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerName?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantDetailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    presidingOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    poshCommitteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactName?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ceoName?: NullableStringFieldUpdateOperationsInput | string | null
    ceoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ceoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ctoName?: NullableStringFieldUpdateOperationsInput | string | null
    ctoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ctoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ccoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ccoContact?: NullableStringFieldUpdateOperationsInput | string | null
    croName?: NullableStringFieldUpdateOperationsInput | string | null
    croEmail?: NullableStringFieldUpdateOperationsInput | string | null
    croContact?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerName?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantCreateNestedOneWithoutUsersInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    tenantId?: string | null
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantUpdateOneWithoutUsersNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    tenantId?: string | null
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseUncheckedCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUncheckedUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    progress?: number
    status?: $Enums.EnrollmentStatus
    user: UserCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    progress?: number
    status?: $Enums.EnrollmentStatus
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    progress?: number
    status?: $Enums.EnrollmentStatus
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type CertificateCreateInput = {
    id?: string
    courseId: string
    certificateUrl: string
    issuedAt?: Date | string
    user: UserCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    userId: string
    courseId: string
    certificateUrl: string
    issuedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    userId: string
    courseId: string
    certificateUrl: string
    issuedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCourseCreateInput = {
    id?: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCoursesInput
    course: CourseCreateNestedOneWithoutTenantsInput
  }

  export type TenantCourseUncheckedCreateInput = {
    id?: string
    tenantId: string
    courseId: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type TenantCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutTenantsNestedInput
  }

  export type TenantCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCourseCreateManyInput = {
    id?: string
    tenantId: string
    courseId: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type TenantCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MCQCreateInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutMcqsInput
    userAnswers?: UserMCQAnswerCreateNestedManyWithoutMcqInput
  }

  export type MCQUncheckedCreateInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userAnswers?: UserMCQAnswerUncheckedCreateNestedManyWithoutMcqInput
  }

  export type MCQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutMcqsNestedInput
    userAnswers?: UserMCQAnswerUpdateManyWithoutMcqNestedInput
  }

  export type MCQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAnswers?: UserMCQAnswerUncheckedUpdateManyWithoutMcqNestedInput
  }

  export type MCQCreateManyInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MCQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MCQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMCQAnswerCreateInput = {
    id?: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMcqAnswersInput
    mcq: MCQCreateNestedOneWithoutUserAnswersInput
  }

  export type UserMCQAnswerUncheckedCreateInput = {
    id?: string
    userId: string
    mcqId: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserMCQAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMcqAnswersNestedInput
    mcq?: MCQUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserMCQAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mcqId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMCQAnswerCreateManyInput = {
    id?: string
    userId: string
    mcqId: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserMCQAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMCQAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mcqId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideExplanationCreateInput = {
    id?: string
    slideNumber: number
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutSlideExplanationsInput
  }

  export type SlideExplanationUncheckedCreateInput = {
    id?: string
    courseId: string
    slideNumber: number
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlideExplanationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slideNumber?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSlideExplanationsNestedInput
  }

  export type SlideExplanationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    slideNumber?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideExplanationCreateManyInput = {
    id?: string
    courseId: string
    slideNumber: number
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlideExplanationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slideNumber?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideExplanationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    slideNumber?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInterestCreateInput = {
    id?: string
    organizationName: string
    email: string
    fullName: string
    message: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInterestUncheckedCreateInput = {
    id?: string
    organizationName: string
    email: string
    fullName: string
    message: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInterestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInterestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInterestCreateManyInput = {
    id?: string
    organizationName: string
    email: string
    fullName: string
    message: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationInterestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationInterestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TenantDetailsNullableScalarRelationFilter = {
    is?: TenantDetailsWhereInput | null
    isNot?: TenantDetailsWhereInput | null
  }

  export type TenantCourseListRelationFilter = {
    every?: TenantCourseWhereInput
    some?: TenantCourseWhereInput
    none?: TenantCourseWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    domain?: SortOrder
    adminEmail?: SortOrder
    adminPassword?: SortOrder
    createdAt?: SortOrder
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

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TenantDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    presidingOfficerEmail?: SortOrder
    poshCommitteeEmail?: SortOrder
    hrContactName?: SortOrder
    hrContactEmail?: SortOrder
    hrContactPhone?: SortOrder
    ceoName?: SortOrder
    ceoEmail?: SortOrder
    ceoContact?: SortOrder
    ctoName?: SortOrder
    ctoEmail?: SortOrder
    ctoContact?: SortOrder
    ccoEmail?: SortOrder
    ccoContact?: SortOrder
    croName?: SortOrder
    croEmail?: SortOrder
    croContact?: SortOrder
    legalOfficerName?: SortOrder
    legalOfficerEmail?: SortOrder
    legalOfficerContact?: SortOrder
  }

  export type TenantDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    presidingOfficerEmail?: SortOrder
    poshCommitteeEmail?: SortOrder
    hrContactName?: SortOrder
    hrContactEmail?: SortOrder
    hrContactPhone?: SortOrder
    ceoName?: SortOrder
    ceoEmail?: SortOrder
    ceoContact?: SortOrder
    ctoName?: SortOrder
    ctoEmail?: SortOrder
    ctoContact?: SortOrder
    ccoEmail?: SortOrder
    ccoContact?: SortOrder
    croName?: SortOrder
    croEmail?: SortOrder
    croContact?: SortOrder
    legalOfficerName?: SortOrder
    legalOfficerEmail?: SortOrder
    legalOfficerContact?: SortOrder
  }

  export type TenantDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    presidingOfficerEmail?: SortOrder
    poshCommitteeEmail?: SortOrder
    hrContactName?: SortOrder
    hrContactEmail?: SortOrder
    hrContactPhone?: SortOrder
    ceoName?: SortOrder
    ceoEmail?: SortOrder
    ceoContact?: SortOrder
    ctoName?: SortOrder
    ctoEmail?: SortOrder
    ctoContact?: SortOrder
    ccoEmail?: SortOrder
    ccoContact?: SortOrder
    croName?: SortOrder
    croEmail?: SortOrder
    croContact?: SortOrder
    legalOfficerName?: SortOrder
    legalOfficerEmail?: SortOrder
    legalOfficerContact?: SortOrder
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserRoleNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    has?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    hasSome?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TenantNullableScalarRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type UserMCQAnswerListRelationFilter = {
    every?: UserMCQAnswerWhereInput
    some?: UserMCQAnswerWhereInput
    none?: UserMCQAnswerWhereInput
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMCQAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    userRoles?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MCQListRelationFilter = {
    every?: MCQWhereInput
    some?: MCQWhereInput
    none?: MCQWhereInput
  }

  export type SlideExplanationListRelationFilter = {
    every?: SlideExplanationWhereInput
    some?: SlideExplanationWhereInput
    none?: SlideExplanationWhereInput
  }

  export type MCQOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlideExplanationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    tags?: SortOrder
    learningObjectives?: SortOrder
    targetAudience?: SortOrder
    materialUrl?: SortOrder
    videoUrl?: SortOrder
    slides?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    tags?: SortOrder
    learningObjectives?: SortOrder
    targetAudience?: SortOrder
    materialUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    tags?: SortOrder
    learningObjectives?: SortOrder
    targetAudience?: SortOrder
    materialUrl?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type EnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    status?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    status?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    progress?: SortOrder
    status?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type EnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    certificateUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    certificateUrl?: SortOrder
    issuedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    certificateUrl?: SortOrder
    issuedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TenantCourseCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    courseId?: SortOrder
    explanations?: SortOrder
    assignedAt?: SortOrder
  }

  export type TenantCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    courseId?: SortOrder
    assignedAt?: SortOrder
  }

  export type TenantCourseMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    courseId?: SortOrder
    assignedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MCQCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MCQMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MCQMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    explanation?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MCQScalarRelationFilter = {
    is?: MCQWhereInput
    isNot?: MCQWhereInput
  }

  export type UserMCQAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mcqId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMCQAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mcqId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMCQAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mcqId?: SortOrder
    answer?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SlideExplanationCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    slideNumber?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlideExplanationAvgOrderByAggregateInput = {
    slideNumber?: SortOrder
  }

  export type SlideExplanationMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    slideNumber?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlideExplanationMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    slideNumber?: SortOrder
    explanation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlideExplanationSumOrderByAggregateInput = {
    slideNumber?: SortOrder
  }

  export type OrganizationInterestEmailOrganizationNameCompoundUniqueInput = {
    email: string
    organizationName: string
  }

  export type OrganizationInterestCountOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationInterestMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationInterestMinOrderByAggregateInput = {
    id?: SortOrder
    organizationName?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TenantDetailsCreateNestedOneWithoutTenantInput = {
    create?: XOR<TenantDetailsCreateWithoutTenantInput, TenantDetailsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantDetailsCreateOrConnectWithoutTenantInput
    connect?: TenantDetailsWhereUniqueInput
  }

  export type TenantCourseCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantCourseCreateWithoutTenantInput, TenantCourseUncheckedCreateWithoutTenantInput> | TenantCourseCreateWithoutTenantInput[] | TenantCourseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutTenantInput | TenantCourseCreateOrConnectWithoutTenantInput[]
    createMany?: TenantCourseCreateManyTenantInputEnvelope
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TenantDetailsUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<TenantDetailsCreateWithoutTenantInput, TenantDetailsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantDetailsCreateOrConnectWithoutTenantInput
    connect?: TenantDetailsWhereUniqueInput
  }

  export type TenantCourseUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenantCourseCreateWithoutTenantInput, TenantCourseUncheckedCreateWithoutTenantInput> | TenantCourseCreateWithoutTenantInput[] | TenantCourseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutTenantInput | TenantCourseCreateOrConnectWithoutTenantInput[]
    createMany?: TenantCourseCreateManyTenantInputEnvelope
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantDetailsUpdateOneWithoutTenantNestedInput = {
    create?: XOR<TenantDetailsCreateWithoutTenantInput, TenantDetailsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantDetailsCreateOrConnectWithoutTenantInput
    upsert?: TenantDetailsUpsertWithoutTenantInput
    disconnect?: TenantDetailsWhereInput | boolean
    delete?: TenantDetailsWhereInput | boolean
    connect?: TenantDetailsWhereUniqueInput
    update?: XOR<XOR<TenantDetailsUpdateToOneWithWhereWithoutTenantInput, TenantDetailsUpdateWithoutTenantInput>, TenantDetailsUncheckedUpdateWithoutTenantInput>
  }

  export type TenantCourseUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantCourseCreateWithoutTenantInput, TenantCourseUncheckedCreateWithoutTenantInput> | TenantCourseCreateWithoutTenantInput[] | TenantCourseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutTenantInput | TenantCourseCreateOrConnectWithoutTenantInput[]
    upsert?: TenantCourseUpsertWithWhereUniqueWithoutTenantInput | TenantCourseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantCourseCreateManyTenantInputEnvelope
    set?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    disconnect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    delete?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    update?: TenantCourseUpdateWithWhereUniqueWithoutTenantInput | TenantCourseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantCourseUpdateManyWithWhereWithoutTenantInput | TenantCourseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantCourseScalarWhereInput | TenantCourseScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TenantDetailsUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<TenantDetailsCreateWithoutTenantInput, TenantDetailsUncheckedCreateWithoutTenantInput>
    connectOrCreate?: TenantDetailsCreateOrConnectWithoutTenantInput
    upsert?: TenantDetailsUpsertWithoutTenantInput
    disconnect?: TenantDetailsWhereInput | boolean
    delete?: TenantDetailsWhereInput | boolean
    connect?: TenantDetailsWhereUniqueInput
    update?: XOR<XOR<TenantDetailsUpdateToOneWithWhereWithoutTenantInput, TenantDetailsUpdateWithoutTenantInput>, TenantDetailsUncheckedUpdateWithoutTenantInput>
  }

  export type TenantCourseUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenantCourseCreateWithoutTenantInput, TenantCourseUncheckedCreateWithoutTenantInput> | TenantCourseCreateWithoutTenantInput[] | TenantCourseUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutTenantInput | TenantCourseCreateOrConnectWithoutTenantInput[]
    upsert?: TenantCourseUpsertWithWhereUniqueWithoutTenantInput | TenantCourseUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenantCourseCreateManyTenantInputEnvelope
    set?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    disconnect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    delete?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    update?: TenantCourseUpdateWithWhereUniqueWithoutTenantInput | TenantCourseUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenantCourseUpdateManyWithWhereWithoutTenantInput | TenantCourseUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenantCourseScalarWhereInput | TenantCourseScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutDetailsInput = {
    create?: XOR<TenantCreateWithoutDetailsInput, TenantUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDetailsInput
    connect?: TenantWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TenantUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<TenantCreateWithoutDetailsInput, TenantUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutDetailsInput
    upsert?: TenantUpsertWithoutDetailsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutDetailsInput, TenantUpdateWithoutDetailsInput>, TenantUncheckedUpdateWithoutDetailsInput>
  }

  export type UserCreateuserRolesInput = {
    set: $Enums.UserRole[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type UserMCQAnswerCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMCQAnswerCreateWithoutUserInput, UserMCQAnswerUncheckedCreateWithoutUserInput> | UserMCQAnswerCreateWithoutUserInput[] | UserMCQAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutUserInput | UserMCQAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserMCQAnswerCreateManyUserInputEnvelope
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type UserMCQAnswerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMCQAnswerCreateWithoutUserInput, UserMCQAnswerUncheckedCreateWithoutUserInput> | UserMCQAnswerCreateWithoutUserInput[] | UserMCQAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutUserInput | UserMCQAnswerCreateOrConnectWithoutUserInput[]
    createMany?: UserMCQAnswerCreateManyUserInputEnvelope
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserUpdateuserRolesInput = {
    set?: $Enums.UserRole[]
    push?: $Enums.UserRole | $Enums.UserRole[]
  }

  export type TenantUpdateOneWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserMCQAnswerUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMCQAnswerCreateWithoutUserInput, UserMCQAnswerUncheckedCreateWithoutUserInput> | UserMCQAnswerCreateWithoutUserInput[] | UserMCQAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutUserInput | UserMCQAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserMCQAnswerUpsertWithWhereUniqueWithoutUserInput | UserMCQAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMCQAnswerCreateManyUserInputEnvelope
    set?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    disconnect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    delete?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    update?: UserMCQAnswerUpdateWithWhereUniqueWithoutUserInput | UserMCQAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMCQAnswerUpdateManyWithWhereWithoutUserInput | UserMCQAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMCQAnswerScalarWhereInput | UserMCQAnswerScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput> | CertificateCreateWithoutUserInput[] | CertificateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutUserInput | CertificateCreateOrConnectWithoutUserInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutUserInput | CertificateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CertificateCreateManyUserInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutUserInput | CertificateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutUserInput | CertificateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserMCQAnswerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMCQAnswerCreateWithoutUserInput, UserMCQAnswerUncheckedCreateWithoutUserInput> | UserMCQAnswerCreateWithoutUserInput[] | UserMCQAnswerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutUserInput | UserMCQAnswerCreateOrConnectWithoutUserInput[]
    upsert?: UserMCQAnswerUpsertWithWhereUniqueWithoutUserInput | UserMCQAnswerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMCQAnswerCreateManyUserInputEnvelope
    set?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    disconnect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    delete?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    update?: UserMCQAnswerUpdateWithWhereUniqueWithoutUserInput | UserMCQAnswerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMCQAnswerUpdateManyWithWhereWithoutUserInput | UserMCQAnswerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMCQAnswerScalarWhereInput | UserMCQAnswerScalarWhereInput[]
  }

  export type CourseCreateslidesInput = {
    set: InputJsonValue[]
  }

  export type MCQCreateNestedManyWithoutCourseInput = {
    create?: XOR<MCQCreateWithoutCourseInput, MCQUncheckedCreateWithoutCourseInput> | MCQCreateWithoutCourseInput[] | MCQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MCQCreateOrConnectWithoutCourseInput | MCQCreateOrConnectWithoutCourseInput[]
    createMany?: MCQCreateManyCourseInputEnvelope
    connect?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type TenantCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<TenantCourseCreateWithoutCourseInput, TenantCourseUncheckedCreateWithoutCourseInput> | TenantCourseCreateWithoutCourseInput[] | TenantCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutCourseInput | TenantCourseCreateOrConnectWithoutCourseInput[]
    createMany?: TenantCourseCreateManyCourseInputEnvelope
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
  }

  export type SlideExplanationCreateNestedManyWithoutCourseInput = {
    create?: XOR<SlideExplanationCreateWithoutCourseInput, SlideExplanationUncheckedCreateWithoutCourseInput> | SlideExplanationCreateWithoutCourseInput[] | SlideExplanationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SlideExplanationCreateOrConnectWithoutCourseInput | SlideExplanationCreateOrConnectWithoutCourseInput[]
    createMany?: SlideExplanationCreateManyCourseInputEnvelope
    connect?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
  }

  export type MCQUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<MCQCreateWithoutCourseInput, MCQUncheckedCreateWithoutCourseInput> | MCQCreateWithoutCourseInput[] | MCQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MCQCreateOrConnectWithoutCourseInput | MCQCreateOrConnectWithoutCourseInput[]
    createMany?: MCQCreateManyCourseInputEnvelope
    connect?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type TenantCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TenantCourseCreateWithoutCourseInput, TenantCourseUncheckedCreateWithoutCourseInput> | TenantCourseCreateWithoutCourseInput[] | TenantCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutCourseInput | TenantCourseCreateOrConnectWithoutCourseInput[]
    createMany?: TenantCourseCreateManyCourseInputEnvelope
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
  }

  export type SlideExplanationUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SlideExplanationCreateWithoutCourseInput, SlideExplanationUncheckedCreateWithoutCourseInput> | SlideExplanationCreateWithoutCourseInput[] | SlideExplanationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SlideExplanationCreateOrConnectWithoutCourseInput | SlideExplanationCreateOrConnectWithoutCourseInput[]
    createMany?: SlideExplanationCreateManyCourseInputEnvelope
    connect?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateslidesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type MCQUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MCQCreateWithoutCourseInput, MCQUncheckedCreateWithoutCourseInput> | MCQCreateWithoutCourseInput[] | MCQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MCQCreateOrConnectWithoutCourseInput | MCQCreateOrConnectWithoutCourseInput[]
    upsert?: MCQUpsertWithWhereUniqueWithoutCourseInput | MCQUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MCQCreateManyCourseInputEnvelope
    set?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    disconnect?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    delete?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    connect?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    update?: MCQUpdateWithWhereUniqueWithoutCourseInput | MCQUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MCQUpdateManyWithWhereWithoutCourseInput | MCQUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MCQScalarWhereInput | MCQScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type TenantCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TenantCourseCreateWithoutCourseInput, TenantCourseUncheckedCreateWithoutCourseInput> | TenantCourseCreateWithoutCourseInput[] | TenantCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutCourseInput | TenantCourseCreateOrConnectWithoutCourseInput[]
    upsert?: TenantCourseUpsertWithWhereUniqueWithoutCourseInput | TenantCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TenantCourseCreateManyCourseInputEnvelope
    set?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    disconnect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    delete?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    update?: TenantCourseUpdateWithWhereUniqueWithoutCourseInput | TenantCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TenantCourseUpdateManyWithWhereWithoutCourseInput | TenantCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TenantCourseScalarWhereInput | TenantCourseScalarWhereInput[]
  }

  export type SlideExplanationUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SlideExplanationCreateWithoutCourseInput, SlideExplanationUncheckedCreateWithoutCourseInput> | SlideExplanationCreateWithoutCourseInput[] | SlideExplanationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SlideExplanationCreateOrConnectWithoutCourseInput | SlideExplanationCreateOrConnectWithoutCourseInput[]
    upsert?: SlideExplanationUpsertWithWhereUniqueWithoutCourseInput | SlideExplanationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SlideExplanationCreateManyCourseInputEnvelope
    set?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    disconnect?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    delete?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    connect?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    update?: SlideExplanationUpdateWithWhereUniqueWithoutCourseInput | SlideExplanationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SlideExplanationUpdateManyWithWhereWithoutCourseInput | SlideExplanationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SlideExplanationScalarWhereInput | SlideExplanationScalarWhereInput[]
  }

  export type MCQUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<MCQCreateWithoutCourseInput, MCQUncheckedCreateWithoutCourseInput> | MCQCreateWithoutCourseInput[] | MCQUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: MCQCreateOrConnectWithoutCourseInput | MCQCreateOrConnectWithoutCourseInput[]
    upsert?: MCQUpsertWithWhereUniqueWithoutCourseInput | MCQUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: MCQCreateManyCourseInputEnvelope
    set?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    disconnect?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    delete?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    connect?: MCQWhereUniqueInput | MCQWhereUniqueInput[]
    update?: MCQUpdateWithWhereUniqueWithoutCourseInput | MCQUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: MCQUpdateManyWithWhereWithoutCourseInput | MCQUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: MCQScalarWhereInput | MCQScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type TenantCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TenantCourseCreateWithoutCourseInput, TenantCourseUncheckedCreateWithoutCourseInput> | TenantCourseCreateWithoutCourseInput[] | TenantCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TenantCourseCreateOrConnectWithoutCourseInput | TenantCourseCreateOrConnectWithoutCourseInput[]
    upsert?: TenantCourseUpsertWithWhereUniqueWithoutCourseInput | TenantCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TenantCourseCreateManyCourseInputEnvelope
    set?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    disconnect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    delete?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    connect?: TenantCourseWhereUniqueInput | TenantCourseWhereUniqueInput[]
    update?: TenantCourseUpdateWithWhereUniqueWithoutCourseInput | TenantCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TenantCourseUpdateManyWithWhereWithoutCourseInput | TenantCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TenantCourseScalarWhereInput | TenantCourseScalarWhereInput[]
  }

  export type SlideExplanationUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SlideExplanationCreateWithoutCourseInput, SlideExplanationUncheckedCreateWithoutCourseInput> | SlideExplanationCreateWithoutCourseInput[] | SlideExplanationUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SlideExplanationCreateOrConnectWithoutCourseInput | SlideExplanationCreateOrConnectWithoutCourseInput[]
    upsert?: SlideExplanationUpsertWithWhereUniqueWithoutCourseInput | SlideExplanationUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SlideExplanationCreateManyCourseInputEnvelope
    set?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    disconnect?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    delete?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    connect?: SlideExplanationWhereUniqueInput | SlideExplanationWhereUniqueInput[]
    update?: SlideExplanationUpdateWithWhereUniqueWithoutCourseInput | SlideExplanationUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SlideExplanationUpdateManyWithWhereWithoutCourseInput | SlideExplanationUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SlideExplanationScalarWhereInput | SlideExplanationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type EnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnrollmentStatus
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type TenantCreateNestedOneWithoutCoursesInput = {
    create?: XOR<TenantCreateWithoutCoursesInput, TenantUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCoursesInput
    connect?: TenantWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutTenantsInput = {
    create?: XOR<CourseCreateWithoutTenantsInput, CourseUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTenantsInput
    connect?: CourseWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<TenantCreateWithoutCoursesInput, TenantUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCoursesInput
    upsert?: TenantUpsertWithoutCoursesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCoursesInput, TenantUpdateWithoutCoursesInput>, TenantUncheckedUpdateWithoutCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutTenantsNestedInput = {
    create?: XOR<CourseCreateWithoutTenantsInput, CourseUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTenantsInput
    upsert?: CourseUpsertWithoutTenantsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTenantsInput, CourseUpdateWithoutTenantsInput>, CourseUncheckedUpdateWithoutTenantsInput>
  }

  export type MCQCreateoptionsInput = {
    set: string[]
  }

  export type CourseCreateNestedOneWithoutMcqsInput = {
    create?: XOR<CourseCreateWithoutMcqsInput, CourseUncheckedCreateWithoutMcqsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMcqsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserMCQAnswerCreateNestedManyWithoutMcqInput = {
    create?: XOR<UserMCQAnswerCreateWithoutMcqInput, UserMCQAnswerUncheckedCreateWithoutMcqInput> | UserMCQAnswerCreateWithoutMcqInput[] | UserMCQAnswerUncheckedCreateWithoutMcqInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutMcqInput | UserMCQAnswerCreateOrConnectWithoutMcqInput[]
    createMany?: UserMCQAnswerCreateManyMcqInputEnvelope
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
  }

  export type UserMCQAnswerUncheckedCreateNestedManyWithoutMcqInput = {
    create?: XOR<UserMCQAnswerCreateWithoutMcqInput, UserMCQAnswerUncheckedCreateWithoutMcqInput> | UserMCQAnswerCreateWithoutMcqInput[] | UserMCQAnswerUncheckedCreateWithoutMcqInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutMcqInput | UserMCQAnswerCreateOrConnectWithoutMcqInput[]
    createMany?: UserMCQAnswerCreateManyMcqInputEnvelope
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
  }

  export type MCQUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CourseUpdateOneRequiredWithoutMcqsNestedInput = {
    create?: XOR<CourseCreateWithoutMcqsInput, CourseUncheckedCreateWithoutMcqsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutMcqsInput
    upsert?: CourseUpsertWithoutMcqsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutMcqsInput, CourseUpdateWithoutMcqsInput>, CourseUncheckedUpdateWithoutMcqsInput>
  }

  export type UserMCQAnswerUpdateManyWithoutMcqNestedInput = {
    create?: XOR<UserMCQAnswerCreateWithoutMcqInput, UserMCQAnswerUncheckedCreateWithoutMcqInput> | UserMCQAnswerCreateWithoutMcqInput[] | UserMCQAnswerUncheckedCreateWithoutMcqInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutMcqInput | UserMCQAnswerCreateOrConnectWithoutMcqInput[]
    upsert?: UserMCQAnswerUpsertWithWhereUniqueWithoutMcqInput | UserMCQAnswerUpsertWithWhereUniqueWithoutMcqInput[]
    createMany?: UserMCQAnswerCreateManyMcqInputEnvelope
    set?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    disconnect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    delete?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    update?: UserMCQAnswerUpdateWithWhereUniqueWithoutMcqInput | UserMCQAnswerUpdateWithWhereUniqueWithoutMcqInput[]
    updateMany?: UserMCQAnswerUpdateManyWithWhereWithoutMcqInput | UserMCQAnswerUpdateManyWithWhereWithoutMcqInput[]
    deleteMany?: UserMCQAnswerScalarWhereInput | UserMCQAnswerScalarWhereInput[]
  }

  export type UserMCQAnswerUncheckedUpdateManyWithoutMcqNestedInput = {
    create?: XOR<UserMCQAnswerCreateWithoutMcqInput, UserMCQAnswerUncheckedCreateWithoutMcqInput> | UserMCQAnswerCreateWithoutMcqInput[] | UserMCQAnswerUncheckedCreateWithoutMcqInput[]
    connectOrCreate?: UserMCQAnswerCreateOrConnectWithoutMcqInput | UserMCQAnswerCreateOrConnectWithoutMcqInput[]
    upsert?: UserMCQAnswerUpsertWithWhereUniqueWithoutMcqInput | UserMCQAnswerUpsertWithWhereUniqueWithoutMcqInput[]
    createMany?: UserMCQAnswerCreateManyMcqInputEnvelope
    set?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    disconnect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    delete?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    connect?: UserMCQAnswerWhereUniqueInput | UserMCQAnswerWhereUniqueInput[]
    update?: UserMCQAnswerUpdateWithWhereUniqueWithoutMcqInput | UserMCQAnswerUpdateWithWhereUniqueWithoutMcqInput[]
    updateMany?: UserMCQAnswerUpdateManyWithWhereWithoutMcqInput | UserMCQAnswerUpdateManyWithWhereWithoutMcqInput[]
    deleteMany?: UserMCQAnswerScalarWhereInput | UserMCQAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMcqAnswersInput = {
    create?: XOR<UserCreateWithoutMcqAnswersInput, UserUncheckedCreateWithoutMcqAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMcqAnswersInput
    connect?: UserWhereUniqueInput
  }

  export type MCQCreateNestedOneWithoutUserAnswersInput = {
    create?: XOR<MCQCreateWithoutUserAnswersInput, MCQUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: MCQCreateOrConnectWithoutUserAnswersInput
    connect?: MCQWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMcqAnswersNestedInput = {
    create?: XOR<UserCreateWithoutMcqAnswersInput, UserUncheckedCreateWithoutMcqAnswersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMcqAnswersInput
    upsert?: UserUpsertWithoutMcqAnswersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMcqAnswersInput, UserUpdateWithoutMcqAnswersInput>, UserUncheckedUpdateWithoutMcqAnswersInput>
  }

  export type MCQUpdateOneRequiredWithoutUserAnswersNestedInput = {
    create?: XOR<MCQCreateWithoutUserAnswersInput, MCQUncheckedCreateWithoutUserAnswersInput>
    connectOrCreate?: MCQCreateOrConnectWithoutUserAnswersInput
    upsert?: MCQUpsertWithoutUserAnswersInput
    connect?: MCQWhereUniqueInput
    update?: XOR<XOR<MCQUpdateToOneWithWhereWithoutUserAnswersInput, MCQUpdateWithoutUserAnswersInput>, MCQUncheckedUpdateWithoutUserAnswersInput>
  }

  export type CourseCreateNestedOneWithoutSlideExplanationsInput = {
    create?: XOR<CourseCreateWithoutSlideExplanationsInput, CourseUncheckedCreateWithoutSlideExplanationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSlideExplanationsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutSlideExplanationsNestedInput = {
    create?: XOR<CourseCreateWithoutSlideExplanationsInput, CourseUncheckedCreateWithoutSlideExplanationsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSlideExplanationsInput
    upsert?: CourseUpsertWithoutSlideExplanationsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSlideExplanationsInput, CourseUpdateWithoutSlideExplanationsInput>, CourseUncheckedUpdateWithoutSlideExplanationsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedEnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TenantDetailsCreateWithoutTenantInput = {
    id?: string
    presidingOfficerEmail?: string | null
    poshCommitteeEmail?: string | null
    hrContactName?: string | null
    hrContactEmail?: string | null
    hrContactPhone?: string | null
    ceoName?: string | null
    ceoEmail?: string | null
    ceoContact?: string | null
    ctoName?: string | null
    ctoEmail?: string | null
    ctoContact?: string | null
    ccoEmail?: string | null
    ccoContact?: string | null
    croName?: string | null
    croEmail?: string | null
    croContact?: string | null
    legalOfficerName?: string | null
    legalOfficerEmail?: string | null
    legalOfficerContact?: string | null
  }

  export type TenantDetailsUncheckedCreateWithoutTenantInput = {
    id?: string
    presidingOfficerEmail?: string | null
    poshCommitteeEmail?: string | null
    hrContactName?: string | null
    hrContactEmail?: string | null
    hrContactPhone?: string | null
    ceoName?: string | null
    ceoEmail?: string | null
    ceoContact?: string | null
    ctoName?: string | null
    ctoEmail?: string | null
    ctoContact?: string | null
    ccoEmail?: string | null
    ccoContact?: string | null
    croName?: string | null
    croEmail?: string | null
    croContact?: string | null
    legalOfficerName?: string | null
    legalOfficerEmail?: string | null
    legalOfficerContact?: string | null
  }

  export type TenantDetailsCreateOrConnectWithoutTenantInput = {
    where: TenantDetailsWhereUniqueInput
    create: XOR<TenantDetailsCreateWithoutTenantInput, TenantDetailsUncheckedCreateWithoutTenantInput>
  }

  export type TenantCourseCreateWithoutTenantInput = {
    id?: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
    course: CourseCreateNestedOneWithoutTenantsInput
  }

  export type TenantCourseUncheckedCreateWithoutTenantInput = {
    id?: string
    courseId: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type TenantCourseCreateOrConnectWithoutTenantInput = {
    where: TenantCourseWhereUniqueInput
    create: XOR<TenantCourseCreateWithoutTenantInput, TenantCourseUncheckedCreateWithoutTenantInput>
  }

  export type TenantCourseCreateManyTenantInputEnvelope = {
    data: TenantCourseCreateManyTenantInput | TenantCourseCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    tenantId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    userRoles?: EnumUserRoleNullableListFilter<"User">
  }

  export type TenantDetailsUpsertWithoutTenantInput = {
    update: XOR<TenantDetailsUpdateWithoutTenantInput, TenantDetailsUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantDetailsCreateWithoutTenantInput, TenantDetailsUncheckedCreateWithoutTenantInput>
    where?: TenantDetailsWhereInput
  }

  export type TenantDetailsUpdateToOneWithWhereWithoutTenantInput = {
    where?: TenantDetailsWhereInput
    data: XOR<TenantDetailsUpdateWithoutTenantInput, TenantDetailsUncheckedUpdateWithoutTenantInput>
  }

  export type TenantDetailsUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    presidingOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    poshCommitteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactName?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ceoName?: NullableStringFieldUpdateOperationsInput | string | null
    ceoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ceoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ctoName?: NullableStringFieldUpdateOperationsInput | string | null
    ctoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ctoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ccoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ccoContact?: NullableStringFieldUpdateOperationsInput | string | null
    croName?: NullableStringFieldUpdateOperationsInput | string | null
    croEmail?: NullableStringFieldUpdateOperationsInput | string | null
    croContact?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerName?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantDetailsUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    presidingOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    poshCommitteeEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactName?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    hrContactPhone?: NullableStringFieldUpdateOperationsInput | string | null
    ceoName?: NullableStringFieldUpdateOperationsInput | string | null
    ceoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ceoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ctoName?: NullableStringFieldUpdateOperationsInput | string | null
    ctoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ctoContact?: NullableStringFieldUpdateOperationsInput | string | null
    ccoEmail?: NullableStringFieldUpdateOperationsInput | string | null
    ccoContact?: NullableStringFieldUpdateOperationsInput | string | null
    croName?: NullableStringFieldUpdateOperationsInput | string | null
    croEmail?: NullableStringFieldUpdateOperationsInput | string | null
    croContact?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerName?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    legalOfficerContact?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantCourseUpsertWithWhereUniqueWithoutTenantInput = {
    where: TenantCourseWhereUniqueInput
    update: XOR<TenantCourseUpdateWithoutTenantInput, TenantCourseUncheckedUpdateWithoutTenantInput>
    create: XOR<TenantCourseCreateWithoutTenantInput, TenantCourseUncheckedCreateWithoutTenantInput>
  }

  export type TenantCourseUpdateWithWhereUniqueWithoutTenantInput = {
    where: TenantCourseWhereUniqueInput
    data: XOR<TenantCourseUpdateWithoutTenantInput, TenantCourseUncheckedUpdateWithoutTenantInput>
  }

  export type TenantCourseUpdateManyWithWhereWithoutTenantInput = {
    where: TenantCourseScalarWhereInput
    data: XOR<TenantCourseUpdateManyMutationInput, TenantCourseUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenantCourseScalarWhereInput = {
    AND?: TenantCourseScalarWhereInput | TenantCourseScalarWhereInput[]
    OR?: TenantCourseScalarWhereInput[]
    NOT?: TenantCourseScalarWhereInput | TenantCourseScalarWhereInput[]
    id?: StringFilter<"TenantCourse"> | string
    tenantId?: StringFilter<"TenantCourse"> | string
    courseId?: StringFilter<"TenantCourse"> | string
    explanations?: JsonNullableFilter<"TenantCourse">
    assignedAt?: DateTimeFilter<"TenantCourse"> | Date | string
  }

  export type TenantCreateWithoutDetailsInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    courses?: TenantCourseCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutDetailsInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    courses?: TenantCourseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutDetailsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutDetailsInput, TenantUncheckedCreateWithoutDetailsInput>
  }

  export type TenantUpsertWithoutDetailsInput = {
    update: XOR<TenantUpdateWithoutDetailsInput, TenantUncheckedUpdateWithoutDetailsInput>
    create: XOR<TenantCreateWithoutDetailsInput, TenantUncheckedCreateWithoutDetailsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutDetailsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutDetailsInput, TenantUncheckedUpdateWithoutDetailsInput>
  }

  export type TenantUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    courses?: TenantCourseUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    courses?: TenantCourseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    details?: TenantDetailsCreateNestedOneWithoutTenantInput
    courses?: TenantCourseCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    details?: TenantDetailsUncheckedCreateNestedOneWithoutTenantInput
    courses?: TenantCourseUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type EnrollmentCreateWithoutUserInput = {
    id?: string
    progress?: number
    status?: $Enums.EnrollmentStatus
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    progress?: number
    status?: $Enums.EnrollmentStatus
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutUserInput = {
    id?: string
    courseId: string
    certificateUrl: string
    issuedAt?: Date | string
  }

  export type CertificateUncheckedCreateWithoutUserInput = {
    id?: string
    courseId: string
    certificateUrl: string
    issuedAt?: Date | string
  }

  export type CertificateCreateOrConnectWithoutUserInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateCreateManyUserInputEnvelope = {
    data: CertificateCreateManyUserInput | CertificateCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMCQAnswerCreateWithoutUserInput = {
    id?: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
    mcq: MCQCreateNestedOneWithoutUserAnswersInput
  }

  export type UserMCQAnswerUncheckedCreateWithoutUserInput = {
    id?: string
    mcqId: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserMCQAnswerCreateOrConnectWithoutUserInput = {
    where: UserMCQAnswerWhereUniqueInput
    create: XOR<UserMCQAnswerCreateWithoutUserInput, UserMCQAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserMCQAnswerCreateManyUserInputEnvelope = {
    data: UserMCQAnswerCreateManyUserInput | UserMCQAnswerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: TenantDetailsUpdateOneWithoutTenantNestedInput
    courses?: TenantCourseUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: TenantDetailsUncheckedUpdateOneWithoutTenantNestedInput
    courses?: TenantCourseUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    progress?: IntFilter<"Enrollment"> | number
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
  }

  export type CertificateUpsertWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
    create: XOR<CertificateCreateWithoutUserInput, CertificateUncheckedCreateWithoutUserInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutUserInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutUserInput, CertificateUncheckedUpdateWithoutUserInput>
  }

  export type CertificateUpdateManyWithWhereWithoutUserInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutUserInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    userId?: StringFilter<"Certificate"> | string
    courseId?: StringFilter<"Certificate"> | string
    certificateUrl?: StringFilter<"Certificate"> | string
    issuedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type UserMCQAnswerUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMCQAnswerWhereUniqueInput
    update: XOR<UserMCQAnswerUpdateWithoutUserInput, UserMCQAnswerUncheckedUpdateWithoutUserInput>
    create: XOR<UserMCQAnswerCreateWithoutUserInput, UserMCQAnswerUncheckedCreateWithoutUserInput>
  }

  export type UserMCQAnswerUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMCQAnswerWhereUniqueInput
    data: XOR<UserMCQAnswerUpdateWithoutUserInput, UserMCQAnswerUncheckedUpdateWithoutUserInput>
  }

  export type UserMCQAnswerUpdateManyWithWhereWithoutUserInput = {
    where: UserMCQAnswerScalarWhereInput
    data: XOR<UserMCQAnswerUpdateManyMutationInput, UserMCQAnswerUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMCQAnswerScalarWhereInput = {
    AND?: UserMCQAnswerScalarWhereInput | UserMCQAnswerScalarWhereInput[]
    OR?: UserMCQAnswerScalarWhereInput[]
    NOT?: UserMCQAnswerScalarWhereInput | UserMCQAnswerScalarWhereInput[]
    id?: StringFilter<"UserMCQAnswer"> | string
    userId?: StringFilter<"UserMCQAnswer"> | string
    mcqId?: StringFilter<"UserMCQAnswer"> | string
    answer?: StringFilter<"UserMCQAnswer"> | string
    isCorrect?: BoolFilter<"UserMCQAnswer"> | boolean
    createdAt?: DateTimeFilter<"UserMCQAnswer"> | Date | string
  }

  export type MCQCreateWithoutCourseInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userAnswers?: UserMCQAnswerCreateNestedManyWithoutMcqInput
  }

  export type MCQUncheckedCreateWithoutCourseInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userAnswers?: UserMCQAnswerUncheckedCreateNestedManyWithoutMcqInput
  }

  export type MCQCreateOrConnectWithoutCourseInput = {
    where: MCQWhereUniqueInput
    create: XOR<MCQCreateWithoutCourseInput, MCQUncheckedCreateWithoutCourseInput>
  }

  export type MCQCreateManyCourseInputEnvelope = {
    data: MCQCreateManyCourseInput | MCQCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutCourseInput = {
    id?: string
    progress?: number
    status?: $Enums.EnrollmentStatus
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: string
    userId: string
    progress?: number
    status?: $Enums.EnrollmentStatus
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TenantCourseCreateWithoutCourseInput = {
    id?: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCoursesInput
  }

  export type TenantCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    tenantId: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type TenantCourseCreateOrConnectWithoutCourseInput = {
    where: TenantCourseWhereUniqueInput
    create: XOR<TenantCourseCreateWithoutCourseInput, TenantCourseUncheckedCreateWithoutCourseInput>
  }

  export type TenantCourseCreateManyCourseInputEnvelope = {
    data: TenantCourseCreateManyCourseInput | TenantCourseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type SlideExplanationCreateWithoutCourseInput = {
    id?: string
    slideNumber: number
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlideExplanationUncheckedCreateWithoutCourseInput = {
    id?: string
    slideNumber: number
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlideExplanationCreateOrConnectWithoutCourseInput = {
    where: SlideExplanationWhereUniqueInput
    create: XOR<SlideExplanationCreateWithoutCourseInput, SlideExplanationUncheckedCreateWithoutCourseInput>
  }

  export type SlideExplanationCreateManyCourseInputEnvelope = {
    data: SlideExplanationCreateManyCourseInput | SlideExplanationCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type MCQUpsertWithWhereUniqueWithoutCourseInput = {
    where: MCQWhereUniqueInput
    update: XOR<MCQUpdateWithoutCourseInput, MCQUncheckedUpdateWithoutCourseInput>
    create: XOR<MCQCreateWithoutCourseInput, MCQUncheckedCreateWithoutCourseInput>
  }

  export type MCQUpdateWithWhereUniqueWithoutCourseInput = {
    where: MCQWhereUniqueInput
    data: XOR<MCQUpdateWithoutCourseInput, MCQUncheckedUpdateWithoutCourseInput>
  }

  export type MCQUpdateManyWithWhereWithoutCourseInput = {
    where: MCQScalarWhereInput
    data: XOR<MCQUpdateManyMutationInput, MCQUncheckedUpdateManyWithoutCourseInput>
  }

  export type MCQScalarWhereInput = {
    AND?: MCQScalarWhereInput | MCQScalarWhereInput[]
    OR?: MCQScalarWhereInput[]
    NOT?: MCQScalarWhereInput | MCQScalarWhereInput[]
    id?: StringFilter<"MCQ"> | string
    question?: StringFilter<"MCQ"> | string
    options?: StringNullableListFilter<"MCQ">
    correctAnswer?: StringFilter<"MCQ"> | string
    explanation?: StringNullableFilter<"MCQ"> | string | null
    courseId?: StringFilter<"MCQ"> | string
    createdAt?: DateTimeFilter<"MCQ"> | Date | string
    updatedAt?: DateTimeFilter<"MCQ"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type TenantCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: TenantCourseWhereUniqueInput
    update: XOR<TenantCourseUpdateWithoutCourseInput, TenantCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<TenantCourseCreateWithoutCourseInput, TenantCourseUncheckedCreateWithoutCourseInput>
  }

  export type TenantCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: TenantCourseWhereUniqueInput
    data: XOR<TenantCourseUpdateWithoutCourseInput, TenantCourseUncheckedUpdateWithoutCourseInput>
  }

  export type TenantCourseUpdateManyWithWhereWithoutCourseInput = {
    where: TenantCourseScalarWhereInput
    data: XOR<TenantCourseUpdateManyMutationInput, TenantCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type SlideExplanationUpsertWithWhereUniqueWithoutCourseInput = {
    where: SlideExplanationWhereUniqueInput
    update: XOR<SlideExplanationUpdateWithoutCourseInput, SlideExplanationUncheckedUpdateWithoutCourseInput>
    create: XOR<SlideExplanationCreateWithoutCourseInput, SlideExplanationUncheckedCreateWithoutCourseInput>
  }

  export type SlideExplanationUpdateWithWhereUniqueWithoutCourseInput = {
    where: SlideExplanationWhereUniqueInput
    data: XOR<SlideExplanationUpdateWithoutCourseInput, SlideExplanationUncheckedUpdateWithoutCourseInput>
  }

  export type SlideExplanationUpdateManyWithWhereWithoutCourseInput = {
    where: SlideExplanationScalarWhereInput
    data: XOR<SlideExplanationUpdateManyMutationInput, SlideExplanationUncheckedUpdateManyWithoutCourseInput>
  }

  export type SlideExplanationScalarWhereInput = {
    AND?: SlideExplanationScalarWhereInput | SlideExplanationScalarWhereInput[]
    OR?: SlideExplanationScalarWhereInput[]
    NOT?: SlideExplanationScalarWhereInput | SlideExplanationScalarWhereInput[]
    id?: StringFilter<"SlideExplanation"> | string
    courseId?: StringFilter<"SlideExplanation"> | string
    slideNumber?: IntFilter<"SlideExplanation"> | number
    explanation?: StringFilter<"SlideExplanation"> | string
    createdAt?: DateTimeFilter<"SlideExplanation"> | Date | string
    updatedAt?: DateTimeFilter<"SlideExplanation"> | Date | string
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantCreateNestedOneWithoutUsersInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    tenantId?: string | null
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQUncheckedCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseUncheckedCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantUpdateOneWithoutUsersNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUncheckedUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUncheckedUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutCertificatesInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantCreateNestedOneWithoutUsersInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string
    tenantId?: string | null
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    mcqAnswers?: UserMCQAnswerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantUpdateOneWithoutUsersNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TenantCreateWithoutCoursesInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    details?: TenantDetailsCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCoursesInput = {
    id?: string
    name: string
    domain: string
    adminEmail: string
    adminPassword: string
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    details?: TenantDetailsUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCoursesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCoursesInput, TenantUncheckedCreateWithoutCoursesInput>
  }

  export type CourseCreateWithoutTenantsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTenantsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTenantsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTenantsInput, CourseUncheckedCreateWithoutTenantsInput>
  }

  export type TenantUpsertWithoutCoursesInput = {
    update: XOR<TenantUpdateWithoutCoursesInput, TenantUncheckedUpdateWithoutCoursesInput>
    create: XOR<TenantCreateWithoutCoursesInput, TenantUncheckedCreateWithoutCoursesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCoursesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCoursesInput, TenantUncheckedUpdateWithoutCoursesInput>
  }

  export type TenantUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    details?: TenantDetailsUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    adminEmail?: StringFieldUpdateOperationsInput | string
    adminPassword?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    details?: TenantDetailsUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type CourseUpsertWithoutTenantsInput = {
    update: XOR<CourseUpdateWithoutTenantsInput, CourseUncheckedUpdateWithoutTenantsInput>
    create: XOR<CourseCreateWithoutTenantsInput, CourseUncheckedCreateWithoutTenantsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTenantsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTenantsInput, CourseUncheckedUpdateWithoutTenantsInput>
  }

  export type CourseUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTenantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutMcqsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutMcqsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseUncheckedCreateNestedManyWithoutCourseInput
    slideExplanations?: SlideExplanationUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutMcqsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutMcqsInput, CourseUncheckedCreateWithoutMcqsInput>
  }

  export type UserMCQAnswerCreateWithoutMcqInput = {
    id?: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMcqAnswersInput
  }

  export type UserMCQAnswerUncheckedCreateWithoutMcqInput = {
    id?: string
    userId: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserMCQAnswerCreateOrConnectWithoutMcqInput = {
    where: UserMCQAnswerWhereUniqueInput
    create: XOR<UserMCQAnswerCreateWithoutMcqInput, UserMCQAnswerUncheckedCreateWithoutMcqInput>
  }

  export type UserMCQAnswerCreateManyMcqInputEnvelope = {
    data: UserMCQAnswerCreateManyMcqInput | UserMCQAnswerCreateManyMcqInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutMcqsInput = {
    update: XOR<CourseUpdateWithoutMcqsInput, CourseUncheckedUpdateWithoutMcqsInput>
    create: XOR<CourseCreateWithoutMcqsInput, CourseUncheckedCreateWithoutMcqsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutMcqsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutMcqsInput, CourseUncheckedUpdateWithoutMcqsInput>
  }

  export type CourseUpdateWithoutMcqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutMcqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUncheckedUpdateManyWithoutCourseNestedInput
    slideExplanations?: SlideExplanationUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserMCQAnswerUpsertWithWhereUniqueWithoutMcqInput = {
    where: UserMCQAnswerWhereUniqueInput
    update: XOR<UserMCQAnswerUpdateWithoutMcqInput, UserMCQAnswerUncheckedUpdateWithoutMcqInput>
    create: XOR<UserMCQAnswerCreateWithoutMcqInput, UserMCQAnswerUncheckedCreateWithoutMcqInput>
  }

  export type UserMCQAnswerUpdateWithWhereUniqueWithoutMcqInput = {
    where: UserMCQAnswerWhereUniqueInput
    data: XOR<UserMCQAnswerUpdateWithoutMcqInput, UserMCQAnswerUncheckedUpdateWithoutMcqInput>
  }

  export type UserMCQAnswerUpdateManyWithWhereWithoutMcqInput = {
    where: UserMCQAnswerScalarWhereInput
    data: XOR<UserMCQAnswerUpdateManyMutationInput, UserMCQAnswerUncheckedUpdateManyWithoutMcqInput>
  }

  export type UserCreateWithoutMcqAnswersInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantCreateNestedOneWithoutUsersInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMcqAnswersInput = {
    id?: string
    tenantId?: string | null
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMcqAnswersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMcqAnswersInput, UserUncheckedCreateWithoutMcqAnswersInput>
  }

  export type MCQCreateWithoutUserAnswersInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutMcqsInput
  }

  export type MCQUncheckedCreateWithoutUserAnswersInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MCQCreateOrConnectWithoutUserAnswersInput = {
    where: MCQWhereUniqueInput
    create: XOR<MCQCreateWithoutUserAnswersInput, MCQUncheckedCreateWithoutUserAnswersInput>
  }

  export type UserUpsertWithoutMcqAnswersInput = {
    update: XOR<UserUpdateWithoutMcqAnswersInput, UserUncheckedUpdateWithoutMcqAnswersInput>
    create: XOR<UserCreateWithoutMcqAnswersInput, UserUncheckedCreateWithoutMcqAnswersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMcqAnswersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMcqAnswersInput, UserUncheckedUpdateWithoutMcqAnswersInput>
  }

  export type UserUpdateWithoutMcqAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    tenant?: TenantUpdateOneWithoutUsersNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMcqAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MCQUpsertWithoutUserAnswersInput = {
    update: XOR<MCQUpdateWithoutUserAnswersInput, MCQUncheckedUpdateWithoutUserAnswersInput>
    create: XOR<MCQCreateWithoutUserAnswersInput, MCQUncheckedCreateWithoutUserAnswersInput>
    where?: MCQWhereInput
  }

  export type MCQUpdateToOneWithWhereWithoutUserAnswersInput = {
    where?: MCQWhereInput
    data: XOR<MCQUpdateWithoutUserAnswersInput, MCQUncheckedUpdateWithoutUserAnswersInput>
  }

  export type MCQUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutMcqsNestedInput
  }

  export type MCQUncheckedUpdateWithoutUserAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateWithoutSlideExplanationsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSlideExplanationsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    tags: string
    learningObjectives: string
    targetAudience: string
    materialUrl: string
    videoUrl?: string | null
    slides?: CourseCreateslidesInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    mcqs?: MCQUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
    tenants?: TenantCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSlideExplanationsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSlideExplanationsInput, CourseUncheckedCreateWithoutSlideExplanationsInput>
  }

  export type CourseUpsertWithoutSlideExplanationsInput = {
    update: XOR<CourseUpdateWithoutSlideExplanationsInput, CourseUncheckedUpdateWithoutSlideExplanationsInput>
    create: XOR<CourseCreateWithoutSlideExplanationsInput, CourseUncheckedCreateWithoutSlideExplanationsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSlideExplanationsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSlideExplanationsInput, CourseUncheckedUpdateWithoutSlideExplanationsInput>
  }

  export type CourseUpdateWithoutSlideExplanationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSlideExplanationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    tags?: StringFieldUpdateOperationsInput | string
    learningObjectives?: StringFieldUpdateOperationsInput | string
    targetAudience?: StringFieldUpdateOperationsInput | string
    materialUrl?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    slides?: CourseUpdateslidesInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcqs?: MCQUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
    tenants?: TenantCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    name: string
    password?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    userRoles?: UserCreateuserRolesInput | $Enums.UserRole[]
  }

  export type TenantCourseCreateManyTenantInput = {
    id?: string
    courseId: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutUserNestedInput
    mcqAnswers?: UserMCQAnswerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: UserUpdateuserRolesInput | $Enums.UserRole[]
  }

  export type TenantCourseUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutTenantsNestedInput
  }

  export type TenantCourseUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCourseUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyUserInput = {
    id?: string
    courseId: string
    progress?: number
    status?: $Enums.EnrollmentStatus
  }

  export type CertificateCreateManyUserInput = {
    id?: string
    courseId: string
    certificateUrl: string
    issuedAt?: Date | string
  }

  export type UserMCQAnswerCreateManyUserInput = {
    id?: string
    mcqId: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type CertificateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    certificateUrl?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMCQAnswerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mcq?: MCQUpdateOneRequiredWithoutUserAnswersNestedInput
  }

  export type UserMCQAnswerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mcqId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMCQAnswerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mcqId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MCQCreateManyCourseInput = {
    id?: string
    question: string
    options?: MCQCreateoptionsInput | string[]
    correctAnswer: string
    explanation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: string
    userId: string
    progress?: number
    status?: $Enums.EnrollmentStatus
  }

  export type TenantCourseCreateManyCourseInput = {
    id?: string
    tenantId: string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: Date | string
  }

  export type SlideExplanationCreateManyCourseInput = {
    id?: string
    slideNumber: number
    explanation: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MCQUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAnswers?: UserMCQAnswerUpdateManyWithoutMcqNestedInput
  }

  export type MCQUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userAnswers?: UserMCQAnswerUncheckedUpdateManyWithoutMcqNestedInput
  }

  export type MCQUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: MCQUpdateoptionsInput | string[]
    correctAnswer?: StringFieldUpdateOperationsInput | string
    explanation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    progress?: IntFieldUpdateOperationsInput | number
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
  }

  export type TenantCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type TenantCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    explanations?: NullableJsonNullValueInput | InputJsonValue
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideExplanationUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    slideNumber?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideExplanationUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    slideNumber?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlideExplanationUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    slideNumber?: IntFieldUpdateOperationsInput | number
    explanation?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMCQAnswerCreateManyMcqInput = {
    id?: string
    userId: string
    answer: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserMCQAnswerUpdateWithoutMcqInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMcqAnswersNestedInput
  }

  export type UserMCQAnswerUncheckedUpdateWithoutMcqInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMCQAnswerUncheckedUpdateManyWithoutMcqInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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