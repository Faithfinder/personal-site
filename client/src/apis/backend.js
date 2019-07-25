import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:3001"
// });

const mockPositions = {};

mockPositions.get = () =>
  new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          id: 1,
          title: "First position",
          startDate: "20140501",
          endDate: "20150401",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          deserunt? Aut animi, aspernatur dolore laborum, tempora quibusdam
          quisquam mollitia, distinctio fugiat veritatis quam consequuntur
          totam rerum nam consectetur ratione corporis?`
        },
        {
          id: 2,
          title: "Second position",
          startDate: "20150401",
          endDate: "20191001",
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          deserunt? Aut animi, aspernatur dolore laborum, tempora quibusdam
          quisquam mollitia, distinctio fugiat veritatis quam consequuntur
          totam rerum nam consectetur ratione corporis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ab alias aliquam adipisci quaerat earum eaque temporibus, commodi magni inventore quam natus perferendis officiis aspernatur?`
        }
      ]
    });
  });

export default mockPositions;
