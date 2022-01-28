import React from 'react'
import {Link} from 'react-router-dom'
import {HomeOutlined} from '@ant-design/icons';
import {SideBarData} from './SideBarData'
import './ecom.css'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

function AdminSideBar(categories) {
    console.log(categories.categories)
    let x
    if(categories){
        categories.categories.map((object, i) => 
        x=<div class="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">{object.name}</label> </div>
        )
    }
    return (
        
        <>
        <section id="sidebar">
    <p> Home | <b>All Breads</b></p>
    <div class="border-bottom pb-2 ml-2">
        <h4 id="burgundy">Filters</h4>
    </div>
    <div class="py-2 border-bottom ml-3">
        <h6 class="font-weight-bold">Categories</h6>
        <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
        {categories.categories.map((object, i) => 
            <div class="form-group"> <input type="checkbox" id="artisan"/> <label for="artisan">{object.name}</label> </div>
        )}
          </form>
    </div>
    
    <div class="py-2 ml-3">
        <h6 class="font-weight-bold">Top Offers</h6>
        <div id="orange"><span class="fa fa-minus"></span></div>
        <form>
            <div class="form-group"> <input type="checkbox" id="25off"/> <label for="25">25% off</label> </div>
            <div class="form-group"> <input type="checkbox" id="5off"/> <label for="5off" id="off">5% off on artisan breads</label> </div>
        </form>
    </div>
</section>
        </>
        
    )
}

export default AdminSideBar
