import { GraphQLResolveInfo } from 'graphql';
import { Promotion as PromotionModel, ServicesCard as ServicesCardModel, FavoritesEnum as FavoritesEnumModel, PromoSlide as PromoSlideModel } from '@prisma/client';
import { GraphQLContext } from './pages/api/index';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum FavoritesEnum {
  Promotion = 'PROMOTION',
  Servicescard = 'SERVICESCARD'
}

export type Mutation = {
  __typename?: 'Mutation';
  addPromoSlide?: Maybe<PromoSlide>;
  addPromotion?: Maybe<Promotion>;
  addServicesCard?: Maybe<ServicesCard>;
  removePromoSlide?: Maybe<PromoSlide>;
  removePromotion?: Maybe<Promotion>;
  removeServicesCard?: Maybe<ServicesCard>;
};


export type MutationAddPromoSlideArgs = {
  input: PromoSlideInput;
};


export type MutationAddPromotionArgs = {
  input: PromotionInput;
};


export type MutationAddServicesCardArgs = {
  input: ServicesCardInput;
};


export type MutationRemovePromoSlideArgs = {
  id: Scalars['ID'];
};


export type MutationRemovePromotionArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveServicesCardArgs = {
  id: Scalars['ID'];
};

export type PromoSlide = {
  __typename?: 'PromoSlide';
  content: Scalars['String'];
  customer: Scalars['String'];
  darkImage?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  type: FavoritesEnum;
};

export type PromoSlideInput = {
  content: Scalars['String'];
  customer: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  type: FavoritesEnum;
};

export type Promotion = {
  __typename?: 'Promotion';
  content: Scalars['String'];
  customer: Scalars['String'];
  darkImage?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  type: FavoritesEnum;
};

export type PromotionInput = {
  content: Scalars['String'];
  customer: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  title: Scalars['String'];
  type: FavoritesEnum;
};

export type Query = {
  __typename?: 'Query';
  promoSlide?: Maybe<PromoSlide>;
  promoSlides?: Maybe<Array<Maybe<PromoSlide>>>;
  promotion?: Maybe<Promotion>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  servicesCard?: Maybe<ServicesCard>;
  servicesCards?: Maybe<Array<Maybe<ServicesCard>>>;
  servicesFullDetails?: Maybe<ServicesCard>;
};


export type QueryPromoSlideArgs = {
  id: Scalars['ID'];
};


export type QueryPromotionArgs = {
  id: Scalars['ID'];
};


export type QueryServicesCardArgs = {
  id: Scalars['ID'];
};


export type QueryServicesFullDetailsArgs = {
  id: Scalars['ID'];
};

export type ServicesCard = {
  __typename?: 'ServicesCard';
  annualFees: Scalars['String'];
  cardProtectionWith3DSecureText: Scalars['Boolean'];
  cardType: Scalars['String'];
  content: Scalars['String'];
  creditLimit: Scalars['String'];
  fourtyFiveDaysMaximumInterestFree: Scalars['Boolean'];
  freeAnnualFees: Scalars['String'];
  freeCashWithdrawal: Scalars['Boolean'];
  freeFlightTickets: Scalars['Boolean'];
  generalConditions: Scalars['String'];
  globalPayments: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Scalars['String'];
  income: Scalars['String'];
  installmentPlanWithInterestOf1Percent: Scalars['Boolean'];
  interestRate: Scalars['String'];
  mobiphone: Scalars['Boolean'];
  pureCardImage: Scalars['String'];
  refund: Scalars['String'];
  rewardPoints: Scalars['Boolean'];
  seperateOffer: Scalars['String'];
  title: Scalars['String'];
  transactionLimit: Scalars['String'];
  type: FavoritesEnum;
  upTo50PercentOff: Scalars['Boolean'];
  withdrawMoneyUpTo85Percent: Scalars['Boolean'];
};

