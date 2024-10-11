import { ChangeEvent, forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
  errorDiv?: string;     
  errorMsg?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref: Ref<HTMLInputElement>) => {
  return (
    <div className="mb-3">
      <label htmlFor="{props.name}" className="form-label">
        {props.title}
      </label>
      <input
        type={props.type}
        className={props.className}
        id={props.name}
        ref={ref}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        value={props.value}
      />
      <div className={props.errorDiv}>{props.errorMsg}</div>
    </div>
  )
})

export default Input;