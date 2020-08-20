import React, { useRef, useEffect } from 'react';
import { style } from 'typestyle';
import { Colors } from '@Colors';
import { DOM } from '@Graf/DOM';

const Main = style({
  background: Colors.grey[10],
  color: Colors.grey[0],
  padding: 10,
  fontSize: 12,
  border: 0,
  overflowY: 'hidden',
  resize: 'none',
});

export const Description: React.FC<{ value: string; onChange: (changedValue: string) => void; className: string }> = ({
  onChange,
  value,
  className,
}) => {
  const DescriptionRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (DescriptionRef.current) {
      DescriptionRef.current.style.height = `${DescriptionRef.current.scrollHeight}px`;
    }
  }, [DescriptionRef.current]);
  return (
    <textarea
      rows={1}
      data-gramm_editor="false"
      ref={DescriptionRef}
      placeholder="Put your description here"
      onClick={(e) => e.stopPropagation()}
      onMouseMove={(e) => e.stopPropagation()}
      onMouseDown={(e) => {
        DOM.panLock = true;
      }}
      onFocus={(e) => {
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
        DOM.panLock = true;
      }}
      onBlur={() => {
        DOM.panLock = false;
        if (DescriptionRef.current) {
          onChange(DescriptionRef.current.value);
        }
      }}
      onInput={(e) => {
        DOM.panLock = true;
        e.currentTarget.style.height = 'auto';
        e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
      }}
      className={`${Main} ${className}`}
      defaultValue={value}
    ></textarea>
  );
};