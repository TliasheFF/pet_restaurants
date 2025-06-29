/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum ChangeQuantityEnum {
  Value0 = 0,
  Value1 = 1,
}

export interface Role {
  /**
   * Unique Id
   * @example "1"
   */
  id: number;
  /**
   * Role Name
   * @example "ADMIN"
   */
  value: string;
  /**
   * Role Description
   * @example "Administrator"
   */
  description: string;
}

export interface UserInfoResponseDto {
  /** @example 1 */
  id: number;
  /** @example "example@example.com" */
  email: string;
  /** @example "Ivan" */
  firstName: string;
  /** @example "Ivanov" */
  lastName: string;
  /** @example "Ivanovich" */
  patronymicName: string;
  /** @example true */
  enabled: boolean;
  /** @example "+79173080937" */
  phone: string;
  roles: Role[];
}

export interface LoginUserDto {
  /**
   * Unique email
   * @example "test@mail.ru"
   */
  email: string;
  /**
   * User Password
   * @example "password"
   */
  password: string;
}

export interface CreateUserDto {
  /**
   * Unique email
   * @example "test@mail.ru"
   */
  email: string;
  /**
   * Unique phone
   * @example "79173080937"
   */
  phone: string;
  /**
   * First name
   * @example "Ivan"
   */
  firstName: string;
  /**
   * last name
   * @example "Solontsov"
   */
  lastName: string;
  /**
   * User Password
   * @example "password"
   */
  password: string;
}

export interface LoginByPhoneDto {
  /** @example "79173080937" */
  phone: string;
  /** @example "1234" */
  code: string;
}

export interface RefreshTokenDto {
  /** @example "refresh token..." */
  refresh_token: string;
}

export interface CreateRestaurantDto {
  /** @example "McDonald's" */
  name: string;
  /** @example "Lorem ipsum" */
  description?: string | null;
  /** @format binary */
  logo?: File | null;
  /** @example "31 Brooklyn Street" */
  address?: string | null;
  /** @example "+79173080937" */
  phone?: string | null;
  /** @example "10 - 18" */
  workHours?: string | null;
  /**
   * Regex: (/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
   * @example "macdonalds"
   */
  seoUrl: string;
  /** @example true */
  enabled?: boolean;
}

export interface Restaurant {
  /**
   * restaurant id
   * @example "1"
   */
  id: number;
  /**
   * Seo Url that will be shown in browser address input
   * @example "mcdonalds"
   */
  seoUrl: string;
  /**
   * Restaurant Name
   * @example "McDonald's"
   */
  name: string;
  /**
   * Restaurant Description
   * @example "Lorem ipsum..."
   */
  description: string;
  /**
   * Restaurant logo
   * @example "https://..."
   */
  logo: string;
  /**
   * Address
   * @example "ул Кавказская 15а"
   */
  address: string;
  /**
   * Phone
   * @example "79173080937"
   */
  phone: string;
  /**
   * Work Hours
   * @example "10-18"
   */
  workHours: string;
  /**
   * Is enabled or not
   * @example true
   */
  enabled: boolean;
  /**
   * Is deleted or not
   * @example false
   */
  isDeleted: boolean;
  /**
   * owner id
   * @example "1"
   */
  ownerId: number;
  /**
   * Группа к которой может принадлежать ресторан
   * @example 1
   */
  groupId: number;
}

export interface RestaurantPaginationResultDto {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  items: Restaurant[];
}

export interface CartItem {
  /** @example 1 */
  id: number;
  /** @example "http://..." */
  image: string;
  /** @example "Бургер" */
  title: string;
  /** @example "Чехов Буфет" */
  restaurantName: string;
  /** @example 300 */
  cookingTime: number;
  /** @example 150 */
  calories: number;
  /** @example 300 */
  price: number;
  /** @example 1 */
  quantity: number;
}

export interface GetCartDto {
  /** @example 1 */
  id: number;
  products: CartItem[];
}

export interface ChangeQuantityDto {
  /** @example 1 */
  restaurantId: object;
  /** @example 1 */
  productId: object;
  action: ChangeQuantityEnum;
}

export interface ReferralCode {
  /** @example 1 */
  id: number;
  /** @example "string" */
  code: string;
  /** @example 24 */
  expiresIn: number;
  /** @example 1 */
  restaurantId: number;
  /** @example false */
  expired: boolean;
}

