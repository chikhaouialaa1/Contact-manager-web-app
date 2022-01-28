import React from 'react'
import './Ecom.css'
import { Button, Input , Tooltip, Tabs} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Produits from './produits/Produit';
import AdminHeader from '../AdminHeader/AdminHeader';
import ProduitDescription from './ProduitDescription/ProduitDescription';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function ProduitProduits({produits, deleteProduit}) {
    console.log(produits)
    return (
        <>
        <section id="products">
    <div class="container">
        <div class="d-flex flex-row">
            <div class="text-muted m-2" id="res">Showing {produits.length} produits</div>
            <div class="ml-auto mr-lg-4">
                <div id="sorting" class="border rounded p-1 m-1"> <span class="text-muted">Sort by</span> <select name="sort" id="sort">
                        <option value="popularity"><b>Popularity</b></option>
                        <option value="prcie"><b>Price</b></option>
                        <option value="rating"><b>Rating</b></option>
                    </select> </div>
            </div>
        </div>
        <div class="row">

        {produits.map((object, i) => 
            <div class="col-lg-4 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div class="card"> <img class="card-img-top" src={object.url}/>
                    <div class="card-body">
                        <h5><b>{object.name}</b> </h5>
                        <div class="d-flex flex-row my-2">
                            <div class="text-muted">₹{object.prix}/loaf</div>
                            <div class="ml-auto"> <button class="border rounded bg-white sign"><span class="fa fa-plus" id="orange"></span></button> <span class="px-sm-1">1 loaf</span> <button class="border rounded bg-white sign"><span class="fa fa-minus" id="orange"></span></button> </div>
                        </div> <button class="btn w-100 rounded my-2">Add to cart</button>
                    </div>
                </div>
            </div>
           )}
        </div>
    </div>
</section>
        </>
    )
}

export default ProduitProduits
