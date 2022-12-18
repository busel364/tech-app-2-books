import { useAppSelector } from "../../../../app/hooks"
import BookSeatForm from "./BookSeatForm"
import DisplayBooking from "./DisplayBooking"

const BookSeat = () => {

    const booking = useAppSelector(state => state.booking)

    return (
        <div className='pt-5'>
            <h1 className='mt-5 text-center'>Book a Seat</h1>
            <div className='mt-3 py-5 shopItemPage bookSeat container text-center'>
                {booking.firstName.length > 0 ?
                    <DisplayBooking item={booking} /> : <BookSeatForm item={booking} />}
            </div>
        </div>
    )
}

export default BookSeat