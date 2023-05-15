import HeaderBrand from "./HeaderBrand";
import FoodItemImage from "./FoodItemImage";
import GridItemImage from "./GridItemImage";
import EmptyStateImage from "./EmptyStateImage";
import ProductImage from "./ProductImage";
import FooterBrand from "./FooterBrand";


function Image({ type, src }) {
  return (
    <>
        { type === 'header-brand' &&  <HeaderBrand src={src} alt='header-brand' />}
        { type === 'food-item-image' &&  <FoodItemImage src={src} alt='food-item-image' />}
        { type === 'grid-item-image' &&  <GridItemImage src={src} alt='grid-item-image' />}
        { type === 'empty-state-image' &&  <EmptyStateImage src={src} alt='empty-state-image' />}
        { type === 'product-image' &&  <ProductImage src={src} alt='product-image' />}
        { type === 'footer-brand' &&  <FooterBrand src={src} alt='footer-brand' />}
    </>
  )
}

export default Image;