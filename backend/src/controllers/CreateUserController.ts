import {
  Request,
  Response
} from 'express'
import {
  getRepository
} from 'typeorm';

import {
  validate
} from 'class-validator'


import Users from '../models/Users';

export default {
  async index(request: Request, response: Response) {

    console.log("FOI")

    response.json({
      msgg: "AEEEE FOI"
    });
  },

  async createUser(request: Request, response: Response) {

    try {
      const {
        name,
        email,
        password,
      } = request.body;

      const userRepository = getRepository(Users);

      const data = {
        name,
        email,
        password,
      }

      const user = userRepository.create(data);

      const errors = await validate(user);

      if (errors.length === 0) {

        await userRepository.save(user);
        return response.status(201).json(user);
      } else {
        response.status(400).json(errors.map(v => v.constraints))
      }
    } catch (err) {
      console.log('err.message : >>', err.message)
      return response.status(400).json(err.message);
    }
  },

  async searchUser(request: Request, response: Response) {
    
        const {
          password,
        } = request.body;
        const {
          email
        } = request.params;
        try{
        const userRepository = getRepository(Users);
        const user = await userRepository.find({
          where: [{
            email: email,
            password: password
          }]
        });

        if (user.length === 0) {
          return response.status(400).json({
            msg: "User not found or password incorrect."
          });
        } else {
         return response.status(200).json(user);
        }
      }catch (err) {
    console.log('err.message : >>', err.message)
    return response.status(400).json(err.message);
  }
}, 
}