import baseStyles from './index.module.scss';
export const Arrow = (props) => {
    const {direction = 'right', styles} = props;
    return <i
        className={`${baseStyles.arrow} ${baseStyles[direction]} ${styles}`}
        {...props}
    />;
}; 