import { ParserField } from 'graphql-js-tree';

export interface FieldProps {
  parentNode: ParserField;
  node: ParserField;
  inputOpen: boolean;
  outputOpen: boolean;
  onInputClick: () => void;
  onOutputClick: () => void;
  inputDisabled?: boolean;
  outputDisabled?: boolean;
  isLocked?: boolean;
  parentNodeTypeName: string;
  indexInParentNode: number;
  onDelete: () => void;
}
