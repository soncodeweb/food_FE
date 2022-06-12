import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "../../style/product/productDetail.scss";
import { useProduct } from "../../context/productContext";
function ProductDetail({ open = false, handleClose = () => {}, idProduct = 0 }) {
  // return (
  //   <div className="productDetail-wrapper">
  //     <div className="productDetails">
  //       <i className="fa-solid fa-xmark closeDetail"></i>
  //       <div className="image-details">
  //         <div className="thumbail">
  //           <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" />
  //         </div>
  //         <div className="other-thumbails">
  //           <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" />
  //           <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" />
  //           <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" />
  //           {/* <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" /> */}
  //         </div>
  //       </div>
  //       <div className="infor-details">
  //         <h2 className="title-product">Cas Meque Metus</h2>
  //         <div className="rating">
  //           <i className="fa-solid fa-star star"></i>
  //           <i className="fa-solid fa-star star"></i>
  //           <i className="fa-solid fa-star star"></i>
  //           <i className="fa-solid fa-star star"></i>
  //           <i className="fa-solid fa-star star"></i>
  //         </div>
  //         <div className="money">
  //           <span className="discount">$90.000</span>
  //           <span className="price">$100.000</span>
  //         </div>
  //         <span className="sortDesc">Brassica oleracea</span>
  //         <div className="form-group">
  //           <input type="number" step={1} min={1} defaultValue={1} className="quantity" />
  //           <button className="btnAddProduct">+ ADD TO CART</button>
  //           <div className="heart">
  //             <i className="far fa-heart icon-heart"></i>
  //             <span className="title-heart">Add To Wish List</span>
  //           </div>
  //         </div>
  //         <span className=" border-solid border-[#efefef] w-full inline-block border-[0.5px]"></span>
  //         <div className="description">
  //           <span className="title-desc">Description: </span>
  //           Cauliflower is one of several vegetables in the species Brassica oleracea in the genus Brassica, which is in the Brassicaceae (or mustard)
  //           family. It is an annual plant that reproduces by seed. Typically, only the head is eaten – the edible white flesh sometimes called "curd"
  //         </div>
  //         <span className="border-solid border-[#efefef] w-full inline-block border-[0.5px]"></span>
  //         <div className="share">
  //           <h3>SHARE</h3>
  //           <ul className="social-icons">
  //             <li>
  //               <a href="">
  //                 <i className="fab fa-facebook-f"></i>
  //               </a>
  //             </li>
  //             <li>
  //               <a href="">
  //                 <i className="fab fa-twitter"></i>
  //               </a>
  //             </li>
  //             <li>
  //               <a href="">
  //                 <i className="fab fa-pinterest"></i>
  //               </a>
  //             </li>
  //             <li>
  //               <a href="">
  //                 <i className="fab fa-google-plus-g"></i>
  //               </a>
  //             </li>
  //             <li>
  //               <a href="">
  //                 <i className="fab fa-linkedin-in"></i>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const [idProduct] = useProduct();
  const [data, setData] = useState({});
  useEffect(() => {
    const callData = async () => {
      const result = await axios({
        method: "post",
        url: "http://localhost/food_backEnd/admin/product/show.php",
        data: {
          idProduct: idProduct,
        },
      }).catch((err) => console.log(err));
      setData(result.data.data);
    };
    callData();
    console.log("detail Effect: ", idProduct);
  }, [idProduct]);

  // console.log(data);

  if (typeof document === "undefined") return <div className={`productDetail-wrapper`}></div>;
  return ReactDOM.createPortal(
    <div className={`productDetail-wrapper ${open ? "" : "hidden"}`}>
      <div className="productDetails" data-id={data.idProduct}>
        <i className="fa-solid fa-xmark closeDetail" onClick={handleClose}></i>
        <div className="image-details">
          <div className="thumbail">
            <img src={data.thumbail} alt="" />
          </div>
          <div className="other-thumbails">
            <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" />
            <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" />
            <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" />
            {/* <img src="https://easyfreshmarket.com/image/cache/catalog/products/1/2-800x800.jpg" alt="" className="other-thumbail" /> */}
          </div>
        </div>
        <div className="infor-details">
          <h2 className="title-product">{data.name}</h2>
          <div className="rating">
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
            <i className="fa-solid fa-star star"></i>
          </div>
          <div className="money">
            {/* <span className="discount">${data.discount}</span>
            <span className="price">${data.price}</span> */}

            {data?.discount && data?.discount !== "null" && data?.discount !== "0" ? (
              <span className="discount">${data.discount}</span>
            ) : (
              <span className="price-noDiscount text-black font-semibold text-2xl">${data.price}</span>
            )}

            {data?.discount && data?.discount !== "null" && data?.discount !== "0" ? <span className="price">${data.price}</span> : ""}
          </div>
          <span className="sortDesc">{data.sortDesc}</span>
          <div className="form-group">
            <input type="number" step={1} min={1} defaultValue={1} className="quantity" />
            <button className="btnAddProduct">+ ADD TO CART</button>
            <div className="heart">
              <i className="far fa-heart icon-heart"></i>
              <span className="title-heart">Add To Wish List</span>
            </div>
          </div>
          <span className=" border-solid border-[#efefef] w-full inline-block border-[0.5px]"></span>
          <div className="description">
            <span className="title-desc">Description: </span>
            {data.description}
          </div>
          <span className="border-solid border-[#efefef] w-full inline-block border-[0.5px]"></span>
          <div className="share">
            <h3>SHARE</h3>
            <ul className="social-icons">
              <li>
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
}

export default ProductDetail;
