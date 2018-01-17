export interface Book {
    title: string;
    subtitle: string;
    abstract: string;
    numPages: number;
    author: string;
    isbn: string;
    publisher: {
        name: string;
        url: string;
    };
}
