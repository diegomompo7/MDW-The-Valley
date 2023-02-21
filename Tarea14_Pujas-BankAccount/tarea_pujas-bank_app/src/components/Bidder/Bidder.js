import './Bidder.css'

const Bidder = ({name, addBid}) => {

    return (
        <button className='button-addBid' onClick={addBid}>{name} quiere pujar 5€</button>
    )
}

export default Bidder;