import { Injectable } from '@nestjs/common';
import { Item } from 'src/interfaces/item.interface';
import { v4 } from 'uuid'

interface ItemFilter {
    id?: string;
    name?: string;
}
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

    findAll(query: ItemFilter): Item[] {
        const match = (item: Item) => (filter: ItemFilter) => {
            if (filter.id && filter.id !== item.id) return false

            if (filter.name && filter.name !== item.name) return false

            return true
        }

        return this.items.filter(item => match(item)(query))
    }
}
