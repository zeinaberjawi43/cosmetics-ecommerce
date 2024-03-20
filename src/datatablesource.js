export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Mariam Safaoui",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "mariam@gmail.com",
      age: 23,
    },
    {
      id: 2,
      username: "Zeina Berjawe",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "zeina@gmail.com",
      status: "passive",
      age: 30,
    },
    {
      id: 3,
      username: "Mariam Saleh",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "mariam@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Dana",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "dana@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Farah",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "farah@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "youssef",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "youssef@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Ali",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "Ali@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Nadine",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "nadine@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Rose",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "rose@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Ali",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "ali@gmail.com",
      status: "active",
      age: 65,
    },
  ];