import styles from "./ModuleComponent.module.css";


const ModuleComponent = () => {
    return (
        <div>
            <h1 className={styles.moduleHeading}>This a component styled with CSS Module</h1>
        </div>
    );
}

export default ModuleComponent;