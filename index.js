const onMounted = (callback) => {
  document.addEventListener("DOMContentLoaded", callback);
};

async function getAllMotos() {
  const params = {};
  try {
    const response = await axios.get(
      "https://localhost:7053/api/moto/getData"
    );
    const motos = response.data;

    motos.forEach((item, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.rider}</td>
            <td>${item.nationality}</td>
            <td>${item.point}</td>
            <td>${item.leader}</td>
            <td>${item.previous}</td>
            <td>${item.qat}</td>
            <td>${item.ina}</td>
            <td>${item.arg}</td>
            <td>${item.ame}</td>
            <td>${item.por}</td>
            <td>${item.spa}</td>
            <td>${item.fra}</td>
            <td>${item.ita}</td>
            <td>${item.cat}</td>
            <td>${item.ger}</td>
            <td>${item.ned}</td>
            <td>${item.gbr}</td>
            <td>${item.aut}</td>
            <td>${item.rsm}</td>
            <td>${item.ara}</td>
            <td>${item.jpn}</td>
            <td>${item.tha}</td>
            <td>${item.aus}</td>
            <td>${item.mal}</td>
            <td>${item.val}</td>
  `;
      const table = document.querySelector("table");
      table.appendChild(tr);
    });
  } catch (error) {
    console.log("Lỗi khi lấy dữ liệu từ bảng: ", error);
  }
}

onMounted(() => {
  getAllMotos();
});