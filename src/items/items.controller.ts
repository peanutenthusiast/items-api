import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
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

    @Get()
    findAll(@Query() query) {
        return this.itemsService.findAll(query);
    }

    @Put(':id')
    update(@Param('id') itemId: string, @Body('name') itemName: string) {
        return this.itemsService.update(itemId, itemName);
    }

    @Delete('id')
    delete(@Param('id') itemId: string) {
        return this.itemsService.delete(itemId);
    }
}
