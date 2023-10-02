import { Response } from 'express';

export type ResponseModel <T> = {
    data?: T;
    code: number;
    message: string;
}
