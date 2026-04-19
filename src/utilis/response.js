export const AppResponse = (res, statusCode, info) => {
    res.status(statusCode).json(info);
};