export interface GetWaiterDto {
  /** @example 1 */
  id: number;
  /** @example "string" */
  firstName: string;
  /** @example "string" */
  lastName: string;
  /** @example "email@email.ru" */
  email: string;
  /** @example false */
  enabled: boolean;
  /** @example "string" */
  phone: string;
}

export interface WaiterPaginationResult {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  items: GetWaiterDto[];
}

export interface GenerateCodeDto {
  /** @example "79173080937" */
  phone: string;
}

export interface CheckCodeDto {
  /** @example "1234" */
  code: string;
  /** @example "79173080937" */
  phone: string;
}

export interface CreateCategoryDto {
  /**
   * Products name
   * @example "Бургеры"
   */
  name: string;
  /**
   * Long description
   * @example "Description"
   */
  description?: string;
  /**
   * Short description
   * @example "string"
   */
  shortDescription?: string;
  /**
   * Sort order in category list
   * @example 0
   */
  sortOrder?: number;
  /**
   * Is will be shown in menu
   * @example false
   */
  isInMenu?: boolean;
  /**
   * Parent category id
   * @example 0
   */
  parentCategoryId?: string;
  /** @format binary */
  icon?: File | null;
  /** @format binary */
  image?: File | null;
}

export type STRING = object;

export type INTEGER = object;

export type BOOLEAN = object;

export interface GetCategoryDto {
  /** @example "Бургеры" */
  categoryName: STRING;
  /** @example 1 */
  categoryId: INTEGER;
  /** @example "https://..." */
  icon: STRING;
  /** @example true */
  isInMenu: BOOLEAN;
  /** @example "string" */
  shortDescription: STRING;
  children: GetCategoryDto[];
}

export interface Category {
  /**
   * Products name
   * @example "Бургеры"
   */
  name: string;
  /**
   * Products Description
   * @example "Lorem ipsum..."
   */
  description: string;
  /**
   * Products Description
   * @example "Lorem..."
   */
  shortDescription: string;
  /**
   * Sort Order
   * @example 0
   */
  sortOrder: number;
  /**
   * Is this category shown in menu or not
   * @example true
   */
  isInMenu: boolean;
  /**
   * Is this category has been deleted or not
   * @example false
   */
  deleted: boolean;
  /**
   * Products Icon URL
   * @example "https://..."
   */
  icon: string;
  /**
   * Products Image URL
   * @example "https://..."
   */
  image: string;
  /**
   * Restaurant Id
   * @example "1"
   */
  restaurantId: number;
}

export interface UpdateCategoryDto {
  /**
   * Products name
   * @example "Бургеры"
   */
  name?: string;
  /**
   * Long description
   * @example "Description"
   */
  description?: string;
  /**
   * Short description
   * @example "string"
   */
  shortDescription?: string;
  /**
   * Sort order in category list
   * @example 0
   */
  sortOrder?: number;
  /**
   * Is will be shown in menu
   * @example false
   */
  isInMenu?: boolean;
  /**
   * Parent category id
   * @example 0
   */
  parentCategoryId?: string;
  /** @format binary */
  icon?: File | null;
  /** @format binary */
  image?: File | null;
}

export interface CreateProductDto {
  /**
   * Product name
   * @example "Cheeseburger"
   */
  name: string;
  /** @format binary */
  image?: File | null;
  /**
   * Some info about the project
   * @example "Some info about the product"
   */
  description?: string;
  /**
   * Some info about the project
   * @example "Some info about the product"
   */
  shortDescription?: string;
  /**
   * Calories
   * @example 150
   */
  calories?: number;
  /**
   * Weight
   * @example 150
   */
  weight?: number;
  /**
   * Price of product
   * @example 100
   */
  price: number;
  /**
   * Amount in stock
   * @example 1
   */
  amount?: number;
  /**
   * Is product in stock or not
   * @example false
   */
  inStock?: boolean;
  /**
   * Is product in show in menu or not
   * @example true
   */
  isShowInMenu?: boolean;
  /**
   * main parent category id
   * @example 1
   */
  parentCategoryId?: number;
  /**
   * Products id list
   * @example 1
   */
  attachedCategories?: number[];
  /**
   * Cooking time in seconds
   * @example 1
   */
  cookingTime?: number;
}

