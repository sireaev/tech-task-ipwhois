import Log from './log.model';

const models = {
    Log,
};

export default models;

export type MyModels = typeof models;

Object.entries(models).map(([, model]) => {
    // if (model?.associate) {
    //     model.associate(models);
    // }
    return model;
});
