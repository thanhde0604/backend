import React, { FC, useEffect } from "react";
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

interface Props {
}

const Table: FC<Props> = (props) => {
    useEffect(() => {
        // Dữ liệu của cửa hàng bán game
        const gameStoreData = [
            {
                id: 1,
                name: "The Witcher 3: Wild Hunt",
                genre: "RPG",
                price: "$29.99",
                releaseDate: "19/05/2015",
            },
            {
                id: 2,
                name: "Grand Theft Auto V",
                genre: "Hành động",
                price: "$49.99",
                releaseDate: "17/09/2013",
            },
            {
                id: 3,
                name: "Red Dead Redemption 2",
                genre: "Hành động",
                price: "$59.99",
                releaseDate: "26/10/2018",
            },
            {
                id: 3,
                name: "Red Dead Redemption 2",
                genre: "Hành động",
                price: "$59.99",
                releaseDate: "26/10/2018",
            },
            {
                id: 3,
                name: "Red Dead Redemption 2",
                genre: "Hành động",
                price: "$59.99",
                releaseDate: "26/10/2018",
            },
            {
                id: 3,
                name: "Red Dead Redemption 2",
                genre: "Hành động",
                price: "$59.99",
                releaseDate: "26/10/2018",
            },
            // Thêm các bản ghi khác tại đây
        ];

        const table = new DataTable('#myTable', {
            data: gameStoreData, // Dữ liệu của cửa hàng bán game
            columns: [
                { data: 'name', title: 'Tên Game' },
                { data: 'genre', title: 'Thể Loại' },
                { data: 'price', title: 'Giá' },
                { data: 'releaseDate', title: 'Ngày Phát Hành' },
            ],
        });

        return () => {
            table.destroy();
        };
    }, []);

    return (
        <table className="table table-bordered table-striped" id="myTable">
            <thead className="thead-dark">
                <tr>
                    <th className="text-center">Tên Game</th>
                    <th className="text-center">Thể Loại</th>
                    <th className="text-center">Giá</th>
                    <th className="text-center">Ngày Phát Hành</th>
                </tr>
            </thead>
        </table>
    );
}

export default Table;
