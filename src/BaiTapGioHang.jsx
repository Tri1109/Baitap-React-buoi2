import React, { useState } from 'react'
import GioHang from './GioHang';
import DanhSachSanPham from './DanhSachSanPham';

const sanPham = [
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
];

const BaiTapGioHang = () => {
    let [mangGioHang, setMangGioHang] = useState([
        { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 ,quantity:1},
        { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000,quantity:1 },
    ])

    const themVaoGioHang = (prodClick) => {
        let prodCart = {...prodClick,quantity:1}
        let prod = mangGioHang.find(p => p.id === prodClick.id);
        if(prod){ 
            prod.quantity += 1 
        }else {
            mangGioHang.push(prodCart) 
        }
        mangGioHang = [...mangGioHang]
        setMangGioHang(mangGioHang)
    }

    const xoaSanPham = (idClick) => {
        let index = mangGioHang.findIndex(p => p.id === idClick);
        if (index != -1){
            mangGioHang.splice(index,1);
        }
        setMangGioHang([...mangGioHang])

    }

    const thayDoiSoLuong = (idClick, num) => {
        let prodCart = mangGioHang.find(p => p.id === idClick);
        if (prodCart) {
            prodCart.quantity += num;
            if (prodCart.quantity < 1) {
                prodCart.quantity = 1;
            }
        }
        setMangGioHang([...mangGioHang])

    }
  return (
    <div className="container">
        <h3>Giỏ hàng</h3>
        <GioHang mangGioHang={mangGioHang} xoaSanPham={xoaSanPham} thayDoiSoLuong={thayDoiSoLuong} />
        <h3>Danh sách sản phẩm</h3>
        <DanhSachSanPham sanPham={sanPham} themVaoGioHang={themVaoGioHang} />
    </div>
  )
}

export default BaiTapGioHang