export interface Product {
  /**
   * restaurant id
   * @example "1"
   */
  id: number;
  /**
   * Product name
   * @example "Cheeseburger"
   */
  name: string;
  /**
   * Product image
   * @example "https://..."
   */
  image: string;
  /**
   * Some info about the product
   * @example "Some info about the product"
   */
  description: string;
  /**
   * Some info about the product
   * @example "Some info about the product"
   */
  shortDescription: string;
  /**
   * Calories
   * @example 150
   */
  calories: number;
  /**
   * Weight
   * @example 150
   */
  weight: number;
  /**
   * Price of product
   * @example 100
   */
  price: number;
  /**
   * Amount in stock
   * @example 1
   */
  amount: number;
  /**
   * Is product in stock or not
   * @example false
   */
  inStock: boolean;
  /**
   * Is product in show in menu or not
   * @example true
   */
  isShowInMenu: boolean;
  /**
   * main parent category id
   * @example 1
   */
  parentCategoryId: number;
  /**
   * Cooking time in seconds
   * @example 1
   */
  cookingTime: number;
  /**
   * Is deleted record or not
   * @example false
   */
  isDeleted: boolean;
}

export interface ProductPaginationResult {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  items: Product[];
}

export interface CreateOrderDto {
  /** @example "ivan" */
  name: string;
  /** @example "+79173080937" */
  phone: string;
  /** @example "test@mail.ru" */
  email: string;
  /** @example "Some wishes about the order" */
  comment?: string | null;
  /** @example 1 */
  tableNumber: number;
  /** @example 1 */
  cartId: number;
}

export interface CreateOrderResponse {
  /**
   * order id
   * @example 1
   */
  id: number;
}

export interface OrderProductDto {
  /** @example 1 */
  id: number;
  /** @example "string" */
  image: string;
  /** @example "string" */
  title: string;
  /** @example 100 */
  price: number;
  /** @example 1 */
  quantity: number;
  /** @example 1 */
  weight: number;
}

export interface GetOrderDto {
  /** @example 1 */
  id: number;
  /** @example "string" */
  name: string;
  /** @example 1 */
  tableNumber: number;
  /** @example "string" */
  phone: string;
  /** @example "string" */
  restaurantName: string;
  /** @example 1 */
  price: number;
  /** @example 1 */
  cookingTime: number;
  /** @example "test@mail.ru" */
  email: string;
  /** @example "string" */
  createdAt: object;
  /** @example 0 */
  status: number;
  products: OrderProductDto[];
}

export interface User {
  /**
   * Unique Id
   * @example 1
   */
  id: number;
  /**
   * EMail
   * @example "test@mail.ru"
   */
  email: string;
  /**
   * Phone
   * @example "79998887766"
   */
  phone: string;
  /**
   * First Name
   * @example "Ivan"
   */
  firstName: string;
  /**
   * Last Name
   * @example "Ivanov"
   */
  lastName: string;
  /**
   * Patronymic Name
   * @example "Ivanovich"
   */
  patronymicName: string;
  /**
   * Password
   * @example "password"
   */
  password: string;
  /**
   * Is user banned or not
   * @example "false"
   */
  enabled: boolean;
  /**
   * Is user deleted
   * @example "false"
   */
  deleted: boolean;
  /**
   * Ban Reason
   * @example "none"
   */
  banReason: string;
}

export interface OrderHistoryDto {
  /** @example 1 */
  orderId: number;
  /** @example 1 */
  orderStatus: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  /** @example "Firstname Lastname" */
  userName: string;
  /** @example "Date" */
  createdAt: string;
  /** @example "Date" */
  updatedAt: string;
  /** @example 1 */
  userId: number;
}

export interface GetDashboardOrderDto {
  /** @example 1 */
  id: number;
  /** @example "string" */
  name: string;
  /** @example 1 */
  tableNumber: number;
  /** @example "string" */
  phone: string;
  /** @example "string" */
  restaurantName: string;
  /** @example 1 */
  price: number;
  /** @example 1 */
  cookingTime: number;
  /** @example "test@mail.ru" */
  email: string;
  /** @example "string" */
  createdAt: object;
  /** @example 0 */
  status: number;
  products: OrderProductDto[];
  user: User;
  history?: OrderHistoryDto[];
}

