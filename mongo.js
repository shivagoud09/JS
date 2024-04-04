db.createCollection("posts",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["title","body","code"],
            properties:{
                title:{
                    bsonType:"string",
                    description:"title should be a string"
                },
                body:{
                    bsonType:"string",
                    description:"body should be a string"
                },
                code:{
                    bsonType:"int",
                    description:"body should be a integer"

                }
            }
        }
    }
})