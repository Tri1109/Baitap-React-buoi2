import React from 'react'

const GioHang = (props) => {
    const {mangGioHang, xoaSanPham, thayDoiSoLuong} = props;
  return (
    <div>
        <table
            className="table table-primary"
        >
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {mangGioHang.map((itemCart,index)=>{
                    return <tr key={index}>
                        <td>{itemCart.id}</td>
                        <td>{itemCart.name}</td>
                        <td><img src={itemCart.img} alt="..." width={50} /></td>
                        <td>{itemCart.price}</td>
                        <td>
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            thayDoiSoLuong(itemCart.id,1)
                        }}>+</button>
                        {itemCart.quantity}
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            thayDoiSoLuong(itemCart.id,-1)
                        }}>-</button>
                        </td>
                        <td>{itemCart.price * itemCart.quantity}</td>
                        <td>
                        <button className='btn btn-danger' onClick={()=>{
                            xoaSanPham(itemCart.id)
                        }}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
    
  )
}

export default GioHang