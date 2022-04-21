import { Controller, Get, Post, Render } from '@nestjs/common';
import { ClienteService } from '../services/cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteServide: ClienteService) {}

  @Get('form')
  @Render('cliente/form')
  form() {
    return {};
  }

  @Post('')
  add() {
    return {};
  }

  @Post('update')
  edit() {
    ////
    //redirect;
    return {};
  }

  @Post('delete/:id') //:id es una variable
  delete() {
    return {};
  }

  @Get('')
  @Render('cliente/list')
  list() {
    return {};
  }
}
