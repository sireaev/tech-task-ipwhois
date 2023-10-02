import { ResponseModel } from "interfaces/response.type";

type DataResponse =
    | {
          message?: string;
          code?: number;
      }
    | any;

const baseResponse = (dataResponse: DataResponse): any => {
    const { message = 'Success', code = 200, ...rest } = dataResponse;

    return {
        code,
        message,
        data: {
            ...rest,
        },
    };
};

export default {
    baseResponse,
};
