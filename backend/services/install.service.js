//Import query function from the db.config.js file
import {query} from "../config/db.config.js";
//Importing fs module
import * as fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
//Write a function to create the database tables
export async function installService() {
  // Create a variable to hold the path to the sql file  
  const queryfile = __dirname + '/sql/initial-queries.sql';
  // console.log(queryfile);
  // Temporary variable, used to store all queries, the return message and the current query
  let queries = [];
  let finalMessage = {};
  let templine = '';
  // Read the sql file 
  const lines = await fs.readFileSync(queryfile, 'utf-8').split('\n');
  console.log(lines, '\n')
  // Create a promise to handle the asynchronous reading of the file and storing of the queries in the variables  
  const executed = await new Promise((resolve, reject) => {
    // Iterate over all lines
    lines.forEach((line) => {
      if (line.trim().startsWith('--') || line.trim() === '') {
        // Skip if it's a comment or empty line
        // console.log(line)
        return;
      }
      templine += line;
    //   console.log(templine, '\n')
      if (line.trim().endsWith(';')) {
        // If it has a semicolon at the end, it's the end of the query
        // Prepare the individual query 
        const sqlQuery = templine.trim();
        // console.log(sqlQuery)
        // Add query to the list of queries 
        queries.push(sqlQuery);
        // console.log(queries)
        templine = '';
      }
    });
    resolve("Queries are added to the list");
  });
  //Loop through the queries and execute them one by one asynchronously  
  for (let i = 0; i < queries.length; i++) {
    // console.log(queries)
    try {
      const result = await query(queries[i]);
      console.log("Table created");
    } catch (err) {
    //   console.log("Err Occurred - Table not created");
      finalMessage.message = "Not all tables are created";
    }
  }
  // Prepare the final message to return to the controller 
  if (!finalMessage.message) {
    finalMessage.message = "All tables are created";
    finalMessage.status = 200;
  } else {
    finalMessage.status = 500;
  }
  // Return the final message
  return finalMessage;
}