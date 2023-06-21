import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const TextArea = ({
  onChange,
  name,
  value,
  label,
  placeholder,
}: Props) => {
  return (
    <div>
      <p>{label}</p>
      <textarea
        className="resize-none pl-3 pt-3 w-full h-24 outline-none border-[1px] box-border border-gray200 rounded-[4px] focus:shadow-[0px_0px_0px_2px_rgba(209,250,229,1)]"
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};