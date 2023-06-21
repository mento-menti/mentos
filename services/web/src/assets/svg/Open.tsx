import { SvgPropsType } from ".";

export const Open = ({ onClick, size = 24, className }: SvgPropsType) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.71778 10C2.17838 6.673 5.71086 4.08521 10.0002 4.08521C14.2897 4.08521 17.8222 6.67301 18.2827 10.0001C17.8227 13.3226 14.2995 15.9077 10.0182 15.915H10.0002H9.98224C5.70097 15.9077 2.17773 13.3225 1.71778 10ZM12.1679 10C12.1679 11.1973 11.1974 12.1677 10.0002 12.1677C8.80307 12.1677 7.83257 11.1973 7.83257 10C7.83257 8.80287 8.80307 7.8324 10.0002 7.8324C11.1974 7.8324 12.1679 8.80287 12.1679 10ZM13.8346 10C13.8346 12.1177 12.1179 13.8344 10.0002 13.8344C7.8826 13.8344 6.16591 12.1177 6.16591 10C6.16591 7.88243 7.8826 6.16574 10.0002 6.16574C12.1179 6.16574 13.8346 7.88243 13.8346 10Z"
      fill="black"
      fillOpacity="0.45"
    />
  </svg>
);