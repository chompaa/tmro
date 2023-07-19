import { Ref } from "preact";
import {
  TargetedEvent,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "preact/compat";

const TextArea = forwardRef(function TextArea(
  {
    children,
    styles,
    active = true,
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
    active?: boolean;
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
             outline-none ${styles}`}
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
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={defaultValue}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        onBlurCapture={onBlurCapture}
        disabled={!active}
      >
        {children}
      </textarea>
    </>
  );
});

export default TextArea;