export type ServicesCardInput = {
  annualFees: Scalars['String'];
  cardProtectionWith3DSecureText: Scalars['Boolean'];
  cardType: Scalars['String'];
  content: Scalars['String'];
  creditLimit: Scalars['String'];
  fourtyFiveDaysMaximumInterestFree: Scalars['Boolean'];
  freeAnnualFees: Scalars['String'];
  freeCashWithdrawal: Scalars['Boolean'];
  freeFlightTickets: Scalars['Boolean'];
  generalConditions: Scalars['String'];
  globalPayments: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Scalars['String'];
  income: Scalars['String'];
  installmentPlanWithInterestOf1Percent: Scalars['Boolean'];
  interestRate: Scalars['String'];
  mobiphone: Scalars['Boolean'];
  pureCardImage: Scalars['String'];
  refund: Scalars['String'];
  rewardPoints: Scalars['Boolean'];
  seperateOffer: Scalars['String'];
  title: Scalars['String'];
  transactionLimit: Scalars['String'];
  type: FavoritesEnum;
  upTo50PercentOff: Scalars['Boolean'];
  withdrawMoneyUpTo85Percent: Scalars['Boolean'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FavoritesEnum: ResolverTypeWrapper<FavoritesEnumModel>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Mutation: ResolverTypeWrapper<{}>;
  PromoSlide: ResolverTypeWrapper<PromoSlideModel>;
  PromoSlideInput: PromoSlideInput;
  Promotion: ResolverTypeWrapper<PromotionModel>;
  PromotionInput: PromotionInput;
  Query: ResolverTypeWrapper<{}>;
  ServicesCard: ResolverTypeWrapper<ServicesCardModel>;
  ServicesCardInput: ServicesCardInput;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Mutation: {};
  PromoSlide: PromoSlideModel;
  PromoSlideInput: PromoSlideInput;
  Promotion: PromotionModel;
  PromotionInput: PromotionInput;
  Query: {};
  ServicesCard: ServicesCardModel;
  ServicesCardInput: ServicesCardInput;
  String: Scalars['String'];
};

export type FavoritesEnumResolvers = EnumResolverSignature<{ PROMOTION?: any, SERVICESCARD?: any }, ResolversTypes['FavoritesEnum']>;

export type MutationResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPromoSlide?: Resolver<Maybe<ResolversTypes['PromoSlide']>, ParentType, ContextType, RequireFields<MutationAddPromoSlideArgs, 'input'>>;
  addPromotion?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<MutationAddPromotionArgs, 'input'>>;
  addServicesCard?: Resolver<Maybe<ResolversTypes['ServicesCard']>, ParentType, ContextType, RequireFields<MutationAddServicesCardArgs, 'input'>>;
  removePromoSlide?: Resolver<Maybe<ResolversTypes['PromoSlide']>, ParentType, ContextType, RequireFields<MutationRemovePromoSlideArgs, 'id'>>;
  removePromotion?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<MutationRemovePromotionArgs, 'id'>>;
  removeServicesCard?: Resolver<Maybe<ResolversTypes['ServicesCard']>, ParentType, ContextType, RequireFields<MutationRemoveServicesCardArgs, 'id'>>;
};

export type PromoSlideResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PromoSlide'] = ResolversParentTypes['PromoSlide']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  darkImage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FavoritesEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PromotionResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Promotion'] = ResolversParentTypes['Promotion']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  darkImage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FavoritesEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  promoSlide?: Resolver<Maybe<ResolversTypes['PromoSlide']>, ParentType, ContextType, RequireFields<QueryPromoSlideArgs, 'id'>>;
  promoSlides?: Resolver<Maybe<Array<Maybe<ResolversTypes['PromoSlide']>>>, ParentType, ContextType>;
  promotion?: Resolver<Maybe<ResolversTypes['Promotion']>, ParentType, ContextType, RequireFields<QueryPromotionArgs, 'id'>>;
  promotions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Promotion']>>>, ParentType, ContextType>;
  servicesCard?: Resolver<Maybe<ResolversTypes['ServicesCard']>, ParentType, ContextType, RequireFields<QueryServicesCardArgs, 'id'>>;
  servicesCards?: Resolver<Maybe<Array<Maybe<ResolversTypes['ServicesCard']>>>, ParentType, ContextType>;
  servicesFullDetails?: Resolver<Maybe<ResolversTypes['ServicesCard']>, ParentType, ContextType, RequireFields<QueryServicesFullDetailsArgs, 'id'>>;
};

