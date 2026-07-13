import React, { useId, useState } from 'react';

interface MobileDisclosureProps {
  children: React.ReactNode;
  closedLabel?: string;
  openLabel?: string;
  contentClassName?: string;
  wrapperClassName?: string;
}

export const MobileDisclosure: React.FC<MobileDisclosureProps> = ({
  children,
  closedLabel = 'Read more',
  openLabel = 'Show less',
  contentClassName = '',
  wrapperClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={wrapperClassName}>
      <div
        id={contentId}
        className={`${isOpen ? 'block' : 'hidden'} md:block ${contentClassName}`.trim()}
      >
        {children}
      </div>

      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
        className="mt-3 inline-flex min-h-11 items-center justify-center rounded-md border-2 border-black bg-[#27272A] px-3 py-2 font-grotesk text-[11px] font-extrabold uppercase tracking-wider text-white transition-colors duration-150 hover:bg-portfolio-primary hover:text-white md:hidden"
        style={{ boxShadow: '2px 2px 0px 0px #000000' }}
      >
        {isOpen ? openLabel : closedLabel}
      </button>
    </div>
  );
};