export interface DashboardOrderPaginationResult {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  items: GetDashboardOrderDto[];
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title remote-waiter-system
 * @version 1.0.0
 * @contact
 *
 * remote-waiter-system
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name UsersControllerGetUser
     * @summary Get Current User Info
     * @request GET:/users/getUser
     * @secure
     */
    usersControllerGetUser: (params: RequestParams = {}) =>
      this.request<UserInfoResponseDto, any>({
        path: `/users/getUser`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  identity = {
    /**
     * No description
     *
     * @tags Identity
     * @name AuthControllerLogin
     * @summary Вход
     * @request POST:/identity/signin
     */
    authControllerLogin: (data: LoginUserDto, params: RequestParams = {}) =>
      this.request<{ accessToken: string; refreshToken: string }, any>({
        path: `/identity/signin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name AuthControllerRegistration
     * @summary Регистрация
     * @request POST:/identity/signup
     */
    authControllerRegistration: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/identity/signup`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name AuthControllerAuthByPhone
     * @summary Авторизация или регистрация по телефону
     * @request POST:/identity/auth-by-phone
     */
    authControllerAuthByPhone: (data: LoginByPhoneDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/identity/auth-by-phone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name AuthControllerRefreshToken
     * @summary Обновление токенов для пользователя
     * @request POST:/identity/refresh-token
     */
    authControllerRefreshToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/identity/refresh-token`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Identity
     * @name AuthControllerRegisterWaiter
     * @summary Регистрация официанта
     * @request POST:/identity/waiter/register
     */
    authControllerRegisterWaiter: (
      query: {
        restaurantId: string;
        referralCode: string;
      },
      data: CreateUserDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/identity/waiter/register`,
        method: "POST",
        query: query,
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  restaurant = {
    /**
     * No description
     *
     * @tags Restaurant
     * @name RestaurantControllerCreateRestaurant
     * @summary Create a new restaurant
     * @request POST:/restaurant/create
     * @secure
     */
    restaurantControllerCreateRestaurant: (data: CreateRestaurantDto, params: RequestParams = {}) =>
      this.request<Restaurant, any>({
        path: `/restaurant/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name RestaurantControllerUpdateRestaurant
     * @summary Update an a current restaurant
     * @request PATCH:/restaurant/update
     * @secure
     */
    restaurantControllerUpdateRestaurant: (
      query: {
        restaurantId: string;
      },
      data: CreateRestaurantDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/restaurant/update`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name RestaurantControllerDeleteRestaurant
     * @summary Delete restaurant by id
     * @request DELETE:/restaurant/delete
     * @secure
     */
    restaurantControllerDeleteRestaurant: (
      query: {
        restaurantId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/restaurant/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name RestaurantControllerGetAllRestaurantsOfUser
     * @summary Get whole list of restaurants of user
     * @request GET:/restaurant/get-user-restaurants
     * @secure
     */
    restaurantControllerGetAllRestaurantsOfUser: (
      query: {
        pageSize: number;
        pageNumber: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<RestaurantPaginationResultDto, any>({
        path: `/restaurant/get-user-restaurants`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name RestaurantControllerGetAllRestaurants
     * @summary Get whole list of restaurants for SUPERADMIN
     * @request GET:/restaurant/get-all-restaurants
     */
    restaurantControllerGetAllRestaurants: (
      query: {
        pageSize: string;
        pageNumber: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<RestaurantPaginationResultDto, any>({
        path: `/restaurant/get-all-restaurants`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name RestaurantControllerGetAllSeoUrlRestaurants
     * @summary Получить все SEOURL для прегенерации
     * @request GET:/restaurant/get-all-seoUrls
     */
    restaurantControllerGetAllSeoUrlRestaurants: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/restaurant/get-all-seoUrls`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name RestaurantControllerGetRestaurantById
     * @summary Get restaurant by id
     * @request GET:/restaurant/get-by-url
     */
    restaurantControllerGetRestaurantById: (
      query: {
        seoUrl: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Restaurant, any>({
        path: `/restaurant/get-by-url`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name ReferralCodesControllerGenerateReferral
     * @summary Сгенерировать реферальный код для регистрации официант
     * @request POST:/restaurant/create-code
     * @secure
     */
    referralCodesControllerGenerateReferral: (
      query: {
        restaurantId: string;
        expiresIn: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ReferralCode>({
        path: `/restaurant/create-code`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name ReferralCodesControllerCheckReferralCode
     * @summary Проверить реферальный код для регистрации официанта
     * @request GET:/restaurant/check-code
     */
    referralCodesControllerCheckReferralCode: (
      query: {
        restaurantId: string;
        code: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/restaurant/check-code`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name ReferralCodesControllerGetCodes
     * @summary Получить реферальные коды для регистрации официантов
     * @request GET:/restaurant/get-codes
     * @secure
     */
    referralCodesControllerGetCodes: (
      query: {
        restaurantId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, ReferralCode[]>({
        path: `/restaurant/get-codes`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name ReferralCodesControllerDeleteCode
     * @summary Удалить реферальный код для регистрации официантов
     * @request DELETE:/restaurant/delete-code
     * @secure
     */
    referralCodesControllerDeleteCode: (
      query: {
        restaurantId: string;
        code: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/restaurant/delete-code`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name WaiterControllerGetWaitersOfRestaurant
     * @summary Получить всех официантов ресторана
     * @request GET:/restaurant/get-waiters-by-restaurant
     * @secure
     */
    waiterControllerGetWaitersOfRestaurant: (
      query: {
        restaurantId: string;
        pageSize: string;
        pageNumber: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<any, WaiterPaginationResult>({
        path: `/restaurant/get-waiters-by-restaurant`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Restaurant
     * @name WaiterControllerChangeWaiterStatus
     * @summary Изменить статус официанта (включен/выключен)
     * @request PATCH:/restaurant/change-waiter-status
     * @secure
     */
    waiterControllerChangeWaiterStatus: (
      query: {
        restaurantId: string;
        waiterId: string;
        status: "enabled" | "disabled";
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/restaurant/change-waiter-status`,
        method: "PATCH",
        query: query,
        secure: true,
        ...params,
      }),
  };
  cart = {
    /**
     * No description
     *
     * @tags cart
     * @name CartControllerGetUserCart
     * @summary Get user cart
     * @request GET:/cart/get-user-cart
     * @secure
     */
    cartControllerGetUserCart: (
      query: {
        restaurantId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetCartDto[], any>({
        path: `/cart/get-user-cart`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartControllerAddToCart
     * @summary Add item to user cart
     * @request POST:/cart/add-to-cart
     * @secure
     */
    cartControllerAddToCart: (
      query: {
        productId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/cart/add-to-cart`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartControllerRemoveFromCart
     * @summary Remove an item from user cart
     * @request DELETE:/cart/remove-from-cart
     * @secure
     */
    cartControllerRemoveFromCart: (
      query: {
        productId: string;
        restaurantId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/cart/remove-from-cart`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartControllerClearCart
     * @summary Clear whole cart
     * @request DELETE:/cart/clear-cart
     * @secure
     */
    cartControllerClearCart: (
      query: {
        restaurantId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/cart/clear-cart`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart
     * @name CartControllerChangeQuantity
     * @summary Change quantity, 0 - increase, 1 - decrease
     * @request PATCH:/cart/change-quantity
     * @secure
     */
    cartControllerChangeQuantity: (data: ChangeQuantityDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/cart/change-quantity`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  sms = {
    /**
     * No description
     *
     * @tags sms
     * @name SmsControllerGenerateCode
     * @summary Generate code with requested phone
     * @request POST:/sms/generateCode
     */
    smsControllerGenerateCode: (data: GenerateCodeDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sms/generateCode`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags sms
     * @name SmsControllerCheckCode
     * @summary Generate code with requested phone
     * @request POST:/sms/checkCode
     */
    smsControllerCheckCode: (data: CheckCodeDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sms/checkCode`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @tags Category
     * @name CategoryControllerCreateCategoryFor
     * @summary Create a new category for restaurant
     * @request POST:/Category/create
     * @secure
     */
    categoryControllerCreateCategoryFor: (
      query: {
        /** ID ресторана для которого создается категория */
        restaurantId: string;
      },
      data: CreateCategoryDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/Category/create`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryControllerGetCategoriesByRestaurantId
     * @summary Get recursive categories for admin panel or main menu by restaurant id
     * @request GET:/Category/get-categories-by-id
     */
    categoryControllerGetCategoriesByRestaurantId: (
      query: {
        id: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetCategoryDto[], any>({
        path: `/Category/get-categories-by-id`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryControllerGetCategoriesIdBySeoUrl
     * @summary Получить ID категорий для прегенерации
     * @request GET:/Category/get-categories-by-seoUrl
     */
    categoryControllerGetCategoriesIdBySeoUrl: (
      query: {
        seoUrl: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/Category/get-categories-by-seoUrl`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryControllerGetCategoryProductsById
     * @summary Get category detail by id
     * @request GET:/Category/get-category
     */
    categoryControllerGetCategoryProductsById: (
      query: {
        /** ID категории */
        id: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Category, any>({
        path: `/Category/get-category`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryControllerDeleteCategory
     * @summary Delete category by id
     * @request DELETE:/Category/delete
     * @secure
     */
    categoryControllerDeleteCategory: (
      query: {
        id: string;
        restaurantId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/Category/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CategoryControllerUpdateCategory
     * @summary Update category by categoryId
     * @request PATCH:/Category/update
     * @secure
     */
    categoryControllerUpdateCategory: (
      query: {
        id: string;
        restaurantId: string;
      },
      data: UpdateCategoryDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/Category/update`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
  };
  products = {
    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerCreateProduct
     * @summary Create a product
     * @request POST:/products/create
     * @secure
     */
    productsControllerCreateProduct: (
      query: {
        restaurantId: string;
      },
      data: CreateProductDto,
      params: RequestParams = {}
    ) =>
      this.request<Product, any>({
        path: `/products/create`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerUpdateProduct
     * @summary Update a product
     * @request PATCH:/products/update
     * @secure
     */
    productsControllerUpdateProduct: (
      query: {
        restaurantId: string;
        productId: string;
      },
      data: CreateProductDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/products/update`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerDeleteProduct
     * @summary Remove product by id
     * @request DELETE:/products/delete
     * @secure
     */
    productsControllerDeleteProduct: (
      query: {
        restaurantId: string;
        productId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/products/delete`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerGetProductByRestId
     * @summary Get paged Products by restaurant Id
     * @request GET:/products/get-product-by-rest-seo-url
     */
    productsControllerGetProductByRestId: (
      query: {
        seoUrl: string;
        pageNumber: string;
        pageSize: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductPaginationResult, any>({
        path: `/products/get-product-by-rest-seo-url`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerGetProductById
     * @summary Get Product by Id
     * @request GET:/products/get-product-by-id
     */
    productsControllerGetProductById: (
      query: {
        /** @example 1 */
        productId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<Product, any>({
        path: `/products/get-product-by-id`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Products
     * @name ProductsControllerGetProductByCategoryId
     * @summary Get Products by Products Id
     * @request GET:/products/get-product-by-category-id
     */
    productsControllerGetProductByCategoryId: (
      query: {
        /** @example 1 */
        categoryId: string;
        pageNumber: string;
        pageSize: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<ProductPaginationResult, any>({
        path: `/products/get-product-by-category-id`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags orders
     * @name OrdersControllerCreateOrder
     * @summary Create the order
     * @request POST:/orders/create
     * @secure
     */
    ordersControllerCreateOrder: (data: CreateOrderDto, params: RequestParams = {}) =>
      this.request<CreateOrderResponse, any>({
        path: `/orders/create`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersControllerGetOrderById
     * @summary Get the order for user!
     * @request GET:/orders/get-by-id
     * @secure
     */
    ordersControllerGetOrderById: (
      query: {
        orderId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetOrderDto, any>({
        path: `/orders/get-by-id`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersControllerGetOrderOfUser
     * @summary Get the orders list of user!
     * @request GET:/orders/get-orders
     * @secure
     */
    ordersControllerGetOrderOfUser: (
      query: {
        pageNumber: string;
        pageSize: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetOrderDto[], any>({
        path: `/orders/get-orders`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersControllerGetLastActiveOrder
     * @summary Текущий активный заказ пользователя
     * @request GET:/orders/get-active-order
     * @secure
     */
    ordersControllerGetLastActiveOrder: (params: RequestParams = {}) =>
      this.request<GetOrderDto[], any>({
        path: `/orders/get-active-order`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersControllerGetRestaurantOrders
     * @summary Получить все заказы ресторана (для директора ресторана)
     * @request GET:/orders/dashboard/restaurant
     * @secure
     */
    ordersControllerGetRestaurantOrders: (
      query: {
        restaurantId: string;
        pageSize: string;
        pageNumber: string;
        orderNumber?: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<DashboardOrderPaginationResult[], any>({
        path: `/orders/dashboard/restaurant`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersControllerChangeOrderStatus
     * @summary Изменить статус заказа (для директора и официанта)
     * @request POST:/orders/dashboard/change-status
     * @secure
     */
    ordersControllerChangeOrderStatus: (
      query: {
        restaurantId: string;
        orderId: string;
        orderStatus: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
      },
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/orders/dashboard/change-status`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name OrdersControllerGetOrderOfRestaurant
     * @summary Получить конкретный заказ по ID заказа (для директора)
     * @request GET:/orders/dashboard/get-by-id
     * @secure
     */
    ordersControllerGetOrderOfRestaurant: (
      query: {
        restaurantId: string;
        orderId: string;
      },
      params: RequestParams = {}
    ) =>
      this.request<GetDashboardOrderDto, any>({
        path: `/orders/dashboard/get-by-id`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
