

const network = process.env.YARN_ENABLE_IMMUTABLE_INSTALLS === false ? 'production' : 'staging';

export default network;