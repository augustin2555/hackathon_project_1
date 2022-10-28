//Open Brewery API //

var h1=document.createElement("h1");                              //h1 tag creation with DOM
h1.innerHTML="Open Breweries Information";                        //h1 content value written with DOM
document.body.append(h1);                                         //it will be appended the body of the document

 var div=document.createElement("div");                           //div tag creation with DOM
 document.body.append(div);                                        //it will be appended the body of the document and finally div element has been created with DOM
                                                                    

 function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){     //using function method in DOM and Passing parameters for tag and attributes
    var input=document.createElement(tagname);            //setattribute for create attrname,attrvalue                                         
    input.setAttribute(attrname,attrvalue);                //using setattribute we can create multiple attrname,attrvalue
    input.setAttribute(attrname1,attrvalue1);
    input.setAttribute(attrname2,attrvalue2);                             
    input.style.width="20cm";
    return input;
}

var button=document.createElement("button");         //button tag creation in DOM
button.setAttribute("type","button");                //creating the attrname and attrvalue using setAttribute method in DOM
button.setAttribute("onclick","foo()");                     //using SetAttribute we have creating onclick and event response function name         
button.classList.add("btn","btn-success");                 //classlist is a method to create multiple classes in an element
button.innerHTML="Search";                                //innerHTML is to show the content of the element

var input=createinput("input","class","form-control","placeholder","Type your Search here...","id","main");   //for input element in DOM we are calling function from here and passing the multiple attrnames nad attrvalues

div.append(input,button);        //here parent child append has been initiated
document.body.append(div);       //finally parent element has been appended the body of the document


async function foo(){                 //we are implementing the asyn and await method to fetch the data easier from API instead ofpromise
                                      //await is to handle promise is nothing but promise handler .then and .catch.
    try {                               //try- catch is a error_handler inside the code, during program execution if any error occured it has throw by try to catch and the execution will be terminated abnormally

        var id=document.getElementById("main").value;
        console.log(id);

      var res=await fetch("https://api.openbrewerydb.org/breweries");   ////fetch method in API to extract the values from json object and it is much easier than retrieve the data from API instead of XML Http request 
      var res1=await res.json();                         //await is an alternative keyword for .then and .catch to handle the promise and is very effective than promise method 
                                                         //.json is to returning the array of objects from the given API             
      for( var i=0;i<res1.length;i++){                   //using for loop for iteration the arrays elements inside the array of objects

        console.log(res1[i].name);                       //here we are extracting array of specific data

        if(id=="name"){                                 //we are iniating the if condition to comapre the key of API data as an input
            
           var ul=document.createElement("ul");
           var li=document.createElement("li");                    //creating un_ordered list elements using DOM
           li.innerHTML=`Company Name: ${res1[i].name}`;
           ul.append(li);
           document.body.append(ul);
 
       }else if(id==`brewery type`){

          var ul=document.createElement("ul");
          var li=document.createElement("li");                                //un_ordered list and list element created in DOM
          li.innerHTML=`Brewery Type: ${res1[i].brewery_type}`;               //else if for checking the condition of API data
          ul.append(li);
          document.body.append(ul);
            
        }else if(id==`phone number`){

            var ul=document.createElement("ul");                              //un_ordered list and list element created in DOM
            var li=document.createElement("li");                              //using else if we are comparing the key of an API data 
            li.innerHTML=`Phone Number: ${res1[i].phone}`;
            ul.append(li);
            document.body.append(ul);
              
          }else if(id==`address 2`){

            var ul=document.createElement("ul");                                 //un_ordered list and list element created in DOM
            var li=document.createElement("li");                                //using else if we are comparing the key of an API data
            li.innerHTML=`Address 02: ${res1[i].address_2}`;
            ul.append(li);
            document.body.append(ul);
              
          }else if(id==`address 3`){

            var ul=document.createElement("ul");
            var li=document.createElement("li");                                 //un_ordered list and list element created in DOM
            li.innerHTML=`Addrress 03: ${res1[i].address_3}`;                    //using else if we are comparing the key of an API data
            ul.append(li);
            document.body.append(ul);
              
          }else if(id==`website url`){

            var ul=document.createElement("ul");                                  //un_ordered list and list element created in DOM
            var li=document.createElement("li");                                 //using else if we are comparing the key of an API data
            li.innerHTML=`Website URL: ${res1[i].website_url}`;
            ul.append(li);
            document.body.append(ul);
              
          }else{

            var h4=document.createElement("h4");                                //h4 element created in DOM
            h4.innerHTML=`Invalid Input....!!!`;                                //innerhtml for show the value of the content
            h4.style.color="red";
            document.body.append(h4);                                           //it has append the h4 element to the body of the document
          
          }
        

      }
        
    } catch (error) {                                                           //to handle the uncaught error in the code if any error during exection it will throw by try to catch and it terminates the code abnormally

        console.log("Errorr"+error);
        
    }
 }
  
 
  
    

    











