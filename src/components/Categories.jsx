import react from 'react';
import "./categories.css";
import { useNavigate } from 'react-router-dom';

const categories=[
    {name:"Anarkali",image:"/anarkali.png",slug:"anarkali"},
    {name:"Sarees",image:"/saree.png",slug:"sarees"},
    {name:"Lehenga",image:"/lehenga.png",slug:"lehenga"},
    {name:"Kurti",image:"/kurti.png",slug:"kurti"},
    {name:"Party Wear",image:"/partywear.png",slug:"partywear"},
    {name:"Best Seller",image:"/BestSeller.png",slug:"bestseller"},
    {name:"Summer Kurti",image:"/Summerkurti.png",slug:"summerkurti"},
    {name:"Gown",image:"/Gown.png",slug:"gown"},
    {name:"Sharara Set",image:"/ShararaSet.png",slug:"shararaset"},
    {name:"Total Products",image:"/TotalProducts.png",slug:"totalproducts"}
];
export default function Categories(){
    const navigate=useNavigate();
    return(
        <section className='categories'>
            <h2>Shop By Category</h2>

            <div 
            className='category-grid'>
                {categories.map((item,index)=>(
                    <div className="category-card"
                    key={item.slug}
                    onClick={()=> navigate( `/category/${item.slug}`)}
                    >
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                    )
                )}
          

            </div>
        </section>
    );
}