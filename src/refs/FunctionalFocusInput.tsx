import * as React from 'react';

type InputProps = React.HTMLProps<HTMLInputElement>;

export default React.forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => <input type="text" ref={ref} {...props} />);
