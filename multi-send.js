const csv = require("csv-parser");
const fs = require("fs");

var delegation = []
fs.createReadStream("hackjuno_amounts.csv")
  .pipe(csv())
  .on("data", (row) => {
    
    let obj = {
      "@type": "/cosmos.bank.v1beta1.MsgSend",
      from_address: "juno190g5j8aszqhvtg7cprmev8xcxs6csra7xnk3n3",
      to_address: row.address,
      amount: [{ denom: "ujuno", amount: parseInt(parseFloat(row.amount)*1000000).toString() }],
    };
    delegation.push(obj)
  })
  .on("end", () => {
    console.log(JSON.stringify(delegation))
  });
