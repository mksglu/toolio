/**
 * Returns the searched products.
 * @function
 * @name findByTitle
 * @param {Object} source - The source data become products JSON.
 * @param {string} param - The search keyword.
 * @return {Object} - The products
 */

export const findByTitle = (source: any, param?: string): object => {
  const criteria = param ? source.products.filter(({ title }: any) => title.toLowerCase().includes(param.toLowerCase())) : source.products;
  const getResult = criteria.map((data: { id: number; title: string }): { id: number; title: string } => {
    return { id: data.id, title: data.title };
  });
  return { products: [...getResult] };
};
