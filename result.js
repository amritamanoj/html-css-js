function search_empid()
{
  
  let edetails=[{

    "name":"Amrita Manoj",
    "email":"amrita@gmail.com",
    "password":"123",
    "empid":"E001",
    "designation":"Associate Software Engineer",
    "skills":"Python, C, C++",
    "DOJ":new Date('05-12-2021').toLocaleDateString()
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
var ct=0;
let sr=document.getElementById('search-id').value.toUpperCase();
console.log(sr);
for(let i=0;i<edetails.length;i++)
{
  if(edetails[i].empid==sr)
  {
    document.getElementById('sname').innerHTML=edetails[i].name;
      document.getElementById('smail').innerHTML=edetails[i].email;
      document.getElementById('sempid').innerHTML=edetails[i].empid;
      document.getElementById('sskill').innerHTML=edetails[i].skills;
      document.getElementById('sdesig').innerHTML=edetails[i].designation;
  }
  else{
    ct++;
  }
}
if(ct>4)
  alert("Employee does not exist");
}






