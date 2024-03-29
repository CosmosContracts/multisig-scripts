const csv = require("csv-parser");
const fs = require("fs");

var delegation = []
fs.createReadStream("new_delegations.csv")
  .pipe(csv())
  .on("data", (row) => {
    if (row.amount == "" || row.amount == undefined) {
      return;
    }
    let obj = {
      "@type": "/cosmos.staking.v1beta1.MsgDelegate",
      delegator_address: "juno190g5j8aszqhvtg7cprmev8xcxs6csra7xnk3n3",
      validator_address: row.address,
      amount: { denom: "ujuno", amount: (parseInt(row.amount)*1000000).toString() },
    };
    delegation.push(obj)
  })
  .on("end", () => {
    console.log(JSON.stringify(delegation))
  });
