import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import { useSelector } from "react-redux";

function PaginationButton(props) {
    const totalPages = useSelector((state) => {
        return state.users.pages.totalPages
    });

    const handleChange = (event, value) => {
        console.log(value);
        props.setPageNumber(value);
    };
    return (
        <div style={{ margin: "16px auto" }}>
            <Pagination count={totalPages} shape="rounded" color="primary" onChange={handleChange} />
        </div>
    );
}

export default PaginationButton;