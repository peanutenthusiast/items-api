import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) {}
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsService.findById(id);
    }

    @Post()
    create(@Body() name: string) {
        return this.itemsService.create({ name });
    }
}
