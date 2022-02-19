import ICompany from 'src/interfaces/ICompany';
import TStrapiResponseData from '../../../../types/TStrapiResponseData';
import normalizeAPIEntity from '../../../../../../tools/normalizeAPIEntity';

//Нормализируем данные и превращаем в сущности
export default function normalizeGetCompanies(d: TStrapiResponseData<ICompany>): ICompany[] {
  if (!d) return [];
  if (Array.isArray(d)) {
    return d.map(normalizeAPIEntity);
  }
}
