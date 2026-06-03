import { Icon } from "@iconify/react";

const Button = ({
  children,
  onClick,
  href,
  target,
  rel,
  disabled = false,
  loading = false,
  className = "",
  imgSrc,
  imgAlt = "",
  imgClass = "",
  icon,
  iconClass = "",
  type = "button",
  ariaLabel,
  ...props
}) => {
  const isDisabled = disabled || loading;
  const Element = href ? "a" : "button";

  return (
    <Element
      type={href ? undefined : type}
      href={href}
      target={href ? target : undefined}
      rel={href ? rel : undefined}
      onClick={onClick}
      disabled={href ? undefined : isDisabled}
      aria-label={ariaLabel}
      aria-busy={loading}
      aria-disabled={isDisabled}
      className={`
        relative flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {/* children stay mounted — no layout shift */}
      <span className={loading ? "invisible flex items-center gap-2" : "flex items-center gap-2"}>
        {icon && <Icon icon={icon} className={`h-5 w-5 ${iconClass}`} />}
        {imgSrc && (
          <img src={imgSrc} alt={imgAlt} className={`h-6 w-6 object-contain ${imgClass}`} />
        )}
        {children}
      </span>

      {/* spinner overlaid, centered */}
      {loading && (
        <Icon
          icon="line-md:loading-twotone-loop"
          className={`absolute h-5 w-5 ${iconClass}`}
          aria-hidden="true"
        />
      )}
    </Element>
  );
};

export default Button;