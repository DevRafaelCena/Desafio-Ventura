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


import Content from '../models/Contents';

export default {
  async index(request: Request, response: Response) {
try{
    const contentRepository = getRepository(Content);

    const content = await contentRepository.find();

    if(content.length ===0) {
      response.status(200).json({msg: "content not found"});
    }else{
      response.status(200).json(content);
    }
  }catch (err) {
    console.log('err.message : >>', err.message)
    return response.status(400).json(err.message);
  }
  },

  async createContent(request: Request, response: Response) {

    try {
      const {
        title,
        link,       
      } = request.body;

      const contentRepository = getRepository(Content);

      const data = {
        title,
        link,        
      }

      const content = contentRepository.create(data);

      const errors = await validate(content);

      if (errors.length === 0) {

        await contentRepository.save(content);
        return response.status(201).json(content);
      } else {
        response.status(400).json(errors.map(v => v.constraints))
      }
    } catch (err) {
      console.log('err.message : >>', err.message)
      return response.status(400).json(err.message);
    }
  },
  
};