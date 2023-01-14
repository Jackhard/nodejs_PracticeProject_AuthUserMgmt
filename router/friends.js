const express = require('express');

const router = express.Router();

var friends = {
    "johnsmith@gamil.com": {"firstName": "John","lastName": "Doe","DOB":"22-12-1990"},
    "annasmith@gamil.com":{"firstName": "Anna","lastName": "smith","DOB":"02-07-1983"},
    "peterjones@gamil.com":{"firstName": "Peter","lastName": "Jones","DOB":"21-03-1989"}
};


// GET request: Retrieve all friends
router.get("/",(req,res)=>{
    res.send(JSON.stringify(friends,null,4));

});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email",(req,res)=>{
		const email = req.params.email;
		let friend = friends[email]
		
		
	// Update the code here
  res.send(friend)//This line is to be replaced with actual return value
});


// POST request: Add a new friend
router.post("/",(req,res)=>{
  // Update the code here
  if (req.body.email){
	  friends[req.body.email] = {
		  "firstName": req.body.firstName,
		  "lastName": req.body.lastName,
		  "DOB": req.body.DOB
	  }
	  
  }
  
  
  res.send("Thr user"+(' ')+ (req.body.firstName) + " has been added!");//This line is to be replaced with actual return value
  
});

////////////////////////////////////
/*
router.put("/:email", function (req, res) {
    const email = req.params.email;
    let friend = friends[email];
	
    if (friend) { //Check is friend exists
       
	   let DOB = req.body.DOB;
		
        //Add similarly for firstName
        //Add similarly for lastName

        //if DOB the DOB has been changed, update the DOB 
        if(DOB) {
            friend["DOB"] = req.body.DOB
			res.send (friend["DOB"]);
        }
        //Add similarly for firstName
        //Add similarly for lastName
        friends[email]=friend;
        res.send(("Friend ") + req.body["DOB"] + ("with the email ")+email +(" DOB = ")+ friend["DOB"] + (" updated."));
    }
    else{
        res.send("Unable to find friend!");
    }
  });
 */
 //////////////////////////////////



// PUT request: Update the details of a friend with email id ПРОЧЕКАТЬ КОД ПОТОМ

router.put("/:email", (req, res) => {
  
  const email = req.params.email;
  let friend = friends[email]
  if (friends[email]) {
	//Check is friend exists
	//const email = req.body.email;
/*	
	if (friend) {
		friend[email] === email;
		
	}
	res.send(`Friend email ${email} exists.`);
  }
  else {
*/ 
//   res.send ([req.params.firstName])	
   let friend = friends[email]

  let DOB = req.body.DOB;
  //Add similarly for firstName
  let firstName = req.body.firstName;
  
   //Add similarly for lastName
  let lastName = req.body.lastName;
         //if DOB the DOB has been changed, update the DOB 
	if (DOB){
		friend["DOB"] = DOB
	}
	//Add similarly for firstName
	if (firstName) {
		freind["firstName"] = firstName
	}
	//Add similarly for lastName
	if (lastName){
		friend["lastName"] = lastName
	}

	friends[email]=friend;
	res.send(`Friend with the email ${email} updated.`)
  }
/*  
  else {
	  res.send("Unable to find friend")
	  
  //}
  }
 // res.send("Yet to be implemented")//This line is to be replaced with actual return value
*/

});





// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  // Update the code here
  const email = req.params.email;
  if (email) {
	  
	  delete friends[email]
  }
  
  res.send(`Friend with the email ${email} deleted.`)//This line is to be replaced with actual return value
});

module.exports=router;
