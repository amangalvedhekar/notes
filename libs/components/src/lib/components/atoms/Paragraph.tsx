import {Paragraph as TamaguiParagraph, ParagraphProps} from 'tamagui';

export const Paragraph =({children, ...rest}:ParagraphProps) => {
  return (<TamaguiParagraph {...rest}>
    {children}
  </TamaguiParagraph>);
}
