import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class BooksService {

    async create(data: Prisma.BookCreateInput) {


    }
}
