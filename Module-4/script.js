let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (index in names) {
    
       let temp_name=names[index].toLowerCase() ;
       if(temp_name[0]=='j'){
           console.log("Good Bye "+names[index]);
        }
        else{
            console.log("Hello "+names[index]);

       }
    }

