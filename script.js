//built with help from Greg Healy's youtube 
//https://www.youtube.com/watch?v=kaOF7n9LYsI&feature=youtu.be&ab_channel=GregHealy

const baseURL = `http://flip1.engr.oregonstate.edu:63456/`;

const makeTable = (allRows) => {
    //iterate over rows
        //add table data cells each with
        //add the buttons
   baseURL
}

const deleteTable = (allRows) => {
    //
}

const makeHeaderRow = (row) => {
    //use data in row to create the table data cells
    //make the form that wraps the table data cells
    //within form append each cell 
}

const makeRow = (rowData, headerRow = false) => {
  //call makeCell
}
const makeCell = (contents, headerRow = false) => {
    //create a table data cell
    //call makeInput
    // for (var i = 0; i < TABLECELLS.length; i++) {
    //     // creates a table row
    //     var row = document.createElement("tr");
    //       for (var things in TABLECELLS[i]) {
    //       // Create a <td> element and a text node, make the text
    //       // node the contents of the <td>, and put the <td> at
    //       // the end of the table row
    //       var cell = document.createElement("td");
    //       var cellText = document.createTextNode(TABLECELLS[i][things]);
    //       cell.appendChild(cellText);
    //       row.appendChild(cell);
    //     }
    makeInput();
};

const makeInput = (type, name, value) => {
    //creates teh form input
}

const makeButton = (name, txt) => {
}

const makeRadioInputs = (name, value) => {
    
}

const enableRow = () => {
    
}
const disbleInputs = (rowElement) => {

};

const toggleUpdateButton = (rowElemen) => {
    
}

const getData = async ()  =>{
    var req = new XMLHttpRequest();   
    req.open('GET', baseURL, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);
        console.log(JSON.stringify(response));
      }});
    req.send(JSON.stringify(null));
    //event.preventDefault();

}

document.querySelector('#addForm').onsubmit = async (event) => {

}

// document.querySelector('#workoutsTable').onclick = async (event) => {

// }

document.querySelector('#reset-table').onclick = async (event) => {
//make quert to dbto rest
}

(async () => {
    let tableData = await getData();
    //const makeTable: (rows: any) => void
    makeTable(tableData);
})();

const table = document.getElementById("workoutsTable");
// table.addEventListener('click', (event) => {
//     let target = event.target;
//     //if it's an update button, send a PUT request to server
//     //if it's a delete button, send a DELETE request to server
    
//     //delete table
//     //make table 
// });

//look at ID and then get each of the values, packag eup in an object to send to server
//listen to response from server
//make the table again
const onUpdate = () => {}
const onDelete = () => {}
