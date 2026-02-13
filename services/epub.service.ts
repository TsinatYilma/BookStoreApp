
import ePub from "epubjs";

export const loadBook = async (uri: string) => {
    const book = ePub(uri);
    await book.ready;
    return book;
};
