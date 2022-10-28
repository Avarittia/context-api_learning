import { useContext } from 'react'
import { Button, Stack } from 'react-bootstrap'
import CartContext from '../Context/CartContext'
import storeItems from '../data/data.json'
import { formatCurrency } from '../Utilities/formatCurrency'

export default function CartItem({id, quantity}) {
    const { removeFromCart } = useContext(CartContext)
    const item= storeItems.find(i=>i.id === id)
    console.log(item)
    if (item==null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div> {formatCurrency(item.price * quantity)}</div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </Stack>
    )
}
