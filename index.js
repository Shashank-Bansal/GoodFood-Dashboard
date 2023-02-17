let chart1 = document.getElementById("chart1");
let config1 = {
  type: "bar",
  data: {
    labels: [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ],
    datasets: [
      {
        label: "Last 6 days     ",
        data: [11, 9, 10, 7, 12, 13, 11, 9, 10, 8, 12, 14],
        // borderWidth: 0.9,
        backgroundColor: "#5A6ACF",
      },
      {
        label: "Last Week",
        data: [6, 11, 5, 10, 9, 6, 6, 11, 5, 10, 9, 6],
        // borderWidth: 0.9,
        backgroundColor: "#E6E8EC",
        // barThickness: 10,
      },
    ],
  },

  options: {
    // barThickness:10,
    categoryPercentage: 0.45,
    barPercentage: 0.6,
    maintainAspectRatio: false,
    elements: {
      bar: {
        // barThickness: 0,
        // categoryPercentage:0.3,
      },
    },
    scales: {
      y: {
        // title: {
        //     display: false,
        // },
        border: {
          // dash: [4,8],
          // dash: null,
          dash: (i) => (i.tick.value === 0 ? null : [4, 8]),
          color: "#E2E7E7",
          width: 0,
        },

        ticks: {
          display: false,
          maxTicksLimit: 4,
        },

        grid: {
          display: true,
          lineWidth: 1.5,
        },
      },

      x: {
        grid: {
          display: false,
        },

        ticks: {
          color: "#737b8b80",

          font: {
            family: "Poppins",
            color: "rgba(115, 123, 139, 0.1)",
            opacity: 0.1,
            size: 12,
          },
        },

        // label: {
        // 	font: {
        // 		family: "Poppins",
        // 		// color: "#737B8B",
        // 		size: 50,
        // 	}
        // }
      },
    },

    layout: {
      padding: {
        left: -10,
      },
    },

    // chartArea: {left: -90, },

    plugins: {
      tooltip: {
        enabled: false,
      },

      legend: {
        display: true,
        position: "bottom",
        align: "start",
        // position: 'left',
        labels: {
          // ticks: {
          // 	font: {
          // 		family: "Poppins",
          // 		// color: "rgba(115, 123, 139, 0.5)",
          // 		color: "rgb(255,0,0)",
          // 		size: 20,
          // 	},
          // },
          boxHeight: 7,
          usePointStyle: true,
          pointStyle: "circle",

          font: {
            family: "Poppins",
            // color: "#ffffff",
            size: 13,
          },
        },
      },
    },
  },
};
// chart1.height = 70;

let barChart = new Chart(chart1, config1);

let chart2 = document.getElementById("chart2");
let config2 = {
  // type: "doughnut",
  type: "pie",
  data: {
    labels: ["Afternoon", "Evening", "Morning"],
    datasets: [
      {
        backgroundColor: ["#DEE1F4", "#ffffff", "#ffffff"],
        labels: ["Afternoon", "Evening", "Morning"],
        data: [1890, 1512, 1323],
      },
      {
        labels: ["Afternoon", "Evening", "Morning"],
        data: [1890, 1512, 1323],
        backgroundColor: ["#5A6ACF", "#8593ED", "#C7CEFF"],
      },
      {
        labels: ["Afternoon", "Evening", "Morning"],
        data: [1890, 1512, 1323],
        backgroundColor: ["#5A6ACF", "#8593ED", "#C7CEFF"],
      },
      {
        labels: ["Afternoon", "Evening", "Morning"],
        data: [1890, 1512, 1323],
        backgroundColor: ["#5A6ACF", "#8593ED", "#C7CEFF"],
      },
      {
        backgroundColor: ["#DEE1F4", "#ffffff", "#ffffff"],
        labels: ["Afternoon", "Evening", "Morning"],
        data: [1890, 1512, 1323],
      },
      {
        backgroundColor: ["#ffffff", "#ffffff", "#ffffff"],
        data: [1890, 1512, 1323],
      },
      {
        backgroundColor: ["#ffffff", "#ffffff", "#ffffff"],
        data: [1890, 1512, 1323],
      },
      {
        backgroundColor: ["#ffffff", "#ffffff", "#ffffff"],
        data: [1890, 1512, 1323],
      },
    ],
  },
  options: {
    segmentShowStroke: false,
    // cutout: 54,
    // cutout: 72,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 0,
        hoverBackgroundColor: ["#5A6ACF", "#8593ED", "#C7CEFF"],
      },
    },

    // elements: {
    //   // border: {
    //   //   top:0,
    //   //   right: 7,
    //   //   left: 7,
    //   //   bottom: 0,
    //   // },
    //   arc: {
    //     borderWidth: 0,
    //     // borderAlign: "center",
    //     // hoverBorderWidth: 7,
    //     // hoverBorderWidth: [0, 500, 20],
    //     // hoverBorderColor: "#DEE1F4",
    //     // borderColor: "#DEE1F4",
    //   },
    // },

    plugins: {
      // bodyFont: {
      //   size: "54px",
      //   weight: 500,
      //   color: "#ffffff80",
      // },

      tooltip: {
        fontColor: "#ffffff80",
        // fontColor: "red",
        bodyFont: {
          size: 12,
          weight: 500,
          color: "#ffffff80",
        },

        yAlign: "bottom",
        backgroundColor: "#37375C",

        titleFont: {
          size: "24px",
          weight: 500,
          color: "#FFFFFF",
        },

        footerFont: {
          size: "16px",
          weight: 500,
        },

        padding: {
          x: 15,
          y: 15,
        },
        callbacks: {
          label: (context) => {
            return null;
          },

          // title:()=>{
          //   return "title"
          // },
          // afterTitle: () => {
          //   // let label = context[0].dataset.label + "";
          //   // if (label === )
          //   return "1am - 4pm";
          // },
          // beforeBody: (context) => {
          //   let orders = context[0].dataset.data[0];
          //   console.log(context);
          //   if (!orders) return null;
          //   return orders + " orders";
          // },

          afterBody: () => {
            return "1am - 4pm";
          },

          beforeFooter: (context) => {
            let orders = context[0].dataset.data[0];
            if (!orders) return null;
            return orders + " orders";
          },
        },
      },

      legend: {
        display: false,
        position: "bottom",
        labels: {
          color: "#121212b3",
          usePointStyle: true,
          pointStyle: "circle",
          boxHeight: 7,
        },
      },
    },
  },
};

