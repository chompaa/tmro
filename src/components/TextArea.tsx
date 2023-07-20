import { Ref } from "preact";
import { forwardRef, useEffect, useRef, useState } from "preact/compat";

export const TextArea = forwardRef(function TextArea(
  {
    children,
    styles,
    minRows = 1,
    maxRows = 5,
    ...props
  }: {
    children?: string;
    styles?: string;
    minRows: number;
    maxRows: number;
    [x: string]: any;
  },
  ref: Ref<HTMLTextAreaElement>
) {
  const [rows, setRows] = useState<number>(minRows);

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = () => {
    const textArea = textAreaRef.current;

    if (!textArea) {
      return;
    }

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

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <>
      <textarea
        class={`height-auto box-border w-full resize-none overflow-hidden bg-inherit leading-6 
             outline-none disabled:text-current ${styles}`}
        ref={(node) => {
          textAreaRef.current = node;

          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        rows={rows}
        spellCheck={false}
        onChange={handleChange}
        {...props}
      >
        {children}
      </textarea>
    </>
  );
});
