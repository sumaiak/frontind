//1.6 Using map and filter to Create Dynamic Table-Rows
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
function generateTable(cars) {
    const tableRows = cars.map(car => {
        return `
            <tr>
                <td>${car.id}</td>
                <td>${car.year}</td>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.price}</td>
            </tr>
        `;
    });

    const tableHtml = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Year</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${tableRows.join('')}
            </tbody>
        </table>
    `;

    return tableHtml;
}