let doughnut = new Chart(chart2, config2);
// chart2.height = 10;

// let chart3 = document.getElementById("chart3");
// let config3 = {
//   type: "bubble",
//   data: {
//     datasets: [
//       {
//         label: "First Dataset",
//         data: [
//           {
//             x: 50,
//             y: 50,
//             r: 50,
//           },
//           {
//             x: 50,
//             y: 0,
//             r: 50,
//           },
//           {
//             x: 40,
//             y: 10,
//             r: 10,
//           },
//         ],
//         backgroundColor: "rgb(255, 99, 132)",
//       },
//     ],
//   },
//   options: {},
// };

// let bubbleChart = new Chart(chart3, config3);

let chart4 = document.getElementById("chart4");
let config4 = {
  type: "line",
  data: {
    labels: ["01", "02", "03", "04", "05", "06"],
    datasets: [
      {
        label: "Last 6 days     ",
        data: [33, 25, 66, 60, 30, 99],
        borderColor: "#5A6ACF",
        backgroundColor: "#5A6ACF",
      },
      {
        label: "Last Week",
        data: [57, 81, 30, 75, 60, 75],
        borderColor: "#E6E8EC",
      },
    ],
  },
  options: {
    maintainAspectRatio: false,

    layout: {
      padding: {
        left: -10,
      },
    },
    elements: {
      point: {
        radius: 0.8,
      },
    },

    scales: {
      y: {
        border: {
          dash: (i) => (i.tick.value === 0 ? null : [4, 8]),
          color: "#E2E7E7",
          width: 0,
        },

        ticks: {
          display: false,
          maxTicksLimit: 5,
          stepSize: 33,
        },

        grid: {
          display: true,
          lineWidth: 1.5,
        },
      },

      x: {
        ticks: {
          color: "#737b8b80",
        },

        grid: {
          display: false,
        },
      },
    },

    plugins: {
      tooltip: {
        enabled: false,
      },

      legend: {
        display: true,
        position: "bottom",
        align: "start",
        // position: 'left',
        labels: {
          color: "#121212b3",
          usePointStyle: true,
          pointStyle: "circle",
          boxHeight: 7,
          font: {
            family: "Poppins",
            // color: "#ffffff",
            size: 13,
          },
        },
      },
    },
  },
};

let lineChart = new Chart(chart4, config4);


function dashIn(i) {
  i.setAttribute("id", "dash");
}

function dashOut(i) {
  i.removeAttribute("id", "dash");
}

document.getElementById("topSection").onclick = openLink;
function openLink () {
  window.open("#", '_blank');
}

for (let i of Array.from(document.getElementsByTagName("button"))) {
  i.onclick = openLink;
}

for (let i of Array.from(document.getElementsByClassName("itemSection"))) {
    for (let j in i.childNodes[3].childNodes)
      if (j % 2 == 1) {
        i.childNodes[3].childNodes[j].onclick = openLink;
      }
}

document.getElementById('nav3').onclick = openLink;
document.getElementById('nav4').childNodes[0].onclick = openLink;