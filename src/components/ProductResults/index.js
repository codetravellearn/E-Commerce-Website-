import React, { useEffect } from 'react';
import { fetchProductsStart } from "./../../redux/Products/products.actions";
import {useHistory, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Product from './Product';
import FormSelect from'./../Forms/FormSelect';
import './styles.scss';

const mapState = ({ productsData }) => ({
    products:productsData.products
});

const ProductResults = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {filterType} = useParams();
    const { products } = useSelector(mapState);
    
    useEffect(() => {
        dispatch(
            fetchProductsStart({ filterType })
        )
    }, [ filterType ]);

    const handleFilter = (e) => {
      const nextFilter= e.target.value;
      history.push(`/search/${nextFilter}`);
    };

    if (!Array.isArray(products)) return null;

    if (products.length < 1) {
        return (
          <
            div className="products">
            <p>
              No search results.
            </p>
          </div>
        );
      }

      const configFilters ={
        defaultValue: filterType,
        options:[{
          name:'Show All',
          value:''
        },{
          name:'Mens',
          value: 'mens'
        }, {
          name:'Womens',
          value:'womens'
        }],
        handleChange:handleFilter
      };

    return(
        <div className="products">
            <h1>
                Browse Products
            </h1>

            <FormSelect {...configFilters}/>

            <div className="productResults">
            {products.map((product, pos) => {
               const {productThumbnail, productName, productPrice} = product;
               if(!productThumbnail || !productName
                 || typeof productPrice === 'undefined') return null;
               
                 const configProduct ={
                    productThumbnail,
                    productName, 
                    productPrice
                 };
                return(
                    <Product {...configProduct} />
                );
            })}
        </div>
    </div>
    );
    
};
export default ProductResults;