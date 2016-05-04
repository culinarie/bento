export function createUri (host, port, databaseName) {
  return `mongodb://${sanitseHost(host)}:${port}/${databaseName}`;
}

export function sanitseHost (host) {
  let cleanStr = host.toString();
  return cleanStr.replace(/[a-zA-Z]{3,}\:\/\//, '');
}
