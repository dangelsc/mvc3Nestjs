import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
  ) {}

  async add(nuevo: Cliente): Promise<Cliente> {
    const xnuevo = this.clienteRepository.create(nuevo);
    return await this.clienteRepository.save(xnuevo);
  }

  async edit(key: number, nuevo: Cliente) {
    return await this.clienteRepository.update(
      {
        id: key,
      },
      nuevo,
    );
  }

  async delete(key: number) {
    const borrar = await this.clienteRepository.findOne(key);
    if (!borrar) throw new NotFoundException('Elemento no encontrado');
    return await this.clienteRepository.remove(borrar);
  }
  async find() {
    return await this.clienteRepository.find();
  }

  async delete2(key: number) {
    const borrar = await this.clienteRepository.findOne(key);
    if (!borrar) throw new NotFoundException('Elemento no encontrado');
    borrar.estado = 0;
    return await this.clienteRepository.save(borrar);
  }
  async find2() {
    return await this.clienteRepository.find({ estado: 1 });
  }
}
