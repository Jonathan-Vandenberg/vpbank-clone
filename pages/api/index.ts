import { createServer } from "@graphql-yoga/node"
import { join } from "path"
import { readFileSync } from "fs"
import { prisma } from '../../lib/prisma'
import type { PrismaClient } from '@prisma/client'
import { Resolvers } from '../../types'

export async function createContext(): Promise<GraphQLContext>{
  return { prisma }
}

export type GraphQLContext = {
  prisma: PrismaClient
}

const typeDefs = readFileSync(join(process.cwd(), "schema.graphql"), {encoding: "utf-8"})

const resolvers: Resolvers = {
  Query: {
    promotion: (_, {id}, {prisma}) => {
      return prisma.promotion.findUnique({where: {id}})
    },
    promotions: (_, __, {prisma}) => {
      return prisma.promotion.findMany()
    },
    servicesCard: (_, {id}, {prisma}) => {
      return prisma.servicesCard.findUnique({where: {id}})
    },
    servicesCards: (_, __, {prisma}) => {
      return prisma.servicesCard.findMany()
    },
    servicesFullDetails: (_, {id}, {prisma}) => {
      return prisma.servicesCard.findUnique({where: {id}})
    }
  },
  Mutation: {
  addPromotion: async (_, {input}, {prisma}) => {
    const promotion = await prisma.promotion.create({
      data: {
        id: input!.id,
        image: input!.image,
        title: input!.title,
        content: input!.content,
        customer: input!.customer,
        type: input!.type,
      }
    })
    return promotion
  },
  addServicesCard: async (_, {input}, {prisma}) => {
    const servicesCard = await prisma.servicesCard.create({
      data: {
        id: input!.id,
        image: input!.image,
        title: input!.title,
        content: input!.content,
        cardType: input!.cardType,
        type: input!.type,
        creditLimit: input!.creditLimit,
        interestRate: input!.interestRate,
        transactionLimit: input!.transactionLimit,
        annualFees: input!.annualFees,
        rewardPoints: input!.rewardPoints,
        refund: input!.refund,
        freeFlightTickets: input!.freeFlightTickets,
        mobiphone: input!.mobiphone,
        seperateOffer: input!.seperateOffer,
        freeCashWithdrawal: input!.freeCashWithdrawal,
        freeAnnualFees: input!.freeAnnualFees,
        globalPayments: input!.globalPayments,
        cardProtectionWith3DSecureText: input!.cardProtectionWith3DSecureText,
        fourtyFiveDaysMaximumInterestFree: input!.fourtyFiveDaysMaximumInterestFree,
        upTo50PercentOff: input!.upTo50PercentOff,
        installmentPlanWithInterestOf1Percent: input!.installmentPlanWithInterestOf1Percent,
        withdrawMoneyUpTo85Percent: input!.withdrawMoneyUpTo85Percent,
        generalConditions: input!.generalConditions,
        income: input!.income,
        pureCardImage: input!.pureCardImage,
      }
    })
    return servicesCard
  }
}
}

const server = createServer({
  endpoint: "/api",
  schema: {
    typeDefs,
    resolvers
  },
  context: createContext()
})

export default server