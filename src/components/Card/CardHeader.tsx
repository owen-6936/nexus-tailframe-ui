import { TextAlignment } from "../../constants/enums";
import { CardHeaderProps } from "../../types/card";
import { classNames } from "../../utils/helper";

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  icon,
  subtitle,
  align = "left",
  gradient = false,
  className = "",
}) => (
  <div className={classNames("mb-4", className)}>
    <div className={`flex items-center gap-2 ${TextAlignment[align]}`}>
      {icon && <div className="w-5 h-5 mb-0.5 text-blue-400">{icon}</div>}
      <h2
        className={classNames(
          "text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 w-full",
          gradient
            ? "bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            : ""
        )}
      >
        {title}
      </h2>
    </div>
    {subtitle && (
      <p
        className={classNames(
          "text-sm text-gray-300 mt-1",
          TextAlignment[align]
        )}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default CardHeader;
