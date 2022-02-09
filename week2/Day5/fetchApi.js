async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const {headers, rows} = await response.json();
    console.log(response)

    //clear table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    //populate the headers
    for (const headerText of headers) {
        const headerElement = document.createElement('th');

        headerElement.textContent = headerText;
        tableHead.querySelector('tr').appendchild(headerElement);
        
    }

    //populate the rows
    for (const row of rows) {
        const rowElement = document.createElement("tr");

        for (const cellText of row) {
            const cellElement = document.createElement("td")
        }

        tableBody.appendchild(rowElement);
    }
    

}
loadIntoTable(
  "https://jsonplaceholder.typicode.com/todos/1",
  document.querySelector("table")
);