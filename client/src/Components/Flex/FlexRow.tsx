import { FlexProps } from '../../Models/index';

const FlexRow = (props: FlexProps) => {
  return (
    <div className={`d-flex w-100 ${props.className}`}>{props.children}</div>
  );
};

export default FlexRow;
