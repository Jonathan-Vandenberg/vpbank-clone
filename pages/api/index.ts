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
    user: (_, {id}, {prisma}) => {
      return prisma.user.findUnique({where: {id}})
    }
  },
  Mutation: {
    addUser: async (_, {input}, {prisma}) => {
      const user = await prisma.user.create({
            data: {
              name: input.name,
              email: input.email
          }
      })
      return user
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