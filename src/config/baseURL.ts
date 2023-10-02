const URL_SERVER = {
    development: `http://localhost:${process.env.PORT || 8000}`,
    production: 'PRODUCTION_IP',
} as const;

const ENV = process.env.NODE_ENV || ('development' as const);

// @ts-ignore
const BASE_URL_SERVER = URL_SERVER[ENV] as const;

export { BASE_URL_SERVER };
