import { CardSectionProps } from '../../types/card';
import { classNames } from '../../utils/helper';

const CardBody: React.FC<CardSectionProps> = ({ children, className }) => (
    <div className={classNames('text-sm md:text-base', className ?? '')}>
        {children}
    </div>
);

export default CardBody;
