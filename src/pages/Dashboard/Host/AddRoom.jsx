import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";

export default function AddRoom() {

    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: null,
        key: 'selection'
    })


    // Date Range Handler

    const handleDates = item => {
        console.log(item)
        setDates(item.selection)
    }

    // Form Handlar

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const form=e.target;
        const location=from.location.value;
        const category=form.category.value;
        const title=form.title.value;
        const to='';
        const from='';
        const price=form.price.value;
        const guests=form.total_guest.value;




    }


    return (
        <div>
            <AddRoomForm dates={dates} handleDates={handleDates} handleSubmit={handleSubmit} />

        </div>
    )
}
