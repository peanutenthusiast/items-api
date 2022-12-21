import { Injectable } from '@nestjs/common';
import { Item } from 'src/interfaces/item.interface';
import { v4 } from 'uuid';
@Injectable('items')
export class ItemsService {
    private readonly items: Item[] = [];
    private readonly Set<string> itemNames = new this.Set();

    create(item: { name: string }) {
        if (this.itemNames.has(item.name)) throw new Error('cannot add duplicate item name');
        if (!item.name.length) throw new Error('cannot add item with empty item name')
        this.items.push({...item, id: v4() });
    }
}
