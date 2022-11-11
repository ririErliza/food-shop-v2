import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="styles.container">
        <h1 className="styles.title">THE BEST LALAPAN IN TOWN</h1>
        <p className="styles.desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cupiditate commodi repudiandae repellat dignissimos, deserunt rem eius, aliquam sunt cum maxime asperiores molestiae omnis, sit magnam explicabo voluptatem sapiente voluptatibus?
        </p>

        <div className="styles.wrapper">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
    </div>
  )
}

export default ProductList