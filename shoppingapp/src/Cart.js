import {React,Component} from 'react';


class Cart extends Component{
    render(){
    return(
        this.props.item.map((item)=>{
            return(
                                   
                <tr>
                    <td>{item.Itemname}</td>
                    <td>{item.price}</td>
                </tr>
                
               
            )
        }
    )
    )
    }
}
export default Cart;
