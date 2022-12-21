import { Injectable } from '@nestjs/common';
import { Item } from 'src/interfaces/item.interface';
import { v4 } from 'uuid'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [];
    private readonly itemNames: Set<string> = new Set();

    create(item: Pick<Item, "name">) {
        if (this.itemNames.has(item.name)) throw new Error('cannot item with duplicate name');
        if (!item.name.length) throw new Error('cannot add item with empty name');

        this.items.push({...item, id: v4()})
        this.itemNames.add(item.name)
    }

    findById(itemId: string) {
        return this.items.find(item => item.id === itemId);
    }
}
