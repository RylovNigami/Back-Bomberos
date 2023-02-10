import { Request, Response } from "express";
import { User } from "../entities/user";
import { sign } from 'jsonwebtoken';

export const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.createQueryBuilder("i")
    .where("LOWER(i.email) = LOWER(:email)", { email })
    .getOne();

    if (!user) {
        return res.status(404).json({ msg: 'user not found '});
    }

    const validate = await user?.validatePassword(password);

    if (!validate) {
        return res.status(401).json({ msg: 'incorrect password' });
    }

    const payload = {
        id: user?.id,
        email: user?.email,
        created: user?.createdAt
    }

    const jwt = sign(payload, `${"jwt-t0k3n-s3cr3t"}`, { expiresIn: `${'24h'}` });

    Object.assign(payload, { jwt })

    return res.status(200).json(payload);

    




   

}

 
      



