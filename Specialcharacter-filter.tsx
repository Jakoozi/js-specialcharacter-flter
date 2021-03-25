import React, { useState } from 'react';


function HandleGroupNameOnKeyDown() {


    const [cooperativeGroupName, setCooporativeGroupName] = useState("");




    function groupNameKeyDown(event: any){
       
        const backSpaceKeyCode = 8;
        const spaceBar = 32;

        const alphabetKeyRange = event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == spaceBar ? true : false;  //this checks if the key is from a-z or a space bar
        const isBackspace = event.keyCode == backSpaceKeyCode ? true : false; //this checks if the key is back space

        alphabetKeyRange && setCooporativeGroupName(cooperativeGroupName + event.key);
        isBackspace && setCooporativeGroupName(cooperativeGroupName.slice(0, -1));

    }


    


  
  return(
      <div>
        <form>
            <label>Group Name</label>
            <input
                value={cooperativeGroupName}
                id='group-name-inupt'
                name='groupName'
                required
                onKeyDown={(e : any) => groupNameKeyDown(e)}
            />
        </form>
      </div>
  )
}


