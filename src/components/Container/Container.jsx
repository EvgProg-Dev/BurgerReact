import style from "./Container.module.css";
import classNames from "classnames";

const Container = ({ children, className }) => (
    <div className={classNames(style.container, className)}>
        {children}
    </div>
);

export default Container;
