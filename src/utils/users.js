const users =[]

const addUser =({id,username,room})=>{
 
     //clean the data
     
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if(!username  || !room){
        return{
            error:'Username and Room are Required!'
        }
    }
    //check the existing user

    const existingUser = users.find((user) => {
        return user.room === room  &&  user.username === username
  
  })

   //validate username
     if (existingUser) {
         return{
             error:'Username is in use!'
         }
     }

     //store user
 
     const user={ id, username, room }
     users.push(user)
     return{user}
} 

const removeUser = (id) => {
    const index = users.findIndex((user)=> user.id === id)

    if(index !== -1){
        return users.splice(index,1)[0]
    }
}
const getUser =(id)=>{
    return users.find((user) => user.id===id)
}

const getUsers=(room)=>{
    room = room.trim().toLowerCase()
    return users.filter((user)=> user.room ===room)
}





// const user=getUser(19)
// console.log(user)

// const userList = getUsers('surat')
// console.log(userList)

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsers

}