import Link from "next/link";

import clsx from "clsx";

interface MobileItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  href,
  icon: Icon,
  onClick,
  active,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        `
        group
        flex
        gap-x-3
        text-sm
        leading-6
        font-semibold
        w-full
        justify-center
        p-4
        hover:text-blue-500
        flex-col
        items-center
      `,
        active && "text-blue-500"
      )}
    >
      <Icon className="h-6 w-6" />
      <div className="text-xs font-light">{label}</div>
    </Link>
  );
};

export default MobileItem;
