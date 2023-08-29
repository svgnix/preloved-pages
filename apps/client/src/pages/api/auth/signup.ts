// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { User, Course, Admin } from "db";
import jwt from "jsonwebtoken";
import dbConnect from '@/lib/db';

type Data = {
    email: string,
    password: string,
    message?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    await dbConnect();
    const { email, password } = req.body;
    let username = email;
    console.log(username)
    console.log(password)
    let admin = await Admin.findOne({ username });
      if (admin) {
        res.status(403).json({ message: 'Admin already exists' })
      } else {
        const obj = { username: username, password: password };
        const newAdmin = new Admin(obj);
        newAdmin.save();

        const token = jwt.sign({ username, role: 'admin' }, "SECRET", { expiresIn: '1m' });
        res.json({ message: 'Admin created successfully', token });
      }
}
