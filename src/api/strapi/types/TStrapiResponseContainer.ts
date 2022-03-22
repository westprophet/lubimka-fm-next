//Возвращаемый Strapi тип иногда имеет одинаковую структуру ответа
type TStrapiResponseContainer<Type> = {
  id: number;
  attributes: Type;
};
export default TStrapiResponseContainer;
