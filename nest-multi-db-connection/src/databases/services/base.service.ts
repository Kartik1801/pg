import { Injectable } from '@nestjs/common';

import { FindOptions } from 'sequelize';
import { Model, ModelCtor } from 'sequelize-typescript';
import { MakeNullishOptional } from 'sequelize/types/utils';

@Injectable()
export class BaseService<T extends Model> {
  constructor(private readonly model: ModelCtor<T>) {}

  async create(data: MakeNullishOptional<T>): Promise<T> {
    return this.model.create(data);
  }

  async update(id: number, data: Partial<T['_attributes']>): Promise<T> {
    const instance = await this.model.findByPk(id);

    if (!instance) {
      throw new Error('Instance not found');
    }

    return instance.update(data);
  }

  async delete(id: number): Promise<void> {
    const instance = await this.model.findByPk(id);

    if (!instance) {
      throw new Error('Instance not found');
    }

    await instance.destroy();
  }

  async softDelete(id: number): Promise<void> {
    const instance = await this.model.findByPk(id);

    if (!instance) {
      throw new Error('Instance not found');
    }

    await instance.update({ deletedAt: new Date() } as Partial<T>);
  }

  async getOneById(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async getAllWhere(findOptions: FindOptions<T>): Promise<T[]> {
    return this.model.findAll(findOptions);
  }

  async getOneWhere(findOptions: FindOptions<T>): Promise<T | null> {
    return this.model.findOne(findOptions);
  }
}
