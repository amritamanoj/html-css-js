
  function employee()
  { 
   
    let edetails=[{

      "name":"Amrita Manoj",
      "email":"amrita@gmail.com",
      "password":"123",
      "empid":"E001",
      "designation":"Associate Software Engineer",
      "skills":"Python, C, C++",
      "DOJ":new Date('27-09-2021').toLocaleDateString()
    },
    {
      "name":"Rakesh Kapoor",
      "email":"rakesh@gmail.com",
      "password":"456",
      "empid":"E002",
      "designation":"Senior Software Engineer",
      "skills":"React, Angular, Ruby",
      "DOJ":new Date('01-12-2017').toLocaleDateString()
    },
    {
      "name":"Annmariya Benny",
      "email":"ann@gmail.com",
      "password":"980",
      "empid":"E003",
      "designation":"Associate Analyst",
      "skills":"Python, SQL",
      "DOJ":new Date('02-06-2020').toLocaleDateString()
    },
    {
      "name":"Asif Habeeb",
      "email":"asif@gmail.com",
      "password":"555",
      "empid":"E004",
      "designation":"Cyber Security Specialist",
      "skills":"Python, C, C++, Powershell",
      "DOJ":new Date('05-07-2019').toLocaleDateString()
    },
    {
      "name":"Krishnapriya A",
      "email":"krish@gmail.com",
      "password":"444",
      "empid":"E005",
      "designation":"Cyber Security Specialist",
      "skills":"Python, C, C++, Powershell",
      "DOJ":new Date('05-07-2019').toLocaleDateString()
    }
  ]

  let lsemail=localStorage.getItem('email');
  let lspass=localStorage.getItem('pass');
  var ct=0;
   
  for(let i=0;i<edetails.length;i++)
  {
   if((edetails[i].email==lsemail)&&(edetails[i].password==lspass))
    {
      
      document.getElementById('result-name').innerHTML=edetails[i].name;
      document.getElementById('result-email').innerHTML=edetails[i].email;
      document.getElementById('result-empid').innerHTML=edetails[i].empid;
      document.getElementById('result-skill').innerHTML=edetails[i].skills;
      document.getElementById('result-desig').innerHTML=edetails[i].designation;
      document.getElementById('result-doj').innerHTML=edetails[i].DOJ;
    }
    else
    {
      ct++;
    }
    
  }
  if(ct>4)
    {alert('Wrong credentials!');}
  
  
}

function add(){
  obtained_email=document.getElementById('email').value;
  obtained_pass=document.getElementById('password').value;

  localStorage.setItem("email",obtained_email);
  localStorage.setItem("pass",obtained_pass);

  employee();
}
/*
function search()
{
  console.log('Entered');
  let edetails=[{

    "name":"Amrita Manoj",
    "email":"amrita@gmail.com",
    "password":"123",
    "empid":"E001",
    "designation":"Associate Software Engineer",
    "skills":"Python, C, C++",
    "DOJ":new Date('27-09-2021').toLocaleDateString()
  },
  {
    "name":"Rakesh Kapoor",
    "email":"rakesh@gmail.com",
    "password":"456",
    "empid":"E002",
    "designation":"Senior Software Engineer",
    "skills":"React, Angular, Ruby",
    "DOJ":new Date('01-12-2017').toLocaleDateString()
  },
  {
    "name":"Annmariya Benny",
    "email":"ann@gmail.com",
    "password":"980",
    "empid":"E003",
    "designation":"Associate Analyst",
    "skills":"Python, SQL",
    "DOJ":new Date('02-06-2020').toLocaleDateString()
  }
]
  let searchitem=document.getElementById("mysearch");
  console.log(searchitem);
  for(let i=0;i<edetails.length;i++)
  {
    if(edetails[i].empid==searchitem)
    {
      document.getElementById('value-name').innerHTML=edetails[i].name;
      document.getElementById('value-mail').innerHTML=edetails[i].email;
      document.getElementById('value-empid').innerHTML=edetails[i].empid;
      document.getElementById('value-skill').innerHTML=edetails[i].skills;
      document.getElementById('value-desig').innerHTML=edetails[i].designation;
      document.getElementById('value-doj').innerHTML=edetails[i].DOJ;
  }
}
}
*/












/*let details=[];

const savecontent=(ev)=>{
  ev.preventDefault();
  let content={
    name:document.getElementById('name').value,
    email:document.getElementById('email').value,
    password:document.getElementById('password').value
  }

  details.push(content);
  document.forms[0].reset();

  console.log('added',{details});
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('btn').addEventListener('click',savecontent);
});*/