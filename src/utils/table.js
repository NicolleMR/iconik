export const formatRows = (rows) => rows.map(({ id, ...row }) => Object.values(row));
