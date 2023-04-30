// Define the data to send to the server
let data = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'running', 'cooking']
  };
  
  let jsonData = JSON.stringify(data);
  
  let xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let responseData = JSON.parse(xhr.responseText);
      
      console.log(responseData);
    }
  };
  
  xhr.open('POST', '/api/data', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  xhr.send(jsonData);
  