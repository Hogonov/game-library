import baseStyles from './index.module.scss'
export const Arrow = ({direction = 'right', styles, props}) => {
    return <i className={`${baseStyles.arrow} ${baseStyles[direction]} ${styles}`} {...props}/>
}