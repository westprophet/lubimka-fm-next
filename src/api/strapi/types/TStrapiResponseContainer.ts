//Возвращаемый Strapi тип иногда имеет одинаковую структуру ответа
type TStrapiResponseContainer<Type> = {
  title: any;
  id: number;
  attributes: Type;
};
export default TStrapiResponseContainer;
