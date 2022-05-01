import TBreakpoints from '../../../../types/TBreakpoints';

type TRadioProgrammType = 'small' | 'middle' | 'large';

export type TRadioProgrammSizes = Partial<TBreakpoints<TRadioProgrammType>>;

export default TRadioProgrammType;
