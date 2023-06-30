import { Ref } from "preact";
import { TargetedEvent, forwardRef, useState } from "preact/compat";

const TextArea = forwardRef(function TextArea(
  {
    children,
    styles,
    placeholder,
    defaultValue,
    onKeyDown,
    onBlur,
    onBlurCapture,
    minRows,
    maxRows,
    maxLength,
  }: {
    children?: string;
    styles?: string;
    placeholder?: string;
    defaultValue?: string;
    onKeyDown?: (e: KeyboardEvent) => void;
    onBlur?: (e: TargetedEvent<HTMLTextAreaElement>) => void;
    onBlurCapture?: (e: TargetedEvent<HTMLTextAreaElement>) => void;
    minRows: number;
    maxRows: number;
    maxLength: number;
  },
  ref: Ref<HTMLTextAreaElement>
) {
  const [rows, setRows] = useState<number>(minRows);

  const handleChange = (e: TargetedEvent<HTMLTextAreaElement>) => {
    const textArea = e.target as HTMLTextAreaElement;

    const { lineHeight } = window.getComputedStyle(textArea);

    const previousRows = textArea.rows;
    textArea.rows = minRows;

    const currentRows = ~~(textArea.scrollHeight / parseFloat(lineHeight));

    if (currentRows === previousRows) {
      textArea.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      textArea.rows = maxRows;
      textArea.scrollTop = textArea.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
  };

  return (
    <textarea
      class={`height-auto box-border w-full resize-none overflow-hidden bg-inherit leading-6 
             outline-none ${styles}`}
      ref={ref}
      rows={rows}
      spellCheck={false}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={handleChange}
      defaultValue={defaultValue}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onBlurCapture={onBlurCapture}
    >
      {children}
    </textarea>
  );
});

export default TextArea;
