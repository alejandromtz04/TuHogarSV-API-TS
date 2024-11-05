import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContractTypeService } from './contract-type.service';
import { CreateContractTypeDto } from './dto/create-contract-type.dto';
import { UpdateContractTypeDto } from './dto/update-contract-type.dto';

@Controller('contract-type')
export class ContractTypeController {
  constructor(private readonly contractTypeService: ContractTypeService) {}

  @Post()
  create(@Body() createContractTypeDto: CreateContractTypeDto) {
    return this.contractTypeService.create(createContractTypeDto);
  }

  @Get()
  findAll() {
    return this.contractTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contractTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContractTypeDto: UpdateContractTypeDto) {
    return this.contractTypeService.update(+id, updateContractTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contractTypeService.remove(+id);
  }
}
