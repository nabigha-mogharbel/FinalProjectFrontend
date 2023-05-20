import Styles from "./index.module.css"
function Loader() {
    return (  
    <div className={Styles.loaderDiv}>
        <span className={Styles.loader}>
          <span></span>
          <span></span>
        </span>
      </div>);
}

export default Loader;
