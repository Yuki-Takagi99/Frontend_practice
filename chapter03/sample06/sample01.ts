class Book {
    private _name: string = '';
    readonly code: string = '1234567';

    set name(value: string) {
        if (value === '') {
            console.log('書籍名が指定されていません！')
        } else {
            this._name = value;
        }
    }

    get name(): string {
        return this._name;
    }
}

let mybook: Book = new Book();
mybook.name = 'JavaScript入門';
console.log(mybook.name);
console.log(mybook.code);