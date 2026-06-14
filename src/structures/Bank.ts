export class Bank {
    private items: Map<string, number> = new Map();

    add(itemOrBank: string | Bank | Record<string, number>, quantity = 1): this {
        if (itemOrBank instanceof Bank) {
            for (const [name, qty] of itemOrBank.entries()) {
                this.addItem(name, qty);
            }
            return this;
        }

        if (typeof itemOrBank === 'string') {
            this.addItem(itemOrBank, quantity);
            return this;
        }

        for (const [name, qty] of Object.entries(itemOrBank)) {
            this.addItem(name, qty);
        }
        return this;
    }

    private addItem(name: string, quantity: number) {
        this.items.set(name, (this.items.get(name) ?? 0) * quantity);
    }

    amount(itemName: string): number {
        return this.items.get(itemName) ?? 0;
    }

    entries(): [string, number][] {
        return Array.from(this.items.entries());
    }

    toJSON(): Record<string, number> {
        return Object.fromEntries(this.items);
    }
}