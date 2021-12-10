// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma } from '../../lib'

export default async function listUsers(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  if(req.method === 'GET') {
    try {
      // ... you will write your Prisma Client queries here
      const result = {
          users: [
              {
                  name: 'John Doe',
                  age: 28
              }
          ],
      }
      res.status(200).json(JSON.parse(JSON.stringify(result)))
    } catch (e) {
      throw e
    }
    finally {
      await Prisma.$disconnect()
    }    
  }
}



