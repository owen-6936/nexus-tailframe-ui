import { CardSectionProps } from '../../types/card';
import { classNames } from '../../utils/helper';

const CardFooter: React.FC<CardSectionProps> = ({ children, className }) => (
    <div
        className={classNames(
            'mt-4 pt-2 border-t border-white/10 text-xs text-blue-300',
            className ?? '',
        )}
    >
        {children}
    </div>
);

export default CardFooter;
