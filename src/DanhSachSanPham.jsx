import React from 'react'

const DanhSachSanPham = (props) => {
    const {sanPham,themVaoGioHang} = props;
  return (
    <div>
        <div className="row">
            {sanPham.map((prod,index)=> {
                return <div className='col-3 mt-2' key={index}>
                    <div className='card'>
                        <img src={prod.img} alt="..." />
                        <div className='card-body'>
                            <h3>{prod.name}</h3>
                            <p>{prod.price}</p>
                            <button onClick={()=>{
                                themVaoGioHang(prod)
                            }} className='btn btn-dark'>
                                Thêm vào giỏ hàng <i className='fa fa-cart-plus'></i>
                            </button>
                        </div>
                    </div>
                 </div> 
            })}
        </div>
    </div>
  )
}

export default DanhSachSanPham