export type ServicesCardResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['ServicesCard'] = ResolversParentTypes['ServicesCard']> = {
  annualFees?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cardProtectionWith3DSecureText?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cardType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creditLimit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fourtyFiveDaysMaximumInterestFree?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  freeAnnualFees?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  freeCashWithdrawal?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  freeFlightTickets?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  generalConditions?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  globalPayments?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  income?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  installmentPlanWithInterestOf1Percent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  interestRate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mobiphone?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pureCardImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refund?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rewardPoints?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  seperateOffer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transactionLimit?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['FavoritesEnum'], ParentType, ContextType>;
  upTo50PercentOff?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  withdrawMoneyUpTo85Percent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = GraphQLContext> = {
  FavoritesEnum?: FavoritesEnumResolvers;
  Mutation?: MutationResolvers<ContextType>;
  PromoSlide?: PromoSlideResolvers<ContextType>;
  Promotion?: PromotionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ServicesCard?: ServicesCardResolvers<ContextType>;
};


export const PromotionFragmentDoc = gql`
    fragment Promotion on Promotion {
  id
  image
  content
  title
  customer
  type
  darkImage
}
    `;
export const PromoSlideFragmentDoc = gql`
    fragment PromoSlide on PromoSlide {
  id
  image
  content
  title
  customer
  type
  darkImage
}
    `;
export const ServicesCardFragmentDoc = gql`
    fragment ServicesCard on ServicesCard {
  id
  image
  content
  title
  cardType
  type
  title
  creditLimit
  interestRate
  transactionLimit
  annualFees
  rewardPoints
  refund
  freeFlightTickets
  mobiphone
  seperateOffer
  freeCashWithdrawal
  freeAnnualFees
  globalPayments
  cardProtectionWith3DSecureText
  fourtyFiveDaysMaximumInterestFree
  upTo50PercentOff
  installmentPlanWithInterestOf1Percent
  withdrawMoneyUpTo85Percent
  generalConditions
  income
  pureCardImage
}
    `;
export const ServicesFullDetailsFragmentDoc = gql`
    fragment ServicesFullDetails on ServicesCard {
  id
  image
  content
  title
  cardType
  type
  title
  creditLimit
  interestRate
  transactionLimit
  annualFees
  rewardPoints
  refund
  freeFlightTickets
  mobiphone
  seperateOffer
  freeCashWithdrawal
  freeAnnualFees
  globalPayments
  cardProtectionWith3DSecureText
  fourtyFiveDaysMaximumInterestFree
  upTo50PercentOff
  installmentPlanWithInterestOf1Percent
  withdrawMoneyUpTo85Percent
  generalConditions
  income
  pureCardImage
}
    `;
export const AddPromotionDocument = gql`
    mutation AddPromotion($input: PromotionInput!) {
  addPromotion(input: $input) {
    ...Promotion
  }
}
    ${PromotionFragmentDoc}`;
export type AddPromotionMutationFn = Apollo.MutationFunction<AddPromotionMutation, AddPromotionMutationVariables>;

/**
 * __useAddPromotionMutation__
 *
 * To run a mutation, you first call `useAddPromotionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPromotionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPromotionMutation, { data, loading, error }] = useAddPromotionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPromotionMutation(baseOptions?: Apollo.MutationHookOptions<AddPromotionMutation, AddPromotionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPromotionMutation, AddPromotionMutationVariables>(AddPromotionDocument, options);
      }
export type AddPromotionMutationHookResult = ReturnType<typeof useAddPromotionMutation>;
export type AddPromotionMutationResult = Apollo.MutationResult<AddPromotionMutation>;
export type AddPromotionMutationOptions = Apollo.BaseMutationOptions<AddPromotionMutation, AddPromotionMutationVariables>;
export const PromotionDocument = gql`
    query Promotion($id: ID!) {
  promotion(id: $id) {
    ...Promotion
  }
}
    ${PromotionFragmentDoc}`;

/**
 * __usePromotionQuery__
 *
 * To run a query within a React component, call `usePromotionQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePromotionQuery(baseOptions: Apollo.QueryHookOptions<PromotionQuery, PromotionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PromotionQuery, PromotionQueryVariables>(PromotionDocument, options);
      }
export function usePromotionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromotionQuery, PromotionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PromotionQuery, PromotionQueryVariables>(PromotionDocument, options);
        }
export type PromotionQueryHookResult = ReturnType<typeof usePromotionQuery>;
export type PromotionLazyQueryHookResult = ReturnType<typeof usePromotionLazyQuery>;
export type PromotionQueryResult = Apollo.QueryResult<PromotionQuery, PromotionQueryVariables>;
export const PromotionsDocument = gql`
    query Promotions {
  promotions {
    ...Promotion
  }
}
    ${PromotionFragmentDoc}`;

/**
 * __usePromotionsQuery__
 *
 * To run a query within a React component, call `usePromotionsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromotionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromotionsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePromotionsQuery(baseOptions?: Apollo.QueryHookOptions<PromotionsQuery, PromotionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PromotionsQuery, PromotionsQueryVariables>(PromotionsDocument, options);
      }
export function usePromotionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromotionsQuery, PromotionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PromotionsQuery, PromotionsQueryVariables>(PromotionsDocument, options);
        }
export type PromotionsQueryHookResult = ReturnType<typeof usePromotionsQuery>;
export type PromotionsLazyQueryHookResult = ReturnType<typeof usePromotionsLazyQuery>;
export type PromotionsQueryResult = Apollo.QueryResult<PromotionsQuery, PromotionsQueryVariables>;
export const AddPromoSlideDocument = gql`
    mutation AddPromoSlide($input: PromoSlideInput!) {
  addPromoSlide(input: $input) {
    ...PromoSlide
  }
}
    ${PromoSlideFragmentDoc}`;
export type AddPromoSlideMutationFn = Apollo.MutationFunction<AddPromoSlideMutation, AddPromoSlideMutationVariables>;

/**
 * __useAddPromoSlideMutation__
 *
 * To run a mutation, you first call `useAddPromoSlideMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPromoSlideMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPromoSlideMutation, { data, loading, error }] = useAddPromoSlideMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddPromoSlideMutation(baseOptions?: Apollo.MutationHookOptions<AddPromoSlideMutation, AddPromoSlideMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPromoSlideMutation, AddPromoSlideMutationVariables>(AddPromoSlideDocument, options);
      }
export type AddPromoSlideMutationHookResult = ReturnType<typeof useAddPromoSlideMutation>;
export type AddPromoSlideMutationResult = Apollo.MutationResult<AddPromoSlideMutation>;
export type AddPromoSlideMutationOptions = Apollo.BaseMutationOptions<AddPromoSlideMutation, AddPromoSlideMutationVariables>;
export const PromoSlideDocument = gql`
    query PromoSlide($id: ID!) {
  promoSlide(id: $id) {
    ...PromoSlide
  }
}
    ${PromoSlideFragmentDoc}`;

/**
 * __usePromoSlideQuery__
 *
 * To run a query within a React component, call `usePromoSlideQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromoSlideQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromoSlideQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePromoSlideQuery(baseOptions: Apollo.QueryHookOptions<PromoSlideQuery, PromoSlideQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PromoSlideQuery, PromoSlideQueryVariables>(PromoSlideDocument, options);
      }
export function usePromoSlideLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromoSlideQuery, PromoSlideQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PromoSlideQuery, PromoSlideQueryVariables>(PromoSlideDocument, options);
        }
export type PromoSlideQueryHookResult = ReturnType<typeof usePromoSlideQuery>;
export type PromoSlideLazyQueryHookResult = ReturnType<typeof usePromoSlideLazyQuery>;
export type PromoSlideQueryResult = Apollo.QueryResult<PromoSlideQuery, PromoSlideQueryVariables>;
export const PromoSlidesDocument = gql`
    query PromoSlides {
  promoSlides {
    ...PromoSlide
  }
}
    ${PromoSlideFragmentDoc}`;

/**
 * __usePromoSlidesQuery__
 *
 * To run a query within a React component, call `usePromoSlidesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePromoSlidesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePromoSlidesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePromoSlidesQuery(baseOptions?: Apollo.QueryHookOptions<PromoSlidesQuery, PromoSlidesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PromoSlidesQuery, PromoSlidesQueryVariables>(PromoSlidesDocument, options);
      }
export function usePromoSlidesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PromoSlidesQuery, PromoSlidesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PromoSlidesQuery, PromoSlidesQueryVariables>(PromoSlidesDocument, options);
        }
export type PromoSlidesQueryHookResult = ReturnType<typeof usePromoSlidesQuery>;
export type PromoSlidesLazyQueryHookResult = ReturnType<typeof usePromoSlidesLazyQuery>;
export type PromoSlidesQueryResult = Apollo.QueryResult<PromoSlidesQuery, PromoSlidesQueryVariables>;
export const AddServicesCardDocument = gql`
    mutation AddServicesCard($input: ServicesCardInput!) {
  addServicesCard(input: $input) {
    ...ServicesCard
  }
}
    ${ServicesCardFragmentDoc}`;
export type AddServicesCardMutationFn = Apollo.MutationFunction<AddServicesCardMutation, AddServicesCardMutationVariables>;

/**
 * __useAddServicesCardMutation__
 *
 * To run a mutation, you first call `useAddServicesCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddServicesCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addServicesCardMutation, { data, loading, error }] = useAddServicesCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddServicesCardMutation(baseOptions?: Apollo.MutationHookOptions<AddServicesCardMutation, AddServicesCardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddServicesCardMutation, AddServicesCardMutationVariables>(AddServicesCardDocument, options);
      }
export type AddServicesCardMutationHookResult = ReturnType<typeof useAddServicesCardMutation>;
export type AddServicesCardMutationResult = Apollo.MutationResult<AddServicesCardMutation>;
export type AddServicesCardMutationOptions = Apollo.BaseMutationOptions<AddServicesCardMutation, AddServicesCardMutationVariables>;
export const ServicesCardDocument = gql`
    query ServicesCard($id: ID!) {
  servicesCard(id: $id) {
    ...ServicesCard
  }
}
    ${ServicesCardFragmentDoc}`;

/**
 * __useServicesCardQuery__
 *
 * To run a query within a React component, call `useServicesCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesCardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useServicesCardQuery(baseOptions: Apollo.QueryHookOptions<ServicesCardQuery, ServicesCardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServicesCardQuery, ServicesCardQueryVariables>(ServicesCardDocument, options);
      }
export function useServicesCardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesCardQuery, ServicesCardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServicesCardQuery, ServicesCardQueryVariables>(ServicesCardDocument, options);
        }
export type ServicesCardQueryHookResult = ReturnType<typeof useServicesCardQuery>;
export type ServicesCardLazyQueryHookResult = ReturnType<typeof useServicesCardLazyQuery>;
export type ServicesCardQueryResult = Apollo.QueryResult<ServicesCardQuery, ServicesCardQueryVariables>;
export const ServicesCardsDocument = gql`
    query ServicesCards {
  servicesCards {
    ...ServicesCard
  }
}
    ${ServicesCardFragmentDoc}`;

/**
 * __useServicesCardsQuery__
 *
 * To run a query within a React component, call `useServicesCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useServicesCardsQuery(baseOptions?: Apollo.QueryHookOptions<ServicesCardsQuery, ServicesCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServicesCardsQuery, ServicesCardsQueryVariables>(ServicesCardsDocument, options);
      }
export function useServicesCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesCardsQuery, ServicesCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServicesCardsQuery, ServicesCardsQueryVariables>(ServicesCardsDocument, options);
        }
export type ServicesCardsQueryHookResult = ReturnType<typeof useServicesCardsQuery>;
export type ServicesCardsLazyQueryHookResult = ReturnType<typeof useServicesCardsLazyQuery>;
export type ServicesCardsQueryResult = Apollo.QueryResult<ServicesCardsQuery, ServicesCardsQueryVariables>;
export const ServicesFullDetailsDocument = gql`
    query ServicesFullDetails($id: ID!) {
  servicesFullDetails(id: $id) {
    ...ServicesFullDetails
  }
}
    ${ServicesFullDetailsFragmentDoc}`;

/**
 * __useServicesFullDetailsQuery__
 *
 * To run a query within a React component, call `useServicesFullDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesFullDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesFullDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useServicesFullDetailsQuery(baseOptions: Apollo.QueryHookOptions<ServicesFullDetailsQuery, ServicesFullDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServicesFullDetailsQuery, ServicesFullDetailsQueryVariables>(ServicesFullDetailsDocument, options);
      }
export function useServicesFullDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesFullDetailsQuery, ServicesFullDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServicesFullDetailsQuery, ServicesFullDetailsQueryVariables>(ServicesFullDetailsDocument, options);
        }
export type ServicesFullDetailsQueryHookResult = ReturnType<typeof useServicesFullDetailsQuery>;
export type ServicesFullDetailsLazyQueryHookResult = ReturnType<typeof useServicesFullDetailsLazyQuery>;
export type ServicesFullDetailsQueryResult = Apollo.QueryResult<ServicesFullDetailsQuery, ServicesFullDetailsQueryVariables>;
export type AddPromotionMutationVariables = Exact<{
  input: PromotionInput;
}>;


export type AddPromotionMutation = { __typename?: 'Mutation', addPromotion?: { __typename?: 'Promotion', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null } | null };

export type PromotionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PromotionQuery = { __typename?: 'Query', promotion?: { __typename?: 'Promotion', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null } | null };

export type PromotionFragment = { __typename?: 'Promotion', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null };

export type PromotionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PromotionsQuery = { __typename?: 'Query', promotions?: Array<{ __typename?: 'Promotion', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null } | null> | null };

export type AddPromoSlideMutationVariables = Exact<{
  input: PromoSlideInput;
}>;


export type AddPromoSlideMutation = { __typename?: 'Mutation', addPromoSlide?: { __typename?: 'PromoSlide', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null } | null };

export type PromoSlideQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PromoSlideQuery = { __typename?: 'Query', promoSlide?: { __typename?: 'PromoSlide', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null } | null };

export type PromoSlideFragment = { __typename?: 'PromoSlide', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null };

export type PromoSlidesQueryVariables = Exact<{ [key: string]: never; }>;


export type PromoSlidesQuery = { __typename?: 'Query', promoSlides?: Array<{ __typename?: 'PromoSlide', id: string, image: string, content: string, title: string, customer: string, type: FavoritesEnum, darkImage?: boolean | null } | null> | null };

export type AddServicesCardMutationVariables = Exact<{
  input: ServicesCardInput;
}>;


export type AddServicesCardMutation = { __typename?: 'Mutation', addServicesCard?: { __typename?: 'ServicesCard', id: string, image: string, content: string, title: string, cardType: string, type: FavoritesEnum, creditLimit: string, interestRate: string, transactionLimit: string, annualFees: string, rewardPoints: boolean, refund: string, freeFlightTickets: boolean, mobiphone: boolean, seperateOffer: string, freeCashWithdrawal: boolean, freeAnnualFees: string, globalPayments: boolean, cardProtectionWith3DSecureText: boolean, fourtyFiveDaysMaximumInterestFree: boolean, upTo50PercentOff: boolean, installmentPlanWithInterestOf1Percent: boolean, withdrawMoneyUpTo85Percent: boolean, generalConditions: string, income: string, pureCardImage: string } | null };

export type ServicesCardQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ServicesCardQuery = { __typename?: 'Query', servicesCard?: { __typename?: 'ServicesCard', id: string, image: string, content: string, title: string, cardType: string, type: FavoritesEnum, creditLimit: string, interestRate: string, transactionLimit: string, annualFees: string, rewardPoints: boolean, refund: string, freeFlightTickets: boolean, mobiphone: boolean, seperateOffer: string, freeCashWithdrawal: boolean, freeAnnualFees: string, globalPayments: boolean, cardProtectionWith3DSecureText: boolean, fourtyFiveDaysMaximumInterestFree: boolean, upTo50PercentOff: boolean, installmentPlanWithInterestOf1Percent: boolean, withdrawMoneyUpTo85Percent: boolean, generalConditions: string, income: string, pureCardImage: string } | null };

export type ServicesCardFragment = { __typename?: 'ServicesCard', id: string, image: string, content: string, title: string, cardType: string, type: FavoritesEnum, creditLimit: string, interestRate: string, transactionLimit: string, annualFees: string, rewardPoints: boolean, refund: string, freeFlightTickets: boolean, mobiphone: boolean, seperateOffer: string, freeCashWithdrawal: boolean, freeAnnualFees: string, globalPayments: boolean, cardProtectionWith3DSecureText: boolean, fourtyFiveDaysMaximumInterestFree: boolean, upTo50PercentOff: boolean, installmentPlanWithInterestOf1Percent: boolean, withdrawMoneyUpTo85Percent: boolean, generalConditions: string, income: string, pureCardImage: string };

export type ServicesCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesCardsQuery = { __typename?: 'Query', servicesCards?: Array<{ __typename?: 'ServicesCard', id: string, image: string, content: string, title: string, cardType: string, type: FavoritesEnum, creditLimit: string, interestRate: string, transactionLimit: string, annualFees: string, rewardPoints: boolean, refund: string, freeFlightTickets: boolean, mobiphone: boolean, seperateOffer: string, freeCashWithdrawal: boolean, freeAnnualFees: string, globalPayments: boolean, cardProtectionWith3DSecureText: boolean, fourtyFiveDaysMaximumInterestFree: boolean, upTo50PercentOff: boolean, installmentPlanWithInterestOf1Percent: boolean, withdrawMoneyUpTo85Percent: boolean, generalConditions: string, income: string, pureCardImage: string } | null> | null };

export type ServicesFullDetailsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ServicesFullDetailsQuery = { __typename?: 'Query', servicesFullDetails?: { __typename?: 'ServicesCard', id: string, image: string, content: string, title: string, cardType: string, type: FavoritesEnum, creditLimit: string, interestRate: string, transactionLimit: string, annualFees: string, rewardPoints: boolean, refund: string, freeFlightTickets: boolean, mobiphone: boolean, seperateOffer: string, freeCashWithdrawal: boolean, freeAnnualFees: string, globalPayments: boolean, cardProtectionWith3DSecureText: boolean, fourtyFiveDaysMaximumInterestFree: boolean, upTo50PercentOff: boolean, installmentPlanWithInterestOf1Percent: boolean, withdrawMoneyUpTo85Percent: boolean, generalConditions: string, income: string, pureCardImage: string } | null };

export type ServicesFullDetailsFragment = { __typename?: 'ServicesCard', id: string, image: string, content: string, title: string, cardType: string, type: FavoritesEnum, creditLimit: string, interestRate: string, transactionLimit: string, annualFees: string, rewardPoints: boolean, refund: string, freeFlightTickets: boolean, mobiphone: boolean, seperateOffer: string, freeCashWithdrawal: boolean, freeAnnualFees: string, globalPayments: boolean, cardProtectionWith3DSecureText: boolean, fourtyFiveDaysMaximumInterestFree: boolean, upTo50PercentOff: boolean, installmentPlanWithInterestOf1Percent: boolean, withdrawMoneyUpTo85Percent: boolean, generalConditions: string, income: string, pureCardImage: string };
