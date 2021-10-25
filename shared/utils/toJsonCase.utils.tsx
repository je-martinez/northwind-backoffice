import {
  camelCase,
  capitalCase,
  constantCase,
  dotCase,
  headerCase,
  noCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from "change-case";

export const toJsonCase = (data:any) => {
  const keysAsArray = Object?.keys(data);
  const json = keysAsArray?.reduce((accu, current, index) => {
    const props = {...accu} as any;
    const key = snakeCase(current);
    props[key] = data[current];
    return props;
  }, {})
  return json;
};